import React, { useEffect, useState } from "react";
import react from "../image/react.png";
import java from "../image/java.png";
import node from "../image/node.png";
import js from "../image/js.png";
import redux from "../image/redux.png";
import tailwind from "../image/tailwind.png";
import Dictaphone from "./SpeechRecognition";
import axios from "axios"
const REACT = [
  "Can you please introduce yourself and provide an overview of your experience working with the MERN stack? Highlight any notable projects or challenges you've tackled.",
  "What is MERN stack? Explain the components of MERN.",
  "How does React Router differ from traditional routing?",
  "What is JSX? How does it differ from HTML?",
  "Explain the concept of state and props in React.",
];
const NodeJs = [
  "To start, could you briefly introduce yourself and give us an overview of your background as a Node.js backend developer?",
  "What is Node.js? How does it differ from traditional server-side technologies?",
  "How does Node.js handle asynchronous operations? Provide an example.",
  "Explain the concept of the event loop in Node.js.",
  "What is the purpose of middleware in an Express.js application?",
];

const Java = [
  "Let's begin with a brief introduction. Could you share your background as a Java developer with a focus on Spring Boot?",
  "What is Spring Framework? How does Spring Boot simplify application development?",
  "Explain the concept of inversion of control (IoC) in the context of Spring.",
  "What is dependency injection? How is it achieved in Spring?",
  "Describe the annotations @Component, @Service, @Repository, and @Controller in Spring.",
];
function Dashboard() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [recordedText, setRecordedText] = useState<string | null>(null);
  const [timer, setTimer] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const [feedback,setFeedback]=useState(false)
  const [question, setQuestion] = useState("")
  const [response,setResponse]=useState([])
  const handleClick = (courseValue: string) => {
    setSelectedCourse(courseValue);
  };

  useEffect(() => {
    console.log(selectedCourse);
    if (selectedCourse === "REACT") {
      setQuestion(REACT[index]);
    }
    if (selectedCourse === "nodejs") {
      setQuestion(NodeJs[index]);
    }
    if (selectedCourse === "Java") {
      setQuestion(Java[index]);
    }
  }, [index, selectedCourse]);
  const handleStartButtonClick = () => {
    setIsStarted(true); // Enable timer and voice recognition
  };
  const handleDictaphoneText = (text: string) => {
    setRecordedText(text);
  };
  const handleNextQuestion=()=>{
    if (index < `${selectedCourse}`.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setFeedback(false)
    console.log(question,"Question")
  }
  let Prompot =`Use the DUBX method  D for Defination, U for Use Case, B for Benefits, X  for Extra Information,
  Now you have this question ${question} and answer ${recordedText} provide me with the feedback on the above answer using the Method provided and five score on the scale of 1 to 10 and area of improvements and at last provide the correct answer using the above DUBX method`;
  const URL=`http://localhost:8080/bot/chat?prompt=${Prompot}`
  const handleSubmit = () => {
    console.log(URL)
    
    setFeedback(true);
  axios.get(URL).then((res)=>setResponse(res.data))
  .catch((e)=>console.log(e));
 
  };
  // setQuestion(mearn[index])
  // console.log(mearn[index], "Text");/
console.log(response,"REsponse")
  return (
    <div>
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <div className="text-center mt-10">
        <h2 className="text-2xl text-custom-teal font-serif italic font-bold">
          Elevate Your Interview Game In{" "}
        </h2>
      </div>
      <div className="flex justify-center mt-10 gap-10 w-full hover:zoom">
        <img
          // value="React"
          onClick={() => handleClick("REACT")}
          className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3"
          src={react} // Make sure `react` is a valid variable holding your image source
          alt=""
        />
        <img
          onClick={() => handleClick("NodeJs")}
          className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3"
          src={node} // Make sure `node` is a valid variable holding your image source
          alt=""
        />
        <img
          onClick={() => handleClick("Java")}
          className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3   "
          src={java}
          alt=""
        />
        <img
          className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3   "
          src={tailwind}
          onClick={() => handleClick("Tailwind-CSS")}
          alt=""
        />
        <img
          onClick={() => handleClick("Redux")}
          className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3   "
          src={
            "https://cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png"
          }
          alt=""
        />
        <img
          onClick={() => handleClick("JavaScript")}
          className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3   "
          src={"https://www.code2inspire.com/icons/jsIcon.png"}
          alt=""
        />
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <h2 className="text-2xl text-custom-teal font-serif italic font-bold">
        {selectedCourse ? (
          <button
          
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-5 mt-10"
            onClick={handleStartButtonClick}
          >
            {selectedCourse}
          </button>
        ) : (
          <div className="ml-10 mt-10">
          Select a Course
          </div>
        )}
      </h2>

      {isStarted && (
        <div className="ml-14 mr-10">
          <h2>Question:</h2>
          <p>{question}</p>
        </div>
      )}

      {isStarted && (
        <div className="mt-10 ml-14 mr-10">
          <h2>Your Answer:</h2>
          <p className="w-160 h-160 ml-10 mr-10  border border-2">
            Recorded Text: {recordedText}
          </p>
        </div>
      )}

{feedback && (
  <div className="mt-10 ml-14 mr-10">
    <h2>Feedback</h2>
    <div className="w-160 h-160 ml-10 mr-10 border border-2">
      {Array.isArray(response) && response.length > 0 ? (
        response.map((ele, index) => <p key={index}>{ele}</p>)
      ) : (
        <p>Please Wait</p>
      )}
    </div>
  </div>
)}

      {isStarted && (
        <Dictaphone onTextChange={handleDictaphoneText} isStarted={isStarted} />
      )}
      {isStarted && (
        <div>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-10 mt-5"
          onClick={handleSubmit}
        >
          Submit Data
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-10 mt-5"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
