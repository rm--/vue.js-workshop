<template>
  <div id="drawing">
    <div>{{value.date}}</div>
  </div>
</template>

<script>
export default {
  name: "drawing",
  data: () => ({
    value: {
      date: "2018-01-05",
      extranumbers: [10,7],
      numbers: [40,2,38,45,7]
    }
  })
};
</script>