import React from "react";

class AssignmentOne extends React.Component {
	state = {
		seconds: "",
		hours: "",
		minutes: "",
		secs: ""
	};
	handleChange = e => {
		if (isNaN(e.target.value)) {
			alert("Enter number only");
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};
	onConvert = () => {
		let numberSecs = Number(this.state.seconds);
		let d = Number(this.state.seconds);
		var h = Math.floor(d / 3600);
		var m = Math.floor((d % 3600) / 60);
		var s = Math.floor((d % 3600) % 60);

		var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
		var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
		var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
		this.setState({ hours: hDisplay, minutes: mDisplay, secs: sDisplay });
	};
	render() {
		return (
			<div style={{ marginTop: "2%" }}>
				<h1 style={{ fontWeight: "bold" }}>Assignment-1</h1>
				<input
					type="text"
					placeholder="Enter number of seconds"
					name="seconds"
					style={{
						width: "50%",
						textAlign: "center",
						height: "40px",
						fontSize: "20px"
					}}
					onChange={this.handleChange}
					value={this.state.seconds}
				/>
				<input
					type="submit"
					name="submit"
					style={{
						width: "50%",
						textAlign: "center",
						height: "40px",
						fontSize: "20px",
						margin: "2%"
					}}
					onClick={this.onConvert}
					value="Convert"
				/>
				<h3 style={{ fontWeight: "bold" }}>
					{this.state.hours} {this.state.minutes} {this.state.secs}
				</h3>
			</div>
		);
	}
}
export default AssignmentOne;
