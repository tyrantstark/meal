import Vue from 'vue'
import Router from 'vue-router';
import { BootstrapVue, BadgePlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// we can import even CSS files!

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BadgePlugin)

Vue.use(Router)
Vue.use(Vuelidate);
library.add(faTwitter,faUserSecret)

Vue.use(FontAwesomeIcon);

/* use Vue.component( componentName, ComponentObject ) to globally register the component - once you globally register a component you don't need to locally register in each and every component */
/* add font awesome icon component */
/* Instead of font awesome icons, we can also use icons that Bootstrap Vue provides */
// https://bootstrap-vue.org/docs/icons#icons
