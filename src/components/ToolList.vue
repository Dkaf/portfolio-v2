<template lang="pug">
  .tool-list
   .tool-div
      h3.section-title Built With
      ul.tool-list
        li.tool-list-item(v-for="tool in tools", :key="tool.key") {{ tool }}
</template>

<script>
export default {
  name: 'ToolList',
  props: ['tools'],
};
</script>

<style>

  .section-title {
    color: #f45942;
    font-size: 1.8rem;
  }

  .tool-div {
    text-align: center;
    padding: 50px;
    width: 250px;
  }

  .tool-list {
    list-style: none;
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }

  .tool-list-item {
    color: white;
  }
</style>
