import React from 'react'
import { useState } from 'react';
import { firestore } from "../config/BBsConfig"
import moment from 'moment';

function BBsWrite({history}) {
	const [bbs,setBBs] = useState({
		b_write:"",
		b_subject:"",
		b_content:"",
	 });
	 const onChange =(e)=>{
		const {value,name} = e.target
		setBBs({ ...bbs,[name]: value})
	 };
	 const onClickSave = () =>{
		// const str = JSON.stringify(bbs);
		// alert(str);	
		const saveBBS = {
			...bbs,
			b_date : moment().format("YYYY[-]MM[-]DD"),
			b_time : moment().format("HH:mm:ss"),
		};
		firestore.collection("bbs")
		// .add({saveBBS,})
		.doc("12341234")
		.set(saveBBS)
		.then(doc=>{
			console.log(saveBBS);
			history.push("/");
		});
	 };
  
	return (
		<section>
			<div><input name="b_writer" onChange={onChange} className="input_writer" type="text" placeholder="작성자"/></div>
			<div><input name="b_subject" onChange={onChange} className="input_writer" type="text" placeholder="제목"/></div>
			<div><input name="b_content" onChange={onChange} className="input_writer" type="text" placeholder="내용"/></div>
			<button onClick={onClickSave} className="btn_save">저장</button>
		</section>
	)
}

export default BBsWrite
