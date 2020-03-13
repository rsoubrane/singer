import React from "react";

//Utils
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	CardContent,
	CardHeader,
	Button
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useContainedCardHeaderStyles } from "@mui-treasury/styles/cardHeader/contained";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";

const useStyles = makeStyles(({ spacing }) => ({
	card: {
		marginTop: 40,
		borderRadius: spacing(0.5),
		transition: "0.3s",
		overflow: "initial",
		background: "#424242"
	},
	content: {
		textAlign: "left",
		overflowX: "auto"
	}
}));

let id = 0;
function createData(name, obtained) {
	id += 1;
	return { id, name, obtained };
}

const rows = [
	createData("Coudre un bouton", <CheckCircleIcon />),
	createData("Coudre un ourlet simple", <CheckCircleIcon />),
	createData("Coudre un ourlet double"),
	createData("Upcycling", <CheckCircleIcon />),
	createData("Singer Experience 400"),
	createData("Singer Recouvreuse 14T970"),
	createData("Singer Supera 5511", <CheckCircleIcon />),
	createData("Customiser sa jupe")
];

const CardAchievements = () => {
	const classes = useStyles();
	const cardHeaderStyles = useContainedCardHeaderStyles();
	const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
	const cardHeaderShadowStyles = useFadedShadowStyles();
	return (
		<Card className={cx(classes.card, cardShadowStyles.root)}>
			<CardHeader
				style={{ overflow: "visible", marginTop: "-40px" }}
				className={cardHeaderShadowStyles.root}
				classes={cardHeaderStyles}
				title={"Récompenses"}
				subheader={"Tous vos badges"}
			/>
			<CardContent className={classes.content}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Badge</TableCell>
							<TableCell align='right'>Obtenu</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.obtained}</TableCell>
							</TableRow>
						))}
						<Button style={{ textAlign: "center" }}>Voir Plus</Button>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default CardAchievements;
