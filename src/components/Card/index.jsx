import React, { useState } from "react";

//Utils
import {
	makeStyles,
	Typography,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Grid,
	Divider
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginBottom: 20,
		flexGrow: 1
	},
	media: {
		height: 150
	}
});

export default function MediaCard({ title, description, image_url, video_url }) {
	const classes = useStyles();

	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<Paper className={classes.root}>
			<Card>
				<CardActionArea>
					{isVideoOpen !== true ? (
						<Grid container justify='space-around' alignItems='center'>
							<Grid item xs={4}>
								<CardMedia className={classes.media} image={image_url} title={title} />
							</Grid>
							<Grid item xs={8}>
								<CardContent>
									<Typography gutterBottom variant='h6' component='h2'>
										{title}
									</Typography>
									<Typography variant='body2' color='textSecondary' component='p'>
										{description}
									</Typography>
								</CardContent>
							</Grid>
						</Grid>
					) : (
						<CardMedia
							height='200'
							component='iframe'
							image={video_url}
							title={title}
							allowFullScreen
							frameBorder='off'
							allow='autoplay'
						/>
					)}
				</CardActionArea>

				<Divider />

				<CardActions>
					<Button size='small' color='primary' onClick={() => setIsVideoOpen(!isVideoOpen)}>
						Voir la vidéo
					</Button>
				</CardActions>
			</Card>
		</Paper>
	);
}
