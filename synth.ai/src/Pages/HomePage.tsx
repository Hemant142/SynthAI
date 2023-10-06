import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />

      <div className="bg-blue-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
            Prepare for Your Developer Interviews
          </h2>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="md:w-1/2">
              <img
                className="h-64 w-full object-cover md:rounded-lg"
                src="https://blog.vantagecircle.com/content/images/size/w1500/2019/04/interview-questions.png"
                alt="Interview Preparation"
              />
            </div>
            <div className="md:w-1/2 md:ml-10">
              <p className="text-xl text-gray-700 mb-4">
                Get ready to ace interviews for various developer roles,
                including Software Developer, Full Stack Developer, Front End
                Developer, MERN Stack Developer, React Developer, Node.js
                Backend Developer, Java Backend Developer, and more.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Our AI-powered platform offers a comprehensive collection of
                interview questions, coding challenges, and expertly crafted
                solutions to help you succeed in your dream job interviews.
              </p>
              <a
                href="/signup" // Replace with your signup page URL
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-center inline-block mt-4 transition duration-300"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      <Features />

      <Footer />
    </div>
  );
};

export default HomePage;
