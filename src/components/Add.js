import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
 } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add(){
  const history = useNavigate();
  const [inputs, setInputs] = useState({name: "", description: "",price: "",location: "",image: "",
  });
  const [checked, setChecked] = useState(false);
     const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
   };

   async function sendRequest(){
    await axios
      .post("https://taskapp-cefm.onrender.com/photos", {
        name: String(inputs.name),
        location: String(inputs.location),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  function handleSubmit(e){
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/Photos"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{marginTop:"50px",fontSize:"30px",marginLeft:"800px",fontFamily:"'Montserrat', sans-serif"}}>Upload Your Content</div>
      <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={15}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Location</FormLabel>
        <TextField
          value={inputs.location}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="location"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
      
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        

        <Button variant="contained" type="submit">
          Add Pic
        </Button>
      </Box>
    </form>
  );
};

export default Add;
