import React, { useState, useEffect } from "react";

//Utils
import { makeStyles, Tabs, Tab, Typography, Box, AppBar, useTheme } from "@material-ui/core";

//Components
import GridListHome from "../components/GridList/Home";

//Data
import { getTabAstuces, getTabMachines } from "../firebase";
import Parcourir from "../tabs/Parcourir";

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

export default function Home({ changePage }) {
	const [recommendedTutorials, setRecommendedTutorials] = useState();
	const [newTutorials, setNewTutorials] = useState();
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);

	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const recommended = await getTabAstuces();
				const new_ = await getTabMachines();
				setRecommendedTutorials(recommended);
				setNewTutorials(new_);
				if (recommended && new_) setData(recommended.concat(new_));
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className={classes.offset}>
			<AppBar position='sticky' color='default' className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'
					aria-label='full width tabs example'>
					<Tab label='Pour vous' {...a11yProps(0)} />
					<Tab label='Parcourir' {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<Box mb={2}>
					<Typography variant='h5' gutterBottom>
						Sélectionnés pour vous
					</Typography>
					<GridListHome data={recommendedTutorials} loading={loading} changePage={changePage} />
				</Box>

				<Box mt={5} mb={2}>
					<Typography variant='h5' gutterBottom>
						Reprendre la lecture
					</Typography>
					<GridListHome data={newTutorials} loading={loading} changePage={changePage} />
				</Box>

				<Box mt={5}>
					<Typography variant='h5' gutterBottom>
						Nouveaux tutoriels
					</Typography>
					<GridListHome data={recommendedTutorials} loading={loading} changePage={changePage} />
				</Box>
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
				{data ? <Parcourir data={data} changePage={changePage} /> : null}
			</TabPanel>
		</div>
	);
}
