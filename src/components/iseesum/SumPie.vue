<template>
  <div class='sumpiemain'>
    <p>注册用户数量</p>
    <div
      ref='sumpie'
      class='sumpie'
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SumPie',
  data () {
    return {
      chart: '',
      sumPieData: {
        PieChartData: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' }
              ]
            }
          ]
        }
      }
    }
  },
  // watch: {
  //   PieChartData: {
  //     handler(newVal, oldVal) {
  //       if (this.chart) {
  //         if (newVal) {
  //           this.chart.setOption(newVal)
  //         } else {
  //           this.chart.setOption(oldVal)
  //         }
  //       }
  //     },
  //     deep: true
  //   }
  // },
  mounted () {
    const PieChart = this.$echarts.init(this.$refs.sumpie)
    PieChart.setOption(this.sumPieData.PieChartData)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.sumpiemain {
  p {
    width: 220px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #3bd8ff;
    background: url('../../assets/payimg/paycol.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    position: relative;
    top: -17px;
    left: 335px;
  }
  .sumpie{
    width: 894px;
    height: 384px;
  }
}
</style>
