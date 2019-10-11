<template>
  <v-container id="drawingDetails">
        <v-card>
          <v-card-text>
            <drawing :value="drawing"></drawing>
          </v-card-text>
        </v-card>
  </v-container>
</template>

<script>
import drawing from "@/components/drawing";

export default {
  name: "drawingDetails",
  components: { drawing },
  mounted() {
    this.drawing.date = this.$route.params.id
  },
  data() {
    return {
      drawing: {date: "Hey"}
    }
  }
};
</script>