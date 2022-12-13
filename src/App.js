import "./App.css";
import ProfileInfo from "./ProfileInfo";
import WelcomeMessage from "./WelcomeMessage";

function App() {
   return (
      <div>
         <h1>Friend Tracker</h1>
         <WelcomeMessage />
         <ProfileInfo />
      </div>
   );
}

export default App;
