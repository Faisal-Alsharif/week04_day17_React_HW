import logo from './logo.svg';
import './App.css';
import Tweets from "./components/Tweets"
import TweetsList from "./components/TweetsList"
function App() {
  
// array of objects
  const obj = [
    {
      name:"Sara",
      image: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
      tweets:["happy Monday"]
    },
    {
      name:"Ahmed",
      image: "https://teamgreen.org.in/wp-content/uploads/2019/07/boy-avatar-3.png",
      tweets:["Everyone can make you smile, But... Only certain people Can make you happy."]
    },
    {
      name:"Khalid",
      image: "https://teamgreen.org.in/wp-content/uploads/2019/07/boy-avatar-3.png",
      tweets:["hello twitter","today is greate day"]
    }
  ]
  return (
    <div className="App">
      <Tweets user = {obj[0]} ></Tweets>
      <Tweets user = {obj[1]} ></Tweets>
      <Tweets user = {obj[2]} ></Tweets>
    </div>
  );
}

export default App;