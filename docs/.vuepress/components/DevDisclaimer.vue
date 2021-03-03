<template>
  <div class="content deprecation-warning">
    <p>
      <strong>⚠️ Beta Version</strong>
      This documentation is in development and subject to change!
    </p>
  </div>
</template>

<script>
export default {
  name: "DeprecationWarning"
};
</script>

<style lang="stylus" scoped>
.deprecation-warning {
  $bg = #ed0100;
  padding: 0 2rem;
  border: 1px solid $bg;
  background-color: #ffe5e5;
  //background-color: rgba($bg, 20%);
  border-radius: 4px;
}
</style>