<template>
  <div class="box">
    <div>
      <div class="title">{{ props.title }}</div>
      <div class="content">{{ props.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  borderColor: { type: String, required: true },
});
</script>

<style scoped>
.box {
  height: 18vh;
  background-color: #023f75;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 当元素为 static 定位，但其伪元素、子元素是非 static 定位时，要让元素的 overflow 生效，必须将元素改为非 static 定位 */
  overflow: hidden;
  position: relative;
  border-radius: 20px;
}
.box::before {
  /* 必须有 content 否则不显示 */
  /* before 伪元素在 static 和 relative 定位时，在直接子元素左侧 */
  /* before 伪元素在 absolute 和 fixed 定位时，在 box 元素中心 */
  content: "";
  position: absolute;
  /* 伪元素的宽度和高度，只有在与 box 同为 static 或非 static 定位时，才会取决于 box */
  width: 110%;
  height: 50%;
  background: linear-gradient(v-bind("props.borderColor"), #022f44);
  animation: border-animation infinite linear 4s;
}
.box::after {
  /* 必须有 content 否则不显示 */
  /* after 伪元素在 static 和 relative 定位时，在直接子元素右侧 */
  /* after 伪元素在 absolute 和 fixed 定位时，在 box 元素中心 */
  content: "";
  /* 父元素为 relative，子元素为 absolute 时，
  inset 会设置子元素的宽高为父元素宽高 - inset的值
  */
  inset: 8px;
  /* background-color 用于让 after 元素遮挡住 before 元素 */
  background-color: #121728;
  border-radius: 20px;
  position: absolute;
}
.title {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 2rem;
  text-align: center;
}
.content {
  position: relative;
  z-index: 1;
  color: white;
  font-size: 4rem;
  text-align: center;
}

@keyframes border-animation {
  0% {
    /* 修改 border-animation 所在元素的 transform 属性 */
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
