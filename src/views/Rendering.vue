<template>
    <!-- <div>
        <select v-model="city">
            <option :value="city.v" v-for="(city, i) in options" :key="i">{{city.t}}</option>
        </select>

        <table>
            <thead>
                <tr>
                    <th>제품</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송비</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, i) in productList" :key="i">
                    <td>{{product.productName}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.deliveryPrice}}</td>
                    <td>{{product.category}}</td>
                </tr>
            </tbody>
        </table>
    </div> -->

    <div>
        <h1 v-if="type=='A'">type v-if A</h1>
        <h1 v-else-if="type=='B'">type v-if B</h1>
        <h1 v-else>Other</h1>

        <h1 v-show="bRender">v-show true</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // options: [
            //     {v:'02', t:'S'},
            //     {v:'21', t:'B'},
            //     {v:'064', t:'J'}                                            
            // ],
            // city: '064',

            // productList: [
            //     {productName: '키보드', price: 20000, deliveryPrice: 3000, category: '제품'},
            //     {productName: '마우스', price: 10000, deliveryPrice: 1000, category: '제품'}
            // ]

            bRender: true,
            type: 'A'
        };
    }
}
</script>