<template>
    <div>
        <button type="button" @click="increaseCounter()">Add 1</button>
        <p>The count is : {{count}}</p>
    </div>
    <div>
        <select v-model="city" @change="changeSelect">
            <option name="S">S</option>
            <option name="B">B</option>
            <option name="J">J</option>
        </select>
    </div>

    <div>
                                                <!--key: up, down, tab, delete, esc, space, left, right -->
        <input type="text" v-model="textValue" @keyup.enter="showValue">
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            textValue: ''
        };
    },
    methods: {
        increaseCounter() {
            this.count++;
        },
        one() {
            alert('one');
        },
        two() {
            alert('two');
        },
        changeSelect() {
            alert(this.city);
        },
        showValue() {
            alert(this.textValue);
        }
    }
}
</script>

