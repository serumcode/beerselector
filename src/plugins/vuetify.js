import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#b74c62',
            secondary: '#ba4d62',
            anchor: '#8c9eff',
          },
        },
      },
});
