var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([11],{160:function(e,n,t){t(161),t(162)},161:function(e,n){},162:function(e,n,t){function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0});var s=t(163),a=o(s),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=t(0),c=o(u);n.default={data:{title:"cml.initSocket",subtitle:"演示 websocket 链接，发送，接收和关闭",respones:[],isShowLoading:!1,msgs:{},ws:null,cell:{title:"WebSocket 演示",list:[{title:"初始化一个 socket 链接",btnText:"点击开启",extraData:{action:"open"}},{title:"发送数据",btnText:"点击发送",extraData:{action:"send"}},{title:"关闭 socket 链接",btnText:"点击关闭",extraData:{action:"close"}}]}},methods:{onBtnClicked:function(e){var n=e.detail.extraData.action;this[void 0===n?"open":n]()},showLoading:function(){this.isShowLoading=!0},hideLoading:function(){this.isShowLoading=!1},flushMsg:function(){this.msgs={},this.flatten2Responses()},flatten2Responses:function(){this.respones=Object.entries(this.msgs).map(function(e){return{name:e[0],value:"string"==typeof e[1]&&e[1],child:"object"===r(e[1])&&e[1]}})},appendMsg:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e in this.msgs)if("string"==typeof this.msgs[e]&&(this.msgs[e]=[this.msgs[e]]),"string"==typeof n)this.msgs[e].push(n);else{var t;(t=this.msgs[e]).push.apply(t,i(n))}else this.msgs[e]=n;this.flatten2Responses()},open:function(){var e=this,n=this.ws=(0,a.default)("ws://echo.websocket.org");this.showLoading(),this.flushMsg(),this.appendMsg("建立链接","ws://echo.websocket.org"),n.onopen(function(){e.hideLoading(),e.appendMsg("建立链接","链接成功")}),n.onmessage(function(n){e.hideLoading(),e.appendMsg("接收透传信息",n.data)}),n.onerror(function(n){e.hideLoading(),e.appendMsg("链接错误",n.message)}),n.onclose(function(){e.hideLoading(),e.appendMsg("链接关闭","关闭成功"),e.ws=null})},send:function(){if(!this.ws)return this.appendMsg("错误提示","请先开启 socket 链接");this.showLoading(),this.appendMsg("发送信息",["一段文本信息: Hi, this is cml","一个数组: 1,2,3"]),this.ws.send({text:"Hi, this is cml",arr:["1","2","3"]})},close:function(){if(!this.ws)return this.appendMsg("错误提示","请先开启 socket 链接");this.ws.close()}}},n.default=c.default.createPage(n.default).getOptions()},163:function(e,n,t){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s.default.initSocket(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var i=t(164),s=function(e){return e&&e.__esModule?e:{default:e}}(i)},164:function(e,n,t){function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s=t(165),a=function(e){return e&&e.__esModule?e:{default:e}}(s),r=t(1),u=function(){function e(){o(this,e)}return i(e,[{key:"initSocket",value:function(e){return new a.default(e)}}]),e}();n.default=new u,(0,r.copyProtoProperty)(n.default)},165:function(e,n){function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=function(){function e(n){t(this,e),this.instance=wx.connectSocket({url:n})}return o(e,[{key:"onopen",value:function(e){this.instance.onOpen(function(){e()})}},{key:"onmessage",value:function(e){this.instance.onMessage(function(n){e(n)})}},{key:"onerror",value:function(e){this.instance.onError(function(n){e(n)})}},{key:"onclose",value:function(e){this.instance.onClose(function(){e()})}},{key:"send",value:function(e){e=JSON.stringify(e),this.instance.send({data:e})}},{key:"close",value:function(){this.instance.close()}}]),e}();n.default=i}},[160]);