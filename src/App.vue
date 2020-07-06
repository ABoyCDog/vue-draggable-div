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
import VueDraggableResizable from './components/vue-draggable-div'
import './components/vue-draggable-div.css'

export default {
  name: 'app',
  components: {
    VueDraggableResizable
  }
}
</script>

<style>
  .vdr {
    border: 1px dashed black;
  }
</style>
