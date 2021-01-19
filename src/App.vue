<template>
  <div id="app">
    <component :is="layout">
      <router-view v-if="isRouterAlive"/>
    </component>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Aside from '@/components/Aside';
export default {
  name: 'App',
  provide(){
    return {
      reload: this.reload
    }
  },
  components: { Nav, Aside },
  data(){
    return {
      default_layout: 'default',//设置layout
      isRouterAlive: true,
    }
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || this.default_layout) + '-layout'
    }
  },
  methods: {
    //通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  }
};
</script>

<style>
</style>
