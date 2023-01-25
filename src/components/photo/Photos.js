import React, { useEffect, useState } from "react";
import "./photo.css";
import axios from "axios";
import Photo from "./Photo";
const URL = "https://taskapp-cefm.onrender.com/photos";

async function fetchHandler (){
  return await axios.get(URL).then((res) => res.data);
};
function Photos (){
  const [pics, setpics] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setpics(data.pics));
  }, []);
  console.log(pics);
  return (
    <div>
       <ul>
        <div style={{display:"flex"}} className="container">
        {pics &&
          pics.map((pic, i) => (
            <li key={i}>
              <Photo pic={pic} />
            </li>
          ))}
          </div>
      </ul>
    </div>
  );
};

export default Photos;
