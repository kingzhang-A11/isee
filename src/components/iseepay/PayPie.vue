<template>
  <div class='paybackground'>
    <p class='paybackgroundtitile'>创建订单终端分布</p>
    <div class='backgroundpay'>
      <div
        class='pie'
        ref='pie'
      ></div>
      <div>
        <div
          class='piedata'
          v-for='item in orderter'
          :key='item.id'
        >
          <div class='equip'>
            <div class='equipborder'>
              <div
                class='equipcircle'
                :style='item.stylecolor'
              ></div>
            </div>
            <div
              class='equiptitle'
              :style='item.stycolor'
            >{{item.title}}</div>
          </div>
          <div class='equipnum'>{{item.num}}</div>
          <div class='equipdata'>{{item.percent}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayPie',
  data () {
    return {
      orderter: [
        {
          id: '1',
          stylecolor: { backgroundColor: '#00AEFF' },
          stycolor: { color: '#00AEFF' },
          title: 'IOS',
          num: 858,
          percent: '45%'
        },
        {
          id: '2',
          stylecolor: { backgroundColor: '#3825C8' },
          stycolor: { color: '#3825C8' },
          title: 'APH',
          num: 858,
          percent: '45%'
        },
        {
          id: '3',
          stylecolor: { backgroundColor: '#3DCFEE' },
          stycolor: { color: '#3DCFEE' },
          title: 'PAD',
          num: 858,
          percent: '45%'
        },
        {
          id: '4',
          stylecolor: { backgroundColor: '#C0528D' },
          stycolor: { color: '#C0528D' },
          title: 'ipad',
          num: 858,
          percent: '45%'
        },
        {
          id: '5',
          stylecolor: { backgroundColor: '#DAB93D' },
          stycolor: { color: '#DAB93D' },
          title: 'Win',
          num: 858,
          percent: '45%'
        },
        {
          id: '6',
          stylecolor: { backgroundColor: '#C65946' },
          stycolor: { color: '#C65946' },
          title: 'Mac',
          num: 858,
          percent: '45%'
        },
        {
          id: '7',
          stylecolor: { backgroundColor: '#136368' },
          stycolor: { color: '#136368' },
          title: 'iPad',
          num: 858,
          percent: '45%'
        },
        {
          id: '8',
          stylecolor: { backgroundColor: '#7D60B3' },
          stycolor: { color: '#7D60B3' },
          title: 'PC',
          num: 858,
          percent: '45%'
        },
        {
          id: '9',
          stylecolor: { backgroundColor: '#DA8648' },
          stycolor: { color: '#DA8648' },
          title: '小程序',
          num: 858,
          percent: '45%'
        }
      ],
      echartpie_option: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '订单终端分布',
            type: 'pie',
            radius: '50%',
            center: ['33%', '35%'],
            label: {
              show: true,
              position: 'inside'
            },
            data: [
              { value: 1048, name: 'IOS' },
              { value: 735, name: 'APH' },
              { value: 580, name: 'PAD' },
              { value: 484, name: 'ipad' },
              { value: 300, name: 'Win' },
              { value: 234, name: 'Mac' },
              { value: 231, name: 'iPad' },
              { value: 213, name: 'PC' },
              { value: 534, name: '小程序' }
            ].sort((a, b) => {
              return a.value - b.value
            }),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted () {
    const myChart = this.$echarts.init(this.$refs.pie)
    myChart.setOption(this.echartpie_option)
  },
  methods: {
    indexMethod (index) {
      return index * 2
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.paybackground {
  position: relative;
  margin-top: 30px;
  width: 929px;
  height: 432px;
  background: url('../../assets/payimg/paypie.png') no-repeat;
  background-size: 100% 100%;
  .paybackgroundtitile {
    position: absolute;
    left: 355px;
    top: -35px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #3bd8ff;
    width: 220px;
    height: 40px;
    line-height: 40px;
    background: url('../../assets/payimg/paycol.png') no-repeat;
    background-size: 100% 100%;
  }
  .backgroundpay {
    position: absolute;
    display: flex;
    justify-content: space-between;
    .pie {
      width: 600px;
      height: 600px;
      position: relative;
    }
    .piedata {
      height: 40px;
      line-height: 40px;
      position: relative;
      top: 40px;
      left: -60px;
      display: flex;
      justify-content: space-between;
      .equip {
        width: 155px;
        position: relative;
        display: flex;
        justify-content: start;
        .equipborder {
          position: relative;
          top: 15px;
          margin-right: 25px;
          .equipcircle {
            width: 11px;
            height: 11px;
            border-radius: 50%;
          }
        }
        .equiptitle {
          font-size: 20px;
        }
      }
      .equipnum {
        width: 130px;
        font-size: 20px;
        color: #ffffff;
      }
      .equipdata {
        width: 130px;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
}
</style>
