# reactjs_Card
### 1. 사용자 정보를 출력하고 추가로딩 기능을 구현해 보았습니다.
![ezgif-2-c29d1cef42ed](https://user-images.githubusercontent.com/38427658/53080001-071a0880-353b-11e9-96b1-bc60d8a519b5.gif)

* Data.js
    * 주어진 숫자에 따라 (기본값 10) 객체를 담은 배열을 반환하는 list()를 포함하는 class DataSource를 생성합니니다. v 값으로 100 미만의 랜덤한 숫자를 만들어 냅니다. Export시 새로운 DataSource 인스턴스를 반환합니다.
* App.js
    * DataSource 인스턴스를 import해 반복해 출력하는 App컴포넌트를 Card 컴포넌트로 분리해서 출력합니다.
    ```js
     constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentPage: 0,
            perPage: 3,
            currentId: null,
        }
    }
    // 추가 로딩
    handleLoadMore() {
        const start = (this.state.currentPage) * this.state.perPage;
        let part = DataSource.list1().slice(start, start + this.state.perPage);
        this.setState({ currentPage: this.state.currentPage + 1, list: this.state.list.concat(part) });
    }
    ```
    * 처음에 DataSource.list1() 에서 얻은 데이터를 render() 에서 바로 출력하지 않고, state의 list 배열을 출력하도록 하였다. 이 state의 list 배열은 handleLoadMore() 메서드를 실행할 때 마다 DataSource.list()에서 일정 부분을 복사해 state 의 list 배열에 추가하게 된다. 추가하는 부분에 대한 설정은 state의 currentPage(현재 몇 번 째 부분인지, 혹은 몇번 버튼을 클릭한건지) 정보와 한번 로딩시 몇 개를 복사할지 설정하는 perPage 정보를 이용해 복사한다. 처음 컴포넌트 생성시에는 state의 list 가 [] 빈값이기 때문에 아무것도 출력되는 값이 없다. 따라서 로딩시 초기값을 읽어와야 하는데, 이 부분은 componentWillMount() 이벤트 훅에서 this.handleLoadMore()를 초기에 한번 실행해 줌으로써 초기 3개(perPage)의 항목을 DataSource.list1() 에서 0번째 인덱스(currentPage) ~ 0 + 3(perPage) 만큼 복사해 state.list 에 push 해준다. 이후, 추가로딩 버튼을 클릭시마다 이벤트로 handleLoadMore()를 바인딩 해 놓았기 때문에 매번 추가로 3개씩 복사해 state.list에 push 하게된다.