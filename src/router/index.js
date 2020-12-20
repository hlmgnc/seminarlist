import Vue from "vue";
import VueRouter from "vue-router";
import SeminarList from "../views/seminar-list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SeminarList",
    component: SeminarList
  },
  {
    path: "/seminar/:id",
    name: "SeminarDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/seminar-detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
