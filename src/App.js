import React from 'react';
import DataSource from './Data.js';
import Card from './Card';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentPage: 0,
            perPage: 3,
            currentId: null,
        }
    }

    // 컴포넌트 초기화
    componentWillMount() {
        this.handleLoadMore();
    }

    // 추가 로딩
    handleLoadMore() {
        const start = (this.state.currentPage) * this.state.perPage;
        let part = DataSource.list1().slice(start, start + this.state.perPage);
        this.setState({ currentPage: this.state.currentPage + 1, list: this.state.list.concat(part) });
    }

    // 클릭시 처리
    handleClick(id) {
        this.setState({ currentId: id });
    }

    render() {

        let list = this.state.list.map(r => {
            return <Card key={r.id} isCurrent={this.state.currentId === r.id} value={r} onClick={this.handleClick.bind(this,r.id)} />;
        })

        return <div>
            <h1>App</h1>
            <div>
                {list}
                <button onClick={this.handleLoadMore.bind(this)}>추가로딩</button>
            </div>
        </div>;
    }
}

export default App;
