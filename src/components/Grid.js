import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "70vw",
}));

export default function ColumnsGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item columnSpacing={2}>
          {console.log(props)}
          <Item>
            <h1>{props.item.title}</h1>
            <p style={{ textAlign: "right" }}>{props.item.date}</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
