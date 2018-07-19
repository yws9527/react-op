import Mock from 'mockjs'
Mock.setup({timeout: '200-800'})
const Random = Mock.Random

Mock.mock(/upload\/12345/, 'post', {
  'list|1-10': [{
    'id|+1': 1,
    'date': '@date(yyyy-MM-dd)'
  }]
})

Mock.mock(/query\/23333/, 'get', {
  'list|1-10': [{
    'id|+1': 1,
    'email': Random.email(),
    'img': Random.dataImage('300x250', 'React')
  }]
})

export default Mock
