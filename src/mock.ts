import Mock from 'mockjs'
Mock.mock('/api/user/login', 'post', {
  code: 0,
  message: '',
  data: {},
})

Mock.mock('/api/user/info', 'get', {
  code: 0,
  message: '',
  data: {
    id: 1,
    account: 'admin',
    name: 'admin',
    superManager: 1,
    permissionIds: [1, 2],
  },
})

Mock.mock(/api\/log\/getLoginLogList/, 'get', {
  code: 0,
  message: '',
  data: [],
})

Mock.mock(/api\/log\/getLoginLogTotal/, 'get', {
  code: 0,
  message: '',
  data: {
    total: 0,
  },
})
