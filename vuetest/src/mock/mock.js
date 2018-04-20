require('mockjs')
//使用mockjs模拟数据
Mock.mock('getNewsList', (req, res) => {
    return {
        data: ['a','b']
    }
})