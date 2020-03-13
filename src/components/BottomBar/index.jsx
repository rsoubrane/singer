import React from "react";

//Utils
import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import { Restore as RestoreIcon, Home as HomeIcon, AccountCircle as AccountCircleIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	stickToBottom: {
		width: "100vw",
		position: "fixed",
		bottom: 0,
		marginTop: 50
	}
}));

export default function BottomBar({ page, handleChange }) {
	const classes = useStyles();

	return (
		<div>
			<BottomNavigation value={page} onChange={handleChange} className={classes.stickToBottom}>
				<BottomNavigationAction label='Accueil' icon={<HomeIcon />} />
				<BottomNavigationAction label='Histoire' icon={<RestoreIcon />} />
				<BottomNavigationAction label='Profil' icon={<AccountCircleIcon />} />
			</BottomNavigation>
		</div>
	);
}
