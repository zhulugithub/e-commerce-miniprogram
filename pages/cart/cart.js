Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        id: 1,
        name: '这是一双鞋',
        count: 1,
        price: 100.00,
        img: '../../resource/image/1.jpeg',
        icon_color: '#f4f4f4',
        checked: false
      },
      {
        id: 2,
        name: '一双限量款的鞋',
        count: 1,
        price: 100.00,
        img: '../../resource/image/2.jpeg',
        icon_color: '#f4f4f4',
        checked: false
      },
      {
        id: 3,
        name: '一双价值连城的鞋',
        count: 1,
        price: 100.00,
        img: '../../resource/image/3.jpeg',
        icon_color: '#f4f4f4',
        checked: false
      }
    ],
    round_add: '../../resource/icons/round_add.png',
    round_sub: '../../resource/icons/round_sub.png',
    total_price: 0,
    checked: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 选中商品
  checked: function (event) {
    let index = event.currentTarget.dataset.index;
    this.data.items[index].checked = !this.data.items[index].checked;
    if (this.data.items[index].checked) {
      this.data.total_price += (this.data.items[index].price * this.data.items[index].count);
    } else {
      this.data.total_price -= (this.data.items[index].price * this.data.items[index].count);
    }
    this.setData(this.data);
  },

  // 修改商品数量
  product_quantity: function (event) {
    let index = event.target.dataset.index;
    let type = event.target.dataset.type;
    if (type == "sub") {
      if (this.data.items[index].count <= 1) {
        wx.showModal({ content: '数量不能再减少了', showCancel: false })
      } else {
        this.data.items[index].count--;
        if (this.data.items[index].checked) {
          let price = this.data.items[index].price;
          this.data.total_price -= price;
        }
      }
    } else {
      this.data.items[index].count++;
      if (this.data.items[index].checked) {
        let price = this.data.items[index].price;
        this.data.total_price += price;
      }
    }
    this.setData(this.data);
  },

  // 全选商品
  all: function (event) {
    this.data.total_price = 0;
    this.data.checked = !this.data.checked;
    for (let i = 0; i < this.data.items.length; i++) {
      this.data.items[i].checked = this.data.checked;
      if (this.data.checked) {
        this.data.total_price += (this.data.items[i].count * this.data.items[i].price);
      }
    }
    this.setData(this.data);
  },

  // 去结算
  pay: function (event) {

  },
})