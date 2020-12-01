const checkAge = (age) => {
  if(age > 18 && age < 30){
    return true
  }
  return false
}

const checkName = (name) => {
  if(name.length > 5 && name.length < 10){
    return true
  }
  return false
}

// TYPE 1 starts here
export {
  checkAge,
  checkName,
}
// import {
//   checkAge
// } from './index.utils.js';
// TYPE 1 end here


// TYPE 2 starts here
// export default checkAge;
// import checkAge from './index.utils';
// TYPE 2 end here