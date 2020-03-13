import React, { useState, useEffect } from "react";

//Utils
import { AppBar, Dialog, Toolbar, IconButton, Typography, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import Player from "../Player";
import { Share } from "@material-ui/icons";
import RewardCard from "../Card/Reward";

const useStyles = makeStyles(theme => ({
	appBar: {
		position: "relative"
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog({ details, changePage, close }) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const [showReward, setShowReward] = useState(false);

	const handleClose = () => {
		setOpen(false);
		close();
	};

	useEffect(() => {
		setTimeout(() => {
			setShowReward(true);
		}, 5000);
	}, []);

	return (
		<div>
			<Dialog
				fullScreen
				open={open}
				onEscapeKeyDown={handleClose}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
							<CloseIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							Video Player
						</Typography>

						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							color='inherit'>
							<Share />
						</IconButton>
					</Toolbar>
				</AppBar>

				<Player details={details} />

				{showReward ? <RewardCard title={details.title} changePage={changePage} onClose={handleClose} /> : null}
			</Dialog>
		</div>
	);
}
