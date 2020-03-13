import React, { useState, useEffect } from "react";

//Data
import { getCardTimeline } from "../firebase";

//Utils
import { Box, Typography } from "@material-ui/core";

//Components
import Card from "../components/Card/Articles";
import CarouselArticles from "../components/Carousel/Articles";

export default function Articles() {
	const [data, setData] = useState();

	const [setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const newData = await getCardTimeline();
				setData(newData.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			<CarouselArticles />
			<Box mx={3} my={3}>
				<Typography variant='h5' gutterBottom>
					Articles
				</Typography>

				{data
					? data.map((product, index) => (
							<Card
								key={index}
								id={product.id}
								title={product.title}
								description={product.description}
								image_url={product.image_url}
								ratings={product.ratings}
								votes_count={product.votes_count}
								handleClose={handleClose}
							/>
					  ))
					: null}
			</Box>
		</div>
	);
}
