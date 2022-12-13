import { myProfileData } from "./data";
import "./WelcomeMessage.css";

const WelcomeMessage = () => {
   return (
      <h2 className="welcome-message">Welcome to the friend tracker app, {myProfileData.name}</h2>
   );
};

export default WelcomeMessage;
