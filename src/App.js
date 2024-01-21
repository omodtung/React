import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const user = {
  name: " The Tung",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];


function App()
{
  return(
    <div>
    <h1>Counters that update separately</h1>
    <MyButton />
    <MyButton />
    </div>
  );
}

function MyButton()
{
  const [count ,setCount] =useState(0);
  function handleClick ()
  {
    setCount(count +1 );

  }

  

return(
<button onClick={handleClick}>
  click {count} times
</button>

);


  
}

function App3() {
  const listItem = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <ul>{listItem}</ul>
  );
}
function App1() {
  return (
    <>
      {/* Display Data */}
      <h1> {user.name}</h1>
      {/*  */}

      {/* adding style */}

      <img
        className="avatar"
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default App;
