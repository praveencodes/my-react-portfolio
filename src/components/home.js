import React from "react";
import Developer from "../images/developer.svg";
import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    height: "30rem",
    margin: "5rem 10rem 10rem 0rem",
  },
  welcome: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45rem",
  },
  details: {
    height: "10rem",
    width: "10rem",
  },
  companyLink: {
    color: "#6C63FF",
  },
  shortIntro: {
    width: "30rem",
    lineHeight: "0.5",
  },
}));

export const Home = () => {
  const { container, welcome, companyLink, shortIntro } = useStyles();

  const getLink = (name) => {
    let compLink =
      name == "Comcast"
        ? "https://www.comcasttechnologysolutions.com/"
        : name == "Infosys"
        ? "https://www.infosys.com/"
        : name == "IBM"
        ? "https://www.ibm.com/in-en"
        : "https://reactjs.org";
    return (
      <Link className={companyLink} href={compLink} target="_blank">
        {name}
      </Link>
    );
  };

  return (
    <div className={container}>
      <div className={welcome}>
        <div>
          <div>
            <h1>{"Hi 👋. I am Praveen Jaya Kumar."}</h1>
          </div>
          <div className={shortIntro}>
            <p>
              {`A passionate web developer worked mostly on `}
              {getLink("React")}
              {" for 4.5 years."}
            </p>
            <p>
              {`Getting my hands dirty with Golang now at `}
              {getLink("Comcast")}.
            </p>
            <p>
              {`Previously worked with `}
              {getLink("Infosys")}
              {` and `}
              {getLink("IBM")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={Developer} />
      </div>
    </div>
  );
};
