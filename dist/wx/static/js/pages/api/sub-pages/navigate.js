var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([13],{166:function(e,t,n){n(167),n(168)},167:function(e,t){},168:function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(169),u=a(o),i=n(0),r=a(i);t.default={data:{title:"路由导航展示页",subtitle:"",cell:{title:"路由导航返回演示",list:[{title:"点击返回上一页",btnText:"点击返回"}]},map:{navigateTo:"返回上一个开启的页面",redirectTo:"上一个开启的页面被关闭，返回上一个页面之前的页面"},method:""},beforeCreate:function(){this.method=res.method},created:function(){this.subtitle=this.map[this.method]},methods:{onBtnClicked:function(){(0,u.default)(-1)}}},t.default=r.default.createPage(t.default).getOptions()},169:function(e,t,n){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;u.default.navigateBack(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=n(170),u=function(e){return e&&e.__esModule?e:{default:e}}(o)},170:function(e,t,n){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),i=function(){function e(){a(this,e)}return o(e,[{key:"navigateBack",value:function(e){wx.navigateBack({delta:Math.abs(e)})}}]),e}();t.default=new i,(0,u.copyProtoProperty)(t.default)}},[166]);