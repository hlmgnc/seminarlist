<template lang="pug">
  router-link(:to ="`/seminar/${seminar._id}`")
    .box
      img(:src="`${domainName}${seminar.image.formats.small.url}`") 
      div.seminar-info
        h3.seminar-title {{seminar.title}}
        p.seminar-date {{seminar.from}}  -  {{seminar.to}}
        div.btn MEHR ERFAHREN
        
      
</template>

<script>
export default {
  name: "SeminarCard",
  props: ["seminar"],
  data() {
    return {
      domainName: "https://backend.neue-gruppe.com"
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  padding: 2rem;
  border: 1px solid #ccc;
  background: #f5f7f5;
  border-radius: 1rem;
}
.seminar-title {
  text-decoration: none;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}
.seminar-info {
  position: relative;
  text-align: left;
  padding-left: 15px;
  width: 100%;
}
.btn {
  position: absolute;
  right: 0%;
  background: rgb(116, 197, 235);
  width: 150px;
  padding: 5px;
  text-align: center;
  color: white;
  border-radius: 5px;
}
</style>
