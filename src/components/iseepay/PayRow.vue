<template>
  <div class='payrow'>
    <p class='payrowtitle'>创建订单各终端用户数据</p>
    <div>
      <div
        v-for='proitem in proitems'
        :key='proitem.id'
        class='payrowprogress'
      >
        <div class='proitemmainname'>{{proitem.name}}</div>
        <div class='proitemmainbac'>
          <div
            :style='proitem.widthdata'
            class='proitemmainpro'
          ></div>
        </div>
        <div class='proitemmainnum'>{{proitem.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayRow',
  data () {
    return {
      proitems: [
        {
          id: '1',
          name: 'APH',
          widthdata: { width: '259px' },
          num: 1223
        },
        {
          id: '2',
          name: 'IOS',
          widthdata: { width: '352px' },
          num: 1678
        },
        {
          id: '3',
          name: 'Pad',
          widthdata: { width: '506px' },
          num: 1987
        },
        {
          id: '4',
          name: 'iPad',
          widthdata: { width: '346px' },
          num: 1356
        },
        {
          id: '5',
          name: 'TV',
          widthdata: { width: '479px' },
          num: 1865
        },
        {
          id: '6',
          name: 'Win',
          widthdata: { width: '154px' },
          num: 342
        },
        {
          id: '7',
          name: 'Mac',
          widthdata: { width: '302px' },
          num: 678
        },
        {
          id: '8',
          name: 'PC',
          widthdata: { width: '397px' },
          num: 1008
        },
        {
          id: '9',
          name: '小程序',
          widthdata: { width: '56px' },
          num: 21
        }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.payrow {
  text-align: center;
  .payrowtitle {
    width: 275px;
    height: 40px;
    line-height: 40px;
    position: relative;
    background: url('../../assets/payimg/paycol.png') no-repeat;
    background-size: 275px 40px;
    left: 284px;
    top: -27px;
    color: #3bd8ff;
  }
  .payrowprogress {
    position: relative;
    display: flex;
    justify-content: start;
    margin-top: 50px;
    left: 35px;
    top: 20px;
    .proitemmainname {
      font-size: 24px;
      color: #ffffff;
      width: 106px;
      position: relative;
      display: flex;
      justify-content: start;
    }
    .proitemmainbac {
      width: 563px;
      height: 28px;
      background: rgba(255, 255, 255, 0.16);
      border-radius: 14px;
      .proitemmainpro {
        height: 28px;
        background: linear-gradient(90deg, #2f59f2 0%, #6bc8e6 100%);
        border-radius: 12px;
      }
    }
    .proitemmainnum {
      font-size: 24px;
      color: #ffffff;
      margin-left: 30px;
      position: relative;
      display: flex;
      justify-content: start;
    }
  }
}
</style>
