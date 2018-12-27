var wxCharts = require('../utils/wxcharts.js');
var app = getApp();
var columnSales = null;
Page({
  data: {
    chartTitle: '销量统计',
    isMainChartDisplay: true,
    statimes: ['年', '月', '日'],
    navon: 0,
    being: 0,
    chartData: {
      title: '销量统计',
      dataY: [15, 20, 45, 37, 15, 100, 45, 37, 15, 20, 100, 100],
      categoriesX: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      peopleY: [15, 20, 45, 37, 15, 100, 45, 37, 15, 20, 100, 100],
      peopletimeX: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    }
  },
  onReady: function (e) {
    this.echartSales('columnCanvas', this.data.chartData.categoriesX, this.data.chartData.dataY)
  },
  onShow() {
  },
  changeSales(e) {
    this.setData({
      navon: e.currentTarget.dataset.navon,
      chartData: {
        dataY: [15, 20, 45, 37, 15, 100, 45, 37, 15, 20, 100, 100],
        categoriesX: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
      }
    })
    columnSales.updateData({
      categories: this.data.chartData.categoriesX,
      series: [{
        name: '成交量',
        data: this.data.chartData.dataY
      }]
    });

  },
  /**获得宽度 */
  getWidth(rpx) {
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth * rpx / 750;

    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    return windowWidth;
  },
  echartSales(id, obj, data) {
    let width = this.getWidth(750);
    columnSales = new wxCharts({
      canvasId: id,
      type: 'column',
      dataPointShape: false,
      animation: true,
      categories: obj,
      series: [{
        name: '成交量',
        data: data
      }],
      yAxis: {
        title: '',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration',
        axisLine: false,
      },
      extra: {
        column: {
          width: 20
        }
      },
      enableScroll: true,
      width: width,
      height: 200,
      dataLabel: true,
      height: 200,
    });
  },
  touchstartSales(e) {
    columnSales.scrollStart(e);
  },
  touchmoveSales(e) {
    columnSales.scroll(e);
  },
  touchendSales(e) {
    columnSales.scrollEnd(e);
  }
});