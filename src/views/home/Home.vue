<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      ref="scroll"
      class="wrapper"
      @pull-load="pullLoadHandler"
      @scroll="changeTopShow"
    >
      <div class="scroll-child">
        <home-swiper class="home-swiper" :banners="banners"></home-swiper>
        <home-recoms :recommends="recommends"></home-recoms>
        <home-feature></home-feature>
        <home-tab-ctrl
          @changetabtitle="changeTabTitle"
          ref="tab-ctrl"
        ></home-tab-ctrl>
        <goods-list :goods="goods[cuurentTab].list"></goods-list>
      </div>
    </scroll>
    <back-top @click.native="backToTop" v-show="topShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeData, getHomeGoods } from "network/home.js";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecoms from "views/home/childComps/HomeRecoms";
import HomeFeature from "views/home/childComps/HomeFeature";
import HomeTabCtrl from "views/home/childComps/HomeTabCtrl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/myScroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecoms,
    HomeFeature,
    HomeTabCtrl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      Tabs: ["pop", "new", "sell"],
      cuurentTab: "pop",
      topShow: false,
    };
  },
  created() {
    //创建好组件之后请求数据
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*     事件请求相关方法
     */
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    changeTabTitle(index) {
      this.cuurentTab = this.Tabs[index];
    },
    changeTopShow(position) {
      if (position > 2000) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    },
    pullLoadHandler(payload) {
      console.log(payload);
      this.getHomeGoods(this.cuurentTab).then(() => {
        payload.done();
      });
    },
    /*     网路请求相关方法
     */
    getHomeData() {
      return getHomeData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(_type) {
      const _page = this.goods[_type].page + 1; //自动获取Home组件的对应商品的page并+1，下次调用时会自动到下一页
      return getHomeGoods({ type: _type, page: _page }).then((res) => {
        this.goods[_type].page += 1;
        this.goods[_type].list = this.goods[_type].list.concat(res.data.list);
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home_nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  color: white;
  background-color: rgb(255, 142, 151);
}
.wrapper {
  height: 86vh;
  overflow: hidden;
}
</style>
