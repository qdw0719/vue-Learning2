<template>
    <div>
        <!-- <input type="text" v-model="lastName" />
        <input type="text" v-model="firstName" />
        <h1>hi {{fullName}}</h1> -->

        <input type="text" v-model.number="x1" />
        <input type="text" v-model.number="x2" />
        <!-- <button type="button" @click="sum">sum</button> -->
        <input type="text" v-model="result" />
    </div>
</template>

<script>
export default {
    // conputed: {
    //     fullName() {
    //         return this.lastName + this.firstName;
    //     }
    // },
    data() {
        return {
            // firstName: 'yj',
            // lastName: 'p'

            x1: 0,
            x2: 0,
            result: 0
        };
    },
    method: {
        // getFullName() {
        //     return this.lastName + this.firstName;
        // }

        sum() {
            this.result = this.x1 + this.x2;
        }
    },
    watch: {
        x1() {
            this.result = this.x1 + this.x2;
        },
        x2() {
            this.result = this.x1 + this.x2;
        }
    }
}
</script>