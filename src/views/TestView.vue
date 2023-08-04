<template>
  <div class="about">
    <h1>This is a test page</h1>
  </div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button type="info" round disabled>Info</el-button>
  </el-row>
  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      @click="aaa"
      link
    >{{ button.text }}</el-button>
  </div>
  <div class="flex">
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
  </div>
</template>
<script lang="ts">
import {Check, Delete, Edit, Message, Search, Star, Upload, Share} from '@element-plus/icons-vue'

export default {
  data() {
    return {
      Check,
      Delete,
      Edit,
      Message,
      Search,
      Star,
      Share,
      buttons: [
        { type: '', text: 'plain' },
        { type: 'primary', text: 'primary' },
        { type: 'success', text: 'success' },
        { type: 'info', text: 'info' },
        { type: 'warning', text: 'warning' },
        { type: 'danger', text: 'danger' },
      ],
    }
  },
  components: {
    Upload,
  },
  methods: {
    aaa() {
      //alert(123)
    },
  },
}
</script>
