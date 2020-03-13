import React from "react";

//Utils
import cx from "clsx";
import { makeStyles, Box, Card, Slider } from "@material-ui/core";

const useStyles = makeStyles(({ spacing, palette }) => {
	const family =
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
	return {
		card: {
			display: "flex",
			padding: spacing(2),
			width: "100%",
			borderRadius: 12,
			boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
			"& > *:nth-child(2)": {
				flex: "auto"
			}
		},
		avatar: {},
		heading: {
			fontFamily: family,
			fontSize: 16,
			marginBottom: 0
		},
		subheader: {
			fontFamily: family,
			fontSize: 14,
			color: palette.grey[600],
			letterSpacing: "1px",
			marginBottom: 4
		},
		value: {
			marginLeft: 8,
			fontSize: 14,
			color: palette.grey[500]
		}
	};
});

const useSliderStyles = makeStyles(() => ({
	root: {
		height: 4
	},
	rail: {
		borderRadius: 10,
		height: 4,
		backgroundColor: "rgb(202,211,216)"
	},
	track: {
		borderRadius: 10,
		height: 4,
		backgroundColor: "rgb(117,156,250)"
	},
	thumb: {
		display: "none"
	}
}));

const Rating = ({ className, ability, rating, current, total }) => {
	const styles = useStyles();
	const sliderStyles = useSliderStyles();
	return (
		<Card className={cx(styles.card, className)} elevation={0}>
			<Box>
				<h3 className={styles.heading}>{ability}</h3>
				<p className={styles.subheader}>
					{current} / {total}
				</p>
				<Box display={"flex"} alignItems={"center"}>
					<Slider classes={sliderStyles} defaultValue={rating * 10} />
					<span className={styles.value}>{rating}/10</span>
				</Box>
			</Box>
		</Card>
	);
};

export default Rating;
