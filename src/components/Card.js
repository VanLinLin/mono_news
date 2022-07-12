import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import logo from "../assets/logo.svg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ width: 275, margin: "8px" }}>
      <CardContent>
        <img src={logo} alt="logo" />
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDdirection: "column",
          }}
        >
          {props.content}
        </p>
      </CardContent>
    </Card>
  );
}
