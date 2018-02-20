// 路由配置
var routes = [
  {
    path: '/',
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: '/calendar',
    meta: {
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'calendar')
    },
  },
  // {
  //   path: '/calendar/detail/:day',
  //   meta: {
  //     title: '详情',
  //     activeTypeIndex: 1,
  //     isShowFooter: false
  //   },
  //   component: resolve => {
  //     lazyLoading(resolve, 'cart')
  //   },
  // },
  {
    path: '/member-center',
    meta: {
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'member-center')
    },
  },
  {
    path: '/task',
    meta: {
      title: '任务列表',
      activeTypeIndex: 2,
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
