import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
function Header(){
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "white" ,position:"relative", textAlign: "center"}} >
        <Toolbar sx={{ backgroundColor: "white" ,position:"relative", textAlign: "center"}}>
          <NavLink to="/" style={{ color: "black" }} >
  <img height="50px" width="150px" src="https://cdn.dribbble.com/users/49803/screenshots/6366399/pixel_logo_design_4x.jpg"></img>
  
           </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab style={{color:"black"}} LinkComponent={NavLink} to="/Photos" label="Photos" />
             <Tab style={{color:"black"}} LinkComponent={NavLink} to="/add" label="Add Yours" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
