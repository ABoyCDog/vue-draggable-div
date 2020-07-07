<!--
 * @Author: your name
 * @Date: 2020-07-03 09:06:01
 * @LastEditTime: 2020-07-07 08:47:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-draggable\README.md
-->
# vue-draggable-div

## 说明
vue可拖拽可伸缩的组件，目前只是借鉴，详见以下  传送门

## 安装
```
npm install vue-draggable-div
```

## 使用
```
<script>
import VueDraggableDiv from 'vue-draggable-div'
    ...
components: {VueDraggableDiv}
```

**需要使用默认样式时，import 'vue-draggable-div/dist/vue-draggable-div.css'**


## 可选属性及触发事件

**Props：**
+ draggable

  > descibe: 是否可拖拽

  > type: Boolean

  > require: false

  > default: true

  ```js
    <vue-draggable-div :draggable="false">
  ```

+ resizable

  > descibe: 是否可缩放

  > type: Boolean

  > require: false

  > default: true

  ```js
    <vue-draggable-div :resizable="false">
  ```

+ w

  > descibe: 宽度

  > type: Number

  > require: false

  > default: 200

  ```js
    <vue-draggable-div :w="200">
  ```

+ h

  > descibe: 高度

  > type: Number

  > require: false

  > default: 200

  ```js
    <vue-draggable-div :h="200">
  ```

+ parent

  > descibe: 限制在父元素内移动

  > type: Boolean

  > require: false

  > default: false

  ```js
    <vue-draggable-div :parent="true">
  ```

+ dragHandle

  > descibe: 可拖拽的元素。定义应该用于拖动组件的选择器。绑定的值为元素的class选择器。

  > type: String

  > require: false

  > default: 默认整个组件。

  ```js
    <vue-draggable-div drag-handle=".draggable">
      <span class="undraggable">不可拖拽</span>
      <span class="draggable">可拖拽</span>
    </vue-draggable-div>
  ```

**Events：**

+ activated

  > descibe: 拖拽触发事件

  > type: Boolean

  > params: -

  > require: false

  ```js
    <vue-draggable-div @activated="activeFunc">
    </vue-draggable-div>
    ...
    <script>
      methods: {
        activeFunc() {}
      }
    </script>
  ```

+ resizing

  > descibe: 拖拽触发事件

  > type: Boolean

  > params: (left, top, width, height)

  > require: false

  ```js
    <vue-draggable-div @resizing="resizingFunc">
    </vue-draggable-div>
    ...
    <script>
      methods: {
        resizingFunc() {}
      }
    </script>
  ```

## 例子
```js
  <template>
    <div>
      <vue-draggable-div>
        <span>你拽我试试！！！</span>
      </vue-draggable-div>
    </div>
  </template>

  <script>
  import VueDraggableDiv from 'vue-draggable-div'
  export default {
    name: 'Test',
    data() {
      return {}
    },
    components: {
      VueDraggableDiv
    }
  }
  </script>
```

## 打包
打包使用命令 npm run build-bundle

### 代码详见
See [git](https://github.com/ABoyCDog/vue-draggable-div/).

### 参考 [传送门](https://github.com/mauricius/vue-draggable-div)
