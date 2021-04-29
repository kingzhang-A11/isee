<template>
  <div class='sumteruser'>
    <p class='sumterusermaintitle'>各个终端激活用户数</p>
    <div
      class='sumteruserlayout'
      v-for='waterlist in waterlists'
      :key='waterlist.id'
    >
      <el-row :gutter='20'>
        <el-col :span='20'>
          <div class='grid-content bg-purple'>
            <div
              :ref='`water${waterlist.refer}`'
              class='liquidfill-chart'
            ></div>
            <div class='summainimg'><img
                :src='waterlist.arrow'
                alt=''
              ></div>
            <div class='sumaindata'>
              <p class='datatitle'>{{waterlist.title}}</p>
              <p class='datanum'>{{waterlist.num}}</p>
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
          index: 1,
          refer: 'first',
          arrow: require('../../assets/platformimg/arrow.png'),
          title: '抖音激活用户',
          num: 32442
        },
        {
          id: '2',
          index: 2,
          refer: 'second',
          arrow: require('../../assets/platformimg/arrow.png'),
          title: '快手激活用户',
          num: 6382
        },
        {
          id: '3',
          index: 3,
          refer: 'third',
          arrow: require('../../assets/platformimg/arrow.png'),
          title: '广点通激活用户',
          num: 4345
        }
      ],
      WaterPhaData: {
        series: [
          {
            type: 'liquidFill',
            radius: '100px',
            data: [0.6],
            label: {
              normal: {
                color: '#fff',
                insideColor: 'transparent',
                textStyle: {
                  fontSize: 30,
                  fontWeight: 'bold'
                }
              }
            },
            color: [
              {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 1,
                    color: ['#6a7feb'] // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: ['#27e5f1'] // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            ],
            outline: {
              show: true,
              borderDistance: 5,
              itemStyle: {
                borderColor: 'rgba(67,209,100,1)',
                borderWidth: 0
              }
            }
          }
        ]
      }
    }
  },
  mounted () {
    for (let i, len = this.waterlists.length; i < len; i++) {
      const WaterPha = this.$echarts.init(this.$refs[`water${i.refer}`])
      // ?问题：数据取不到
      console.log(i.refer)
      WaterPha.setOption(this.WaterPhaData)
    }
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
      padding: 60px 108px 54px 0;
      border-radius: 4px;
      min-height: 36px;
      height: 187px;
      position: relative;
      display: flex;
      justify-content: space-between;
      .liquidfill-chart {
        width: 187px;
        height: 187px;
      }
      .summainimg {
        width: 56px;
        height: 187px;
        line-height: 187px;
        overflow: hidden;
        padding-top: 10px;
        img {
          height: 56px;
        }
      }
      .sumaindata {
        width: 130px;
        text-align: center;
        .datatitle {
          padding-top: 15px;;
          font-size: 18px;
          font-weight: 400;
          color: #FFFFFF;
        }
        .datanum {
          font-size: 36px;
          font-weight: 500;
          color: #FFFFFF;
          margin-top: 50px;
        }
      }
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
}
</style>
