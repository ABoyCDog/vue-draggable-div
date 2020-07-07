<!--
 * @Author: your name
 * @Date: 2020-07-03 09:06:01
 * @LastEditTime: 2020-07-06 16:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-draggable-div\src\App.vue
-->
<template>
  <div id="app">
    <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
      <vue-draggable-div :w="400" :h="400" :parent="true" :debug="false" :min-width="200" :min-height="200">
        <p>vue-draggable-div</p>
      </vue-draggable-div>
    </div>
  </div>
</template>

<script>
import VueDraggableDiv from './components/vue-draggable-div'
import './components/vue-draggable-div.css'

export default {
  name: 'app',
  components: {
    VueDraggableDiv
  }
}
</script>

<style>
  .vdr {
    border: 1px dashed black;
  }
</style>
