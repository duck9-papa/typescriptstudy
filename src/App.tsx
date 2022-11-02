import React from 'react';
import logo from './logo.svg';
import './App.css';
import Class from './Class';

function App() {
  class Test {
    // 타입스크립트라서 미리 프로퍼티를 등록해야한다
    num1: number;
    num2: number;
    // js는 constructor(a){ this.a = a } 로 constructor을 등록
    constructor(num1: number, num2: number) {
      this.num1 = num1;
      this.num2 = num2;
    }
    // 클래스 내부에 정의된 함수를 method 라고 한다. 여기서 this는 해당 클래스의 컨스트럭쳐를 가리킨다.
    sum() {
      return this.num1 + this.num2;
    }
  }

  const Sum = new Test(4,6)

  console.log(Sum.sum())
  // 10



  return <><Class></Class></>;
}

export default App;
