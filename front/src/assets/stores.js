import { ref } from 'vue';

export function setCurrentNav(option){
  currentNav.value = option
}

export const currentNav = ref("/")