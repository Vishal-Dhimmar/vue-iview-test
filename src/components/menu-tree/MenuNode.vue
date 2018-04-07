<!--<template>-->
    <!--<div>-->
      <!--<Submenu :name="resourceId" v-if="hasChildren">-->
        <!--<template slot="title">{{dataObj.resourceName}}</template>-->
        <!--<menu-node v-for="(item,index) in childrenData" :dataObj="item" :key="index"></menu-node>-->
      <!--</Submenu>-->
      <!--<menu-item name="resourceId" v-else>{{dataObj.resourceName}}</menu-item>-->
    <!--</div>-->
<!--</template>-->

<script>
    import Submenu from "iview/src/components/menu/submenu";
    import MenuItem from "iview/src/components/menu/menu-item";

    export default {
      name: "menu-node",
      components: {
        MenuItem,
        Submenu
      },
      props: {
        dataObj: {
          type: Object,
          required: true
        },
        accordion:{
          type:Boolean,
          default:true
        }
      },
      computed: {
        hasChildren() {
          const childrenData = this.dataObj.children;
          return Array.isArray(childrenData) && childrenData.length !== 0;
        },
        childrenData() {
          return this.dataObj.children || [];
        },
        resourceId() {
          const dataObj = this.dataObj;
          return dataObj.resourceUrl || dataObj.resourceId || dataObj.resourceName;
        }
      },
      render(createElement) {
        const dataObj = this.dataObj;
        let result;
        if (this.hasChildren) {
          result = (
            <Submenu name = {this.resourceId}>
              <template slot="title">{dataObj.resourceName}</template>
              {
                this.childrenData.map((item, index) => {
                  return  (
                    <menu-node dataObj={item}  key={index} > </menu-node>
                  )
                })
              }
            </Submenu>
          )
        } else {
          result = (
            <MenuItem name={this.resourceId}>{dataObj.resourceName}</MenuItem>
          )
        }
        return result;
      }
    }
</script>

<style lang="scss">

</style>
