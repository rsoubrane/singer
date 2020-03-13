import React from "react";
import cx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { TripOrigin } from "@material-ui/icons";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

const useTagCardStyles = makeStyles(({ palette }) => ({
	card: {
		width: "100%",
		height: "230px",
		margin: "20px 0 20px 0",
		display: "flex",
		background: palette.background.paper,
		position: "relative",
		overflow: "visible",
		"&::before": {
			content: "' '",
			width: "100%",
			"border-bottom": `30px solid ${palette.background.paper}`,
			"border-left": " 20px solid transparent",
			"border-right": "20px solid transparent",
			position: "absolute",
			top: "-30px"
		}
	},
	hole: {
		position: "absolute",
		top: "-20px",
		margin: "auto",
		width: "100%",
		left: 0
	},
	image: {
		borderRadius: "100%",
		height: "100px",
		width: "100px",
		margin: "auto auto 15px"
	}
}));

export default function Parcourir({ id, title, image_url, returnId }) {
	const tagStyles = useTagCardStyles();
	const mediaStyles = useWideCardMediaStyles();
	const shadowStyles = useBouncyShadowStyles();

	const handleOnClick = myId => {
		returnId(myId);
	};

	return (
		<Card className={cx(tagStyles.card, shadowStyles.root)} elevation={10} onClick={() => handleOnClick(id)}>
			<CardContent>
				<TripOrigin className={tagStyles.hole} />
				<CardMedia className={tagStyles.image} classes={mediaStyles} image={image_url} />

				<Typography align='center' gutterBottom>
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
}
