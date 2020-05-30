import React, { useState } from 'react';

function Contact(props) {
	const [showMe, setShowMe] = useState(false);
	const handleMouseOver = () => {
		setShowMe(true);
		console.log('Mouse over');
	};

	const handleMouseOut = () => {
		setShowMe(false);
		console.log('Mouse out');
	};

	let showMoreInfo;
	if (showMe) {
		showMoreInfo = (
			<>
				<p>{props.contact.gender}</p>
				<p>{props.contact.age}</p>
			</>
		)
	};

	return (
		<div>
			<h2 onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>{props.contact.name}</h2>
			{showMoreInfo}
		</div>
	);
}

export default Contact;