import { RouteRecordRaw } from 'vue-router'
import permission from '@/permission'
/* Layout */
import Layout from '@/layout/index.vue'

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user permission_uri
 */
export default <RouteRecordRaw[]>[
  {
    path: '/log',
    component: Layout,
    redirect: '/log/loginLog',
    name: 'log',
    meta: {
      title: 'log',
      icon: 'log',
    },
    children: [
      {
        path: 'loginLog',
        name: 'LoginLog',
        component: () => import('@/views/log/loginLog.vue'),
        meta: {
          title: 'loginLog',
          icon: 'log',
          permissions: [permission.ShowLoginLogPage],
        },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  {
    path: '/:pathMatch(.*)*',
    name: '404*',
    redirect: '/404',
    meta: { hidden: true },
  },
]
