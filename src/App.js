import { useState } from 'react';
import './App.css';
import Box from './component/Box';
// - 유저는 박스 두 개를 볼 수 있다. (타이틀, 사진, 결과)
// - 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// - 버튼 클릭시 클릭한 아이템이 유저박스에 보인다.
// - 버튼 클릭시 컴퓨터 아이템이 랜덤하게 선택된다.
// - 승패판단한다.
// - 지면 빨간색, 이기면 초록색, 비기면 검정색
// 오빠 화이팅, 항상 응원할게

// state 만들거
// 버튼에 따라서 가위 바위 보 이미지
// winner,loser 결과
// user입장에서 win인지 lose인지 
// 가위 : 
// 바위 : 
// 보 :
function App() { 
  const choice = {
    'rock' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZohJyhyZNNMTYOf7_E16KklxhKnoZQYkwLv1pEgmOfesxr5Akzd7ydV2ad-ECgoRhCM&usqp=CAU',
    'scissors' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSn-jY7gC0Xl4OiMU7Jn63bok-3Wcj_hUZYg&usqp=CAU',
    'paper' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgt6QJgtvPgzDfYcUOmfYoIbvj71LEkaDbQ&usqp=CAU',
  }
  const [choiceRSP, setChoiceRSP] = useState(null);
  const [randomRSP, setRandomRSP] = useState(null);
  const [result, setResult] = useState('');
  const [isUserWin, setIsUserWin] = useState('');
  const play = (userChoice) => {
    setChoiceRSP(userChoice);
    const choiceArr = Object.keys(choice);
    const computerChoice = choiceArr[~~(Math.random()*choiceArr.length)];
    setRandomRSP(computerChoice);
    //승패 판단
    if(userChoice === computerChoice){
      setResult('DRAW');
      setIsUserWin('DRAW');
    }
    else if ( (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice ==='rock')){
      setResult('WIN');
      setIsUserWin('WIN');
    }
    else{
      setResult('LOSE');
      setIsUserWin('LOSE');
    }
  }
  return (
    <>
      <div className = "main">
        <Box name = "you" img = {choice[choiceRSP]} isWin = {result}/>
        <Box name = "computer" img = {choice[randomRSP]} isWin = {result} />
      </div>
      <div className = "btns">
        <button onClick = {()=>{play('rock')}}><i class="fa-regular fa-hand-back-fist"></i></button>
        <button onClick={()=>{play('scissors')}}><i class="fa-regular fa-hand-scissors"></i></button>
        <button onClick={()=>{play('paper')}}><i class="fa-regular fa-hand"></i></button>
      </div>
      <div>
        <h3>{isUserWin}</h3>
      </div>
    </>
  )
}

export default App;
