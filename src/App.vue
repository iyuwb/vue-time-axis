<template>
  <div id="app">
    <vueTimeAxis :option="option" />
    <vueTimeAxis :option="option1" />
    <button @click="option.data[0].end++">++++</button>
    <button @click="option1.data[0].end--">----</button>
  </div>
</template>

<script>
// import vueTimeAxis from "./package/vueTimeAxisDemo";

export default {
  name: "App",
  // components: {
  //   vueTimeAxis,
  // },
  data() {
    return {
      option: {
        id:'0',
        width: 1000,
        min: 0,
        max: 100,
        data: [
          {
            id: "1",
            text: "时间轴",
            start: 2,
            end: 10,
          },
          {
            id: "2",
            text: "时间轴2",
            start:15,
            end: 20,
          },
        ],
      },
      option1: {
        id:'0',
        width: 1000,
        min: 0,
        max: 100,
        data: [
          {
            id: "1",
            text: "时间轴",
            start: 2,
            end: 10,
          },
          {
            id: "2",
            text: "时间轴2",
            start:15,
            end: 20,
          },
        ],
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1000px;
  height: 300px;
  background-color: pink;
  margin: 0 auto;
  margin-top: 100px;
  padding: 24px;
  overflow: auto;
}
</style>
