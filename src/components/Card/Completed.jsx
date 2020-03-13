import React from "react";

//Utils
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

const useStyles = makeStyles(() => ({
	root: {
		width: "100%",
		margin: "auto",
		borderRadius: 0,
		position: "relative"
	},
	content: {
		padding: 24
	},
	title: {
		color: "#fff",
		letterSpacing: "2px"
	},
	overlay: {
		background: "rgba(0,0,0,.3)",
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0
	}
}));

const Completed = ({ title, image }) => {
	const styles = useStyles();
	const mediaStyles = useCoverCardMediaStyles();
	const shadowStyles = useLightTopShadowStyles();
	return (
		<Card className={cx(styles.root, shadowStyles.root)}>
			<CardMedia classes={mediaStyles} image={image} />
			<div className={styles.overlay}></div>
			<CardActionArea>
				<CardContent className={styles.content}>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"center"}
						minHeight={200}
						zIndex={11}
						color={"common.black"}
						textAlign={"center"}>
						<h5 className={styles.title}>{title}</h5>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Completed;
