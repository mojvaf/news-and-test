import React from "react";
import Question from "./Question";
import asian from "./image/asian.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Main = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography>should</Typography>
          <img src={asian} className="pic " />
        </Grid>
        <Grid item xs={3}>
          <Question />
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
