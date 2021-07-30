<template>
    <div>
        <button type="button" @click="getProductList">search</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>배송비</th>
                    <th>카테고리</th>
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
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            productList: []
        };
    },
    methods: {
        async getProductList() {
            this.productList = await this.api('https://d8cb59ef-bdb9-4813-8983-724a6b07f379.mock.pstmn.io/productList', 'get', {});        //postman Mock
            console.log(this.productList);
        },
        async api(url, method, data){
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}
</script>