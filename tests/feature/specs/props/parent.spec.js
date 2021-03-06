import vue-draggable-div from '@/components/vue-draggable-div'
import { mount } from '@vue/test-utils'
import syn from 'syn'

let wrapper

describe('`parent` prop', function () {
  it('should drag the component outside the parent node if `parent` prop is false', function (done) {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-div :x="0" :y="0" :w="200" :h="200" :parent="false" :active="true"></vue-draggable-div>
      </div>`,
      components: {
        vue-draggable-div
      }
    }

    wrapper = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper.vm.$nextTick(() => {
      const $el = wrapper.vm.$children[0].$el

      const rect = $el.getBoundingClientRect()
      const fromX = rect.left
      const fromY = rect.top

      syn.drag(
        $el,
        {
          from: { pageX: fromX, pageY: fromY },
          to: { pageX: fromX + 50, pageY: fromY + 50 },
          duration: 10
        },
        function () {
          expect($el.style.transform).to.equal('translate(50px, 50px)')

          done()
        }
      )
    })
  })

  it('should not drag the component outside the parent node if `parent` prop is true', function (done) {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-div :x="0" :y="0" :w="200" :h="200" :parent="true" :active="true"></vue-draggable-div>
      </div>`,
      components: {
        vue-draggable-div
      }
    }

    wrapper = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper.vm.$nextTick(() => {
      const $el = wrapper.vm.$children[0].$el

      const rect = $el.getBoundingClientRect()
      const fromX = rect.left + rect.width / 2
      const fromY = rect.top + rect.height / 2

      syn.drag(
        $el,
        {
          from: { pageX: fromX, pageY: fromY },
          to: { pageX: fromX + 50, pageY: fromY + 50 },
          duration: 10
        },
        function () {
          expect($el.style.transform).to.equal('translate(0px, 0px)')

          done()
        }
      )
    })
  })

  it('should resize the component outside the parent node if `parent` prop is false', function (done) {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-div :w="200" :h="200" :parent="false" :active="true"></vue-draggable-div>
      </div>`,
      components: {
        vue-draggable-div
      }
    }

    wrapper = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper.vm.$nextTick(() => {
      const $el = wrapper.vm.$children[0].$el

      const rect = $el.querySelector('div.handle-br').getBoundingClientRect()
      const fromX = rect.left
      const fromY = rect.top

      syn.drag(
        $el.querySelector('div.handle-br'),
        {
          from: { pageX: fromX, pageY: fromY },
          to: { pageX: fromX + 50, pageY: fromY + 50 },
          duration: 10
        },
        function () {
          expect($el.style.transform).to.equal('translate(0px, 0px)')
          expect($el.style.width).to.equal('250px')
          expect($el.style.height).to.equal('250px')

          done()
        }
      )
    })
  })

  it('should not resize the component outside the parent node if `parent` prop is true', function (done) {
    const ParentComponent = {
      template: `<div class="parent" style="width: 200px; height: 200px;">
        <vue-draggable-div :w="200" :h="200" :parent="true" :active="true"></vue-draggable-div>
      </div>`,
      components: {
        vue-draggable-div
      }
    }

    wrapper = mount(ParentComponent, {
      attachToDocument: true
    })

    wrapper.vm.$nextTick(() => {
      const $el = wrapper.vm.$children[0].$el

      const rect = $el.querySelector('div.handle-br').getBoundingClientRect()
      const fromX = rect.left
      const fromY = rect.top

      syn.drag(
        $el.querySelector('div.handle-br'),
        {
          from: { pageX: fromX, pageY: fromY },
          to: { pageX: fromX + 50, pageY: fromY + 50 },
          duration: 10
        },
        function () {
          expect($el.style.transform).to.equal('translate(0px, 0px)')
          expect($el.style.width).to.equal('200px')
          expect($el.style.height).to.equal('200px')

          done()
        }
      )
    })
  })

  afterEach(() => wrapper.destroy())
})
