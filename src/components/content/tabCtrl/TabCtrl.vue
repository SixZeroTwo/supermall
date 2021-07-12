<template>
  <div class="tab-ctrl">
    <div
      class="tab-ctrl-item"
      v-for="(index, id) in titles"
      :key="id"
      :class="{ active: id === currentId }"
      @click="changeCurrentId(id)"
    >
      <span>{{ index }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabCtrl",
  data() {
    return {
      currentId: 0,
    };
  },
  methods: {
    changeCurrentId(index) {
      this.currentId = index;
      this.$emit("changetabtitle", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ["默认1", "默认2", "默认3"];
      },
    },
  },
};
</script>
<style scoped>
.tab-ctrl {
  display: flex;
  text-align: center;
}
.tab-ctrl-item {
  flex: 1;
  width: 20px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
.tab-ctrl {
  position: sticky;
  top: 100px;
  z-index: 99;
}
</style>