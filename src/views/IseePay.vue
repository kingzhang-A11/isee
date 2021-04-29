<template>
  <div class='iseepay'>
    <PayTop class='iseepaytop'></PayTop>
    <div class='paylayout'>
      <div class='leftlayout'>
        <PayPie class='leftpie'></PayPie>
        <PayCol class='leftcol'></PayCol>
      </div>
      <div class='rightlayout'>
        <PayRow class='rightrow'></PayRow>
      </div>
    </div>
  </div>
</template>

<script>
const PayCol = () => import('../components/iseepay/PayCol')
const PayPie = () => import('../components/iseepay/PayPie')
const PayRow = () => import('../components/iseepay/PayRow')
const PayTop = () => import('../components/iseepay/PayTop')
export default {
  name: 'IseeSum',
  components: {
    PayCol,
    PayPie,
    PayRow,
    PayTop
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.iseepay {
  background-color: rgba($color: #080c31, $alpha: 1);
  width: 1920px;
  height: 1080px;
  position: relative;
  .paylayout {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0 54px 64px 59px;
    margin-top: 15px;
    .leftlayout {
      height: 936px;
      width: 929px;
      margin-right: 30px;
      .leftpie {
        width: 929px;
        height: 432px;
        background: url('../assets/payimg/payrows.png') no-repeat;
        background-size: 100% 100%;
      }
      .leftcol {
        width: 929px;
        height: 467px;
        background: url('../assets/payimg/payrows.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .rightlayout {
      margin-top: 27px;
      width: 843px;
      height: 923px;
      background: url('../assets/payimg/paycols.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
