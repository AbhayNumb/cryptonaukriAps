import React from "react";
import "./PageOne.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import LooksIcon from "@mui/icons-material/Looks";
import TextField from "@mui/material/TextField";

import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { maxHeight } from "@mui/system";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function PageTwo() {
  return (

    <div className="pageonecont">
      <Card sx={{ width: 500, height: 600 }}>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ marginLeft: "25rem" }}>Step 01/03</div>
          <div>
            <i style={{ color: "Blue", marginLeft: "24.8rem" }}>Personal Info</i>
          </div>
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginLeft: "4rem",
            marginTop: "1rem",
          }}
        >
          Register Individual Account
        </div>
        <div style={{ marginLeft: "4rem", marginRight: "3rem" }}>
          To begin this journey, tell us what type of account you’d be opening.
        </div>
        <div style={{paddingLeft:'5rem',paddingTop:'1rem'}}>
          <div>Your Fullname</div>
          <TextField size="small" style={{height:'0.1rem',width:'20rem',paddingTop:'0.3rem'}} id="outlined-basic" label="FullName" variant="outlined" />
        </div>
        <div style={{paddingLeft:'5rem',paddingTop:'1.5rem'}}>
          <div>Email Address</div>
          <TextField size="small" style={{height:'0.5rem',width:'20rem',paddingTop:'0.3rem'}} id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div style={{paddingLeft:'5rem',paddingTop:'1.5rem'}}>
          <div>Create Password</div>
          <TextField size="small" style={{height:'0.5rem',width:'20rem',paddingTop:'0.3rem'}} id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div style={{paddingLeft:'5rem',paddingTop:'1rem',display:'flex',alignContent:'flex'}}>
          <Checkbox {...label} defaultChecked />
          <div style={{paddingTop:'0.5rem'}}>I agree to terms & conditions</div>
        </div>
        <div style={{paddingLeft:'5.4rem'}}><Button style={{width:'20rem'}} variant="contained">Register Account</Button></div>
        <div style={{paddingLeft:'15rem', fontWeight:'lighter'}} >OR</div>
        <div style={{paddingLeft:'5.4rem'}}><Button style={{width:'20rem'}} variant="outlined">Login with Google</Button></div>
        <div style={{ marginLeft: "21rem" ,marginTop:'2rem'}}>
          <Link style={{ textDecoration: "none" }} to="/cryptonaukriAps">
            <Button href="#text-buttons">Prev</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/cryptonaukriAps/pagethree">
            <Button href="#text-buttons">Next</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default PageTwo;
