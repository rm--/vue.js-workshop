<template>
  <div id="drawingSearch">
    <v-row>
      <v-col v-for="(item,index) in drawings" :key="index" xs="6" sm="6" md="4">
        <v-card>
          <v-card-text>
            <drawing :value="item"></drawing>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import drawing from "../components/drawing";

export default {
  name: "drawingSearch",
  components: { drawing },
  data() {
    return {
      drawings: [
        {
          date: "2018-01-05",
          extranumbers: [10, 7],
          numbers: [40, 2, 38, 45, 7]
        },
        {
          date: "2018-01-06",
          extranumbers: [10, 7],
          numbers: [40, 2, 38, 45, 7]
        },
        {
          date: "2018-01-07",
          extranumbers: [10, 7],
          numbers: [40, 2, 38, 45, 7]
        },
        {
          date: "2018-01-08",
          extranumbers: [10, 7],
          numbers: [40, 2, 38, 45, 7]
        },
        {
          date: "2018-01-09",
          extranumbers: [10, 7],
          numbers: [40, 2, 38, 45, 7]
        }
      ]
    };
  }
};
</script>