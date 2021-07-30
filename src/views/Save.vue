<template>
    <div>
        <input type="text" v-model="userInfo.name" />
        <input type="text" v-model.number="userInfo.age" />
        <input type="text" v-model="userInfo.jpb" />
        <button type="button" @click="saveUserInfo">save</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                name: '',
                age: '',
                job: ''
            }
        };
    },
    methods: {
        saveUserInfo() {
            if(this.userInfo.name == ''){
                return this.$swal('name');
            }
            if(this.userInfo.age == ''){
                return this.$swal('age');
            }

            const res = this.saveData(this.userInfo);
            if(res=='S'){
                document.querySelectorAll('input').value='';
                return this.$swal('Save Success !');
            }
        },
        saveData(userInfo) {
            console.log(userInfo);
            const result = 'S';
            return result;
        }
    }
}
</script>