<template>
  <div>
    <tab-ctrl
      @changetabtitle="changeTabTitle"
      class="home-tab-ctrl"
      :titles="titles"
    ></tab-ctrl>
  </div>
</template>
<script>
import TabCtrl from "components/content/tabCtrl/TabCtrl";
export default {
  components: {
    TabCtrl,
  },
  data() {
    return {
      titles: ["流行", "新款", "精选"],
    };
  },
  methods: {
    changeTabTitle(index) {
      this.$emit("changetabtitle", index);
    },
  },
};
</script>
<style scoped>
.home-tab-ctrl {
  position: sticky;
  top: 40px;
  height: 40px;
  line-height: 40px;
}
</style>