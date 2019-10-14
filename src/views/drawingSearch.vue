<template>
  <v-container id="drawingSearch">
    <v-row>
      <v-toolbar>
        <v-toolbar-title>drawings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="searchText"></v-text-field>
        <v-icon>mdi-magnify</v-icon>
      </v-toolbar>
    </v-row>
    <v-row>
      <v-col v-for="(item,index) in visibleDrawings" :key="index" xs="6" sm="6" md="4">
        <v-card @click="showDetails(item)">
          <v-card-text>
            <drawing :value="item"></drawing>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import drawing from "@/components/drawing";
import drawingService from "@/services/drawingService";

export default {
  name: "drawingSearch",
  components: { drawing },
  async created() {
    this.drawings = await drawingService.getDrawings();
  },
  computed: {
    visibleDrawings() {
      return this.drawings.filter(d => d.date.includes(this.searchText));
    }
  },
  data() {
    return { searchText: "", drawings: [] };
  },
  methods: {
    showDetails(drawing) {
      this.$router.push({ name: "details", params: { drawing: drawing } });
    }
  }
};
</script>