import React, { useState } from "react";

//Utils
import { Box, TextField, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

//Components
import ParcourirCard from "../components/Card/Parcourir";
import Dialog from "../components/Dialog/Player";

export default function Parcourir({ data, changePage }) {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState();
	const [details, setDetails] = useState();

	const handleOnClick = myId => {
		setId(myId);
		setDetails(data[myId]);
		setIsOpen(true);
	};

	const handleClose = () => {
		setId();
		setDetails();
		setIsOpen(false);
	};

	return (
		<>
			<Autocomplete
				freeSolo
				id='free-solo-2-demo'
				disableClearable
				options={data.map(option => option.title)}
				renderInput={params => (
					<TextField
						{...params}
						label='Rechercher une vidéo'
						margin='normal'
						variant='outlined'
						InputProps={{ ...params.InputProps, type: "search" }}
					/>
				)}
			/>
			<Box mt={5}>
				<Grid container spacing={3}>
					{data.map((card, index) => (
						<Grid item xs={6}>
							<ParcourirCard
								key={index}
								id={index}
								title={card.title}
								description={card.description}
								image_url={card.image_url}
								video_url={card.video_url}
								returnId={handleOnClick}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			{isOpen === true ? <Dialog id={id} details={details} changePage={changePage} close={handleClose} /> : null}
		</>
	);
}
