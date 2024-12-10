<template>
  <div class="main">
    <h1>Per product widgets</h1>
    <div v-if="widgetData" class="a-wrapper">
      <template v-for="widget in widgetData" :key="widget.id">
        <WidgetBox :widget="widget" @activted="changeActiveWidget" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetBox from "./components/WidgetBox.vue";
import { getWidgetData } from "./requests";
import { Widget } from "./interfaces";
import { onMounted, ref } from "vue";

const widgetData = ref<Widget[] | undefined>(undefined);

onMounted(() => {
  initialize();
});

const initialize = async (): Promise<void> => {
  widgetData.value = await getWidgetData();
};

const changeActiveWidget = (id: number): void => {
  widgetData.value?.forEach((widget) => {
    widget.active = widget.id === id ? true : false;
  });
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.a-wrapper {
  display: flex;
  justify-content: space-between;
  width: 800px;
}

@media screen and (max-width: 1032px) {
  .a-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
