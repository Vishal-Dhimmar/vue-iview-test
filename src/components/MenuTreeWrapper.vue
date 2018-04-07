<template>
  <menu-tree :tree-data="treeData" :accordion="accordion"></menu-tree>
</template>

<script>
  import MenuTree from './menu-tree/MenuTree'

  export default {
    name: "MenuTreeWrapper",
    components:{
      MenuTree
    },
    data() {
      return {
        accordion: true,
        treeData: [
          {
            resourceName: '内容管理',
            children: [{
              resourceName: '文章管理',
              children:[{
                resourceName:'文章审核'
              },{
                resourceName:'文章删除'
              }]
            },{
              resourceName:'评论管理',
              children:[{
                resourceName:'评论审核'
              },{
                resourceName:'评论删除'
              }]
            }]
          },
          {
            resourceName: '用户管理',
            children: [{
              resourceName: '新增用户'
            }, {
              resourceName: '活跃用户'
            }]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

</style>
