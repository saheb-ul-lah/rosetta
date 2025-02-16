import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(()=>{
    axios.get("http://localhost:5000/")
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.error(error);
      });
  },[])
  return (
    <h1 className='text-3xl font-bold underline text-center'>
      Hello from the frontend!
    </h1>
  );
}

export default App;
