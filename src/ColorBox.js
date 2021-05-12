import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let givenOpacity = this.props.opacity
      return (
      <div className="color-box" style={{opacity: givenOpacity}}>
        {givenOpacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
      )
  }
}

