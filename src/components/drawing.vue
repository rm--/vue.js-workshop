<template>
  <div id="drawing">
    <div>{{value.date}}</div>
    <div>
      <v-chip v-for="(item,index) in value.numbers" :key="index">
        {{item}}
        <span v-if="index == value.numbers.length -1"></span>
        <span v-else>(🙋🏼‍♂️)</span>
      </v-chip>
    </div>
    <div>
      <v-chip color="primary" v-for="(item,index) in value.extranumbers" :key="index">{{item}}</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "drawing",
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        date: "this is a dummy"
      }),
      validator: function(givenDrawing) {
        return givenDrawing.date != null && givenDrawing != undefined;
      }
    }
  },
  data: () => ({
    /*value: {
      date: "2018-01-05",
      extranumbers: [10, 7],
      numbers: [40, 2, 38, 45, 7]
    }*/
  })
};
</script>
