import React from 'react';
import logo from './logo.svg';
import './App.css';

function Class() {
  class Test {
    num1: number;
    num2: number;
    constructor(num1: number, num2: number) {
      this.num1 = num1;
      this.num2 = num2;
    }
    sum() {
      return this.num1 + this.num2;
    }
  }
  // Test를 Child에 상속한다.
  class Child extends Test {
    // 하위클래스에서 constructor을 정의하려면 반드시 상위클래스의 constructor을 호출해야한다.

    constructor(num1: number, num2: number) {
      super(num1, num2);
    }
    sum() {
      return this.num1 - this.num2 + super.sum();
      // 4 - 6 + 10(부모 클래스의 sum함수의 값)
    }
  }
  const sum = new Child(4, 6);

  console.log(sum.sum());
  // 8

  return <>class</>;
}

export default Class;
