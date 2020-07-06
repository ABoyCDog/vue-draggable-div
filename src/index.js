/*
 * @Author: your name
 * @Date: 2020-07-03 09:06:01
 * @LastEditTime: 2020-07-03 17:48:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-draggable\src\index.js
 */
import './components/vue-draggable-div.css'

import VueDraggableDiv from './components/vue-draggable-div'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('vue-draggable-div', VueDraggableDiv)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default VueDraggableDiv
