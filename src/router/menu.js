// 路由配置
var routes = [
  {
    path: '/',
    meta: {
      tab: 'today',
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: '/calendar',
    meta: {
      tab: 'calendar',
    },
    component: resolve => {
      lazyLoading(resolve, 'calendar')
    },
  },
  // {
  //   path: '/calendar/detail/:day',
  //   meta: {
  //     title: '详情',
  //     isShowFooter: false
  //   },
  //   component: resolve => {
  //     lazyLoading(resolve, 'cart')
  //   },
  // },
  {
    path: '/member-center',
    meta: {
      tab: 'member-center',
    },
    component: resolve => {
      lazyLoading(resolve, 'member-center')
    },
  },
  {
    path: '/task',
    meta: {
      title: '任务列表',
      tab: 'member-center',
    },
    component: resolve => {
      lazyLoading(resolve, 'task')
    },
  },
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
