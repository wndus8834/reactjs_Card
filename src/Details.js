import React from 'react';

class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: -1,
        };
    }

    render() {

        let r = []
        for (let i = 0; i < this.props.count; i++) {
            r.push(<span key={i} onClick={this.handleClick.bind(this, i)}>
                {i <= this.state.currentIndex ? '★' : '☆'}
            </span>);
        }
        return <div className="details">
            {r}
        </div>;
    }

    handleClick(i) {
        alert(i+1);
        this.setState({ currentIndex: i });
    }
}

export default Details;
