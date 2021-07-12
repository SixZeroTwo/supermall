<template>
  <div id="wrapper" ref="wrapper">
    <div id="content">
      <button @click="btnClick">按钮</button>
      <ul>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.wrapper);
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: false,
        probeType: 2,
      });
      this.scroll.on("scroll", (position) => {
        console.log("触发了scroll");
        console.log(position);
      });
    });
  },
  methods: {
    btnClick() {
      console.log("点击事件");
    },
  },
};
</script>

<style scoped>
#wrapper {
  height: 200px;
  background-color: yellow;
  overflow: hidden;
}
</style>
