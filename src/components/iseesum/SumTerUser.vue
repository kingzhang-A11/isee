<template>
  <div class='sumteruser'>
    <p class='sumterusermaintitle'>各个终端激活用户数</p>
    <div class='sumteruserlayout' v-for='waterlist in waterlists' :key='waterlist.id'>
      <el-row :gutter='20'>
        <el-col :span='20'>
          <div class='grid-content bg-purple'>
            <div ref=‘waterlist.refer’></div>
            <div><img src='waterlist.arrow' alt=''></div>
            <div>
              <p>{{waterlist.title}}</p>
              <p>{{waterlist.num}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SumTerUser',
  data () {
    return {
      waterlists: [
        {
          id: '1',
          refer: 'waterfirst',
          arrow: '../../assets/platformimg/arrow.png',
          title: '抖音激活用户',
          num: 32442
        },
        {
          id: '2',
          refer: 'watersecond',
          arrow: '../../assets/platformimg/arrow.png',
          title: '快手激活用户',
          num: 6382
        },
        {
          id: '3',
          refer: 'waterthird',
          arrow: '../../assets/platformimg/arrow.png',
          title: '广点通激活用户',
          num: 4345
        }
      ]
      // WaterReferData: [
      // ]
    }
  },
  mounted () {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.sumteruser {
  position: relative;
  margin-top: 20px;
  .sumterusermaintitle {
    position: absolute;
    top: -50px;
    left: 284px;
    width: 275px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #3bd8ff;
    background: url('../../assets/payimg/paycol.png') no-repeat;
    background-size: 100% 100%;
  }
  .sumteruserlayout {
    position: relative;
    left: 72px;
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      height: 291px;
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
}
</style>
