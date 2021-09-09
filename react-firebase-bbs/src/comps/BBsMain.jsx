import React, { useEffect, useState } from 'react'
import UUID from "react-uuid"
import { firestore } from '../config/BBsConfig';

const headArray =["작성일자","작성시각","작성자","제목"];

function BBsMain() {
	const [bbsBody,setBBsBody] = useState([]);
	const firebaseFetch = () => {
		firestore.collection("bbs").get().then((bbsList)=> {
			bbsList.forEach((bbs) => {
				const item = bbs.data();
				setBBsBody ([...bbsBody,
					<tr>
						<td>{item.b_date}</td>
						<td>{item.b_time}</td>
						<td>{item.b_writer}</td>
						<td>{item.b_subject}</td>
					</tr>
				])
			})
		});

		
	}
	useEffect(firebaseFetch);
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
			<tbody>
				{bbsBody}
			</tbody>
		</table>
	)
}

export default BBsMain
