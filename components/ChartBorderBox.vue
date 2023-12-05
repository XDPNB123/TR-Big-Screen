<template>
  <div class="box">
    <div class="corner corner-tl"></div>
    <div class="corner corner-tr"></div>
    <div class="corner corner-bl"></div>
    <div class="corner corner-br"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.box {
  border: 3px solid #2e5099;
  position: relative;
}
.corner {
  position: absolute;
  width: 2vw;
  height: 2vw;
}
.corner-tl {
  top: -5px;
  left: -5px;
  border-radius: 5px;
  border-top: 5px solid #7ce7fd;
  border-left: 5px solid #7ce7fd;
}
.corner-tr {
  top: -5px;
  right: -5px;
  border-radius: 5px;
  border-top: 5px solid #7ce7fd;
  border-right: 5px solid #7ce7fd;
}
.corner-bl {
  bottom: -5px;
  left: -5px;
  border-radius: 5px;
  border-bottom: 5px solid #7ce7fd;
  border-left: 5px solid #7ce7fd;
}
.corner-br {
  bottom: -5px;
  right: -5px;
  border-radius: 5px;
  border-bottom: 5px solid #7ce7fd;
  border-right: 5px solid #7ce7fd;
}
</style>
