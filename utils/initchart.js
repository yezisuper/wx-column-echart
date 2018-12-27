var wxCharts = require("wxcharts.js");


/**获得宽度 */
function getWidth(rpx) {
  let windowWidth = 320;
  try {
    let res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth * rpx / 750;

  } catch (e) {
    console.error('getSystemInfoSync failed!');
  }
  return windowWidth;
};


/**按百分比获得高度 */
function getPWinH(p) {
  let wh = 320;
  try {
    let res = wx.getSystemInfoSync();
    wh = Math.floor(res.windowHeight * p); //下舍入取整
  } catch (e) {
    console.error('getSystemInfoSync failed!');
  }
  return wh;
}

function random(f) {
  let a = Math.random() * f;
  return Number(a.toFixed(0));
}
/**配方产量报表 */
function show(v, cvid) {
  //模拟数据
  let width = getWidth(750);
  return new wxCharts({
    canvasId: cvid,
    dataPointShape: false,
    animation: true,
    type: 'column',
    categories: ['2012', '2013', '2014', '2015', '2012', '2013', '2014', '2015', '2012', '2013', '2014', '2015'],
    series: [{
      name: '成交量',
      data: [200, 20, 300, 37, 200, 20, 300, 37, 200, 20, 300, 37]
    }],
    yAxis: {
      min: 0,
      // format: function (val) {
      //   return val + 'm³';
      // }
    },
    xAxis: {
      disableGrid: false,
      axisLine: false,
      type: 'calibration',
    },
    enableScroll: true,
    width: width,
    height: 200,
    dataLabel: true,
    extra: {
      column: {
        width: 20 //柱的宽度
      }
    }
  });
}

module.exports = {
  show: show,
}