<template>
  <div class="homeRecommends">
    <div v-for="(item, index) in recommends" :key="index" class="recomItem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.homeRecommends {
  width: 100%;
  display: flex;
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 15px solid rgb(224, 228, 231);
}
.recomItem {
  flex: 1;
  text-align: center;
}
.recomItem img {
  width: 80%;
}
</style>