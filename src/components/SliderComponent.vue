<template>
  <label class="switch">
    <input :checked="props.active" type="checkbox" @click="onClickActive" />
    <span class="slider round"></span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  active: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const onClickActive = (): void => {
  emit("toggle");
};
</script>

<style>
.switch {
  margin-left: auto;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

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
  background-color: var(--primary-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
