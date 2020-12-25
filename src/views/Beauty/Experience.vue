<template>
    <div>
        <!-- title -->
        <HeaderNav/>
        <!-- project -->
        <div class="main">
            <van-card @click="gotoDetail()" :key="item.id" v-for="item in list">
                <!-- title -->
                <template #title>
                    <div>{{ item.product_name }}</div>
                </template>
                <!-- desc -->
                <template #desc>
                    <div>{{ item.product_desc }}</div>
                </template>
                <!-- price -->
                <template #price>
                    <div class="price">{{ item.highest_price }}￥</div>
                </template>
                <!-- pic -->
                <template #thumb>
                    <img :src="item.kv_image" />
                </template>
                <!-- button -->
                <template #footer>
                    <van-button size="mini" class="btn" @click="gotoCard">加入购物车</van-button>
                </template>
            </van-card>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import HeaderNav from "@/components/Header/HeaderNav"
// 引入全部样式
//列表
import { Card, Tag,Button } from "vant";
//项目
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
export default {
    data() {
        return {
            list: [],
            listCard:[],
        };
    },
    created() {
        this.$http
            .get(
                "https://www.fastmock.site/mock/609eee78b06003f3fc8701aef257a08b/v1/beauty/1"
            )
            .then((ret) => {
                console.log(ret.data);
                this.list = ret.data.list;
            });
            //通知 App.vue 隐藏 底部导航 
        // this.$store.commit("isShowFooterNav", false);
    },
     beforeDestroy(){
        //通知App.vue 显示底部导航
        // this.$store.commit("isShowFooterNav", true);
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
      
        gotoDetail() {
            console.log(1111);
            // this.$router.push("/project/detail");
        },
        gotoCard(){
            localStorage.setItem('cart',this.list);

        }
    },
    components:{
        HeaderNav,
    }
};
</script>
<style scoped>
.title {
    background-color: pink;
}
.price {
    color: red;
    float: left;
}
.time {
    margin-left: 30px;
}
.header {
    height: 46px;
}
.main {
    margin-bottom: 50px;
}
.btn{
    border: 1px solid #fa3421;
}
</style>
