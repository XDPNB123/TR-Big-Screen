import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
// 在这里导入图表组件
import { PieChart, LineChart } from "echarts/charts";
// 在这里导入小组件
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";

export default defineNuxtPlugin(() => {
  // 导入组件后需要在此处注册
  use([
    PieChart,
    LineChart,
    CanvasRenderer,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
  ]);
});
