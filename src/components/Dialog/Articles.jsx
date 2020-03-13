import React, { useState } from "react";

//Utils
import { AppBar, Dialog, Toolbar, IconButton, Typography, Slide, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Close as CloseIcon, Share } from "@material-ui/icons";

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

export default function DialogArticles({ title, image_url, close }) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		close();
	};

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
							Article
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

				<img src={image_url} alt='header' width='100%' height='300px' />

				<Box m={3}>
					<Typography variant='h4' gutterBottom>
						{title}
					</Typography>
					<Typography variant='p' gutterBottom>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequatur eligendi culpa odio
						tempore quod aliquam quidem autem est voluptates, explicabo molestiae, itaque quo distinctio
						animi? Enim distinctio modi, et, necessitatibus sint eligendi ex unde sequi tenetur repellat
						beatae non minima perferendis voluptate doloremque fugiat consequatur, officiis nesciunt
						impedit! Autem ipsa nisi reiciendis enim similique, id officiis veniam? Dicta quibusdam magnam
						odio sint, laudantium voluptatum dolorum eligendi eum temporibus et neque tenetur modi nihil
						magni fuga quasi impedit laboriosam voluptatem ea. Ab quam corporis doloribus unde deleniti
						adipisci nam similique voluptate in culpa, totam aperiam mollitia harum minus corrupti eos
						fugiat soluta blanditiis dolores assumenda repudiandae accusantium beatae aliquid repellendus.
						Alias doloremque exercitationem quo, magnam quisquam assumenda nobis doloribus. Dolorem non
						sequi itaque similique corporis tempora quam ex facere corrupti recusandae expedita asperiores
						nam, obcaecati nulla dolor vel harum, possimus ad, quibusdam molestiae? Quaerat velit molestiae
						ullam quo? Fugit, omnis!
					</Typography>
				</Box>
			</Dialog>
		</div>
	);
}
