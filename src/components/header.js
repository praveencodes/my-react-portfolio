import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#6C63FF",
    padding: "0 5% 0 5%",
    position: "relative",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navs: {
    marginLeft: "auto",
    marginRight: "0",
  },
  homeLink: {
    color: "white",
    "&:hover": {
      textDecoration: "none",
    },
    fontSize: "25px",
  },
}));

export default function Header() {
  const [checked, setChecked] = useState(false);
  const { header, logo, menuButton, navs, homeLink } = useStyles();

  const displayHeader = () => {
    return (
      <Toolbar>
        <div className={navs}>{getMenuButtons()}</div>
        <FormGroup>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={checked}
                onChange={handleChange}
                name="checked"
              />
            }
          />
        </FormGroup>
      </Toolbar>
    );
  };

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return <AppBar className={header}>{displayHeader()}</AppBar>;
}
