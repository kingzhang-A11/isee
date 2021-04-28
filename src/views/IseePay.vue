<template>
  <div class="iseepay">
    <div>
      <PayTop></PayTop>
      <div class="paylayout">
        <div class="leftlayout">
          <PayPie></PayPie>
          <PayCol></PayCol>
        </div>
      <div class="rightlayout">
        <PayRow></PayRow>
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iseepay {
  background-color: rgba($color: #080C31, $alpha: 1.0);
  width: 1920px;
  height: 1080px;
  position: relative;
  .paylayout{
    position: absolute;
  display: flex;
  justify-content: space-between;
  .leftlayout{
    height: 936px;
    width: 929px;;
  }
  }
}
</style>
