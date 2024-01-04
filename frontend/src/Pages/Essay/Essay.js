import React, { useState } from "react";
import "./Essay.css";
import Navbars from "../../components/Navbar/Navbar";
import MobileNav from "../../components/Navbar/MobileNav";
import MediaQuery from "react-responsive";
import mic from "../../assets/mic.png";
import chatbot from "../../assets/chatbot.png";
const Essay = () => {
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
        <div className="title">Group Essay</div>
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
              As a group, read the question carefully and thoroughly discuss
              crucial points.
            </li>
            <li>
              Plan the essay together, ensuring that each participant has a
              defined responsibility.
            </li>
            <li>
              Integrate individual contributions into an essay as precisely as
              possible.
            </li>
            <li>
              In the introduction, establish your group thesis statement
              clearly.
            </li>
            <li>
              Create ideas in well-organized paragraphs, with each participant
              in charge of a specific section.
            </li>
            <li>
              Provide relevant information or instances to back up your claims.
            </li>
            <li>
              Maintain smooth transitions between paragraphs to demonstrate a
              coherent collective effort.
            </li>
            <li>
              Finish your essay by reiterating crucial arguments and restating
              your overall theme.
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

export default Essay;
