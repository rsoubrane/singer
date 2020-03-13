import React, { useState } from "react";

//Utils
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Box, Card, CardMedia, CardContent, IconButton, Button } from "@material-ui/core";
import { FavoriteBorderRounded, Share } from "@material-ui/icons";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSlopeCardMediaStyles } from "@mui-treasury/styles/cardMedia/slope";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import DialogArticles from "../Dialog/Articles";

const useStyles = makeStyles(() => ({
	root: {
		width: "90%",
		margin: "auto",
		marginBottom: 40
	},
	content: {
		padding: 24
	},
	avatar: {
		width: 50,
		height: 50,
		border: "2px solid #fff",
		margin: "-48px 32px 0 auto",
		"& > img": {
			margin: 0
		}
	}
}));

const ArticlesCard = ({ id, title, description, image_url, handleClose }) => {
	const cardStyles = useStyles();
	const mediaStyles = useSlopeCardMediaStyles();
	const shadowStyles = useSoftRiseShadowStyles();
	const textCardContentStyles = useN01TextInfoContentStyles();

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(true);
	};

	return (
		<>
			<Card className={cx(cardStyles.root, shadowStyles.root)}>
				<CardMedia classes={mediaStyles} image={image_url} />
				<Avatar className={cardStyles.avatar} src={"https://i.pravatar.cc/300"} />
				<CardContent className={cardStyles.content}>
					<TextInfoContent classes={textCardContentStyles} heading={title} body={description} />
				</CardContent>
				<Box px={2} pb={2} mt={-1}>
					<Button onClick={() => handleClick(id)}>Lire l'article</Button>
					<IconButton>
						<Share />
					</IconButton>
					<IconButton>
						<FavoriteBorderRounded />
					</IconButton>
				</Box>
			</Card>

			{isOpen === true ? <DialogArticles title={title} image_url={image_url} close={handleClose} /> : null}
		</>
	);
};

export default ArticlesCard;
