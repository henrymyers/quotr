webpackJsonp([1],{"/37K":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app",style:{backgroundImage:"url("+t.displayedBackground+")"}},[s("slideshow",{directives:[{name:"show",rawName:"v-show",value:!t.showFilters,expression:"!showFilters"}],attrs:{quotes:t.displayedQuotes,backgrounds:t.backgrounds},on:{"toggle-filters":function(e){t.showFilters=!t.showFilters},"background-changed":t.setDisplayedBackground}}),t._v(" "),s("filters",{directives:[{name:"show",rawName:"v-show",value:t.showFilters,expression:"showFilters"}],attrs:{quotes:t.allQuotes},on:{"hide-filters":function(e){t.showFilters=!1},"filter-changed":t.setDisplayedQuotes}})],1)},n=[],i={render:o,staticRenderFns:n};e.a=i},0:function(t,e){},"3q1R":function(t,e,s){t.exports=s.p+"static/img/default-bg.e2a57be.jpg"},"9u/O":function(t,e){},DlPZ:function(t,e,s){"use strict";function o(t){s("9u/O")}var n=s("wSfA"),i=s("IZiH"),r=s("VU/8"),a=o,u=r(n.a,i.a,a,null,null);e.a=u.exports},IZiH:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filters"},[s("div",{staticClass:"inputs"},[s("span",[s("span",[t._v("Display quotes from")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedAuthor,expression:"selectedAuthor"}],attrs:{title:"Selected author"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedAuthor=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("Everyone")]),t._v(" "),t._l(t.authors,function(e){return s("option",[t._v(t._s(e))])})],2)]),t._v(" "),s("span",[s("span",[t._v("sorted by")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.sortMethod,expression:"sortMethod"}],attrs:{title:"Sorting method"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.sortMethod=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:""}},[t._v("Random")]),t._v(" "),s("option",{attrs:{value:"newest"}},[t._v("Newest First")]),t._v(" "),s("option",{attrs:{value:"oldest"}},[t._v("Oldest First")])])])]),t._v(" "),s("div",{staticClass:"buttons"},[s("i",[t._v(t._s(t.previewMessage))]),t._v(" "),s("button",{on:{click:t.close}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"button-primary",on:{click:t.applyFilter}},[t._v("Apply Filter")])])])},n=[],i={render:o,staticRenderFns:n};e.a=i},M93x:function(t,e,s){"use strict";function o(t){s("fTtJ")}var n=s("xJD8"),i=s("/37K"),r=s("VU/8"),a=o,u=r(n.a,i.a,a,null,null);e.a=u.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),n=s("M93x");o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:n.a}})},PlLD:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slideshow"},[t.quote?s("div",{staticClass:"quote"},[s("h3",{staticClass:"quote-text"},[t._v(t._s(t.quote.text))]),t._v(" "),s("h3",{staticClass:"quote-author"},[t._v(t._s(t.quote.author))])]):t._e(),t._v(" "),s("div",{staticClass:"navbar"},[s("button",{attrs:{disabled:t.quotes.length<2},on:{click:t.previousSlide}},[t._v("Previous")]),t._v(" "),s("button",{on:{click:function(e){t.$emit("toggle-filters")}}},[t._v("Filter")]),t._v(" "),s("button",{attrs:{disabled:t.quotes.length<2},on:{click:t.nextSlide}},[t._v("Next")])])])},n=[],i={render:o,staticRenderFns:n};e.a=i},act2:function(t,e,s){"use strict";var o=s("Ggc3"),n=s.n(o),i=new n.a,r=s("3q1R");e.a={name:"slideshow",data:function(){return{quote:null,index:0}},props:["quotes","backgrounds"],watch:{quotes:function(t){t&&t.length&&(this.selectQuote(0),t.length>1&&this.preloadBackground(1),t.length>2&&this.preloadBackground(this.quotes.length-1))}},methods:{nextSlide:function(){var t=(this.index+1)%this.quotes.length,e=(t+1)%this.quotes.length;this.selectQuote(t),this.preloadBackground(e)},previousSlide:function(){var t=(this.index||this.quotes.length)-1,e=(t||this.quotes.length)-1;this.selectQuote(t),this.preloadBackground(e)},selectQuote:function(t){this.index=t,this.quote=this.quotes[t],this.$emit("background-changed",this.getBackgroundFromIndex(t))},getBackgroundFromIndex:function(t){return this.backgrounds[t%this.backgrounds.length]||r},preloadBackground:function(t){i.preload(this.getBackgroundFromIndex(t))},onKeyUp:function(t){switch(t.which||t.keyCode){case 37:this.previousSlide();break;case 39:this.nextSlide()}}},created:function(){window.addEventListener("keyup",this.onKeyUp)},beforeDestroy:function(){window.removeEventListener("keyup",this.onKeyUp)}}},fTtJ:function(t,e){},jstG:function(t,e,s){"use strict";var o=s("c/Tr"),n=s.n(o);e.a=function(){function t(e){if(!e.length)return[];var s=Math.floor(Math.random()*e.length);return e.splice(s,1).concat(t(e))}var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n()(e))}},pXJT:function(t,e){},uFRC:function(t,e,s){"use strict";function o(t){s("pXJT")}var n=s("act2"),i=s("PlLD"),r=s("VU/8"),a=o,u=r(n.a,i.a,a,null,null);e.a=u.exports},wSfA:function(t,e,s){"use strict";var o=s("jstG"),n=s("M4fF");e.a={name:"filters",props:["quotes"],data:function(){return{selectedAuthor:"",sortMethod:""}},computed:{authors:function(){var t=n.map(this.quotes,"author");return n.uniq(t).sort()},quotesByAuthor:function(){return this.selectedAuthor?n.filter(this.quotes,["author",this.selectedAuthor]):this.quotes},previewMessage:function(){return this.quotesByAuthor.length>1?this.quotesByAuthor.length+" matching quotes":"1 matching quote"}},watch:{},methods:{sort:function(t){return"oldest"===this.sortMethod?n.sortBy(t,"timestamp"):"newest"===this.sortMethod?n.reverse(n.sortBy(t,"timestamp")):s.i(o.a)(t)},applyFilter:function(){this.$emit("filter-changed",this.sort(this.quotesByAuthor)),this.close()},close:function(){this.$emit("hide-filters")}}}},xJD8:function(t,e,s){"use strict";var o=s("uFRC"),n=s("DlPZ"),i=s("jstG"),r=s("4rzq"),a=s("M4fF");e.a={components:{Slideshow:o.a,Filters:n.a},name:"app",data:function(){return{loading:!0,showFilters:!1,errors:[],backgrounds:[],allQuotes:[],displayedBackground:null,displayedQuotes:[]}},methods:{setDisplayedQuotes:function(t){this.displayedQuotes=t||this.allQuotes},setDisplayedBackground:function(t){this.displayedBackground=t}},created:function(){var t=this;r("https://spreadsheets.google.com/feeds/list/1IlMhfGYrm9qWMeLEZ5hGnicD3ugaoJTM3u_zfNJEybI/1/public/values?alt=json",function(e,o){e&&t.errors.push(e);var n=o&&o.feed&&o.feed.entry||[];t.backgrounds=s.i(i.a)(a.map(n,"gsx$imageurl.$t"))}),r("https://spreadsheets.google.com/feeds/list/1-wxLMgOX_jNayPD7u_w07gkuLnVZ1TJxvg9Je9yQj98/1/public/values?alt=json",function(e,o){e&&t.errors.push(e);var n=o&&o.feed&&o.feed.entry||[];n=a.map(n,function(t){return{text:t.gsx$quote&&t.gsx$quote.$t,author:t.gsx$author&&t.gsx$author.$t,context:t.gsx$contextoptional&&t.gsx$contextoptional.$t,timestamp:new Date(t.gsx$timestamp&&t.gsx$timestamp.$t),exclude:!(!t.gsx$excludefromslideshow||!t.gsx$excludefromslideshow.$t)}}),t.allQuotes=n,t.setDisplayedQuotes(s.i(i.a)(t.allQuotes).slice(0,20))})}}}},["NHnr"]);
//# sourceMappingURL=app.3bd8ee27e638aa6659ea.js.map