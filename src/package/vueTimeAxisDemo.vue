<template>
  <div
    :id="'vueTimeAxis' + key"
    class="vue-time-axis"
    :style="{
      width: option.width + 'px',
    }"
  >
    <span
      @mousedown="mouseDown($event, item)"
      class="vue-time-axis-inline"
      v-for="item in option.data"
      :key="item.id"
      :style="itemStyle(item)"
      >{{ item.text }}</span
    >
  </div>
</template>

<script>
export default {
  props: ["option"],
  name: "vueTimeAxis",
  data() {
    return {
      x: null,
      id: null,
      currentItem: null,
      isMove: false,
      timeID: null,
      key: new Date().getTime(),
    };
  },
  methods: {
    itemStyle(item) {
      const step = this.option.width / (this.option.max - this.option.min);
      return {
        width: (item.end - item.start) * step + "px",
        left: (item.start - this.option.min) * step + "px",
      };
    },
    mouseDown(e, item) {
      this.x = e.clientX;
      this.currentItem = item;
      this.id = item.id;
      this.isMove = true;
    },
  },
  mounted() {
    const el = document.querySelector("#vueTimeAxis" + this.key);
    el.onmousemove = (e) => {
      if (!this.isMove || this.timeID) return;
      // 减少触发次数
      this.timeID = setTimeout(() => {
        this.timeID = null;
      }, 16);
      const step = this.option.width / (this.option.max - this.option.min);
      let data = (e.clientX - this.x) / step;
      //拖拽移动限制 不能超出最小最大值
      let spacing = this.currentItem.end - this.currentItem.start;
      if (this.currentItem.end + data > this.option.max) {
        this.currentItem.end = this.option.max;
        this.currentItem.start = this.currentItem.end - spacing;
      } else if (this.currentItem.start + data < this.option.min) {
        this.currentItem.start = this.option.min;
        this.currentItem.end = this.currentItem.start + spacing;
      } else {
        this.currentItem.start += data;
        this.currentItem.end += data;
      }
      this.x = e.clientX;
    };
    el.onmouseup = () => {
      this.isMove = false;
    };
    el.onmouseleave = () => {
      this.isMove = false;
    };
  },
  created() {},
};
</script>

<style>
.vue-time-axis {
  width: 100%;
  height: 100%;
  height: 38px;
  position: relative;
  background: #ddd;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 4px;
}
.vue-time-axis-inline {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  line-height: 28px;
  background-color: #3a91c7;
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  left: 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
}
</style>