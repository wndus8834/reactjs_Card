import React from 'react';
import './Block.css';

class Block extends React.Component {
  render() {
    return (
      <div
        className={this.props.on ? 'on' : 'off'}
        onClick={this.props.onClick.bind(this)}
      />
    );
  }
}

export default Block;
