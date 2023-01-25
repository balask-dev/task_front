import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./photo.css";
function Photo(props) {
  const history = useNavigate();
  const { _id, name, location, description, price, image } = props.pic;
  async function deleteHandler () {
    await axios
      .delete(`https://taskapp-cefm.onrender.com/photos/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
     };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>Image By: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Category: {description}</h4>
       <Button LinkComponent={Link} to={`/photos/${_id}`} sx={{ mt: "auto" }}>
        Edit
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Remove
      </Button>
    </div>
  );
};

export default Photo;
