import React from "react";
//import "./style.scss";

export default function Webpage() {
  return (
    <React.Fragment>
      <React.Fragment>
        <header style={styles.header}>
          <h1>home - page - header</h1>
        </header>
      </React.Fragment>
      <div style={styles.container}>
        <div style={styles.menu}>
          <p>home - page - menu</p>
        </div>
        <div style={styles.details}>
          <p>home - page - details</p>
        </div>
      </div>
    </React.Fragment>
  );
}

const styles = {
  container: {
    minHeight: "32em",
    margin: "10px",
    display: "flex",
  },

  menu: {
    flex: "30%",
    backgroundColor: " #dbd35e",
    padding: "10px",
    borderStyle: "solid",
    borderColor: "purple",
    color: "white",
    textAlign: "center",
    fontSize: "2em",
    paddingTop: "150px",
  },

  paragraph: {
    paddingTop: "150px",
    textAlign: "center",
    fontSize: "2em",
  },

  header: {
    padding: "10px",
    backgroundColor: "rgba(255, 71, 71, 0.6)",
    margin: "10px",
    color: "white",
  },

  details: {
    flex: "70%",
    backgroundColor: "#bcd44f",
    padding: "0px 10px 10px 10px",
    borderStyle: "solid",
    borderColor: "purple",
    borderWidth: "5px",
    color: "white",
    fontSize: "2em",
  },
};
