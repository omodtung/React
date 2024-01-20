import logo from "./logo.svg";
import "./App.css";

const  user =
{
  name : " The Tung",
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize :90,
};
const products=
[

  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
function App()
{

}
function App1() {
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


