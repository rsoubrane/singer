import React from "react";

//Utils
import { makeStyles, SwipeableDrawer, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Settings as SettingsIcon, Build as BuildIcon } from "@material-ui/icons";

//Components
import Header from "../AppBar";
import ProfileCard from "../Card/Profile";

const useStyles = makeStyles({
	list: {
		width: 250
	}
});

export default function SwipeableTemporaryDrawer({ changePage }) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (side, open) => event => {
		if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ left: open });
	};

	const sideList = side => (
		<div className={classes.list} role='presentation'>
			<ProfileCard />
			<Divider />
			<List>
				{["Réglages", "Terms & Conditions"].map((text, index) => (
					<ListItem button key={text} onClick={e => changePage(e, 2) && toggleDrawer("left", false)}>
						<ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <BuildIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<Header openDrawer={toggleDrawer("left", true)} changePage={changePage} />
			<SwipeableDrawer
				open={state.left}
				onClose={toggleDrawer("left", false)}
				onOpen={toggleDrawer("left", true)}>
				{sideList("left")}
			</SwipeableDrawer>
		</div>
	);
}
