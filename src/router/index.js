import Vue from 'vue'
import Router from 'vue-router'

import NotFoundView from '@/components/NotFound'
import LoginView from '@/components/Login'
import DashView from '@/components/Dash'

// import dash
import DashboardView from '@/components/cloud/Dashboard.vue'
import InstanceView from '@/components/cloud/Instance.vue'
import VolumeView from '@/components/cloud/Volume.vue'
import NetworkView from '@/components/cloud/Network.vue'
import FlavorView from '@/components/cloud/Flavor.vue'
import ImageView from '@/components/cloud/Image.vue'

Vue.use(Router)

const DashChildren = [
  {path: 'overview', alias: '', component: DashboardView, name: 'overview', meta: {description: 'Dashboard Overview'}},
  {path: 'instance', component: InstanceView, name: 'instance', meta: {description: 'Instance Overview'}},
  {path: 'volume', component: VolumeView, name: 'volume', meta: {description: 'Volume'}},
  {path: 'network', component: NetworkView, name: 'network', meta: {description: 'Private Network'}},
  {path: 'flavor', component: FlavorView, name: 'flavor', meta: {description: 'Flavor'}},
  {path: 'image', component: ImageView, name: 'image', meta: {description: 'Image'}}
]

const routers = [
  {path: '/login', name: 'login', component: LoginView},
  {path: '/cloud', component: DashView, children: DashChildren},
  {path: '*', component: NotFoundView}
]

export default new Router({
  routes: routers,
  mode: 'history'
})
