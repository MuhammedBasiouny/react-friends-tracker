import "./App.css";

function App() {
   const myProfileData = {
      name: "Muhammed Basiount",
      profilePicUrl: `${process.env.PUBLIC_URL}/my-profile-pic.png`,
      age: 100,
      bio: "I like to program, I also like food",
      birthday: "March 1",
      interests: ["Programming", "Data Science", "Gardening", "Foreign Languages"],
   };

   return (
      <div>
         <h1>Friend Tracker</h1>
         <div>
            <img src={myProfileData.profilePicUrl} alt={myProfileData.name} height="200" />
            <h2>My Profile</h2>
            <h3>Name</h3>
            <p>{myProfileData.name}</p>
            <h3>Age</h3>
            <p>{myProfileData.age}</p>
            <h3>Bio</h3>
            <p>{myProfileData.bio}</p>
            <h3>Birthday</h3>
            <p>{myProfileData.birthday}</p>
            <h3>Interests</h3>
            <p>{myProfileData.interests.join(", ")}</p>
         </div>
      </div>
   );
}

export default App;
