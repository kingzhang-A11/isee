<template>
  <div class='sumpiemain'>
    <p class='sumpiemaintiitle'>注册用户数量</p>
    <div
      ref='sumpie'
      class='sumpie'
    ></div>
    <div class='sumpieprogress'>
      <div class='progresslabel' v-for='label in prolabels' :key='label.id'>
        <div class='lablelayout'>
          <span class='labelshape' :style='label.stylecolor'></span>
          <span class='labeltitle'>{{label.title}}</span>
        </div>
      </div>
      <div class='progressmain' v-for='pro in prodate' :key='pro.id'>
        <div class='prousersum'>
          <span class='registertitle'>{{pro.title}}</span>
          <span class='registersum'>{{pro.sum}}</span>
        </div>
        <div class='proall'>
          <div class='promain' :style='{width:pro.width}'></div>
        </div>
      </div>
    </div>
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
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              center: ['25%', '50%'],
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '18',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: true
              },
              data: [
                { value: 3567, name: '快手注册用户数' },
                { value: 5000, name: '抖音注册用户数' },
                { value: 2265, name: '广点通注册用户数' }
              ]
            }
          ]
        }
      },
      prolabels: [
        { id: 6, stylecolor: { backgroundColor: '#DA8648' }, title: '快手' },
        { id: 7, stylecolor: { backgroundColor: '#697EFD' }, title: '抖音' },
        { id: 8, stylecolor: { backgroundColor: '#2D9D97' }, title: '广点通' }
      ],
      prodate: [
        { id: 1, title: '快手注册用户数', sum: 3567, width: '292px' },
        { id: 3, title: '抖音注册用户数', sum: 5000, width: '397px' },
        { id: 5, title: '广点通注册用户数', sum: 2266, width: '175px' }
      ]
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
  position: relative;
  .sumpiemaintiitle {
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
    height: 432px;
    position: relative;
    bottom: 60px;
  }
  .sumpieprogress{
    position: absolute;
    top: 63px;
    left: 455px;
    .progresslabel{
      height: 16px;
      line-height: 16px;
      position: relative;
      display: inline-block;
      .lablelayout{
         position: relative;
          display: flex;
          justify-content:start;
          margin-right: 75px;
        .labelshape{
          width: 15px;
          height: 15px;
          display: inline-block;
        }
        .labeltitle{
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #CCCCCC;
          display: inline-block;
          margin-left: 15px;
        }
      }
    }
    .progressmain{
      position: relative;
      margin-top: 40px;
      .prousersum{
        width: 400px;
        margin-bottom: 30px;
        position: relative;
        display: flex;
        justify-content: space-between;
        .registertitle{
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #EFEFEF;
        }
        .registersum{
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #EFEFEF;
        }
      }
      .proall{
        width: 400px;
        height: 6px;
        background: #2F3352;
        border-radius: 9px;
        .promain{
          height: 6px;
          background: url('../../assets/payimg/paycol.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
