<template>
  <div class="overflow-hidden h-screen" style="background-color: #100c2a">
    <div class="grid grid-cols-5 gap-6 p-6" style="background-color: #100c2a">
      <AnimateBorderBox
        title="设备数量"
        content="18"
        borderColor="red"
      ></AnimateBorderBox>
      <AnimateBorderBox
        title="累计巡检"
        content="32"
        borderColor="yellow"
      ></AnimateBorderBox>
      <AnimateBorderBox
        title="累计保养"
        content="2"
        borderColor="blue"
      ></AnimateBorderBox>
      <AnimateBorderBox
        title="累计报修"
        content="4"
        borderColor="green"
      ></AnimateBorderBox>
      <AnimateBorderBox
        title="累计更换备件"
        content="9"
        borderColor="pink"
      ></AnimateBorderBox>
    </div>

    <div class="grid grid-cols-2 gap-16 m-6">
      <ChartBorderBox>
        <div class="mt-6 text-white text-5xl text-center">设备运行状态</div>
        <client-only>
          <v-chart class="pie-chart" :option="pieOption" />
        </client-only>
      </ChartBorderBox>

      <ChartBorderBox>
        <div class="mt-6 mb-8 text-white text-5xl text-center">
          设备运行趋势
        </div>
        <client-only>
          <v-chart class="line-chart" :option="lineOption" />
        </client-only>
      </ChartBorderBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import VChart, { THEME_KEY } from "vue-echarts";

// 为 EChart 图表提供暗色主题
provide(THEME_KEY, "dark");

const pieOption = ref<any>({
  series: [
    {
      color: ["#7CFFB2", "#4992FF", "#FDDD60", "#FF6E76"],
      type: "pie",
      // 以半径 50-250 画圆
      radius: [50, 250],
      // 水平和垂直居中
      center: ["50%", "50%"],
      itemStyle: {
        borderRadius: 24,
      },
      label: {
        formatter(param: any) {
          // correct the percentage
          return `${param.name}：${param.value}`;
        },
        fontSize: 24,
      },
      data: [
        { value: 32, name: "正常运行设备数" },
        { value: 18, name: "带病运行设备数" },
        { value: 8, name: "停机维修设备数" },
        { value: 6, name: "报废设备数" },
      ],
    },
  ],
});

const lineOption = ref<any>({
  color: ["#7CFFB2", "#4992FF", "#FDDD60", "#FF6E76"],
  legend: {
    data: ["正常运行设备数", "带病运行设备数", "停机维修设备数", "报废设备数"],
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  grid: {
    left: "3%",
    right: "3%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      axisLabel: {
        fontSize: 20,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "正常运行设备数",
      type: "line",
      smooth: true,
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [50, 48, 52, 49, 51, 53, 54],
    },
    {
      name: "带病运行设备数",
      type: "line",
      smooth: true,
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [30, 38, 32, 39, 31, 33, 34],
    },
    {
      name: "停机维修设备数",
      type: "line",
      smooth: true,
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [20, 22, 24, 24, 24, 24, 25],
    },
    {
      name: "报废设备数",
      type: "line",
      smooth: true,
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [8, 12, 14, 14, 14, 14, 15],
    },
  ],
});
</script>

<style scoped>
.pie-chart {
  height: 65vh;
}
.line-chart {
  height: 55vh;
}
</style>
