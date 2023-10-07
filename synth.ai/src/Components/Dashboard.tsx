import React, { useState } from "react";
import react from "../image/react.png";
import java from "../image/java.png";
import node from "../image/node.png";
import js from "../image/js.png";
import redux from "../image/redux.png";
import tailwind from "../image/tailwind.png";
import Dictaphone from './SpeechRecognition';
function Dashboard() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [isStarted, setIsStarted] = useState(false);
    const [recordedText, setRecordedText] = useState<string | null>(null);
    const [timer, setTimer] = useState<number | null>(null); 
    const handleClick = (courseValue: string) => {
      setSelectedCourse(courseValue);
    
    };

    const handleStartButtonClick = () => {
        setIsStarted(true); // Enable timer and voice recognition
      };
      const handleDictaphoneText = (text: string) => {
        setRecordedText(text);
      };
  const handleSubmit = () => {
    console.log(recordedText,"Text")
  };

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
        onClick={() => handleClick("React")}
        className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3"
        src={react} // Make sure `react` is a valid variable holding your image source
        alt=""
      />
      <img
        onClick={() => handleClick("Node")}
        className="w-1/12 transition-transform transform scale-100 hover:scale-110 border-4 border-custom-green rounded-full p-3"
        src={node} // Make sure `node` is a valid variable holding your image source
        alt=""
      />
        <img
           onClick={() => handleClick("JAVA")}
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
         {selectedCourse?(<button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-10 mt-10"
          onClick={handleStartButtonClick}
        >
         {selectedCourse}
        </button>):"Select a Course"}
        </h2>

        {recordedText && <p className='w-160 h-160 ml-10 mr-10 mt-10 border border-2'>Recorded Text: {recordedText}</p>}

      {selectedCourse&&<Dictaphone onTextChange={handleDictaphoneText} isStarted={isStarted} />}
       {selectedCourse&&<button
          className='bg-green-500 text-white font-bold py-2 px-4 rounded ml-10 mt-10'
          onClick={handleSubmit}
        >
          Submit Data
        </button>}


    </div>
  );
}

export default Dashboard;
