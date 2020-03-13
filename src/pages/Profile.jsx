import React, { useState, useEffect } from "react";

//Utils
import { makeStyles, Tabs, Tab, Typography, Box, AppBar, useTheme, Grid } from "@material-ui/core";

//Components
import ProfileCard from "../components/Card/Profile";
import Achievements from "../components/Card/Achievements";
import Completed from "../components/Card/Completed";
import Rating from "../components/Card/Rating";
import GridListProfile from "../components/GridList/Profile";

//Data
import { getTabAstuces } from "../firebase";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "100vw"
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const [data, setData] = useState();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const newData = await getTabAstuces();
				setData(newData.slice(0, 5));
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			<AppBar position='sticky' color='default' className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'
					aria-label='full width tabs example'>
					<Tab label='Profil' {...a11yProps(0)} />
					<Tab label='Performances' {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<Box mb={2}>
					<ProfileCard />
				</Box>

				<Box my={2} style={{ marginRight: 0 }}>
					<br />
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Rating ability={"Trucs & Astuces"} rating={2} current={4} total={20} />
						</Grid>

						<Grid item xs={6}>
							<Rating ability={"Tutos. Machines"} rating={7} current={15} total={24} />
						</Grid>
					</Grid>
				</Box>

				<Box mt={3} mb={2}>
					<br />
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Completed
								title={"Derniers Tutoriels Terminés"}
								image={
									"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								}
							/>
						</Grid>
						{data
							? data.map(card => (
									<Grid item xs={6}>
										<Completed title={card.title} image={card.image_url} />
									</Grid>
							  ))
							: null}
					</Grid>
				</Box>
			</TabPanel>

			<TabPanel value={value} index={1} dir={theme.direction}>
				<Box mb={2}>
					<GridListProfile data={data} />
				</Box>
				<Box mt={3} mb={2}>
					<br />
					<Achievements />
				</Box>
			</TabPanel>
		</div>
	);
}
