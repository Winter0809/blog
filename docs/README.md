---
home: true
heroImage: '/vuepress/topic.png'
faceImage: '/vuepress/head.png'
heroImageStyle: {
  maxWidth: '880px',
  width: '100%',
  display: block,
  margin: '14% auto -16% auto',
  //border: '1px dashed #000',
  box-shadow: '8px 8px 20px #022',
  borderRadius: '10px',
}
isShowTitleInHome: true
actionText: '快速开始 →'
actionLink: /views/
features:
- title: 
  details: 把不好全留在昨天
- title: 
  details: 把努力都用在今天
- title: 
  details: 把希望都留给明天
footer: MIT Licensed | Copyright © 2018-present Evan You
---


::: tip 昨天 今天 明天

再好的过去 <br/>
都会成为历史 <br/>

再差的现在 <br/>
也需要去珍惜 <br/>

再远的未来 <br/>
也必须去努力 <br/>

任何人,都有遗憾<br/>
最重要的其实不是结果 <br/>
而是参与的过程 <br/>

春梦无痕，秋夜缠绵 <br/>
如歌岁月，似水流年 <br/>

忘记悲伤过往 <br/>
珍惜所有 <br/>
不留下遗憾  

<!-- <CanvasNest color='0,23,255' zIndex='-2'></CanvasNest> -->

<script>
  
</script>

<style lang="stylus">
.home .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0  !important;
  padding: 0 !important;
}
.home .hero h1 {
    display: none;
}
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   //transform: scale(1)!important;
   transition:all 2s !important;
}
.home .features {
    text-align: center;
}
.home .feature p {
    color: #476582 !important;
}
.home .hero .description {
    color: #476582 !important;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    min-height: 10vh;
    position: fixed;
    top: -120%;
    left: -1%;
    background: url(https://img.shields.io/github/stars/zpj80231/znote?style=social) right,url(https://img.shields.io/github/forks/zpj80231/znote?style=social) right;
    background-repeat: no-repeat, no-repeat;
    background-position-y: 20%, 20%;
    background-position-x: 86%, 98%;
}

@media screen and (max-width: 780px) and (min-width: 541px){
  .wrap {
    background: none;
  }
  .clock {
    max-width: 230px !important;
    max-height: 230px !important;
    margin-top: 33% !important;
  }
  .home img {
    max-width: 520px !important;
  }
}

@media screen and (max-width: 540px) and (min-width: 481px){
  .wrap {
    background: none;
  }
  .clock {
    max-width: 200px !important;
    max-height: 200px !important;
    margin-top: -10% !important;
  }
  .home img {
    margin: 24% auto -6% auto !important;
    max-width: 380px !important;
  }
}

@media screen and (max-width: 480px) and (min-width: 0px){
  .wrap {
    top:-107%;
    transform: scale(0.68,0.58);
    background: none;
  }
  .home img {    
    margin: 24% auto -6% auto !important;
  }
  .home .feature {
    width: 100%;
    text-align: center;
    color: rgb(71, 101, 130) !important;
    padding: 5px !important;
    margin: -12px;
    margin-left: 0px;
  }
  .clock {
    background: rgba(0, 0, 0, 0) none repeat scroll !important;
    background-image: url() !important;
  }
}
.clock {
  width: 300px !important;
  height: 300px !important;
  margin-top: 12%;
  transition: all 2s;
}
.clock:hover {
  transform: scale(0.55) !important;
  transition: all 2s;
}
/*
.wrap {
  transition: all 2s;
}
.wrap:hover {
  transform: scale(1.05) !important;
  transition: all 2s;
}
*/

</style>

