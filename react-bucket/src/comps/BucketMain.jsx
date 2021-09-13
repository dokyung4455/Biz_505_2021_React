import React from 'react'

function BBsMain() {
	return (<div>
		<input className="main_input" placeholder="이번주에는 무엇을"></input>
		<table className="tbl_BBsMain">
				
				<tr className="tbl_th">
					<th>FLAG</th>
					<th>날짜</th>
					<th>BUCKET</th>
					<th>완료</th>
					<th>취소</th>
				</tr>
				<tr className="tbl_td">
					<td>일반</td>
					<td>2021-09-01 00:00:00</td>
					<td>리액트 정복</td>
					<td>@</td>
					<input type="checkbox"/>
				</tr>
		</table>
		</div>
	)
}

export default BBsMain
