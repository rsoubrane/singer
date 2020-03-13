import React from "react";

//Utils
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, CardContent, Avatar, Divider } from "@material-ui/core";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

const useStyles = makeStyles(({ palette }) => ({
	card: {
		borderRadius: 12,
		minWidth: 256,
		textAlign: "center"
	},
	avatar: {
		width: 60,
		height: 60,
		margin: "auto"
	},
	heading: {
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: "0.5px",
		marginTop: 8,
		marginBottom: 0
	},
	subheader: {
		fontSize: 14,
		color: palette.grey[500],
		marginBottom: "0.875em"
	},
	statLabel: {
		fontSize: 12,
		color: palette.grey[500],
		fontWeight: 500,
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		margin: 0
	},
	statValue: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 4,
		letterSpacing: "1px"
	}
}));

const ProfileCard = () => {
	const styles = useStyles();
	const shadowStyles = useFadedShadowStyles();
	const borderedGridStyles = useGutterBorderedGridStyles({
		borderColor: "rgba(0, 0, 0, 0.08)",
		height: "50%"
	});
	return (
		<Card className={cx(styles.card, shadowStyles.root)}>
			<CardContent>
				<Avatar className={styles.avatar} src={"https://i.pravatar.cc/300"} />
				<h3 className={styles.heading}>Alan Podemski</h3>
				<span className={styles.subheader}>France</span>
			</CardContent>
			<Divider light />
			<Box display={"flex"}>
				<Box p={2} flex={"auto"} className={borderedGridStyles.item}>
					<p className={styles.statLabel}>Articles</p>
					<p className={styles.statValue}>13</p>
				</Box>
				<Box p={2} flex={"auto"} className={borderedGridStyles.item}>
					<p className={styles.statLabel}>Badges</p>
					<p className={styles.statValue}>34</p>
				</Box>
				<Box p={2} flex={"auto"} className={borderedGridStyles.item}>
					<p className={styles.statLabel}>Tutoriels suivis</p>
					<p className={styles.statValue}>163</p>
				</Box>
			</Box>
		</Card>
	);
};

export default ProfileCard;
