import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import ExpandableItem from "./expandableItem";

import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import FaceIcon from "@material-ui/icons/Face";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EventIcon from "@material-ui/icons/Event";
import PanoramaWideAngleIcon from "@material-ui/icons/PanoramaWideAngle";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PhoneIcon from "@material-ui/icons/Phone";
import SettingsIcon from "@material-ui/icons/Settings";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function SideBar() {
  const classes = useStyles();
  const gymId = 1;
  const NonExpandableItemContainer = ({ icon, menuItemName, menuItemLink }) => (
    <ListItem button component={Link} to={menuItemLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={menuItemName} />
    </ListItem>
  );

  const ExpandableItemContainer = ({
    icon,
    menuItemName,
    firstItemName,
    firstItemLink,
    secondItemName,
    secondItemLink
  }) => (
    <ExpandableItem
      render={xprops => (
        <>
          <ListItem
            button
            onClick={() =>
              xprops.setItemState({
                open: !xprops.itemState.open,
                menuItemName
              })
            }
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={menuItemName} />
            {xprops.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={
              xprops.itemState.open &&
              menuItemName === xprops.itemState.menuItemName
            }
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to={firstItemLink}
              >
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary={firstItemName} />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to={secondItemLink}
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={secondItemName} />
              </ListItem>
            </List>
          </Collapse>
        </>
      )}
    />
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <NonExpandableItemContainer
            icon={<HomeIcon />}
            menuItemName="Home"
            menuItemLink={"/gym/" + gymId + "/home"}
          />
          <ExpandableItemContainer
            icon={<SupervisorAccountIcon />}
            menuItemName="Administrators"
            firstItemName="View"
            firstItemLink={"/gym/" + gymId + "/viewAccount"}
            secondItemName="Add"
            secondItemLink={"/gym/" + gymId + "/addAccount"}
          />
          <ExpandableItemContainer
            icon={<AccessibilityNewIcon />}
            menuItemName="Trainers"
            firstItemName="View"
            firstItemLink={"/gym/" + gymId + "/viewAccount"}
            secondItemName="Add"
            secondItemLink={"/gym/" + gymId + "/addAccount"}
          />
          <ExpandableItemContainer
            icon={<FaceIcon />}
            menuItemName="Members"
            firstItemName="View"
            firstItemLink={"/gym/" + gymId + "/viewAccount"}
            secondItemName="Add"
            secondItemLink={"/gym/" + gymId + "/addAccount"}
          />
          <ExpandableItemContainer
            icon={<FitnessCenterIcon />}
            menuItemName="Trainings"
            firstItemName="View"
            firstItemLink={"/gym/" + gymId + "/viewTrainings"}
            secondItemName="Add"
            secondItemLink={"/gym/" + gymId + "/addTraining"}
          />
          <NonExpandableItemContainer
            icon={<EventIcon />}
            menuItemName="Training schedules"
            menuItemLink={"/gym/" + gymId + "/viewTrainingSchedules"}
          />
          <ExpandableItemContainer
            icon={<PanoramaWideAngleIcon />}
            menuItemName="Halls"
            firstItemName="View"
            firstItemLink={"/gym/" + gymId + "/viewHalls"}
            secondItemName="Add"
            secondItemLink={"/gym/" + gymId + "/addHall"}
          />
          <ExpandableItemContainer
            icon={<ReceiptIcon />}
            menuItemName="Pricelist"
            firstItemName="View"
            firstItemLink={"/gym/" + gymId + "/viewPricelist"}
            secondItemName="Add"
            secondItemLink={"/gym/" + gymId + "/addPricelistItem"}
          />
          <NonExpandableItemContainer
            icon={<PhoneIcon />}
            menuItemName="Contact"
            menuItemLink={"/gym/" + gymId + "/contact"}
          />
          <NonExpandableItemContainer
            icon={<SettingsIcon />}
            menuItemName="Settings"
            menuItemLink={"/gym/" + gymId + "/settings"}
          />
        </List>
      </div>
    </Drawer>
  );
}
