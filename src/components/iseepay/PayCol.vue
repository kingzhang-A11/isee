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
        xAxis: {
          type: 'category',
          data: ['支付宝', '支付宝', '支付宝', '支付宝', '支付宝', '支付宝', '支付宝', '支付宝', '支付宝']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [181, 443, 659, 375, 940, 502, 18, 117, 866, 386, 846, 261],
            type: 'bar',
            label: {
              rotate: 30
            }
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
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #3BD8FF;
    position: relative;
    top: 40px;
    left: 355px;
    width: 220px;
    height: 40px;
    line-height: 40px;
    background: url('../../assets/payimg/paypie.png') no-repeat;
    background-size: 100% 100%;
  }
  .paycol{
    width: 929px;
    height: 467px;
    background: url('../../assets/payimg/paypie.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>
