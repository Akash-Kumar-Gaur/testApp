
import React from 'react';
import App2 from './App2';
import './App.css';
import { BRAND } from './utils/index.utils';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      tempName: '',
      tempAge: '',
    }
  }

  checkAge = () => {
    const { age, name } = this.state;
    if(age > 18 && age < 30){
      this.setState({
        tempAge: age,
      });
      // this.state.tempAge = age;
    }
    this.setState({ tempName: name });
  }

  render() {
    const { tempName, tempAge, age, name } = this.state;
    return (
      <div>
        <App2
          parentName={tempName}
          parentAge={tempAge}
        />
        <div>{BRAND}</div>
        <input onChange={(e) => this.setState({ name: e.target.value })}
          placeholder='Name'
        />
        <input onChange={(e) => this.setState({ age: e.target.value })}
          placeholder="Age"
        />
        <button onClick={() => this.checkAge()}>Test</button>
      </div>
    )
  }
}
