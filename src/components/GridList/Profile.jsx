import React from "react";

//Utils
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Reward2 from "../Card/Reward2";

const useStyles = makeStyles(theme => ({
	root: {
		position: "relative",
		width: "100vw",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		alignItems: "flex-start",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)"
	},
	title: {
		color: theme.palette.primary.light
	},
	titleBar: {
		background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
	},
	overlay: {
		background: "rgba(0,0,0,.1)",
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		zIndex: 10
	},
	icon: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 11
	}
}));

export default function GridListProfile({ data }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{data ? (
				<GridList className={classes.gridList} cellHeight={220} cols={1.3} spacing={10}>
					{data.map((tile, index) => (
						<GridListTile key={index}>
							<Reward2 title={tile.title} />
						</GridListTile>
					))}
				</GridList>
			) : (
				<Skeleton variant='rect' width='100vw' height={200} animation='pulse' />
			)}
		</div>
	);
}
