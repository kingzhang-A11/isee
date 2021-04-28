<template>
  <div class='paybackground'>
    <p>创建订单终端分布</p>
    <div class="backgroundpay">
      <div
      class='pie'
      ref='pie'
    ></div>
    <div class="piedata">
      <el-table
        :data='tableData'
        style='width: 400px'
        height='350'
      >
        <el-table-column
          type='index'
          :index='indexMethod'
        >
        </el-table-column>
        <el-table-column
          prop='date'
          width='100'
        >
        </el-table-column>
        <el-table-column
          prop='name'
          width='100'
        >
        </el-table-column>
        <el-table-column
          prop='address'
        >
        </el-table-column>
      </el-table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayPie',
  data () {
    return {
      tableData: [
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        },
        {
          date: 'IOS',
          name: '856',
          address: '45%'
        }
      ],
      echartpie_option: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ],
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
  mounted: function () {
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
  margin-top:30px;
  width:929px;
  height: 432px;
  background: url('../../assets/payimg/paypie.png') no-repeat;
  background-size: 100% 100%;
  p {
    position: absolute;
    left: 355px;
    top: -35px;
    text-align: center;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #3BD8FF;
    width: 220px;
    height: 40px;
    line-height: 40px;
    background: url('../../assets/payimg/paypie.png') no-repeat;
    background-size: 100% 100%;
  }
  .backgroundpay{
    position:absolute;
    display: flex;
    justify-content: space-between;
.pie {
    width: 300px;
    height: 300px;
    margin: 30px;
  }
  .piedata {
    width: 300px;
    height: 350px;
    padding: 30px;
    margin-right: 30px;
  }
  }
}
</style>
