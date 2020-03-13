import React from "react";
import {
	withStyles,
	Grid,
	Link,
	Icon,
	Toolbar,
	AppBar,
	Typography,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	TextField,
	Hidden
} from "@material-ui/core";

const styles = ({ breakpoints, palette }) => {
	const cover =
		"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
	const backDropBG = "rgba(0,0,0,0.7)";
	return {
		root: {
			height: "calc(100vh - 112px)",
			width: "100%",
			textAlign: "left",
			position: "relative",
			background: `url(${cover})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			color: "#ffffff"
		},
		appBar: {
			background: "none"
		},
		toolbar: {
			minHeight: 64
		},
		backDrop: {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: backDropBG
		},
		container: {
			height: "100%",
			zIndex: 2,
			position: "relative"
		},
		brand: {
			color: "#ffffff",
			fontWeight: 900
		},
		left: {
			flexGrow: 1
		},
		right: {
			flexGrow: 1,
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end"
		},
		logo: {
			width: 40,
			height: 40,
			marginLeft: "auto",
			[breakpoints.up("sm")]: {
				marginRight: "auto"
			}
		},
		mlNormal: {
			marginLeft: 16
		},
		content: {
			padding: 16
		},
		input: {
			background: "rgba(255,255,255,0.16)",
			"&:hover": {
				background: "rgba(255,255,255,0.24)"
			},
			"&$focused": {
				background: "rgba(255,255,255,0.24)"
			}
		},
		inputInput: {
			color: "#ffffff"
		},
		underline: {
			"&:after": {
				borderColor: palette.primary.light
			}
		},
		focused: {},
		inputLabel: {
			color: "#ffffff",
			opacity: 0.8,
			"&$focused": {
				opacity: 1,
				color: "#ffffff"
			}
		},
		checkbox: {
			color: "rgba(255,255,255,0.87)"
		},
		checkboxLabel: {
			color: "rgba(255,255,255,0.87)"
		},
		grey: {
			color: "#c5c5c5"
		},
		buttonLabel: {
			textTransform: "none"
		},
		bottomSignUp: {
			textAlign: "center",
			marginTop: 24,
			marginBottom: 16
		},
		forgetPassword: {
			textAlign: "center",
			color: "#ffffff",
			[breakpoints.only("xs")]: {
				position: "absolute",
				bottom: 32,
				left: "50%",
				transform: "translateX(-50%)"
			},
			[breakpoints.up("sm")]: {
				marginTop: 40
			}
		}
	};
};

const DashboardLogin02 = withStyles(styles, { name: "LoginPage" })(({ classes, changePage }) => (
	<div className={classes.root}>
		<div className={classes.backDrop} />
		<Grid className={classes.container} container justify={"center"}>
			<AppBar className={classes.appBar} position={"absolute"} elevation={0}>
				<Toolbar className={classes.toolbar}>
					<Grid container>
						<Grid item xs container alignItems={"center"}>
							<Icon className={classes.grey}>arrow_left</Icon>
							<Typography className={classes.grey}>
								<Button color={"inherit"} underline={"none"} onClick={e => changePage(e, 0)}>
									Retour à l'accueil
								</Button>
							</Typography>
						</Grid>
						<Hidden only={"xs"}>
							<Grid xs item container alignItems={"center"} justify={"flex-end"}>
								<Typography className={classes.grey}>Pas encore inscrit ?</Typography>{" "}
								<Button
									classes={{ label: classes.buttonLabel }}
									className={classes.mlNormal}
									color={"secondary"}>
									Créez un compte
								</Button>
							</Grid>
						</Hidden>
					</Grid>
				</Toolbar>
			</AppBar>
			<Grid className={classes.content} item xs={12} sm={6} md={5} lg={4} container alignItems={"center"}>
				<form>
					<TextField
						fullWidth
						label={"Nom d'utilisateur"}
						margin={"normal"}
						variant='filled'
						classes={{}}
						InputLabelProps={{
							classes: {
								root: classes.inputLabel,
								focused: classes.focused
							}
						}}
						InputProps={{
							classes: {
								root: classes.input,
								focused: classes.focused,
								underline: classes.underline,
								input: classes.inputInput
							}
						}}
					/>
					<TextField
						fullWidth
						label={"Mot de passe"}
						margin={"normal"}
						variant='filled'
						type={"password"}
						InputLabelProps={{
							classes: {
								root: classes.inputLabel,
								focused: classes.focused
							}
						}}
						InputProps={{
							classes: {
								root: classes.input,
								focused: classes.focused,
								underline: classes.underline,
								input: classes.inputInput
							}
						}}
					/>
					<FormControl fullWidth>
						<FormControlLabel
							control={<Checkbox value='checkedC' className={classes.checkbox} />}
							label='Se souvenir de moi'
							classes={{
								label: classes.checkboxLabel
							}}
						/>
					</FormControl>
					<FormControl margin={"normal"} fullWidth>
						<Button
							classes={{ label: classes.buttonLabel }}
							fullWidth
							variant={"contained"}
							color={"primary"}
							onClick={e => changePage(e, 0)}>
							Connexion
						</Button>
					</FormControl>
					<Hidden smUp>
						<div className={classes.bottomSignUp}>
							<Typography className={classes.grey}>
								Pas encore inscrit ?
								<Link color={"secondary"} className={classes.mlNormal}>
									Créez un compte
								</Link>
							</Typography>
						</div>
					</Hidden>
					<div className={classes.forgetPassword}>
						<Typography color={"inherit"}>
							<Link color={"inherit"}>Mot de passe oublié ?</Link>
						</Typography>
					</div>
				</form>
			</Grid>
		</Grid>
	</div>
));

export default DashboardLogin02;
