import React, { useEffect, useState } from 'react'
import UUID from "react-uuid"
import { firestore } from '../config/BBsConfig';
import {useHistory} from "react-router-dom";

const headArray =["작성일자","작성시각","작성자","제목"];

function BBsMain() {
	const router = useHistory();
	const [bbsData,setBBsData] = useState([]);

	const firebaseFetch = async () => {
		const result = await firestore.collection("bbs")
		.orderBy("b_date","desc")
		.orderBy("b_time","desc")
		.get()
		const bbsList = result.docs.map((doc) => {
			const id = doc.id;
			return {...doc.data(), id: id};
		});
		setBBsData(bbsList);
	};
		
		
		
	
	

	useEffect(firebaseFetch, []);

	const bbsBody = bbsData.map((bbs)=> {
		return (<tr key={bbs.id} data-id={bbs.id} onClick={(e) => {
			const id = e.target.closest("TR").dataset.id;
			router.push(`/write/${id}`);
			}}>
			<td>{bbs.b_date}</td>
			<td>{bbs.b_time}</td>
			<td>{bbs.b_writer}</td>
			<td>{bbs.b_subject}</td>
		</tr>)
	})
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
