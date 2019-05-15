import React from "react";
import Aux from "../../hoc/Auxd";
import classes from './Layout.css'
const layout = props => (
  <Aux>
    <div>Toolbar,SideDraver,Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
