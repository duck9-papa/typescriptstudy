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

  // 인터페이스의 클래스

  interface Juice {
    price: number;
    fruit: string;
    taste: string;
    drink(): void;
  }

  class AppleAde implements Juice {
    price;
    fruit;
    taste;
    constructor(p: number, f: string, t: string) {
      this.price = p;
      this.fruit = f;
      this.taste = t;
    }
    drink() {
      console.log(`taste is ${this.taste}`);

    }
  }
  const appleAde = new AppleAde(1500, 'apple', 'good');

  console.log(appleAde.fruit);
  // apple
  appleAde.drink()
  // taste is good
  return <>class</>;
}

export default Class;
