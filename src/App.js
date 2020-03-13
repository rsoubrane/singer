import React, { useState } from "react";

//Utils
import { createMuiTheme, ThemeProvider, CssBaseline, useMediaQuery, makeStyles } from "@material-ui/core";

//Styles
import "./App.scss";

//Pages
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";

//Components
import BottomBar from "./components/BottomBar";
import TemporaryDrawer from "./components/Drawer";
import Login from "./pages/Login";

const useStyles = makeStyles(theme => ({
	"@global": {
		"#root": {
			[theme.breakpoints.up("sm")]: {
				height: "calc(100% - (64px + 56px))",
				top: "calc(64px + 48px)"
			},
			[theme.breakpoints.down("xs")]: {
				position: "absolute",
				height: "calc(100% - (56px + 56px))",
				width: "100vw",
				overflowX: "hidden",
				top: 56,
				left: 0
			}
		}
	},
	content: {
		[theme.breakpoints.up("sm")]: {
			height: "fit-content"
		},
		[theme.breakpoints.down("xs")]: {
			height: "fit-content"
		}
	}
}));

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [page, setPage] = useState(0);

	const classes = useStyles();

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
					primary: {
						light: "#757ce8",
						main: "#ca3e47",
						dark: "#ca3e47",
						contrastText: "#fff"
					},
					secondary: {
						light: "#ff7961",
						main: "#f44336",
						dark: "#313131",
						contrastText: "#000"
					}
				}
			}),
		[prefersDarkMode]
	);

	const handleChangePage = (event, newValue) => {
		setPage(newValue);
	};

	const stepPage = () => {
		switch (page) {
			case 0:
				return <Home changePage={handleChangePage} />;
			case 1:
				return <Articles />;
			case 2:
				return <Profile />;
			case 3:
				return <Login changePage={handleChangePage} />;
			// case 4:
			// return <Signup />;
			default:
				return <h1>404 Page</h1>;
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<TemporaryDrawer changePage={handleChangePage} />

			<div className={classes.content}>{stepPage()}</div>
			<BottomBar page={page} handleChange={handleChangePage} />
		</ThemeProvider>
	);
};

export default App;
