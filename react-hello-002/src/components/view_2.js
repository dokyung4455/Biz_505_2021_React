import React from 'react'

const view = (props) => {
	const { fo } = props;
	return (
		<div>
			<h1>{fo.f_name}</h1>
			<h1>{fo.f_addr}</h1>
		</div>
	)
}

export default view
