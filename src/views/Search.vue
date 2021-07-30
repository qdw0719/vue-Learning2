<template>
    <div>
        <div>
            <select v-model="selectedCity">
                <option :value="city.code" v-for="(city, i) in cityList" :key="i">{{city.name}}</option>
            </select>
            <input type="text" v-model="userName" @keyup.enter="searchUserList" />
            <button type="button" @click="searchUserList">search</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(userinfo, i) in userList" :key="i">
                        <td>{{userinfo.name}}</td>
                        <td>{{userinfo.age}}</td>
                        <td>{{userinfo.job}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cityList: [
                {name: '서울', code: '01'},
                {name: '부산', code: '02'},
                {name: '제주도', code: '060'},
            ],
            selectedCity: '',
            userName: '',
            userList: []
        };
    },
    methods: {
        searchUserList() {
            // const selectedCity = this.selectedCity;
            // const userName = this.userName;
            const params = {
                selectedCity: this.selectedCity,
                userName: this.userName
            };

            this.userList = this.getUserList(params);
        },
        getUserList(params) {
            console.log(params);

            let list = [
                {name: 'pyj', age: 26, job: 'developer'},
                {name: 'abc', age: 16, job: 'developer'},
                {name: 'zxc', age: 36, job: 'developer'}
            ];

            return list;
        }
    }
}
</script>
