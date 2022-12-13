import { myProfileData } from "./data";

const WelcomeMessage = () => {
   return <h2>Welcome to the friend tracker app, {myProfileData.name}</h2>;
};

export default WelcomeMessage;
