<template>
  <div ref="wrapper">
    <div><slot></slot></div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  name: "Scroll",
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        //插件配置
        pullUpload: true,
      });
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      //这里无法监听上拉事件，
      /*      this.scroll.on("pullingUp", () => {
        console.log("pullUp");
        this.scroll.finishPullUp();
      }); */
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
</style>