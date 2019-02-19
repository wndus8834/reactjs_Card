import React from 'react';
import './Card.css';
import Details from './Details';

class Card extends React.Component {
    render() {
        const r = this.props.value;
        let details = this.props.isCurrent ? <Details count={r.v}></Details> : '';
        return <div className={['card', this.props.isCurrent ? 'current' : ''].join(' ')} 
                    key={r.id} onClick={this.props.onClick.bind(this, this.props.value.id)}>
            <div className="userId">{r.id}</div>
            <div className="userName">userName : {r.name}</div>
            <div className="value">value : {r.v}</div>
            {details}
       </div>;
       
    }
}

export default Card;
