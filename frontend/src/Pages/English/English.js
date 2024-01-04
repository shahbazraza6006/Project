import React, { useState } from "react";
import Navbars from "../../components/Navbar/Navbar";
import MobileNav from "../../components/Navbar/MobileNav";
import MediaQuery from "react-responsive";
import mic from "../../assets/mic.png";
import chatbot from "../../assets/chatbot.png";
const English = () => {
  const [inputs, setInputs] = useState([{ showButton: true }]); // State to manage input fields and '+' button visibility

  // Function to add a new input field with toggle button visibility
  const addInput = () => {
    const newInputs = [...inputs];
    newInputs.push({ showButton: true });
    newInputs[inputs.length - 1].showButton = false;
    setInputs(newInputs);
  };

  return (
    <div>
      <MediaQuery minWidth={720}>
        {(matches) => (matches ? <Navbars></Navbars> : <MobileNav></MobileNav>)}
      </MediaQuery>
      <div className='micimage'>
        <img src={mic} alt="mic" />
      </div>
      <div className="containeressay">
        <div className="title">English</div>
        <div className="content">
          {inputs.map((input, index) => (
            <div key={index} className="inputContainer">
              <input
                type="text"
                id={`groupMembers${index}`}
                placeholder="Group Member Name"
                className="inputessay"
              />
              {input.showButton && (
                <button className="addButton" onClick={addInput}>
                  +
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="essay">
          <div className="heading">Instructions:</div>
          <ul className="instructions">
            <li>
              Enter the names of your group members in the input fields
              provided.
            </li>
            <li>
            Read the prompt or task aloud as a group to verify that everyone understands the requirements.
            </li>
            <li>
            Collaboratively discuss and prepare your approach to the assignment.
            </li>
            <li>
            Assign tasks or responsibilities to each group member (for example, research, drafting, and editing).

            </li>
            <li>
            Contribute actively to the writing process to ensure a cohesive and well-structured final output.

            </li>
            <li>
            During the drafting and editing rounds, give each other helpful criticism.

            </li>
            <li>
            Ascertain that the final document is the result of a joint effort with equal involvement.

            </li>
            
           
            <li style={{fontWeight:"bold"}}>
            Total Possible Points = 10

            </li>
          </ul>
        </div>
        <button className="buttonbegin">Begin</button>
      </div>
      <div className='botbuttons'>
     
     <img src={chatbot} alt="chatbot" />
</div>
    </div>
  );
};

export default English;
