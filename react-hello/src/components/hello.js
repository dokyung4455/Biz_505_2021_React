
/**
 * 2개의 변수(상수) 선언
 */
const comp = "컴포넌트 만들기"
const nation = "Republic of Korea"

/**
 * 3개의 요소를 갖는 객체(JSON)를 선언
 */
const buyer = {
	name : "홍길동",
	addr : "서울시",
	age : 30
}

/**
 *	 
 */
const HelloBox = () => {
	return (
	<>
	<h1>컴포넌트 만들기</h1>
	<h3>{comp}</h3>
	<ul>
	<li>이름 : {buyer.name}</li>
	<li>주소 : {buyer.addr}</li>
	<li>나이 : {buyer.age}</li>
	</ul>
	</>
	)
}
/**
 * 모듈(file)로 분리한 컴포넌트 만들기
 */
const Hello = () => {
	return (
	<>
		<h1>Republic of Korea</h1>
		<HelloBox/>
		<p>{nation}</p>
	</>
	)
}

// module.exports 와 같은 코드(ES6+)
export default Hello;