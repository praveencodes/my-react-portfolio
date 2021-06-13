import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    left: 0,
    bottom: 0,
    width: "100%",
    height: "5em",
    backgroundColor: "#464242",
    color: "white",
    textAlign: "center",
  },
  link: {
    color: "white",
  },
}));

export default function Footer() {
  const { footer, link } = useStyles();
  return (
    <footer className={footer}>
      <p>
        Made with ❤️ and{" "}
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          React
        </Link>
        <br />
      </p>
    </footer>
  );
}
