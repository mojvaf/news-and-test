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
          <img src={asian} className="pic " />
          <Typography>should kids go back to school?</Typography>
          <p>lkdalk lklaska ioi asdoisda oisd aosid oidsa oaisd</p>
          <p>lkdalk lklaska ioi asdoisda oisd aosid oidsa oaisd</p>
          <p>lkdalk lklaska ioi asdoisda oisd aosid oidsa oaisd</p>
          <p>lkdalk lklaska ioi asdoisda oisd aosid oidsa oaisd</p>
          <p>lkdalk lklaska ioi asdoisda oisd aosid oidsa oaisd</p>
          <p>lkdalk lklaska ioi asdoisda oisd aosid oidsa oaisd</p>
        </Grid>
        <Grid item xs={3}>
          <Question />
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
