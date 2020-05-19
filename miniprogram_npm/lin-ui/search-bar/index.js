// cpn/search-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: [
    'l-class',
    'l-input-container',
    'l-placeholder-class',
    'l-input-class',
    'l-cancel-class'
  ],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    confirmType: {
      type: String,
      value: 'search'
    },
    placeholder: String,
    confirmType: {
      type: String,
      value: 'search'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    address: String,
    iconColor: {
      type: String,
      value: '#333'
    },
    iconSize: {
      type: String,
      value: '28'
    },
    bgColor: {
      type: String,
      value: '#f3f3f3'
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    shape: {
      type: String,
      value: 'primary'
    },
    TextAlign: {
      type: String,
      value: 'left'
    },
    adress: String,
    // 获取焦点
    focus: {
      type: Boolean,
      value: false
    },
    // 是否显示清除按钮
    clear: {
      type: Boolean,
      value: true
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      value: 140
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 占位文字的样式  
    placeholderStyle: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel() {
      this.triggerEvent('lincancel')
    },
    // input属性列表
    handleInputChange(event) {
      const {
        detail = {}
      } = event;
      const {
        value = ''
      } = detail;

      this.setData({
        value
      });

      this.triggerEvent('linchange', detail);
    },

    handleInputFocus(event) {
      this.triggerEvent('linfocus', event.detail);
    },

    handleInputBlur(event) {
      this.triggerEvent('linblur', event.detail);
    },

    handleInputConfirm(event) {
      const {
        detail = {}
      } = event;
      const {
        value = ''
      } = detail;

      this.setData({
        value
      });

      this.triggerEvent('linconfirm', detail);
    },

    onClearTap(event) {
      this.setData({
        value: ''
      });
      this.triggerEvent('linclear', event.detail);
    }
  }
});