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
      title: '分类',
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
      title: '个人中心',
      activeTypeIndex: 3,
    },
    component: resolve => {
      lazyLoading(resolve, 'member-center')
    },
  },
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
