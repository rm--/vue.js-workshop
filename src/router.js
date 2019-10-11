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
      component: drawingDetails
    },
    {
      path: "*",
      redirect: "search"
    }
  ]
})