import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(bottomNavigationVue)
    .use(router)
    .mount('#app')
// createApp(App).mount('#app')
