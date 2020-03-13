import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "block",
		textTransform: "uppercase",
		fontWeight: "bold"
	}
}));

const Header = ({ openDrawer, changePage }) => {
	const classes = useStyles();
	const [auth, setAuth] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleChangeAuth = event => {
		setAuth(!auth);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
					<MenuIcon onClick={() => openDrawer("left", true)} />
				</IconButton>
				<Typography variant='h6' className={classes.title}>
					Singer
				</Typography>
				<div>
					{auth ? (
						<div>
							<IconButton
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'>
								<AccountCircle />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right"
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right"
								}}
								open={open}
								onClose={handleClose}>
								<MenuItem onClick={e => changePage(e, 2) && handleClose}>Profil</MenuItem>
								<MenuItem onClick={handleChangeAuth}>Déconnexion</MenuItem>
							</Menu>
						</div>
					) : (
						<div>
							<IconButton
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'>
								<AccountCircle />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right"
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right"
								}}
								open={open}
								onClose={handleClose}>
								<MenuItem onClick={e => changePage(e, 3) && handleClose}>Connexion</MenuItem>
								<MenuItem onClick={e => changePage(e, 3) && handleClose}>Créer un compte</MenuItem>
							</Menu>
						</div>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
