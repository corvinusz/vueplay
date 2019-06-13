<template lang='pug'>
  div
    v-selectpage(
      language='en',
      title='dataOne',
      :data='list',
      key-field='id',
      show-field='data',
      :page-size='pageSize',
      :key="renderSelect"
    )
    v-page(
      language='en',
      pageSize='pageSize',
      :totalRow='totalRow'
    )
</template>
<script>
import 'core-js/stable'
import 'regenerator-runtime'

import Vue from 'vue'
import vSelectPage from 'v-selectpage'

import { getData, forAsync } from '../services/dataOne'

Vue.use(vSelectPage, { pagination: false })

export default {
  name: 'SelectorDataOne',

  data () {
    return {
      list: [],
      totalRow: 0,
      pageSize: 20,
      renderSelect: false
    }
  },

  mounted () {
    this.loadData(50, 0).then(v => {
      if (!v.error) {
        this.populate(v.result)
      }
    })
  },

  methods: {
    async loadData (pageSize, pageNum) {
      const [error, response] = await forAsync(getData(pageSize, pageNum))
      if (error) {
        return { 'error': error, 'result': null }
      } else {
        return { 'error': null, 'result': response }
      }
    },

    populate (loaded) {
      const { total, data } = loaded
      this.list = data.sort((a,b) => {return a.data.localeCompare(b.data)})
      this.totalRow = total
      this.renderSelect = !this.renderSelect
    }

  }
}
</script>
<style>
</style>
