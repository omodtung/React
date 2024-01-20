import logo from "./logo.svg";
import "./App.css";

const  user =
{
  name : " The Tung",
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize :90,
};

function App() {
return(
  <>
{/* Display Data */}
    <h1>  {user.name}</h1>
{/*  */}
    
    {/* adding style */}

    <img

      className ="avatar"
      src ={user.imageUrl}
      alt = {'photo of'+user.name}

      style=
      {{
        width :user.imageSize,
        height:user.imageSize
      }}
    />
  </>
);
}



export default App;


