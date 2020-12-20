<template lang="pug">
  .home
    h1 Aktuelle Seminare
    SeminarCard(v-for="seminar in seminars" :seminar="seminar")
      router-link(:to ="`/seminar/${seminar._id}`") {{ seminar.title }}
</template>

<script>
import SeminarCard from "@/components/seminar-card.vue";
import axios from "axios";

export default {
  name: "SeminarList",
  components: { SeminarCard },
  data() {
    return {
      seminars: []
    };
  },
  async created() {
    const seminarRequest = await axios.get(
      "https://backend.neue-gruppe.com/seminars"
    );
    this.seminars = seminarRequest.data;
  }
};
</script>
