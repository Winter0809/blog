//导航栏
module.exports = [
    {text: '主页', link: '/index.html', icon: 'reco-home'},
    {
        text: '面试手记',link:"/baodian/interview/",icon: 'reco-document',
		items: [
            {text: '初级开发篇🎈', link: '/baodian/zero/'},
            {text: '中高进阶篇🎈', link: '/baodian/high/'},
        ]
    },
    {
        text:'工具箱',
        items:[
            {
                text: '在线编辑',
                items: [
                    {text: '图片压缩',link:"https://tinypng.com/"}
                ] 
            },
            {
                text: '在线服务',
                items: [
                    {text: '阿里云',link:"https://www.aliyun.com"},
                    {text: '腾讯云',link:"https://cloud.tencent.com/"}
                ] 
            },
            {
                text: '博客指南',
                items: [
                    {text: '掘金',link:"https://juejin.im/"},
                    {text: 'CSDN',link:"https://blog.csdn.net/"}
                ] 
            }

        ]
    },
    {text: '时间线', link: '/timeline/', icon: 'reco-date'},
    {text: '关于我', link: '/about/', icon: 'reco-message'}
]
