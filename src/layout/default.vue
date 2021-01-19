<template>
  <div>
    <Nav />
    <Aside style="float: left;"/>
    <router-view style="margin-left: 200px" />
  </div>
</template>

<script>
  import Nav from '@/components/Nav';
  import Aside from '@/components/Aside';
  export default {
    name: 'App',
    components: { Nav, Aside },
  };
</script>

<style>
</style>
