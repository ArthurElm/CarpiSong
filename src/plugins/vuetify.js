import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    themes: {
        dark: {
          background: '#1F2132',
        },
      },
    icons: {
        iconfont: 'fa4',
    },
});
