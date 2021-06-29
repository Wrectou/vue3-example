import { createApp } from 'vue'
import App from '@/App.vue'
import * as utils from '@/utils'
import ComUI from '@/plugs/ComUI'

const app = createApp(App)

// 此项操作等同于vue2的 Vue.prototype.utils = utils
app.config.globalProperties.utils = utils

app.use(ComUI, {
  components: [
    'comButton'
  ]
})

app.mount('#app')