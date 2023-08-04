<template>
  <div class="about">
    <h1>Border 边框</h1>
  </div>

  <el-row :gutter="12" class="demo-radius">
    <el-col
      v-for="(radius, i) in radiusGroup"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <div class="title">{{ radius.name }}</div>
      <div
        class="radius"
        :style="{
          borderRadius: radius.type
            ? `var(--el-border-radius-${radius.type})`
            : '',
        }"
      />
    </el-col>
  </el-row>
  <el-row class="demo-icon">
    <el-icon color="#409EFC" class="no-inherit">
      <Share />
    </el-icon>
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
    <el-button type="primary">
      <el-icon style="vertical-align: middle">
        <Search />
      </el-icon>
      <span style="vertical-align: middle"> Search </span>
    </el-button>
  </el-row>
  <div>
    <el-link href="https://element-plus.org" target="_blank">default</el-link>
    <el-link type="primary" href="https://www.baidu.com" target="_blank">primary</el-link>
    <el-link type="success" href="https://www.baidu.com">success</el-link>
    <el-link type="warning" disabled>warning</el-link>
    <el-link type="danger" :underline="false">danger</el-link>
    <el-link type="info">info</el-link>
    <el-link>
      Check<el-icon class="el-icon--right"><View /></el-icon>
    </el-link>
  </div>
</template>

<script lang="ts">
import { Share, Loading, Search, View } from '@element-plus/icons-vue'
export default {
  components: {
    Share,
    Loading,
    Search,
    View
  },
  data() {
    return {
      radiusGroup: [
        {
          name: 'No Radius',
          type: '',
        },
        {
          name: 'Small Radius',
          type: 'small',
        },
        {
          name: 'Large Radius',
          type: 'base',
        },
        {
          name: 'Round Radius',
          type: 'round',
        },
      ],
    }
  },
}
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.demo-icon {
  margin-top: 20px;
}
.el-icon {
  margin-right: 30px;
}
.demo-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value {
  color: var(--el-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
}
.demo-radius .radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
  box-shadow: var(--el-box-shadow-dark);
}
</style>
