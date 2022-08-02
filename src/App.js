import { Fragment } from "react";
import "./App.css";
import Category from "./component/Category";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Category/>
    </Fragment>
  );
}

export default App;
