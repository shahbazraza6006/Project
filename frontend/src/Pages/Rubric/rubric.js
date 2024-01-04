import React from 'react';
import MediaQuery from 'react-responsive';
import Navbars from '../../components/Navbar/Navbar';
import MobileNav from '../../components/Navbar/MobileNav';
import chatbot from "../../assets/chatbot.png";
import mic from "../../assets/mic.png";
import './rubric.css'; // CSS file for styling

const Rubric = () => {
  return (
    <div>
      <MediaQuery minWidth={720}>
        {(matches) =>
          matches ? <Navbars /> : <MobileNav />
        }
      </MediaQuery>
      <div className='micimage'>
        <img src={mic} alt="mic" />
            </div>
      <div className="rubric-container">
        <div className='top-color'>
          <h1>Greetings, Students</h1>
          <p>Welcome to the E-VOLVE group work evaluation!</p>
          <p>This rubric was created to help you evaluate your group project's combined efforts and individual contributions.</p>
        </div>
        <div className="rubric-instructions">
          <h2>Instructions:</h2>
          <table className="rubric-table">
            <tbody>
              <tr className='bold-th'>
                <th>Criteria</th>
                <th>Points</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Collaboration</td>
                <td>2 Points</td>
                <td>This criterion assesses your ability to effectively collaborate with your team members. Actively participate in discussions, listen to others' views, and constructively add to the team's total effort.</td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>2 Points</td>
                <td>Effective communication is essential for collaborative success. Express your ideas clearly, actively listen to your teammates, and make certain that all members are informed and involved.</td>
              </tr>
              <tr>
                <td>Task Distribution</td>
                <td>2 Points</td>
                <td>Task distribution is critical to the success of any project. When allocating positions, consider each member's abilities and interests, and make sure everyone understands their obligations.</td>
              </tr>
              <tr>
                <td>Work Quality</td>
                <td>2 Points</td>
                <td>Aim for high-quality work that meets or exceeds project standards. Thoroughness, attention to detail, and a dedication to quality are required.</td>
              </tr>
              <tr>
                <td>Problem Solving</td>
                <td>2 Points</td>
                <td>Actively contribute to group problem-solving. Identify problems, provide solutions, and work together to overcome hurdles.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional content */}
        <div className="additional-table">
          <h2>Additional Information:</h2>
          <ul className="ad">
         
          <li>Your group will be evaluated as a whole, but individual contributions are critical. Make sure to effectively communicate and coordinate in order to maximise the strengths of each team member. Only one member may submit the test, however all group members' names must be included.</li>
          <li>This rubric is intended to aid in self-reflection and progress. Use the feedback to discover areas for improvement and think about how you may improve your collaborative skills in future projects.</li>
          <li>Please contact your instructor if you have any queries about the rubric or the assessment process.</li>
          <li>Best wishes on your collaborative project! We are excited to witness your combined efforts and the wonderful work you will generate.</li>
       
        </ul>

        </div>
        <h4 className='bw'>Best wishes, E-VOLVE</h4>
      </div>
      <div className='botbuttons'>
     
     <img src={chatbot} alt="chatbot" />
        </div>
    </div>
    
  );
}

export default Rubric;
