<template>
  <v-container id="drawingDetails">
    <v-card>
      <v-card-text>
        <drawing :value="drawing"></drawing>
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-btn icon @click="navigateBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import drawing from "@/components/drawing";

export default {
  name: "drawingDetails",
  components: { drawing },
  mounted() {
    this.drawing = this.$route.params.drawing;
  },
  data() {
    return {
      drawing: { date: "Hey" }
    };
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
    }
  }
};
</script>