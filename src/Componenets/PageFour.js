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
function PageFour() {
  return (
    <div className="pageonecont">
      <Card sx={{ width: 500, height: 600 }}>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ marginLeft: "25rem" }}>Step 03/03</div>
          <div>
            <i style={{ color: "Blue", marginLeft: "22.8rem" }}>Bank Verification</i>
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
          <div>Bank verification Number (BVN)</div>
          <TextField
            size="small"
            style={{ height: "0.1rem", width: "20rem", paddingTop: "0.3rem" }}
            id="outlined-basic"
            label="BVN"
            variant="outlined"
          />
        </div>
        
        <div style={{ paddingLeft: "5.2rem", paddingTop: "2.5rem" }}>
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
        <div style={{ marginTop: "12.4rem", marginLeft: "24.8rem" }}>
          <Link style={{ textDecoration: "none" }} to="/cryptonaukriAps/pagethree">
            <Button href="#text-buttons">PREV</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default PageFour