<template>
  <div class="widget">
    <div :style="{ backgroundColor: state.selectedColor }" class="wb-header">
      <img class="badge-logo" src="/greensparks.svg" alt="Logo" />

      <div class="wb-heading">
        <p class="wb-heading-t">This product {{ state.action }}</p>
        <p class="wb-heading-b">{{ state.amount }} {{ state.type }}</p>
      </div>
    </div>

    <div class="widget-controls">
      <div class="wb-list">
        <label>Link to Public Profile</label>
        <input v-model="state.linked" type="checkbox" class="wb-checkbox" />
      </div>

      <div class="wb-list">
        <label>Badge Color</label>
        <div class="wb-box-list">
          <div
            v-for="color in colorOptions"
            :key="color"
            :style="{ backgroundColor: color }"
            :class="{ 'wb-outline': color === state.selectedColor }"
            class="wb-checkbox"
            @click="onClickColor(color)"
          ></div>
        </div>
      </div>
      <div class="wb-list">
        <label>Activate badge</label>
        <label class="switch">
          <input
            v-model="state.active"
            type="checkbox"
            @click="onClickActive"
          />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Widget } from "../interfaces";
import { ref, watch } from "vue";

const props = defineProps<{
  widget: Widget;
}>();
const emit = defineEmits<{
  (e: "activted", id: number): void;
}>();

const colorOptions = ["blue", "green", "brown", "white", "black"];

const state = ref<Widget>({
  id: props.widget.id,
  type: props.widget.type,
  amount: props.widget.amount,
  action: props.widget.action,
  active: props.widget.active,
  linked: props.widget.linked,
  selectedColor: props.widget.selectedColor,
});

const onClickColor = (color: string): void => {
  state.value.selectedColor = color;
};

const onClickActive = (): void => {
  emit("activted", state.value.id);
};

watch(props.widget, (newState) => {
  state.value.active = newState.active;
});
</script>

<style scoped>
.widget {
  border-radius: 8px;
  height: 152px;
  width: 222px;
  margin: 30px 0px 30px 0px;
}

.wb-header {
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
}

.wb-heading {
  margin-left: 6px;
  color: white;
  p {
    margin: 0;
  }
  .wb-heading-t {
    font-size: 0.8rem;
  }
  .wb-heading-b {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

.wb-list {
  display: flex;
  flex-direction: row;
  justify-content: start;
  label {
    color: #3b755f;
  }
  input {
    margin-left: auto;
  }
  .wb-box-list {
    margin-left: auto;
    display: flex;
    flex-direction: row;
  }
}

.badge-logo {
  width: 4rem;
  height: 4rem;
}

.widget-controls {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.color-box:hover {
  border-color: #000;
}

.wb-checkbox {
  width: 16px;
  height: 16px;
  margin-left: 3px;
  cursor: pointer;
}

.wb-outline {
  outline: 1px solid #b0b0b0;
  outline-offset: -1px;
}

.switch {
  margin-left: auto;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

/* The slider */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
