import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";

import Skeleton from "@material-ui/lab/Skeleton";
import Dialog from "../Dialog/Player";

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
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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

export default function GridListHome({ data, changePage }) {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState();
	const [details, setDetails] = useState();

	const handleOnClick = myId => {
		setId(myId);
		setDetails(data[myId]);
		setIsOpen(true);
	};

	const handleClose = () => {
		setId();
		setDetails();
		setIsOpen(false);
	};

	return (
		<div className={classes.root}>
			{data ? (
				<GridList className={classes.gridList} cellHeight={200} cols={1.5} spacing={10}>
					{data.map((tile, index) => (
						<GridListTile key={index}>
							<img src={tile.image_url} alt={tile.title} />
							<div className={classes.overlay}></div>
							<IconButton
								aria-label={`info about ${tile.title}`}
								className={classes.icon}
								onClick={() => handleOnClick(index)}>
								<PlayCircleOutline style={{ fontSize: 50 }} />
							</IconButton>
							<GridListTileBar title={tile.title} subtitle={<span>Durée : {tile.duration}</span>} />
						</GridListTile>
					))}
				</GridList>
			) : (
				<Skeleton variant='rect' width='100vw' height={200} animation='pulse' />
			)}

			{isOpen === true ? <Dialog id={id} details={details} changePage={changePage} close={handleClose} /> : null}
		</div>
	);
}
