<template>
  <div class='hello'>
    <p>横向条形图</p>
    <div
      ref='payrow'
      class='payrow'
    ></div>
  </div>
</template>

<script>
export default {
  name: 'PayRow',
  data () {
    var data = []
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200))
    }
    return {
      payRowData: {
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }
    }
  },
  mounted () {
    const _this = this
    const PayRow = this.$echarts.init(this.$refs.payrow)
    PayRow.setOption(this.payRowData)
    setTimeout(function () {
      _this.run()
    }, 0)
    setInterval(function () {
      _this.run()
    }, 3000)
  },
  methods: {
    run () {
      var data = this.payRowData.series[0].data
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000)
        } else {
          data[i] += Math.round(Math.random() * 200)
        }
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.payrow {
  width:843px;
  height: 936px;
  background: url('../../assets/payimg/payrows.png') no-repeat;
  background-size: 100% 100%;
}
</style>
