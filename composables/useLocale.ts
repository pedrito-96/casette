import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export const useLocale = () => {
  const route = useRoute();
  const router = useRouter();

  // Create a reactive variable for the rightLocale
  const rightLocale = ref(route.name?.toString().slice(-2));

  // Create a computed property for the rightLocale
  const currentLocale = computed(() => rightLocale.value);

  return {
    currentLocale,
  };
};
