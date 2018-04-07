<template>
  <!--<Menu theme="light" :accordion="accordion" :style="styleObj">-->
    <!--<Submenu :name="dataObj.resourceName" v-for="dataObj in treeData">-->
      <!--<template slot="title">{{dataObj.resourceName}}</template>-->
      <!--<MenuItem v-for="item in dataObj.children" :key="item.url" :name="item.resourceName">{{item.resourceName}}</MenuItem>-->
    <!--</Submenu>-->
  <!--</Menu>-->
  <Menu theme="light" :accordion="accordion" :style="styleObj">
    <MenuNode v-for="(item,index) in treeData" :data-obj="item" :key="index"></MenuNode>
  </Menu>
</template>

<script>
  import MenuNode from './MenuNode'

  export default {
    name: "menu-tree",
    components: {
      MenuNode
    },
    props: {
      treeData: {
        type: Array,
        default() {
          return []
        }
      },
      accordion:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        styleObj: {
          width: '200px'
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
