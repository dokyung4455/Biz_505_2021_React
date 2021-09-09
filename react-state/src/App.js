import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Write from './comps/Write.jsx';
import View from './comps/View.jsx';

// 프로젝트가 시작될때 임시로 보여줄 데이터
const bbsSample = {
	b_date : '2021-09-07',
	b_time : '10:24:00',
	b_writer : "홍길동",
	b_subject : "React BBS",
	b_content : "React를 이용한 BBS 프로젝트 만들기",
}

function App() {
	/**
	 * 상태(변수,객체) bbs를 선언하고
	 * 값의 변경이 필요할때 사용할 setBBs() 함수를 선언하겠다
	 * useState() 함수를 사용하여 상태를 만든다
	 * 상태를 만들때 bbsSample을 사용하여 초기값을 설정하겠따.
	 */
	const [bbsVO,setBBS] = useState(bbsSample);
	const bbsChange = (event) => {
		const {name,value} = event.target;
		setBBS({...bbsVO, [name]: value});
	}

	/**
	 * <Write bbs={bbsVO}/> 코드에 대한 설명
	 * import 된 Write.js 컴포넌트를 결합하고
	 * 선언된 bbsVO 상태변수를 bbs라는 이름으로 전달하기
	 * 
	 * Write(bbsVO) 형식으로 전달하고
	 * function Write(bbs) { }
	 */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
	  <section className="main_section">
		<article>
			<Write bbs={bbsVO} onBBsChange={bbsChange}/>
		</article>
		<article>
			<View bbs={bbsVO} onBBsChange={bbsChange}/>
		</article>
	  </section>
    </div>
  );
}

export default App;
