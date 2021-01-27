import Vue from "vue";
import VueRouter from "vue-router";
import Test1 from "@/views/Test1";
import Test2 from "@/views/Test2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Test1",
    name: "Test1",
    component: Test1
  },
  {
    path: "/Test2",
    name: "Test2",
    component: Test2
  }
];

const router = new VueRouter({
  routes
});

export default router;
