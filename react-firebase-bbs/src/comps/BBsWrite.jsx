import React, { useEffect } from 'react'
import { useState } from 'react';
import { firestore } from "../config/BBsConfig"
import moment from 'moment';
import {useHistory, useRouteMatch} from "react-router-dom";

function BBsWrite() {
	const history = useHistory();
	const match = useRouteMatch();
	const docId = match.params.id;
	const [bbs,setBBs] = useState({
		b_writer:"",
		b_subject:"",
		b_content:"",
		b_date:"",
		b_time:"",
	 });
	 const findByidFetch = async () => {
		 if(docId) {
			const result = await firestore.collection('bbs').doc(docId).get();
			if(result.data()){
				setBBs(result.data())
			}
		 }
	 }
	 useEffect(findByidFetch, []);
	 const onChange =(e)=>{
		const {value,name} = e.target
		setBBs({ ...bbs,[name]: value})
	 };
	 const onClickSave = () =>{
		// const str = JSON.stringify(bbs);
		// alert(str);	
		const saveBBS = {
			...bbs,
			b_date : bbs.b_date || moment().format("YYYY[-]MM[-]DD"),
			b_time : bbs.b_time || moment().format("HH:mm:ss"),
		};
		firestore.collection("bbs")
		// .add({saveBBS,})
		.doc(docId)
		.set(saveBBS)
		.then(doc=>{
			console.log(saveBBS);
			history.push("/");
		});
	 };
  
	return (
		<section>
			<div><input name="b_writer" onChange={onChange} className="input_writer" type="text" placeholder="작성자" defaultValue={bbs.b_writer}/></div>
			<div><input name="b_subject" onChange={onChange} className="input_writer" type="text" placeholder="제목" defaultValue={bbs.b_subject}/></div>
			<div><input name="b_content" onChange={onChange} className="input_writer" type="text" placeholder="내용" defaultValue={bbs.b_content}/></div>
			<button onClick={onClickSave} className="btn_save">저장</button>
		</section>
	)
}

export default BBsWrite
