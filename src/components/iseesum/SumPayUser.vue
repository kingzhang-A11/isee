<template>
  <div class='sumpayuser'>
    <p class='userdata'>支付用户数</p>
    <div class='payusersum'>
      <div v-for='item in items' :key='item.id'>
        <p class='usersumtitile'>{{item.title}}</p>
        <div class='usersumimg'><img :src='item.src' alt=''></div>
        <p class='usersumper'>{{item.percentage}}</p>
        <p class='usersums'>{{item.sum}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SumPayUser',
  data () {
    return {
      items: [
        {
          id: 1,
          title: '快手支付用户数',
          src: require('../../assets/platformimg/kuaishou.png'),
          percentage: '32%',
          sum: 2331
        },
        {
          id: 2,
          title: '抖音支付用户数',
          src: require('../../assets/platformimg/douyin.png'),
          percentage: '32%',
          sum: 2331
        },
        {
          id: 3,
          title: '广联通支付用户数',
          src: require('../../assets/platformimg/guang.png'),
          percentage: '32%',
          sum: 2331
        }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .sumpayuser{
      width: 920px;
      height: 461.5px;
      overflow: hidden;
    .userdata{
      width: 220px;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      font-weight: 500;
      color: #3BD8FF;
      background: url('../../assets/payimg/paycol.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
      position: relative;
      top:-37px;
      left: 335px;
    }
    .payusersum{
      padding: 0 116px 100px 104px;
      display: flex;
      justify-content: space-between;
      position: relative;
      top: -25px;
      color: white;
      text-align: center;
      .usersumtitile{
        font-size: 18px;
        color: #EFEFEF;
      }
      .usersumimg{
        width: 164px;
        height: 164px;
        margin-top:40px;
        img {
          height: 164px;
        }
      }
      .usersumper{
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba($color: #2A87FA, $alpha: 1);
      }
      .usersums{
        font-size: 36px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #EFEFEF;
        position: relative;
        bottom: 25px;
      }
    }
  }
</style>
