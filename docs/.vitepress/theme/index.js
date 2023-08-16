import DefaultTheme from 'vitepress/theme'
import view1 from "/components/001.vue"
import view2 from "/components/002.vue"
import view3 from "/components/003.vue"
import view4 from "/components/004.vue"
import view5 from "/components/005.vue"
import view6 from "/components/006.vue"
import view7 from "/components/007.vue"
import view8 from "/components/008.vue"
import view9 from "/components/009.vue"
import view10 from "/components/010.vue"
import view11 from "/components/011.vue"
import view12 from "/components/012.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('view1', view1)
    app.component('view2', view2)
    app.component('view3', view3)
    app.component('view4', view4)
    app.component('view5', view5)
    app.component('view6', view6)
    app.component('view7', view7)
    app.component('view8', view8)
    app.component('view9', view9)
    app.component('view10', view10)
    app.component('view11', view11)
    app.component('view12', view12)
  }
}