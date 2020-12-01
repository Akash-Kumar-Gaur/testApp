
import React from 'react';

export default class App2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.parentName,
      age: this.props.parentAge,
    }
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState({ name: newProps.parentName })
  // }

  render() {
    console.log('initials - APp2', this.state, this.props);
    return (
      <div>
        {this.state.name} - 
        {this.state.age}
      </div>
    )
  }
}