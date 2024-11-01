import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ClassCom from './ClassCom'
// import FuncCom from './FuncCom'
import TodoList from './Todolist'
import Clock from './Timer'
import MyWeather from './MyWeather'

function App() {
    let name = '리액트';

    return (
        <div className="container">
        <TodoList></TodoList>
        {/* <Clock></Clock> */}
        <MyWeather weather="맑음" children="일기예보"></MyWeather>
        </div>
    );
}

export default App;
