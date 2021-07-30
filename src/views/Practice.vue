<template>
    <!-- <div>
        <img v-bind:src="url" style="height=100px; width:100px;"/>
    </div>

    <div>
        <input type="text" v-model="textValue" />
        <button text="button" v-bind:disabled="textValue==''">Click</button>
    </div> -->
    <!-- <div class="container" v-bind:class="[activeClass, redClass]">
        Class Binding
    </div> -->
    <div v-bind:style="[baseStyle, addStyle]">
        Inline Style Binding
    </div>
</template>

<script>
export default {
    data() {
        return {
            // url: "https://kr.vuejs.org/images/logo.png",

            // textValue: ''

            // activeClass: 'active',
            // redClass: 'text-red'

            styleObject: {
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold'
            },
            baseStyle: 'background-color: black; color: white',
            addStyle: 'font-size:30px; font-weight:bold'
        };
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 200px;
    }
    .active {
        font-size: 50px;
    }
    .text-red {
        color: red;
    }
</style>
