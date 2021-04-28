<template>
  <div class="paytop">
    <p>终端订单支付</p>
  </div>
</template>

<script>
export default {
  name: 'PayTop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.paytop {
  // width: 1919px;
  text-align: center;
  height: 71px;
  background: url('../../assets/payimg/top.png') no-repeat;
  background-size: 100% 100%;
  // background-attachment: fixed;
  background-color: rgba($color: #000000, $alpha: 1.0);
  p{
    font-size: 34px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #00E2FF;
    line-height: 71px;
  }
}
</style>
