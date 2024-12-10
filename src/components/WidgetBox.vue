<template>
  <div class="wb-wrapper">
    <div :style="{ backgroundColor: getColor() }" class="wb-header">
      <img
        class="wb-logo"
        src="/greensparks.svg"
        alt="Logo"
        :class="{ 'wb-green': isBgLight() }"
      />

      <div class="wb-heading" :class="{ 'wb-green': isBgLight() }">
        <p class="wb-heading-t">This product {{ state.action }}</p>
        <p class="wb-heading-b">{{ amountText() }} {{ typeText() }}</p>
      </div>
    </div>

    <div class="wb-body">
      <div class="wb-list">
        <label>Link to Public Profile</label>
        <span class="wb-info">&#9432;</span>
        <input v-model="state.linked" type="checkbox" class="wb-checkbox" />
      </div>

      <div class="wb-list">
        <label>Badge Color</label>
        <div class="wb-box-list">
          <div
            v-for="color of Object.keys(colorOptions)"
            :key="colorOptions[color]"
            :style="{ backgroundColor: colorOptions[color] }"
            :class="{ 'wb-outline': colorOptions[color] === getColor() }"
            class="wb-checkbox"
            @click="onClickColor(color)"
          ></div>
        </div>
      </div>
      <div class="wb-list">
        <label>Activate badge</label>
        <SliderComponent
          :active="state.active"
          @toggle="onClickActive()"
        ></SliderComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SliderComponent from "./SliderComponent.vue";
import { Widget } from "../interfaces";
import { ref, watch } from "vue";

const props = defineProps<{
  widget: Widget;
}>();
const emit = defineEmits<{
  (e: "activted", id: number): void;
}>();

const colorOptions: Record<string, string> = {
  blue: "#2E3A8C",
  green: "#3b755f",
  beige: "#F2EBDB",
  white: "white",
  black: "black",
};

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

const getColor = (): string => {
  return colorOptions[state.value.selectedColor];
};

const typeText = (): string => {
  if (state.value.type === "plastic") {
    return "plastic bottles";
  } else if (state.value.type === "carbon") {
    return "of carbon";
  } else {
    return state.value.type;
  }
};

const amountText = (): string => {
  return state.value.type === "carbon"
    ? `${state.value.amount}kgs`
    : `${state.value.amount}`;
};

const isBgLight = (): boolean => {
  return state.value.selectedColor === "beige" ||
    state.value.selectedColor === "white"
    ? true
    : false;
};

watch(props.widget, (newState): void => {
  state.value.active = newState.active;
});
</script>

<style>
.wb-wrapper {
  border-radius: 8px;
  height: 152px;
  width: 236px;
  margin: 30px 0px 30px 0px;
}

.wb-header {
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
  .wb-logo {
    width: 3.5rem;
    height: 3.5rem;
  }
  .wb-heading {
    margin-left: 6px;
    color: #f9f9f9;
    p {
      margin: 0;
    }
    .wb-heading-t {
      font-size: 0.9rem;
    }
    .wb-heading-b {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
}

.wb-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  .wb-list {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 15px;
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
}

.color-box:hover {
  border-color: #000;
}

.wb-checkbox {
  width: 20px;
  height: 20px;
  margin-left: 3px;
  cursor: pointer;
  accent-color: #3b755f;
}

.wb-outline {
  outline: 1px solid #b0b0b0;
  outline-offset: -1px;
}

.wb-green {
  filter: drop-shadow(0px 1000px 0 var(--primary-color));
  transform: translateY(-1000px);
}

.wb-info {
  font-size: 13px;
  color: var(--primary-color);
  margin-bottom: auto;
}
</style>
