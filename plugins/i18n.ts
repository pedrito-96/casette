import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import it from "../locales/it.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const route = useRoute();
  const router = useRouter();
  const rightLocale = computed(() => route.name?.toString().slice(-2));
  watch(rightLocale, (val, oldVal) => {
    if (val != oldVal) router.go(0);
  });
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: rightLocale.value,
    messages: {
      en,
      it,
    },
  });

  vueApp.use(i18n);
});
