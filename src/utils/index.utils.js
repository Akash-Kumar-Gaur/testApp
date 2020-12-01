const checkAge = () => {
  const { age, name } = this.state;
  if(age > 18 && age < 30){
    this.setState({
      tempAge: age,
    });
    // this.state.tempAge = age;
  }
  this.setState({ tempName: name });
}

const checkName = () => {
  const { age, name } = this.state;
  if(name.length > 5 && name < 10){
    this.setState({
      tempAge: age,
    });
    // this.state.tempAge = age;
  }
  this.setState({ tempName: name });
}

const checkDOB = () => {}

const BRAND = 'WebsiteName.in'

export {
  checkAge,
  checkName,
  checkDOB,
  BRAND,
}

// import {
//   checkAge
// } from './index.utils.js';

// export default checkAge;
// import checkAge from './index.utils';