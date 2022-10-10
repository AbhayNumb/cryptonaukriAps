import React from "react";
import "./PageOne.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LooksIcon from "@mui/icons-material/Looks";
import DoneIcon from "@mui/icons-material/Done";
import { maxHeight } from "@mui/system";

function RemainSame() {
  return (
    <div className="pageonecontleft">
      <Card
        sx={{ width: 500, height: 600 }}
        style={{ backgroundColor: "#2D75DC" }}
      >
        <div style={{display:'flex'}}>
        <div className="lookcont">
          <div className="look1">
            <i class="material-icons">looks</i>
          </div>
          <div className="look2">
            <i className="material-icons">looks</i>
          </div>
        </div>
        <div className="Oasis">Oasis.</div>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "10rem",
            color: "white",
            letterSpacing: 3,
          }}
        >
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software.
        </Typography>
        <div className="tickicon">
          <i class="material-icons">done</i>
        </div>
      </Card>
    </div>
  );
}

export default RemainSame;
