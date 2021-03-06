import componentImporter from './componentImporter'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/BtnDropdown/sub-route', component: () => import('pages/components/QBtnDropdownPage.vue') },
      { path: '/Dialog/sub-route', component: () => import('pages/components/QDialogPage.vue') },
      ...componentImporter.getRoutes()
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
