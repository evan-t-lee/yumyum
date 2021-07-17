import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookIcon from '@material-ui/icons/Book';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CallIcon from '@material-ui/icons/Call';
import CrosswordCell from "./crosswordCell";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MonoLogo from "../assets/monologo.png";

const crossword = [
  [ '', '', 'B', '', '', '', '', '', '', '', '', '', '', '', 'T', '', 'S'],
  [ '', '', 'U', '', '', '', '', '', '', '', '', '', '', '', 'U', '', 'A'],
  [ '', '', 'T', '', '', '', 'C', '', '', 'S', 'Q', 'U', 'I', 'R', 'R', 'E', 'L'],
  [ 'O', 'S', 'T', 'R', 'I', 'C', 'H', '', '', 'C', '', '', '', '', 'T', '', 'A'],
  [ '', '', 'E', '', '', '', 'A', '', 'M', 'O', 'O', 'S', 'E', '', 'L', '', 'M'],
  [ 'H', 'O', 'R', 'S', 'E', '', 'M', '', '', 'R', '', '', '', '', 'E', '', 'A'],
  [ '', '', 'F', '', '', '', 'E', '', '', 'P', '', '', '', '', '', '', 'N'],
  [ '', '', 'L', '', 'G', 'O', 'L', 'D', 'F', 'I', 'S', 'H', '', '', '', '', 'D'],
  [ '', '', 'Y', '', '', '', 'E', '', '', 'O', '', '', 'W', 'H', 'A', 'L', 'E'],
  [ '', '', '', '', '', '', 'O', '', '', 'N', '', '', '', '', 'L', '', 'R'],
  [ 'C', 'H', 'I', 'C', 'K', 'E', 'N', '', '', '', '', '', 'L', '', 'L', '', ''],
  [ '', '', '', 'A', '', '', '', 'S', '', 'H', 'A', 'R', 'E', '', 'I', '', ''],
  [ '', 'O', 'T', 'T', 'E', 'R', '', 'K', '', '', '', '', 'O', '', 'G', '', ''],
  [ '', '', '', '', '', '', '', 'U', '', '', '', '', 'P', '', 'A', '', ''],
  [ '', 'P', 'E', 'N', 'G', 'U', 'I', 'N', '', '', '', '', 'A', '', 'T', '', ''],
  [ '', '', '', '', '', '', '', 'K', 'A', 'N', 'G', 'A', 'R', 'O', 'O', '', ''],
  [ '', '', '', '', '', '', '', '', '', '', '', '', 'D', '', 'R', '', '']
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  games: {
    display: "flex",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
  },
  cell: {
    width: "58px",
  },
  hintTable: {
    fontSize: "150%",
    width: "100%",
  },
  hintHeading: {
    textAlign: "center",
    fontSize: "140%",
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    textAlign: "left",
  },
}));

export default function Crosswords() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Row = ({ row }) => {
    return (
      <>
        { row.map((c) => {
          if (c.length) {
            return (
              <td className={classes.cell}>
                <CrosswordCell c={c}/>
              </td>
            );
          }
          return (
            <td className={classes.cell}>
            </td>
          );
        })}
      </>
    );

  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img style={{width: "120px"}} src={MonoLogo} alt="logo" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.link} to="/home">
            <ListItem button key="Home">
              <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/profile">
            <ListItem button key="Profile">
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <ListItem button key="Summary">
            <ListItemIcon><BookIcon /></ListItemIcon>
            <ListItemText primary="Summary" />
          </ListItem>
          <ListItem button key="Meetup">
            <ListItemIcon><PeopleAltIcon /></ListItemIcon>
            <ListItemText primary="Meetup" />
          </ListItem>
          <Link className={classes.link} to="/video">
            <ListItem button key="Video Call">
              <ListItemIcon><CallIcon /></ListItemIcon>
              <ListItemText primary="Video Call" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link className={classes.link} to="/login">
            <ListItem button key="Exit">
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <table>
              { crossword.length && crossword.map((row) => (
                <tr>
                  <Row row={row}/>
                </tr>
              ))}
            </table>
          </Grid>
          <Grid item xs={5}>
            <table class={classes.hintTable}>
              <tr>
                <th class={classes.hintHeading} colspan="2">Across</th>
              </tr>
              <tr>
                <td>5) Nut collector</td>
                <td>6) Emu's cousin</td>
              </tr>
              <tr>
                <td>7) Bullwinkle, for one</td>
                <td>8) Centaur, in part</td>
              </tr>
              <tr>
                <td>9) Aquarium favourite</td>
                <td>10) Sea spouter</td>
              </tr>
              <tr>
                <td>12) Banyard bird</td>
                <td>16) Fox's prey</td>
              </tr>
              <tr>
                <td>17) Furry swimmer</td>
                <td>18) Bird with flippers</td>
              </tr>
              <tr>
                <td>19) Aussie hopper</td>
                <td></td>
              </tr>
              <tr>
                <th class={classes.hintHeading} colspan="2">Down</th>
              </tr>
              <tr>
                <td>1) Monarch</td>
                <td>2) Slowpoke</td>
              </tr>
              <tr>
                <td>3) Lizard's relative</td>
                <td>4) Quick change artist</td>
              </tr>
              <tr>
                <td>5) Desert stinger</td>
                <td>11) Everglades denizen</td>
              </tr>
              <tr>
                <td>13) Household pet</td>
                <td>14) Spotted stalker</td>
              </tr>
              <tr>
                <td>15) Odor emitter</td>
                <td></td>
              </tr>
            </table>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}