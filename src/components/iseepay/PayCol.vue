<template>
  <div class='paycolmain'>
    <p>支付渠道</p>
    <div
      ref='paycol'
      class='paycol'
    ></div>
  </div>
</template>

<script>
export default {
  name: 'PayCol',
  data () {
    return {
      payColData: {
        // 柱形的颜色设置
        color: '#2466EE',
        xAxis: {
          type: 'category',
          data: [
            '微信',
            '支付宝',
            '微信',
            '银行卡',
            '南瓜籽',
            '支付宝',
            '微信',
            '支付宝',
            '微信',
            '支付宝',
            '微信',
            '支付宝'
          ],
          nameTextStyle: {
            fontSize: 14
          },
          axisLine: {
            lineStyle: {
              color: '#38D1F9',
              opacity: 0
            }
          },
          axisLabel: {
            // 底部标签文字的角度
            rotate: 50
          },
          max: function (value) {
            return value.max
          },
          axisTick: {
            // 去除x轴刻度线
            show: false
          }
        },
        yAxis: {
          type: 'value',
          // 分割条数
          splitNumber: 5,
          // 分割间隔
          interval: 250,
          nameTextStyle: {
            fontSize: 20
          },
          axisLine: {
            lineStyle: {
              color: '#38D1F9'
            }
          },
          splitLine: {
            // y轴分割线的配置
            show: true,
            lineStyle: {
              color: '#00AEFF',
              opacity: 0.1
            }
          }
        },
        series: [
          {
            data: [181, 443, 659, 375, 940, 502, 18, 117, 866, 386, 846, 261],
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              color: '#efefef',
              fontSize: 24
            },
            barWidth: 20
          }
        ]
      }
    }
  },
  mounted () {
    const payCol = this.$echarts.init(this.$refs.paycol)
    payCol.setOption(this.payColData)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.paycolmain {
  position: relative;
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #3bd8ff;
    position: relative;
    top: -16px;
    left: 355px;
    width: 220px;
    height: 40px;
    line-height: 40px;
    background: url('../../assets/payimg/paycol.png') no-repeat;
    background-size: 100% 100%;
  }
  .paycol {
    width: 929px;
    height: 467px;
    position: relative;
    bottom: 60px;
  }
}
</style>
