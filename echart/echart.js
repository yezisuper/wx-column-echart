const app = getApp()
var ic = require('../../utils/initchart.js')
Page({
  data: {
    chart: null,
  },
  onLoad: function () {

  },
  onShow() {
    let chart = ic.show(this, "chart");
    this.setData({
      chart: chart
    });
  },
  touchstart(e) {
    if (this.data.chart) {
      this.data.chart.scrollStart(e);
    }

  },
  touchmove(e) {
    if (this.data.chart) {
      this.data.chart.scroll(e);
    }
  },
  touchend(e) {
    if (this.data.chart) {
      this.data.chart.scrollEnd(e);
    }

  },
})