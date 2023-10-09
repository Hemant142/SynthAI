package com.chatbot.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.chatbot.dto.ChatGPTRequest;
import com.chatbot.dto.ChatGptResponse;

@RestController
@RequestMapping("/bot")
@CrossOrigin(origins = "*")
public class CustomBotController {

    @Value("${openai.model}")
    private String model;

    @Value(("${openai.api.url}"))
    private String apiURL;

    @Autowired
    private RestTemplate template;

    @GetMapping("/chat")
    public List<String> chat(@RequestParam("prompt") String prompt){
        ChatGPTRequest request = new ChatGPTRequest(model, prompt);
        ChatGptResponse chatGptResponse = template.postForObject(apiURL, request, ChatGptResponse.class);
        
        // Split the response content based on newline characters
        String content = chatGptResponse.getChoices().get(0).getMessage().getContent();
        List<String> responseList = Arrays.asList(content.split("\n"));

        return responseList;
    }
}