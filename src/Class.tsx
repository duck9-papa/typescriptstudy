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

  class Ade implements Juice {
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
  const appleAde = new Ade(1500, 'apple', 'good');

  console.log(appleAde.fruit);
  // apple
  appleAde.drink();
  // taste is good

  // 인터페이스의 확장

  interface LemonAde extends Juice {
    // 확장하면서 추가된 항목
    location: string;
  }

  const lemonAde: LemonAde = {
    price: 1000,
    fruit: 'lemon',
    taste: 'best',
    // 추가
    location: 'home',
    drink() {
      console.log('lemon good');
    },
  };

  interface Apple {
    fruit: string;
  }

  interface Pie {
    price: number;
  }

  interface ApplePie extends Apple, Pie {
    taste: string;
  }

  const applePie: ApplePie = {
    // Apple의 요소
    fruit: 'apple',
    // Pie의 요소
    price: 1000,
    // ApplePie의 요소
    taste: 'good',
  };

  return <>class</>;
}

export default Class;
