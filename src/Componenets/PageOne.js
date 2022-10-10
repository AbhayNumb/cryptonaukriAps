import React from "react";
import "./PageOne.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import LooksIcon from "@mui/icons-material/Looks";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { maxHeight } from "@mui/system";
import TextField from '@mui/material/TextField'
export default function PageOne() {
  return (
    <div className="pageonecont">
      <Card sx={{ width: 500, height: 600 }}>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          <div style={{ marginLeft: "15rem" }}>Already have an account? </div>
          <div>
            <i style={{ color: "Blue" }}>Sign In</i>
          </div>
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginLeft: "4rem",
            marginTop: "3rem",
          }}
        >
          Join Us!
        </div>
        <div style={{ marginLeft: "4rem", marginRight: "3rem" }}>
          For the purpose of industry regulation, your details are required.
        </div>
        <div>
          <Button
            style={{
              height: "4rem",
              width: "25rem",
              marginTop: "2rem",
              marginLeft: "3.5rem",
            }}
            variant="outlined"
          >
            <i
              class="material-icons"
              style={{ color: "black", paddingRight: "1rem", fontSize: "3rem" }}
            >
              account_circle
            </i>
            <div>
              <div
                style={{ color: "black", display: "flex", marginLeft: "6rem" }}
              >
                Individual<i class="material-icons">arrow_forward</i>
              </div>
              <div style={{ fontSize: "0.7rem", color: "Black" }}>
                Personal account to manage all you activities.
              </div>
            </div>
          </Button>
        </div>
        <div>
          <Button
            style={{
              height: "4rem",
              width: "25rem",
              marginTop: "2rem",
              marginLeft: "3.5rem",
            }}
            variant="outlined"
          >
            <i
              class="material-icons"
              style={{ color: "black", paddingRight: "1rem", fontSize: "3rem" }}
            >
              work
            </i>
            <div>
              <div
                style={{ color: "black", display: "flex", marginLeft: "6rem" }}
              >
                Business<i class="material-icons">arrow_forward</i>
              </div>
              <div style={{ fontSize: "0.7rem", color: "Black" }}>
                Own or belong to a company, this is for you.
              </div>
            </div>
          </Button>
        </div>
        <div style={{ marginTop: "9.9rem", marginLeft: "25rem" }}>
          <Link style={{ textDecoration: "none" }} to="pagetwo">
            <Button href="#text-buttons">Next</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
