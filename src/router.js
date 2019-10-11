import Vue from "vue"
import Router from "vue-router"
import drawingDetails from "@/views/drawingDetails"
import drawingSearch from "@/views/drawingSearch"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/search",
      name: "search",
      component: drawingSearch
    },{
      path: "/details",
      name: "details",
      component: drawingDetails,
      beforeEnter: (to, from, next) => {
        if(to.params.drawing != undefined){
          next()
        }
      }
    },
    {
      path: "*",
      redirect: "search"
    }
  ]
})