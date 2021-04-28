<template>
  <div class="iseesum">
    <SumTop class="sumtop"></SumTop>
    <div class="sumlayout">
      <div class="sumleft">
        <SumPie class="sumpie"></SumPie>
        <SumPayUser class="sumpayuser"></SumPayUser>
      </div>
      <div class="sumright">
        <SumTerUser class="sumteruser"></SumTerUser>
      </div>
    </div>
  </div>
</template>

<script>
const SumTop = () => import('../components/iseesum/SumTop')
const SumPayUser = () => import('../components/iseesum/SumPayUser')
const SumPie = () => import('../components/iseesum/SumPie')
const SumTerUser = () => import('../components/iseesum/SumTerUser')
export default {
  name: 'IseeSum',
  components: {
    SumPayUser,
    SumPie,
    SumTerUser,
    SumTop
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iseesum{
  width: 1920px;
  height: 1080px;
  background: rgba($color: #080C31, $alpha: 1.0);
  .sumtop{
    margin-bottom: 39px;
  }
  .sumlayout{
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0px 54px 32px 59px;
    .sumleft{
      height: 936px;
      width: 929px;
      margin-right:30px ;
      .sumpie{
        width: 929px;
        height: 432px;
        background: url('../assets/payimg/payrows.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 38px;
      }
      .sumpayuser{
        width: 929px;
        height: 467px;
        background: url('../assets/payimg/payrows.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .sumright{
      margin-top: 15px;
      width:843px;
      height: 936px;
      background: url('../assets/payimg/paycols.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
