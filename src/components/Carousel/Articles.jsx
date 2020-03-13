import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
	{
		src: "https://images.pexels.com/photos/3811861/pexels-photo-3811861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300",
		altText: "Créez votre histoire avec Singer",
		caption: "Créez votre histoire avec Singer",
		key: "1"
	},
	{
		src: "https://images.pexels.com/photos/1409217/pexels-photo-1409217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300",
		altText: "165 ans de savoir créer",
		caption: "165 ans de savoir créer",
		key: "2"
	},
	{
		src: "https://images.pexels.com/photos/3852975/pexels-photo-3852975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300",
		altText: "Vous n'êtes jamais loin d'un magasin Singer",
		caption: "Vous n'êtes jamais loin d'un magasin Singer",
		key: "3"
	}
];

const CarouselArticles = () => <UncontrolledCarousel items={items} captions={false} />;

export default CarouselArticles;
