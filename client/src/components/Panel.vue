<template>
  <!-- This is a subcomponent to be used in other components -->
  <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <!-- Using title for a 1 way binding. Can be defined in data or props -->
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" />
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>
            No slot content defined
          </slot>
      </div>
    </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
</style>
