<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>
<script lang="ts">
export default { name: 'AppMain' }
</script>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const store = useStore()
const route = useRoute()
const cachedViews = computed(() => {
  return import.meta.env.PROD === true
    ? store.state['tagsView'].cachedViews.join(',').split(',')
    : []
})
const key = computed(() => route.path)
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
