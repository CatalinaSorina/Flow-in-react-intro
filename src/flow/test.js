//@flow

//===NUMBER===\\
function multiply(number1: number, number2: number) {
  return number1 * number2;
}

multiply(2, 4);

//===STRING===\\
function repeatText(text: string, number: number): string {
  return text.repeat(number);
}

//Let's make this possible
// multiply("A", 3);
// repeatText(35, 5);

//===BOOLEAN===\\
//===MAYBE===\\
type PersonProps = {
  name: string,
  phone?: number,
  hasChildren?: boolean,
};

//===ARRAY===\\
const checkPhoneNumber = (agenda: Array<number>, number: number): boolean =>
  agenda.map((num) => num === number) !== null;

//===OBJECT===\\
//===PROPS===\\
const personHasNumber = (person: PersonProps, phone: number): boolean =>
  person.hasOwnProperty("phone") && person.phone === phone;

//===STATE===\\
import React, { Component } from "react";

type ReactPersonState = {
  show: boolean,
};

export default class test extends Component<PersonProps, ReactPersonState> {
  state = {
    show: true,
  };

  render() {
    return (
      this.state.show && (
        <div>
          Name: {this.props.name}
          Phone: {this.props.phone ? this.props.phone : "No phone number"}
          {this.props.hasChildren && <p>Keep your children safe.</p>}
        </div>
      )
    );
  }
}
