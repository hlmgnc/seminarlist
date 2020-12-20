<template lang="pug">
  .about
    h1 Seminar Detail
    p {{seminar.title}} 
    vue-markdown {{seminar.text}}
</template>

<script>
import SeminarCard from "@/components/seminar-card.vue";
import axios from "axios";
import VueMarkdown from "vue-markdown";

export default {
  name: "SeminarDetail",
  components: { SeminarCard, VueMarkdown },
  data() {
    return {
      seminar: null
    };
  },
  async created() {
    const seminarRequest = await axios.get(
      `https://backend.neue-gruppe.com/seminars/${this.$route.params.id}`
    );
    this.seminar = seminarRequest.data;
  }
};
</script>
<style scoped>
.about {
  width: 800px;
  margin: 10px auto;
  text-align: left;
}
</style>
