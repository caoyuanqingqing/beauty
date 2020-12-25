<template>
    <div>
       <div class="header">
            <van-nav-bar
                title="本店商品"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
                class="title"
            />
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast, Card, Tag,Button } from "vant";

Vue.use(NavBar);
Vue.use(Toast);
export default {
    data() {
        return {
        };
    },
    methods:{
          onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang="scss">
   .title {
    background-color: pink;
}
</style>
