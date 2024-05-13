<template>
  <div id="app">
    <vueTimeAxis :option="option" />
    <vueTimeAxis :option="option1" />
  </div>
</template>

<script>
import vueTimeAxis from "./package/vueTimeAxisDemo";

export default {
  name: "App",
  components: {
    vueTimeAxis,
  },
  data() {
    return {
      option: {
        id:'0',
        width: 500,
        min: 0,
        max: 100,
        data: [
          {
            id: "1",
            text: "时间轴",
            start: 2,
            end: 20,
          },
          {
            id: "2",
            text: "时间轴2",
            start:30,
            end: 50,
          },
        ],
      },
      option1: {
        id:'0',
        width: 500,
        min: 0,
        max: 100,
        data: [
          {
            id: "1",
            text: "时间轴",
            start: 2,
            end: 20,
          },
          {
            id: "2",
            text: "时间轴2",
            start:30,
            end: 50,
          },
        ],
      },
    };
  },
};
</script>

<style>
#app {
  width: 600px;
  height: 300px;
  background-color: pink;
  margin: 0 auto;
  padding: 24px;
  overflow: auto;
}
</style>
