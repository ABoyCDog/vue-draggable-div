import vue-draggable-div from '@/components/vue-draggable-div'
import { mount } from '@vue/test-utils'

let wrapper

describe('classes props', function () {
  it('should provide the default class name as `class-name` prop', function () {
    wrapper = mount(vue-draggable-div, {
      propsData: {
        className: 'my-class'
      }
    })

    expect(wrapper.props().className).to.equal('my-class')
    expect(wrapper.classes()).to.contain('my-class')
  })

  it('should provide the active class name as `class-name-active` prop', function () {
    wrapper = mount(vue-draggable-div, {
      propsData: {
        classNameActive: 'my-active-class',
        active: true
      }
    })

    expect(wrapper.props().classNameActive).to.equal('my-active-class')
    expect(wrapper.classes()).to.contain('my-active-class')
  })

  it('should provide the dragging class name as `class-name-dragging` prop', function () {
    wrapper = mount(vue-draggable-div, {
      propsData: {
        classNameDragging: 'my-dragging-class'
      }
    })

    expect(wrapper.props().classNameDragging).to.equal('my-dragging-class')
  })

  it('should provide the resizing class name as `class-name-resizing` prop', function () {
    wrapper = mount(vue-draggable-div, {
      propsData: {
        classNameResizing: 'my-resizing-class'
      }
    })

    expect(wrapper.props().classNameResizing).to.equal('my-resizing-class')
  })

  it('should provide the handle class name as `class-name-handle` prop', function () {
    wrapper = mount(vue-draggable-div, {
      propsData: {
        classNameHandle: 'my-handle-class'
      }
    })

    expect(wrapper.props().classNameHandle).to.equal('my-handle-class')
    expect(wrapper.findAll('div.my-handle-class').length).to.equal(8)
  })

  afterEach(() => wrapper.destroy())
})
