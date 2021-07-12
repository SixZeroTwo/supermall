<template>
  <div class="wrapper">
    <vuescroll
      :ops="ops"
      ref="vuescroll"
      @load-start="handleStart"
      @handle-scroll="handleScroll"
      class="vuescroll"
      ><slot></slot
    ></vuescroll>
  </div>
</template>
<script>
import vuescroll from "vuescroll";
export default {
  name: "Scroll",
  mounted() {
    vuescroll.refreshAll();
  },
  methods: {
    handleStart(vm, refreshDom, done) {
      this.$emit("pull-load", { refreshDom, done });
    },
    //分割线
    handleScroll(vertical, horizontal, nativeEvent) {
      this.$emit("scroll", this.$refs["vuescroll"].getPosition().scrollTop);
    },
    scrollTo(x, y, speed = 1000, easing = "easeInQuad") {
      this.$refs["vuescroll"].scrollTo(
        {
          x: x,
          y: y,
        },
        speed,
        easing
      );
    },
  },
  components: {
    vuescroll,
  },
  data() {
    return {
      ops: {
        vuescroll: {
          mode: "slide", //移动端模式
          detectResize: true,
          /** 锁定一种滚动方向， 锁定的方向为水平或者垂直方向上滑动距离较大的那个方向 */
          locking: true,
          pullRefresh: {
            enable: true,
            tips: {
              deactive: "Pull to Refresh",
              active: "Release to Refresh",
              start: "Refreshing...",
              beforeDeactive: "Refresh Successfully!",
            },
          },
          pushLoad: {
            enable: true,
            tips: {
              deactive: "Push to Load",
              active: "Release to Load",
              start: "Loading...",
              beforeDeactive: "Load Successfully!",
            },
            auto: false,
            autoLoadDistance: 200,
          },
          paging: false,
          zooming: true,
          snapping: {
            enable: false,
            width: 100,
            height: 100,
          },
          scroller: {
            bouncing: {
              top: 100,
              bottom: 100,
              left: 100,
              right: 100,
            },
            /** Enable locking to the main axis if user moves only slightly on one of them at start */
            locking: true,
            /** Minimum zoom level */
            minZoom: 0.5,
            /** Maximum zoom level */
            maxZoom: 3,
            /** Multiply or decrease scrolling speed **/
            speedMultiplier: 1,
            /** This configures the amount of change applied to deceleration when reaching boundaries  **/
            penetrationDeceleration: 0.03,
            /** This configures the amount of change applied to acceleration when reaching boundaries  **/
            penetrationAcceleration: 0.08,
            /** Whether call e.preventDefault event when sliding the content or not */
            preventDefault: false,
            /** Whether call preventDefault when (mouse/touch)move*/
            preventDefaultOnMove: true,
            // whether to  disable scroller or not.
            disable: false,
          },
        },
        bar: {
          opacity: 0,
        },
      },
    };
  },
};
</script>
<style scoped>
.vuescroll {
  height: 86vh;
  overflow: hidden;
}
</style>