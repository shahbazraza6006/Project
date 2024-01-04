import React, { useState } from "react";
import Navbars from "../../components/Navbar/Navbar";
import MobileNav from "../../components/Navbar/MobileNav";
import MediaQuery from "react-responsive";
import mic from "../../assets/mic.png";
import chatbot from "../../assets/chatbot.png";
const Maths = () => {
  const [inputs, setInputs] = useState([{ showButton: true }]); // State to manage input fields and '+' button visibility

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
      <div className="micimage">
        <img src={mic} alt="mic" />
      </div>
      <div className="containeressay">
        <div className="title">MATHS</div>
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
              Read and comprehend the algebraic issue or topic collaboratively.
            </li>
            <li>
              Create a clear strategy that details each step of the solution or
              exploration.
            </li>
            <li>
              Based on their strengths, assign each group member specific roles
              or responsibilities.
            </li>
            <li>
              Participate actively in all levels of problem solution to ensure a
              solid mastery of algebraic principles.
            </li>
            <li>
              Collaborate to solve challenges by demonstrating clear methods and
              explanations.
            </li>
            <li>
              Prepare a group presentation or report that demonstrates equal
              understanding and participation in algebraic ideas.
            </li>

            <li style={{ fontWeight: "bold" }}>Total Possible Points = 10</li>
          </ul>
        </div>
        <button className="buttonbegin">Begin</button>
      </div>
      <div className="botbuttons">
        <img src={chatbot} alt="chatbot" />
      </div>
    </div>
  );
};

export default Maths;
