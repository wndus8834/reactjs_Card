import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const r = this.props.value;
        return <div className="card" key={r.id}>
            <div className="userId">{r.id}</div>
            <div className="userName">userName : {r.name}</div>
            <div className="value">value : {r.v}</div>
        </div>;
    }
}

export default Card;
