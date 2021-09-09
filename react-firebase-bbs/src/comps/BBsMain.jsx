import React from 'react'
import moment from "moment"
import UUID from "react-uuid"

const headArray =["작성일자","작성시각","작성자","제목"];

function BBsMain() {
	
	const bodyHeader = () => {
		return headArray.map(text=> {
			return <th key={UUID()}>{text}</th>
		})
	}

	return (
		<table>
			<thead>
				<tr>
					{bodyHeader()}
				</tr>
			</thead>
		</table>
	)
}

export default BBsMain
