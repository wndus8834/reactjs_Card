class DataSource {
    
    list1(cnt) {
        let list = [];

        if (!cnt) cnt = 10;

        for (let i = 0; i < cnt; i++) {
            list.push({ id: i, name: 'user_' + i, v: (Math.random() * 100) });
        }

        return list;
    }

}

export default new DataSource();
