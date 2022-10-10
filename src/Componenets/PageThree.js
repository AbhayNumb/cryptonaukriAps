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
function PageThree() {
  return (
    <div className="pageonecont">
      <Card sx={{ width: 500, height: 600 }}>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ marginLeft: "25rem" }}>Step 02/03</div>
          <div>
            <i style={{ color: "Blue", marginLeft: "24rem" }}>Residency Info</i>
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
          Complete Your Profile
        </div>
        <div style={{ marginLeft: "4rem", marginRight: "3rem" }}>
          For the purpose of industry regulation, your details are required.
        </div>
        <div style={{ paddingLeft: "5rem", paddingTop: "1rem" }}>
          <div>Phone Number</div>
          <TextField
            size="small"
            style={{ height: "0.1rem", width: "20rem", paddingTop: "0.3rem" }}
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
          />
        </div>
        <div style={{ paddingLeft: "5rem", paddingTop: "1.5rem" }}>
          <div>Your Address</div>
          <TextField
            size="small"
            style={{ height: "0.5rem", width: "20rem", paddingTop: "0.3rem" }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
        </div>
        <div style={{ paddingLeft: "5rem", paddingTop: "1.5rem" }}>
          <div>Country Of Residence</div>
          <TextField
            size="small"
            style={{ height: "0.5rem", width: "20rem", paddingTop: "0.3rem" }}
            id="outlined-basic"
            label="Country"
            variant="outlined"
          />
        </div>
        <div style={{ paddingLeft: "5.2rem", paddingTop: "3rem" }}>
          <Button style={{ width: "20rem" }} variant="contained">
            Save & Continue
          </Button>
        </div>
        <div style={{display:'flex',paddingTop:'1rem',alignItems: 'center',paddingLeft:'8rem'}}>
        <i
          class="material-icons"
          style={{ color: "grey", paddingRight: "1rem", fontSize: "1rem" }}
        >
          lock
        </i>
        <div>Your info is safely secured</div>
        </div>
        <div style={{ marginLeft: "21rem", marginTop: "3.5rem" }}>
          <Link style={{ textDecoration: "none" }} to="pagetwo">
            <Button href="#text-buttons">Prev</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="pagefour">
            <Button href="#text-buttons">Next</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default PageThree;
