
import React from 'react';
import App2 from './App2';
import './App.css';
import MyHeader from './components/CommonHeader';
import MyBanner from './components/MyBanner';

export default class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: '',
  //     age: '',
  //     tempName: '',
  //     tempAge: '',
  //   }
  // }

  // checkAge = () => {
  //   const { age, name } = this.state;
  //   if(age > 18 && age < 30){
  //     this.setState({
  //       tempAge: age,
  //     });
  //     // this.state.tempAge = age;
  //   }
  //   this.setState({ tempName: name });
  // }

  getCurrentRoute = (pathname) => {
    switch(pathname){
      case '/': return <MyHeader />
      case '/banner': return <MyBanner />
      case '/login': return (<div><button onClick={() => window.location.replace('/banner')}>Go to home</button></div>)
    }
  }

  render() {
    // const { tempName, tempAge, age, name } = this.state;
    const { pathname } = window.location;
    console.log('location', pathname, window.location);
    return (
      <div>
        Current Pathname/Route is = {pathname}
        {this.getCurrentRoute(pathname)}
      </div>
    )
  }
}

/**
 * <App2
          parentName={tempName}
          parentAge={tempAge}
        />
        <input onChange={(e) => this.setState({ name: e.target.value })}
          placeholder='Name'
        />
        <input onChange={(e) => this.setState({ age: e.target.value })}
          placeholder="Age"
        />
        <button onClick={() => this.checkAge()}>Test</button>
 */
