import { createApp, createVNode } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入图标
import * as Icons from '@element-plus/icons-vue'


const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

// 方式一：全局注册图标组件
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons])
    // app.component(key, Icons[key])
})
// 使用 <component :is='图标'/>

// 方式二
// const Icon = (props: { icon: string }) => {
//     const { icon } = props
//     return createVNode(Icons[icon as keyof typeof Icons])
// }
// app.component('icon', Icon)
// 使用 <Icon :icon='图标'/>