<template>
  <div id="drawing">
    <div>{{value.date}}</div>
    <div>
      <span v-for="(item,index) in value.numbers" :key="index">
        {{item}}
         </span>
         <span v-if="index == value.numbers.length -1"></span>
         <span v-else>[ ]</span>
    </div>
    <div>
      <span v-for="(item,index) in value.extranumbers" :key="index">{{item}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "drawing",
  props: ["value"],
  data: () => ({
    /*value: {
      date: "2018-01-05",
      extranumbers: [10, 7],
      numbers: [40, 2, 38, 45, 7]
    }*/
  })
};
</script>