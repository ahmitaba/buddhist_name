<template>
  <div class="recent-count">
    <h1>近期統計（最近30天）</h1>
    <div class="ui segment container" style="min-height: 300px;">
      <div class="ui active inverted dimmer" v-show="dailyCounts.length === 0">
        <div class="ui text loader">資料載入中...</div>
      </div>
      <div class="ui list" v-show="dailyCounts.length > 0">
        <div class="item" v-for="(item, index) in dailyCounts" :key="index">
          <div class="content">
            <div class="header">日期：{{ item.date }}</div>
            <br/>
            <div class="description">當日加總：<b>{{ item.total }}</b>聲佛號</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentCountView',
  metaInfo: {
    title: '近期統計',
  },
  props: ['names', 'allnames'],
  computed: {
    dailyCounts() {
      const counts = {}
      const today = new Date()
      const thirtyDaysAgo = new Date(today)
      thirtyDaysAgo.setDate(today.getDate() - 30)

      // 處理所有資料（包含歷史資料）
      const allData = this.allnames || []
      
      for (let i = 0; i < allData.length; i++) {
        const record = allData[i]
        if (!record || !record.date || !record.number) continue

        // 解析日期字串（格式：2025/2/22）
        const dateParts = record.date.split('/')
        if (dateParts.length !== 3) continue

        const recordDate = new Date(
          parseInt(dateParts[0]), // 年
          parseInt(dateParts[1]) - 1, // 月（0-based）
          parseInt(dateParts[2]) // 日
        )

        // 只統計最近30天的資料
        if (recordDate >= thirtyDaysAgo && recordDate <= today) {
          const dateKey = record.date
          if (!counts[dateKey]) {
            counts[dateKey] = {
              date: dateKey,
              total: 0
            }
          }
          counts[dateKey].total += parseInt(record.number) || 0
        }
      }

      // 轉換為陣列並排序（最新的在前）
      const result = Object.values(counts).sort((a, b) => {
        const dateA = a.date.split('/')
        const dateB = b.date.split('/')
        const timeA = new Date(parseInt(dateA[0]), parseInt(dateA[1]) - 1, parseInt(dateA[2])).getTime()
        const timeB = new Date(parseInt(dateB[0]), parseInt(dateB[1]) - 1, parseInt(dateB[2])).getTime()
        return timeB - timeA
      })

      return result
    }
  }
}
</script>

<style scoped>
.recent-count {
  padding: 20px;
}

.container {
  max-width: 800px;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 auto;
}

.item {
  padding: 10px 0 !important;
  border-bottom: 1px solid #e0e0e0;
}

.item:last-child {
  border-bottom: none;
}

.header {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  font-size: 14px;
  color: #666;
}
</style>

