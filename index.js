(function(){"use strict";function p(r,e,o,s,a,c,d,C){var t=typeof r=="function"?r.options:r;e&&(t.render=e,t.staticRenderFns=o,t._compiled=!0),s&&(t.functional=!0),c&&(t._scopeId="data-v-"+c);var i;if(d?(i=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!n&&typeof __VUE_SSR_CONTEXT__<"u"&&(n=__VUE_SSR_CONTEXT__),a&&a.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(d)},t._ssrRegister=i):a&&(i=C?function(){a.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:a),i)if(t.functional){t._injectStyles=i;var b=t.render;t.render=function(k,_){return i.call(_),b(k,_)}}else{var l=t.beforeCreate;t.beforeCreate=l?[].concat(l,i):[i]}return{exports:r,options:t}}const f={__name:"VideoEmbed",props:["content"],setup(r){const e=r,o=Vue.computed(()=>e.content.video[0]);return{__sfc:!0,props:e,video:o}}};var u=function(){var e=this,o=e._self._c,s=e._self._setupProxy;return s.video?o("div",{staticClass:"video-container"},[o("figure",[o("video",{attrs:{controls:e.content.controls,autoplay:e.content.autoplay,loop:e.content.loop,alt:e.content.alt}},[o("source",{attrs:{src:s.video.url,type:"video/mp4"}}),e._v(" Your browser does not support the video tag. ")]),e.content.caption?o("figcaption",{staticClass:"video-caption"},[e.content.link?o("a",{staticClass:"video-caption-link",attrs:{href:e.content.link,alt:e.content.alt}},[e._v(" "+e._s(e.content.caption)+" ")]):o("p",[e._v(e._s(e.content.caption))])]):e._e()])]):o("div",[o("k-block-figure",{attrs:{"is-empty":!s.video,"empty-icon":"file-video","empty-text":"No video selected"}})],1)},v=[],m=p(f,u,v,!1,null,null,null,null);const h=m.exports;panel.plugin("vyder/kirby-video-embed-block",{blocks:{"video-embed":h}})})();
