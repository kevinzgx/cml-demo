var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([54],{290:function(t,e,i){i(291),i(292)},291:function(t,e){},292:function(t,e,i){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),l=function(t){return t&&t.__esModule?t:{default:t}}(a),c=function t(){n(this,t),this.props={tab:{type:Object,default:function(){return{}}},inline:{type:Boolean,default:!0},activeLabel:{type:String},activeLabelStyle:{type:String,default:"color:#FC9153"},activeIconStyle:{type:String,default:""}},this.data={defaultPrefixStyle:"font-size: 28cpx;\n        text-align: center;",defaultLabelStyle:"line-height: 88cpx;\n        font-size: 28cpx;\n        text-align: center;\n        height: 88cpx;\n        padding-left:5cpx;\n        padding-right:5cpx;\n        padding-top:5cpx;\n        padding-bottom:5cpx;",defaultSuffixStyle:"font-size: 28cpx;\n        text-align: center;"},this.computed={cTabsItem:function(){return this.inline?"c-tabs-item-row":"c-tabs-item-column"},finalPrefix:function(){var t=this.isActive?this.activeIconStyle:";";return this.defaultPrefixStyle+(this.tab.prefixStyle||";")+(t||";")},finalLabel:function(){var t=this.isActive?this.activeLabelStyle:";";return this.defaultLabelStyle+(this.tab.labelStyle||";")+t},finalSuffix:function(){var t=this.isActive?this.activeIconStyle:";";return this.defaultSuffixStyle+(this.tab.suffixStyle||";")+(t||";")},isActive:function(){return this.activeLabel===this.tab.label}},this.watch={},this.methods={handleTabTap:function(){this.$cmlEmit("tabclick",this.tab)}}};e.default=new c,e.default=l.default.createComponent(e.default).getOptions()}},[290]);