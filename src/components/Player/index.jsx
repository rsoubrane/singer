import React from "react";

//Utils
import { Avatar, Card, CardActions, CardHeader } from "@material-ui/core";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

import YouTube from "react-youtube";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.vidRef = React.createRef();
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}

	render() {
		const opts = {
			height: "350px",
			width: "100%",
			playerVars: {
				autoplay: 1
			}
		};

		return (
			<Card id='vp-card'>
				<YouTube videoId={this.props.details.video_url} opts={opts} onReady={this._onReady} />

				<CardHeader
					avatar={
						<Avatar className='vp-avatar bg-secondary' aria-label='Vid Player'>
							<OndemandVideoIcon />
						</Avatar>
					}
					title={this.props.details.title}
					subheader='July 19, 2019'
				/>
				<CardActions>{this.props.details.description}</CardActions>
			</Card>
		);
	}
}

export default Player;
