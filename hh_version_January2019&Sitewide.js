// Heather's rewritten cookie api

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

function createCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}


// Heather replacing routing JS with original library
(function($){"use strict";var combinators=[" ",">","+","~"];var fraternisers=["+","~"];var complexTypes=["ATTR","PSEUDO","ID","CLASS"];function grok(msobserver){if(!$.find.tokenize){msobserver.isCombinatorial=true;msobserver.isFraternal=true;msobserver.isComplex=true;return}msobserver.isCombinatorial=false;msobserver.isFraternal=false;msobserver.isComplex=false;var token=$.find.tokenize(msobserver.selector);for(var i=0;i<token.length;i++){for(var j=0;j<token[i].length;j++){if(combinators.indexOf(token[i][j].type)!=-1)msobserver.isCombinatorial=true;if(fraternisers.indexOf(token[i][j].type)!=-1)msobserver.isFraternal=true;if(complexTypes.indexOf(token[i][j].type)!=-1)msobserver.isComplex=true}}}var MutationSelectorObserver=function(selector,callback,options){this.selector=selector.trim();this.callback=callback;this.options=options;grok(this)};var msobservers=[];msobservers.initialize=function(selector,callback,options){var seen=[];var callbackOnce=function(){if(seen.indexOf(this)==-1){seen.push(this);$(this).each(callback)}};$(options.target).find(selector).each(callbackOnce);var msobserver=new MutationSelectorObserver(selector,callbackOnce,options);this.push(msobserver);var observer=new MutationObserver(function(mutations){var matches=[];for(var m=0;m<mutations.length;m++){if(mutations[m].type=="attributes"){if(mutations[m].target.matches(msobserver.selector))matches.push(mutations[m].target);if(msobserver.isFraternal)matches.push.apply(matches,mutations[m].target.parentElement.querySelectorAll(msobserver.selector));else matches.push.apply(matches,mutations[m].target.querySelectorAll(msobserver.selector))}if(mutations[m].type=="childList"){for(var n=0;n<mutations[m].addedNodes.length;n++){if(!(mutations[m].addedNodes[n]instanceof Element))continue;if(mutations[m].addedNodes[n].matches(msobserver.selector))matches.push(mutations[m].addedNodes[n]);if(msobserver.isFraternal)matches.push.apply(matches,mutations[m].addedNodes[n].parentElement.querySelectorAll(msobserver.selector));else matches.push.apply(matches,mutations[m].addedNodes[n].querySelectorAll(msobserver.selector))}}}for(var i=0;i<matches.length;i++)$(matches[i]).each(msobserver.callback)});var defaultObeserverOpts={childList:true,subtree:true,attributes:msobserver.isComplex};observer.observe(options.target,options.observer||defaultObeserverOpts);return observer};$.fn.initialize=function(callback,options){return msobservers.initialize(this.selector,callback,$.extend({},$.initialize.defaults,options))};$.initialize=function(selector,callback,options){return msobservers.initialize(selector,callback,$.extend({},$.initialize.defaults,options))};$.initialize.defaults={target:document.documentElement,observer:null}})(jQuery);


// routing JS
// function initCampaign(){     
//     if (!jQuery().initialize) {
//         /*!
//          * jQuery initialize - v1.0.0 - 12/14/2016
//          * https://github.com/adampietrasiak/jquery.initialize
//          *
//          * Copyright (c) 2015-2016 Adam Pietrasiak
//          * Released under the MIT license
//          * https://github.com/timpler/jquery.initialize/blob/master/LICENSE
//          */
//         (function($) {
//             "use strict";
//             var combinators = [" ", ">", "+", "~"];
//             var fraternisers = ["+", "~"];
//             var complexTypes = ["ATTR", "PSEUDO", "ID", "CLASS"];

//             function grok(msobserver) {
//                 if (!$.find.tokenize) {
//                     msobserver.isCombinatorial = true;
//                     msobserver.isFraternal = true;
//                     msobserver.isComplex = true;
//                     return;
//                 }
//                 msobserver.isCombinatorial = false;
//                 msobserver.isFraternal = false;
//                 msobserver.isComplex = false;
//                 var token = $.find.tokenize(msobserver.selector);
//                 for (var i = 0; i < token.length; i++) { for (var j = 0; j < token[i].length; j++) { if (combinators.indexOf(token[i][j].type) != -1) msobserver.isCombinatorial = true; if (fraternisers.indexOf(token[i][j].type) != -1) msobserver.isFraternal = true; if (complexTypes.indexOf(token[i][j].type) != -1) msobserver.isComplex = true; } }
//             }
//             var MutationSelectorObserver = function(selector, callback, options) {
//                 this.selector = selector.trim();
//                 this.callback = callback;
//                 this.options = options;
//                 grok(this);
//             };
//             var msobservers = [];
//             msobservers.initialize = function(selector, callback, options) {
//                 var seen = [];
//                 var callbackOnce = function() {
//                     if (seen.indexOf(this) == -1) {
//                         seen.push(this);
//                         $(this).each(callback);
//                     }
//                 };
//                 $(options.target).find(selector).each(callbackOnce);
//                 var msobserver = new MutationSelectorObserver(selector, callbackOnce, options);
//                 this.push(msobserver);
//                 var observer = new MutationObserver(function(mutations) {
//                     var matches = [];
//                     for (var m = 0; m < mutations.length; m++) {
//                         if (mutations[m].type == "attributes") {
//                             if (mutations[m].target.matches(msobserver.selector)) matches.push(mutations[m].target);
//                             if (msobserver.isFraternal) matches.push.apply(matches, mutations[m].target.parentElement.querySelectorAll(msobserver.selector));
//                             else matches.push.apply(matches, mutations[m].target.querySelectorAll(msobserver.selector));
//                         }
//                         if (mutations[m].type == "childList") {
//                             for (var n = 0; n < mutations[m].addedNodes.length; n++) {
//                                 if (!(mutations[m].addedNodes[n] instanceof Element)) continue;
//                                 if (mutations[m].addedNodes[n].matches(msobserver.selector)) matches.push(mutations[m].addedNodes[n]);
//                                 if (msobserver.isFraternal) matches.push.apply(matches, mutations[m].addedNodes[n].parentElement.querySelectorAll(msobserver.selector));
//                                 else matches.push.apply(matches, mutations[m].addedNodes[n].querySelectorAll(msobserver.selector));
//                             }
//                         }
//                     }
//                     for (var i = 0; i < matches.length; i++) $(matches[i]).each(msobserver.callback);
//                 });
//                 var defaultObeserverOpts = { childList: true, subtree: true, attributes: msobserver.isComplex };
//                 observer.observe(options.target, options.observer || defaultObeserverOpts);
//             };
//             $.fn.initialize = function(callback, options) { msobservers.initialize(this.selector, callback, $.extend({}, $.initialize.defaults, options)); };
//             $.initialize = function(selector, callback, options) { msobservers.initialize(selector, callback, $.extend({}, $.initialize.defaults, options)); };
//             $.initialize.defaults = { target: document.documentElement, observer: null };
//         })(jQuery);

         jQuery.extend(jQuery.easing, {
             def: 'easeOutCustom',
             swing: function(x, t, b, c, d) {
                 return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
             },
             easeOutCustom: function(x, t, b, c, d) {
                 return -c * (t /= d) * (t - 2) + b;
             }
         });
//     }

//     if (typeof owlCarousel !== "function") {
//         /**
//          * Owl Carousel v2.3.4
//          * Copyright 2013-2018 David Deutsch
//          * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
//          */
//         !function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
//     }
//     if (!jQuery().imageready) {
//         !function(e){function t(t){if(void 0===t)throw"Must specify a css attribute name";var r,a=this.getElementsByTagName("*");(a=Array.prototype.slice.call(a,0)).unshift(this);var i,o,n=[];if(e("body")[0].currentStyle)for(var u=(i=(o=t.replace(/-/g," "),o.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).replace(/ /g,"")).substr(0,1).toLowerCase()+i.substr(1),l=0,c=a.length;l<c;l++){"none"==(r=a[l]).currentStyle[u]||n.push(r)}else if(window.getComputedStyle)for(l=0,c=a.length;l<c;l++){r=a[l],"none"==document.defaultView.getComputedStyle(r,null).getPropertyValue(t)||n.push(r)}return n}e.fn.imageready||(e.fn.imageready=function(r,a){void 0===(a=a||{}).allowTimeout&&(a.allowTimeout=e.fn.imageready.allowTimeout,a.timeoutDuration=e.fn.imageready.timeoutDuration);var i,o=function(r){var a=r.find("img").add(r.filter("img"));if(r.each(function(){e(t.call(this,"background-image")).each(function(){var t=e(new Image),r=e(this).css("background-image"),i=/url\(([^)]*)\)/g.exec(r);if(null!==i){var o=i[1].replace(/[\"\']/g,"");t.attr("src",o),a=a.add(t)}})}),a.loaded=0,0!==a.length)return a}(this);if(!o)return r();function n(){clearTimeout(i);var t=[];return o.each(function(){if(!this._isImageReadyComplete){t.push(this);var r=e(this);console.error("image not loaded in time",r.attr("src"))}}),r(e(t))}function u(e){if(clearTimeout(i),e&&e.target&&(o.loaded++,e.currentTarget._isImageReadyComplete=!0),o.length<=o.loaded)return r();a.allowTimeout&&(i=setTimeout(n,a.timeoutDuration))}if(o.each(function(){var t,r,a,i,n,l,c,s=e(this);if(r=(t=s)[0],a=!t.attr("src"),i=r.complete,n=4===r.readyState,l=t.height()>0,c=void 0===r.naturalHeight||r.naturalHeight>0,a||i||n||l&&c)return o.loaded++;s.one("load",u),s.one("error",u),s.attr("src",s.attr("src"))}),o.length<=o.loaded)return u();a.allowTimeout&&(i=setTimeout(n,a.timeoutDuration))},e.fn.imageready.timeoutDuration=1,e.fn.imageready.allowTimeout=!1)}(jQuery);
//     }
// }

// var URL = window.location.href;
// if(
//     URL.indexOf('/rentacar/rental-car-deals/hertz-local-edition') > -1 ||
//     URL.indexOf('/rentacar/rental-car-deals/jd-power-2019') > -1

// ){
//     // heather rewrote with new cookie function
//     createCookie('mm-h0020-active', 'true', 30);
// }
// function setQualifications(){
//     if(visitor.getAttr('QualifyReviewBk') == undefined){
//         visitor.storeAttr('QualifyReviewBk', 'False');
//     }
//     if(window.location.hash.indexOf("review-and-book") > -1){
//         var curExperiences = site.getPageExperiences();
//         //The redesign tests take longer to appear in getPageExperiences, wait for them up until the timeout.
//         for (let key in curExperiences) {
//             if (key.indexOf('H0020') > -1) {
//                 if(curExperiences[key].content == "january 2019"){
//                     createCookie('mm-h0020-review-book', 'Jan2019', 30);        
//                 }
//                 return true;
//             }
//         }
        
//     }
//     if(window.location.hash.indexOf("extras") > -1){
//         if(getCookie('mm-h0020-review-book') !== 'Jan2019'){
//             if(visitor.getAttr('PickupLocation') !== undefined){
//                 var loc = visitor.getAttr('PickupLocation');
//                 var storeQualification = visitor.getAttr('QualifyReviewBk');
//                 if(
//                     $('#loginLink').length>0 && (
//                     loc.indexOf('Los Angeles International Airport') > -1
//                     || loc.indexOf('MCO - Orlando International Airport') > -1
//                     || loc.indexOf('Denver International Airport') > -1
//                     || loc.indexOf('San Francisco International Airport') > -1
//                     || loc.indexOf('Atlanta Hartsfield International Airport') > -1
//                     || loc.indexOf('Las Vegas McCarran International Airport') > -1
//                     || loc.indexOf('Phoenix - Sky Harbor Airport') > -1
//                     || loc.indexOf('Fort Lauderdale International Airport') > -1
//                     || loc.indexOf('Miami International Airport') > -1
//                     || loc.indexOf('Boston Logan International Airport') > -1
//                     || loc.indexOf('TPA - Tampa International Airport') > -1
//                     || loc.indexOf('San Diego-Lindbergh Airport') > -1
//                     || loc.indexOf('O\'Hare Airport') > -1
//                     || loc.indexOf('Dallas Fort Worth Airport') > -1
//                     || loc.indexOf('Detroit Metropolitan Wayne County Airport') > -1
//                     || loc.indexOf('Sea-Tac Airport') > -1
//                     || loc.indexOf('Honolulu International Airport') > -1
//                     || loc.indexOf('Philadelphia International Airport') > -1
//                     || loc.indexOf('Newark International Airport') > -1
//                     || loc.indexOf('Houston George Bush Intercontinental Airport') > -1

//                     || loc.indexOf('San Jose International Airport') > -1
//                     || loc.indexOf('Salt Lake City International Airport') > -1
//                     || loc.indexOf('Portland Oregon International Airport') > -1
//                     || loc.indexOf('New York City JFK Airport') > -1
//                     || loc.indexOf('Charlotte Douglas International Airport') > -1
//                     || loc.indexOf('Raleigh-Durham International Airport') > -1
//                     || loc.indexOf('MSP - Minneapolis International Airport -Terminal 1/Lindbergh') > -1
//                     || loc.indexOf('Baltimore Washington International Thurgood Marshall Airport') > -1
//                     || loc.indexOf('Nashville Metro Airport') > -1
//                     || loc.indexOf('Kahului Airport') > -1
//                     || loc.indexOf('Austin Bergstrom International Airport') > -1
//                     || loc.indexOf('Fort Myers Southwest International Airport') > -1
//                     || loc.indexOf('Sacramento International Airport') > -1
//                     || loc.indexOf('Ronald Reagan National Airport') > -1
//                     || loc.indexOf('Orange County - John Wayne Airport') > -1
//                     || loc.indexOf('Saint Louis Lambert International Airport') > -1
//                     || loc.indexOf('New York City Laguardia Airport') > -1
//                     || loc.indexOf('Washington Dulles International Airport') > -1
//                     || loc.indexOf('Palm Beach International Airport') > -1
//                     || loc.indexOf('Louis Armstrong New Orleans International Airport') > -1
//                     || loc.indexOf('Oakland International Airport') > -1
//                     || loc.indexOf('Dallas Love Field Airport') > -1
//                     || loc.indexOf('Cleveland Hopkins Airport') > -1
//                     || loc.indexOf('Kona Keahole Airport') > -1
//                     || loc.indexOf('Jacksonville International Airport') > -1
//                     || loc.indexOf('Kansas City International Airport') > -1
//                     || loc.indexOf('San Antonio Airport') > -1
//                     || loc.indexOf('Houston Hobby Airport') > -1
//                     || loc.indexOf('Pittsburgh International Airport') > -1
//                     || loc.indexOf('Midway Airport') > -1
//                     || loc.indexOf('Charleston International Airport') > -1
//                     || loc.indexOf('John Glenn Columbus International Airport') > -1
//                     || loc.indexOf('Albuquerque International Airport') > -1
//                     || loc.indexOf('Indianapolis International Airport') > -1
//                     || loc.indexOf('Bradley International Airport') > -1
//                     || loc.indexOf('Memphis International Airport') > -1
//                     || loc.indexOf('Milwaukee Mitchell Field Airport') > -1
//                     || loc.indexOf('Cincinnati International Airport') > -1
//                     || loc.indexOf('Reno Tahoe International Airport') > -1
//                     || loc.indexOf('Buffalo Niagara International Airport') > -1
//                     || loc.indexOf('Lihue Airport') > -1
//                     || loc.indexOf('Hollywood Burbank Airport') > -1
//                     || loc.indexOf('Savannah International Airport') > -1
//                     || loc.indexOf('Oklahoma City Will Rogers World Airport') > -1
//                     || loc.indexOf('Albany International Airport') > -1
//                     || loc.indexOf('Richmond International Airport') > -1
//                     || loc.indexOf('T. F. Green Airport') > -1
//                     || loc.indexOf('Louisville Standiford Field') > -1
//                     || loc.indexOf('Birmingham (US) International Airport') > -1
//                     || loc.indexOf('Bozeman International Airport') > -1
//                     || loc.indexOf('Rochester International Airport') > -1
//                     || loc.indexOf('Portland Maine International Jetport') > -1
//                     || loc.indexOf('Norfolk Airport Counter') > -1
//                     || loc.indexOf('Omaha Eppley Airport') > -1
//                     || loc.indexOf('Tucson International Airport') > -1
//                     || loc.indexOf('Syracuse Hancock Airport') > -1
//                     || loc.indexOf('Gerald R Ford International Airport') > -1
//                     || loc.indexOf('Boise Air Terminal') > -1
//                     || loc.indexOf('Long Beach Airport') > -1
//                     || loc.indexOf('Myrtle Beach International Airport') > -1
//                     || loc.indexOf('Spokane International Airport') > -1
//                     || loc.indexOf('Pensacola Regional Airport') > -1
//                     || loc.indexOf('Greenville Spartanburg International Airport') > -1
//                     || loc.indexOf('Palm Springs - Palm Springs Airport') > -1
//                     || loc.indexOf('Tulsa International Airport') > -1
//                     || loc.indexOf('El Paso International Airport') > -1
//                     || loc.indexOf('Knoxville Airport') > -1
//                     || loc.indexOf('Little Rock - Bill and Hillary Clinton National Airport') > -1
//                     || loc.indexOf('Jackson Hole Municipal Airport') > -1
//                     || loc.indexOf('Fresno Yosemite International Airport') > -1
//                     || loc.indexOf('Greensboro International Airport') > -1
//                     || loc.indexOf('Sarasota Bradenton Airport') > -1
//                     || loc.indexOf('Des Moines International Airport') > -1
//                     || loc.indexOf('Destin - Fort Walton Beach Airport') > -1
//                     || loc.indexOf('Anchorage International Airport') > -1
//                     || loc.indexOf('Manchester (US) Airport') > -1
//                     || loc.indexOf('NW Florida Beaches International Airport') > -1
//                     || loc.indexOf('Asheville Regional Airport') > -1
//                     || loc.indexOf('Sanford (Florida) Airport') > -1
//                     || loc.indexOf('Burlington Airport') > -1
//                     )
//                 ){
//                     if(visitor.getAttr('QualifyReviewBk') == 'False'){
//                         visitor.storeAttr('QualifyReviewBk', 'True');
//                     }
//                 }else {
//                     if(visitor.getAttr('QualifyReviewBk') == 'True'){
//                         visitor.storeAttr('QualifyReviewBk', 'False');;
//                     }
//                 }
//                 if(storeQualification !== visitor.getAttr('QualifyReviewBk')) {
//                     window.location.reload();
//                 }
//             }
//         }
//     }
// }

// if(getCookie('mm-h0020-active') !== 'disabled'){

//     if (!document.getElementById('MMActive')) {
//         renderer.hide('#container');
//     }

//     if (typeof router !== "undefined") { 
//         router.onRouteChange({
//             urls: ["https://www.hertz.com/rentacar/reservation/", "https://wwwpreprod.hertz.com/rentacar/reservation/"],
//             handler: function() {
//                 when(function() {
//                     // && visitor.getAttr('is_IP') !== undefined
//                     return (document.getElementById('pos-change') || document.getElementById('mobile-nav-menu-top')) && document.getElementById('title-links') && window.jQuery && window.h0020CSS;
//                 }).done(function() {

//                     if (
//                         ($(".languageselector span:contains('EN')").length > 0 && $(".languageselector span:contains('US')").length > 0) ||
//                         ($(".languageselector span:contains('EN')").length > 0 && $(".languageselector span:contains('CA')").length > 0) ||
//                         ($(".mob-pos-selector .mob-pos-text span:contains('EN')").length > 0 && $(".mob-pos-selector .mob-pos-text span:contains('US')").length > 0) ||
//                         ($(".mob-pos-selector .mob-pos-text span:contains('EN')").length > 0 && $(".mob-pos-selector .mob-pos-text span:contains('CA')").length > 0)
//                     ) {
//                         renderer
//                             .getContent('H011 Homepage Redesign VP')
//                             .done(function() {
//                                 initCampaign();
//                                 setQualifications();
//                                 createCookie('mm-h0020-active', 'true', 30 );
//                                 renderer.runVariantJs();
//                             }).always(function() {
//                                 renderer.showAll();
//                             });

//                     } else {
//                         // renderer.showAll();
//                     }
//                 });
//             }
//         });
//     } else {
//         if(getCookie('mm-h0020-active') == 'true'){

//           var URL = window.location.href;

//           if (URL.indexOf('/rentacar/b2b/business-accounts') < 0) {
//             renderer
//               .when(function() {
//                 // && visitor.getAttr('is_IP') !== undefined
//                 return (document.getElementById('pos-change') || document.getElementById('mobile-nav-menu-top')) && window.jQuery && window.h0020CSS;
//               })
//               .done(function() {
//                 renderer
//                 .getContent('H011 Homepage Redesign VP')
//                 .done(function() {
//                     initCampaign();
//                     setQualifications();
//                     $('body').addClass('mm-content-page');
//                     renderer.runVariantJs();
//                 }).always(function() {
//                     renderer.showAll();
//                 });
//               }); 
//             }       
//         } else {
//             createCookie('mm-h0020-active', 'disabled', 30 );
//         }
//     }
// }

// CSS includes JS
window.h0020CSS = {};
    window.h0020CSS['global'] = '#container,#page{box-sizing:border-box}#container,#rental-links{border:none!important}.lb-foreground{background:#000!important}@media only screen and (max-width:599px){.lb-header{padding:9px 10px 10px!important}.lb-back{margin-bottom:0!important}}#container{width:100%!important}.mm-hide{display:none!important}#rental-links a,#rental-policy-links,ul.rental-policy-groups{display:block!important}body{background-color:#F3F4F8!important;min-width:initial!important}#error-list{margin-bottom:15px!important}#page{width:100%;padding:0!important;margin:0 auto;position:relative;background-color:#FFF}#res-extras-page-container,#res-review-and-book-page-container,#res-vehicles-page-container{padding:10px;box-sizing:border-box;max-width:1076px;margin:0 auto}.modal-close-row{background-color:#F2F4F7;padding:20px;font-size:24px;position:relative}#rental-links,ul.rental-policy-groups{padding:0!important;width:100%!important;box-sizing:border-box}.modal-close-icon{position:absolute;top:17px;right:20px}ul.rental-policy-groups{margin:0!important}.rental-policy-groups div{position:relative}#rental-links a{box-sizing:border-box;padding:10px 20px 10px 50px!important;color:#000!important;font-size:18px!important;width:100%!important}#rental-links li li a{padding:4px 0!important;color:#365AD8!important;font-size:14px!important;display:inline-block!important;width:auto}#rental-links li li a:hover{text-decoration:underline}#rental-links #expand-collapse-rental-links{display:none!important}ul.rental-policy-groups li{border:1px solid #D7D8D8;border-radius:2px}ul.rental-policy-groups li li{border:none;list-style-type:none}#important #important-information-container .icons-expand_icon,#important #important-information-container .icons-collapse_icon,#rental-links .divider,h4.rental-links-header .expand-collapse-rental-links{display:none!important}.rental-policy-links-wrapper{padding:1px 0}.expandable-section .expandable-section-btn,#important .terms .terms h2,#important #important-information-toggle,h4.rental-links-header{border:none!important;border-bottom:1px solid #E6E7EB!important;background:0 0!important;padding-bottom:10px;box-sizing:border-box;padding-left:30px;font-size:17px!important;font-weight:300!important;position:relative;text-decoration:none!important;color:#000!important}#important #important-information-container,#steps ul div.bar{border:none!important}#important-information-toggle{cursor:pointer}#important-information-toggle .link-indicator{color:#000!important;margin:0!important;padding:0!important;text-decoration:none!important;font-size:15px!important}#important-information-container .rental-policy-links-wrapper{border:1px solid #D7D8D8;border-radius:2px;margin-top:10px;padding:20px;box-sizing:border-box}#rental-links .rental-policy-groups{border-bottom:none!important}.expandable-section-btn.inactive::after,#important .terms .terms h2.inactive::after,#important #important-information-toggle.inactive::after,h4.rental-links-header.inactive::after{-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}#important #rental-links .rental-links-disclaimer{border-top:none!important}.rental-policy-groups .expand-collapse-icon.icons-arrow-blue-right{-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}#rental-policy-links .policy-links{padding:0 0 10px 50px}#important #rental-links .rental-links-header{background:0 0!important;padding:0 0 5px 30px!important;margin:20px 0 10px!important;cursor:pointer;font-size:15px!important}#important #important-information-container ul{margin-bottom:0!important;padding:0!important;display:block}#important #important-information-container ul .icons-expand_icon{display:none!important}#steps{display:block!important}#steps ul div.bar{height:4px!important;border-radius:2px!important;background-color:#D7D8D8!important}#steps ul .current div.bar,#steps ul .prev-step div.bar{background-color:#FC0!important}.step-mobile{display:none}.mm-v-icn{display:inline-block;width:16px;height:16px;background:no-repeat;background-size:100% auto}.mm-mobile-headline{display:none!important}.mm-desktop-headline{display:block!important}#res-cancel-confirmation-page .cancel-confirmation-content .hertz-advert div{background:0 0!important;border:none!important}.mm-content-page #page{padding:10px!important}';
    window.h0020CSS['itinerary'] = '#steps li,.step-mobile{text-align:center;text-transform:uppercase}#steps li,.itinerary-summary-date,.step-mobile{text-transform:uppercase}.itin-expand-ovrvw-row{display:table;width:100%}.itin-expand-ovrvw-col{display:table-cell;width:50%;box-sizing:border-box;padding:10px;vertical-align:top}.itin-expand-ovrvw-row-outlined{border-radius:2px;border:1px solid #E6E7EB;margin-bottom:30px}.itin-expand-ovrvw-row-outlined .itin-expand-ovrvw-col-left{border-right:1px solid #E6E7EB;padding-left:10px}.itin-expand-ovrvw-location{margin:10px 0 4px}.itin-expand-ovrvw-date{font-size:28px;line-height:28px;margin-bottom:10px}.itinerary-expand-vehicle-class{margin-top:6px;margin-bottom:0}.itinerary-expand-vehicle-details{margin:5px 0 0}.itinerary-expand-full-details{padding-top:20px}.itin-expand-ovrvw-col-left{padding-left:0}#itinerarySection{display:block;width:100%;color:#FFF}#itinerarySection.inactive{display:none}.itinerary-expand-row,.itinerary-summary-btn-row,.itn-sum-row,.itn-sum-row-inner,.itn-sum-row-inner-desktop-only{display:table;width:100%}.itn-sum-row{max-width:1076px;margin:0 auto}.itin-sum-col,.itinerary-expand-col,.itn-sum-col-inner,.itn-sum-col-inner-desktop-only{display:table-cell;vertical-align:top;width:50%}.itinerary-summary-btn-col{display:table-cell;vertical-align:top}.itinerary-summary-btn-col-right{width:40px}#itinerarySectionBG{z-index:2;position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;transition:opacity .6s;background:rgba(0,0,0,.4);cursor:pointer;pointer-events:none}#itinerarySectionBG.active{display:block;pointer-events:auto;opacity:1;width:100%;height:100%}#itinerarySectionInner{position:relative;z-index:3}#itineraryExpand{background:#FFF;display:none;position:absolute;top:0;left:0;width:100%;box-sizing:border-box;padding:50px 10px}#itinerarySectionInner #itinerary-info{width:100%!important}#itnExpW{position:relative}.itn-sum-col-inner-desktop-only-left,.itn-sum-col-inner-left,.itn-sum-col-inner-right{padding:14px 10px;box-sizing:border-box}#steps li{font-size:12px!important;font-weight:400!important}#itineraryExpandCarRight img{width:100%;max-width:530px}.step-content{padding-bottom:5px;opacity:.5;color:#5C5F66!important}.step-content a{color:#5C5F66!important;text-decoration:none!important}.step-mobile{font-size:14px;color:#5C5F66;font-weight:500;margin-bottom:10px}.current .step-content,.prev-step .step-content{opacity:1}#itineraryExpandOverview{color:#000}.btn-cloned{display:none!important}#itineraryExpandBtn.active{-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.itinerary-summary-btn-col.itinerary-summary-btn-col-right{padding-top:30px}#itineraryNextStep button{width:100%;display:block;background:#FC0;border:2px solid #FC0;color:#000;font-size:18px;border-radius:2px;float:right;max-width:160px}#itineraryNextStep button:disabled{color:#FFF;background:#e6e7eb;border:2px solid #e6e7eb}#itineraryNextStep{padding-right:20px;padding-top:20px;padding-bottom:20px}.itinerary-summery-cost{font-size:32px;font-weight:300;letter-spacing:-.5px;margin-top:6px;line-height:32px}.itinerary-currency{font-size:12px;display:inline-block;margin:0 0 0 5px;position:relative;top:-1px}.itinerary-summary-date{font-size:22px;margin-bottom:2px}.itinerary-expand-row{max-width:1076px;margin:0 auto}.itinerary-expand-col.itinerary-expand-col-left{width:auto}.itinerary-expand-col.itinerary-expand-col-right{width:360px}#itnExpOverW{padding-right:70px}#res-itinerary-1{border:none!important}#res-itinerary-1 .divider{border-top:none!important;margin-top:0!important;padding-top:0!important}#res-itinerary-1 .click-indicator{background:0 0!important;position:relative;padding-bottom:3px}a.itn-edit-link-proxy{cursor:pointer}a.itn-edit-link-proxy:hover{text-decoration:underline}.loc-view-link1{text-align:right}.itn-loc-detail-link-proxy{text-decoration:none;color:#308dff;cursor:pointer;display:inline-block}.itn-loc-detail-link-proxy:hover{text-decoration:underline}#res-itinerary-1 .link-indicator{margin:0!important;text-decoration:none!important}#res-itinerary-1 a.itn-edit-link{display:inline-block!important;position:absolute!important;bottom:5px;left:0;float:none!important;padding:0!important;margin:0!important}#res-itinerary-1 #itn-info-header{font-size:30px!important;color:#000!important;text-decoration:none!important}.itinerary-expand-vehicle-link-proxy:hover,.rd-view-options-link-close-proxy:hover,.rd-view-options-link-open-proxy:hover{text-decoration:underline}#res-itinerary-1 .itn-container{padding:0!important;display:block!important}#itnExpFullDet #important-information-toggle .expand_collapse_itn{display:none!important}#itinerarySection .itn-container label{display:inline-block!important;width:280px;box-sizing:border-box}#res-itinerary-1 .itn-container .int-loc-tm-info .return-location,#res-itinerary-1 .itn-container .int-misc-info .itn-age,#res-itinerary-1 .itn-container .int-misc-info .itn-arrival-info,#res-itinerary-1 .itn-container .int-misc-info .itn-discounts,#res-itinerary-1 .itn-container .itn-same-location .return-location{border:none!important;padding:0!important;margin:0!important}.itinerary-expand-vehicle-type{font-size:30px;margin:0 0 8px;padding:0;line-height:30px}.itinerary-expand-vehicle-headline{margin:0 0 5px}#itineraryFullDetails .rd-box{margin-top:0!important}#rd-main .rd-detail header,#rd-pay-later header{background-color:#F2F4F7!important;padding:15px}#itinerarySection #rd-pay-later header,#itinerarySection #rd-rental-total header{display:table;width:100%;box-sizing:border-box}#itinerarySection #rd-pay-later header div,#itinerarySection #rd-rental-total header div{display:table-cell;vertical-align:middle}#itinerarySection #rd-pay-later header div.rd-title,#itinerarySection #rd-rental-total header div.rd-title{text-align:left}#rd-pay-later header div.rd-title{font-size:14px!important}#itinerarySection #rd-pay-later header div.rd-subtotal,#itinerarySection #rd-rental-total header div.rd-subtotal{text-align:right;font-size:20px!important;width:40%}#itineraryFullDetails #itinerary-content{display:none!important}#res-itinerary-1 .itn-edit-cont{width:auto;background-color:transparent!important;display:block!important;margin-bottom:10px!important}#itineraryFullDetails #rd-main .rd-edit-cont .rd-edit-link,#itineraryFullDetails .rd-header-crtl,#itineraryFullDetails .rd-vehicle img,#res-itinerary-1 .itn-edit-cont.visible-xs,#res-itinerary-1 .itn-header-crtl .icons-expand_icon{display:none!important}.itinerary-expand-vehicle-link-proxy{cursor:pointer}#res-itinerary-1 .itn-container .itn-location-header .int-loc-crtl{width:75px!important}.rd-view-options-link-close-proxy,.rd-view-options-link-open-proxy{display:inline-block;color:#365AD8;cursor:pointer}.rd-view-options-link-close-proxy{padding-top:7px}#res-itinerary-1 .itn-container .itn-location-header .itn-location-container{width:auto!important}';
    window.h0020CSS['itineraryMobile'] = '@media only screen and (max-width:1023px){#itnExpFullDet{border-top:1px solid #E6E7EB;padding-top:18px}#itineraryExpandCarRight img{max-width:300px}#itineraryExpandCarRight{text-align:center}#itinerarySection .itn-container label{width:100%!important;margin-top:0!important}#itineraryExpandCarLeft,#itineraryExpandCarRight,.itin-expand-ovrvw-col,.itinerary-expand-col{display:block;width:100%;box-sizing:border-box}#itnExpOverW{padding-right:0}.itinerary-expand-col{display:block;width:100%}.itinerary-expand-col.itinerary-expand-col-right{width:100%}#itnExpOverW #res-itinerary-1 .itn-container .int-loc-tm-info. #itnExpOverW #res-itinerary-1 .itn-container .int-misc-info,#itnExpOverW #res-itinerary-1 .itn-container .itn-arrival-info,#itnExpOverW #res-itinerary-1 .itn-container .itn-discounts,#itnExpOverW #res-itinerary-1 .itn-container .itn-pickup-return-time .itn-pickup-time,#itnExpOverW #res-itinerary-1 .itn-container .itn-pickup-return-time .itn-return-time,#itnExpOverW #res-itinerary-1 .itn-container .pickup-location-time,#itnExpOverW #res-itinerary-1 .itn-container .return-location-time{float:none!important;width:100%!important;padding:0!important;margin:0!important}.itin-expand-ovrvw-row-outlined{margin-bottom:10px}.itin-expand-ovrvw-row-outlined .itin-expand-ovrvw-col-left{border-right:none;border-bottom:1px solid #E6E7EB}#res-itinerary-1 .itn-container .int-loc-tm-info,#res-itinerary-1 .itn-container .int-misc-info,#res-itinerary-1 .itn-container .itn-arrival-info,#res-itinerary-1 .itn-container .itn-discounts,#res-itinerary-1 .itn-container .itn-pickup-return-time .itn-pickup-time,#res-itinerary-1 .itn-container .itn-pickup-return-time .itn-return-time,#res-itinerary-1 .itn-container .itn-same-location,#res-itinerary-1 .itn-container .pickup-location-time,#res-itinerary-1 .itn-container .return-location-time,.itn-pickup-return-time{width:100%!important;margin:0 0 15px!important}#res-itinerary-1 .itn-container .int-loc-tm-info,.itn-pickup-return-time{margin-bottom:0!important}#itnExpFullDet label{display:block!important;width:100%!important;float:none!important}.itinerary-expand-full-details{padding-top:0}#itnExpFullDet #res-itinerary-1 .int-misc-info .divider{margin-bottom:15px!important}#itineraryExpand{padding-top:20px;padding-bottom:5px}}';
    window.h0020CSS['vehicles'] = '#vehicles-list .redeem-points-info{display:none!important}.vehicles-list-cont div.unpriced .soldout-cont{float:none!important;width:auto!important;border:none!important;color:#000!important}#vehicleSortSelect{display:block;cursor:pointer}.vehicle-overlay-footer{position:relative}.vehicle-overlay-wrap{width:96%;max-width:500px;margin:0 auto;background-color:#fff;border-radius:2px;max-height:90vh;display:flex;flex-direction:column;cursor:default}.vehicle-overlay-body-wrapper{position:relative;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}body.vehicle-overlay-open{width:100%;height:100%;overflow:hidden}.vehicle-overlay-header{position:relative;display:border-box;padding:20px 60px 20px 20px}.vehicle-overlay-close img{width:20px!important}.vehicle-overlay-close{position:absolute;top:27px;right:27px}.vehicle-overlay-footer .pricing{width:100%!important;display:table!important}.vehicle-overlay-footer .pricing .wrapper{margin:0!important;padding:0!important}.vehicle-overlay-footer .pricing .multiple,.vehicle-overlay-footer .pricing .single{width:50%!important;display:table-cell;box-sizing:border-box;margin:0;text-align:center;padding:10px}.vehicle-overlay-footer .pricing .multiple.multiple-pricing-left,.vehicle-overlay-footer .pricing .single{padding-right:5px}.vehicle-overlay-footer .pricing .multiple.multiple-pricing-right,.vehicle-overlay-footer .pricing .single{padding-left:5px}.vehicle-overlay-footer .pricing .single,.vehicle-overlay-footer .pricing button{margin-bottom:10px}.vehicle-overlay-footer .pricing .single{width:100%!important}.vehicle-overlay-outer{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch;justify-content:center;align-items:center;cursor:pointer}.vehicle-overlay-outer.active{display:flex}.vehicle-overlay-body .car-info{width:100%!important;max-width:220px!important;margin:0 auto;display:block;float:none}.vehicle-overlay-body{box-sizing:border-box;width:100%;padding:5px 20px 20px}.vehicle-overlay-outer div{float:none!important;clear:none!important}.vehicle button.primary.priced{position:inherit!important;display:block!important;width:100%!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding:12px 8px!important}.vehicle button.primary.priced:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}.vehicle-overlay-body ul{margin:0 0 0 30px;padding:0}.vehicle-overlay-body .includes-list{display:block;text-align:center;border:1px solid #5c5f66;padding:10px;margin-top:15px;margin-bottom:15px}.vehicle-overlay-body .disclaimer{margin-left:0!important;padding-left:0!important;padding-right:0!important;margin-right:0!important}.vehicle-overlay-body .vehicle-icon-row{margin-bottom:10px}.vehicle-icon-set{margin-bottom:4px;padding-bottom:0!important}.vehicle-icon-value{position:relative;padding-left:20px;box-sizing:border-box}#res-vehicles-page #vehicles,.vehicle button.secondary.priced{box-sizing:border-box!important;width:100%!important}.vehicle-icon-value .mm-v-icn{position:absolute;top:-1px;left:0}.vehicle-overlay-body ul span{display:none}.vehicle-overlay-body ul span.feature-item{display:block}.vehicle-overlay-body .vehicle-inclusions h3{text-align:left}.vehicle-overlay-body .includes-list ul li{text-align:left;list-style-type:none;position:relative;padding-left:26px;padding-bottom:6px}.vehicle-overlay-body .includes-list ul span{display:inline}.vehicle-overlay-body .includes-list ul span.icons-info_sm{display:inline-block;position:absolute;top:-2px;left:0;cursor:pointer;z-index:1}.vehicle-overlay-body .includes-list ul{margin:10px 0 0 7px}.vehicle-overlay-body .vehicle-inclusions{padding-left:10px}.vehicle button.secondary.priced{position:inherit!important;display:block!important;background-color:#fff!important;border:2px solid #000!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding:12px 15px!important}.vehicle button.secondary.priced:hover{background-color:#000!important;color:#fff!important}.vech-d-view .vehicles-list-cont div.multiple{padding-top:0!important}.vech-d-view .pricing .single{padding:10px}.vech-d-view .vehicle-info,.vehicle-button-row{display:table!important;width:100%!important;padding:0!important}.vech-d-view .vehicle-col-info,.vech-d-view .vehicle-col-pricing{display:table-cell!important;vertical-align:top}.vehicle-col-pricing .pricing{width:100%!important;box-sizing:border-box}.vehicle-button-row .multiple{width:50%!important;box-sizing:border-box!important;padding:10px!important;display:table-cell!important}.vehicle-button-row .multiple.multiple-pricing-left{padding-right:5px!important}.vehicle-button-row .multiple.multiple-pricing-right{padding-left:5px!important}.vehicles-list-cont article{border:none!important;box-shadow:none!important}.vehicles-list-cont figure{width:100%!important;box-sizing:border-box}.vehicles-list-cont div.pricing .wrapper{margin:0!important}.vech-d-view,.vech-d-view .price-wrapper button{margin-bottom:10px}.vech-d-view .price-wrapper{text-align:center}.vech-d-view{border:1px solid #e6e7eb;margin-top:10px;border-radius:2px;box-shadow:2px 2px 2px rgba(0,0,0,.06);padding-right:10px}.vehicle-full-information-link img{width:20px!important}.vech-d-view .features,.vech-d-view .links{display:none!important}.vehicle-icon-row{display:flex;width:100%;flex-wrap:wrap}.vech-d-view .vehicle-icon-row{align-items:center;justify-content:center;padding-bottom:0!important;width:90%;margin:20px auto 15px}.vehicle-icon-col{width:33.3%;vertical-align:top;box-sizing:border-box;padding:10px 10px 10px 10%}.vehicle-overlay-body .vehicle-icon-col{padding-left:10px}.icon-inactive{display:none}.sort .controls,.vech-d-view .similar-info.icons-info_sm{display:none!important}a.vehicle-full-information-link{display:inline-block!important;position:relative;top:-4px}.vehicles-list-cont article.selected{background:#fff!important}.vehicles-list-cont h1{display:block!important}.vehicle-overlay-headline{font-size:22px;font-weight:300!important;margin:0 0 2px}.vehicle-overlay-subheadline{font-size:12px;color:#5c5f66}.vehicle-overlay-subheadline h1{display:inline-block!important;font-size:12px!important;font-weight:300!important;margin:0 4px 0 1px!important}.vehicle-overlay-subheadline .similar-info.icons-info_sm{display:none!important}.vehicle-overlay-subheadline a.similar-text.similar-info{text-decoration:none!important}.vehicle-overlay-subheadline a.similar-text.similar-info:hover{text-decoration:underline!important}.vech-d-view figure .image{float:right!important;width:320px!important;text-align:right}.vech-d-view figure .image .vehicle-img-lrg{width:320px!important;padding-top:20px}.vech-d-view .vehicle-col-info .details{position:absolute;top:0;left:0;padding-top:10px}.vehicles-list-cont figcaption{margin:0!important}.vech-d-view div.pricing div,.vech-d-view div.pricing div.wrapper{padding-bottom:0!important}.vech-d-view .vehicle-type-headline{font-size:18px!important;margin:0;font-weight:300}.vehicles-list-cont .vech-d-view h1{font-size:12px!important;font-weight:300!important;display:inline-block!important;width:auto!important;float:none!important}.vehicle-col-pricing{width:380px}.vehicle-col-info .vehicles-list-cont div.image{padding-top:20px}.vech-d-view .vehicle-col-info{padding-right:40px;position:relative}.vehicles-list-cont img.car-info{min-width:220px}.vehicles-list-cont article{padding-bottom:10px}#res-vehicles-page #vehicles div.rate-message-header p{font-size:14px!important;padding:0!important;margin:5px 0 10px!important}.vech-d-view .mobile-info{display:none!important}#res-vehicles-page .price-wrapper{border-top:none!important}.sort-row{display:table;width:100%}.sort-col{display:table-cell;vertical-align:top}.sort-col-right{width:325px;padding-bottom:25px}.vehicle-sort-wrap{border:1px solid #d7d8d8;background-color:#fff;max-width:280px}.vehicle-sort-wrap select{width:100%!important;border:none;box-shadow:none;box-sizing:border-box;font-size:16px;padding:4px 0 15px;margin:0}.vehicle-sort-wrap select::-ms-expand{display:none}.vehicle-sort-wrap label{box-sizing:border-box;padding:4px 10px 2px;margin:0}.sort-header{font-size:28px!important;font-weight:300!important}.vech-d-view p.or-similar{display:none!important}.vehicles-list-cont span.approx-total-price{display:block!important;margin-top:5px!important}.sort-col-left .sort-promo-wrapper,.vehicle-promo-code-recap label{display:none}.approx-total-price,.approx-total-price a,.approx-total-price span{color:#365ad8!important;font-size:12px!important;text-decoration:none!important}.approx-total-price a:hover{text-decoration:underline!important}.vehicle-tag.vehicle-tag-recommended{background:#0b6a6e;color:#fff;text-align:center;box-sizing:border-box;padding:5px 10px;font-size:12px;border-radius:4px;margin:0 0 5px}.vehicle-promo-code-recap{text-align:right}.vehicle-promo-code-recap h6{font-size:20px;margin:10px 0 0}.vehicle-promo-code-recap p{margin-top:10px}#disclaimer-and-reserve a,#disclaimer-and-reserve a:visited,#rd-main a,#rd-main:visited,#res-bookable-page #residencyChange,.bookable-cost-header-col-right a,.bookable-cost-header-col-right a:visited,.vehicles-list-cont div.sort a,.vehicles-list-cont div.sort a:visited,a.show-all,a.show-all:visited,a.similar-text,a.similar-text:visited{color:#365ad8!important;text-decoration:none!important;cursor:pointer}#disclaimer-and-reserve a:hover,#rd-main a:hover,#res-bookable-page #residencyChange:hover,.bookable-cost-header-col-right a:hover,.vehicles-list-cont div.sort a:hover,a.show-all:hover,a.similar-text:hover{text-decoration:underline!important}.vehicles-list-cont span.display-count{margin-top:-25px}.sort-content{margin-bottom:20px!important}.brg-promo-inner{width:100%;margin:0 auto;position:relative}.brg-promo-title{font-size:18px;line-height:22px;margin:10px 0 0;font-weight:700}.brg-promo-details{font-size:14px;line-height:20px;margin:3px 0 0}#brgPromo,#brgPromoM,#brgPromoT{display:none}#brgPromo.disabled{display:none!important}.brg-promo-details a{text-decoration:none}#brgPromoM .brg-content,#brgPromoT .brg-content{display:table;width:100%}#brgPromoM .brg-promo-title,#brgPromoT .brg-promo-title{display:table-cell;vertical-align:top;width:75px;padding-right:10px}#brgPromoM .brg-promo-title{width:60px}#brgPromoM .brg-promo-title img,#brgPromoT .brg-promo-title img{width:100%}#brgPromoM .brg-promo-details,#brgPromoT .brg-promo-details{display:table-cell;vertical-align:middle}@media only screen and (max-width:767px){#brgPromoM{display:block}.brg-promo-title br{display:none}#brgPromoM{padding:0 12px 15px}.brg-promo-details{font-size:12px}.brg-promo-title{font-style:italic}.brg-promo-details br{display:none}.vehicle-grid-last-line{display:none}}@media only screen and (max-width:599px){#brgPromoM{padding:1px 0 15px}}@media only screen and (min-width:768px) and (max-width:1435px){#brgPromoT{display:block;padding-bottom:20px}.brg-promo-title br{display:none}.brg-promo-title{font-style:italic;margin-top:0}.brg-promo-details{font-size:14px}.brg-promo-details br{display:none}}@media only screen and (min-width:1436px){#brgPromo{position:fixed;top:281px;right:0;width:100%;z-index:999;background-color:#fff;box-shadow:0 0 8px rgba(0,0,0,.2);padding:15px;box-sizing:border-box;transition:bottom .2s;max-width:166px;opacity:0;display:block}#brgPromo.active{right:0;opacity:1}.brg-content{position:relative;padding-top:10px}.brg-promo-close{position:absolute;top:-15px;right:-15px;box-sizing:border-box}.brg-promo-close a{display:block;padding:10px;width:34px;height:34px;box-sizing:border-box}.brg-promo-title{margin-bottom:15px}.brg-promo-details a{display:inline-block;margin-top:5px}.brg-promo-title{font-size:20px;text-align:center}.brg-promo-title img{width:100px}}@media only screen and (min-width:768px){.vehicle-grid{display:flex;flex-wrap:wrap;justify-content:space-between}.vehicle-grid .vehicle,.vehicle-grid-last-line{flex:0 0 auto;flex-basis:32%;flex-direction:column;margin-bottom:20px}.vehicle-grid .vech-d-view figure .image .vehicle-img-lrg{width:100%!important;max-width:200px!important}.vehicle-grid .vech-d-view .vehicle-col-info{padding:0!important}.vehicle-grid .vech-d-view .vehicle-col-info,.vehicle-grid .vech-d-view .vehicle-col-pricing{display:block!important}.vehicle-grid .vehicle-col-pricing{width:100%}.vehicle-grid .vech-d-view{padding-right:0;height:100%}.vehicle-grid .vech-d-view .vehicle-col-info .details{position:relative;top:auto;left:auto;padding-left:0;padding-right:0}.vehicle-grid .vehicles-list-cont img.car-info{min-width:0}.vehicle-grid .vech-d-view figure .image{width:100%!important;padding-left:10px!important;box-sizing:border-box;padding-right:10px!important;text-align:center}.vehicle-grid .vech-d-view .vehicle-col-pricing{float:left;clear:both;width:100%}#vehicleGrid1{margin-bottom:15px}#vehicleGrid2{margin-top:30px}.vehicle-grid .vech-d-view{margin-top:0}.vehicle-grid .vech-d-view .vehicle-icon-row{margin-top:5px}.vehicles-list-cont .vehicle-grid strong.price{font-weight:400;font-size:14px;font-weight:700}.vehicles-list-cont .vehicle-grid span.rate{font-size:14px;font-weight:700}.vehicle-grid .approx-total-price,.vehicle-grid .approx-total-price a,.vehicle-grid .approx-total-price span{font-size:11px!important}.vehicle-grid .vech-d-view button.primary.priced,.vehicle-grid .vech-d-view button.secondary.priced{padding-left:5px!important;padding-right:5px!important}}';
    window.h0020CSS['vehiclesMobile'] = '@media only screen and (max-width:767px){.sort-content{margin-bottom:0!important}.vehicle-icon-col{padding-top:0!important;padding-bottom:0!important}.vech-d-view figure .image .vehicle-img-lrg{padding-top:5px}.vech-d-view .image{padding-top:0}.vech-d-view .vehicle-col-info .details{position:inherit}.sort-col,.vech-d-view .vehicle-col-info,.vech-d-view .vehicle-col-pricing{display:block!important;width:100%!important;box-sizing:border-box}.vech-d-view figure .image{position:inherit;top:auto;left:auto;width:100%!important;text-align:center!important}#res-vehicles-page .price-wrapper{padding:0!important}.vech-d-view .vehicle-col-info{height:auto;padding-right:0}.vehicles-list-cont figcaption a{display:inline-block!important}.vehicles-list-cont div.details{margin-left:10px!important}.vech-d-view{padding-right:0;border:none;box-shadow:none;margin-left:-10px;margin-right:-10px}.vehicles-list-cont article{padding-bottom:20px}#res-vehicles-page{background:0 0!important}.vech-d-view .pricing .single,.vehicles-list-cont article.dual div.single div.unpriced{padding-top:0!important}.sort .display-count{margin-top:10px!important;display:block!important}.mm-desktop-vehicle-headline{display:block!important;background:0 0!important;padding-top:5px!important}.mm-desktop-vehicle-headline .sort-col-left .rate-message-header,.mm-desktop-vehicle-headline .sort-col-left .sort-header{display:none!important}.vehicle-promo-code-recap{text-align:center;background-color:#FFF;padding:4px 20px;margin-bottom:15px}.vehicle-promo-code-recap h6{font-size:16px;margin-bottom:8px}.vehicles-list-cont span.display-count{float:none;margin-left:0!important;margin-top:0}.vehicle-sort-wrap{max-width:initial}.sort-col-left .sort-promo-wrapper{display:block}.sort-col-right{display:none!important}}';
    window.h0020CSS['ancillaries'] = '.extra-overlay.mm-active figure img{max-width:150px}#res-extras-page #extras{display:block!important;box-sizing:border-box;width:100%!important}h2.ancillaries-header{padding:0!important;margin:25px 0 10px!important;font-size:28px!important;font-weight:300!important}.check-custom-selector{transition:transform .2s}.qty-plus-proxy-first{display:inline-block!important}.extras-item-details label.checkbox{display:inline-block;padding:0!important;position:relative}#extras-list div.controls label.checkbox .add,#extras-list div.controls label.checkbox .remove{display:none!important}.extras-item-details input[type=checkbox]{position:absolute;top:0;right:0;opacity:0}.extras-item-details input[type=checkbox]:focus+.check-custom-selector{box-shadow:2px 2px 2px #e1e1e1}#extras-list div.details h3{font-size:18px!important}.extras-item-details input[type=checkbox]:checked+.check-custom-selector{-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.check-custom-selector::after{position:absolute;top:20px;left:20px;width:0;height:0;background-color:#365ad8;border-radius:20px;transition:top 240ms,left 240ms,width 240ms,height 240ms;content:"";display:block;pointer-events:none}.extras-item-details input[type=checkbox]:checked+.check-custom-selector::after{top:-1px;left:-1px;width:38px;height:38px}#extras-list header h1{font-size:16px!important;font-weight:400!important;background:0 0!important;padding:10px 0 10px!important;margin:0 0 10px;border:none!important;border-bottom:1px solid #e6e7eb!important}#res-extras-page-container .col-headers{display:none!important}#extras-list div.image img{height:auto!important;max-height:initial!important;max-width:100px!important}#extras-list article{border-top:none}#extras-list div.wrapper{border:1px solid #c4c6cc;margin:10px 0;border-radius:2px;overflow:visible!important;background:#fff}.extras-item-details .wrapper{display:table;width:100%;box-sizing:border-box}.extras-item-details .wrapper .details,.extras-item-details .wrapper .image,.extras-item-details .wrapper .pricing{display:table-cell!important;vertical-align:top!important;float:none!important;overflow:visible!important}.extras-item-details .wrapper .image{width:150px!important;text-align:center}.extras-item-details .wrapper .details{width:auto!important}.extras-item-details .wrapper .pricing{width:200px!important}.extras-item-details .wrapper .pricing .controls{text-align:right}#extras-list article{border-top:none!important}#extras-list div.price strong,.extras-item-details .price{font-size:22px!important}.extras-item-details .price .rate{font-size:12px!important}#res-extras-page #extras div.controls{display:block!important;width:auto!important;float:none;position:relative;text-align:right;padding:10px 0 0!important;margin:0 0 10px!important}#res-extras-page #extras div.controls.btn-cloned{display:none!important}#res-extras-page .selection.full-height{display:block!important;float:none!important;padding:0!important}#extras-list div.price{float:none;text-align:right;width:100%}#extras-list div.price span.rate{display:inline-block!important;position:initial!important;top:initial!important}#extras-list div.price,#extras-list div.selection{text-align:right!important;width:100%!important}#extras-list div.wrapper{padding:10px 20px!important}#res-extras-page #extras hr{display:none!important}#res-extras-page #extras div.controls button{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:40px!important;padding-right:40px!important;margin-top:0}#res-extras-page #extras div.controls button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}.qty-control-set-multiple{display:block;text-align:right;margin-bottom:15px}.qty-control-set-multiple-wrap{display:inline-block;background:#3455db;color:#fff;font-size:14px!important;border-radius:24px;box-sizing:border-box;padding:0!important}.qty-control-set-multiple-wrap a{color:#fff!important;text-decoration:none!important}.qty-custom-selector select{display:none!important}.qty-inactive{display:none!important}.qty-control-set-multiple-wrap a,.qty-control-set-multiple-wrap span{display:inline-block!important;padding:5px 10px;line-height:22px!important;vertical-align:top}.qty-control-set-multiple-wrap span{padding-left:4px;padding-top:7px}.qty-control-set-multiple-wrap a{font-size:20px!important;padding:5px 10px 9px}.qty-control-set-multiple-wrap a.qty-minus-proxy{padding-left:20px!important}.qty-control-set-multiple-wrap a.qty-plus-proxy{padding-right:20px!important}.qty-control-set-multiple-wrap .qty-label{padding-right:2px!important}.qty-control-set-multiple-wrap span.qty-value{padding-right:0}#extras-list div.pricing div{padding:0!important;margin:0!important}#extras-list div.price span.rate.free{font-size:22px!important}#extras-list article p{font-size:14px!important;line-height:18px!important;margin-bottom:5px!important}#extras-list div.details a{font-size:14px!important;display:inline-block!important;color:#365ad8!important}#extras-list div.details a{text-decoration:none}#extras-list div.details a:hover{text-decoration:underline}#extras-list article.selected{background:0 0!important}.ancillary-select-dropdown label{margin:0}#extras-list div.pricing .ancillary-select-dropdown{width:100%!important;border:1px solid #c4c6cc!important;border-radius:2px!important;margin-bottom:10px!important;margin-top:10px!important}.ancillary-select-dropdown span{display:block;float:none;width:100%;text-align:left;padding:5px 10px 0;box-sizing:border-box;width:100%}.ancillary-select-dropdown select::-ms-expand{display:none}#res-extras-page #extras .ancillary-select-dropdown-outer .controls{display:none!important}#extras-list div.price{float:none!important}#extras-list .qty-custom-selector label{margin-bottom:0!important}#extras-list article h2{display:none!important}.ancillaries-btn-wrap{margin-bottom:20px}@-webkit-keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}@keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}.more-details{cursor:pointer!important}.mm-checkmark{-webkit-animation:checkmark-enter .32s;animation:checkmark-enter .52s;height:40px;left:0;position:absolute;top:0;width:40px}.mm-checkmark-check{stroke:#fff;stroke-dasharray:48;stroke-width:3px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}@media only screen and (max-width:767px){#res-extras-page #extras div.controls button{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}#extras-list div.details div{padding:0!important}.extras-item-details .wrapper .image{width:100px!important}.extras-item-details .wrapper{position:relative}.extras-item-details .wrapper .details{min-height:110px;padding-left:110px;display:block!important;width:100%!important;box-sizing:border-box;padding-top:10px;padding-bottom:15px}.extras-item-details .wrapper .image{position:absolute;top:10px;left:15px}#extras-list div.image div{padding:0!important}#extras-list div.pricing{display:block!important;width:100%!important;margin:0!important;padding:0!important}#extras-list div.price{text-align:left!important;box-sizing:border-box;padding-right:160px!important}#extras-list div.selection{text-align:left!important}#extras-list div.pricing{border-top:1px solid #eee;margin-top:0!important;position:relative;min-height:59px}#extras-list .checkbox-selector,#extras-list .qty-control-set{position:absolute!important;top:15px;right:0}#extras-list div.pricing .ancillary-select-dropdown{position:absolute!important;top:15px;right:0;width:40%!important;margin-top:0!important}#res-extras-page #extras div.controls{padding:0!important}#extras-list div.pricing div br{display:none}.extras-item-details .wrapper .details h3{margin-top:0!important}#extras-list div.price span.rate{display:inline!important}#extras-list div.pricing div.full-height{padding-right:45%!important;padding-top:3px!important;box-sizing:border-box}#extras-list .ancillary-select-dropdown-outer div.pricing{min-height:85px}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.ancillary-select-dropdown{padding-top:0!important;padding-right:0!important}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.price{padding-top:30px!important}#res-extras-page #extras div.controls button{display:block!important;float:none!important;width:100%!important;border-radius:0!important}.ancillaries-btn-wrap{margin-left:-10px;margin-right:-10px}}@media only screen and (max-width:599px){#extras-list img{width:66px!important}.extras-item-details .wrapper .details{min-height:85px;padding-left:75px}.extras-item-details .wrapper .image{width:66px!important}}@media only screen and (max-width:375px){#extras-list div.pricing div.full-height{padding-right:0!important}#extras-list div.pricing div br{display:block}}';
    window.h0020CSS['ancillariesGrid'] = '.extra-overlay.mm-active figure img{max-width:150px}#res-extras-page #extras{display:block!important;box-sizing:border-box;width:100%!important}h2.ancillaries-header{padding:0!important;margin:25px 0 10px!important;font-size:28px!important;font-weight:300!important}.check-custom-selector{transition:transform .2s}.qty-plus-proxy-first{display:inline-block!important}.extras-item-details label.checkbox{display:inline-block;padding:0!important;position:relative}#extras-list div.controls label.checkbox .add,#extras-list div.controls label.checkbox .remove{display:none!important}#extras-list div.controls label.checkbox{display:inline}.extras-item-details input[type=checkbox]{position:absolute;top:0;right:0;opacity:0}.extras-item-details input[type=checkbox]:focus+.check-custom-selector{box-shadow:2px 2px 2px #e1e1e1}#extras-list div.details h3{font-size:18px!important}.extras-item-details input[type=checkbox]:checked+.check-custom-selector{-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.check-custom-selector::after{position:absolute;top:20px;left:20px;width:0;height:0;background-color:#365ad8;border-radius:20px;transition:top 240ms,left 240ms,width 240ms,height 240ms;content:"";display:block;pointer-events:none}.extras-item-details input[type=checkbox]:checked+.check-custom-selector::after{top:-1px;left:-1px;width:38px;height:38px}#extras-list header h1{font-size:16px!important;font-weight:400!important;background:0 0!important;padding:10px 0 10px!important;margin:0 0 10px;border:none!important;border-bottom:1px solid #e6e7eb!important}#res-extras-page-container .col-headers{display:none!important}#extras-list div.image img{height:auto!important;max-height:initial!important;max-width:100px!important}#extras-list article{border-top:none}#extras-list div.wrapper{overflow:visible!important;background:#fff;border:none!important;position:inherit}.extras-item-details .wrapper{display:table;width:100%;box-sizing:border-box}.extras-item-details .wrapper .details,.extras-item-details .wrapper .image,.extras-item-details .wrapper .pricing{display:table-cell!important;vertical-align:top!important;float:none!important;overflow:visible!important}.extras-item-details .wrapper .image{width:150px!important;text-align:center}.extras-item-details .wrapper .details{width:auto!important}.extras-item-details .wrapper .pricing{width:200px!important}.extras-item-details .wrapper .pricing .controls{text-align:right}#extras-list article{border-top:none!important}#extras-list div.price strong,.extras-item-details .price{font-size:22px!important}#extras-list div.price strong{display:inline-block;padding-right:5px}.extras-item-details .price .rate{font-size:12px!important}#res-extras-page #extras div.controls{display:block!important;width:auto!important;float:none;position:relative;text-align:right;padding:10px 0 0!important;margin:0 0 10px!important;border-top:1px solid #eee}#res-extras-page #extras div.controls.btn-cloned{display:none!important}#res-extras-page .selection.full-height{display:block!important;float:none!important;padding:0!important}#extras-list div.price{float:none;text-align:right;width:100%}body #extras-list div.price span.rate{display:inline-block!important;position:initial!important;top:initial!important;line-height:14px!important;padding-top:0!important}#extras-list div.price,#extras-list div.selection{text-align:right!important;width:100%!important}#extras-list div.wrapper{padding:10px 20px!important}#res-extras-page #extras hr{display:none!important}#res-extras-page #extras div.controls button{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:40px!important;padding-right:40px!important;margin-top:0}#res-extras-page #extras div.controls button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}.qty-control-set-multiple{display:block;text-align:right;margin-bottom:15px}.qty-control-set-multiple-wrap{display:inline-block;background:#3455db;color:#fff;font-size:14px!important;border-radius:24px;box-sizing:border-box;padding:0!important}.qty-control-set-multiple-wrap a{color:#fff!important;text-decoration:none!important}.qty-custom-selector select{display:none!important}.qty-inactive{display:none!important}.qty-control-set-multiple-wrap a,.qty-control-set-multiple-wrap span{display:inline-block!important;padding:5px 10px;line-height:22px!important;vertical-align:top}.qty-control-set-multiple-wrap span{padding-left:4px;padding-top:7px}.qty-control-set-multiple-wrap a{font-size:20px!important;padding:5px 10px 9px}.qty-control-set-multiple-wrap a.qty-minus-proxy{padding-left:20px!important}.qty-control-set-multiple-wrap a.qty-plus-proxy{padding-right:20px!important}.qty-control-set-multiple-wrap .qty-label{padding-right:2px!important}.qty-control-set-multiple-wrap span.qty-value{padding-right:0}#extras-list div.pricing div{padding:0!important;margin:0!important}#extras-list div.price span.rate.free{font-size:22px!important}#extras-list article p{font-size:14px!important;line-height:18px!important;margin-bottom:5px!important}#extras-list div.details a{font-size:14px!important;display:inline-block!important;color:#365ad8!important}#extras-list div.details a{text-decoration:none}#extras-list div.details a:hover{text-decoration:underline}#extras-list article.selected{background:0 0!important}.ancillary-select-dropdown label{margin:0}#extras-list div.pricing .ancillary-select-dropdown{width:100%!important;border:1px solid #c4c6cc!important;border-radius:2px!important}.ancillary-select-dropdown span{display:block;float:none;width:100%;text-align:left;padding:2px 10px 0;box-sizing:border-box;width:100%}.ancillary-select-dropdown select::-ms-expand{display:none}#extras-list div.price{float:none!important}#extras-list .qty-custom-selector label{margin-bottom:0!important}#extras-list article h2{display:none!important}.ancillaries-btn-wrap{margin-bottom:20px}@-webkit-keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}@keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}.more-details{cursor:pointer!important}.mm-checkmark{-webkit-animation:checkmark-enter .32s;animation:checkmark-enter .52s;height:40px;left:0;position:absolute;top:0;width:40px}.mm-checkmark-check{stroke:#fff;stroke-dasharray:48;stroke-width:3px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}@media only screen and (max-width:767px){#res-extras-page #extras div.controls button{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}.ancillaries-btn-wrap{margin-left:-10px;margin-right:-10px}}#extras-list div.details div{padding:0!important}.extras-item-details .wrapper .image{width:100px!important}.extras-item-details .wrapper{position:relative}.extras-item-details .wrapper .details{min-height:110px;padding-left:110px;display:block!important;width:100%!important;box-sizing:border-box;padding-top:10px;padding-bottom:15px}.extras-item-details .wrapper .image{position:absolute;top:10px;left:15px}#extras-list div.image div{padding:0!important}#extras-list div.pricing{display:block!important;width:100%!important;margin:0!important;position:absolute;bottom:0;left:0;padding:0 20px!important;box-sizing:border-box}#extras-list div.price{text-align:left!important;box-sizing:border-box;padding-right:160px!important}#extras-list div.selection{text-align:left!important}#extras-list div.pricing{margin-top:0!important;min-height:69px}#extras-list .ancillary-select-dropdown-outer div.pricing{min-height:69px}#extras-list .checkbox-selector,#extras-list .qty-control-set{position:absolute!important;top:14px;right:0}#extras-list div.pricing .ancillary-select-dropdown{position:absolute!important;top:10px;right:20px;width:130px!important;margin-top:0!important}#res-extras-page #extras div.controls{padding:0!important;margin:0!important}#extras-list div.pricing div br{display:none}.extras-item-details .wrapper .details h3{margin-top:0!important}#extras-list div.pricing .price.full-height{padding-right:150px!important;padding-top:3px!important;box-sizing:border-box;font-size:0!important;display:table-cell;vertical-align:middle;height:59px}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.ancillary-select-dropdown{padding-top:0!important;padding-right:0!important}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.price{padding-top:3px!important}@media only screen and (max-width:599px){#extras-list img{width:66px!important}.extras-item-details .wrapper .details{min-height:85px;padding-left:75px}.extras-item-details .wrapper .image{width:66px!important}}@media only screen and (max-width:375px){#extras-list div.pricing div.full-height{padding-right:0!important}#extras-list div.pricing div br{display:block}}.vas-tile{position:relative;border:1px solid #c4c6cc;margin:10px 0;background:#fff;border-radius:2px;padding-bottom:70px;box-sizing:border-box}@media only screen and (min-width:768px){.vas-grid{display:flex;justify-content:space-between;width:100%;flex-wrap:wrap}.vas-tile{flex:0 0 49%}}.featured-vas-tag{position:absolute;top:-5px;left:-5px;background:#fc0;display:inline-block;box-shadow:0 2px 5px rgba(0,0,0,.2);padding:5px 20px}.vas-grid-featured .extras-item-details .wrapper .image{top:35px}#extras-list div.controls .checkbox-selector label.checkbox{display:inline-block}';
    window.h0020CSS['reviewandBook'] = '#BookableCCDisclaimeContent,#BookableCCDisclaimeContent b,#BookableCCDisclaimeContent p,#creditCard .gray-container p{color:#5C5F66}#res-bookable-page #approx-rate .error-term{padding:10px!important}#creditCard .gray-container{background:0 0;padding:0 0 10px}#disclaimer-and-reserve .visible-xs{display:none!important}.cc-text-read-more-description{margin-top:0}.cc-text-hidden{display:none;padding:1px 0}#approx-rate-details,#approx-rate-terms .details,#frequent-traveler .divider.visible-xs,#res-bookable-page #frequent-traveler fieldset legend{display:none!important}.cc-text-hidden p{margin:0}.bookable-terms-and-conditions{padding:10px 0}#res-bookable-page a,#res-bookable-page a:hover{color:#365AD8}#res-bookable-page #billing-info fieldset label input[type=radio]{width:auto}#bookableMultiAddressToggle{margin-bottom:20px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox{padding:5px 0 10px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong{font-weight:400}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox input[type=checkbox]{margin-left:-22px}.bookable-terms-and-conditions p{margin:0}.bookable-btn-row,.bookable-btn-row-inner{display:table;width:100%}.bookable-btn-col,.bookable-btn-col-inner{display:table-cell;vertical-align:top}.bookable-btn-col-inner-right{width:120px}.bookable-btn-col-inner-left{font-size:20px;padding:10px 20px}.bookable-btn-col-left{text-align:left;font-size:20px;padding:10px 0}.bookable-btn-full{text-align:left;padding-top:5px}.bookable-btn-full p{margin-bottom:0}.bookable-rate-details,.bookable-rate-details strong{font-weight:400;color:#5C5F66}.bookable-toggle-section-inner{display:none;padding:1px 0}.bookable-toggle-radio-set label{display:inline-block}#vehicle-overlay-body-wrapper,h2.review-and-book-header{display:none!important}.bookable-toggle-radio-set input[type=radio]{opacity:0;width:0;height:0}.bookable-toggle-radio-set span{position:relative;padding-left:22px}.bookable-toggle-radio-set span::after{position:absolute;top:1px;left:0;content:"";width:16px;height:16px;border:1px solid #9D9EA3;border-radius:10px;box-sizing:border-box;transition:border .2s}.bookable-toggle-radio-set input[type=radio]:checked+span::after{border:4px solid #365AD8}.bookable-toggle-radio-set .bookable-toggle-radio-first{margin-right:40px}.email-conf-text p{margin:0}#bookableCustOptInTable label{box-sizing:border-box;margin-top:4px;margin-bottom:10px}#res-bookable-page #vehicleUpsells{margin-bottom:50px;display:flex}.vehContent-half{flex:1;box-shadow:2px 2px 2px rgba(0,0,0,.06);border:1px solid #C4C6CC;border-radius:2px;padding:10px 15px}#res-bookable-page #vehicleUpsells h3{background:0 0!important}#res-bookable-page .notIncludeSpaces.ccn-note{display:none}#reviewAndBookCost #rd-totals{display:none!important}#reviewAndBookCost #rd-more{border:none!important;padding:0!important}#reviewAndBookCost #rd-more .rd-info{padding:0!important}#reviewAndBookCost .rd-box{background-color:#E6E7EB;box-sizing:border-box}#reviewAndBookCost #rate-details-content{margin-left:0!important}#reviewAndBookCost figure img{max-width:180px;margin:0 auto;display:block}#vehicleUpsells .veh-container{box-sizing:border-box}.upgrade-options .veh-container h3{padding:0!important}.upgrade-options figure .img-container{width:auto!important}.upgrade-options figure .img-container img.vehicle-img-lrg{width:100%!important;max-width:210px!important;height:auto!important;display:block;margin:0 auto}.upgrade-options .button-container{text-align:center}.upgrade-options .veh-container figure,.upsell-button-container{display:table!important;width:100%!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .button-container,.upsell-button-container .upsell-button-container-col-left{display:table-cell!important;vertical-align:top!important;float:none!important;clear:both!important;margin:0!important;padding:0!important;box-sizing:border-box!important}.upgrade-options .veh-container figure figcaption{display:none!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .upsell-button-container-col-left{width:40%!important}#important,#res-bookable-page #information,#res-bookable-page .bookable-main-container{display:block!important;box-sizing:border-box;width:100%!important;margin:0!important}#cb-in-page-enrollment{display:none!important}#res-bookable-page div.content,#res-bookable-page div.content-half,#residency-dropdown{width:100%!important;border:1px solid #C4C6CC!important;border-radius:2px!important;box-sizing:border-box;clear:both}#flight-services-autocomplete{border:1px solid #C4C6CC!important;border-radius:2px!important;box-sizing:border-box}#res-bookable-page div.content.form-radio{border:none!important}#res-bookable-page div.content.form-radio .radio input[type=radio]{margin-left:-6px;margin-right:10px}.upgrade-options .button-container a{float:none!important;padding:0!important;margin:10px 0 0!important}.upgrade-options .veh-container .button-container button{float:none!important;border:2px solid #365AD8!important;background:#FFF!important;color:#365AD8!important;font-size:16px!important;margin:11px 0 0!important;padding:8px 25px!important;border-radius:2px!important}.upgrade-options .veh-container .button-container a.details{color:#365AD8!important;display:inline-block;text-decoration:none}.upgrade-options .veh-container .button-container a.details:hover{text-decoration:underline}#residency-dropdown{margin-bottom:15px!important}#res-bookable-page div.content label,#res-bookable-page div.content-half label{display:block!important;padding:3px 10px 0!important;box-sizing:border-box;margin:0!important}#disclaimer-and-reserve .details #bookableSubmit,#vehicle-border,.gray-border{display:none!important}#bookableCreditCardTable{margin-bottom:5px!important;padding:1px 0!important}#res-bookable-page #pay-with-your-points #points-available{padding:0!important;font-size:18px!important;margin-bottom:10px!important}#res-bookable-page #pay-with-your-points .choose-rewards{border:none!important;padding:0!important;margin:0 0 20px!important}#res-bookable-page #pay-with-your-points .choose-rewards label{cursor:default!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints{color:#5C5F66!important;padding-left:34px!important;position:relative;text-align:left!important;font-weight:400!important;font-size:12px!important;clear:both!important;margin-left:0!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints .icons-info{position:absolute;top:1px;left:2px}#res-bookable-page #customerInfo legend.hertz-gold-title{padding-top:21px!important}.bookable-toggle-title{font-size:14px;text-align:left}.bookable-toggle-title-mrg-0{margin-top:0}#bookableCCToggle,#bookableFreqTravlerToggle{margin-bottom:10px}#bookableCCToggle label{padding-left:0}#bookableCCToggle input{margin-left:0}#bookableMemberSection{padding:20px 0 10px;font-size:14px}#frequent-traveler{margin-bottom:20px}#res-bookable-page select#residenceCountry{height:60px!important}#information .creditcard .expire{font-size:0}.review-and-book-header{font-size:28px!important;margin:0 0 10px!important;font-weight:300!important}#arrival-misc-info .arrival-info-heading,#res-bookable-page legend{font-weight:600!important;font-size:18px!important;border-bottom:1px solid #E6E7EB!important;padding:0 0 5px!important;margin:0 0 20px!important;line-height:20px!important;color:#000!important}#arrival-misc-info .arrival-info-cont,#res-bookable-page #customer-residency.content-half{border:none!important}#arrival-misc-info .arrival-info-heading{margin-top:5px!important;margin-bottom:2px!important}.arrival-info-container,.frequent-traveler-info-container,.misc-info-container{background-color:transparent!important;padding:0!important}.frequent-traveler-info-container{color:#5C5F66}#arrival-info p{margin-left:0!important;margin-right:0!important}#res-bookable-page #approx-rate .total{background-color:#F2F4F7!important}#vehicleUpsells .vehContent{width:50%}#reviewAndBookCost #rd-rental-total header{display:table;width:100%;box-sizing:border-box}#reviewAndBookCost #rd-rental-total header .rd-subtotal,#reviewAndBookCost #rd-rental-total header .rd-title{display:table-cell;vertical-align:middle;font-size:20px;text-align:right}#reviewAndBookCost #rd-rental-total header .rd-title{width:55%;text-align:left}#reviewAndBookCost header .rd-subtotal .review-and-book-summary-currency{font-size:14px}#res-bookable-page #small-screen-itinerary,#reviewAndBookCost #itinerary-content,#reviewAndBookCost .rd-header-crtl{display:none!important}#res-bookable-page #approx-rate .submit-button-full{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#FC0!important;border:2px solid #FC0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:25px!important;padding-right:25px!important;margin-bottom:0!important;float:none!important}#res-bookable-page #approx-rate .submit-button-full:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#res-bookable-page #approx-rate .submit-button-full #approx-rate{display:none!important}.bookable-btn-wrap{text-align:right;background-color:#F3F4F8;padding:10px 20px;margin-bottom:15px}#flight-services{margin-top:10px!important}#res-bookable-page #approx-rate .submit .terms .terms{padding-top:0!important}.bookable-cost-header-row{display:table;width:100%;border-bottom:1px solid #e6e7eb}.bookable-cost-header-col{display:table-cell;vertical-align:top;padding-bottom:3px}.bookable-cost-header-col-right{width:120px;text-align:right;padding-top:4px}.bookable-cost-header-col-right a{font-size:14px;text-decoration:none}.bookable-cost-header-col-left{font-size:18px;font-weight:600}#res-bookable-page #creditCard fieldset legend{display:block!important;background:0 0!important;padding-top:5px!important}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell br{display:none}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell p{margin-top:0}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell{padding-left:0}#res-bookable-page #reviewAndBookCost #itinerary-info{width:100%!important}.review-and-book-row{display:table;width:100%;margin-top:10px;margin-bottom:10px;background-color:#FFF}#res-bookable-page .notIncludeSpaces{padding-bottom:3px!important}.ccn-note{margin-top:-10px;margin-bottom:10px}#res-bookable-page .bookable-row-mobile{display:table;width:100%;margin-bottom:2px}#res-bookable-page .bookable-row-mobile .bookable-col{display:table-cell!important;width:50%!important}#res-bookable-page .bookable-row-mobile .bookable-col-left{padding-right:5px}#res-bookable-page .bookable-row-mobile .bookable-col-right{padding-left:5px}#res-bookable-page #creditCard fieldset .pre-populated-credit-card-details{padding:0!important}#res-bookable-page .bookablePrivacyOptInLink{display:inline-block}#cb_privacy_container{margin-bottom:0}';
    window.h0020CSS['reviewandBookMobile'] = '@media only screen and (max-width:767px){.bookable-cost-header-row{border-bottom:none}#res-bookable-page #pay-with-your-points .choose-rewards select{font-size:14px!important;max-width:none!important}.current-member-email-container{background-color:#FFF;padding:20px 0 0;font-size:14px}#bookablePrivacyOptInText{font-size:14px;margin-top:10px}#reviewAndBookCost #rd-main .rd-detail header{background:#F3F4F8!important;border:1px solid #D7D8DB;text-align:center}#reviewAndBookCost #rd-main .rd-detail header div{display:inline-block;width:auto;padding:0 3px;color:#000}#reviewAndBookCost #rd-main .rd-box{border:none!important}#misc-info .misc-info-container{margin-top:0}.review-and-book-col{width:100%;vertical-align:top}.review-and-book-col-right{display:table-header-group}.bookable-cost-header-col{padding:15px 10px 5px}#reviewAndBookCost #rd-rental-total{padding:0 10px}#reviewAndBookCost #rd-totals{display:block!important}.review-and-book-col-right #rd-more,.review-and-book-col-right #rd-pay-later,.review-and-book-col-right #rd-pay-now,.review-and-book-col-right .rate-type-box.rd-info{display:none!important}.review-and-book-col-left{padding:10px;box-sizing:border-box}#res-bookable-page #approx-rate-terms fieldset{background:0 0!important;padding-top:0!important}#res-bookable-page #approx-rate fieldset .details{border:none!important;margin:0 -10px 20px!important;background:#FFF!important}#res-bookable-page #vehicleUpsells{margin-top:20px;margin-bottom:5px}#vehicleUpsells .vehContent{width:100%}.review-and-book-row{margin-bottom:0}#res-bookable-page{background:0 0!important}#container{background-color:#F3F4F8!important}.bookable-btn-col,.bookable-btn-col-inner,.bookable-btn-row,.bookable-btn-row-inner{display:inline;padding:0;width:auto}.bookable-btn-row{display:block;width:100%;box-sizing:border-box;text-align:center}#res-bookable-page #important,#res-bookable-page #information{margin-left:-10px!important;margin-right:-10px!important;width:auto!important}#res-bookable-page #important{padding:10px;background:#FFF;position:relative}#res-bookable-page #creditCard fieldset{box-sizing:border-box}#res-bookable-page fieldset{padding:10px 0!important}.bookable-currency{font-size:12px;display:inline-block;padding-top:10px}.bookable-btn-wrap{border:1px solid #D7D8DB;margin-top:15px;margin-bottom:20px}#important .terms-first{border-top:1px solid #D7D8DB;padding-top:15px}#important #important-information-toggle,#important .terms .terms h2,h4.rental-links-header{border-bottom:none!important}#arrival-misc-info .arrival-info-heading,#customerInfo legend{padding-left:0!important;box-sizing:border-box;font-size:16px!important;padding-bottom:15px!important;font-weight:500!important;margin-bottom:1px!important}#customerInfo legend{padding-top:20px!important}#res-bookable-page #pay-with-your-points .choose-rewards{padding-bottom:10px!important}#res-bookable-page #approx-rate .submit-button-full{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}#arrival-info #autocomplete-container,#arrival-info #autocomplete-radio-buttons,#reviewAndBookCost #rd-main .rate-separator,#reviewAndBookCost #rd-main .rd-edit-cont{display:none!important}#res-bookable-page #billing-info fieldset legend,#res-bookable-page #creditCard fieldset legend,#res-bookable-page #frequent-traveler fieldset legend,#res-bookable-page #pointsSection fieldset legend{float:left;background:#FFF!important;margin:-10px 0 15px!important;box-sizing:border-box;padding:10px 10px 20px!important;clear:both;width:100%;border:none!important;position:relative;font-size:16px!important;font-weight:500!important}#res-bookable-page #billing-info fieldset legend::after,#res-bookable-page #creditCard fieldset legend::after,#res-bookable-page #frequent-traveler fieldset legend::after,#res-bookable-page #pointsSection fieldset legend::after{position:absolute;bottom:10px;left:0;width:100%;height:1px;pointer-events:none;content:"";border-bottom:1px solid #E6E7EB}.bookable-cost-header-col-left{padding-left:10px}.bookable-cost-header-col-right{padding-right:10px}#disclaimer-and-reserve h4{padding:0 10px 10px}#res-bookable-page #customerInfo legend.hertz-gold-title{margin-bottom:0!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs{background:#FFF!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs .prepend-top{padding-top:0!important}#res-bookable-page input[type=email],#res-bookable-page input[type=tel],#res-bookable-page input[type=text],#res-bookable-page select{font-size:16px}#frequent-traveler,#misc-info{padding:0!important;margin:0!important}#arrival-info #flight-services{display:block!important}#arrival-info #flight-details{margin:0!important}}';
    window.h0020CSS['reviewandBook2'] = '#canSpamElectionCheckbox,#termsAndConditionsAccepted{display:none}#bookableCustOptInTable label,#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox label{padding-left:0}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong,#res-bookable-page .can-spam-inner{position:relative;padding-left:27px;display:block}#res-bookable-page #approx-rate .error-term{padding:10px!important}#BookableCCDisclaimeContent,#BookableCCDisclaimeContent b,#BookableCCDisclaimeContent p{color:#5c5f66}#creditCard .gray-container{background:0 0;padding:0 0 10px}#creditCard .gray-container p{color:#5c5f66}#disclaimer-and-reserve .visible-xs{display:none!important}.cc-text-read-more-description{margin-top:0}.cc-text-hidden{display:none;padding:1px 0}.cc-text-hidden p{margin:0}.bookable-terms-and-conditions{padding:10px 0}#res-bookable-page a,#res-bookable-page a:hover{color:#365ad8}#frequent-traveler .divider.visible-xs,#res-bookable-page #frequent-traveler fieldset legend{display:none!important}#res-bookable-page #billing-info fieldset label input[type=radio]{width:auto}#bookableMultiAddressToggle{margin-bottom:20px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox{padding:5px 0 10px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong{font-weight:400}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox input[type=checkbox]{margin-left:-22px}.bookable-terms-and-conditions p{margin:0}#approx-rate-details,#approx-rate-terms .details{display:none!important}.bookable-btn-row,.bookable-btn-row-inner{display:table;width:100%}.bookable-btn-col,.bookable-btn-col-inner{display:table-cell;vertical-align:top}.bookable-btn-col-inner-right{width:120px}.bookable-btn-col-inner-left{font-size:20px;padding:10px 20px}.bookable-btn-col-left{text-align:left;font-size:20px;padding:10px 0}.bookable-btn-full{text-align:left;padding-top:5px}.bookable-btn-full p{margin-bottom:0}.bookable-rate-details,.bookable-rate-details strong{font-weight:400;color:#5c5f66}.bookable-rate-details #location-notes{margin-bottom:20px;margin-top:20px;color:#000!important}.bookable-rate-details #location-notes strong{color:#000!important}.bookable-toggle-section-inner{display:none;padding:1px 0}.bookable-toggle-radio-set label{display:inline-block}.bookable-toggle-radio-set input[type=radio]{opacity:0;width:0;height:0}.bookable-toggle-radio-set span{position:relative;padding-left:22px}.bookable-toggle-radio-set span::after{position:absolute;top:1px;left:0;content:"";width:16px;height:16px;border:1px solid #9d9ea3;border-radius:10px;box-sizing:border-box;transition:border .2s}.bookable-toggle-radio-set input[type=radio]:checked+span::after{border:4px solid #365ad8}.bookable-toggle-radio-set .bookable-toggle-radio-first{margin-right:40px}.email-conf-text p{margin:0}h2.review-and-book-header{display:none!important}#bookableCustOptInTable label{box-sizing:border-box;margin-top:4px;margin-bottom:10px}#vehicle-overlay-body-wrapper{display:none!important}#res-bookable-page #vehicleUpsells{margin-bottom:50px;display:flex}.vehContent-half{flex:1;box-shadow:2px 2px 2px rgba(0,0,0,.06);border:1px solid #c4c6cc;border-radius:2px;padding:10px 15px}#res-bookable-page #vehicleUpsells h3{background:0 0!important}#res-bookable-page .notIncludeSpaces.ccn-note{display:none}#reviewAndBookCost #rd-totals{display:none!important}#reviewAndBookCost #rd-more{border:none!important;padding:0!important}#reviewAndBookCost #rd-more .rd-info{padding:0!important}#reviewAndBookCost .rd-box{background-color:#e6e7eb;box-sizing:border-box}#reviewAndBookCost #rate-details-content{margin-left:0!important}#reviewAndBookCost figure img{max-width:180px;margin:0 auto;display:block}#vehicleUpsells .veh-container{box-sizing:border-box}.upgrade-options .veh-container h3{padding:0!important}.upgrade-options figure .img-container{width:auto!important}.upgrade-options figure .img-container img.vehicle-img-lrg{width:100%!important;max-width:210px!important;height:auto!important;display:block;margin:0 auto}.upgrade-options .button-container{text-align:center}.upgrade-options .veh-container figure,.upsell-button-container{display:table!important;width:100%!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .button-container,.upsell-button-container .upsell-button-container-col-left{display:table-cell!important;vertical-align:top!important;float:none!important;clear:both!important;margin:0!important;padding:0!important;box-sizing:border-box!important}.upgrade-options .veh-container figure figcaption{display:none!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .upsell-button-container-col-left{width:40%!important}#important,#res-bookable-page #information,#res-bookable-page .bookable-main-container{display:block!important;box-sizing:border-box;width:100%!important;margin:0!important}#cb-in-page-enrollment{display:none!important}#res-bookable-page div.content,#res-bookable-page div.content-half,#residency-dropdown{width:100%!important;border:1px solid #c4c6cc!important;border-radius:2px!important;box-sizing:border-box;clear:both}#flight-services-autocomplete{border:1px solid #c4c6cc!important;border-radius:2px!important;box-sizing:border-box}#res-bookable-page div.content.form-radio{border:none!important}#res-bookable-page div.content.form-radio .radio input[type=radio]{margin-left:-6px;margin-right:10px}.upgrade-options .veh-container .button-container button{float:none!important}.upgrade-options .button-container a{float:none!important;padding:0!important;margin:10px 0 0!important}.upgrade-options .veh-container .button-container button{border:2px solid #365ad8!important;background:#fff!important;color:#365ad8!important;font-size:16px!important;margin:11px 0 0!important;padding:8px 25px!important;border-radius:2px!important}.upgrade-options .veh-container .button-container a.details{color:#365ad8!important;display:inline-block;text-decoration:none}.upgrade-options .veh-container .button-container a.details:hover{text-decoration:underline}#residency-dropdown{margin-bottom:15px!important}#res-bookable-page div.content label,#res-bookable-page div.content-half label{display:block!important;padding:3px 10px 0!important;box-sizing:border-box;margin:0!important}#bookableCreditCardTable{margin-bottom:5px!important;padding:1px 0!important}#res-bookable-page input[type=email],#res-bookable-page input[type=tel],#res-bookable-page input[type=text],#res-bookable-page select{width:100%!important;border:none;box-shadow:none;box-sizing:border-box;font-size:18px;padding:4px 0 15px;margin:0}#res-bookable-page select::-ms-expand{display:none}#res-bookable-page select#redeemPointList{border:1px solid #c4c6cc!important;padding-top:10px!important;padding-bottom:10px!important;margin:0 0 3px!important;font-size:18px!important}#res-bookable-page #pay-with-your-points #points-available{padding:0!important;font-size:18px!important;margin-bottom:10px!important}#res-bookable-page #pay-with-your-points .choose-rewards{border:none!important;padding:0!important;margin:0 0 20px!important}#res-bookable-page #pay-with-your-points .choose-rewards label{cursor:default!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints{color:#5c5f66!important;padding-left:34px!important;position:relative;text-align:left!important;font-weight:400!important;font-size:12px!important;clear:both!important;margin-left:0!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints .icons-info{position:absolute;top:1px;left:2px}#res-bookable-page #customerInfo legend.hertz-gold-title{padding-top:21px!important}.bookable-toggle-title{font-size:14px;text-align:left}.bookable-toggle-title-mrg-0{margin-top:0}#bookableCCToggle,#bookableFreqTravlerToggle{margin-bottom:10px}#bookableCCToggle label{padding-left:0}#bookableCCToggle input{margin-left:0}#bookableMemberSection{padding:20px 0 10px;font-size:14px}#frequent-traveler{margin-bottom:20px}#res-bookable-page select#residenceCountry{height:60px!important}#information .creditcard .expire{font-size:0}.review-and-book-header{font-size:28px!important;margin:0 0 10px!important;font-weight:300!important}#arrival-misc-info .arrival-info-heading,#res-bookable-page legend{font-weight:600!important;font-size:18px!important;border-bottom:1px solid #e6e7eb!important;padding:0 0 5px!important;margin:0 0 20px!important;line-height:20px!important;color:#000!important}#arrival-misc-info .arrival-info-heading{margin-top:5px!important;margin-bottom:2px!important}#res-bookable-page #customer-residency.content-half{border:none!important}.gray-border{display:none!important}.arrival-info-container,.frequent-traveler-info-container,.misc-info-container{background-color:transparent!important;padding:0!important}.frequent-traveler-info-container{color:#5c5f66}#arrival-info p{margin-left:0!important;margin-right:0!important}#arrival-misc-info .arrival-info-cont{border:none!important}#disclaimer-and-reserve .details #bookableSubmit{display:none!important}#res-bookable-page #approx-rate .total{background-color:#f2f4f7!important}#vehicle-border{display:none!important}#vehicleUpsells .vehContent{width:50%}#reviewAndBookCost #rd-rental-total header{display:table;width:100%;box-sizing:border-box}#reviewAndBookCost #rd-rental-total header .rd-subtotal,#reviewAndBookCost #rd-rental-total header .rd-title{display:table-cell;vertical-align:middle;font-size:20px;text-align:right}#reviewAndBookCost #rd-rental-total header .rd-title{width:55%;text-align:left}#reviewAndBookCost header .rd-subtotal .review-and-book-summary-currency{font-size:14px}#reviewAndBookCost #itinerary-content,#reviewAndBookCost .rd-header-crtl{display:none!important}#res-bookable-page #small-screen-itinerary{display:none!important}#res-bookable-page #approx-rate .submit-button-full{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:25px!important;padding-right:25px!important;margin-bottom:0!important;float:none!important}#res-bookable-page #approx-rate .submit-button-full:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#res-bookable-page #approx-rate .submit-button-full #approx-rate{display:none!important}.bookable-btn-wrap{text-align:right;background-color:#f3f4f8;padding:10px 20px;margin-bottom:15px}#flight-services{margin-top:10px!important}#res-bookable-page #approx-rate .submit .terms .terms{padding-top:0!important}.bookable-cost-header-row{display:table;width:100%;border-bottom:1px solid #e6e7eb}.bookable-cost-header-col{display:table-cell;vertical-align:top;padding-bottom:3px}.bookable-cost-header-col-right{width:120px;text-align:right;padding-top:4px}.bookable-cost-header-col-right a{font-size:14px;text-decoration:none}.bookable-cost-header-col-left{font-size:18px;font-weight:600}#res-bookable-page #creditCard fieldset legend{display:block!important;background:0 0!important;padding-top:5px!important}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell br{display:none}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell p{margin-top:0}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell{padding-left:0}#res-bookable-page #reviewAndBookCost #itinerary-info{width:100%!important}.review-and-book-row{display:table;width:100%;margin-top:10px;margin-bottom:10px;background-color:#fff}#res-bookable-page .notIncludeSpaces{padding-bottom:3px!important}.ccn-note{margin-top:-10px;margin-bottom:10px}#res-bookable-page .bookable-row-mobile{display:table;width:100%;margin-bottom:2px}#res-bookable-page .bookable-row-mobile .bookable-col{display:table-cell!important;width:50%!important}#res-bookable-page .bookable-row-mobile .bookable-col-left{padding-right:5px}#res-bookable-page .bookable-row-mobile .bookable-col-right{padding-left:5px}#res-bookable-page #creditCard fieldset .pre-populated-credit-card-details{padding:0!important}#res-bookable-page .bookablePrivacyOptInLink{display:inline-block}#cb_privacy_container{margin-bottom:0}#res-bookable-page #important .terms h2.inactive{display:none!important}';
    window.h0020CSS['reviewandBookAccordionMobile'] = '@media only screen and (max-width:767px){.essential-col{display:block;width:100%;margin-bottom:12px}.essential-col-inner{margin:0}#res-bookable-page #pay-with-your-points .choose-rewards select{font-size:14px!important;max-width:none!important}.current-member-email-container{background-color:#fff;padding:20px 0 0;font-size:14px}#bookablePrivacyOptInText{font-size:14px;margin-top:10px}#reviewAndBookCost #rd-main .rd-detail header div{color:#000}#reviewAndBookCost #rd-main .rd-box{border:none!important}#misc-info .misc-info-container{margin-top:0}.review-and-book-col{width:100%;vertical-align:top}.review-and-book-col-right{padding:20px;box-sizing:border-box}#reviewAndBookCost #rd-rental-total{padding:0 10px}#reviewAndBookCost #rd-totals{display:block!important}.review-and-book-col-left{padding:10px;box-sizing:border-box}#res-bookable-page #approx-rate-terms fieldset{background:0 0!important;padding-top:0!important}#res-bookable-page #approx-rate fieldset .details{border:none!important;margin:0 -10px 20px!important;background:#fff!important}#res-bookable-page #vehicleUpsells{margin-top:20px;margin-bottom:5px}#vehicleUpsells .vehContent{width:100%}.review-and-book-row{margin-bottom:0}#res-bookable-page{background:0 0!important}#container{background-color:#f3f4f8!important}.bookable-btn-col,.bookable-btn-col-inner,.bookable-btn-row,.bookable-btn-row-inner{display:inline;padding:0;width:auto}.bookable-btn-row{display:block;width:100%;box-sizing:border-box;text-align:center}#res-bookable-page #important,#res-bookable-page #information{margin-left:-10px!important;margin-right:-10px!important;width:auto!important}#res-bookable-page #important{padding:10px;background:#fff;position:relative}#res-bookable-page #creditCard fieldset{box-sizing:border-box}#res-bookable-page fieldset{padding:10px 0!important}.bookable-currency{font-size:12px;display:inline-block;padding-top:10px}.bookable-btn-wrap{border:1px solid #d7d8db;margin-top:15px;margin-bottom:20px}#important .terms-first{border-top:1px solid #d7d8db;padding-top:15px}#important #important-information-toggle,#important .terms .terms h2,h4.rental-links-header{border-bottom:none!important}#customerInfo legend{padding-left:0!important;box-sizing:border-box;font-size:16px!important;padding-bottom:15px!important;font-weight:500!important;margin-bottom:1px!important;padding-top:20px!important}#res-bookable-page #pay-with-your-points .choose-rewards{padding-bottom:10px!important}#res-bookable-page #approx-rate .submit-button-full{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important;float:none!important;min-width:initial}#res-bookable-page #billing-info fieldset legend,#res-bookable-page #creditCard fieldset legend,#res-bookable-page #frequent-traveler fieldset legend,#res-bookable-page #pointsSection fieldset legend{float:left;background:#fff!important;margin:-10px 0 15px!important;box-sizing:border-box;padding:10px 10px 20px!important;clear:both;width:100%;border:none!important;position:relative;font-size:16px!important;font-weight:500!important}#reviewAndBookCost #rd-main .rate-separator,#reviewAndBookCost #rd-main .rd-edit-cont{display:none!important}#res-bookable-page #billing-info fieldset legend::after,#res-bookable-page #creditCard fieldset legend::after,#res-bookable-page #frequent-traveler fieldset legend::after,#res-bookable-page #pointsSection fieldset legend::after{position:absolute;bottom:10px;left:0;width:100%;height:1px;pointer-events:none;content:"";border-bottom:1px solid #e6e7eb}#disclaimer-and-reserve h4{padding:0 10px 10px}#res-bookable-page #customerInfo legend.hertz-gold-title{margin-bottom:0!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs{background:#fff!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs .prepend-top{padding-top:0!important}#res-bookable-page input[type=email],#res-bookable-page input[type=tel],#res-bookable-page input[type=text],#res-bookable-page select{font-size:16px}#frequent-traveler,#misc-info{padding:0!important;margin:0!important}#arrival-info #autocomplete-container,#arrival-info #autocomplete-radio-buttons{display:none!important}#arrival-info #flight-services{display:block!important}#arrival-info #flight-details{margin:0!important}}';
    window.h0020CSS['headerDesktop'] = '#header-container .utility-bar .pos-container ul .change-link{margin:0!important;padding:0!important}#header-container .change-link .languageselector{color:#fff;text-decoration:none!important}#container #header-container .emember-container .firstnametext,#container #header-container .emember-container .lastnametext,#container #header-container .emember-container .welcometext{display:inline-block!important;color:#fff!important}#container #header-container .emember-container .lastnametext{padding-right:24px;position:relative}#container #header-container .cookiedLinks .fullswitchprofilelinktext::after,#container #header-container .emember-container .lastnametext::after{content:"";width:18px;height:10px;background-size:18px auto;display:block;position:absolute;top:3px;right:0}#container #header-container .cookiedLinks .fullswitchprofilelinktext.active::after,#container #header-container .emember-container .active .lastnametext::after{-ms-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}#header-container .pos-container li.line-seperator{display:none}#header-container .mob-nav{display:none!important}#nav-container .nav-menu{display:block!important}.header-primary{position:fixed;top:0;left:0;z-index:1000;width:100%;background-color:#000;box-sizing:border-box}#header-container{position:relative;width:100%}#res-home-page .slides{display:none!important}#nav-container .nav-menu{height:auto!important}#nav-container{padding-top:25px;padding-left:10px;padding-right:10px}.header-collapsed #nav-container{padding-top:18px}.logo-container{padding-bottom:10px}.logo-box{width:auto!important;height:auto!important;display:inline-block}#nav-container .logo-box img{width:150px!important;height:auto!important;transition:width .2s ease-out}.header-collapsed #nav-container .logo-box img{width:80px!important}.header-collapsed .logo-container{display:inline-block;float:left;padding-bottom:0;margin-right:15px}.header-collapsed #nav-container .nav-menu dl{top:25px}.header-collapsed #nav-container .nav-menu table{float:left;display:inline-block}.header-collapsed #nav-container .search-box{display:inline-block}#header-container,#nav-container{max-width:1300px;margin:0 auto}#header-container .utility-bar{width:auto!important;height:auto!important;padding:0!important;position:absolute!important;right:0!important;top:0!important;z-index:2}#header-container .utility-bar::after{content:"";display:block;width:100%;clear:both}#header-container .utility-bar .pos-container{float:none!important;height:auto!important;padding:0!important;background:0 0!important}#header-container .utility-bar .logo-container{height:auto!important;position:inherit!important;left:auto!important;bottom:auto!important}#header-container .logo-container .logo-box{width:auto!important;height:auto!important}#nav-container .nav-menu a,#nav-container .nav-menu span{padding:0!important;text-transform:none!important;font-size:14px!important}.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu span{font-size:13px!important}#nav-container .nav-menu table{margin:0!important}.search-box{float:right;clear:both;display:inline-block}#header-container .pos-container ul{padding-top:15px!important;padding-bottom:26px!important}.header-collapsed #header-container .pos-container ul{padding-top:0!important;padding-bottom:0!important}#header-container .pos-container button{border:none!important;background:0 0!important;padding:0!important;margin:0!important;color:#fff!important}#header-container .pos-container button:hover{color:#fc0!important}#header-container .utility-bar .pos-container ul .change-link{padding:0!important;height:auto!important}.header-collapsed .search-box{clear:none}.header-collapsed .pos-container{display:table}.header-collapsed .header-col{display:table-cell}.search-box .search-trigger{display:none}.search-container-wrap{position:relative;width:100%;clear:both}.search-container{clear:both;width:100%;display:none;background-color:#252525;position:absolute;top:0;left:0}.header-mobile{display:none;width:100%}.header-mobile-actions,.header-mobile-logo,.header-mobile-menu{display:table-cell;vertical-align:top;box-sizing:border-box}.header-mobile-actions,.header-mobile-menu{width:100px}.header-mobile-logo img{width:80px;height:auto}.header-mobile-menu a{display:block;width:50px;height:50px;background-size:20px 20px!important}.header-mobile-logo{padding:11px 14px;text-align:center}.header-mobile-actions{text-align:right;padding:16px 20px 10px}.header-mobile-actions .mm-search-icon{display:inline-block}.search-inner-row{display:table;max-width:1300px;width:100%;margin:0 auto;height:70px}.search-inner-col{display:table-cell;vertical-align:top;box-sizing:border-box}.search-inner-col input[type=text]{box-sizing:border-box;height:70px;width:100%;margin:0!important;padding:5px 20px 10px 40px;position:relative;background-color:#252525;color:#fff;border:none;font-size:20px}.search-inner-col-left{position:relative}.search-inner-col-left::after{content:"";display:block;background-size:18px auto;width:18px;height:18px;position:absolute;top:25px;left:10px;box-shadow:none!important;outline:0!important;pointer-events:none}.search-inner-col input[type=text]:focus{outline:0!important;box-shadow:none!important}.search-inner-col-right{width:75px;position:relative;vertical-align:middle;text-align:center}.search-inner-col-right::after{content:"";display:block;width:1px;height:24px;border-left:1px solid #5c5f66;position:absolute;top:24px;left:0;pointer-events:none}.search-inner-col-right a{color:#c4c6cc;text-decoration:none}.search-inner-col-right a:hover{color:#c4c6cc;text-decoration:underline}.search-box .mm-search-icon{display:inline-block}#container #header-container .utility-bar .emember-container{height:auto!important;padding:0!important;margin:0!important;position:relative;display:block!important}#container #header-container .utility-bar .change-link{display:block!important}#header-container .emember-container ul.topNavtopNavmobileHide{padding:0!important;height:auto!important}.header-collapsed .header-col-ul{padding-top:21px;padding-right:15px}.header-collapsed .header-col-ul .header-col-ul{padding-top:0;padding-right:0}#header-container .change-link .languageselector{margin-top:3px!important}#header-container .change-link .languageselector,#header-container .change-link .languageselector span{color:#fff;text-decoration:none!important}#header-container .change-link .languageselector:hover span{color:#fc0!important}#header-container .pos-container .pos-tab{background:0 0!important;color:#fff!important}#header-container .pos-tab .languageselector span{color:#fff!important}.utility-bar .icons-ic_globe_black{background-position:-68px -226px!important;height:22px!important;width:22px!important}#header-container .pos-container .country-label-text,#header-container .pos-container .language-label-text{color:#fff!important}#header-container .utility-bar .pos-container .pos-box{background-color:#2f2f2f!important;border-top:3px solid #fc0!important}#header-container .utility-bar .pos-container .pos-box::after{content:"";width:13px;height:8px;background-size:100% auto;position:absolute;top:-8px;right:27px}#header-container .utility-bar .pos-container .pos-box .secondary-on-yellow{color:#000!important;background-color:#fc0!important;padding:5px 20px!important}#header-container .utility-bar .pos-container ul .change-link{position:relative}#header-container .emember-container ul{height:auto!important;padding:0!important}#header-container .utility-bar .emember-container .topNavTabletShow{display:none!important}.homeloggedUserDetails .border-line{display:none!important}#header-container .emember-container ul{width:100%}#topNavRegisteredMenuCookied .switchProfileLink{padding:0!important}#topNavRegisteredMenuCookied .fullSwitchProfileLink{display:block!important}#header-container .cookiedLinks .fullswitchprofilelinktext{display:block!important;padding:0 24px 0 5px!important;position:relative}#header-container .utility-bar #member-name-points-info.no-dropdown{display:block!important}#header-container .utility-bar #member-name-points-info.no-dropdown li{border:none;padding:0}#header-container .utility-bar #member-name-points-info.no-dropdown li#logOut{text-align:right!important}#header-container .utility-bar #member-name-points-info.no-dropdown li.useraccount{display:none!important}#header-container .utility-bar #member-name-points-info.no-dropdown li#logOut a{color:#fff;text-decoration:none}#header-container .utility-bar .pos-container.no-dropdown{display:none!important}.mm-header-search-icon{transition:opacity .2s;opacity:1}.mm-header-search-icon.active{opacity:.5}#header-container .fullswitchprofilelinktext,#header-container .partialSwitchProfileLink{display:none!important}#header-container #cookieLink .fullSwitchProfileLink{display:block!important}#header-container .cookiedLinks .fullswitchprofilelinktext,.homeloggedUserDetails{cursor:pointer}.mm-hdr-mob-sctn{display:none;margin-bottom:12px}';
    window.h0020CSS['headerDesktop2'] = '@media only screen and (min-width:1201px){#cookieLink{padding:3px 0!important}.header-email-form-wrap{padding-right:10px}.mm-hdr-mob-sctn{display:none!important}#header-container .emember-container #loggedInTravelAgent,#header-container .emember-container li#loggedInMember{padding:4px 0 0}#header-container .utility-bar .emember-container #topNavDesktopShow{padding-top:3px!important}.header-col-icons{position:absolute;bottom:-24px;right:10px;z-index:-1}#header-container .pos-container ul{height:22px}#container .header-collapsed #header-container .utility-bar .pos-container{display:table!important;height:60px!important}#container .header-collapsed #header-container .utility-bar .pos-container.no-dropdown{display:none!important}.header-collapsed .header-col-icons{position:inherit;bottom:auto;right:auto;vertical-align:middle}.header-collapsed #header-container .pos-container ul{height:auto}.top-nav-registered-menu{background-color:#2f2f2f!important;border-top:3px solid #fc0!important;position:absolute;top:30px;right:0;width:200px!important;display:none!important}.top-nav-registered-menu.active{display:block!important}.top-nav-registered-menu li{display:block!important;padding:0!important;width:100%!important;clear:both!important;margin:0!important;border:none!important}#header-container .utility-bar .emember-container .useraccount{height:auto!important}.header-collapsed .top-nav-registered-menu a,.top-nav-registered-menu a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:10px 15px!important;height:auto!important;border:none!important;display:block!important;clear:both!important;float:none!important;margin:0!important;text-decoration:none!important}.header-collapsed .top-nav-registered-menu a:hover,.top-nav-registered-menu a:hover{background-color:#686b72!important;color:#fff!important}#header-container .utility-bar #member-name-points-info.no-dropdown{display:block!important;position:absolute;top:44px;right:10px}.header-collapsed #header-container .utility-bar #member-name-points-info.no-dropdown{top:20px}#header-container .utility-bar #member-name-points-info.no-dropdown .emember-container{width:200px!important}#header-container .emember-container ul.homeloggedUserDetails,#header-container .emember-container ul.topNavtopNavmobileHide{margin-right:0!important}#header-container .pos-container ul{margin:0 10px 0 0!important}#header-container .utility-bar .pos-container .pos-box{position:absolute!important;right:30px!important;top:30px!important;z-index:1000}.header-inner-mobile{display:block!important}#header-container .utility-bar .pos-container{min-width:100px}#nav-container .nav-menu td{display:inline-block!important;margin-right:30px!important}.header-collapsed #nav-container .nav-menu td{margin-right:15px!important}.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu span{height:25px}.nav-primary-link-no-menu a:hover{background:0 0!important;color:#fff!important}.active-menu,.nav-primary-animate-hover{position:relative}.active-menu::after,.nav-primary-animate-hover::after{content:"";width:100%;height:2px;background-color:#fc0;display:block;position:absolute;bottom:10px;left:0;pointer-events:none}.nav-primary-animate-hover::after{width:0;opacity:0;transition:width .2s}.nav-primary-animate-hover:hover::after{width:100%;opacity:1}.nav-primary-anchor-right::after{left:auto;right:0;opacity:1}.header-collapsed .active-menu::after,.header-collapsed .nav-primary-animate-hover::after{bottom:0}.header-primary{height:135px}.header-primary.header-collapsed{height:60px}.header-collapsed .header-inner-mobile{height:60px}#nav-container .nav-menu dl.menu-show{width:280px!important}#nav-container .menu-show a,.header-collapsed #nav-container .menu-show a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:1px 15px!important;height:auto!important;border:none!important}#nav-container .menu-show a:hover,.header-collapsed #nav-container .menu-show a:hover{background-color:#686b72!important;color:#fff!important}#nav-container .logo-box img{cursor:pointer}#nav-container .nav-menu .nav-mobile-expandable-section a,#nav-container .nav-menu .nav-mobile-expandable-section span{font-size:12px!important}}';
    window.h0020CSS['headerMobile'] = '@media only screen and (max-width:1200px){#header-container .change-link span,#homePageLoginOverlay.mm-force-show #loginFormContainer .memberFormDivInner .cookiedMemberOverlay li{float:left}#homePageLoginOverlay{display:none!important}#homePageLoginOverlay.mm-force-show{display:block!important}#homePageLoginOverlay.mm-force-show #loginFormContainer{display:block!important;top:110px!important}#homePageLoginOverlay.mm-force-show #loginFormContainer .loginHeader{background-color:#000;font-weight:700;padding:15px;margin-top:-1px}#homePageLoginOverlay.mm-force-show #loginFormContainer .memberFormDivInner{overflow:hidden;padding:10px 15px 5px}#homePageLoginOverlay.mm-force-show #loginFormContainer .memberFormDivInner .cookiedMemberOverlay{overflow:hidden;padding:0;width:100%;margin:0;list-style:none}#homePageLoginOverlay.mm-force-show #loginFormContainer .loginHeader img{height:auto;width:184px}#homePageLoginOverlay.mm-force-show #loginFormContainer .formRow{overflow:hidden;margin:10px 0}#homePageLoginOverlay.mm-force-show #loginFormContainer .loginFormInner{border-top:5px solid #000}#memberNavClubHeader{padding:10px 35px!important;display:block;color:silver;text-transform:uppercase}#header-container .fullSwitchProfileLink a,#nav-container .nav-menu .menu-hover{color:#FFF!important}#nav-container .top-nav-registered-menu .mm-hdr-mob-sctn a{padding-left:35px!important}#container #header-container .emember-container,#header-container .utility-bar .pos-container ul .change-link{display:block!important}#homePageLoginOverlay #loginFormContainer{background-color:#fff!important;width:260px!important;z-index:1000!important;border:1px solid #CCC!important}#header-container .utility-bar .emember-container,.emember-container .loginActive{background:0 0!important}#homePageLoginOverlay #loginFormContainer #loginFormInner ul#loggedUserDetails{float:none;line-height:15pt;list-style:none;margin:0;padding:5px 0 0}#homePageLoginOverlay #loginFormContainer #loginFormInner ul#loggedUserDetails li{border-bottom:1px solid #EDEDED;border-right:medium none;cursor:pointer;float:none;margin-bottom:5px;margin-top:5px;padding:0}#homePageLoginOverlay #loginFormContainer #loginFormInner ul#loggedUserDetails li a{text-decoration:none}#homePageLoginOverlay #loginFormContainer #loginFormInner{border-top:5px solid #000!important;padding:15px!important}#header-container #cookieLink .fullSwitchProfileLink{display:inline-block!important}#header-container .pos-container ul{width:100%;box-sizing:border-box;padding:0!important;margin:0!important}#header-container .emember-container .homeloggedUserDetails{display:block!important}#header-container .emember-container .homeloggedUserDetails li{display:none}#header-container .emember-container .homeloggedUserDetails li#topNavDesktopShow{display:block;padding:0}#header-container #member-name-points-info .emember-container{display:none!important}#loginLinkClub{display:block;float:left}#container #header-container .utility-bar .emember-container{position:absolute;top:17px;left:20px;width:300px;max-width:90%}#container #header-container #mobileNavAwards,#container #header-container .topNavmobileShow.mobiMyAccount{display:none!important}#container #header-container .utility-bar #member-name-points-info.no-dropdown .emember-container{right:20px;left:auto}body.mobile-main-menu-open{width:100%;height:100%;overflow:hidden}#header-container .pos-container .change-list{position:absolute;top:14px;right:20px}.header-col .header-col-ul{width:100%!important;display:block!important}.header-col-ul .change-link{display:block!important}body{padding-top:50px!important}#header-container .utility-bar .pos-container .pos-box{position:relative;background:0 0!important;display:none;width:100%!important;top:40px;left:0;padding-bottom:47px;box-sizing:border-box;padding-left:20px;padding-right:20px}#header-container .utility-bar .pos-container .pos-box::after{display:none}#nav-container{padding-top:0!important}.logo-container{padding-bottom:0}.icons-ic_globe.handler-trigger,.languageselector{display:inline-block}.header-mobile{display:table}.header-inner-mobile{display:none}#nav-container .nav-menu span,#nav-container .nav-menu td{display:block!important}#nav-container .nav-menu dl{position:initial!important;width:100%!important;top:auto!important;left:auto!important}#header-container .utility-bar{min-height:20px;position:inherit!important;width:100%!important}#header-container .search-box,.nav-menu .logo-container{display:none!important}#nav-container .menu-show a,#nav-container .menu-show a:hover{background:0 0}#nav-container .nav-menu a,#nav-container .nav-menu dd,#nav-container .nav-menu dd a,#nav-container .nav-menu dl,#nav-container .nav-menu span,#nav-container .top-nav-registered-menu a,.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu dd,.header-collapsed #nav-container .nav-menu dd a,.header-collapsed #nav-container .nav-menu dl,.header-collapsed #nav-container .nav-menu span{display:block!important;height:auto!important;padding:0!important;margin:0!important;font-size:14px!important;line-height:14px!important;background:0 0!important;color:#FFF!important;border:none!important;box-sizing:border-box!important}#nav-container .nav-menu dl{padding-bottom:20px!important}.header-primary{height:50px;transition:height .3s}.header-primary.expanded{height:100%;overflow:auto}.nav-mobile-expandable-link,.nav-mobile-expandable-link-style{position:relative}#nav-container .nav-menu .nav-mobile-expandable-link span,#nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu .nav-mobile-expandable-link span,.header-collapsed #nav-container .nav-menu a{text-transform:uppercase!important;font-size:14px!important;display:block!important;padding:10px 40px 10px 20px!important;text-decoration:none!important}.mobile-expand-active .nav-mobile-expandable-link::after,.nav-mobile-expandable-link-style-inactive::after,.nav-mobile-expandable-section{display:none}#nav-container .nav-menu dl a,.header-collapsed #nav-container .nav-menu dl a{text-transform:none!important;padding:10px 35px!important;text-decoration:none!important}#nav-container{padding:10px 0!important}.nav-mobile-expandable-link-style::after,.nav-mobile-expandable-link::after{content:"";position:absolute;top:6px;right:28px;width:2px;height:10px;background-color:#ccc}.nav-mobile-expandable-link-style::before,.nav-mobile-expandable-link::before{content:"";position:absolute;top:10px;right:24px;width:10px;height:2px;background-color:#ccc}.nav-mobile-expandable-link-style::after{top:14px}.nav-mobile-expandable-link-style::before{top:18px}.header-primary{padding-left:0!important;padding-right:0!important}#nav-container .nav-menu table,#nav-container .nav-menu table tbody,#nav-container .nav-menu table tr,.header-collapsed #nav-container .nav-menu table,.header-collapsed #nav-container .nav-menu table tbody,.header-collapsed #nav-container .nav-menu table tr{float:none!important;display:block!important;width:100%!important}#header-container .utility-bar{display:block!important;background-color:#252525!important}#res-form .home-btn-group .button{padding:0!important}a#pos-change,a#pos-change:hover{text-decoration:none}#member-name-points-info #loginLinkClub{display:none!important}#header-container .pos-container ul li{list-style-type:none}#header-container .utility-bar .pos-container ul .change-link{float:none;width:100%;box-sizing:border-box;position:inherit}#header-container select{width:100%!important;margin:0!important}.utility-bar .icons-ic_globe_black{display:inline-block}#header-container .change-link .languageselector{margin-top:0!important;display:inline-block;position:relative;top:3px;padding-left:5px}#header-container .utility-bar .pos-container,.topNavtopNavmobileHide{display:block!important}#header-container .pos-container .country-label-text,#header-container .pos-container .language-label-text{padding-bottom:10px!important}#header-container .pos-container button{float:right!important}#member-name-points-info{float:left}#header-container .utility-bar{padding-top:15px!important;padding-bottom:15px!important}#header-container .pos-container label{padding:10px 0 15px!important}#header-container .cookiedLinks .fullSwitchProfileLink{display:inline-block;color:#FFF}#header-container .cookiedLinks .fullSwitchProfileLink .cookieFirstName{display:inline-block!important}#header-container .cookiedLinks .fullSwitchProfileLink .cookieFirstInit,#topNavRegisteredMenu,#topNavRegisteredMenuCookied{display:none!important}#header-container .cookiedLinks li{float:none!important}#nav-container .top-nav-registered-menu{display:none;padding-bottom:15px;margin-bottom:15px;border-bottom:1px solid #2a2a2a;height:auto!important}#nav-container .top-nav-registered-menu .switchProfileLink,#nav-container .top-nav-registered-menu.active{display:block!important}#nav-container .top-nav-registered-menu a{display:block;box-sizing:border-box;padding:10px 20px!important;text-decoration:none}#homePageLoginOverlay #loginFormContainer{left:20px!important;position:absolute!important;top:150px!important}#cookieLink{padding:0!important}}',
    window.h0020CSS['confirmation'] = '#important-info{padding-top:10px;padding-bottom:20px;font-size:14px}#res-disclaimer{padding:10px 0 20px}#placePassConf{box-sizing:border-box;padding:10px;text-align:center}#placePassConf img{max-width:100%}.conf-placepass-desktop{display:inline-block}.conf-placepass-mobile{display:none}.confirmation-resflow-box-link-row{display:table;width:90%;max-width:580px;margin:10px auto}.confirmation-resflow-box-link-col{display:table-cell;vertical-align:top}.confirmation-resflow-box-link-col-left{width:180px}.confirmation-resflow-box-link-col-right{text-align:right}#res-confirmation-page #page-content #res-summary #res-summary-box{width:90%!important;padding:20px!important;box-sizing:border-box;max-width:580px!important;margin:-120px auto 0!important;position:relative!important;box-shadow:2px 2px 2px rgba(0,0,0,.06)}.confirmation-row{display:table;width:100%;max-width:1076px;margin:50px auto}.confirmation-col{display:table-cell;vertical-align:top;box-sizing:border-box}.confirmation-col-left{padding-right:60px}.confirmation-col-right{width:360px}#res-confirmation-page #main-content{float:none!important;width:100%!important;max-width:1076px;margin:0 auto;box-sizing:border-box}#confColR #rd-main .rd-box:first-child{margin-top:0!important}#rd-main.rd-state2 .equals,#rd-main.rd-state2 .plus,#rd-main.rd-state3 .equals,#rd-main.rd-state3 .plus{display:none!important}#confColR #rd-main.rd-state2 .rd-col,#confColR #rd-main.rd-state3 .rd-col{width:100%!important}.itinerary-confirmation-image{text-align:right}.itinerary-confirmation-image img{max-width:375px;width:100%}.confirmation-col-max-width{max-width:780px}#calendar-options .cal-icon{display:none!important}.outlook-cal.clearfix::after{content:"|";display:inline-block;padding-left:14px}.conf-summary-buttons button::after{content:"|";display:inline-block;padding-left:9px;padding-right:5px;color:#000}.conf-summary-buttons button:last-child::after{display:none}.confirmation-col-left .itin-expand-ovrvw-row-outlined{margin-bottom:10px}#res-confirmation-page #page-content #res-summary #add-to-cal ul{text-align:center!important}#add-to-cal a{text-decoration:none;color:#3455db!important}#res-summary-box h3{text-align:left;font-size:28px;font-weight:300;margin:0 0 8px}#res-summary-box h4{text-align:left;font-weight:300!important;font-size:14px;margin:3px 0 8px}#res-confirmation-page #page-content{max-width:1076px;margin:0 auto}#res-summary-box h4 .confirmation-number{font-size:14px}#res-confirmation-page #page-content #res-summary #res-summary-box p,#res-confirmation-page #page-content #res-summary #res-summary-box ul{text-align:left;padding-left:0;font-size:14px!important;margin-left:0}#res-confirmation-page #page-content #res-summary .print-cont .print-link{font-size:14px!important}#res-confirmation-page #page-content #res-summary .print-cont{text-align:left!important;margin-bottom:13px;margin-top:8px}.confirmation-prepay-note{max-width:580px!important;margin:16px auto 0;font-size:14px}.confirmation-resflow-box-link-row button{padding:0!important;background:0 0!important;display:inline!important;color:#3455db!important;font-size:13px!important;border:none!important;text-decoration:none!important;font-weight:300!important}#res-confirmation-page #page-content #res-summary #res-summary-box .res-edit-note{display:none}.print-link{color:#3455db!important;text-decoration:none!important}#expand_collapse_vehicle,#itinerary-cont .icons-collapse_icon{display:none!important}#itinerary-cont .itn-container{display:block!important}#rd-rate .rd-header-crtl.link-indicator,#res-itinerary-2 .click-indicator .link-indicator{text-decoration:none!important;color:#000!important;padding:10px!important;font-size:16px!important}#res-confirmation-page #conf-button-cont .modify-res,#res-confirmation-page #conf-button-cont .start-another-res,#res-confirmation-page #conf-button-cont .start-checkin,#res-confirmation-page #page-content #terms-pagination-next{display:none!important}#confColR #rd-rate .rate-separator,#confColR .click-indicator{display:none!important}#counter-bypass p{text-align:center;font-size:14px!important;line-height:18px!important;padding-left:10px!important;padding-right:10px!important}#counter-bypass p strong span span span{font-weight:500;font-size:18px!important}#res-confirmation-page #page-content #counter-bypass{padding:10px 0 0!important}#counter-bypass .primary{font-size:18px;font-weight:500!important;width:100%!important;background:#fc0!important;color:#000!important;border:2px solid #fc0!important;box-sizing:border-box!important;display:block!important;margin-top:20px!important}#counter-bypass .primary:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#confColL #res-itinerary-2 .click-indicator{background:0 0!important;border-bottom:1px solid #e4e5e7}#confColL #res-itinerary-2 .click-indicator .link-indicator{padding:0 0 4px!important;margin:0!important;font-size:18px!important;font-weight:700}#confColL #res-itinerary-2 .itn-container{display:table!important;width:100%!important;margin-left:0!important;margin-right:0!important}#confColL #res-itinerary-2 .int-loc-tm-info,#confColL #res-itinerary-2 .int-misc-info{display:table-cell!important;width:50%!important;margin:0!important;box-sizing:border-box!important;font-size:14px!important;line-height:18px!important}#confColL #res-itinerary-2 .int-loc-tm-info{padding-right:20px!important}#confColL #res-itinerary-2 .int-loc-tm-info label,#confColL #res-itinerary-2 .int-misc-info label{margin-top:20px!important}#confColL #res-itinerary-2{border-bottom:1px solid #e4e5e7!important;margin-bottom:30px!important;padding-bottom:12px;margin-top:20px!important;border:none!important}#res-confirmation-page #page-content #res-disclaimer{margin-bottom:20px!important}#res-confirmation-page #page-content #res-summary #ultimate-choice-box{border:none!important;margin:0!important;padding:0!important}#res-confirmation-page #page-content #conf-button-cont{border-top:1px solid #ededed!important;border-bottom:1px solid #ededed!important;text-align:center!important;padding-top:15px!important;padding-bottom:15px!important}#res-confirmation-page #page-content #conf-button-cont .conf-buttons{text-align:center!important}#res-confirmation-page #page-content #conf-button-cont button{display:inline-block!important;float:none!important;margin:0 5px!important;padding:0!important;background:0 0!important;border:none!important;color:#3455db!important;font-size:14px!important;font-weight:400!important}#res-confirmation-page #page-content #conf-button-cont button:hover{text-decoration:underline!important}#res-prepay-terms-accept input[type=checkbox]{position:absolute;top:-150px;left:0;pointer-events:none;visibility:hidden}#res-prepay-terms-accept{position:relative;padding-left:30px}#conf-button-cont .cancel-res{margin-top:10px;margin-bottom:30px}#confColR .rd-vehicle figure img{width:90%;display:block;margin:0 auto;max-width:290px}#confColR #rd-pay-later,#confColR #rd-pay-now{margin-top:15px!important}#confColR #rd-rental-total .rd-box{background:#f2f4f7!important;box-sizing:border-box!important;padding:10px 15px!important}#confColR #rd-main #rd-charge-discrepancy{margin-top:20px!important}#confColR #rd-optional-info footer{background:0 0!important}#confColR #rd-main.rd-state2 #rd-rental-total,#confColR #rd-main.rd-state3 #rd-rental-total{margin-bottom:18px!important}#confColR #rd-main .rd-opt-rate .rd-name{padding-left:25px!important}#res-confirmation-page #ads-content{width:100%!important;float:none!important;box-sizing:border-box!important;max-width:1076px;margin:0 auto!important;text-align:center!important;background-color:#fff}#res-confirmation-page #ads-content .gptAdBlock{display:block;float:left;margin-right:10px}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-date{font-weight:700}#res-confirmation-page #page-content #page-banners{display:none!important}';
    window.h0020CSS['homepage'] = '.res-inr-wrp #itn-residency{display:none!important}#discountCodeOverlay #GPR_Proxy{position:relative;top:2px}#discountCodeOverlay #discounts{margin-right:6px!important;margin-top:7px!important}.res-inr-wrp #res-form label.checkbox[for=discounts]{padding-left:0;font-size:14px!important}.modal-close-icon{cursor:pointer}#discountCodeOverlay .discount-cont,#discountCodeOverlay .fade-field label{background:0 0!important}.gpr-checkbox-row input[type=checkbox]{display:inline-block;margin-right:5px;margin-left:5px}#discountCodeOverlay .discount .icons-info_sm{display:inline-block;position:relative;top:-2px}#discounts-section,#discounts-section .discount-cont{display:block!important}#discountCodeOverlay #discount-slideout.click-indicator{display:none!important}#discountCodeOverlay #discounts-section .discount{padding:5px 15px}#discountCodeOverlay.no-gpr #discounts-section .discount{padding-top:20px!important}.gpr-checkbox-row{padding:15px 10px 5px}.gpr-checkbox-row label{font-size:14px}.res-inr-wrp #res-form input#GPR_Proxy{margin-right:5px!important;margin-top:1px!important}.res-pos-rel{position:relative}#sld-ctrl-cont,#slide-cont,.hp-bg-wrapper{display:none!important}.res-form{position:inherit!important;left:auto!important;top:auto!important;width:100%!important}#res-home-page #hp-banner-ads{width:100%!important;max-width:1000px;margin:0 auto;text-align:center!important;padding-top:20px!important;padding-bottom:30px!important;box-sizing:border-box}#res-home-page #hp-banner-ads>div{margin-top:10px!important}#hp-banner-container{position:inherit!important}#res-submit-btns nav tr,.res-inr-wrp #res-submit-btns nav table,.res-inr-wrp #res-submit-btns nav td{display:block!important}.res-inr-wrp #res-submit-btns nav td.gaq-rmc-tabs.selected{display:none!important}.homepage-form-group{padding:0!important}#res-itinerary-2 .itn-container .int-loc-tm-info .pickup-location,#res-itinerary-2 .itn-container .int-loc-tm-info .return-location{width:100%!important;float:none!important;margin:0!important}@media only screen and (min-width:768px){#hp-banner-container .gptAdBlock{display:inline-block!important;vertical-align:top;width:auto!important;height:auto!important;float:none!important}}#res-home-page{position:initial!important}.discount-code-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}.discount-code-overlay.active{display:block}.discount-code-overlay-inner{width:95%;max-width:375px;background-color:#fff;margin:10px auto}.res-inr-wrp #itn-vehicle-type,.res-inr-wrp #res-form hr,.res-inr-wrp .find-location,.res-inr-wrp .location-dates-arrival figure,.res-inr-wrp .one-way-cont,.res-inr-wrp .previous-rentals-link{display:none!important}#res-home-page #rmc-section>div{padding-bottom:0!important}.gaq-rmc-tabs.selected{display:none!important}#res-home-page .res-form section{padding:0!important}.res-otr-wrp{padding:20px 15px 10px;box-sizing:border-box;max-width:1230px;margin:-100px auto 0;transition:margin-top .2s ease-out}.res-inr-wrp{position:relative;background-color:#fff;padding:30px 40px 30px;border-radius:7px;border-bottom:5px solid #fc0;box-shadow:0 2px 9px rgba(0,0,0,.2);box-sizing:border-box;min-height:150px;transition:padding-top .2s ease-out}.res-otr-wrp.reduced .res-inr-wrp{padding-top:40px}.res-inr-wrp nav{position:absolute;top:15px;right:30px}.modify-keep-active #res-submit-btns,.modify-keep-active .res-inr-wrp #nonmember-res-search,.modify-keep-active .res-inr-wrp #other-res-search{bottom:79px}.res-inr-wrp #res-submit-btns .prepend-top{margin-top:0}.res-inr-wrp #nonmember-res-search{bottom:-4px}.res-inr-wrp #res-form #return-loc{padding-bottom:0!important}.res-inr-wrp #res-form input,.res-inr-wrp #res-form select{margin:0!important}.res-inr-wrp #res-form .date-header{margin-top:0!important;padding-top:0!important}.res-inr-wrp #itn-age br{display:none}.homepage-form-row,.hp-form-row-inr{display:table;width:100%}.homepage-form-col,.hp-form-col-inr{display:table-cell;width:50%;box-sizing:border-box;vertical-align:top}.homepage-form-col-full{width:100%}.hp-form-col-inr{vertical-align:bottom}.homepage-form-row-discount-only{width:38%}.res-inr-wrp h1.hero-h1{color:#000;text-transform:normal;font-weight:300;margin:0 0 20px;font-size:40px}.homepage-form-group input[type=text],.homepage-form-group select{width:100%!important;border:none;box-shadow:none;box-sizing:border-box;font-size:18px;padding:2px 10px 15px;margin:0}.homepage-form-group select{padding:0 10px;height:40px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-size:18px auto}.homepage-form-group select::-ms-expand{display:none}#resformStartTrigger{border:1px solid #c4c6cc;border-radius:2px;font-size:18px;color:#585961;font-size:18px;position:relative;padding:20px 20px 20px 45px;box-sizing:border-box;cursor:pointer}#resformStartTrigger img{position:absolute;top:21px;left:19px}.reservation-start{margin-top:0;font-size:36px;margin-bottom:20px;font-weight:400}.discount-code-overlay .row{padding:0!important}.res-inr-wrp #discounts-section #cdp-options-business,.res-inr-wrp #discounts-section .discount-cont,.res-inr-wrp #discounts-section .discount-row.highlight,.res-inr-wrp #res-form #redeem-section .redeem{background:0 0!important}.res-inr-wrp #discounts-section #cdp-options-business{padding-top:15px}.res-inr-wrp #cdp-options{padding-top:5px}.res-inr-wrp .corp-gov{margin-bottom:7px}.res-inr-wrp #res-form #redeem-section .redeem{padding:5px 10px}.res-inr-wrp #discounts-section .discount{padding:5px 10px!important}.res-inr-wrp #res-form label.checkbox{font-size:12px!important;line-height:24px!important}.res-inr-wrp #discount-slideout{display:none!important}.res-inr-wrp #discounts-section{display:block!important}.res-inr-wrp .discount-cont{display:none!important}.discount-code-value{height:40px;font-size:18px;padding:5px 10px;box-sizing:border-box;width:100%;overflow:hidden;line-height:28px;position:relative;cursor:pointer}.discount-code-value.active{padding-left:45px}.discount-code-value.active::after{content:"";position:absolute;top:8px;left:9px;width:30px;height:40px;background-size:100% auto}body.discount-overlay-open{width:100%;height:100%;overflow:hidden}.discount-overlay-open #page{z-index:1000}#rmc-section #res-message,#rmc-section .add,#rmc-section hr{display:none!important}.res-inr-wrp #res-form .date-time .date,.res-inr-wrp #res-form .date-time .time-box{width:100%!important;box-sizing:border-box!important;height:40px!important;border:none!important;position:relative}.res-inr-wrp .icons-calendar{position:absolute;top:11px;right:8px}.res-inr-wrp #res-form .date-time .date{padding-left:10px!important;padding-right:10px!important}.res-inr-wrp #res-form .date-time .date .value{font-size:18px;padding:5px 0 0;box-sizing:border-box}.res-inr-wrp #res-form .date-time .date .date-cal{float:right;width:35px!important}.res-inr-wrp #res-form .fts,.res-inr-wrp #res-form article{padding-left:0!important;width:100%!important;box-sizing:border-box}.res-inr-wrp #res-form #age-dropdown,.res-inr-wrp #res-form #dropoff-container,.res-inr-wrp #res-form #pickup-container{margin:0!important}.discount-code-label,.homepage-form-group label,.pseudo-label{display:block;margin:0;box-sizing:border-box;padding:4px 10px;font-size:14px;color:#5c5f66;font-weight:400!important;cursor:pointer}.discount-code-label strong,.homepage-form-group label strong,.pseudo-label strong{font-weight:400}#res-home-page .res-form nav table td{background:0 0!important;color:#000!important;text-align:left!important;width:auto!important;float:left!important}#res-home-page .res-form nav table td h2{font:1em Ride,Muli,Helvetica,Arial,sans-serif;cursor:pointer;margin:0;padding:8px;font-weight:700!important}#container #res-home-page #res-form button.primary{font-size:18px;font-weight:600!important;width:220px!important;background:#fff!important;color:#000!important;border:2px solid #000!important;border-radius:2px!important}#container #res-home-page #res-form button.primary:hover{background:#000!important;color:#fff!important}#container #nonmember-res-search button.primary,#container #nonmember-res-search button.primary:hover,#container #other-res-search button.primary,#container #other-res-search button.primary:hover,#container #res-home-page #res-form button.secondary,#container #res-home-page #res-form button.secondary:hover{font-size:18px;font-weight:600!important;width:220px!important;border-radius:2px!important;color:#000!important;background-color:#fc0!important;border:2px solid #fc0!important;cursor:pointer;opacity:1;transition:opacity .2s;padding-top:10px!important;padding-bottom:10px!important}#container #nonmember-res-search button.primary:hover,#container #other-res-search button.primary:hover,#container #res-home-page #res-form button.secondary:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#container #nonmember-res-search button.primary:disabled,#container #other-res-search button.primary:disabled,#container #res-home-page #res-form button.secondary:disabled{background-color:#eee!important;border:2px solid #eee!important;opacity:.5}.pseudo-label-help-icon{display:inline-block;background-size:20px auto;width:20px;height:20px;margin-left:5px;position:relative;top:5px}#discountCodeOverlay .pseudo-label-help-icon{width:14px;height:14px;background-size:14px auto;margin-left:-4px;top:7px}.res-inr-wrp #discounts-section .discount-row label{display:block;border:1px solid #e6e7eb;padding:0}.res-inr-wrp #discounts-section .discount-row label[for=affiliate-member-join]{border:none;margin-top:10px}.res-inr-wrp #discounts-section .discount-row label[for=affiliate-member-join] input{margin-right:5px!important;margin-top:6px!important}.res-inr-wrp #discounts-section .discount-row input[type=text]{width:100%!important;clear:both!important;float:none!important;border:none;box-shadow:none!important;padding:5px 10px;box-sizing:border-box}.res-inr-wrp #discounts-section .discount-row{padding:10px 10px 0!important;background:0 0}.res-inr-wrp #discounts-section #cdp select#member-selected-cdp{margin-left:10px!important}.res-inr-wrp #cdp-options-business p{margin-bottom:8px!important}.res-inr-wrp #discounts-section .discount-row #member-other-cdp{border:1px solid #e6e7eb!important}.res-inr-wrp #cdp .clearfix{padding-bottom:10px;padding-top:10px}.res-inr-wrp #discounts-section .discount-row span{width:100%!important;float:none!important;display:block;clear:both;margin-bottom:4px;font-size:12px;color:#5c5f66;padding:3px 10px;box-sizing:border-box}.res-inr-wrp #discounts-section #affiliate-member-verification label span{display:inline-block;width:auto!important}.modal-footer-button-row{padding:20px;text-align:right}.modal-button-apply,.modal-button-apply:hover{width:175px;background-color:#fc0;border-radius:2px;color:#000;text-align:center;display:inline-block;margin-left:10px;font-size:20px;padding:10px;text-decoration:none!important}.modal-button-cancel{display:inline-block;font-size:20px;padding:10px;text-decoration:none!important}.res-inr-wrp #res-form .discount-code-overlay input[type=checkbox]{margin-top:5px!important}.mobile-hero-img{display:none!important}.res-inr-wrp #res-home-page #rmc-section .rental-date{width:100%!important;background-color:transparent!important}.rental-info .veh-desc{display:none}.rental-info .header-details-combined{display:none}.rental-date strong,.rental-desc strong{display:none!important}.rental-info .rental-desc{border-top:1px solid #9d9ea3}#res-home-page #rmc-section .rental-info{background-color:rgba(255,255,255,.9)!important;padding:20px 20px 10px;max-width:278px;margin-bottom:10px}.rental-title{text-transform:uppercase;font-size:14px}#rmc-section br{display:none}.member-res-search,.member-res-search:hover{text-transform:uppercase;color:#000;font-weight:700;display:inline-block;position:relative;padding-right:20px}.member-res-search::after{content:"";position:absolute;top:4px;right:0;width:12px;height:8px;background-size:12px auto}#nav-container .nav-menu table{z-index:1}.res-inr-wrp #dropoff-geo-loc,.res-inr-wrp #pickup-geo-loc{display:none!important}#container #res-home-page #res-form button.primary,#container #res-home-page #res-form button.secondary{padding-top:10px!important;padding-bottom:10px!important}#itn-modify-keep-rate .row{padding:0!important}#itn-modify-keep-rate .row label{width:auto!important}#itn-modify-keep-rate .row input[type=checkbox]{position:relative;top:6px}#itn-modify-keep-rate{margin-top:4px!important;margin-left:10px!important}.fade-field label{background:#eee!important}#resformReflow.inactive{display:none;opacity:0}.res-inr-wrp #res-form .redeem-cont label.checkbox a,.res-inr-wrp #res-form .redeem-cont label.checkbox br{display:none}.aaa-proxy-field{border:1px solid #c4c6cc;display:none}.aaa-added .aaa-proxy-field{display:block}#affiliate-member-verification .pseudo-label-usaa-icon{margin-left:2px}#usaaLabel{padding:0 10px 4px}.aaa-added .proxy-label-usaa,.aaa-added .pseudo-label-usaa-icon{display:none!important}.usaa-added #member-ID-span,.usaa-added .proxy-label-aaa,.usaa-added .pseudo-label-aaa-icon{display:none!important}.aaa-added .pseudo-label-usaa-icon,.usaa-added .proxy-label-usaa{display:inline-block!important}.aaa-proxy-field label{padding-top:0}.join-aaa-p{margin:-4px 0 0 20px}.res-inr-wrp label[for=affiliate-member-join]{float:left;margin-top:0!important}.res-inr-wrp label[for=affiliate-member-join] strong{line-height:17px;display:block;margin-top:10px}.res-inr-wrp label[for=affiliate-member-join] br{display:none}@media only screen and (min-width:1201px){.res-inr-wrp #nonmember-res-search,.res-inr-wrp #res-submit-btns{position:absolute;bottom:5px;right:0}.r-toggle-added .res-inr-wrp #other-res-search,.r-toggle-added .res-inr-wrp #res-submit-btns{bottom:31px}.r-toggle-open .res-inr-wrp #other-res-search,.r-toggle-open .res-inr-wrp #res-submit-btns{bottom:89px}.r-toggle-added.modify-added .res-inr-wrp #res-submit-btns{bottom:60px}.r-toggle-open.modify-added .res-inr-wrp #res-submit-btns{bottom:118px}#rToggleM{float:left}.resform-end{width:100%;clear:both}.aaa-added .res-inr-wrp #other-res-search,.aaa-added .res-inr-wrp #res-submit-btns{position:initial}.res-inr-wrp #other-res-search,.res-inr-wrp.single-button-lookup #nonmember-res-search,.travel-agent-form .res-inr-wrp #res-submit-btns{text-align:right;position:inherit}.res-inr-wrp #other-res-search nav,.res-inr-wrp.single-button-lookup nav{position:absolute;bottom:48px;left:33px;top:auto;width:200px}}@media only screen and (max-width:1200px){.reservation-start{font-size:28px}.res-inr-wrp{padding-left:20px;padding-right:20px}#return-loc{display:block!important}#container #res-home-page #res-form button.primary,#container #res-home-page #res-form button.secondary{width:100%!important}.homepage-form-col{display:block;width:100%;background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0 0 10px}#resRow3ColLeft{border:none;margin-bottom:0}#resAgeCol{border:none}#resAgeCol #itn-age{border:1px solid #c4c6cc}#resFormCodeAge .homepage-form-col{display:table-cell;width:50%;background:0 0;border:none;border-radius:0;margin:0}#resFormCodeAge .homepage-form-col-left{border-right:1px solid #c4c6cc}.homepage-form-row-discount-only,.resform-row-code-age{width:100%}.resform-row-code-age.homepage-form-group{background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0;box-sizing:border-box}.aaa-proxy-field{border:none}.hp-form-col-inr-left{border-right:1px solid #c4c6cc}.res-inr-wrp.single-button,.single-button-lookup{padding-bottom:75px}.res-inr-wrp nav{bottom:-44px;top:auto;left:0;right:auto}#container #other-res-search button.primary,#container #other-res-search button.primary:hover,#container #res-home-page #res-form button.secondary,#container #res-home-page #res-form button.secondary:hover{width:100%!important}#res-form .home-btn-group .button{display:block!important;margin-bottom:10px!important}#nonmember-res-search,#other-res-search,#res-submit-btns{width:100%;box-sizing:border-box}.res-otr-wrp{padding-top:12px!important;position:relative}.res-inr-wrp{padding-bottom:65px}.res-otr-wrp.reduced .res-inr-wrp{padding-bottom:20px}#res-home-page .res-form nav table td h2{text-decoration:underline!important}.res-inr-wrp{position:inherit}.mobile-hero-img{display:block!important;width:100%}.res-inr-wrp h1.hero-h1{font-size:33px;position:absolute;top:0;left:0;line-height:40px}#redeem-section .row{padding:0!important}#redeem-section{background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0 0 10px}.res-inr-wrp #res-form #redeem-section .redeem{padding:0;position:relative}.res-inr-wrp #res-form #redeem-section label.checkbox{width:100%!important;padding:22px 42px 22px 30px!important;position:relative;box-sizing:border-box;line-height:18px!important;font-size:14px!important}.res-inr-wrp #res-form #redeem{position:absolute;top:26px;left:10px}#res-form #redeem-section .redeem #redeem-info{position:absolute;top:14px;right:2px;width:40px;height:40px;background-position:10px 10px;margin:0!important}}@media only screen and (max-width:520px){.mobile-hero-img{min-height:225px}#res-home-page .res-form{background-size:200% auto!important}}@media only screen and (max-width:410px){.mobile-hero-img{min-height:205px}#res-home-page .res-form{background-size:230% auto!important}.res-inr-wrp h1.hero-h1{font-size:28px;line-height:30px}.res-inr-wrp #res-form #redeem-section label.checkbox{font-size:12px!important}}@media only screen and (max-width:320px){.mobile-hero-img{min-height:205px}#res-home-page .res-form{background-size:280% auto!important}}@media only screen and (min-width:1201px){.res-inr-wrp #return-loc{display:table-cell!important}.homepage-form-col-age-only{max-width:200px}.homepage-form-col-left,.hp-form-col-inr-left{border-right:1px solid #c4c6cc}.resform-row-code-age .homepage-form-col-left{width:65.5%}.resform-row-code-age .homepage-form-col-right{width:24.5%}.homepage-form-group{background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0 0 10px}.homepage-form-group.resform-row-3{border:none;width:calc(100% + 2px)}#resformReflow{opacity:1;transition:opacity .2s ease-out}.homepage-form-group.resform-row-code-age{margin-bottom:0}#resRow3ColLeft{border-right:none}.res-otr-wrp.reduced{padding-bottom:45px}.res-otr-wrp.reduced-no-transition{padding-bottom:45px;transition:none}#discountRowWrap{position:relative}.res-inr-wrp #redeem-section{position:absolute;top:9px;left:121px;width:280px}.res-inr-wrp #res-form #redeem-section .row{padding:0}.res-inr-wrp #res-form .redeem-cont label.checkbox{margin:0;position:relative;line-height:10px!important;padding-left:5px!important;width:100%;box-sizing:border-box;padding:0 25px 0 20px!important}.res-inr-wrp #redeem{position:absolute;top:1px;left:0;z-index:0}.res-inr-wrp #redeem-info{position:absolute;top:-5px;right:0;margin:0!important}.res-inr-wrp #res-form #redeem-section .redeem{position:relative;padding:0}.homepage-form-group label#ageSelectorLabel{padding-top:0}}@media only screen and (min-width:1201px){#cookieLink{padding:3px 0!important}.header-email-form-wrap{padding-right:10px}.mm-hdr-mob-sctn{display:none!important}#header-container .emember-container #loggedInTravelAgent,#header-container .emember-container li#loggedInMember{padding:4px 0 0}#header-container .utility-bar .emember-container #topNavDesktopShow{padding-top:3px!important}.header-col-icons{position:absolute;bottom:-24px;right:10px;z-index:-1}#header-container .pos-container ul{height:22px}#container .header-collapsed #header-container .utility-bar .pos-container{display:table!important;height:60px!important}#container .header-collapsed #header-container .utility-bar .pos-container.no-dropdown{display:none!important}.header-collapsed .header-col-icons{position:inherit;bottom:auto;right:auto;vertical-align:middle}.header-collapsed #header-container .pos-container ul{height:auto}.top-nav-registered-menu{background-color:#2f2f2f!important;border-top:3px solid #fc0!important;position:absolute;top:30px;right:0;width:200px!important;display:none!important}.top-nav-registered-menu.active{display:block!important}.top-nav-registered-menu li{display:block!important;padding:0!important;width:100%!important;clear:both!important;margin:0!important;border:none!important}#header-container .utility-bar .emember-container .useraccount{height:auto!important}.header-collapsed .top-nav-registered-menu a,.top-nav-registered-menu a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:10px 15px!important;height:auto!important;border:none!important;display:block!important;clear:both!important;float:none!important;margin:0!important;text-decoration:none!important}.header-collapsed .top-nav-registered-menu a:hover,.top-nav-registered-menu a:hover{background-color:#686b72!important;color:#fff!important}#header-container .utility-bar #member-name-points-info.no-dropdown{display:block!important;position:absolute;top:44px;right:10px}.header-collapsed #header-container .utility-bar #member-name-points-info.no-dropdown{top:20px}#header-container .utility-bar #member-name-points-info.no-dropdown .emember-container{width:200px!important}#header-container .emember-container ul.homeloggedUserDetails,#header-container .emember-container ul.topNavtopNavmobileHide{margin-right:0!important}#header-container .pos-container ul{margin:0 10px 0 0!important}#header-container .utility-bar .pos-container .pos-box{position:absolute!important;right:30px!important;top:30px!important;z-index:1000}.header-inner-mobile{display:block!important}#header-container .utility-bar .pos-container{min-width:100px}#nav-container .nav-menu td{display:inline-block!important;margin-right:30px!important}.header-collapsed #nav-container .nav-menu td{margin-right:15px!important}.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu span{height:25px}.nav-primary-link-no-menu a:hover{background:0 0!important;color:#fff!important}.active-menu,.nav-primary-animate-hover{position:relative}.active-menu::after,.nav-primary-animate-hover::after{content:"";width:100%;height:2px;background-color:#fc0;display:block;position:absolute;bottom:10px;left:0;pointer-events:none}.nav-primary-animate-hover::after{width:0;opacity:0;transition:width .2s}.nav-primary-animate-hover:hover::after{width:100%;opacity:1}.nav-primary-anchor-right::after{left:auto;right:0;opacity:1}.header-collapsed .active-menu::after,.header-collapsed .nav-primary-animate-hover::after{bottom:0}.header-primary{height:135px}.header-primary.header-collapsed{height:60px}.header-collapsed .header-inner-mobile{height:60px}#nav-container .nav-menu dl.menu-show{width:280px!important}#nav-container .menu-show a,.header-collapsed #nav-container .menu-show a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:1px 15px!important;height:auto!important;border:none!important}#nav-container .menu-show a:hover,.header-collapsed #nav-container .menu-show a:hover{background-color:#686b72!important;color:#fff!important}#nav-container .logo-box img{cursor:pointer}#nav-container .nav-menu .nav-mobile-expandable-section a,#nav-container .nav-menu .nav-mobile-expandable-section span{font-size:12px!important}}';
    window.h0020CSS['homepagehero'] = '.header-brg::after{content:"";width:25px;height:54px;position:absolute;top:0;left:0}#transPromoTitle{margin-bottom:15px!important}#transPromoMobilePhoneDiv{padding-bottom:20px;padding-top:10px}label[for=transPromoCheckbox]{margin-bottom:10px}.hero-row{background-color:#fc0}#res-home-page .res-form{background:0 0!important}@media only screen and (max-width:767px){.hero-col-right{display:none}.hero-row{width:100%;max-width:1600px;margin:0 auto}.hero-col-left-inner{padding:1px 20px 25px}.hero-h1{font-size:28px;font-weight:400;margin-top:15px;margin-bottom:0}.res-otr-wrp{margin-top:-20px}}@media only screen and (max-width:599px){.hero-col-right{margin-top:-60px}}@media only screen and (max-width:499px){.hero-col-right{margin-top:-40px}}@media only screen and (min-width:768px){.hero-col-right img{display:none}.hero-col-right{position:relative}.hero-row{display:table;width:100%;max-width:1600px;margin:0 auto;height:300px;position:relative}.hero-col{display:table-cell;vertical-align:top}.hero-col-left{width:50%}.hero-col-right::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.hero-col-left-inner{position:absolute;top:0;left:0;width:100%}.hero-col-left-max-width{width:100%;max-width:1230px;margin:0 auto;padding:0 15px 0;box-sizing:border-box}.hero-h1{font-size:40px;line-height:45px;max-width:500px;font-weight:400;margin-top:45px}#resFormHero.reduced h1{font-size:24px;line-height:30px;max-width:none}#resFormHero.reduced h1 br{display:none}.res-otr-wrp.reduced{margin-top:-190px}.hero-row{background-color:#fc0;background-image:radial-gradient(closest-corner at 20% 60%,#ffe990,#fc0)}}@media only screen and (min-width:999px){.hero-col-left-max-width{padding-top:10px}.hero-col-left{width:60%}#resFormHero.reduced h1{font-size:36px;line-height:40px}.res-otr-wrp.reduced{margin-top:-210px}}@media only screen and (min-width:1199px){.hero-h1{font-size:55px;line-height:65px;max-width:500px;margin-top:25px}.res-otr-wrp.reduced{margin-top:-195px}}';
    window.h0020CSS['footer'] = '#copyright-content,#copyright-content a,#seo-content .seo-header,#seo-content .seo-header h1,#seo-content h2,#social-bar button,#social-bar input,.copyright-content-inner .address a,.copyright-content-inner .title a,.seo-info,.title-table .title{color:#000!important}#footer-container{max-width:1300px;margin:0 auto}#footer-container,#social-bar,footer{background-color:#F3F4F8!important;box-sizing:border-box}footer{margin-top:10px!important;clear:both}#footer-container .mob-links{display:none!important}#social-bar,#title-links{display:block!important}#title-links{padding-left:20px!important;padding-right:20px!important;box-sizing:border-box}#title-links a,.title-table .title a{color:#000!important;background:0 0!important}#copyright-content{padding-top:25px!important;float:right;clear:right!important;width:100%!important;text-align:right;border-top:1px solid #000}#copyright-content .address,#copyright-content .title{display:inline-block!important;float:none!important;width:auto!important}.social-email-label-wrap{display:block}.social-email-label{font-size:20px;float:none!important;clear:both;margin:0 0 5px!important;display:inline-block}#social-bar fieldset{display:block;width:100%;clear:both}#social-bar input{background-color:#FFF!important;border-radius:2px;box-sizing:border-box;padding:5px 10px!important;font-size:16px!important;height:45px!important}.social-icon-ul img{width:40px;height:40px}.social-icon-ul li{padding:0 0 0 10px!important;list-style-type:none;display:inline-block}#social-bar{border:none!important;margin-bottom:50px!important;padding:0 20px!important}#seo-content{border-top:1px solid #000!important;border-bottom:1px solid #000!important;padding:20px 25px!important;margin-bottom:30px;box-sizing:border-box}#copyright-content br{display:none}#social-bar button{background-color:#FC0!important;font-size:18px!important;height:45px!important;font-weight:600;box-sizing:border-box;border-radius:2px;padding:10px 50px}#social-bar button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}#title-links li{padding-left:0!important}#feedback-footer-container{border-top:none!important;margin:0!important;padding:10px 0 0!important}#feedback-footer-container a{text-decoration:underline!important;font-weight:700!important}#feedback-footer-container #opinionLab span{display:none!important}.social-footer-label{text-align:right;font-size:16px;margin:0 0 10px;float:right}#title-links li .title{font-size:14px!important;font-weight:600!important;margin-bottom:5px;text-transform:uppercase!important}#title-links ul{margin-bottom:10px!important}#footer-parsys{float:left;width:100px;box-sizing:border-box}.copyright-content-inner{text-align:right;padding-top:10px}.copyright-content-inner .address,.copyright-content-inner .title{display:inline-block!important;width:auto!important;float:none!important;text-transform:uppercase;font-size:11px}#social-bar form{width:70%!important}#social-bar ul{width:30%!important}#social-bar input{width:350px!important}#res-home-page #hp-banner-container{margin-top:0!important}.social-footer-label-mobile,.social-icon-container-mobile{display:none}.social-footer-label-mobile{text-align:left}.social-footer-label.social-footer-label-mobile{float:none!important;text-align:left;box-sizing:border-box;padding-left:20px;padding-right:20px;font-size:12px;box-shadow:0 0 #000;margin-bottom:20px!important;direction:ltr}#title-links dd{margin:0!important;padding:0!important}.view-on-desktop-link{display:none;padding:0!important}#mob-links{display:none!important}#title-links a{display:inline-block!important;margin:4px 0;padding:2px 0!important}#title-links a:hover{text-decoration:underline}@media only screen and (max-width:991px){#copyright-content .address,#copyright-content .title{display:block!important}#title-links a{margin:0;padding:0!important}#title-links li{padding:4px 0!important}#footer-container .title-table ul dl{padding-top:10px}#feedback-footer-container .view-on-desktop-link a,li#opinionLab a{text-decoration:none!important;padding:0!important;font-size:14px!important;font-weight:500!important}#container .view-on-desktop-link,li#opinionLab{padding-top:10px!important;padding-bottom:10px!important}#container .view-on-desktop-link{display:block}.social-footer-label,.social-icon-container{display:none}li#opinionLab{padding-top:17px!important}#title-links li .title{font-weight:500!important;text-transform:none!important;padding-top:6px;padding-bottom:6px}#social-bar{margin-bottom:25px!important}.social-footer-label-mobile,.social-icon-container-mobile{display:block!important}.social-icon-container-mobile{direction:rtl;text-align:left;margin-top:15px}.social-email-label-wrap{margin-bottom:15px}#social-bar form,#social-bar ul{width:100%!important;box-sizing:border-box;float:none!important;clear:both!important}.social-icon-container-mobile ul{padding:0 0 0 10px!important;margin-bottom:7px!important;margin-top:0!important;box-sizing:border-box}#social-bar input{width:200px!important}#social-bar fieldset{display:table!important}#footer-container .title-table ul dl{display:none}.title-table .title{position:relative;display:block!important;cursor:pointer}.title-table .title::after,.title-table .title::before{content:"";position:absolute;background-color:#000}.title-table .tab{display:none!important}.title-table .title::after{top:6px;right:14px;width:2px;height:10px}.title-table ul.active .title::after{display:none}.title-table .title::before{top:10px;right:10px;width:10px;height:2px}#title-links ul{width:100%!important;background:0 0!important;margin:0!important;padding:0!important}#copyright-content{width:100%!important;text-align:center!important;clear:both!important;padding-top:10px!important}#copyright-content br{display:block}#footer-parsys{float:none!important;width:100%!important;text-align:center}.copyright-content-inner .address,.copyright-content-inner .title{text-align:center!important;width:100%!important;line-height:18px}.copyright-content-inner{padding-top:0}#footer-parsys div a{display:inline-block}#footer-parsys div{width:100%!important;text-align:center;display:block}#seo-content .seo-header{margin-bottom:10px}#seo-content .seo-header,#seo-content .seo-info{width:100%!important;text-align:left;float:none!important}#title-links dd{padding-left:20px!important;padding-top:10px!important;padding-bottom:10px!important}}@media only screen and (min-width:992px){#footer-container .title-table dl{display:block!important;height:auto!important}}@media only screen and (max-width:620px){#social-bar label{display:block;width:100%;float:none}#social-bar input{width:100%!important}#social-bar button{margin:10px 0 0!important;width:100%;box-sizing:border-box}}.rd-veh-image.mm-active{padding:5px}.lb-content-box .vehicle-img-lrg{width:100%}.footer-app-link img{width:40px;height:40px}.footer-app-link{clear:both;text-align:left;padding-left:20px;padding-right:20px}.footer-app-label{padding:5px 20px 20px}.footer-social-col-middle{display:none}#social-bar ul{clear:both}.social-email-label{font-size:20px!important}@media only screen and (max-width:991px){#footer-container #title-links .row{display:block}#social-bar.no-seo-section{border-top:1px solid #000!important;padding-top:25px!important;margin-top:15px}}@media only screen and (min-width:992px){.footer-social-row{display:table;width:100%}.footer-social-col{display:table-cell;vertical-align:top}#social-bar ul{float:none;display:block;width:100%!important}.footer-app-label.social-footer-label{text-align:center;float:none;padding:0}.footer-app-link{text-align:center}.social-footer-app-mobile{display:none}#social-bar .footer-app-link a{display:inline-block}.footer-social-col-middle{width:200px}.footer-social-col-right{width:260px}#social-bar form{width:100%!important}#social-bar input{width:100%!important}#social-bar fieldset label{width:350px;max-width:50%}}#social-bar .footer-email-disclaimer a {display:inline-block}.footer-email-disclaimer{color:#636466;padding-top:15px;clear:both;max-width:558px}';
    window.h0020CSS['carousel'] = '.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;touch-action:manipulation;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot{background:0 0;color:inherit;border:none;padding:0!important;font:inherit}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item .owl-lazy:not([src]),.owl-carousel .owl-item .owl-lazy[src^=""]{max-height:0}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url(owl.video.play.png) no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}';
    window.h0020CSS['gprnavigation'] = '#mobile-nav-member-menu [hidden]{display:block}#header-container .emember-container .arrowClose,#header-container .emember-container .arrowOpen,#mobileWebArrowDropdown.mobileWebArrowClose,#mobileWebArrowDropdown.mobileWebArrowOpen{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTggOSI+PHBhdGggZD0iTTE0NzguNSw2MzAuNzYzbDguNTUyLTgsOC41NTIsOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NzguMTU4IC02MjIuMDc5KSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDsiIC8+PC9zdmc+) no-repeat center center!important;margin:10px 15px 15px 15px!important;cursor:pointer;-ms-transform:rotate(180deg)!important;-webkit-transform:rotate(0)!important;transform:rotate(0)!important}#header-container .emember-container .arrowOpen{-ms-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important}#mobileWebArrowDropdown.mobileWebArrowOpen{-ms-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important}.mobile-nav-member-info-div{display:table}.mm-gpr-navigation #homePageLoginOverlay #loginFormContainer #loginFormInner #loginFormInnerHeader{background-color:#f3f4f8}#homePageLoginOverlay #loginFormContainer #loginFormInner{border-top:5px solid #fc0!important}.pos-container .mobile-nav-member-info-div{display:none!important}.mm-gpr-navigation #loggedUserDetails a{color:#000}.mm-gpr-navigation #loggedUserDetails a:hover{text-decoration:underline!important}.mm-gpr-navigation #header-container .emember-container .memberNumber{color:#000!important}.mm-gpr-navigation #header-container .emember-container #loggedInTravelAgent{color:#000;padding:6px 0 13px 20px}.mm-gpr-navigation.mm-content-page #header-container .pos-container li li{float:left}.mm-gpr-navigation .header-collapsed #homePageLoginOverlay #loginFormContainer{position:fixed!important;top:60px!important}#mobileWebArrowDropdown.ta-hide{display:none!important}#header-container .cookiedLinks .fullswitchprofilelinktext.no-cursor,.homeloggedUserDetails.no-cursor{cursor:default}.ta-logout a,.ta-logout a:visited{color:#ffd100}@media only screen and (max-width:1200px){#loginFormContainer{display:none!important}.header-col .header-col-ul{position:relative;box-sizing:border-box;padding-right:30px}#mobileWebArrowDropdown{width:20px;height:20px;background-color:orange!important;position:absolute;top:0;right:0;z-index:1}#mobile-nav-member-menu{padding:1px 0 20px;border-bottom:1px solid #d4d4d7;margin-bottom:20px}.mob-pos-selector .mobile-nav-member-info-div{background-color:#f3f4f8;padding:20px}.mm-gpr-navigation #container #header-container .emember-container .welcometext{display:block!important;margin-top:0!important;text-align:left}#mobileWebMemberInfo-memberNumber a{float:right;text-decoration:none;font-size:14px;font-weight:400}#mobileWebMemberInfo-memberNumber p{display:inline;width:60%}#mobileWebMemberInfo-memberNumber #memberNumber{display:inline-block!important;vertical-align:top}#nav-container .nav-menu .nav-mobile-expandable-link span,#nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu .nav-mobile-expandable-link span,.header-collapsed #nav-container .nav-menu a{text-transform:none!important}#container #header-container .utility-bar .emember-container{max-width:60%}#nav-container .nav-menu #mobileWebMemberInfo-memberNumber a{padding:0!important;color:#365ad8!important}#header-container .emember-container #topNavDesktopShow span.memberNumber{font-size:12px!important;text-align:left!important}#nav-container .nav-menu span#mobileWebMemberInfo-clubtier{font-size:18px!important;font-weight:700;margin-bottom:15px!important}#nav-container .nav-menu span#mobileWebMemberInfo-points{margin-bottom:10px!important}#mobileWebMemberInfoUL{padding-top:15px}#mobileWebArrowDropdown.mobileWebArrowClose,#mobileWebArrowDropdown.mobileWebArrowOpen{margin-top:0!important}#header-container .emember-container .homeloggedUserDetails li#topNavDesktopShow{width:100%;box-sizing:border-box;padding-right:15px}.mm-gpr-navigation #header-container .emember-container #loggedInTravelAgent{padding-left:0;padding-top:0}.ta-logout{display:inline-block;margin-left:5px}#logOut.applicant{display:block!important}}@media only screen and (min-width:1201px){#mobile-nav-member-menu{display:none!important}.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link{border-right:1px solid #a6a6ab;padding:10px 10px!important}.mm-content-page.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link,.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link.no-border{border-right:none;padding:0!important}#header-container .emember-container .arrowClose,#header-container .emember-container .arrowOpen{margin-right:0!important}#mobileWebArrowDropdown{display:none!important}.mm-gpr-navigation #header-container .pos-container button#loginLink{margin:10px 0 10px 20px!important}.mm-gpr-navigation .header-collapsed #header-container .pos-container button#loginLink{margin-top:9px!important}.mm-gpr-navigation .header-collapsed .header-col-ul{padding-top:7px}.mm-gpr-navigation .header-collapsed .header-col-ul .header-col-ul{padding-top:3px}.mm-gpr-navigation #header-container .emember-container #topNavDesktopShow span{margin:4px 0 0 0}.mm-gpr-navigation .header-collapsed #header-container .emember-container .arrowClose,.mm-gpr-navigation .header-collapsed #header-container .emember-container .arrowOpen{margin-right:0!important;margin-left:10px!important}.mm-gpr-navigation .header-collapsed #loginFormContainer{margin-top:-6px}.mm-gpr-navigation #header-container .emember-container #topNavDesktopShow span{margin-top:0;margin-bottom:4px}.mm-gpr-navigation #header-container .utility-bar .emember-container #topNavDesktopShow{padding-left:20px}.mm-gpr-navigation #header-container .utility-bar .emember-container #topNavDesktopShow{padding-top:0!important}.mm-gpr-navigation #header-container .emember-container .arrowClose,.mm-gpr-navigation #header-container .emember-container .arrowOpen{margin-top:5px}.ta-logout{text-align:right;margin-top:3px}.desktop-float-right{float:right!important}}';
    window.h0020CSS['altbranding'] = '.header-primary{background-color:#fff;border-bottom:6px solid #fc0}#nav-container .nav-menu{background:0 0!important}#header-container .top-bar,#header-container .utility-bar,#header-container .utility-bar .emember-container,#header-container .utility-bar .pos-container{background-color:transparent!important}#container #header-container .emember-container .firstnametext,#container #header-container .emember-container .lastnametext,#container #header-container .emember-container .welcometext,#header-container .change-link .languageselector,#header-container .change-link .languageselector span,#header-container .cookiedLinks .fullswitchprofilelinktext,#header-container .pos-container button,#nav-container .nav-menu a,#nav-container .nav-menu span,#nav-container .nav-menu td,#nav-container .nav-menu td a,#nav-container .nav-menu td span,.nav-primary-link-no-menu a:hover{color:#000!important}.logo-box.mm-branding-update img{width:135px}#itinerarySummary{background:#5c5f66!important}.header-mobile-menu a{display:block;width:50px;height:50px;background-size:20px 20px}@media only screen and (min-width:1201px){#nav-container .menu-show a:hover,.header-collapsed #nav-container .menu-show a:hover{background-color:#f3f4f8!important;color:#000!important}#nav-container .menu-show a,.header-collapsed #nav-container .menu-show a{background-color:#fff!important}.nav-primary-animate-hover::after{display:none!important}.active-menu::after{width:100%;height:9px;background-size:auto 100%;bottom:5px}.header-primary{height:140px}#nav-container .nav-menu dl.menu-show,.top-nav-registered-menu.active{box-shadow:0 1px 6px #4c4c4c}.header-collapsed .active-menu::after,.header-collapsed .nav-primary-animate-hover::after{bottom:-11px}.header-collapsed .top-nav-registered-menu a,.top-nav-registered-menu a{background-color:#fff!important;color:#000!important}.header-collapsed .top-nav-registered-menu a:hover,.top-nav-registered-menu a:hover{background-color:#f3f4f8!important;color:#000!important}.itn-sum-col-inner-desktop-only-left,.itn-sum-col-inner-left,.itn-sum-col-inner-right{border-right:1px solid #fff;height:90px}#header-container .pos-container ul{height:34px}.header-collapsed #nav-container .menu-show a,body #nav-container .menu-show a{color:#000!important}}@media only screen and (max-width:1200px){.logo-box.mm-branding-update img{width:65px}#nav-container .nav-menu a,#nav-container .nav-menu dd,#nav-container .nav-menu dd a,#nav-container .nav-menu dl,#nav-container .nav-menu span,#nav-container .top-nav-registered-menu a,.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu dd,.header-collapsed #nav-container .nav-menu dd a,.header-collapsed #nav-container .nav-menu dl,.header-collapsed #nav-container .nav-menu span{color:#000!important}#header-container .fullSwitchProfileLink a,#nav-container .nav-menu .menu-hover{color:#000!important}#nav-container .nav-menu .menu-hover{background:0 0!important}.nav-mobile-expandable-link-style::after,.nav-mobile-expandable-link-style::before,.nav-mobile-expandable-link::after,.nav-mobile-expandable-link::before{background-color:#000}.header-primary{display:block;height:56px}.header-wrap-mobile{display:table;width:100%;height:100%;position:relative}}';
    window.h0020CSS['brgnavigation'] = '.header-brg{display:inline-block;font-size:20px;font-weight:700;font-style:italic;text-transform:none;vertical-align:top;width:310px;height:54px;box-sizing:border-box;position:relative;overflow:hidden}.header-brg-text{position:absolute;top:20px;left:-310px;transition:left .6s;font-size:20px}.header-brg.no-animation .header-brg-text{transition:none}.header-brg.active .header-brg-text{left:20px}#headerEmailM,.header-brg-mobile,.header-collapsed #headerEmailD,.header-collapsed .header-brg{display:none}#headerEmailD .header-email-row{display:table;width:350px}#headerEmailD .header-email-col{display:table-cell;vertical-align:top;position:relative}#headerEmailD .header-email-col-right{width:90px;padding-left:10px}.header-email-submit{display:block;text-align:center;font-size:14px;color:#000;margin:0;width:100%!important;background:0 0;padding:9px 10px;box-sizing:border-box;border:1px solid #000;border-radius:2px;font-weight:700}.header-email-submit:hover{background-color:#000;color:#fff}.header-email-input{font-size:14px;box-sizing:border-box;padding:9px 10px;margin:0;width:100%}#headerEmailD{padding-top:10px;clear:both}.header-email-form .header-email-error{display:none}.header-email-form.error .header-email-error{display:block;position:absolute;top:-22px;color:red}.header-email-form.error .header-email-input{border:1px solid red}@media only screen and (max-width:1200px){#title-links .coln{display:block}.header-email-form.error .header-email-error{top:-8px}#nav-container .nav-menu td#headerSearchNav,.header-brg{display:none!important}#headerEmailD{display:none}#headerEmailM{opacity:0;transition:opacity .2s}#headerEmailM,.header-brg-mobile{display:block}#headerEmailM{position:absolute;bottom:0;width:100%;box-sizing:border-box;padding:10px;background:#fff}#headerEmailM .header-email-col.header-email-col-left{padding-bottom:10px}.header-brg-mobile{margin:30px 20px;border-top:1px solid #d7d8db;border-bottom:1px solid #d7d8db;text-align:center;color:#000;font-size:20px;font-style:italic;font-weight:700;padding:20px}.header-email-input{padding:14px 10px;font-size:16px}.header-email-submit{font-size:16px;padding:16px}.header-mobile{display:table;position:absolute;z-index:1;background:#fff}.header-mobile-wrap,.header-outer-mobile{display:table-row;width:100%}.header-mobile-wrap{height:51px}.header-primary.expanded #headerEmailM{opacity:1}.header-inner-mobile{width:100%;height:calc(100% - 143px);overflow:auto;-webkit-overflow-scrolling:touch}}';
    window.h0020CSS['h0044BookableUpgrades'] = '.upsell-proxy div.vehContent,.upsell-proxy div.vehContent-half{width:100%;box-sizing:border-box;margin:0;border:0;padding:0;box-shadow:none}.upsell-inner-row{display:table;width:100%}.upsell-inner-col{display:table-cell;vertical-align:top;width:50%;box-sizing:border-box}.upsell-inner-col-left{padding-right:10px}.upsell-slide{display:none}.upsell-single-slide{min-height:initial}.upsell-slide.active,.upsell-slide.get-height{display:block}.upsell-slide.get-height{opacity:0}.upsell-indicator{display:inline-block;width:16px;height:16px;border-radius:8px;border:1px solid #9d9ea3;position:relative;box-sizing:border-box;margin:0 3px!important}.upsell-indicator.active::after{content:"";display:block;width:10px;height:10px;background-color:#9d9ea3;border-radius:5px;position:absolute;top:2px;left:2px}.upgrade-options .upsell-slide .veh-container h3{min-height:auto!important;font-size:14px;padding:6px 10px!important;box-sizing:border-box;background:#fc0;margin-bottom:15px}.upsell-proxy{margin-top:25px!important}.upgrade-options .upsell-slide .veh-container .button-container button{display:block!important;color:#000!important;border:2px solid #000!important;width:100%!important}.upgrade-options .upsell-slide .veh-container .button-container button:hover{background-color:#000!important;color:#fff!important}.upsell-indicators{text-align:center}.upsell-name{color:#000;font-weight:700;font-size:14px;margin:0}.upsell-class{margin:2px 0 10px;color:#000;font-size:12px}.upsell-proxy .vech-upsell-price{font-size:12px;color:#000}.upsell-slide figure img{opacity:0;transition:opacity .4s}.upsell-slide figure img.active{opacity:1}.upsell-slide .vehicleUpsellsCollectionContainer{display:none}#vehicleUpsells{display:none!important}.upgrade-options .right-upgrade{display:block!important}@media only screen and (min-width:768px){#vehicleUpsellsProxyM{display:none!important}}';

if(!jQuery().upsizeCarImage){
(function ($){
$.fn.upsizeCarImage=function(options){
var settings=$.extend({
    carName: ""
}, options );
if(options.carName !== ''){
    var carImages= [
        ['ZEUSJSAR999','#$(ContentManager:camaro-ss.png)!'], ['ZEUSXSAR999','#$(ContentManager:camaro-ZL1.png)!']
    ];
    var carImgLrg="";
    var originalImgSrc=$(this).attr('src');
    var fileNameWithExtension="";
    var fileName="";
    var fileNameSplit="";
    if(originalImgSrc.indexOf('.') > -1){
        fileNameWithExtension=originalImgSrc.match(/\w+\.\w+$/);
        fileNameWithExtension=fileNameWithExtension.toString();
        fileNameSplit=fileNameWithExtension.split('.');
        fileName=fileNameSplit[0];
    }
    for(var i=0; i<carImages.length; i++){
        if(carImages[i][0]==fileName){
            carImgLrg=carImages[i][1];
            break;
        }
    }
    if(carImgLrg !== ""){
        this.attr('src', carImgLrg ).addClass('vehicle-img-lrg');
    }
}
return this;
};
}(jQuery));
}

/*-- Global --*/
/*@CSSINCLUDE:global*/
window.newCSS = {}
window.newCSS['global'] = '#breadCrumns{padding-top:1px}#important .termsAndConditionsContent{height:200px;overflow:auto;padding-left:32px;padding-right:15px;box-sizing:border-box}#important .terms .terms h2{font-size:15px!important;cursor:pointer}#important .terms .terms{margin-bottom:15px}.expandable-section-content{display:none}.expandable-section-btn::after,h4.rental-links-header::after,#important #important-information-toggle::after,#important .terms .terms h2::after{content:\"\";position:absolute;top:8px;left:4px;width:16px;height:8px;background:url(#$(ContentManager:hertz-expand-icon.png)!) no-repeat center top;background-size:16px auto}.expandable-section-btn strong{font-weight:300!important}.rental-policy-groups .expand-collapse-icon{pointer-events:none;position:absolute;top:14px;left:18px;width:16px;height:8px;background:url(#$(ContentManager:hertz-expand-icon.png)!) no-repeat center top;background-size:16px auto}.mm-v-icn-seats{background-image:url(#$(ContentManager:hertz-icon-seats.png)!)}.mm-v-icn-suitcases{background-image:url(#$(ContentManager:hertz-icon-luggage.png)!)}.mm-v-icn-mpg{background-image:url(#$(ContentManager:hertz-icon-mpg.png)!)}.mm-v-icn-awd{background-image:url(#$(ContentManager:hertz-icon-awd.png)!)}.mm-v-icn-doors{background-image:url(#$(ContentManager:hertz-icon-door.png)!)}.mm-v-icn-transmission-automatic{background-image:url(#$(ContentManager:hertz-icon-transmission-automatic.png)!)}.mm-v-icn-transmission-manual{background-image:url(#$(ContentManager:hertz-icon-transmission-manual.png)!)}body.mm-content-page,.mm-content-page div,.mm-content-page dl,.mm-content-page dt,.mm-content-page dd,.mm-content-page ul,.mm-content-page ol,.mm-content-page li,.mm-content-page pre,.mm-content-page form,.mm-content-page p,.mm-content-page blockquote,.mm-content-page th,.mm-content-page td{font-family:\"Ride\",Muli,Helvetica,Arial,sans-serif}@media only screen and (min-width:992px){.mm-content-page #header-container .pos-container li{float:right}}@media only screen and (max-width:767px){#important #rental-links .rental-links-header{margin-left:10px!important;margin-right:10px!important}.mm-desktop-headline{display:none!important}.mm-mobile-headline{display:block!important}#page{background:transparent!important}#res-extras-page{background:transparent!important}#container{background-color:#F3F4F8!important}#steps li .step-content{display:none!important}.step-mobile{display:block}div#rental-links{margin-left:-10px!important;margin-right:-10px!important;width:auto!important;padding:0!important;position:relative!important}.rental-policy-links-wrapper{padding:3px 10px}#steps{background:#FFF!important;margin-left:-10px;margin-right:-10px;padding:15px 20px 20px!important;box-sizing:border-box;margin-top:10px}}\/*-- Itinerary Bar --*\/\/*@CSSINCLUDE:itinerary*\/#itinerarySummary{background:url(#$(ContentManager:hertz-itinerary-background-desktop.jpg)!) no-repeat center top #373945!important;background-size:cover!important;color:#FFF;min-height:90px}#itineraryExpandBtn{height:32px;width:32px;display:inline-block;background:url(#$(ContentManager:hertz-itinerary-arrow.png)!) no-repeat center 13px #FFF;background-size:14px auto;box-shadow:2px 2px 2px rgba(0,0,0,.2);border-radius:16px;transition:transform 200ms}@media only screen and (max-width:767px){.itn-sum-col-inner-desktop-only.itn-sum-col-inner-desktop-only-right{display:block}.itinerary-summary-btn-row,.itinerary-summary-btn-col.itinerary-summary-btn-col-right{display:block;padding:0;width:40px}.itn-sum-row{position:relative}.itinerary-summary-btn-row{position:absolute;bottom:-20px;right:20px;z-index:1}#itineraryNextStep{display:none}.itinerary-summery-cost{display:none}.itinerary-summery-type{text-align:center;display:inline-block;padding-left:34px;padding-right:34px;position:relative}.itinerary-summery-type::before,.itinerary-summery-type::after{content:\"\";display:block;width:25px;border-top:1px solid rgba(255,255,255,.5);position:absolute;top:8px;left:0}.itinerary-summery-type::after{left:auto;right:0}#itineraryCarType{text-align:center;padding-top:0}#itinerarySummary{background-image:url(#$(ContentManager:hertz-itinerary-background-mobile.jpg)!)}.itn-sum-col-inner-left{padding-right:25px;padding-left:25px;position:relative}.itn-sum-col-inner-left::after{position:absolute;content:\"\";top:35px;right:-6px;background:red;display:block;width:25px;height:18px;background:url(#$(ContentManager:hertz-itinerary-arrow-mobile.png)!) no-repeat center center;background-size:25px auto}.itn-sum-col-inner-right{padding-left:25px;padding-right:25px}.itin-sum-col{display:block;width:100%;box-sizing:border-box}div#itineraryCarType{width:100%}}\/*@CSSINCLUDE:itineraryMobile*\/\/*-- Vehicles Page --*\/\/*@CSSINCLUDE:vehicles*\/#mmVehBanner img{width:100%}.hide-modals #light-box-1{display:none}.vehicles-list-cont div.banner{background:transparent!important;padding-top:0!important;padding-bottom:0!important}.approx-total-price.no-link, .approx-total-price.no-link span{color:#000!important}.vehicle-overlay-footer::before{content:\"\";display:block;width:100%;height:16px;background:url(#$(ContentManager:hertz-vehicle-overlay-footer-bg.png)!) repeat-x center bottom;pointer-events:none ;position:absolute;top:-16px;left:0}.vehicle-sort-wrap select{padding:0 10px;height:30px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF;background-size:18px auto}@media only screen and (max-width:1000px){.vech-d-view figure .image .vehicle-img-lrg{max-width:80%;padding-top:30px}.vech-d-view .vehicle-col-info{padding-right:20px}.vehicle-col-pricing{width:35%}}@media only screen and (max-width:850px){.vech-d-view figure .image .vehicle-img-lrg{max-width:80%!important;padding-top:45px}}\/*@CSSINCLUDE:vehiclesMobile*\/\/*-- Ancillaries Page --*\/.check-custom-selector,.qty-plus-proxy-first{display:block!important;width:36px;height:36px;background:url(#$(ContentManager:hertz-icon-plus.png)!) no-repeat center center #FFF;background-size:18px auto;border-radius:24px;border:2px solid #3455DB}.ancillary-select-dropdown select{padding:0 10px;height:30px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF;background-size:18px auto;border:none!important;width:100%!important}\/*@CSSINCLUDE:ancillariesGrid*\/\/*-- Review and Book Page --*\/\/*@CSSINCLUDE:reviewandBook2*\/#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong::after, #res-bookable-page .can-spam-inner::after {content:\"\";position:absolute;top:0;left:0;width:20px;height:16px;background:url(#$(ContentManager:hertz-bookable-checkbox-bg.png)!) no-repeat center center;background-size:20px auto}#termsAndConditionsAccepted:checked + strong::after, #canSpamElectionCheckbox:checked + .can-spam-inner::after{background-image:url(#$(ContentManager:hertz-bookable-checkbox-checked-bg-2.png)!)!important}#res-bookable-page select{padding:0 10px;height:42px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF;background-size:18px auto}@media only screen and (min-width:768px){#res-bookable-page .bookable-row{display:table;width:100%;margin-bottom:2px}#res-bookable-page .bookable-row .bookable-col{display:table-cell!important;width:50%!important}#res-bookable-page .bookable-row .bookable-col-left{padding-right:5px}#res-bookable-page .bookable-row .bookable-col-right{padding-left:5px}.review-and-book-col{display:table-cell;vertical-align:top}.review-and-book-col-right{width:330px}.review-and-book-col-left{padding-right:60px}.veh-container h3{min-height:36px}}@media only screen and (max-width:767px){.bookable-cost-header-row{border-bottom:none}#res-bookable-page #pay-with-your-points .choose-rewards select{font-size:14px!important;max-width:none!important}.current-member-email-container{background-color:#FFF;padding:20px 0 0;font-size:14px}#bookablePrivacyOptInText{font-size:14px;margin-top:10px}#reviewAndBookCost #rd-main .rd-detail header{background:#F3F4F8!important;border:1px solid #D7D8DB;text-align:center}#reviewAndBookCost #rd-main .rd-detail header div{display:inline-block;width:auto;padding:0 3px;color:#000}#reviewAndBookCost #rd-main .rd-box{border:none!important}#misc-info .misc-info-container{margin-top:0}.review-and-book-col{width:100%;vertical-align:top}.review-and-book-col-right{display:table-header-group}.bookable-cost-header-col{padding:15px 10px 5px}#reviewAndBookCost #rd-rental-total{padding:0 10px}#reviewAndBookCost #rd-totals{display:block!important}.review-and-book-col-right #rd-pay-later,.review-and-book-col-right .rate-type-box.rd-info,.review-and-book-col-right #rd-pay-now,.review-and-book-col-right #rd-pay-later,.review-and-book-col-right #rd-more{display:none!important}.review-and-book-col-left{padding:10px;box-sizing:border-box}#res-bookable-page #approx-rate-terms fieldset{background:none!important;padding-top:0!important}#res-bookable-page #approx-rate fieldset .details{border:none!important;margin:0 -10px 20px!important;background:#FFF!important}#res-bookable-page #vehicleUpsells{margin-top:20px;margin-bottom:5px}#vehicleUpsells .vehContent{width:100%}.review-and-book-row{margin-bottom:0}#res-bookable-page{background:transparent!important}#container{background-color:#F3F4F8!important}.bookable-btn-row, .bookable-btn-row-inner, .bookable-btn-col, .bookable-btn-col-inner{display:inline;padding:0;width:auto}.bookable-btn-row{display:block;width:100%;box-sizing:border-box;text-align:center}#res-bookable-page #information,#res-bookable-page #important{margin-left:-10px!important;margin-right:-10px!important;width:auto!important}#res-bookable-page #important{padding:10px;background:#FFF;position:relative}#res-bookable-page #creditCard fieldset{box-sizing:border-box}#res-bookable-page fieldset{padding:10px 0!important}.bookable-currency{font-size:12px;display:inline-block;padding-top:10px}.bookable-btn-wrap{border:1px solid #D7D8DB;margin-top:15px;margin-bottom:20px}#important .terms-first{border-top:1px solid #D7D8DB;padding-top:15px}#important .terms .terms h2, #important #important-information-toggle, h4.rental-links-header{border-bottom:none!important}#customerInfo legend,#arrival-misc-info .arrival-info-heading{padding-left:0!important;box-sizing:border-box;font-size:16px!important;padding-bottom:15px!important;font-weight:500!important;margin-bottom:1px!important}#customerInfo legend{padding-top:20px!important}#res-bookable-page #pay-with-your-points .choose-rewards{padding-bottom:10px!important}#res-bookable-page #approx-rate .submit-button-full{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}#res-bookable-page #creditCard fieldset legend,#res-bookable-page #billing-info fieldset legend,#res-bookable-page #pointsSection fieldset legend,#res-bookable-page #frequent-traveler fieldset legend{float:left;background:#FFF!important;margin:-10px 0 15px!important;box-sizing:border-box;padding:10px 10px 20px!important;clear:both;width:100%;border:none!important;position:relative;font-size:16px!important;font-weight:500!important}#reviewAndBookCost #rd-main .rate-separator,#reviewAndBookCost #rd-main .rd-edit-cont{display:none!important}#res-bookable-page #creditCard fieldset legend::after,#res-bookable-page #billing-info fieldset legend::after,#res-bookable-page #pointsSection fieldset legend::after,#res-bookable-page #frequent-traveler fieldset legend::after{position:absolute;bottom:10px;left:0;width:100%;height:1px;pointer-events:none;content:\"\";border-bottom:1px solid #E6E7EB}.bookable-cost-header-col-left{padding-left:10px}.bookable-cost-header-col-right{padding-right:10px#disclaimer-and-reserve h4{padding:0 10px 10px}#res-bookable-page #customerInfo legend.hertz-gold-title{margin-bottom:0!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs{background:#FFF!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs .prepend-top{padding-top:0!important}#res-bookable-page input[type=text], #res-bookable-page input[type=email], #res-bookable-page input[type=tel], #res-bookable-page select{font-size:16px#frequent-traveler,#misc-info{padding:0!important;margin:0!important#arrival-info #autocomplete-container,#arrival-info #autocomplete-radio-buttons{display:none!important}#arrival-info #flight-services{display:block!important}#arrival-info #flight-details{margin:0!important}}\/*-- Confirmation Page --*\/\/*@CSSINCLUDE:confirmation*\/.confirmation-hero-image{width:100%;height:275px;background:url(#$(ContentManager:hertz-confirmation-header-image.jpg)!) no-repeat center top;background-size:cover}#res-prepay-terms-accept label::after, #res-bookable-page .can-spam-inner::after {content:\"\";position:absolute;top:0;left:0;width:20px;height:16px;background:url(#$(ContentManager:hertz-bookable-checkbox-bg.png)!) no-repeat center center;background-size:20px auto}#tcCheckBox:checked + label::after{background-image:url(#$(ContentManager:hertz-bookable-checkbox-checked-bg-2.png)!)!important}@media only screen and (min-width:768px){#confColR .gptAdBlock{display:inline-block!important;vertical-align:top;width:auto!important;height:auto!important;float:none!important}}@media only screen and (min-width:1024px){#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col{text-align:left}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col-left{position:relative;padding-right:50px;padding-left:30px}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col-right{padding-left:50px;padding-right:30px}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col-left::after{content:\"\";background:url(#$(ContentManager:hertz-confirmation-itin-arrow.png)!) no-repeat 0 0;background-size:100% auto;width:66px;height:32px;position:absolute;top:10px;right:-33px;pointer-events:none}}@media only screen and (max-width:991px){.conf-placepass-desktop{display:none}.conf-placepass-mobile{display:inline-block#confColL #res-itinerary-2 .int-loc-tm-info,#confColL #res-itinerary-2 .int-misc-info{display:block!important;width:100%!important}#confColL #res-itinerary-2 .int-loc-tm-info{padding-right:0!important}.confirmation-col{width:100%;display:block;box-sizing:border-box;padding:10px 0}#res-confirmation-page #main-content{padding-left:10px;padding-right:10px;background-color:#FFF}.confirmation-resflow-box-link-col{display:inline-block;width:auto;text-align:left}#confirmationResflowBoxLinksLeft button::after{content:\"|\";display:inline-block;padding-left:9px;padding-right:5px}.confirmation-col-left{padding-right:0}.confirmation-col-max-width{max-width:none}#res-prepay-terms-accept input[type=\"checkbox\"]{top:-175px}#res-confirmation-page #page-content #res-warnings{padding-left:0!important;padding-right:0!important}#res-itinerary-2 .itn-edit-cont .itn-edit-link{margin-left:0!important;margin-right:0!important;box-sizing:border-box}}\/*-- Homepage --*\/.homepage-form-group select{background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF}.discount-code-value.active::after{background:url(#$(ContentManager:hertz-discount-check.png)!) no-repeat 0 0}.pseudo-label-help-icon{background:url(#$(ContentManager:hertz-info-icon.png)!) no-repeat 0 0}.member-res-search::after{background:url(\\\'#$(ContentManager:hertz-summary-arrow-icon.png)!\\\') no-repeat 0 0}\/*@CSSINCLUDE:homepage*\/\/*-- Header --*\/#container #header-container .emember-container .lastnametext::after,#container #header-container .cookiedLinks .fullswitchprofilelinktext::after{background:url(#$(ContentManager:hertz-nav-dropdown-arrow-white.png)!) no-repeat 0 0;}.header-mobile-menu a{background:url(\'#$(ContentManager:hertz-nav-header-menu-icon.png)!\') no-repeat 15px 15px}header-mobile-menu.active a{background-image:url(\'#$(ContentManager:hertz-nav-header-close-icon.png)!\')}.search-inner-col-left::after{background:url(\'#$(ContentManager:hertz-nav-header-search-icon.png)!\') no-repeat 0 0}#header-container .utility-bar .pos-container .pos-box::after{background:url(\'#$(ContentManager:hertz-menu-expanded-arrow.png)!\') no-repeat}\/*@CSSINCLUDE:headerDesktop*\/\/*@CSSINCLUDE:headerDesktop2*\/\/*@CSSINCLUDE:headerMobile*\/@media only screen and (max-width:599px){#header-container .utility-bar .pos-container ul .change-link{padding-right:0!important}#header-container .pos-container label{padding-bottom:0!important}#container #header-container .emember-container .welcometext{display:none!important}}@media only screen and (min-width:1201px){.top-nav-registered-menu ::after{content:\"\";width:13px;height:8px;background:url(\'#$(ContentManager:hertz-menu-expanded-arrow.png)!\') no-repeat;background-size:100% auto;position:absolute;top:-8px;right:14px}}#hero-image-container{max-width:1248px;margin-left:auto !important;margin-right:auto !important}.homepage-form-row.homepage-form-group.resform-row-code-age{background:none;border:none;position:relative}.homepage-form-row.homepage-form-group.resform-row-code-age .homepage-form-col-right #itn-age{border-left:none}.aaa-added .homepage-form-row.homepage-form-group.resform-row-code-age .homepage-form-col-right #itn-age{border-right:none}#ageAdvisory{left:0;position:absolute;width:100%;bottom:-49px}.age-advisory-inner{width:100%!important;box-sizing:border-box;margin:0px!important;position:relative;height:50px;background:#FFF;border:1px solid #C4C6CC;display:table}#res-form #ageAdvisory #age-advisory-content{padding:5px 20px 5px 60px;display:table-cell;vertical-align:middle}#res-form #ageAdvisory #age-advisory-content::after{content:\"\";width:50px;height:100%;background:url(\'#$(ContentManager:hertz-icon-advisory-white.png)!\') no-repeat 13px center #9D9DA3; background-size:24px auto; position:absolute;top:0;left:-1px;border:1px solid #9D9DA3;border-bottom:0}#ageAdvisory #age-advisory-image{display:none!important}#resformMMActive.age-advisory-expanded{padding-bottom:50px}@media only screen and (max-width:1200px){#resDiscCol{border:none}.discount-code-wrap{border:1px solid #C4C6CC;margin-top:10px}}@media only screen and (min-width:1201px){.homepage-form-row.homepage-form-group.resform-row-code-age .discount-code-trigger,.homepage-form-row.homepage-form-group.resform-row-code-age #itn-age{background:#FFF;border:1px solid #C4C6CC}}.mm-content-page #breadCrumns,.mm-content-page .special-offers{max-width:1250px;margin:0 auto}body .cc-error-list{margin:0 0 20px}\/*@CSSINCLUDE:altbranding*\/#container #header-container .emember-container .lastnametext::after, #container #header-container .cookiedLinks .fullswitchprofilelinktext::after{background-image:url(#$(ContentManager:hertz-nav-dropdown-arrow-black.png)!)}.header-mobile-menu a{background:url(\'#$(ContentManager:hertz-nav-header-menu-icon-black.png)!\') no-repeat 15px 15px}.header-mobile-menu.active a{background-image:url(\'#$(ContentManager:hertz-nav-header-close-icon-black.png)!\')}@media only screen and (min-width:1201px){.active-menu::after{background:url(#$(ContentManager:hertz-nav-selected-arrow.png)!) no-repeat center center;width:100%;height:9px;background-size:auto 100%;bottom:5px}}\/*@CSSINCLUDE:gprnavigation*\/.mm-gpr-navigation #header-container .emember-container #topNavDesktopShow span{color:#000;font-weight:normal;font-family:\"Ride\",Muli,Helvetica,Arial,sans-serif}@media only screen and (min-width:1201px){.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link{border-right:none}#loginFormInner::after{background:url(#$(ContentManager:hertz-nav-selected-arrow.png)!) no-repeat center center;width:20px;height:9px;background-size:auto 100%;top:-9px;content:\"\";position:absolute;right:10px}}\/*@CSSINCLUDE:brgnavigation*\/\/*@CSSINCLUDE:homepagehero*\/.header-brg::after{background:url(#$(ContentManager:header-brg-cover.png)!) no-repeat center center}@media only screen and (min-width:768px){.hero-col-right{background:url(#$(ContentManager:hertz-hero-road.jpg)!) no-repeat top center;background-size:cover;position:relative}.hero-col-right::after{background:url(#$(ContentManager:hertz-hero-desktop-mask-bg.png)!) no-repeat left top;background-size:auto 100%}}@media only screen and (min-width:768px){#resformStart.inactive{display:none}}@media only screen and (max-width:767px){#resformStart.inactive #resformStartTrigger{display:none}}@media only screen and (max-width: 599px){#resFormHero{margin-top:0;padding-top:45px;}}body.pay-now-overlay-open{width:100%;height:100%;overflow:hidden}.pay-now-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}.pay-now-overlay.active{display:block}.pay-now-overlay-inner{width:95%;max-width:620px;background-color:#fff;margin:10px auto}.pay-now-overlay-trigger img{width:20px!important}.pay-now-overlay-trigger{position:relative;top:-4px;margin-left:5px}.pay-now-overlay-close-icon{cursor:pointer;position:absolute;top:17px;right:20px}.modal-body{padding:25px 30px}.pay-now-overlay-inner h2{margin-top:0;font-size:20px;line-height:24px}.pay-now-overlay-inner ul{margin:0 0 0 20px;padding:0}.pay-now-overlay-inner li{margin:0 0 10px;padding:0;font-size:15px;line-height:18px}'

/*-- Global --*/
if(!$("body").hasClass('mm-active')){
    $("body").addClass('mm-active');
    var cssFromJS = '';
    var el = document.createElement('style');

    function addcss(css){
             var head = document.getElementsByTagName('head')[0];
             var s = document.createElement('style');
             s.setAttribute('type', 'text/css');
             if (s.styleSheet) {   // IE
                     s.styleSheet.cssText = css;
             } else {                // the world
                     s.appendChild(document.createTextNode(css));
             }
             head.appendChild(s);
        }

    // heather's new CSS for maxy sitewide js called h0020CSS 
    for (var name in window.h0020CSS) {
                addcss(window.h0020CSS[name]);
    };

    // heather's new CSS for CSS in January 2019
    addcss(window.newCSS['global']);

    $("body").append('<div id="MMActive"></div>');

    $.initialize(".lb-content-box .rd-veh-image", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $(this).find('img').upsizeCarImage({
                carName: $(this).closest('.rd-veh-details').find('.rd-veh-infos strong').text()
            });
        }
    });

    $.initialize(".lb-foreground-cont #cbGoldMemberForm", function(){
        $(this).find('#closeBtn').trigger('click');
    });

    $.initialize("#rental-policy-links, #bookableImpInfContentArea", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $(this).wrapInner('<div class="rental-policy-links-wrapper"></div>');
        }
    });

    $("body").on( "click", ".rental-links-header,#important #important-information-toggle,#important .terms .terms h2,.expandable-section-btn", function(){
        $(this).toggleClass('inactive');
        if($(this).closest("#important-information-container").length > 0){
            $(this).closest('#important-information-container').find( ".rental-policy-links-wrapper" ).stop(true, false).slideToggle( 600, function(){
                $(this).css('height','auto');
            });
        }else if($(this).closest('.terms').find('#bookableTermsBox').length > 0){
            $(this).closest('.terms').find('#bookableTermsBox').stop(true, false).slideToggle( 600, function(){
                $(this).css('height','auto');
            });
        }else if($(this).closest('.expandable-section').length > 0){
            $(this).closest('.expandable-section').find('.expandable-section-content').stop(true, false).slideToggle( 600, function(){
                $(this).css('height','auto');
            });
        }else{
            $(this).closest('#rental-links').find( ".rental-policy-links-wrapper" ).stop(true, false).slideToggle( 600, function(){
                $(this).css('height','auto');
            });
        }
    });
    $.initialize(".rental-links-header,#important #important-information-toggle", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active').addClass('inactive');
            if($(this).closest("#important-information-container").length > 0){
                $(this).closest('#important-information-container').find( ".rental-policy-links-wrapper" ).hide();
            }else{
                $(this).closest('#rental-links').find( ".rental-policy-links-wrapper" ).hide();
            }
        }
    });
    $.initialize("#steps", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            var foundActive=false;
            t.find('li').each(function(index){
                if(foundActive === false && !$(this).hasClass('current')){
                    $(this).addClass('prev-step');
                }else{
                    $(this).removeClass('prev-step');
                }
                $(this).prepend('Step ');
                $(this).html(function (i, html){
                    return html.replace(".", ":");
                });
                $(this).wrapInner('<div class="step-content"></div>');
                $(this).find('.bar').insertAfter($(this).find('.step-content'));
                if($(this).hasClass('current')){
                    foundActive=true;
                    $(this).closest('ul').before('<div class="step-mobile">'+$(this).text()+'</div>');
                }
            });
        }
    });
    $('#payNowOverlayMM').remove();
    $('body').append('<div class="pay-now-overlay" id="payNowOverlayMM"><div class="pay-now-overlay-inner"><div class="modal-close-row"><div class="modal-close-title">Pay Now & Save!</div><a class="pay-now-overlay-close-icon"><img src="#$(ContentManager:hertz-modal-icon-close.png)!" alt="Close" width="18" height="18"></a></div><div class="modal-body"><h2>Pay in advance to take advantage of our lowest rates. Please note:</h2><ul><li>The card used to make the reservation needs to be presented at the time of rental and must be in the renter’s name.</li><li>Pay Now charges do not include all taxes, location fees, or incidentals while on rent. Those charges will be paid at time of rent.</li><li>Cancellations prior to 24 hours of scheduled pick-up are subject to a $50 cancellation fee.</li><li>Cancellations within 24 hours of scheduled pick-up are subject to a $100 cancellation fee.</li></ul></div></div></div>');
    $("body").on( "mousedown", ".pay-now-overlay", function(e){
        if($(e.target).closest('.pay-now-overlay-inner').length<1){
            $(this).addClass('click-start');
        }
    });
    $("body").on( "mousedown", ".pay-now-overlay-inner", function(){
        $('.pay-now-overlay').removeClass('click-start');
    });
    $("body").on( "click", ".pay-now-overlay.click-start, .pay-now-overlay-close-icon", function(){
        $('#payNowOverlayMM').removeClass('active');
        $('body').removeClass('pay-now-overlay-open');
    });
    $("body").on( "click", ".pay-now-overlay-trigger", function(){
        $('#payNowOverlayMM').addClass('active');
        $('body').addClass('pay-now-overlay-open');
    });
};


var itinerarySection = '<div id="itinerarySection"><div id="itinerarySectionBG"></div><div id="itinerarySectionInner"><div id="itinerarySummary"><div class="itn-sum-row"><div class="itin-sum-col itin-sum-col-left"><div class="itn-sum-row-inner"><div class="itn-sum-col-inner itn-sum-col-inner-left itinerary-clear" id="itineraryPickUpLocation"></div><div class="itn-sum-col-inner itn-sum-col-inner-right itinerary-clear" id="itineraryDropOffLocation"></div></div></div><div class="itin-sum-col itin-sum-col-right"><div class="itn-sum-row-inner-desktop-only"><div class="itn-sum-col-inner-desktop-only itn-sum-col-inner-desktop-only-left itinerary-clear" id="itineraryCarType"></div><div class="itn-sum-col-inner-desktop-only itn-sum-col-inner-desktop-only-right"><div class="itinerary-summary-btn-row"><div class="itinerary-summary-btn-col itinerary-summary-btn-col-left itinerary-clear" id="itineraryNextStep"></div><div class="itinerary-summary-btn-col itinerary-summary-btn-col-right"><a href="javascript:void(0);" id="itineraryExpandBtn"></a></div></div></div></div></div></div></div><div id="itnExpW"><div id="itineraryExpand"><div class="itinerary-expand-row"><div class="itinerary-expand-col itinerary-expand-col-left"><div id="itineraryExpandOverview"><div id="itnExpOverW"><div class="itin-expand-ovrvw-row itin-expand-ovrvw-row-outlined"><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-left" id="itineraryExpandOverviewLeft"></div><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-right" id="itineraryExpandOverviewRight"></div></div><div class="itin-expand-ovrvw-row"><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-left" id="itineraryExpandCarLeft"></div><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-right" id="itineraryExpandCarRight"></div></div><div class="itinerary-expand-full-details" id="itnExpFullDet"></div></div></div></div><div class="itinerary-expand-col itinerary-expand-col-right itinerary-clear" id="itineraryFullDetails"></div></div></div></div></div></div>';

/*-- Itinerary Bar --*/

if(window.location.hash.indexOf("vehicles") > -1 || window.location.hash.indexOf("extras") > -1 || window.location.hash.indexOf("review-and-book") > -1){
    if($("#itinerarySection").length < 1){ //Add Itinerary Bar
        $("#page").prepend(itinerarySection);

        $.initialize("#itinerary-info #rd-main", function(){
        if(window.location.hash.indexOf("vehicles") > -1 || window.location.hash.indexOf("extras") > -1 || window.location.hash.indexOf("review-and-book") > -1){
            if(!$(this).hasClass('mm-active')){
                $(this).addClass('mm-active');
                var ageCDP = $(this).find('.cdpName:contains("204546")');
                if(ageCDP.length>0){
                    ageCDP.html('Promotional Coupon : 204546<br> Estimated total quoted in reservation will not reflect the discount, the discount will be applied at time of rent.');
                }
                $("#itineraryFullDetails").empty();
                $(this).closest('#itinerary-info').removeClass('mm-hide').clone(true).appendTo("#itineraryFullDetails");
                $(this).closest('#itinerary-info').addClass('mm-hide');
                var itnPULoc=$("#itineraryPickUpLocation");
                var itnDOLoc=$("#itineraryDropOffLocation");
                itnPULoc.empty();
                itnDOLoc.empty();
                $("#itnExpFullDet").empty();
                var pickupLocation="";
                var pickupTime="";
                var pickupDate="";
                var dropoffLocation="";
                var dropoffTime="";
                var dropoffDate="";
                var vehicleType="";
                var summarySnippet='<div class="itinerary-summary-city"></div><div class="itinerary-summary-date"></div><div class="itinerary-summary-time"></div>';
                function removeLabel(elementNode){
                    var value="";
                    if(elementNode.length > -1){
                        var newNode=elementNode.clone();
                        newNode.find('label').remove();
                        value=$.trim(newNode.text());
                    }
                    return value;
                }

                function formatSummaryTime(elementValue){
                    var value="";
                    value=elementValue.match(/\d\d:\d\d.*/g);
                    value=value.toString();
                    value=value.replace(/^0+/, '');
                    return value;
                }

                function formatSummaryDate(elementValue){
                    var value="";
                    value=elementValue.split(",");
                    if(value.length >= 2){
                        value=value[1];
                    }
                    return value;

                }

                $(this).find('img.car-info').upsizeCarImage({
                    carName: $(this).find('h1').text()
                });


                if($('#res-itinerary-1 .pickup-location-time .itn-location-container').length > 0){
                    itnPULoc.append(summarySnippet);
                    pickupLocation=removeLabel($('#res-itinerary-1 .pickup-location-time .itn-location-container').first());
                    var pickupTimeFull=removeLabel($('#res-itinerary-1 .pickup-location-time .itn-pickup-time').first());
                    pickupTime=formatSummaryTime(pickupTimeFull);
                    pickupDate=formatSummaryDate(pickupTimeFull);
                    itnPULoc.find('.itinerary-summary-city').text(pickupLocation);
                    itnPULoc.find('.itinerary-summary-date').text(pickupDate);
                    itnPULoc.find('.itinerary-summary-time').text(pickupTime);
                }

                if($('#res-itinerary-1 .return-location-time .itn-location-container').length > 0){
                    itnDOLoc.append(summarySnippet);
                    dropoffLocation=removeLabel($('#res-itinerary-1 .return-location-time .itn-location-container').first());
                    var dropoffTimeFull=removeLabel($('#res-itinerary-1 .return-location-time .itn-return-time').first());
                    dropoffTime=formatSummaryTime(dropoffTimeFull);
                    dropoffDate=formatSummaryDate(dropoffTimeFull);
                    itnDOLoc.find('.itinerary-summary-city').text(dropoffLocation);
                    itnDOLoc.find('.itinerary-summary-date').text(dropoffDate);
                    itnDOLoc.find('.itinerary-summary-time').text(dropoffTime);
                }

                if($('#res-itinerary-1 .itn-same-location .itn-location-container').length > 0){
                    itnPULoc.append(summarySnippet);
                    itnDOLoc.append(summarySnippet);
                    pickupLocation=removeLabel($('#res-itinerary-1 .itn-same-location .itn-location-container').first());
                    dropoffLocation=pickupLocation;
                    var pickupTimeFull=removeLabel($('#res-itinerary-1 .itn-pickup-return-time .itn-pickup-time').first());
                    pickupTime=formatSummaryTime(pickupTimeFull);
                    pickupDate=formatSummaryDate(pickupTimeFull);
                    var dropoffTimeFull=removeLabel($('#res-itinerary-1 .itn-pickup-return-time .itn-return-time').first());
                    dropoffTime=formatSummaryTime(dropoffTimeFull);
                    dropoffDate=formatSummaryDate(dropoffTimeFull);
                    itnPULoc.find('.itinerary-summary-city').text(pickupLocation);
                    itnPULoc.find('.itinerary-summary-date').text(pickupDate);
                    itnPULoc.find('.itinerary-summary-time').text(pickupTime);
                    itnDOLoc.find('.itinerary-summary-city').text(pickupLocation);
                    itnDOLoc.find('.itinerary-summary-date').text(dropoffDate);
                    itnDOLoc.find('.itinerary-summary-time').text(dropoffTime);
                }

                var overviewSnippet='<div class="itin-expand-ovrvw-type"></div><div class="itin-expand-ovrvw-location"></div><div class="itin-expand-ovrvw-date"></div><div class="itin-expand-ovrvw-time"></div>';
                var ininExpL=$("#itineraryExpandOverviewLeft");
                var ininExpR=$("#itineraryExpandOverviewRight");
                ininExpL.empty();
                $("#itineraryExpandOverviewRight").empty();

                if(pickupLocation !== ""){
                    ininExpL.append(overviewSnippet);
                    ininExpL.find('.itin-expand-ovrvw-type').text('Pick-up');
                    ininExpL.find('.itin-expand-ovrvw-location').text(pickupLocation);
                    ininExpL.find('.itin-expand-ovrvw-date').text(pickupDate);
                    ininExpL.find('.itin-expand-ovrvw-time').text(pickupTime);
                }

                if(dropoffLocation !== ""){
                    ininExpR.append(overviewSnippet);
                    ininExpR.find('.itin-expand-ovrvw-type').text('Drop-off');
                    ininExpR.find('.itin-expand-ovrvw-location').text(dropoffLocation);
                    ininExpR.find('.itin-expand-ovrvw-date').text(dropoffDate);
                    ininExpR.find('.itin-expand-ovrvw-time').text(dropoffTime);
                }

                $("#itineraryCarType").empty();

                if($("#rd-main .rd-vehicle .rd-info-left").length > 0){
                    vehicleType=$("#rd-main .rd-vehicle .rd-info-left").prev().text();
                    var vehicleTypeSplit=vehicleType.split('(');
                    vehicleType=vehicleTypeSplit[0].toString();

                    if(vehicleType.indexOf('Passenger') > 0){
                        vehicleTypeSplit=vehicleType.split('Passenger');
                        vehicleType=vehicleTypeSplit[1].toString();
                    }

                    if(vehicleType.indexOf('2 or 4 Door') > 0){
                        vehicleTypeSplit=vehicleType.split('2 or 4 Door');
                        vehicleType=vehicleTypeSplit[0].toString();
                    }

                    if(vehicleType.indexOf('2 or 4 door') > 0){
                        vehicleTypeSplit=vehicleType.split('2 or 4 door');
                        vehicleType=vehicleTypeSplit[0].toString();
                    }

                    if(vehicleType.indexOf('2 or 4 dr.') > 0){
                        vehicleTypeSplit=vehicleType.split('2 or 4 dr.');
                        vehicleType=vehicleTypeSplit[0].toString();
                    }

                    vehicleType=vehicleType.replace("4WD/AWD", "");

                    if(vehicleType.indexOf("Reserve this Exact Model") > -1){
                        vehicleType=$("#rd-main .rd-vehicle .rd-info-left strong").first().text();
                    }

                    $("#itineraryCarType").append('<div class="itinerary-summery-type">'+vehicleType+'</div>');
                }

                if($("#rd-rental-total .rd-subtotal").length > 0){
                    var cost=$("#rd-rental-total .rd-subtotal").first().text();
                    var costHTML="";
                    if(cost.indexOf(' ') > 0){
                        var costSplit=cost.split(' ');
                        for(var i=0; i < costSplit.length; i++){
                            if(i==1){
                                costHTML += '<span class="itinerary-currency">';
                            }
                            costHTML += costSplit[i];
                            if(i==costSplit.length - 1){
                                costHTML += '</span>';
                            }
                        }

                    }else{
                        costHTML=cost;
                    }
                    $("#itineraryCarType").append('<div class="itinerary-summery-cost">'+costHTML+'</div>')
                }

                $("#itineraryNextStep").empty();
                if($("#extras .controls button.primary").length > -1 && $("#steps li:nth-child(3)").hasClass('current')){
                    if(window.location.hash.indexOf("vehicles")==-1){
                        $("#extras .controls button.primary").first().clone().addClass('extrasBtn').appendTo("#itineraryNextStep");
                        if($(".extrasBtn").text()=="Submit"){ $(".extrasBtn").text('Continue') }
                        $("#extras .controls button.primary").first().closest('.controls').addClass('btn-cloned');
                    }
                }else if($("#bookableSubmit").length > -1 && $("#steps li:nth-child(4)").hasClass('current')){
                    if(window.location.hash.indexOf("vehicles")==-1){
                        $("#bookableSubmit").first().clone().addClass('bookableSubmitBtn').attr('id','').text("Reserve").appendTo("#itineraryNextStep");
                    }
                }

                $("#itnExpFullDet").empty();
                $("#res-itinerary-1").clone().appendTo($("#itnExpFullDet"));
                $("#itnExpFullDet .itn-edit-link").removeClass('itn-edit-link').addClass('itn-edit-link-proxy');
                $("#itnExpFullDet .itn-edit-cont").insertAfter($("#itnExpFullDet .click-indicator").first());
                $("#itnExpFullDet .itn-loc-detail-link").removeClass('itn-loc-detail-link').addClass('itn-loc-detail-link-proxy');
                $("#itnExpFullDet .loc-view-link1 .itn-loc-detail-link-proxy").last().addClass('itn-loc-detail-link-proxy-last');
                $(this).find('.rd-vehicle figure img').upsizeCarImage({
                    carName: $(this).find('.rd-vehicle .rd-info-left').text()
                });

                $("#itineraryExpandCarRight").empty();
                $(this).find('.rd-vehicle figure img').clone().appendTo("#itineraryExpandCarRight");

                $("#itineraryExpandCarLeft").empty();

                if(vehicleType !== ""){
                    $("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-headline">Vehicle</p>');
                    $("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-type">'+vehicleType+'</p>');
                    $("#itineraryExpandCarRight").closest('.itin-expand-ovrvw-row').show();
                }else{
                    $("#itineraryExpandCarRight").closest('.itin-expand-ovrvw-row').hide();
                }

                var expandVehicleClass="";
                if($(this).find('.rd-info-left').length > 0){
                    expandVehicleClass=$(this).find('.rd-info-left').first().text();
                    if(expandVehicleClass.indexOf(')') > -1){
                        var expandVehicleClassSplit=expandVehicleClass.split(')');
                        expandVehicleClass=expandVehicleClassSplit[1];
                    }
                    $("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-class">'+expandVehicleClass+'</p>');
                }

                if($(this).find('.rd-edit-link').length > 0){
                    $("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-details"><a class="itinerary-expand-vehicle-link-proxy">'+$(this).find(".rd-edit-link").first().text()+'</a></p>');
                }

                $("#itineraryFullDetails").find(".rd-edit-link").first().removeClass('rd-edit-link').addClass('itinerary-expand-vehicle-link-proxy');
                $("#itineraryFullDetails").find(".rd-opt-detail-link1 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-open-proxy');
                $("#itineraryFullDetails").find(".rd-opt-detail-link2 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-close-proxy');

                if($('#reviewAndBookCost #rd-main').length > 0){
                    $('#reviewAndBookCost #rd-main').empty();
                    $('#res-bookable-page').find('#itinerary-info').clone(true).removeClass('mm-hide').appendTo("#reviewAndBookCost #rd-main");
                    $("#reviewAndBookCost .rd-opt-detail-link1 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-open-proxy');
                    $("#reviewAndBookCost .rd-opt-detail-link2 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-close-proxy');

                    var summaryCostSplit=$('#rdReviewAndBookSummary').find('.rd-subtotal').text().split(' ');
                    if(summaryCostSplit.length > 1){
                        $('#rdReviewAndBookSummary').find('.rd-subtotal').html(summaryCostSplit[0]+' <span class="review-and-book-summary-currency">'+summaryCostSplit[1]+'</span>');
                    }
                    $('#reviewAndBookCost #rd-more .rd-info').html(function (i, html){
                        return html.replace('Rate is guaranteed.  Taxes, fees and extras, if not included in the Rate, are subject to change.', '');
                    });

                    $('#reviewAndBookCost #rd-rental-total .rd-subtotal').html(function (i, html){
                        return html.replace('USD', '<span class="bookable-currency">USD</span>');
                    });

                    if($('#reviewAndBookCost #rd-pay-now .rd-title .pay-now-overlay-trigger').length<1){
                        $('#reviewAndBookCost #rd-pay-now .rd-title').first().append('<a href="javascript:void(0);" class="pay-now-overlay-trigger"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');
                    }
                }
            }
        }
    });

    $.initialize("#itinerary-info #itinerary-content", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            if($(this).closest('#itinerary-info').find('#rd-main').length < 1){
                $(this).closest('#itinerary-info').append('<div id="rd-main"></div>');
            }
        }
    });
    }else{
        $("#itinerarySection").removeClass('inactive');
    }
}else{ //Page Without Itinerary Bar
    if($("#itinerarySection").length > 0){ //Itinerary Bar Added Previously
        $("#itinerarySection").addClass('inactive');
    }
}

if(!$("body").hasClass('mm-itinerary-active')){
    $("body").addClass('mm-itinerary-active');

    $("body").on( "click", "#itineraryExpandBtn", function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('#itinerarySectionBG').addClass('active');
        }else{
            $('#itinerarySectionBG').removeClass('active');
        }
        $( "#itineraryExpand" ).stop(true, false).slideToggle(600);
    });

    $("body").on( "click", "#itinerarySectionBG", function(){
        $("#itineraryExpandBtn").trigger('click');
    });

    $("body").on( "click", "#itnExpFullDet .itn-edit-link-proxy", function(event){
        $("#res-itinerary-1 .itn-edit-link").first().trigger('click');
        event.stopPropagation();

    });
    $("body").on( "click", "#itnExpFullDet .itn-loc-detail-link-proxy", function(event){
        if($(this).hasClass('itn-loc-detail-link-proxy-last')){
            $("#res-itinerary-1 .itn-loc-detail-link").last().trigger('click');
        } else {
            $("#res-itinerary-1 .itn-loc-detail-link").first().trigger('click');
        }
        event.stopPropagation();
    });

    $("body").on( "click", ".itinerary-expand-vehicle-link-proxy", function(){
        $("#itineraryExpandBtn").first().trigger('click');
        $("#rd-rate .rd-vehicle .rd-edit-link").first().trigger('click');
    });

    $("body").on( "click", ".rd-view-options-link-open-proxy", function(){
        $(this).closest('.rd-opt-detail-link1').hide();
        $(this).closest('.rd-info').find('.rd-opt-detail-link2').show();
        $(this).closest('.rd-info').find('.rd-optionals').show();

    });

    $("body").on( "click", ".rd-view-options-link-close-proxy", function(){
        $(this).closest('.rd-opt-detail-link2').hide();
        $(this).closest('.rd-info').find('.rd-opt-detail-link1').show();
        $(this).closest('.rd-info').find('.rd-optionals').hide();

    });

    $("body").on( "click", "#itineraryNextStep .extrasBtn", function(){
        $("#extras .controls button.primary").first().trigger('click');
    });

    $("body").on( "click", "#itineraryNextStep .bookableSubmitBtn", function(){
        $("#bookableSubmit").first().trigger('click');
    });

    $("body").on( "click", "#res-bookable-page #bookableSubmit", function(){
        if($('#termsAndConditionsAccepted').length > 0) {
            if($('#termsAndConditionsAccepted').prop("checked") === false) {
                setTimeout(function(){
                    $('html, body').animate({
                                    scrollTop: $("label[for='termsAndConditionsAccepted']").closest('.bookable-terms-and-conditions').offset().top-$('.header-primary').first().height()-15
                            });
                        }, 500);
            }
        }
    });
}


/*-- Vehicles Page --*/

if(window.location.hash.indexOf("vehicles") > -1){
if(!$("body").hasClass('mm-vehicle-page-active')){
    $("body").addClass('mm-vehicle-page-active');

    window.updateDiscountDisplay=function(){
        if($('.sort-promo-wrapper').length>0){
            $('.sort-promo-wrapper').empty();
            var discountElem=$('.itn-discounts').first();
            var discountElemTxt = discountElem.html();
            if(discountElem.text().indexOf('No Affiliations')==-1){
                var pluralDiscounts="discount is";
                if(discountElem.text().split(":").length > 2){
                    pluralDiscounts="discounts are";
                }
                var discountCopy = 'Your '+pluralDiscounts+' included in the rates below.';
                if(discountElemTxt.indexOf('204546')>-1) {
                    discountCopy = 'Estimated total quoted in reservation will not reflect the discount, the discount will be applied at time of rent.';
                }
                $('.sort-promo-wrapper').append('<div class="vehicle-promo-code-recap"><h6>'+discountElemTxt+'</h6><p>'+discountCopy+'</p></div>');
                $('.vehicle-promo-code-recap').html(function (i, html){
                    html=html.replace(/\:/g, ' Applied:');
                    return html;
                });
                $('.sort-col-left .sort-content').empty();
                $('.sort-promo-wrapper').clone().appendTo($('.sort-col-left .sort-content'));
            }
        }
    }

    window.resizeVechGrid = function() {

        if($('#res-vehicles-page').length > 0) {
            $('.vehicle figure').css('min-height', '');
            $(".vehicle-grid").each(function(index) {
                var height = 0;
                var rowPos = 0;
                var hasBanner = false;
                var p = $(this);
                p.find(".vehicle:not('.filter-inactive')").each(function(index) {
                    $(this).addClass('mm-vehicle-grid-resize');
                    var curHeight = $(this).find('.vech-d-view figure').outerHeight();
                    if (curHeight > height) {
                        height = curHeight;
                    }

                    if(rowPos == 2) {
                        if(height > 0) {
                            p.find('.mm-vehicle-grid-resize figure').css('min-height', height);
                        }
                        if(hasBanner === true) {
                            p.find(".mm-vehicle-grid-resize").each(function(index) {
                                if ($(this).find('.vehicle-tag').length < 1) {
                                    $(this).addClass('vehicle-row-with-banner')
                                }
                            });
                        }
                        p.find('.mm-vehicle-grid-resize').removeClass('mm-vehicle-grid-resize');
                        rowPos = 0;
                        height = 0;
                        hasBanner = false;
                    }

                    if($(this).find('.vehicle-tag').length > 0) {
                        hasBanner = true;
                    }

                    rowPos++;
                });
            });
        }
        $('.mm-vehicle-grid-resize').removeClass('mm-vehicle-grid-resize');
    }

    var resizeTimer;
    $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        window.resizeVechGrid();
      }, 500);
    });

 $.initialize("#vehicleGrid1 .banner", function(){
    $(this).insertAfter("#vehicleGrid1");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        window.resizeVechGrid();
    }, 500);
  });

    $.initialize("#vehicles-list", function(){
    if(!$(this).hasClass('mm-vehicle-brg')){
        $(this).addClass('mm-vehicle-brg');

        if($('#brgPromo').length < 1 && $('#brgPromoM').length < 1){
            $('body').append('<div id="brgPromo"></div>');
            $(this).prepend('<div id="brgPromoM"></div>');
            $(this).find('.sort-control-wrapper').before('<div id="brgPromoT"></div>');

            $('#brgPromo,#brgPromoM,#brgPromoT').append('<div class="brg-promo-inner"><div class="brg-content"></div></div>');
            $('.brg-content').html('<div class="brg-promo-title"><img src="#$(ContentManager:our-best-rate-guaranteed-badge.png)!" alt="Our Best Rate Guaranteed"></div><div class="brg-promo-details">If you find a lower rate on a Hertz car rental online, we will match the base rate and give you 10% off your rental.<br> <a href="https://www.hertz.com/rentacar/rental-car-deals/best-rate">Learn more.</a></div>');
            $('#brgPromo .brg-promo-inner').first().prepend('<div class="brg-promo-close"><a href="javascript:void();"><img src="#$(ContentManager:hertz-icon-close.png)!" alt="Close" width="14" height="14"></a></div>');

            function getCookie(name) {
              var value = "; " + document.cookie;
              var parts = value.split("; " + name + "=");
              if (parts.length == 2) return parts.pop().split(";").shift();
            }

            var brgClosed = getCookie('mm-h0047-brg-closed');

            if(brgClosed == 'closed') {
                $('#brgPromo').addClass('disabled');
            }
        }

        setTimeout(function() {
            $('#brgPromo').addClass('active');
        }, 3000);
    }
    });
    $("body").on( "click", ".brg-promo-close a", function(){
        document.cookie('mm-h0047-brg-closed=closed');
        $('#brgPromo').removeClass('active');
    });
    $.initialize("#cancel-fee-overlay", function(){
        $(this).find('button.primary').trigger('click');
        setTimeout(function() {
            $('body').removeClass('hide-modals');
        }, 1000);
    });
    $("body").on( "click", ".pay-now-button", function(){
        $('body').addClass('hide-modals');
        setTimeout(function() {
            $('body').removeClass('hide-modals');
        }, 3000);
    });

    $.initialize(".vehicle", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            $('.vehicle').last().addClass('last-vehicle');

            //Modifications that apply to all views
            t.find('img.car-info').upsizeCarImage({
                carName: t.find('h1').text()
            })
            t.find('button:contains("Save $ Pay Now")').text('Pay Now').addClass('pay-now-button');
            t.find('.pay-now-button').closest('.price-wrapper').find('.rate').append('<a href="javascript:void(0);" class="pay-now-overlay-trigger"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');

            if(t.find('.mileage').length > 0){
                t.find('.details .wrapper ul').append('<li>'+t.find('.mileage').first().text()+'</li>');
                t.find('.price-wrapper .mileage').hide();
            }

            var pricingRate=t.find('.price-wrapper .rate').first().text();
            pricingRate=pricingRate.replace("Per Week", "/ week");
            t.find('.price-wrapper .rate').first().text(pricingRate);
            t.find(".show-rate-details, .approx-total-price").each(function(index){
                var label=$(this).find('span').clone();
                $(this).find('span').remove();
                $(this).prepend(label);
                var html=$(this).html();
                html=html.replace(")", "");
                html=html.replace("(", "");
                $(this).html(html);
            });
            t.find(".approx-total-price").each(function(index){
                $(this).find('.approx').prependTo($(this).find('.show-rate-details'));
                if($(this).find('a').length < 1){
                    $(this).addClass('no-link');
                }
            });

            t.wrapInner('<div class="vech-d-view"></div>');

            var overlay = $('<div class="vehicle-overlay-outer"><div class="vehicle-overlay-wrap"><div class="vehicle-overlay-header"><div class="vehicle-overlay-headline"></div><div class="vehicle-overlay-subheadline"></div><a href="javascript:void(0);" class="vehicle-overlay-close"><img src="#$(ContentManager:hertz-icon-close.png)!" width="20"></a></div><div class="vehicle-overlay-body-wrapper"><div class="vehicle-overlay-body"></div></div><div class="vehicle-overlay-footer"></div></div></div>');

            //Create Overlay
            var overlayBody=overlay.find('.vehicle-overlay-body');
            var overlayFooter=overlay.find('.vehicle-overlay-footer');
            var headlineText=t.find('.vehicle-type').text();
            var subHeadline=t.find('.vehicle-header').clone();
            subHeadline.find('.vehicle-type').remove();
            var subHeadlineText=subHeadline.text();
            overlay.find('.vehicle-overlay-headline').text(headlineText);
            overlay.find('.vehicle-overlay-subheadline').text(subHeadlineText);
            overlay.find('.vehicle-overlay-subheadline').append(t.find('h1').clone());
            overlay.find('.vehicle-overlay-subheadline').append(t.find('.similar-info').clone(true));
            overlayBody.append(t.find('img.car-info').clone());

            overlayBody.append('<div class="vehicle-icon-row"><div class="vehicle-icon-col vehicle-icon-col-1"><div class="vehicle-icon-set">Seats</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-seats"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-2"><div class="vehicle-icon-set">Suitcases</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-suitcases"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-3"><div class="vehicle-icon-set">MPG</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-mpg"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-4"><div class="vehicle-icon-set">Doors</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-doors"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-5"><div class="vehicle-icon-set">Transmission</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-transmission-automatic"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-6">Drive<div class="vehicle-icon-set"></div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-awd"></div></div></div></div>');

            overlayBody.append(t.find('.details .wrapper ul').clone());
            overlayBody.append(t.find('.vehicle-amenities ul').clone());
            overlayBody.append(t.find('.includes-list').clone(true));
            overlayBody.append(t.find('.disclaimer').clone());
            overlayFooter.append(t.find('.pricing').clone(true));
            overlay.prependTo(t);
            //Modify standard view
            t.find('.vech-d-view figure').wrap('<div class="vehicle-col-info"></div>');
            t.find('.vech-d-view .pricing').wrap('<div class="vehicle-col-pricing"></div>');
            t.find('.vech-d-view .vehicle-info .car-info').appendTo(t.find('.vehicle-col-image'));
            t.find('.vech-d-view .pricing').wrapInner('<div class="vehicle-button-row"></div>');

            if(t.find('.multiple').length > 0){
                t.find('.multiple:nth-child(1)').addClass('multiple-pricing-left');
                t.find('.multiple:nth-child(2)').addClass('multiple-pricing-right');
            }

            var vehicleType=t.find(".vehicle-header .vehicle-type").text();
            var vehicleTypeSplit=vehicleType.split('(');
            vehicleType=vehicleTypeSplit[0].toString();
            vehicleType=vehicleType.replace('2 or 4 dr.', '');
            vehicleType=vehicleType.replace('2 or 4 Door', '');
            vehicleType=vehicleType.replace('2 or 4 door', '');
            vehicleType=vehicleType.replace('4 Dr.', '');


            var vehicleDetails=t.find(".vech-d-view h1").text();
            if(vehicleDetails.indexOf(')') > -1){
                var vehicleDetailsSplit=vehicleDetails.split(')');
                vehicleDetails=vehicleDetailsSplit[1];
            }

            if(vehicleType !== ""){
                t.find('.vehicle-col-info .details').prepend('<p class="vehicle-type-headline">'+vehicleType+'</p>');
                t.find(".vech-d-view h1").text(vehicleDetails);
            }else{
                t.find('.vehicle-col-info .details').prepend('<p class="vehicle-type-headline">'+vehicleDetails+'</p>');
            }
            t.find('.vehicle-col-info figcaption').prependTo($(this).find('.vehicle-col-info figure'));
            t.find(".vech-d-view .vehicle-type-headline").append('<a href="javascript:void(0);" class="vehicle-full-information-link"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');

            var selText = "Your Preferred Vehicle";

            if($('#loginLink').length>0){
                selText = "Selected Vehicle";
            }

            if(t.find('.selected').length > 0){
                t.find('.vehicle-col-info .details').prepend('<div class="vehicle-tag vehicle-tag-recommended">'+selText+'</div>');
            }

            t.find(".vehicle-header").hide();
            t.find('.vech-d-view .pricing').prepend('<div class="vehicle-icon-row"><div class="vehicle-icon-col vehicle-icon-col-1"><div class="vehicle-icon-set">Seats</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-seats"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-2"><div class="vehicle-icon-set">Suitcases</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-suitcases"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-3"><div class="vehicle-icon-set">MPG</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-mpg"></div></div></div></div>');

            //Seats Icon
            var vechSel1=".vech-d-view .vehicle-icon-col-";
            var vechSel2=".vehicle-overlay-outer .vehicle-icon-col-";
            var iconTxt="";
            if(t.find('.vech-d-view .icons-gray_people').length > 0){
                iconTxt=t.find('.vech-d-view .icons-gray_people').closest('li').text();
                iconTxt=iconTxt.match(/\d+/);
                iconTxt=iconTxt.toString();
                t.find(vechSel1+'1 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'1 .vehicle-icon-value').append(iconTxt);
            }

            if(iconTxt==""){
                t.find(vechSel1+'1').addClass('icon-inactive');
                t.find(vechSel2+'1').addClass('icon-inactive');
            }

            //Luggage Icon
            iconTxt="";
            if(t.find('.vech-d-view .icons-gray_suitcase').length > 0){
                iconTxt=t.find('.vech-d-view .icons-gray_suitcase').closest('li').text();
                iconTxt=iconTxt.match(/\d+/g);
                var suitcaseCount=0;
                for(var i=0; i < iconTxt.length; i++){
                    suitcaseCount += parseInt(iconTxt[i]);
                }
                if(suitcaseCount > 0){
                    t.find(vechSel1+'2 .vehicle-icon-value').append(suitcaseCount);
                    t.find(vechSel2+'2 .vehicle-icon-value').append(suitcaseCount);
                }
            }

            if(iconTxt==""){
                t.find(vechSel1+'2').addClass('icon-inactive');
                t.find(vechSel2+'2').addClass('icon-inactive');
            }

            //MPG Icon
            iconTxt="";
            if(t.find('.vech-d-view .icons-fuel').length > 0){
                iconTxt=t.find('.vech-d-view .icons-fuel').closest('li').text();
                iconTxt=iconTxt.match(/\d+/);
                iconTxt=iconTxt.toString();
                t.find(vechSel1+'3 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'3 .vehicle-icon-value').append(iconTxt);
            }

            if(iconTxt==""){
                t.find(vechSel1+'3').addClass('icon-inactive');
                t.find(vechSel2+'3').addClass('icon-inactive');
            }

            //Doors Icon
            iconTxt="";
            if(t.find('.vech-d-view .vehicle-type-headline:contains("2 or 4 dr.")').length > 0 || t.find('.vech-d-view .vehicle-type-headline:contains("2 or 4 door")').length > 0 || t.find('.vech-d-view .vehicle-type-headline:contains("2 or 4 Door")').length > 0){
                iconTxt='2-4';
                t.find(vechSel1+'4 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'4 .vehicle-icon-value').append(iconTxt);
            }else if(t.find('.vech-d-view .vehicle-type-headline:contains("4 Dr.")').length > 0){
                iconTxt='4';
                t.find(vechSel1+'4 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'4 .vehicle-icon-value').append(iconTxt);
            }

            if(iconTxt==""){
                t.find(vechSel1+'4').addClass('icon-inactive');
                t.find(vechSel2+'4').addClass('icon-inactive');
            }

            //Transmission Icon
            iconTxt="";
            if(t.find('.vehicle-overlay-outer .transmission:contains("A")').length > 0){
                iconTxt='Auto';
                t.find(vechSel1+'5 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'5 .vehicle-icon-value').append(iconTxt);
            }else if(t.find('.vehicle-overlay-outer .transmission:contains("M")').length > 0){
                iconTxt='Manual';
                t.find(vechSel1+'5 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'5 .vehicle-icon-value').append(iconTxt);

                t.find('.mm-v-icn-transmission-automatic').removeClass('mm-v-icn-transmission-automatic').addClass('mm-v-icn-transmission-manual');
            }

            if(iconTxt==""){
                t.find(vechSel1+'5').addClass('icon-inactive');
                t.find(vechSel2+'5').addClass('icon-inactive');
            }
            //AWD Icon
            iconTxt="";
            if(t.find('.vech-d-view .vehicle-type-headline:contains("4WD")').length > 0 || t.find('.vech-d-view .vehicle-type-headline:contains("AWD")').length > 0){
                iconTxt='AWD';
                t.find(vechSel1+'6 .vehicle-icon-value').append(iconTxt);
                t.find(vechSel2+'6 .vehicle-icon-value').append(iconTxt);
            }

            if(iconTxt==""){
                t.find(vechSel1+'6').addClass('icon-inactive');
                t.find(vechSel2+'6').addClass('icon-inactive');
            }

            var sipp = t.find('.vehicle-header').first().html();

            sipp = $.trim(sipp.split('</span>')[1]);
            if(sipp.length !== 4){
              sipp = t.find('.vehicle-header span').first().html();
              sipp = sipp.match(/[A-Z]{4}$/g);
              if (sipp !== null) {
                 sipp = sipp[0];
              }
            }
            t.attr('data-sipp', sipp);

            var vehicleCollection = '';
            if(t.find('.icons-prestige_sm').length>0){
              vehicleCollection = 'prestige';
            } else if(t.find('.icons-adrenaline_sm').length>0){
              vehicleCollection = 'adrenaline';
            } else if(t.find('.vehicle-type-headline').first().text().indexOf('DREAM')>0){
              vehicleCollection = 'dream';
            }
            if(vehicleCollection !== '') {
              t.attr('data-collection', vehicleCollection);
            }

            var vehicleExactModel = 'false';
            if(t.find('.or-similar').length>0){
              vehicleExactModel = 'true';
            }
            t.attr('data-similar', vehicleExactModel);

            t.find('.price-wrapper').each(function( index ) {
              if($(this).find('span:contains("USD")').length > 0) {
                $(this).find('span:contains("USD")').hide();
                $(this).find('strong.price').prepend('$');
              }
              $(this).find('span:contains("Per Week")').html(function(i, html) {
                return html.replace("Per Week", "/ week");
              });
            });
            if($('#vehicleGrid1').length < 1 ) {
                $('#vehicles-list').find('.sort').first().after('<div class="vehicle-grid" id="vehicleGrid1"></div>');
            }
            if($('#vehicleGrid2').length < 1 ) {
                if($('#vehicles-list').find('.banner').length > 0) {
                    $('#vehicles-list').find('.banner').first().after('<div class="vehicle-grid" id="vehicleGrid2"></div>');
            } else {
                    $('#vehicleGrid1').after('<div class="vehicle-grid" id="vehicleGrid2"></div>');
                }
            }
            if($('#vehicleGrid1').hasClass('vehicle-set') && $('#vehicleGrid2').length > 0 ) {
                t.appendTo('#vehicleGrid2');
            } else {
                t.appendTo('#vehicleGrid1');
            }
            if($('#vehicleGrid1 .vehicle').length > 5) {
                $('#vehicleGrid1').addClass('vehicle-set');
            }
            if(t.hasClass('last-vehicle')){
                setTimeout(window.updateDiscountDisplay,500);
                $('.vehicle-grid').each(function( index ) {
                    var checkLength = $(this).find(".vehicle:not('.filter-inactive')").length+1;
                    if( (checkLength % 3) === 0 ) {
                        $(this).append('<div class="vehicle-grid-last-line"></div>');
                    }
                });
                window.resizeVechGrid();
            }
        }
    });

    $.initialize("#vehicles-list .banner", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            $('#mmVehBanner').remove();
            t.find('.gptAdBlock').hide().after('<div id="mmVehBanner"><img src="#$(ContentManager:Banner.jpg)!" alt="24/7 Peace of Mind"></div>');
        }
    });

}
if(!$("#vehicles-list .sort").hasClass('mm-active')){
    $.initialize("#vehicles-list .sort", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            if(t.find('.sort-row').length < 1){
                t.prepend('<div class="sort-row"><div class="sort-col sort-col-left"><div class="sort-content"></div><div class="sort-control-wrapper"></div></div><div class="sort-col sort-col-right"><div class="sort-promo-wrapper"></div></div></div>');
            }
            var colL=t.find('.sort-col-left');
            var colLC=colL.find('.sort-content');
            colLC.empty();
            colL.find('.sort-promo-wrapper').empty();

            $('.mm-mobile-vehicle-headline').remove();

            if(t.find('.sort-header').length > 0){
                t.find('.sort-header').appendTo(colLC);
            }else{
                var title=$("#steps li:nth-child(2)").text();
                title=title.split(':');
                colLC.append('<div class="sort-header">'+title[title.length-1]+'</div>');
            }
            $('#res-vehicles-page .rate-message-header').appendTo(colLC);
            window.updateDiscountDisplay();
            if(t.find('.vehicle-sort-wrap').length < 1){
                t.find('.sort-control-wrapper').append('<div class="vehicle-sort-wrap"><label for="vehicleSortSelect">'+t.find('.controls .label').text()+'</label><select id="vehicleSortSelect"></select></div>');
                $('#vehicleSortSelect').append($('<option>', { value: 0, text: ''}));
                t.find('.sort-arrows a').each(function(index){
                    var defaultSelected=false;
                    if(window.location.hash.indexOf("vehicles/sort/size/") > -1 && $(this).attr('class')=='size'){
                        defaultSelected=true;
                    }else if(window.location.hash.indexOf("vehicles/sort/price/") > -1 && $(this).attr('class')=='price'){
                        defaultSelected=true;
                    }
                    if(defaultSelected === false){
                        $('#vehicleSortSelect').append($('<option>', { value: $(this).attr('class'), text: $(this).text()}));
                    }else{
                        $('#vehicleSortSelect').append($('<option>', { value: $(this).attr('class'), text: $(this).text(), selected: true}));
                    }
                });
            }

            t.addClass('mm-desktop-headline mm-desktop-vehicle-headline');
            t.clone(true).addClass('mm-mobile-headline').addClass('mm-mobile-vehicle-headline').removeClass('mm-desktop-vehicle-headline').removeClass('mm-desktop-headline').insertBefore("#res-vehicles-page #steps");
            $('.mm-mobile-vehicle-headline .sort-col-right, .mm-mobile-vehicle-headline .display-count, .mm-mobile-vehicle-headline .sort-control-wrapper, .mm-mobile-vehicle-headline .sort-promo-wrapper').remove();
        }
    });
}

$("body").on( "click", ".vehicle-full-information-link", function(event){
    $('body').addClass('vehicle-overlay-open');
    $(this).closest('.vehicle').find('.vehicle-overlay-outer').addClass('active');
});

$("body").on( "click", ".vehicle-overlay-outer, .vehicle-overlay-close", function(){
    if( (!$(event.target).hasClass("vehicle-overlay-wrap") && $(event.target).closest(".vehicle-overlay-wrap").length < 1) || $(event.target).hasClass("vehicle-overlay-close") || $(event.target).closest(".vehicle-overlay-close").length > 0){
        if($(this).closest(".vehicle-overlay-outer").length > 0){
            $(this).closest(".vehicle-overlay-outer").removeClass('active');
        }else{
            $(this).removeClass('active');
        }
        $('body').removeClass('vehicle-overlay-open');
    }
});

$("body").on( "change", "#vehicleSortSelect", function(event){
    if($(this).val() !== ""){
        $("#vehicles-list .sort").find('a.'+$(this).val()).trigger('click');
    }else{
        if($('#vehicleSortSelect .controls .reset').length > 0){
            $('#vehicleSortSelect .controls .reset').trigger('click');
        }
    }
});

} //End Vehicles Page


/*-- Ancillaries Page --*/

if(window.location.hash.indexOf("extras") > -1){
if(!$("body").hasClass('mm-ancillaries-page-active')){
    $("body").addClass('mm-ancillaries-page-active');

    $.initialize(".lb-content-box .extra-overlay", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            var title = $(this).closest('.lb-foreground-cont').find('section').first().text();
            var container = $(".extras-item-details h3:contains('"+title+"')").first().closest('article');
            if(container.length>0){
                var img = container.find('.image img').attr('src');
                $(this).find('figure img').first().attr('src',img);
            }

        }
    });
    window.mmCheckmark = '<svg class="mm-checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path class="mm-checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.9" fill="none"></path></svg>';

    window.checkVAS=function (){
        var madeUpdate = false;
        $('.extras-item-details.mm-active').each(function(index){
            if($(this).find('.checkbox-selector').length>0){
                if($(this).find('input[type=checkbox]').is(':checked') && $(this).find('.mm-checkmark').length<1){
                    $(this).find('.checkbox').append(window.mmCheckmark);
                    if($(this).hasClass('featured-vas-default-ldw')){//H0040 Support
                        $('.mm-featured-vas-ldw').find('input[type=checkbox]').prop("checked", true);
                        $('.mm-featured-vas-ldw').find('.checkbox').append(window.mmCheckmark);
                    }else if($(this).hasClass('featured-vas-default-sirius')){
                        $('.mm-featured-vas-sirius').find('input[type=checkbox]').prop("checked", true);
                        $('.mm-featured-vas-sirius').find('.checkbox').append(window.mmCheckmark);
                    }else if($(this).hasClass('featured-vas-default-fpo')){
                        $('.mm-featured-vas-fpo').find('input[type=checkbox]').prop("checked", true);
                        $('.mm-featured-vas-fpo').find('.checkbox').append(window.mmCheckmark);
                    }
                    madeUpdate = true;
                } else if(!$(this).find('input[type=checkbox]').is(':checked') && $(this).find('.mm-checkmark').length>0) {
                    $(this).find('.mm-checkmark').remove();
                    if($(this).hasClass('featured-vas-default-ldw')){//H0040 Support
                        $('.mm-featured-vas-ldw').find('input[type=checkbox]').prop("checked", false);
                        $('.mm-featured-vas-ldw').find('.mm-checkmark').remove();
                    }else if($(this).hasClass('featured-vas-default-sirius')){
                        $('.mm-featured-vas-sirius').find('input[type=checkbox]').prop("checked", false);
                        $('.mm-featured-vas-sirius').find('.mm-checkmark').remove();
                    }else if($(this).hasClass('featured-vas-default-fpo')){
                        $('.mm-featured-vas-fpo').find('input[type=checkbox]').prop("checked", false);
                        $('.mm-featured-vas-fpo').find('.mm-checkmark').remove();
                    }
                    madeUpdate = true;
                }
            } else if($('.qty-plus-proxy').length>0){
                var val=$(this).find("select").val();
                if(!isNaN(parseFloat(val)) && isFinite(val) && !$(this).find('.qty-plus-proxy-first').hasClass('qty-inactive')){
                    $(this).find('.qty-value').text(val);
                    $(this).find('.qty-plus-proxy-first').addClass('qty-inactive');
                    $(this).find('.qty-control-set-multiple').removeClass('qty-inactive');
                    madeUpdate = true;
                }else if(isNaN(parseFloat(val)) && $(this).find('.qty-plus-proxy-first').hasClass('qty-inactive')){
                    $(this).find('.qty-plus-proxy-first').removeClass('qty-inactive');
                    $(this).find('.qty-control-set-multiple').addClass('qty-inactive');
                    madeUpdate = true;
                }
            }
        });
        if(madeUpdate===false && window.checkVASCount<20){
            setTimeout(window.checkVAS,500);
        }
    }

    $("body").on( "click", ".lb-content-box .extra-overlay,.rd-extra-remove-link", function(event){
        window.checkVASCount = 0;
        setTimeout(window.checkVAS,500);
    });


    $.initialize("#extras-list article header", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            var t = $(this).closest('article');
            $(this).next().addClass('vas-grid');
            //$(this).insertBefore(t.find('.vas-grid'));
            t.find('.vas-grid div:not(.vas-grid div div)').addClass('vas-tile');
        }
    });

    $.initialize("#extras-list", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $('.ancillaries-header').remove();
            var title=$("#steps li:nth-child(3) .wrapper").first().text();
            $(this).prepend('<h2 class="ancillaries-header mm-desktop-headline">'+title+'</div>');
            $(this).find('.ancillaries-header').clone().addClass('mm-mobile-headline').removeClass('mm-desktop-headline').insertBefore("#res-extras-page #steps");
        }
    });

    $.initialize("#res-extras-page button.primary", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $(this).text('Continue').wrap('<div class="ancillaries-btn-wrap"></div>');
        }
    });

    $.initialize(".extras-item-details", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $(this).find('.controls').prependTo($(this).find('.pricing'));


        $("#extras .controls .rd-full-link-extras").closest('.controls').find('strong').hide();

        if($(this).find('#quantity-options').length > 0){
            var values=$(this).find('#quantity-options').text();

            if(!isNaN(parseFloat(values)) && isFinite(values)){
                $(this).find('.controls').closest('.pricing').addClass('qty-custom-selector');

                var curValue=$(this).find('#quantity-options').val();
                var isDefault=false;
                if(!isNaN(parseFloat(curValue)) && isFinite(curValue)){
                    curValue=$(this).find('#quantity-options').val();
                }else{
                    isDefault=true;
                    curValue=0;
                }

                $(this).find('.controls').append('<div class="qty-control-set"><a class="qty-plus-proxy qty-plus-proxy-first" href="javascript:void(0);"></a><div class="qty-control-set-multiple"><div class="qty-control-set-multiple-wrap"><a class="qty-minus-proxy" href="javascript:void(0);">-</a><span class="qty-label">QTY.</span><span class="qty-value">'+curValue+'</span><a class="qty-plus-proxy" href="javascript:void(0);">+</a></div></div></div>');

                if(isDefault){
                    $(this).find('.qty-control-set-multiple').addClass('qty-inactive');
                }else{
                    $(this).find('.qty-plus-proxy-first').addClass('qty-inactive');
                }
                $(this).find('.controls input[type=checkbox]').closest('div').hide();
            }else{ // non numeric selectbox
                $(this).find('#quantity-options').closest('.extra-options').addClass('ancillary-select-dropdown-outer');
                $(this).find('#quantity-options').closest('.selection').addClass('ancillary-select-dropdown');
                $(this).find('#quantity-options').before('<span>'+$(this).parent().closest('article').find('.col-headers .quantity').text()+'</span>')
            }
        }else{
            $(this).find('.controls input[type=checkbox]').after('<span class="check-custom-selector"></span>');
            $(this).find('.controls input[type=checkbox]').closest('div').addClass('checkbox-selector');
            if($(this).find('.controls input[type=checkbox]').prop('checked')){
                $(this).find('.checkbox').append(window.mmCheckmark);
            }
        }

        $(this).find('.price.full-height strong').first().prepend('+');
        var ancName=$(this).find('h3').text();
        var ancImg="";

        if(ancName.indexOf("Loss Damage Waiver")>-1 || ancName.indexOf("LDW")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-ldw-2.png)!';
        }else if(ancName.indexOf("NeverLost")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-gps.png)!';
        }else if(ancName.indexOf("Infant Child Seat")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-infant-seat.png)!';
        }else if(ancName.indexOf("Child Seat")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-toddler-seat.png)!';
        }else if(ancName.indexOf("Booster Seat")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-booster-seat.png)!';
        }else if(ancName.indexOf("Hand Controls")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-hand-controls.png)!';
        }else if(ancName.indexOf("Wheelchair Accessible Bus")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-bus.png)!';
        }else if(ancName.indexOf("Prepay the Fuel")>-1 || ancName.indexOf("Re-Fuel")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-prepay-fuel-2.png)!';
        }else if(ancName.indexOf("Navigation + Wi-Fi On Demand")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-connect.png)!';
        }else if(ancName.indexOf("SiriusXM")>-1){
            ancImg='#$(ContentManager:siriusxm-200x200.png)!';
        }else if(ancName.indexOf("Connect")>-1){
            ancImg='#$(ContentManager:hertz-ancillary-connect.png)!';
        }
        if(ancImg !== ""){
            $(this).find('.image img').attr('src', ancImg);
        }
        $(this).addClass('mm-vas-applied');
        }
    });

    $("body").on( "change", ".checkbox-selector input[type=checkbox]", function(event){
        $(this).closest('.checkbox').find('.mm-checkmark').remove();
        if (this.checked){
            $(this).closest('.checkbox').append(window.mmCheckmark);
        }
    });

    $("body").on( "click", ".qty-plus-proxy", function(event){
        var curValue=$(this).closest('.pricing').find('select').val();
        var isDefault=false;
        if(!isNaN(parseFloat(curValue)) && isFinite(curValue)){
            curValue=parseInt(curValue);
        }else{
            curValue=0;
            isDefault=true;
        }
        var newValue=curValue + 1;
        $(this).closest('.pricing').find('select option[value='+newValue+']').attr('selected','selected').trigger('change');
        $(this).closest('.qty-control-set').find('.qty-value').text(newValue);
        var nextValue=newValue + 1;
        if($(this).hasClass('qty-plus-proxy-first')){
            $(this).addClass('qty-inactive');
            $(this).closest('.qty-control-set').find('.qty-control-set-multiple').removeClass('qty-inactive');
        }
    });

    $("body").on( "click", ".qty-minus-proxy", function(event){
        var curValue=$(this).closest('.pricing').find('select').val();
        var isDefault=false;
        if(!isNaN(parseFloat(curValue)) && isFinite(curValue)){
            curValue=parseInt(curValue);
        }else{
            curValue=0;
            isDefault=true;
        }
        var newValue=curValue - 1;
        if(newValue < 0){ newValue=0 }
        if(newValue < 1 && isDefault === false && newValue !== curValue){
            $(this).closest('.pricing').find('select option').first().attr('selected','selected').trigger('change');
        }else if(newValue > 0 && newValue !== curValue){
            $(this).closest('.pricing').find('select option[value='+newValue+']').attr('selected','selected').trigger('change');
        }
        $(this).closest('.qty-control-set').find('.qty-value').text(newValue);
        var nextValue=newValue - 1;
        if(nextValue < 0){
            $(this).closest('.qty-control-set').find('.qty-control-set-multiple').addClass('qty-inactive');
            $(this).closest('.qty-control-set').find('.qty-plus-proxy-first').removeClass('qty-inactive');
        }
    });
}

} //End Ancillaries Page

/*-- Review and Book Page --*/
if(window.location.hash.indexOf("review-and-book") > -1){
    if(!$("body").hasClass('mm-review-and-book-page-active')){
        $("body").addClass('mm-review-and-book-page-active');

        $.initialize(".lb-content-box .updgrade-detail-overlay", function(){
            if(!$(this).hasClass('mm-active')){
                $(this).find('img').upsizeCarImage({
                    carName: $(this).text()
                });
            }
        });

        $.initialize("#bookableSubmit.submit-button-full", function(){
            var t=$(this);
            if(!t.hasClass('mm-active')){
                t.addClass('mm-active');
                var c = t.closest('#res-bookable-page');
                t.text('Reserve').wrap('<div class="bookable-btn-wrap"><div class="bookable-btn-row"><div class="bookable-btn-col bookable-btn-col-right"><div class="bookable-btn-row-inner"><div class="bookable-btn-col-inner bookable-btn-col-inner-right"></div></div></div></div></div>');

                c.find('.bookable-btn-col-right').before('<div class="bookable-btn-col bookable-btn-col-left"></div>');
                c.find('.bookable-btn-col-inner-right').before('<div class="bookable-btn-col-inner bookable-btn-col-inner-left"></div>');
                c.find('.bookable-btn-col-left').text(c.find('#approx-rate-details .total .rd-name').text());
                c.find('.bookable-btn-col-inner-left').text(c.find('#approx-rate-details .total .rd-price').text());

                c.find('.bookable-btn-col-inner-left').html(function (i, html){
                    return html.replace('USD', '<span class="bookable-currency">USD</span>');
                });

                c.find('.bookable-btn-row').after('<div class="bookable-btn-full"></div>');
                c.find('.bookable-btn-wrap').after('<div class="bookable-rate-details"></div>');
                c.find('#location-notes').first().appendTo(c.find('.bookable-rate-details'));
                c.find('#approx-rate-terms .submit p').first().appendTo(c.find('.bookable-rate-details'));
                c.find('.bookable-rate-details p').prepend('Rate is guaranteed. Taxes, fees  and extras are subject to change.');

                c.find('.terms-conditions-checkbox').insertBefore(c.find('.bookable-btn-wrap')).wrap('<div class="bookable-terms-and-conditions"></div>');
                c.find('#termsAndConditionsAccepted').closest('label').attr('for',c.find('#termsAndConditionsAccepted').attr('id'));
                c.find('.submit-button p').appendTo(c.find('.bookable-btn-full'));
                c.find('.bookable-btn-full').html(function (i, html){
                    return html.replace('"Submit"', '"Reserve"');
                });
            };
        });

        $.initialize("#res-bookable-page .bookable-main-container #canSpamElectionCheckbox", function(){
            var t=$(this);
            if(!t.hasClass('mm-active')){
                t.addClass('mm-active');
                t.closest('label').wrapInner('<div class="can-spam-inner"></div>');
                t.closest('label').find('.can-spam-inner input').insertBefore(t.closest('label').find('.can-spam-inner'));
                //t.closest('label').find('.can-spam-inner').text('Yes - I want to receive promotional emails from Hertz.');
            }
        });


        $.initialize("#res-bookable-page .bookable-main-container", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            $('.review-and-book-header').remove();
            t.find('#important').insertAfter(t.find("#information"));
            var title=$("#steps li:nth-child(4)").text();
            title=title.split(':');
            t.find('legend').first().before('<h2 class="review-and-book-header mm-desktop-headline">'+title[title.length-1]+'</div>');
            t.find('.review-and-book-header').clone().addClass('mm-mobile-headline').removeClass('mm-desktop-headline').insertBefore("#res-bookable-page #steps");
            t.find('#customer-name-fields .content-half').parent().addClass('bookable-row');
            t.find('#homeAddressLine1, #homeCity, #homeZip, #creditCardType, #nonMemberFrequentTravelerProgramList, #businessAddressLine1, #businessCity, #businessZip').closest('div').parent().addClass('bookable-row');
            t.find('#creditCardNumber').closest('.bookable-row').find('.notIncludeSpaces').addClass('ccn-note').insertAfter(t.find('#creditCardNumber').closest('.bookable-row'));
            t.find('#errorsHomePhone').insertBefore(t.find('#homeZip').closest('.bookable-row'));
            t.find('#errorsFTField').insertBefore(t.find('#nonMemberFrequentTravelerProgramList').closest('.bookable-row'));
            t.find('#homeCountryStateProvince').closest('.content-half').insertAfter(t.find('#homeCity').closest('.content-half'));
            t.find('#homeCountryStateProvince').insertAfter(t.find('#homeCountryStateProvince').closest('label'));
            t.find('#homePhone').closest('.content-half').insertAfter(t.find('#homeZip').closest('.content-half'));
            t.find("select[name='businessCountryStateProvince']").closest('.content-half').insertAfter(t.find("#businessCity").closest('.content-half'));
            t.find("#businessPhone").closest('.content-half').insertAfter(t.find("#businessZip").closest('.content-half'));
            t.find('#email-fields').find('.content-half').first().parent().addClass('bookable-row');
            t.find('#email-fields').find('.content-half').last().appendTo(t.find('#email-fields .bookable-row'));

            t.find('#creditCardType').insertAfter(t.find('#creditCardType').closest('label'));
            t.find('#ccExpirationMonth').closest('.content-half').wrap('<div class="bookable-row bookable-row-mobile" id="bookableCCExpRow"></diV>');
            t.find('#bookableCCExpRow').append('<div class="content-half" id="bookableCCExpirationYear"><label for="ccExpirationYear">Expiration:</label></div>');
            t.find('#ccExpirationMonth').closest('.content-half').find('label').attr('for','ccExpirationMonth').text('Expiration:');
            t.find('#ccExpirationYear').appendTo(t.find('#bookableCCExpirationYear'));

            t.find('#transPromoMobilePhoneCountryCodeBox').parent().wrapInner('<div class="bookable-row"></div>');
            t.find('#transPromoMobilePhoneCountryCodeBox, #transPromoMobilePhoneBox').addClass('bookable-col').wrap('<div class="content-half"></div>');
            t.find('#transPromoMobilePhoneDiv .inputs').removeClass('inputs');
            if(t.find('#flight-services').length > 0){
                t.find('#flight-services').closest('.clearfix').wrapInner('<div class="bookable-row" id="fsBookableRow"></div>');
            }
            t.find(".bookable-row .content-half").wrap('<div class="bookable-col"></div>');
            t.find(".bookable-row").each(function(index){
                $(this).find('.bookable-col').first().addClass('bookable-col-left');
                $(this).find('.bookable-col').last().addClass('bookable-col-right');
            });

            var fsBookableRow = t.find('#fsBookableRow');
            var fsBookableText = 'In case of a delay, we can hold your vehicle. Would you like to add flight information?';
            if(fsBookableRow.length > 0){
                fsBookableRow.find('#autocomplete-container').appendTo(fsBookableRow.find('.bookable-col-left'));
                fsBookableRow.find('#autocomplete-radio-buttons').appendTo(fsBookableRow.find('.bookable-col-right'));
                if(fsBookableRow.find('#selectedAirline  option[value="UNKN"]').length > 0){
                    fsBookableRow.find('#selectedAirline').val('UNKN').trigger('change');
                }else {
                    fsBookableText='In case of a delay, we can hold your vehicle. Please add flight information.';
                }
            }

            t.find('#companyOrderNumber').val('');
            var arrivalDescription = t.find("#arrival-info p:contains('Please add your flight information. These details will help us keep track of any changes in your flight and better prepare for your arrival.')");
            if(arrivalDescription.length > 0){
                arrivalDescription.hide();
            }

            var arrivalHeader = t.find(".arrival-info-heading:contains('Arrival/Flight Information')");
            if(arrivalHeader.length > 0){
                arrivalHeader.text('Additional Information');
            }

            var personalHeader = t.find("legend span:contains('Your Personal Information')");
            if(personalHeader.length > 0){
                personalHeader.text('Personal Information');
            }

            var ccHeader = t.find("legend span:contains('Your Credit Card Information'), .credit-card-title:contains('Your Credit Card Information')");
            if(ccHeader.length > 0){
                ccHeader.text('Payment Information');
            }

            var billingHeader = t.find("legend span:contains('Your Billing Information:')");
            if(billingHeader.length > 0){
                billingHeader.text('Billing Information');
            }

            var ccText = t.find("#creditCard .gray-container p:contains('At the time of rental, you MUST produce the same credit card you paid online and valid driver’s license in your name.')");

            if(ccText.length>0){
                //non member always only add a new card for members
                var ccTextContainer = ccText.closest('.gray-container');
                ccTextContainer.wrapInner('<div class="cc-text-hidden"></div>');
                ccTextContainer.prepend('<p class="cc-text-read-more-description">At the time of rental, you MUST produce the same credit card you paid online and valid driver’s license in your name. <a href="#" class="cc-text-read-more-link">Read More</a></p>');

                ccText.html(function (i, html){
                    return html.replace('At the time of rental, you MUST produce the same credit card you paid online and valid driver’s license in your name.', '');
                });


                var bookableGoldMsg = t.find('#bookableCreditCardGoldMsg');
                if(bookableGoldMsg.length>0){
                    ccTextContainer.append('<p>'+bookableGoldMsg.find('.errorMessage-container p').text()+'</p>');
                    bookableGoldMsg.hide();
                }

                ccTextContainer.append('<p>To qualify for a rental using a debit card, you will be required to provide proof of a return airline flight and present two (2) valid forms of identification. Debit cards are accepted for payment at the end of your rental. Please refer to Forms of Payment in the Rental Qualifications & Requirements for complete information.</p>');
            }
            function toggleSet(target, text){
                var id = 'toggleSet_'+target.find('input,select').first().attr('id');
                target.wrap('<div class="bookable-toggle-section" id="'+id+'"><div class="bookable-toggle-section-inner"></div></div>');
                var targetParent = target.closest('.bookable-toggle-section');
                targetParent.prepend('<p class="bookable-toggle-title">'+text+'</p>')
                targetParent.find('.bookable-toggle-title').after('<div class="bookable-toggle-radio-set"><label for="'+id+'_radio_yes" class="bookable-toggle-radio-first"><input type="radio" value="Yes" id="'+id+'_radio_yes" name="'+id+'_radio" class="toggle-radio-btn" /><span>Yes</span></label><label for="'+id+'_radio_no"><input type="radio" value="No" id="'+id+'_radio_no" name="'+id+'_radio" class="toggle-radio-btn" checked /><span>No</span></label></div>');
            }
            var toggleSelectors = [
                ['#fsBookableRow', fsBookableText],
                ['#misc-info', 'Do you have a Company Order/Billing Reference Number?']
            ];
            var toggleCur = '';
            for(var i=0; i<toggleSelectors.length; i++){
                toggleCur = t.find(toggleSelectors[i][0]);
                if(toggleCur.length > 0){
                    toggleSet(toggleCur, toggleSelectors[i][1]);
                }
            }
            if(fsBookableRow.find('#selectedAirline  option[value="UNKN"]').length < 1){
                fsBookableRow.closest('.bookable-toggle-section-inner').show();
                fsBookableRow.closest('.bookable-toggle-section').find('.bookable-toggle-radio-set').hide();
            }
            t.find('.terms').first().clone().addClass('terms-first').prependTo('#important');
            $('#important .terms-first h2').addClass('inactive');
            $('#important .terms-first .terms-container').hide();
            $("#bookableMainContainer #vehicleUpsells").insertBefore("#bookableMainContainer");
            $("#bookableMainContainer").wrapInner('<div class="review-and-book-row"><div class="review-and-book-col review-and-book-col-left"></div></div>');
            $("#bookableMainContainer .review-and-book-row").append('<div class="review-and-book-col review-and-book-col-right" id="reviewAndBookCost"></div>');
            if(t.find('#pay-with-your-points').length > 0 && t.find('#creditCard').length > 0){
                $('#pointsSection').remove();
                t.find('#creditCard').before('<div id="pointsSection"></div>');
                var pSect=$('#pointsSection');
                pSect.append('<fieldset><legend class="hertz-gold-title">Your Hertz Gold Plus Points Information</legend>');
                t.find('#pay-with-your-points').appendTo(pSect);
                if(pSect.find('.noPoints').length>0){
                    pSect.find('.noPoints').prepend('<div class="icons-info"></div>');
                }
            }
            if($("#rd-rental-total").length > 0){
                $("#reviewAndBookCost").append('<div class="bookable-cost-header-row"><div class="bookable-cost-header-col bookable-cost-header-col-left">Cost Summary</div><div class="bookable-cost-header-col bookable-cost-header-col-right"><a href="javascript:void(0);" class="display_quote_details-proxy">View Details</a></div></div>');
                $('#reviewAndBookCost').append('<div id="rd-main"></div>');
                t.closest('#res-bookable-page').find('#itinerary-info').clone(true).removeClass('mm-hide').appendTo("#reviewAndBookCost #rd-main");
                if($('#reviewAndBookCost #rd-pay-now .rd-title .pay-now-overlay-trigger').length<1){
                    $('#reviewAndBookCost #rd-pay-now .rd-title').first().append('<a href="javascript:void(0);" class="pay-now-overlay-trigger"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');
                }
                t.find("#reviewAndBookCost .rd-opt-detail-link1 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-open-proxy');
                t.find("#reviewAndBookCost .rd-opt-detail-link2 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-close-proxy');
                var summaryCostSplit=$('#rdReviewAndBookSummary').find('.rd-subtotal').text().split(' ');
                if(summaryCostSplit.length > 1){
                    $('#rdReviewAndBookSummary').find('.rd-subtotal').html(summaryCostSplit[0]+' <span class="review-and-book-summary-currency">'+summaryCostSplit[1]+'</span>');
                }
                $('#reviewAndBookCost #rd-more .rd-info').html(function (i, html){
                    return html.replace('Rate is guaranteed.  Taxes, fees and extras, if not included in the Rate, are subject to change.', '');
                });
                $('#reviewAndBookCost #rd-rental-total .rd-subtotal').html(function (i, html){
                    return html.replace('USD', '<span class="bookable-currency">USD</span>');
                });
            }
            if( t.find("input[name='authorizationNumber']").closest('.content-half').length > 0){
                t.find("input[name='authorizationNumber']").attr('id', 'authorizationNumber');
                t.find("input[name='authorizationNumber']").closest('.content-half').contents().eq(0).wrap('<label for="authorizationNumber"/>')
            }
            t.find(".notIncludeSpaces").each(function(index){
                $(this).insertAfter($(this).closest('.content-half'));
            });
            t.find("input[type=radio]").each(function(index){
                $(this).closest('.content').addClass('form-radio');
            });
            if(t.find('#firstName').val()=="" && t.find('#lastName').val()=="" && t.find('#firstName').length > 0 && t.find('#lastName').length > 0){
                $('.bookableSubmitBtn').prop("disabled",true);
            }else{
                $('.bookableSubmitBtn').prop("disabled",false);
            }
            if(t.find('#member-email-info').find('div').length>0){
                t.find('#arrival-misc-info').append('<div id="bookableMemberSection"></div>');
                t.find('#personal-data').closest('fieldset').hide();
                personalHeader.closest('legend').hide();
                t.find('#member-email-info').appendTo(t.find('#bookableMemberSection'));
                t.find('#bookableCustSection').appendTo(t.find('#bookableMemberSection'));
                t.find("#bookableCustSection #customer-opt-in div:contains('An email confirmation will be sent to the email address in your profile.')").hide();
                t.find('#cb_privacy_container').removeClass('hidden').css('display','none');
            }
            if(t.find('#eMemberCreditCardList').length>0){
                if(t.find("input[name='creditCardSelector']").val() == 'profile'){
                    $('#bookableCreditCardTable').hide();
                } else {
                    $('#eMemberCreditCardList').closest('.content-half').parent().hide();
                }

                t.find('#creditCard legend').after('<div class="bookable-toggle-radio-set" id="bookableCCToggle"></div>');
                t.find("#creditCard input[name='creditCardSelector']").closest('label').wrapInner('<span></span>').appendTo('#bookableCCToggle');
                t.find("#creditCard .content.form-radio").hide();
                t.find("#bookableCreditCardGoldMsg").insertAfter(t.find('#creditCard fieldset').first());
                t.find('#bookableCCToggle label').first().addClass('bookable-toggle-radio-first');
                t.find('#bookableCCToggle label').each(function(index){
                    $(this).find('input').prependTo($(this));
                });
                t.find('#creditCard .content-half').each(function(index){
                    if($(this).height() < 4 && $(this).is(":visible")){
                        $(this).hide();
                    }
                });
            }

            var freqTravlr = t.find('#frequent-traveler');
            if(freqTravlr.length>0){

                if(t.find("input[name='ftSelector']").val() == 'hertz1awards'){
                    t.find('#frequent-traveling-member').hide();
                    t.find('#nonMemberFrequentTravelerProgramList').closest('.bookable-row').wrap('<div class="bookable-freq-other-row"></div>');
                    t.find('.bookable-freq-other-row').hide();
                }

                if(t.find('#billing-info').length>0){
                    freqTravlr.insertBefore(t.find('#billing-info'));
                }else{
                    freqTravlr.insertBefore(t.find('#arrival-misc-info'));
                }
                freqTravlr.prepend('<div class="bookable-toggle-radio-set" id="bookableFreqTravlerToggle"></div>');
                freqTravlr.find('.form-radio label').wrapInner('<span></span>').appendTo('#bookableFreqTravlerToggle');
                freqTravlr.find('.content.form-radio').hide();
                t.find('#bookableFreqTravlerToggle label').first().addClass('bookable-toggle-radio-first');
                t.find('#bookableFreqTravlerToggle label').each(function(index){
                    $(this).find('input').prependTo($(this));
                });

                var replacedText=false;
                var msg = 'Frequent Flyer Surcharge of up to $1.00 per day may apply when renters choose to take miles or credits from a U.S. and Canadian Frequent Flyer program.';
                t.find('.frequent-traveler-info-container').html(function (i, html){

                    if(html.indexOf(msg)>0){
                        replacedText=true;
                        html = html.replace(msg, "");
                    }
                    return html;
                });
                if(replacedText===true){
                    t.find('.bookable-freq-other-row #bookableFFSurcharge').remove();
                    t.find('.bookable-freq-other-row').append('<div id="bookableFFSurcharge"><p>'+msg+'</p></div>')
                }
            }

            var multiAddress = t.find("#billing-info input[name='addressType']");
            if(multiAddress.length>0){
                var multiAddressContainer = multiAddress.first().closest('.gray-container');
                multiAddressContainer.hide();
                multiAddressContainer.after('<div class="bookable-toggle-radio-set" id="bookableMultiAddressToggle"><p class="bookable-toggle-title">Use the address from my profile:</p></div>');
                multiAddress.each(function(index){
                    $(this).appendTo('#bookableMultiAddressToggle')
                    if($(this).val()=="H"){
                        $(this).attr('id','bookableAddressTypeHome').wrap('<label for="bookableAddressTypeHome"></label>')
                        $(this).closest('label').append('<span>Home</span>');
                        $(this).closest('label').addClass('bookable-toggle-radio-first');
                    } else if($(this).val()=="B"){
                        $(this).attr('id','bookableAddressTypeBusiness').wrap('<label for="bookableAddressTypeBusiness"></label>')
                        $(this).closest('label').append('<span>Business</span>');
                    }
                });
            }

            var pointsSection = t.find('#pointsSection');
            if(pointsSection.length>0){
                pointsSection.insertAfter(t.find('#creditCard fieldset legend').first());
                pointsSection.find('#points-available').hide();
                pointsSection.find('.choose-rewards label').first().hide();
                pointsSection.find('legend').first().closest('fieldset').hide();
                pointsSection.find('.pointsAvailable').hide();
                var totalPoints = pointsSection.find('.totalPoints').text();
                if(parseInt(totalPoints)){
                    totalPoints = parseInt(totalPoints).toLocaleString('en');
                    pointsSection.find('.choose-rewards label').first().before('<p class="bookable-toggle-title bookable-toggle-title-mrg-0">Hertz Reward Points - Current Balance: '+totalPoints+'</p>');
                }
            }
        }
        });

        $.initialize("#res-bookable-page .field-error-list li", function() {
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            var masterList = $('#res-bookable-page #error-list');

            if($(this).closest('#error-list').length<1){
                var txt = $(this).text();
                masterList.find("li:contains('"+txt+"')").addClass('hide-overview-error');
                if(txt.indexOf('[DE')==-1){
                    txt = txt.replace(/\[.*?\]/g, "");
                }
                $(this).text(txt);
            }
            if($(this).closest('#bookableCreditCardTable').length>0){
                $(this).closest('ul').addClass('cc-error-list').insertAfter($('#creditCard .credit-card-title').first());
            }

            if(masterList.find('li').not(".hide-overview-error").length>0){
                masterList.show();
            }else{
                masterList.hide();
            }
        }
        });

        $.initialize("#cc-disclaimer-content", function() {
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
                $(this).closest(".lb-foreground").css('display', 'none');
                $(this).closest(".lb-foreground-cont").find('.lb-close').trigger('click');
                $('#bookableMainContainer #bookableCreditCardTable').find('#BookableCCDisclaimeContent').remove();
                $('#bookableMainContainer #bookableCreditCardTable').append('<div id="BookableCCDisclaimeContent">'+$(this).html()+'</div>');
        }
        });

        $.initialize("#vehicleUpsells", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $(this).insertAfter('#res-bookable-page section#approx-rate');
        }
        });

        $.initialize("#vehicleUpsells .vehContent-half, #vehicleUpsells .vehContent", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            t.find('.img-container img').upsizeCarImage({
                carName: $(this).find('figcaption b').text()
            });


            var text = t.find('figcaption span').first().text();
            var price = text.substring(text.lastIndexOf(",") + 1);
            if(price.indexOf('USD')>-1){
                t.find('.button-container').append('<p class="vech-upsell-price">'+price+' Total</p>');
            }
            text = t.find('figcaption span b').first().text();
            var model = text.substring(text.lastIndexOf(")") + 1);
            var title = t.find('h3');
            title.attr('data-upgrade-text', title.find('div').first().text());
            title.find('.hidden').remove();
            if(title.text().indexOf('Original Vehicle') > -1) {
                title.text('Original Vehicle: '+model);
            } else if (title.text().indexOf('Upgrade for') > -1) {
                var curText = title.text();
                curText = curText.replace('Upgrade for', 'Upgrade to a '+model+' or similar for');
                title.text(curText);
            } else if (title.text().indexOf('No Additional Charge') > -1) {
                var curText = title.text();
                curText = curText.replace('No Additional Charge', 'No additional charge for a '+model+' or similar');
                title.text(curText);
            }

            t.find('a.details').appendTo(t.find('.button-container'));

        }
        });

        $("body").on( "change", "input[name='ftSelector']", function(event){
            var t=$(this);
            if(t.val() == 'hertz1awards'){
                $('#frequent-traveling-member').stop(true, false).slideUp( 300 );
                $('.bookable-freq-other-row').stop(true, false).slideUp( 300 );

            } else if(t.val() == 'profile'){
                $('#frequent-traveling-member').stop(true, false).slideDown( 300 );
                $('.bookable-freq-other-row').stop(true, false).slideUp( 300 );
            } else {
                $('#frequent-traveling-member').stop(true, false).slideUp( 300 );
                $('.bookable-freq-other-row').stop(true, false).slideDown( 300 );
            }
        });



        $("body").on( "change", "input[name='creditCardSelector']", function(event){
            var t=$(this);
            if(t.val() == 'profile'){
                $('#bookableCreditCardTable').stop(true, false).slideUp( 300 );
                $('#eMemberCreditCardList').closest('.content-half').parent().slideDown( 300 );
            } else {
                $('#bookableCreditCardTable').stop(true, false).slideDown( 300 );
                $('#eMemberCreditCardList').closest('.content-half').parent().slideUp( 300 );
            }
        });


        $("body").on( "change", ".toggle-radio-btn", function(event){
            var t=$(this);
            t.closest('.bookable-toggle-section').find('.bookable-toggle-section-inner').stop(true, false).slideToggle( 300 );
            var parent = t.closest('.bookable-toggle-section');
            if(parent.find('#selectedAirline').length > 0){
                if(t.val() == 'No'){
                    parent.find('#selectedAirline').val('UNKN').trigger('change');
                    parent.find('#flightNumber').val('');
                } else {
                    parent.find('#selectedAirline').prop("selectedIndex",0).trigger('change');
                }
            } else if(parent.find('#companyOrderNumber').length > 0){
                if(t.val() == 'No'){
                    parent.find('#companyOrderNumber').val('');
                }
            }

        });

        $("body").on( "click", "#res-bookable-page .bookablePrivacyOptInLink", function(event){
            event.preventDefault();
            $(this).closest('#bookableCustSection').find('#cb_privacy_container').stop(true, false).slideToggle( 300 );
        });

        $("body").on( "click", ".cc-text-read-more-link", function(event){
            event.preventDefault();
            var ccHiddenContainer = $(this).closest('.gray-container').find('.cc-text-hidden');
            ccHiddenContainer.toggleClass('active').stop(true, false).slideToggle( 300 );
            if(ccHiddenContainer.hasClass('active')) {
                $(this).text('Read Less');
            } else {
                $(this).text('Read More');
            }
        });

        $("body").on( "click", ".display_quote_details-proxy", function(event){
            $("#display_quote_details").trigger('click');
        });

        $("body").on( "change keyup", "#res-bookable-page #firstName, #res-bookable-page #lastName", function(event){
            if($('#res-bookable-page #firstName').val()=="" && $('#res-bookable-page #lastName').val()=="" && $('#res-bookable-page #firstName').length > 0 && $('#res-bookable-page #lastName').length > 0){
                $('.bookableSubmitBtn').prop("disabled",true);
            }else{
                $('.bookableSubmitBtn').prop("disabled",false);
            }
        });
    }

} //End Review and Book Page

var resFlowHTML = '<div class="confirmation-resflow-box-link-row"><div class="confirmation-resflow-box-link-col confirmation-resflow-box-link-col-left" id="confirmationResflowBoxLinksLeft"></div><div class="confirmation-resflow-box-link-col confirmation-resflow-box-link-col-right" id="confirmationResflowBoxLinksRight"></div></div><div class="confirmation-prepay-note"><p>If you have prepaid for your rental, don’t forget to bring the same credit card you used to PrePay when you pickup your car.</p></div><div class="confirmation-row"><div class="confirmation-col confirmation-col-left" id="confColL"></div><div class="confirmation-col confirmation-col-right" id="confColR"></div></div>';


/*-- Confirmation Page --*/

if(window.location.hash.indexOf("confirmation") > -1 || location.search.indexOf('confirmationNumber=')>=0 || window.location.hash.indexOf("review") > -1){
if(!$("body").hasClass('mm-confirmation-page-active')){
    $("body").addClass('mm-confirmation-page-active');
    $.initialize("#res-confirmation-page #main-content", function(){
        var t = $(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            var ageCDP = t.find('.cdpName:contains("204546")');
            if(ageCDP.length>0){
                ageCDP.html('Promotional Coupon : 204546<br> Estimated total quoted in reservation will not reflect the discount, the discount will be applied at time of rent.');
            }
            t.find('#important-info').appendTo(t);
            t.find('#res-disclaimer').appendTo(t);
            t.find('#conf-button-cont').appendTo(t);
            if(t.find('#conf-button-cont label').length < 1){t.find('#conf-button-cont').hide()}else{t.find('#conf-button-cont #tcCheckBox').prependTo(t.find('#res-prepay-terms-accept'))}
            t.find('#res-warnings,#res-terms-cont').addClass('expandable-section');
            t.find('#res-warnings header,#res-terms-cont header').addClass('expandable-section-btn').addClass('inactive');
            t.find('#res-warnings ul,#res-terms').wrap('<div class="expandable-section-content"></div>');
            $("#confirmationResflowBoxLinks").empty();
            $("#confColL").empty();
            $("#confColR").empty();
            $("#res-summary-box").after(html);
            t.find(".print-cont").insertBefore(".conf-summary-buttons");
            t.find(".conf-summary-buttons .primary").first().appendTo("#confirmationResflowBoxLinksLeft");
            t.find(".conf-summary-buttons").appendTo("#confirmationResflowBoxLinksRight");
            if($('#res-review-page-container').length > 0 && $(".confirmation-hero-image").length < 1){
                $("#res-review-page-container").prepend('<div class="confirmation-hero-image"></div>');
            }else if( $(".confirmation-hero-image").length < 1){
                $("#res-confirmation-page-container").prepend('<div class="confirmation-hero-image"></div>');
            }
            var headline=t.find('#res-summary-box h3').text();
            if(headline.indexOf('Thanks for Traveling at the Speed of Hertz®') > -1){
                headline=headline.replace('Thanks for Traveling at the Speed of Hertz®', '');
                headline=headline.replace('!', '');
                headline=$.trim(headline.toLowerCase());
                headline=headline.charAt(0).toUpperCase() + headline.slice(1);
                var headlineSplit=headline.split(' ');
                t.find('#res-summary-box h3').text('Thank you, '+headlineSplit[0]);
            }

            t.find('.rd-vehicle figure img').upsizeCarImage({
                carName: $(this).find('.rd-vehicle .rd-info-left').text()
            });

            t.find('#res-summary-box').append('<div class="itin-expand-ovrvw-row itin-expand-ovrvw-arrow"><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-left" id="itineraryConfirmationLeft"></div><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-right" id="itineraryConfirmationRight"></div></div>');

            var pickupLocation="";
            var pickupTime="";
            var pickupDate="";
            var pickupDay="";
            var dropoffLocation="";
            var dropoffTime="";
            var dropoffDate="";
            var dropoffDay="";

            function removeLabel(elementNode){
                var value="";
                if(elementNode.length > -1){
                    var newNode=elementNode.clone();
                    newNode.find('label').remove();
                    value=$.trim(newNode.text());
                }
                return value;
            }

            function formatSummaryTime(elementValue){
                var value="";
                value=elementValue.match(/\d\d:\d\d.*/g);
                value=value.toString();
                value=value.replace(/^0+/, '');
                return value;
            }

            function formatSummaryDate(elementValue){
                var value="";
                value=elementValue.split(",");
                if(value.length >= 2){
                    value=value[1];
                }
                return value;
            }
            function formatSummaryDay(elementValue){
                var value="";
                value=elementValue.split(",");
                if(value.length >= 2){
                    value=value[0];
                }
                if(value !==''){
                    value+=', ';
                }
                return value;
            }

            if($('#res-itinerary-2 .pickup-location .int-loc-cont').length > 0){
                var clone1=$('#res-itinerary-2 .pickup-location .int-loc-cont').clone();
                clone1.find('div').remove();
                clone1.find('section').remove();
                pickupLocation=clone1.text();
                var pickupTimeFull=removeLabel($('#res-itinerary-2 .itn-pickup-time').first());
                pickupTime=formatSummaryTime(pickupTimeFull);
                pickupDate=formatSummaryDate(pickupTimeFull);
                pickupDay=formatSummaryDay(pickupTimeFull);
            }

            if($('#res-itinerary-2 .return-location .int-loc-cont').length > 0){
                var clone2=$('#res-itinerary-2 .return-location .int-loc-cont').clone();
                clone2.find('div').remove();
                clone2.find('section').remove();
                dropoffLocation=clone2.text();
                var dropoffTimeFull=removeLabel($('#res-itinerary-2 .itn-return-time').first());
                dropoffTime=formatSummaryTime(dropoffTimeFull);
                dropoffDate=formatSummaryDate(dropoffTimeFull);
                dropoffDay=formatSummaryDay(dropoffTimeFull);
                $('#res-itinerary-2 .return-location').appendTo($('#res-itinerary-2 .pickup-location'));
            }

            if($('#res-itinerary-2 .itn-same-location').length > 0){
                var clone=$('#res-itinerary-2 .itn-same-location .int-loc-cont').clone();
                clone.find('div').remove();
                clone.find('section').remove();
                pickupLocation=clone.text();
                dropoffLocation=pickupLocation;
                var pickupTimeFull=removeLabel($('#res-itinerary-2 .itn-pickup-time').first());
                pickupTime=formatSummaryTime(pickupTimeFull);
                pickupDate=formatSummaryDate(pickupTimeFull);
                pickupDay=formatSummaryDay(pickupTimeFull);
                var dropoffTimeFull=removeLabel($('#res-itinerary-2 .itn-return-time').first());
                dropoffTime=formatSummaryTime(dropoffTimeFull);
                dropoffDate=formatSummaryDate(dropoffTimeFull);
                dropoffDay=formatSummaryDay(dropoffTimeFull);
            }

            function formatLinkDate(dateNum){
                dateNum = parseInt(dateNum);
                if(dateNum<=9){
                    dateNum='0'+dateNum;
                }
                return dateNum;
            }
            function formatLinkDate(dateString){
                var date=dateString.split(",");
                if(date.length >= 2){
                    var monthAndDay=$.trim(date[1]).split(" ");
                    var m = '';
                    if(monthAndDay[0].indexOf('Jan')>-1){
                        m='01';
                    }else if(monthAndDay[0].indexOf('Feb')>-1){
                        m='02';
                    }else if(monthAndDay[0].indexOf('Mar')>-1){
                        m='03';
                    }else if(monthAndDay[0].indexOf('Apr')>-1){
                        m='04';
                    }else if(monthAndDay[0].indexOf('May')>-1){
                        m='05';
                    }else if(monthAndDay[0].indexOf('Jun')>-1){
                        m='06';
                    }else if(monthAndDay[0].indexOf('Jul')>-1){
                        m='07';
                    }else if(monthAndDay[0].indexOf('Aug')>-1){
                        m='08';
                    }else if(monthAndDay[0].indexOf('Sep')>-1){
                        m='09';
                    }else if(monthAndDay[0].indexOf('Oct')>-1){
                        m='10';
                    }else if(monthAndDay[0].indexOf('Nov')>-1){
                        m='11';
                    }else if(monthAndDay[0].indexOf('Dec')>-1){
                        m='12';
                    }
                    d=monthAndDay[1];
                    var yearAndTime=$.trim(date[2]).split(" ");
                    var y=yearAndTime[0];
                    return y+'-'+m+'-'+d;
                }
            }

            t.find('#placePassConf').remove();
            t.find('#itinerary-cont').append('<div id="placePassConf" data-itnStart="'+formatLinkDate(pickupTimeFull)+'" data-itnEnd="'+formatLinkDate(dropoffTimeFull)+'"></div>');

            var locCheck = 0;
            var locInt = setInterval(function(){
                locCheck++;
                if (typeof(s) != "undefined"){
                    if (typeof(s.eVar3) != "undefined"){
                        var adContainer = $('#placePassConf');
                        adContainer.empty();
                        var adLink = 'https://plus.hertz.com/property/'+s.eVar3+'?endDate='+adContainer.attr('data-itnEnd')+'&startDate='+adContainer.attr('data-itnStart')+'&utm_source=Hertz&utm_medium=Web&utm_campaign=ResFlow&utm_content=ConfirmationMax';
                        adContainer.html('<a href="'+adLink+'" class="conf-placepass-desktop" target="_blank"><img src="#$(ContentManager:HertzPlus_Conf_Banner_10_26.jpg)!" alt=""></a><a href="'+adLink+'" class="conf-placepass-mobile" target="_blank"><img src="#$(ContentManager:hertz-confirmation-placepass-350x200.jpg)!" alt=""></a>');
                        clearInterval(locInt);
                    }
                }
                if(locCheck>100){
                    clearInterval(locInt);
                }
            }, 20);

            var overviewSnippet='<div class="itin-expand-ovrvw-date"></div><div class="itin-expand-ovrvw-type"></div><div class="itin-expand-ovrvw-location"></div><div class="itin-expand-ovrvw-time"></div>';

            var itnConfLeft = $('#itineraryConfirmationLeft');
            var itnConfRight = $('#itineraryConfirmationRight');
            if(pickupLocation !== ""){
                itnConfLeft.append(overviewSnippet);
                itnConfLeft.find('.itin-expand-ovrvw-location').text(pickupLocation);
                itnConfLeft.find('.itin-expand-ovrvw-date').text(pickupDay+pickupDate);
                itnConfLeft.find('.itin-expand-ovrvw-time').text(pickupTime);
            }
            if(dropoffLocation !== ""){
                itnConfRight.append(overviewSnippet);
                itnConfRight.find('.itin-expand-ovrvw-location').text(dropoffLocation);
                itnConfRight.find('.itin-expand-ovrvw-date').text(dropoffDay+dropoffDate);
                itnConfRight.find('.itin-expand-ovrvw-time').text(dropoffTime);
            }
            $("#calendar-options").appendTo(t.find('#res-summary-box'));

            var vehicleType="";

            if(t.find("#rd-main .rd-vehicle .rd-link-right").length > 0){

                vehicleType=$("#rd-main .rd-vehicle .rd-link-right").next().text();

                var vehicleTypeSplit=vehicleType.split('(');
                vehicleType=vehicleTypeSplit[0].toString();

                if(vehicleType.indexOf('Passenger') > 0){
                    vehicleTypeSplit=vehicleType.split('Passenger');
                    vehicleType=vehicleTypeSplit[1].toString();
                }

                if(vehicleType.indexOf('2 or 4 Door') > 0){
                    vehicleTypeSplit=vehicleType.split('2 or 4 Door');
                    vehicleType=vehicleTypeSplit[0].toString();
                }

                if(vehicleType.indexOf('2 or 4 dr.') > 0){
                    vehicleTypeSplit=vehicleType.split('2 or 4 dr.');
                    vehicleType=vehicleTypeSplit[0].toString();
                }
            }

            t.find("#confColR").append('<div id="rd-main"></div>');
            t.find("#confColR #rd-main").empty();
            t.find("#rd-pay-later").appendTo('#confColR #rd-main');
            t.find("#rd-pay-now").appendTo('#confColR #rd-main');
            t.find("#rd-totals").appendTo('#confColR #rd-main');
            t.find("#counter-bypass").appendTo('#confColR #rd-main');
            t.find("#rd-more").appendTo('#confColR #rd-main');
            t.find("#confColR .cdpName").html(function (i, html){
                return html.replace(',CDP Rate :', '<br />CDP Rate:');
            });
            t.find("#counter-bypass p").each(function(index){
                if($(this).text()=="" || $(this).html()=='&nbsp;'){
                    $(this).addClass('mm-hide');
                }
            });
            t.find("#itinerary-cont").appendTo('#confColL');
            t.find("#page-banners").appendTo('#confColL');
            $("#confColL").wrapInner('<div class="confirmation-col-max-width"></div>')
        }
    });
}

} //End Confirmation Page
var confirmationCSS = "#rProxyM{display:none}.r-toggle.active #rProxyM{display:block}.r-toggle.active .r-toggle-edit,.r-toggle.active .r-toggle-cur-country,.r-toggle.active .r-toggle-text{display:none}.r-toggle-select{display:none}.r-toggle.active .r-toggle-select{display:block;width:50%;max-width:407px}.r-toggle-edit{display:inline-block;font-weight:bold;font-size:12px}.r-toggle-a{color:#000!important}.r-toggle .r-toggle-text{display:inline-block;font-weight:bold;padding:5px 10px 10px 0}@media only screen and (min-width:1201px){.r-toggle{text-align:left}.r-toggle .r-toggle-text{display:inline-block;font-weight:bold;padding:5px 10px 0 0}}@media only screen and (max-width:1200px){.hro-col-right{display:none}.r-toggle{margin-bottom:20px;margin-top:10px}.r-toggle.active .r-toggle-select{width:100%;max-width:none}#rToggleM{margin-top:-10px}}"


/*-- Homepage --*/
if(!$("#res-itinerary-page-container").hasClass('mm-active')){
$("#res-itinerary-page-container").addClass('mm-active');
// dom.addCss(css);
$("body").css(confirmationCSS)
window.updateDiscountCode=function(){
    var discMsg="";
    var container=$('.res-inr-wrp');

    function apndDiscTxt(field, discMsg){
        var newValue="";
        if(field.find('option').length>0 && field.length > 0 && field.val() !== ""){
            if($.trim(discMsg).length > 0){ newValue += ', ' }
            newValue += field.find('option:selected').text();
        }else if(field.length > 0 && field.val() !== ""){
            if($.trim(discMsg).length > 0){ newValue += ', ' }
            newValue += field.val();
        }
        return newValue;
    }
    var cdpLabel = container.find('#cdp-options-business label').first();
    if(cdpLabel.length>0 && $('#GPR_Proxy').length<1){ // Applicant
        var cdpTxt = $.trim(cdpLabel.text());
        cdpTxt = cdpTxt.split('CDP/Discount Code :');
        if(cdpTxt.length > 1) { discMsg += cdpTxt[1]; }
    }
    if($('#profile-cdp-indicator').is(':checked')){
        discMsg += apndDiscTxt(container.find("select[name='memberSelectedCdp']"), discMsg);
    }else{
        discMsg += apndDiscTxt(container.find("input#member-other-cdp"), discMsg);
    }
    discMsg += apndDiscTxt(container.find("input[name='cdpField']"), discMsg);
    discMsg += apndDiscTxt(container.find("input[name='pcNumber']"), discMsg);
    discMsg += apndDiscTxt(container.find("input[name='typeInRateQuote']"), discMsg);
    discMsg += apndDiscTxt(container.find("input[name='cvNumber']"), discMsg);
    discMsg += apndDiscTxt(container.find("input[name='itNumber']"), discMsg);

    var discMsgSplit=discMsg.split(" ");
    var discMsgUse="";
    for(var i=0; i<discMsgSplit.length; i++){
        if(i < 4 && discMsgUse.length < 20){
            if(i>0){
                discMsgUse += ' ';
            }
            discMsgUse += discMsgSplit[i];
        }
    }
    if(discMsgSplit.length >=4){
        discMsgUse += '...';
    }
    discMsgUse=discMsgUse.replace(':', '');
    var discVal=container.find(".discount-code-value");
    discVal.text(discMsgUse);
    if(discMsgUse.length>0){
        discVal.addClass('active');
    }else{
        discVal.removeClass('active');
    }
}

window.checkAAA=function (){
    if($('#affiliate-member-verification').length>0&&$('#affiliate-member-ID').length>0){
    if($('#aaaProxy1').length<1){
        $('#affiliate-member-ID').hide().before('<span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-aaa-icon"></span><input type="text" id="aaaProxy1">');
        $('#affiliate-member-join').prependTo($("label[for='affiliate-member-join']").first());
        $("label[for='affiliate-member-join']").html(function (i, html){
            var html = html.replace(/Not a Member\?/g, '<p class="join-aaa-p">Not a Member\?');
            if(html.indexOf('join-aaa-p')>-1){
                html+='</p>'
            }
            return html;
        });
    }
    if($('#affiliate-member-verification').attr('hidden')=='hidden'){
        $('.res-otr-wrp').removeClass('aaa-added').removeClass('usaa-added');
    }else{
        $('.res-otr-wrp').addClass('aaa-added');
    }
    if($('#affiliate-member-join').is(':checked')){
        $('#aaaProxy1,#aaaProxy2').attr("disabled", "disabled");
        $('.res-otr-wrp').removeClass('aaa-added').removeClass('usaa-added');
    }else{
        $('#aaaProxy1,#aaaProxy2').removeAttr("disabled");
    }
    if($("label[for='affiliate-member-join']").first().text().indexOf('USAA')>-1) {
        if($('#usaaLabel').length<1){
            $('#member-ID-span').after('<div id="usaaLabel">'+$('#member-ID-span').html()+': <span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-usaa-icon"></span></div>');
        }
        $('.res-otr-wrp').addClass('usaa-added');
    } else {
        $('#usaaLabel').remove();
        $('.res-otr-wrp').removeClass('usaa-added');
    }
    }
}
$("body").on( "click", "#rmc-tab", function(){
    $('.res-inr-wrp').addClass('single-button-lookup');
});

$("body").on( "click", "#gaq-tab", function(){
    $('.res-inr-wrp').removeClass('single-button-lookup');
});
$("body").on( "mousedown", ".discount-code-overlay", function(e){
    if($(e.target).closest('.discount-code-overlay-inner').length<1){
        $(this).addClass('click-start');
    }
});
$("body").on( "mousedown", ".discount-code-overlay-inner", function(){
    $('.discount-code-overlay').removeClass('click-start');
});
$("body").on( "click", ".discount-code-overlay.click-start, .modal-button-cancel, .modal-button-apply, .modal-close-icon", function(){
    if($(this).closest(".discount-code-overlay").length > 0){
        $(this).closest(".discount-code-overlay").removeClass('active');
    }else{
        $(this).removeClass('active');
    }
    $('body').removeClass('discount-overlay-open');
    window.checkAAA();
    window.updateDiscountCode();
});
$("body").on( "click", ".discount-code-overlay-inner,#redeem-section", function(event){
    event.stopPropagation();
});

$("body").on( "click", ".pseudo-label, .pseudo-label-icon", function(){
    if($(this).hasClass('pseudo-label-aaa-icon')) {
        $('body').addClass('aaa-card-overlay');
        $('#redeem-info').trigger('click');
    }else if($(this).hasClass('pseudo-label-usaa-icon')) {
        $('body').addClass('usaa-card-overlay');
        $('#redeem-info').trigger('click');
    }else{
        $('#'+$(this).attr('data-for')).trigger('click');
    }
});
$("body").on( "change", "#affiliate-member-join", function(event){
    window.checkAAA();
});
$("body").on( "focus", "#aaaProxy1,#aaaProxy2", function(){
    $(this).addClass('active');
});
$("body").on( "blur", "#aaaProxy1,#aaaProxy2", function(){
    $(this).removeClass('active');
});
$("body").on( "keyup paste", "#aaaProxy1.active,#aaaProxy2.active", function(e){
    if($('.res-otr-wrp.usaa-added').length<1){
    var val = $(this).val();
    var valNoSpace = val.replace(/\s/g, '');
    function doGetCaretPosition(ctrl){
        var CaretPos=-1;
        if(ctrl.selectionStart||ctrl.selectionStart==0){
            if(ctrl.selectionStart==ctrl.selectionEnd){
                CaretPos = ctrl.selectionStart;
            }
        }
        return CaretPos;
    }
    function setCaretPosition(ctrl,pos){
        if(ctrl.setSelectionRange){
            ctrl.focus();
            ctrl.setSelectionRange(pos,pos);
        }else if(ctrl.createTextRange){
            var range=ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character',pos);
            range.moveStart('character',pos);
            range.select();
        }
    }
    var curPos=doGetCaretPosition(this);
    var movePos=true;
    var initCharCount=val.length;
    var addSpace=true;
    if(e.keyCode==8&&(curPos==3||curPos==7||curPos==17)){//backspace over space
        addSpace=false;
    }
    var valSpaces = valNoSpace;
    if(curPos==initCharCount){movePos=false}
    if(valNoSpace.length>2){valSpaces = [valSpaces.slice(0, 3), ' ', valSpaces.slice(3)].join('');}
    if(valNoSpace.length>5){valSpaces = [valSpaces.slice(0, 7), ' ', valSpaces.slice(7)].join('');}
    if(valNoSpace.length>14){valSpaces = [valSpaces.slice(0, 17), ' ', valSpaces.slice(17)].join('');}
    if(e.keyCode==8||e.keyCode==46){//backspace or delete
        valSpaces = valSpaces.replace(/\s+$/, '');
    }

    if(initCharCount<valSpaces.length&&curPos>-1&&addSpace===true){//space added
     curPos+=1;
    }
    $('#aaaProxy1,#aaaProxy2').val(valSpaces);
    if(movePos===true&&curPos>-1){
        setCaretPosition(this,curPos);
    }
    $('#affiliate-member-ID').val(valNoSpace).trigger('change');
    }else{
        $('#aaaProxy1,#aaaProxy2').val($(this).val());
        $('#affiliate-member-ID').val($(this).val()).trigger('change');
    }
});
$("body").on( "change", ".res-inr-wrp #redeem", function(){
    if(this.checked !== $('#GPR_Proxy').checked) {
        $('#GPR_Proxy').prop("checked", this.checked);
    }
    var o=$('.discount-code-overlay');
    o.find('.fade-field').removeClass('fade-field')
    o.find("input[type=text]:disabled").closest('div').addClass('fade-field');
});
$("body").on( "change", "#GPR_Proxy", function(){
    if(this.checked !== $('.res-inr-wrp #redeem').checked) {
        $('.res-inr-wrp #redeem').trigger('click');
    }
    var o=$('.discount-code-overlay');
    o.find('.fade-field').removeClass('fade-field')
    o.find("input[type=text]:disabled").closest('div').addClass('fade-field');
});
$("body").on( "click", ".discount-code-trigger", function(){
    var o=$('.discount-code-overlay');
    o.addClass('active');
    o.find('.fade-field').removeClass('fade-field');
    o.find("input[type=text]:disabled").closest('div').addClass('fade-field')
    if(!o.find('#discounts').is(':checked')){
        o.find('#discounts').trigger('click');
    }
    $('body').addClass('discount-overlay-open');
});
$("body").on( "click", ".res-inr-wrp #resformStartTrigger", function(event){
        if($("#resformReflow.inactive").length > 0 && !$("#resformReflow.inactive").hasClass('transition')){
            $('#resformStart').addClass('inactive');
            $('.res-form nav').hide();
            //$('#resFormHero').addClass('reduced');
            //$(".res-otr-wrp").addClass('reduced');
            $("#resformReflow.inactive").addClass('transition').slideDown( 400, "easeOutCustom", function(){
                $(this).removeClass('inactive').removeClass('transition');
                $('.res-inr-wrp #pickup-location').focus();
            });
        }
});

$("body").on( "change", "#rProxyM", function(event){
    $(".pos-box select[name='country_code'] option:selected").removeAttr("selected");
    $(".pos-box select[name='country_code'] option[value="+$(this).val()+']').attr('selected', 'selected');
    $('form[name=selectLanguageTopNav] button').trigger('click');
});

$("body").on( "click", ".r-toggle-a", function(){
    $(this).closest('.r-toggle').addClass('active');
    $('.res-otr-wrp').addClass('r-toggle-open');
});
$("body").on( "change keyup", ".res-inr-wrp #dropoff-location", function(event){
    if($(this).val() !== ""){
        if($("#resformReflow.inactive").length > 0 && !$("#resformReflow.inactive").hasClass('transition')){
            //$(".res-otr-wrp").addClass('reduced');
            $("#resformReflow.inactive").addClass('transition').slideDown( 400, "easeOutCustom", function(){
                $(this).removeClass('inactive').removeClass('transition');
            });
        }
        if (!$('#one-way').is(':checked')){
            $("#one-way").trigger('click');
        }
    }else{
        if ($('#one-way').is(':checked')){
            $("#one-way").trigger('click');
        }
    }
});
}

if(!$("#hp-banner-ads").hasClass('mm-active')){
$.initialize("#hp-banner-ads", function(){
    if(!$(this).hasClass('mm-active')){
        $(this).addClass('mm-active');
        if($("#itn-ta-country").length==0){ //Not for Travel Agents
        var bnrAd1Img='#$(ContentManager:1118-hertzplus-sweeps-globe-small-banner.jpg)!';
        var bnrAd1URL='https://www.hertz.com/rentacar/rental-car-deals/hertzplus-sweepstakes-122018';
        var bnrAd2Img='#$(ContentManager:free_wi_fi_banner_10_1.jpg)!';
        var bnrAd2URL='https://www.hertz.com/rentacar/rental-car-deals/one-month-free-wifi-deal-us-122018';
        var bnrAd3Img='#$(ContentManager:hertz_email_signup_new.jpg)!';
        var bnrAd3URL='https://pub.emails.hertz.com/EmailAcquisition?source=hertzdotcom?&icid_source=enus&icid_campaign=H_A_USCA_IN_EmailAcquisition_Offer&icid_medium=hero_banner_4';
        $("#hp-banner-ads").addClass('mm-active').prepend('<div class="gptAdBlock gptAdBlock-custom"><a href="'+bnrAd1URL+'" class="hp-banner-ad-1"><img src="'+bnrAd1Img+'" alt="" width="300" height="250"></a></div> <div class="gptAdBlock gptAdBlock-custom"><a href="'+bnrAd2URL+'" class="hp-banner-ad-2"><img src="'+bnrAd2Img+'" alt="" width="300" height="250"></a></div> <div class="gptAdBlock gptAdBlock-custom"><a href="'+bnrAd3URL+'" class="hp-banner-ad-3"><img src="'+bnrAd3Img+'" alt="" width="300" height="250"></a></div>');
        }
    }
});
}

if(!$(".res-form").hasClass('mm-active')){
function addFormRow(container, targetId, targetClass, showInnerRow){
    var htmlInnerRow="";
    if(showInnerRow === true){
        htmlInnerRow='<div class="hp-form-row-inr"><div class="hp-form-col-inr hp-form-col-inr-left"></div><div class="hp-form-col-inr hp-form-col-inr-right"></div></div>';
    }
    container.prepend('<div class="homepage-form-row homepage-form-group '+targetClass+'" id="'+targetId+'"><div class="homepage-form-col homepage-form-col-left">'+htmlInnerRow+'</div><div class="homepage-form-col homepage-form-col-right">'+htmlInnerRow+'</div></div>');
}

$.initialize("#modify-error", function(){
    if(!$(this).hasClass('mm-active')){
        $(this).addClass('mm-active');
        $("#rmc-section").prepend('<div id="resformReflowModify"></div>');

        if($("#conf-last-name").length > 0){
            $("#conf-num").closest('div').addClass('homepage-form-row').addClass('homepage-form-group').attr('id','resformReflowModifyFull');
            $("#conf-num").prev().addClass('confirmation-label').attr('for', "conf-num");
            $("#conf-last-name").prev().addClass('confirmation-label-name').attr('for', "conf-last-name");
            $("#conf-num").wrap('<div class="homepage-form-col homepage-form-col-left"></div>');
            $("#conf-last-name").wrap('<div class="homepage-form-col homepage-form-col-right"></div>');
            $(".confirmation-label").prependTo($("#resformReflowModifyFull .homepage-form-col-left"));
            $(".confirmation-label-name").prependTo($("#resformReflowModifyFull .homepage-form-col-right"));
        }else{
            $("#conf-num").prev().addClass('confirmation-label').attr('for', "conf-num");
            $("#conf-num").wrap('<div class="homepage-form-row homepage-form-group" id="resformReflowModifyFull"><div class="homepage-form-col homepage-form-col-full"></div></div>');
            $(".confirmation-label").prependTo('#resformReflowModifyFull .homepage-form-col-full');
        }
    }
});

$.initialize(".lb-content-box #redeem-info-overlay", function(){
    var t = $(this);
    if(!t.hasClass('mm-active')){
        t.addClass('mm-active');

        if($('body').hasClass('aaa-card-overlay')){
            $('body').removeClass('aaa-card-overlay');
            t.closest('.lb-foreground-cont').find('section').first().html('AAA Membership ID');
            t.html('<p>AAA members can enjoy exclusive benefits and savings up to 20% off the base rate* when you include your designated discount code (CDP#) in your reservation.</p><p style="text-align:center"><img src="#$(ContentManager:aaa-membership-card.jpg)!" alt="AAA Card" style="max-width:100%"></p><p>*Base rate includes time and mileage charges only. Taxes and fees excluded.</p>');
        }else if($('body').hasClass('usaa-card-overlay')){
            $('body').removeClass('usaa-card-overlay');
            t.closest('.lb-foreground-cont').find('section').first().html('USAA Member Number');
            t.html('<p>If you are not able to find/recall your member number, <span data-href="'+$('#member-ID-span a').first().attr('href')+'" class="usaa-overlay-link" style="color:#308dff;text-decoration:underline;cursor:pointer">click here</span> to login through USAA.</p>');
        }else{
            var link = $('.res-inr-wrp #res-form #redeem-section .redeem a');
            if(link.length>0){
                t.find('#mmRedeemLink').remove();
                t.append('<p id="mmRedeemLink"></p>');
                link.clone().attr('target', '_blank').attr('onclick','javascript:window.location=this.getAttribute("href")').appendTo(t.find('#mmRedeemLink'));
            }
        }
    }
});

$.initialize("#gaq-section.hidden", function(){
    $('.res-inr-wrp').addClass('single-button-lookup');
});

$.initialize(".rental-info", function(){
    var t=$(this);
    if(!t.hasClass('mm-active')){
        t.addClass('mm-active');
        t.find('.rental-date').before('<div class="rental-title">Upcoming Reservation</div>')
        t.find('.member-res-search').text('View Trip Summary');
        t.find('.rental-date').html(function (i, html){
            html=html.split(', ');
            var htmlString="";
            for(var i=0; i<html.length; i++){
                if(i > 1){
                    htmlString += ', ';
                }
                if(i > 0){
                    htmlString += html[i];
                }
            }
            return htmlString;
        });
        t.insertBefore("#other-res-search");
    }
});

$.initialize(".res-form", function(){
    var t=$(this);
    if(!t.hasClass('mm-active')){
        t.addClass('mm-active');
        t.wrapInner('<div class="res-otr-wrp"><div class="res-inr-wrp"><div class="res-pos-rel"></div></div></div>');
        t.find('#error-list').insertBefore(t.find('.res-pos-rel'));
        if(t.find("#pickup-location").val() !== "" || t.find("#dropoff-location").val() !== ""){
            //t.find('.res-otr-wrp').addClass('reduced-no-transition');
            //t.find('nav').hide();
        }
        if($('#gaq-section').hasClass('hidden')){
            t.find('.res-inr-wrp').addClass('single-button-lookup');
        }
        window.checkAAA();
    }
});

$("body").on( "change keyup blur", ".res-inr-wrp #dropoff-location,.res-inr-wrp #pickup-location", function(event){
    window.checkAAA();
    setTimeout(window.checkAAA,500);
    setTimeout(window.checkAAA,1000);
});
$.initialize("#res-home-page #res-form", function(){
    var t=$(this);
    if(!t.hasClass('mm-active')){
    t.addClass('mm-active');
    if(t.closest("#res-flow-edit").length < 1){
        if(t.find('#resformMMActive').length < 1 && $("#pickupLocationLabel").length < 1){
            if(t.find('#itn-modify-keep-rate').length > 0){
                t.find('#itn-modify-keep-rate input[type=checkbox]').attr('id','originalRqCheckBox');
            }
            t.find("#car-type option").first().attr('selected', true);
            t.wrapInner('<div id="resformMMActive" class="mm-active"></div>');
            t.append('<div class="discount-code-overlay"><div class="discount-code-overlay-inner" id="discountCodeOverlay"></div></div>');
            var discOverlay=$('#discountCodeOverlay');
            discOverlay.append('<div class="modal-close-row"><div class="modal-close-title">Discount Code</div><a class="modal-close-icon"><img src="#$(ContentManager:hertz-modal-icon-close.png)!" alt="Close" width="18" height="18"></a></div>');

            if(t.find('#redeem-section .redeem label').first().length > 0) {
                var redeemLabel=t.find('#redeem-section .redeem label').first().text();
                redeemLabel=redeemLabel.replace('Learn More About Your Points','');
                discOverlay.append('<div class="gpr-checkbox-row"><label for="GPR_Proxy"><input id="GPR_Proxy" type="checkbox">'+redeemLabel+'</label></div>');
            }
            $('#GPR_Proxy').prop("checked", $(".res-inr-wrp #redeem").checked);
            if($('#loginLink').length<1&&($('#discounts').prop('checked')===false || (
                $("input[name='pcNumber']").val()==''&&
                $("input[name='typeInRateQuote']").val()==''&&
                $("input[name='cvNumber']").val()==''&&
                $("input[name='itNumber']").val()=='') )

            ){
                if($(".res-inr-wrp #redeem").prop("checked")===false){
                    $(".res-inr-wrp #redeem").trigger('click');
                    $('#GPR_Proxy').prop("checked",true);
                }
                $('.res-inr-wrp #redeem-section').hide();
            }

            $("#itn-discounts").appendTo(discOverlay);

            if(discOverlay.find('#GPR_Proxy').length<1){
                discOverlay.addClass('no-gpr');
            }
            var displayedCodes=false;

            t.find("#redeem-section input, #itn-discounts input").each(function(index){
                if(!$(this).closest('div').hasClass('hidden')){
                    displayedCodes=true;
                    return false;
                }
            });

            discOverlay.append('<div class="modal-footer-button-row"><a href="javascript:void(0);" class="modal-button-cancel">Cancel</a><a href="javascript:void(0);" class="modal-button-apply">Apply</a></div>');

            discOverlay.find('#discounts').prependTo(discOverlay.find("label[for='discounts']").first());
            discOverlay.find('#discounts').parent().after('<p style="margin: 0 0 0 21px;">If you are using a partner Discount Code, we will validate your Member ID at pickup.</p>');
            window.checkAAA();
            if($("#res-submit-btns button").length==1){ //Only One Button
                $(".res-inr-wrp").addClass('single-button');
            }
            t.find("#itn-location").wrapInner('<div class="homepage-form-row homepage-form-group"></div>');
            t.find("#pickup-location").closest('.clearfix').addClass('homepage-form-col').addClass('homepage-form-col-left').addClass('resFormLocationLeft');
            t.find("#return-loc").addClass('homepage-form-col').addClass('homepage-form-col-right').addClass('resFormLocationRight');
            t.find(".resFormLocationLeft").prepend('<label for="pickup-location" id="pickupLocationLabel">'+$("#itn-location h3").first().text()+'</label>');
            t.find("#itn-location h3").first().closest('div').hide();
            t.find(".resFormLocationRight").prepend('<label for="dropoff-location">'+$("#return-loc h3").first().text()+'</label>');
            t.find("#return-loc h3").first().closest('div').hide();
            t.find("#dropoff-location").attr('placeholder', 'Same as Pickup');

            if($("#resFormHero").length<1){
                $('#res-home-page').prepend('<div id="resFormHero"><div class="hero-row"><div class="hero-col hero-col-left"><div class="hero-col-left-inner"><div class="hero-col-left-max-width"><h1 class="hero-h1">We\'re here<br> to get you there.</h1></div></div></div><div class="hero-col hero-col-right"><img src="#$(ContentManager:hertz-hero-road-mobile.jpg)!" class="hero-mobile-img"></div></div></div>');
            }
            if(t.find('#itn-age').length>0){
                t.find('#itn-age').wrap('<div id="resformReflow"></div>');
            }else{
                t.find(".location-dates-arrival .location").after('<div id="resformReflow"></div>');
            }

            t.find("#resformReflow").before('<div id="resformStart"><h2 class="reservation-start">Start your reservation.</h2><div id="resformStartTrigger"><img src="#$(ContentManager:icon-pickup-location.png)!" alt="" height="22"> Pick-up Location</div></div>');
            /*
            if(t.find("#pickup-location").val()=="" && t.find("#dropoff-location").val()==""){
                t.find("#resformReflow").addClass('inactive');
                t.find(".res-otr-wrp").removeClass('reduced-no-transition').removeClass('reduced');
            } else {
                t.find('#resformStart').hide();
                $('#resFormHero, .res-otr-wrp').addClass('reduced');
                t.find('nav').hide();

            }
            */
            t.find("#resformReflow").addClass('inactive');
            t.find(".res-otr-wrp").removeClass('reduced-no-transition').removeClass('reduced');

            addFormRow($("#resformReflow"), 'resFormDateRow', 'date-time', true);
            t.find('#itn-location').prependTo('#resformReflow');
            var pickupDateTimeText=$(".pickup-date h3").first().text();
            var pickupDateText="";
            var pickupTimeText="";
            if(pickupDateTimeText.indexOf("Pickup Date & Time") >= 0){
                pickupDateText="Pickup Date";
                pickupTimeText="Pickup Time";
            }else{
                pickupDateText=pickupDateTimeText;
            }
            t.find("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-left").prepend('<div class="pseudo-label" data-for="pickup-date-box">'+pickupDateText+'</div>');

            t.find(".pickup-date h3").first().closest('div').hide();
            t.find("#pickup-date-box").appendTo($("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-left"));

            t.find("select[name='pickupTime']").attr('id','pickupTimeSelect');
            t.find("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-right").prepend('<label for="pickupTimeSelect">'+pickupTimeText+'</label>');
            t.find("#pickup-time").appendTo($("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-right"));

            var returnDateTimeText=t.find(".dropoff-date h3").first().text();
            var returnDateText="";
            var returnTimeText="";
            if(returnDateTimeText.indexOf("Return Date & Time") >= 0){
                returnDateText="Return Date";
                returnTimeText="Return Time";
            }else{
                returnDateText=returnDateTimeText;
            }
            t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-left").prepend('<div class="pseudo-label" data-for="dropoff-date-box">'+returnDateText+'</div>');

            t.find(".dropoff-date h3").first().closest('div').hide();
            t.find("#dropoff-date-box").appendTo(t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-left"));
            t.find("select[name='dropoffTime']").attr('id','dropoffTimeSelect');
            t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-right").prepend('<label for="dropoffTimeSelect">'+returnTimeText+'</label>');
            t.find("#dropoff-time").appendTo(t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-right"));
            var discountCodeHTML='<div class="discount-code-wrap"><div class="discount-code-label">Discount Code</div><div class="discount-code-value"></div></div>';

            if(t.find('#itn-age').length>0  && displayedCodes === true){//Age and Discount
                t.find('#itn-age').wrap('<div id="discountRowWrap"><div class="homepage-form-row homepage-form-group resform-row-3"><div class="homepage-form-col homepage-form-col-left" id="resRow3ColLeft"><div class="homepage-form-row homepage-form-group resform-row-code-age"><div class="homepage-form-col homepage-form-col-right" id="resAgeCol"></div></div></div></div></div>');
                t.find('#resRow3ColLeft').after('<div class="homepage-form-col homepage-form-col-right" id="resAAACol"></div>');
                t.find('#resAgeCol').before('<div class="homepage-form-col homepage-form-col-left" id="resDiscCol"></div>');
                t.find("#resDiscCol").addClass('discount-code-trigger').append(discountCodeHTML);
                t.find('#resAAACol').html('<div class="aaa-proxy-field"><label for="aaaProxy2"><span class="proxy-label-aaa">AAA Membership ID #: <span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-aaa-icon"></span></span><span class="proxy-label-usaa">USAA Members <span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-usaa-icon"></span></span></label><input type="text" value="" name="aaaProxy2" id="aaaProxy2"></div>');
                $('#aaaProxy1,#aaaProxy2').val($('#affiliate-member-ID').val());
                $('#aaaProxy1').addClass('active').trigger('keyup').removeClass('active');
                window.checkAAA();
                setTimeout(window.checkAAA,500);
                setTimeout(window.checkAAA,1000);
                setTimeout(window.checkAAA,2000);
            }else if($("#itn-age").length > 0){ //No Discounts, But Has Age Ex. Applicant
                t.find('#itn-age').wrap('<div class="homepage-form-row"><div class="homepage-form-col homepage-form-col-full" id="resAgeCol"></div></div>');
            }else if(displayedCodes === true){ //Discount Only
                t.find("#resformReflow").append('<div class="homepage-form-row homepage-form-group homepage-form-row-discount-only" id="discountCodeOnly"><div class="homepage-form-col homepage-form-col-full" id="resDiscCol"></div></div>');
                t.find("#discountCodeOnly .homepage-form-col-full").addClass('discount-code-trigger').append(discountCodeHTML);
                t.find("#discountCodeOnly").wrap('<div id="discountRowWrap"></div>');
            }
            t.find("#redeem-info").addClass('pseudo-label-help-icon').removeClass('icons-info_sm');
            if(t.find('#discountRowWrap').length > 0){
                $("#redeem-section").prependTo("#resDiscCol");
            }
            window.updateDiscountCode();
            t.find('#itn-modify-keep-rate').appendTo('#resformReflow');

            if($('#loginLink').length>0){
                var rToggle = '<div class="r-toggle"><span class="r-toggle-text">Country of Residence: <span class="r-toggle-cur-country"></span></span><div class="r-toggle-edit"><a href="javascript:void(0);" class="r-toggle-a">Edit</a></div><div class="r-toggle-select"><div class="homepage-form-group"><div class="homepage-form-col"><label for="rProxyM" id="rToggleLabel">Country of Residence:</label></div></div></div></div>';
                $('#resformReflow').append('<div id="rToggleM">'+rToggle+'</div>');
                $(".pos-box select[name='country_code']").clone().attr('name', 'r-proxy-m').attr('id', 'rProxyM').insertAfter($('#rToggleLabel'));

                if($(".pos-box select[name='country_code'] option:selected").length<0){
                    $('.r-toggle-cur-country').text($(".pos-box select[name='country_code']").val());
                } else if ($('.languageselector span:contains("US")').length > 0) {
                    $('.r-toggle-cur-country').text('US');
                } else if ($('.languageselector span:contains("CA")').length > 0) {
                    $('.r-toggle-cur-country').text('CA');
                }
                $('.res-otr-wrp').addClass('r-toggle-added');
            }
            if(t.find("#itn-ta-country").length > 0){ //Travel Agent Country
                t.find("#itn-ta-country").prependTo('#resformReflow');
                t.find("#itn-ta-country").wrap('<div class="homepage-form-row homepage-form-group"></div>');
                t.find("#itn-ta-country").addClass('homepage-form-col').addClass('homepage-form-col-full');
                t.find("#itn-ta-country strong").wrap('<label for="itn-ta-country"></label>');
                $('.res-otr-wrp').addClass('travel-agent-form');
            }
            if(t.find("#itn-ta-member-info").length > 0){ //Travel Agent Club #
                t.find('#itn-ta-member-info').appendTo('#resformReflow');
                t.find("#itn-ta-member-info .row").addClass('homepage-form-row').addClass('homepage-form-group');
                t.find("#itn-ta-member-info .row").html(function (i, html){
                    return html.replace(/label/g, 'div');
                });
                t.find("#itn-ta-member-info input[name='no1ClubNumber']").attr('id', 'no1ClubNumber').closest('div').addClass('homepage-form-col').addClass('homepage-form-col-left');
                t.find("#itn-ta-member-info input[name='lastName']").attr('id', 'taLastName').closest('div').addClass('homepage-form-col').addClass('homepage-form-col-right');
                t.find("#itn-ta-member-info .homepage-form-col-left strong").wrap('<label for="no1ClubNumber"></label>');
                t.find("#itn-ta-member-info .homepage-form-col-right strong").wrap('<label for="taLastName"></label>');
            }
            t.find('#res-submit-btns').appendTo(t.find("#resformReflow"));
            t.find('#res-submit-btns').after('<div class="resform-end"></div>');
            t.find('.member-other').html(function (i, html){
                return html.replace("&nbsp;", "");
            });
        }
    }
    t.addClass('mm-init');
    }
});

$.initialize("#res-home-page #res-form.mm-init #age-dropdown", function(){
    var t = $(this);
    if(!t.hasClass('mm-active')){
        var p = t.closest('#itn-age');
        if(p.find('#ageSelectorLabel').length<1){
            p.prepend('<label for="ageSelector" id="ageSelectorLabel">Age<span class="pseudo-label-icon pseudo-label-help-icon" data-for="age-info-link"></span></label>');
        }
        t.find('option:contains("Please Select an Age")').text(" ");
        p.find('#age-info-link').closest('div').hide();
    }
});
$.initialize("#ageAdvisory", function(){
    var t = $(this);
    if(!t.hasClass('mm-active')){
        t.wrapInner('<div class="age-advisory-inner"></div>');
    }
});
$("body").on( "change", "#ageSelector", function(event){
    if($('#ageAdvisory').css("display") == 'block'){
        $('#resformMMActive').addClass('age-advisory-expanded');
    }else{
        $('#resformMMActive').removeClass('age-advisory-expanded');
    }
});
$("body").on( "click", ".usaa-overlay-link", function(event){
    window.location=$(this).attr('data-href');
});

$("body").on( "click", "#res-submit-btns .login-submit", function(event){
    if($('#loginLink').length==1&&($('#discounts').prop('checked')===false || (
        $("input[name='pcNumber']").val()==''&&
        $("input[name='typeInRateQuote']").val()==''&&
        $("input[name='cvNumber']").val()==''&&
        $("input[name='itNumber']").val()=='') )

    ){
        if($(".res-inr-wrp #redeem").prop("checked")===false){
            $(".res-inr-wrp #redeem").trigger('click');
            $('#GPR_Proxy').prop("checked",true);
        }
    }
});


}

if(!$("body").hasClass('mm-header-active')){
    $("body").addClass('mm-header-active');

    $.initialize("#header-container", function(){
    if(!$(this).hasClass('mm-active')){
        $(this).addClass('mm-active');
        if($('#header-container #cookieLink').length > 0){
            $('#header-container #cookieLink .fullSwitchProfileLink a').html(function (i, html){
                return html.replace("Please ", "");
        });
        var container=$('#header-container .cookiedLinks');
        container.after('<ul class="top-nav-registered-menu" id="topNavRegisteredMenuCookied"></ul>');
            container.find('.fullSwitchProfileLink.switchProfileLink').first().appendTo('#topNavRegisteredMenuCookied');
            $('#topNavRegisteredMenuCookied').clone().attr('id', 'topNavRegisteredMenuCookiedMobile').prependTo('#nav-container');
        }
        $("#header-container").closest('header').addClass('header-primary');
        $(".header-primary").wrapInner('<div class="header-wrap-mobile"><div class="header-outer-mobile"><div class="header-inner-mobile"><div class="header-inner-mobile-wrap"></div></div></div></div>');
        $(".header-outer-mobile").before('<div class="header-mobile-wrap"><div class="header-mobile"><div class="header-mobile-menu"><a href="javascript:void(0);"></a></div><div class="header-mobile-logo"></div><div class="header-mobile-actions"></div></div></div>');
        $(".header-outer-mobile").append('<div class="search-container-wrap"><div class="search-container"><form name="submitProxyForm" id="submitProxyForm" action="https://www.hertz.com/rentacar/customersupport/index.jsp" method="post"><div class="search-inner-row"><div class="search-inner-col search-inner-col-left"><input name="searchProxy" id="searchProxy" type="text"></div><div class="search-inner-col search-inner-col-right"><a href="javascript:void(0);" id="headerSearchCancel">Cancel</a></div></div><a href="javascript:void(0);" class="header-search-tracking"></a></form></div></div>')

        var initMenu=false;
        if(!$("#welcomeMsg").hasClass('mm-active')){
            $.initialize("#welcomeMsg", function(){
                if(!$(this).hasClass('mm-active')){
                    $(this).addClass('mm-active');
                    if(initMenu === false){
                        initMenu=true;
                        var container=$('#welcomeMsg').closest('.emember-container');
                        $('#welcomeMsg').addClass('mm-active');
                        container.addClass('mm-active');
                        if(container.find('.useraccount').length > 0 || container.find('#logOut').length > 0){
                            container.append('<ul class="top-nav-registered-menu" id="topNavRegisteredMenu"></ul>');
                            container.find('.useraccount').appendTo('#topNavRegisteredMenu');
                            container.find('#logOut').appendTo('#topNavRegisteredMenu');
                            $('#topNavRegisteredMenu').clone().attr('id', 'topNavRegisteredMenuMobile').prependTo('#nav-container');

                        }
                    }
                }
            });
        }

        if(!$("#searchBoxOverlayContainer").hasClass('mm-active')){
            $.initialize("#searchBoxOverlayContainer", function(){
                if(!$(this).hasClass('mm-active')){
                    $(this).addClass('mm-active');
                    $("#searchBoxOverlayContainer").addClass('mm-active');
                    $('.search-box').appendTo('.pos-container');
                    $('.pos-container .search-box').wrap('<div class="header-col header-col-icons"></div>')
                    $('.pos-container ul').first().wrap('<div class="header-col header-col-ul"></div>');
                    $(".header-col-ul").children('li').addClass('header-col-li');



                }
            });
            if(!$("#header-container .utility-bar #member-name-points-info").hasClass('mm-active')){ //
                $.initialize("#header-container .utility-bar #member-name-points-info", function(){
                    if(!$(this).hasClass('mm-active')){
                        $(this).addClass('mm-active');
                        if($("#searchBoxOverlayContainer").length==0 && $('.pos-container .change-link a').length==0){
                            $(this).addClass('no-dropdown');
                            $(this).closest('.utility-bar').find('.pos-container').first().addClass('no-dropdown');
                        }
                    }
                });
            }

        }

        $.initialize("#headerSearchNav", function(){
            if(!$(this).hasClass('mm-active')){
                $(this).addClass('mm-active');
                $("#headerSearchNav, .header-mobile-actions").append('<div class="mm-search-icon"><a class="mm-header-search-icon" id="headerSearchIcon" href="javascript:void(0);"><img src="#$(ContentManager:hertz-nav-header-search-icon-black.png)!" alt="Search" width="18" height="18"></a></div>');
            }
        });

        $.initialize("#social-email", function(){
            var t = $(this);
            if(!t.hasClass('mm-active')){
                t.addClass('mm-active');
                var emailForm='<div class="header-email-form-wrap"><form class="header-email-form" name="headerEmailForm" action="https://email.hertz.com/apps/JoinMarketing" method="get"><div class="header-email-row"><div class="header-email-col header-email-col-left"><div class="header-email-error">You must enter a valid email address</div><input type="text" placeholder="Enter your email and save 10%" class="header-email-input"></div><div class="header-email-col header-email-col-right"><input type="submit" class="header-email-submit" value="Sign Up"></div></div></form></div>';

                if($('#loginLink').length>0&&$('#social-email').length>0){
                    $(".header-col-ul").after('<div id="headerEmailD">'+emailForm+'</div>');
                    $('.header-inner-mobile').after('<div id="headerEmailM">'+emailForm+'</div>');
                }
            }
        });

        $.initialize(".logo-container .logo-box", function(){
            var t = $(this);
            if(!t.hasClass('mm-active')){
                t.addClass('mm-active');
                t.find('img').attr('src','#$(ContentManager:hertz-logo-black.png)!');
                $(".logo-container .logo-box").clone().appendTo('.header-mobile-logo');
                t.addClass('mm-branding-update');
                var brg = 'Our Best Rate Guaranteed*';
                t.after('<div class="header-brg"><div class="header-brg-text">'+brg+'</div></div>');
                $('.header-inner-mobile').append('<div class="header-brg-mobile">'+brg+'</div>');
                if(getCookie('mm-h0020-brg-animate') !== 'true'){
                    createCookie('mm-h0020-brg-animate', 'true', 30);
                    setTimeout(function(){
                        $(".header-brg").addClass('active');
                    }, 1500);
                }else{
                    $(".header-brg").addClass('active').addClass('no-animation');
                }
            }
        });

        $.initialize("#nav-container .nav-menu", function(){
            if(!$(this).hasClass('mm-active')){
                $(this).addClass('mm-active');

                $(this).find( "dl" ).each(function(index){
                    $(this).wrap('<div class="nav-mobile-expandable-section"></div>');
                    $(this).closest('td').find('span').first().wrap('<div class="nav-mobile-expandable-link"></div>');

                });

                $(this).find( "td" ).each(function(index){
                    $(this).addClass('nav-primary-set');
                    if($(this).find('.nav-mobile-expandable-section').length < 1){
                        $(this).addClass('nav-primary-link-no-menu').addClass('nav-primary-animate-hover');
                    }else{
                        $(this).addClass('nav-primary-link-with-menu').addClass('nav-primary-animate-hover');
                    }
                });

                if(!$('body').hasClass('mm-content-page')) {
                    $('.nav-primary-link-with-menu').first().addClass('active-menu').removeClass('nav-primary-animate-hover');
                } else {
                    var url = window.location.pathname + window.location.search;

                    $(this).find( ".nav-primary-set a" ).each(function(index){
                        var href = $(this).attr('href');
                        href = href.replace('https://www.hertz.com','');
                        if(url.indexOf(href)>-1) {
                            $(this).closest('td').addClass('active-menu').removeClass('nav-primary-animate-hover');
                            return false;
                        } else if(href=='/rentacar/member/enrollment/gold/step' && url.indexOf('/rentacar/member/enrollment')>-1) {
                            $(this).closest('td').addClass('active-menu').removeClass('nav-primary-animate-hover');
                            return false;
                        }
                    });
                }
                $(this).find('.nav-mobile-expandable-link span:contains("HERTZ+")').text('Hertz+');
                $(this).find('tr').first().append('<td id="headerSearchNav"></td>');
            }
        });
    }
});



$.initialize("header .logo-container", function(){
    if(!$(this).hasClass('mm-active')){
        $(this).addClass('mm-active');
        $("header .logo-container").first().prependTo( ".nav-menu" );
    }
});

$.initialize("#homePageLoginOverlay", function(){
    var t=$(this);
    if(!t.hasClass('mm-active')){
        t.addClass('mm-active');
        $('#accountMobSctn').remove();
        t.find('#loginFormInner').clone(true).attr('id','accountMobSctn').addClass('mm-hdr-mob-sctn').appendTo('#topNavRegisteredMenuMobile .useraccount');
        $('#accountMobSctn #loggedUserDetails').attr('id', 'loggedUserDetailsMob');
        $('#topNavRegisteredMenuMobile .myaccount').addClass('nav-mobile-expandable-link-style');
        var usePoints = t.find('#loggedUserDetails a[href$="awardsTab.do"]').first().closest('li');
        if(usePoints.length>0){
            if(t.find('#loggedUserDetails a[href*="hertzrewards.hertz.com"]').length<1){
            usePoints.after('<li class="mm-auc"><a href="https://hertzrewards.hertz.com/">Hertz Rewards</a></li>');
            }
        }
    }
});

    $("body").on( "submit", ".header-email-form", function(event){
        event.preventDefault();
        var emailValue=$(this).find('.header-email-input').val();
        function validateEmail(email){
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        if(validateEmail(emailValue)){
            $(this).removeClass('error');
            $('#social-email').attr('value', emailValue);
            $('#social-email').closest('form').find('button').trigger('click');
        }else{
            $(this).addClass('error');
        }
    });

    $( "body" ).on( "click", "#header-container #cookieLink .fullSwitchProfileLink a", function(){
        $("#homePageLoginOverlay").toggleClass('mm-force-show');
    });

    $( "body" ).on( "click", ".header-primary", function(event){
        if($(event.target).closest('.cookieLink').length<1 && $(event.target).closest('.mm-force-show').length<1){
            $("#homePageLoginOverlay").removeClass('mm-force-show');
        }
    });

    $( "body" ).on( "click", ".header-primary #myaccount", function(){
        $('.nav-mobile-expandable-link-style').toggleClass('nav-mobile-expandable-link-style-inactive');
        $("#accountMobSctn").stop(true, false).slideToggle( 300 );
    });

    $( "body" ).on( "click", "#headerSearchIcon, #headerSearchIconMobile, #headerSearchCancel", function(){
        $('#headerSearchIcon, #headerSearchIconMobile').toggleClass('active');
        $(".search-container").stop(true, false).slideToggle( 300 );
        $(".header-primary").toggleClass('search');
        if($('#headerSearchIcon').hasClass('active')){
            $("#searchProxy").focus();
        }
        if($(".header-mobile-menu").hasClass('active')){
            $(".header-mobile-menu").toggleClass('active');
            $(".header-primary").toggleClass('expanded');
            $(".header-inner-mobile").stop(true, false).slideToggle( 300 );
        }
    });

    $( "body" ).on( "click", ".nav-mobile-expandable-link", function(){
        var curContainer=$(this).closest('td');
        curContainer.addClass('current');
        curContainer.toggleClass('mobile-expand-active');
        if($('.mobile-expand-active').length > 0){
            $('.mobile-expand-active').each(function(index){
                if(!$(this).hasClass('current')){
                    $(this).removeClass('mobile-expand-active');
                    $(this).find('.nav-mobile-expandable-section').stop(true, false).slideToggle( 300 );
                }
            });
        };
        curContainer.find('.nav-mobile-expandable-section').stop(true, false).slideToggle( 300 );
        curContainer.removeClass('current');
    });

    $("body .nav-primary-animate-hover").on({ mouseenter: function (){
        $(this).removeClass('nav-primary-anchor-right');
    }, mouseleave: function (){
        $(this).addClass('nav-primary-anchor-right');
    }});

    function headerSizing(){
        var height=0;
        if($('.header-primary').hasClass('header-collapsed')){
            height=60;
        }else{
            height=135;
        }
        $('body').css('padding-top', height);
    }

    headerSizing();

    $(window).resize(function(){
         headerSizing();
    });

    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if ( scrollTop > 0){
            if(!$('.header-primary').hasClass('header-collapsed')){
                $('.header-primary').addClass('header-collapsed');
                headerSizing();
            }
        }else{
            if($('.header-primary').hasClass('header-collapsed')){
                $('.header-primary').removeClass('header-collapsed');
                headerSizing();
            }
        }
    });

    $("body").on( "change keyup", "#searchProxy", function(event){
        $("#search-input").val($('#searchProxy').val()).trigger('click');
    });

    $("body").on( "submit", "#submitProxyForm", function(event){
        event.preventDefault();
        $("#search-input").val($('#searchProxy').val());
        $('.header-search-tracking').trigger('click');
        $("#search-input").closest('div').addClass('lb-foreground-cont');

        setTimeout(function(){
            $("#search-button-trigger").trigger('click');
        }, 100);
    });

    $( "body" ).on( "click", ".header-mobile-menu", function(){
        $(".header-mobile-menu").toggleClass('active');
        $(".header-primary").toggleClass('expanded');
        if($(".header-primary").hasClass('expanded')){
            $('body').addClass('mobile-main-menu-open');
        }else{
            $('body').removeClass('mobile-main-menu-open');
        }
        $(".header-inner-mobile").stop(true, false).slideToggle( 300 );
        if($("#headerSearchIcon").hasClass('active')){
            $('#headerSearchIcon, #headerSearchIconMobile').toggleClass('active');
            $(".header-primary").toggleClass('search');
            $(".search-container").stop(true, false).slideToggle( 300 );
        }
    });
    $( "body" ).on( "click", ".homeloggedUserDetails", function(event){
        if(!$(this).hasClass('no-cursor')){
            $('#header-container .homeloggedUserDetails').toggleClass('active');
            $("#topNavRegisteredMenu").toggleClass('active');
            $("#topNavRegisteredMenuMobile").stop(true, false).slideToggle( 300 );
        }else{
            if($(event.target).closest("a").length < 1){
            event.preventDefault();
            }
        }
    });
    $( "body" ).on( "click", "#header-container .cookiedLinks .fullswitchprofilelinktext", function(event){
        if(!$(this).hasClass('no-cursor')){
            $(this).toggleClass('active');
            $("#topNavRegisteredMenuCookied").toggleClass('active');
            $("#topNavRegisteredMenuCookiedMobile").stop(true, false).slideToggle( 300 );
        }else{
            if($(event.target).closest("a").length < 1){
            event.preventDefault();
            }
        }
    });
}

// <style type="text/css">
//  /*-- Footer --*/
//  /*@CSSINCLUDE:footer*/
// </style>
/*-- Footer --*/

if(!$('#footer-container').hasClass('mm-active')){
//  var cssFromJS = '';
//  for (var name in window.h0020CSS) {
//          if(css.indexOf('/*@CSSINCLUDE:'+name+'*/') > -1) {
//              css = css.replace("/*@CSSINCLUDE:"+name+"*/", window.h0020CSS[name]);
//          }
//  }
//
//  window.footerCSS = css;

    $.initialize("#footer-container.mm-active", function(){
        if(!$(this).hasClass('mm-active-action')){
            $(this).addClass('mm-active-action');
            $( "body" ).on( "click", ".title-table .title", function(){
                var curContainer=$(this).closest('ul');
                curContainer.addClass('current');
                if($('#footer-container .title-table ul.active').length > 0){
                    $('#footer-container .title-table ul.active').each(function(index){
                        if(!$(this).hasClass('current')){
                            $(this).find('dl').stop(true, false).slideToggle( 300 );
                            $(this).removeClass('active');
                        }
                    });
                }
                curContainer.toggleClass('active');
                curContainer.find('dl').stop(true, false).slideToggle( 300 );
                curContainer.removeClass('current');
            });
        }
    });
    $.initialize("#footer-container.mm-active #seo-content", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            $(this).insertBefore("#social-bar");
        }
    });
    $.initialize("#footer-container.mm-active #social-bar", function(){
        var t=$(this);
        if(!t.hasClass('mm-active')){
            t.addClass('mm-active');
            var appLabel = '<div class="footer-app-label social-footer-label">Download Our App</div>';
            var appLabelMobile = '<div class="footer-app-label">Download Our App</div>';
            var appLink = '<div class="footer-app-link"><a href="https://go.onelink.me/qgdE/hertzWebFooterDownload2019"><img src="#$(ContentManager:hertz-footer-icon-app.png)!" alt="Hertz App"></a></div>';
            t.find('form').wrap('<div class="footer-social-row"><div class="footer-social-col footer-social-col-left"></div></div>').prepend('<div class="social-email-label-wrap"><label for="social-email" class="social-email-label">Email Offers from Hertz</label></div>');
            $("#social-bar ul").first().addClass('social-icon-ul');
            t.find('.footer-social-col-left').after('<div class="footer-social-col footer-social-col-middle"><div class="footer-app-link-wrap">'+appLabel+appLink+'</div></div><div class="footer-social-col footer-social-col-right"><div class="social-footer-label social-footer-label-desktop">Follow Us on Social Media.</div></div>')
            $(".social-icon-ul").wrap('<div class="social-icon-container"></div>');
            t.find('.social-icon-container').appendTo(t.find('.footer-social-col-right'));

            t.find('img').each(function(index){
                var src="";
                var t2=$(this);
                if(t2.attr('alt')=="Facebook"){
                    src="#$(ContentManager:hertz-footer-icon-facebook.png)!";
                }else if(t2.attr('alt')=="Twitter"){
                    src="#$(ContentManager:hertz-footer-icon-twitter.png)!";
                }else if(t2.attr('alt')=="Instagram"){
                    src="#$(ContentManager:hertz-footer-icon-instagram.png)!";
                }else if(t2.attr('alt')=="YouTube"){
                    src="#$(ContentManager:hertz-footer-icon-youtube.png)!";
                }else if(t2.attr('alt')=="Google Plus"){
                    src="#$(ContentManager:hertz-footer-icon-gplus.png)!";
                }
                if(src !== ""){
                    t2.attr('src', src);
                }
            });

            var target = $('#seo-content');
            if(target.length<1){
                target = $('#social-bar');
                target.addClass('no-seo-section');
            }
            $(".social-icon-container").clone().append('<div class="social-footer-label social-footer-label-mobile">Follow Us on Social Media.</div>').addClass('social-icon-container-mobile').insertBefore(target);
            target.before('<div class="social-footer-app-mobile">'+appLink+appLabelMobile+'</div>');
        }
    });
    $.initialize("#footer-container.mm-active #mob-links", function(){
    var t=$(this);
    if(!t.hasClass('mm-active')){
        t.addClass('mm-active');
        $("#opinionLab").before('<li class="view-on-desktop-link"></div>');
        t.find('a[href*="deviceGroup=desktop"]').appendTo('.view-on-desktop-link');
    }
    });

    $.initialize("#footer-container.mm-active #copyright-content", function(){
    var t=$(this);
    if(!t.hasClass('mm-active')){
        t.addClass('mm-active');
        t.wrapInner('<div class="copyright-content-inner"></div>');
        t.find('a').first().before('<br />');
        $("#footer-parsys").prependTo(this);
    }
    });

    $.initialize("#footer-container #title-links", function(){
        if(!$(this).hasClass('mm-active')){
            $(this).addClass('mm-active');
            if($(this).find('dl').length > 0) {
                // dom.addCss(footerCSS);
                $('#footer-container').addClass("mm-active");
            } else {
                $('#footer-container').wrapInner('<div style="width:100%;max-width:1248px;margin:0 auto"></div>');
            }
        }
    });
}

/*-- Global --*/
if(!$("body").hasClass('mm-gpr-navigation-active')){
    $("body").addClass('mm-gpr-navigation-active');

    $.initialize(".emember-container.myaccount#myaccount", function(){
        $("body").addClass('mm-gpr-navigation');
    });
    $.initialize("#mobile-nav-member-info", function(){
        $("body").addClass('mm-gpr-navigation');
        var t=$(this);
        if(!t.hasClass('mm-gpr') && t.length>0){
        t.addClass('mm-gpr');
        t.insertAfter('#myaccount .homeloggedUserDetails');
        $('#mobile-nav-member-menu').insertBefore($('#nav-container table').first());
        if($('#mobileWebMemberInfoUL a:contains("Logout")').length<1) {
            $('#loginFormContainer #logOut').clone().attr('id','').appendTo($('#mobileWebMemberInfoUL'));
        }
        if($('#loggedInTravelAgent').css("display") == 'list-item'){
            $('#loggedInTravelAgent').append('<div class="ta-logout"></div>');
            $('#topNavRegisteredMenu #logOut a').clone().appendTo($('#loggedInTravelAgent .ta-logout'));
            $('#mobileWebArrowDropdown').addClass('ta-hide');
            $('.homeloggedUserDetails, #header-container .cookiedLinks .fullswitchprofilelinktext').addClass('no-cursor');
        }
        if($('#homeloggedUserDetails a:contains("Logout")').length<1 && $('.change-link a').length<1 && $.trim($('.welcometext').first().text()).length < 1) {
            $('li#logOut').first().appendTo($('.homeloggedUserDetails').first());
            $('.homeloggedUserDetails #logOut').addClass('applicant').wrapInner('<div class="ta-logout"></div>');
            $('.homeloggedUserDetails #logOut').closest('article').closest('li').addClass('desktop-float-right');
            $('.homeloggedUserDetails, #header-container .cookiedLinks .fullswitchprofilelinktext').addClass('no-cursor');
            $('#mobileWebArrowDropdown').addClass('ta-hide');
            $('#header-container .utility-bar .pos-container ul .change-link').addClass('no-border');
        }
        var usePointsM = $('#mobileWebMemberInfoUL a[href$="awardsTab.do"]').first().closest('li');
        if(usePointsM.length>0&& $('#mobileWebMemberInfoUL .mm-auc').length<1){
            $('.mm-auc').first().clone().insertAfter(usePointsM);
        }
        $("body").on( "click", "#topNavDesktopShow", function(event){
            if($('#mobileWebArrowDropdown').width()>0){
                $('#mobileWebArrowDropdown').trigger('click');
            }else{
                $('#arrowDropdown').trigger('click');
            }
            event.stopPropagation();
        });
        }
    });
    $("body").on( "mousedown", "#topNavDesktopShow,#mobileWebArrowDropdown", function(){
        var t=$('#mobile-nav-member-menu');
        if(t.css("height") == '0px' || t.css("display") == 'none' ) {
            t.css("height","");
        }
        if($('#mobileWebMemberInfoUL a:contains("Logout")').length<1) {
            $('#loginFormContainer #logOut').clone().attr('id','').appendTo($('#mobileWebMemberInfoUL'));
        }
    });
}



function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

function createCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

window.h0020CSS = {};
    window.h0020CSS['global'] = '#container,#page{box-sizing:border-box}#container,#rental-links{border:none!important}.lb-foreground{background:#000!important}@media only screen and (max-width:599px){.lb-header{padding:9px 10px 10px!important}.lb-back{margin-bottom:0!important}}#container{width:100%!important}.mm-hide{display:none!important}#rental-links a,#rental-policy-links,ul.rental-policy-groups{display:block!important}body{background-color:#F3F4F8!important;min-width:initial!important}#error-list{margin-bottom:15px!important}#page{width:100%;padding:0!important;margin:0 auto;position:relative;background-color:#FFF}#res-extras-page-container,#res-review-and-book-page-container,#res-vehicles-page-container{padding:10px;box-sizing:border-box;max-width:1076px;margin:0 auto}.modal-close-row{background-color:#F2F4F7;padding:20px;font-size:24px;position:relative}#rental-links,ul.rental-policy-groups{padding:0!important;width:100%!important;box-sizing:border-box}.modal-close-icon{position:absolute;top:17px;right:20px}ul.rental-policy-groups{margin:0!important}.rental-policy-groups div{position:relative}#rental-links a{box-sizing:border-box;padding:10px 20px 10px 50px!important;color:#000!important;font-size:18px!important;width:100%!important}#rental-links li li a{padding:4px 0!important;color:#365AD8!important;font-size:14px!important;display:inline-block!important;width:auto}#rental-links li li a:hover{text-decoration:underline}#rental-links #expand-collapse-rental-links{display:none!important}ul.rental-policy-groups li{border:1px solid #D7D8D8;border-radius:2px}ul.rental-policy-groups li li{border:none;list-style-type:none}#important #important-information-container .icons-expand_icon,#important #important-information-container .icons-collapse_icon,#rental-links .divider,h4.rental-links-header .expand-collapse-rental-links{display:none!important}.rental-policy-links-wrapper{padding:1px 0}.expandable-section .expandable-section-btn,#important .terms .terms h2,#important #important-information-toggle,h4.rental-links-header{border:none!important;border-bottom:1px solid #E6E7EB!important;background:0 0!important;padding-bottom:10px;box-sizing:border-box;padding-left:30px;font-size:17px!important;font-weight:300!important;position:relative;text-decoration:none!important;color:#000!important}#important #important-information-container,#steps ul div.bar{border:none!important}#important-information-toggle{cursor:pointer}#important-information-toggle .link-indicator{color:#000!important;margin:0!important;padding:0!important;text-decoration:none!important;font-size:15px!important}#important-information-container .rental-policy-links-wrapper{border:1px solid #D7D8D8;border-radius:2px;margin-top:10px;padding:20px;box-sizing:border-box}#rental-links .rental-policy-groups{border-bottom:none!important}.expandable-section-btn.inactive::after,#important .terms .terms h2.inactive::after,#important #important-information-toggle.inactive::after,h4.rental-links-header.inactive::after{-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}#important #rental-links .rental-links-disclaimer{border-top:none!important}.rental-policy-groups .expand-collapse-icon.icons-arrow-blue-right{-ms-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}#rental-policy-links .policy-links{padding:0 0 10px 50px}#important #rental-links .rental-links-header{background:0 0!important;padding:0 0 5px 30px!important;margin:20px 0 10px!important;cursor:pointer;font-size:15px!important}#important #important-information-container ul{margin-bottom:0!important;padding:0!important;display:block}#important #important-information-container ul .icons-expand_icon{display:none!important}#steps{display:block!important}#steps ul div.bar{height:4px!important;border-radius:2px!important;background-color:#D7D8D8!important}#steps ul .current div.bar,#steps ul .prev-step div.bar{background-color:#FC0!important}.step-mobile{display:none}.mm-v-icn{display:inline-block;width:16px;height:16px;background:no-repeat;background-size:100% auto}.mm-mobile-headline{display:none!important}.mm-desktop-headline{display:block!important}#res-cancel-confirmation-page .cancel-confirmation-content .hertz-advert div{background:0 0!important;border:none!important}.mm-content-page #page{padding:10px!important}';
    window.h0020CSS['itinerary'] = '#steps li,.step-mobile{text-align:center;text-transform:uppercase}#steps li,.itinerary-summary-date,.step-mobile{text-transform:uppercase}.itin-expand-ovrvw-row{display:table;width:100%}.itin-expand-ovrvw-col{display:table-cell;width:50%;box-sizing:border-box;padding:10px;vertical-align:top}.itin-expand-ovrvw-row-outlined{border-radius:2px;border:1px solid #E6E7EB;margin-bottom:30px}.itin-expand-ovrvw-row-outlined .itin-expand-ovrvw-col-left{border-right:1px solid #E6E7EB;padding-left:10px}.itin-expand-ovrvw-location{margin:10px 0 4px}.itin-expand-ovrvw-date{font-size:28px;line-height:28px;margin-bottom:10px}.itinerary-expand-vehicle-class{margin-top:6px;margin-bottom:0}.itinerary-expand-vehicle-details{margin:5px 0 0}.itinerary-expand-full-details{padding-top:20px}.itin-expand-ovrvw-col-left{padding-left:0}#itinerarySection{display:block;width:100%;color:#FFF}#itinerarySection.inactive{display:none}.itinerary-expand-row,.itinerary-summary-btn-row,.itn-sum-row,.itn-sum-row-inner,.itn-sum-row-inner-desktop-only{display:table;width:100%}.itn-sum-row{max-width:1076px;margin:0 auto}.itin-sum-col,.itinerary-expand-col,.itn-sum-col-inner,.itn-sum-col-inner-desktop-only{display:table-cell;vertical-align:top;width:50%}.itinerary-summary-btn-col{display:table-cell;vertical-align:top}.itinerary-summary-btn-col-right{width:40px}#itinerarySectionBG{z-index:2;position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;transition:opacity .6s;background:rgba(0,0,0,.4);cursor:pointer;pointer-events:none}#itinerarySectionBG.active{display:block;pointer-events:auto;opacity:1;width:100%;height:100%}#itinerarySectionInner{position:relative;z-index:3}#itineraryExpand{background:#FFF;display:none;position:absolute;top:0;left:0;width:100%;box-sizing:border-box;padding:50px 10px}#itinerarySectionInner #itinerary-info{width:100%!important}#itnExpW{position:relative}.itn-sum-col-inner-desktop-only-left,.itn-sum-col-inner-left,.itn-sum-col-inner-right{padding:14px 10px;box-sizing:border-box}#steps li{font-size:12px!important;font-weight:400!important}#itineraryExpandCarRight img{width:100%;max-width:530px}.step-content{padding-bottom:5px;opacity:.5;color:#5C5F66!important}.step-content a{color:#5C5F66!important;text-decoration:none!important}.step-mobile{font-size:14px;color:#5C5F66;font-weight:500;margin-bottom:10px}.current .step-content,.prev-step .step-content{opacity:1}#itineraryExpandOverview{color:#000}.btn-cloned{display:none!important}#itineraryExpandBtn.active{-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.itinerary-summary-btn-col.itinerary-summary-btn-col-right{padding-top:30px}#itineraryNextStep button{width:100%;display:block;background:#FC0;border:2px solid #FC0;color:#000;font-size:18px;border-radius:2px;float:right;max-width:160px}#itineraryNextStep button:disabled{color:#FFF;background:#e6e7eb;border:2px solid #e6e7eb}#itineraryNextStep{padding-right:20px;padding-top:20px;padding-bottom:20px}.itinerary-summery-cost{font-size:32px;font-weight:300;letter-spacing:-.5px;margin-top:6px;line-height:32px}.itinerary-currency{font-size:12px;display:inline-block;margin:0 0 0 5px;position:relative;top:-1px}.itinerary-summary-date{font-size:22px;margin-bottom:2px}.itinerary-expand-row{max-width:1076px;margin:0 auto}.itinerary-expand-col.itinerary-expand-col-left{width:auto}.itinerary-expand-col.itinerary-expand-col-right{width:360px}#itnExpOverW{padding-right:70px}#res-itinerary-1{border:none!important}#res-itinerary-1 .divider{border-top:none!important;margin-top:0!important;padding-top:0!important}#res-itinerary-1 .click-indicator{background:0 0!important;position:relative;padding-bottom:3px}a.itn-edit-link-proxy{cursor:pointer}a.itn-edit-link-proxy:hover{text-decoration:underline}.loc-view-link1{text-align:right}.itn-loc-detail-link-proxy{text-decoration:none;color:#308dff;cursor:pointer;display:inline-block}.itn-loc-detail-link-proxy:hover{text-decoration:underline}#res-itinerary-1 .link-indicator{margin:0!important;text-decoration:none!important}#res-itinerary-1 a.itn-edit-link{display:inline-block!important;position:absolute!important;bottom:5px;left:0;float:none!important;padding:0!important;margin:0!important}#res-itinerary-1 #itn-info-header{font-size:30px!important;color:#000!important;text-decoration:none!important}.itinerary-expand-vehicle-link-proxy:hover,.rd-view-options-link-close-proxy:hover,.rd-view-options-link-open-proxy:hover{text-decoration:underline}#res-itinerary-1 .itn-container{padding:0!important;display:block!important}#itnExpFullDet #important-information-toggle .expand_collapse_itn{display:none!important}#itinerarySection .itn-container label{display:inline-block!important;width:280px;box-sizing:border-box}#res-itinerary-1 .itn-container .int-loc-tm-info .return-location,#res-itinerary-1 .itn-container .int-misc-info .itn-age,#res-itinerary-1 .itn-container .int-misc-info .itn-arrival-info,#res-itinerary-1 .itn-container .int-misc-info .itn-discounts,#res-itinerary-1 .itn-container .itn-same-location .return-location{border:none!important;padding:0!important;margin:0!important}.itinerary-expand-vehicle-type{font-size:30px;margin:0 0 8px;padding:0;line-height:30px}.itinerary-expand-vehicle-headline{margin:0 0 5px}#itineraryFullDetails .rd-box{margin-top:0!important}#rd-main .rd-detail header,#rd-pay-later header{background-color:#F2F4F7!important;padding:15px}#itinerarySection #rd-pay-later header,#itinerarySection #rd-rental-total header{display:table;width:100%;box-sizing:border-box}#itinerarySection #rd-pay-later header div,#itinerarySection #rd-rental-total header div{display:table-cell;vertical-align:middle}#itinerarySection #rd-pay-later header div.rd-title,#itinerarySection #rd-rental-total header div.rd-title{text-align:left}#rd-pay-later header div.rd-title{font-size:14px!important}#itinerarySection #rd-pay-later header div.rd-subtotal,#itinerarySection #rd-rental-total header div.rd-subtotal{text-align:right;font-size:20px!important;width:40%}#itineraryFullDetails #itinerary-content{display:none!important}#res-itinerary-1 .itn-edit-cont{width:auto;background-color:transparent!important;display:block!important;margin-bottom:10px!important}#itineraryFullDetails #rd-main .rd-edit-cont .rd-edit-link,#itineraryFullDetails .rd-header-crtl,#itineraryFullDetails .rd-vehicle img,#res-itinerary-1 .itn-edit-cont.visible-xs,#res-itinerary-1 .itn-header-crtl .icons-expand_icon{display:none!important}.itinerary-expand-vehicle-link-proxy{cursor:pointer}#res-itinerary-1 .itn-container .itn-location-header .int-loc-crtl{width:75px!important}.rd-view-options-link-close-proxy,.rd-view-options-link-open-proxy{display:inline-block;color:#365AD8;cursor:pointer}.rd-view-options-link-close-proxy{padding-top:7px}#res-itinerary-1 .itn-container .itn-location-header .itn-location-container{width:auto!important}';
    window.h0020CSS['itineraryMobile'] = '@media only screen and (max-width:1023px){#itnExpFullDet{border-top:1px solid #E6E7EB;padding-top:18px}#itineraryExpandCarRight img{max-width:300px}#itineraryExpandCarRight{text-align:center}#itinerarySection .itn-container label{width:100%!important;margin-top:0!important}#itineraryExpandCarLeft,#itineraryExpandCarRight,.itin-expand-ovrvw-col,.itinerary-expand-col{display:block;width:100%;box-sizing:border-box}#itnExpOverW{padding-right:0}.itinerary-expand-col{display:block;width:100%}.itinerary-expand-col.itinerary-expand-col-right{width:100%}#itnExpOverW #res-itinerary-1 .itn-container .int-loc-tm-info. #itnExpOverW #res-itinerary-1 .itn-container .int-misc-info,#itnExpOverW #res-itinerary-1 .itn-container .itn-arrival-info,#itnExpOverW #res-itinerary-1 .itn-container .itn-discounts,#itnExpOverW #res-itinerary-1 .itn-container .itn-pickup-return-time .itn-pickup-time,#itnExpOverW #res-itinerary-1 .itn-container .itn-pickup-return-time .itn-return-time,#itnExpOverW #res-itinerary-1 .itn-container .pickup-location-time,#itnExpOverW #res-itinerary-1 .itn-container .return-location-time{float:none!important;width:100%!important;padding:0!important;margin:0!important}.itin-expand-ovrvw-row-outlined{margin-bottom:10px}.itin-expand-ovrvw-row-outlined .itin-expand-ovrvw-col-left{border-right:none;border-bottom:1px solid #E6E7EB}#res-itinerary-1 .itn-container .int-loc-tm-info,#res-itinerary-1 .itn-container .int-misc-info,#res-itinerary-1 .itn-container .itn-arrival-info,#res-itinerary-1 .itn-container .itn-discounts,#res-itinerary-1 .itn-container .itn-pickup-return-time .itn-pickup-time,#res-itinerary-1 .itn-container .itn-pickup-return-time .itn-return-time,#res-itinerary-1 .itn-container .itn-same-location,#res-itinerary-1 .itn-container .pickup-location-time,#res-itinerary-1 .itn-container .return-location-time,.itn-pickup-return-time{width:100%!important;margin:0 0 15px!important}#res-itinerary-1 .itn-container .int-loc-tm-info,.itn-pickup-return-time{margin-bottom:0!important}#itnExpFullDet label{display:block!important;width:100%!important;float:none!important}.itinerary-expand-full-details{padding-top:0}#itnExpFullDet #res-itinerary-1 .int-misc-info .divider{margin-bottom:15px!important}#itineraryExpand{padding-top:20px;padding-bottom:5px}}';
    window.h0020CSS['vehicles'] = '#vehicles-list .redeem-points-info{display:none!important}.vehicles-list-cont div.unpriced .soldout-cont{float:none!important;width:auto!important;border:none!important;color:#000!important}#vehicleSortSelect{display:block;cursor:pointer}.vehicle-overlay-footer{position:relative}.vehicle-overlay-wrap{width:96%;max-width:500px;margin:0 auto;background-color:#fff;border-radius:2px;max-height:90vh;display:flex;flex-direction:column;cursor:default}.vehicle-overlay-body-wrapper{position:relative;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}body.vehicle-overlay-open{width:100%;height:100%;overflow:hidden}.vehicle-overlay-header{position:relative;display:border-box;padding:20px 60px 20px 20px}.vehicle-overlay-close img{width:20px!important}.vehicle-overlay-close{position:absolute;top:27px;right:27px}.vehicle-overlay-footer .pricing{width:100%!important;display:table!important}.vehicle-overlay-footer .pricing .wrapper{margin:0!important;padding:0!important}.vehicle-overlay-footer .pricing .multiple,.vehicle-overlay-footer .pricing .single{width:50%!important;display:table-cell;box-sizing:border-box;margin:0;text-align:center;padding:10px}.vehicle-overlay-footer .pricing .multiple.multiple-pricing-left,.vehicle-overlay-footer .pricing .single{padding-right:5px}.vehicle-overlay-footer .pricing .multiple.multiple-pricing-right,.vehicle-overlay-footer .pricing .single{padding-left:5px}.vehicle-overlay-footer .pricing .single,.vehicle-overlay-footer .pricing button{margin-bottom:10px}.vehicle-overlay-footer .pricing .single{width:100%!important}.vehicle-overlay-outer{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch;justify-content:center;align-items:center;cursor:pointer}.vehicle-overlay-outer.active{display:flex}.vehicle-overlay-body .car-info{width:100%!important;max-width:220px!important;margin:0 auto;display:block;float:none}.vehicle-overlay-body{box-sizing:border-box;width:100%;padding:5px 20px 20px}.vehicle-overlay-outer div{float:none!important;clear:none!important}.vehicle button.primary.priced{position:inherit!important;display:block!important;width:100%!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding:12px 8px!important}.vehicle button.primary.priced:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}.vehicle-overlay-body ul{margin:0 0 0 30px;padding:0}.vehicle-overlay-body .includes-list{display:block;text-align:center;border:1px solid #5c5f66;padding:10px;margin-top:15px;margin-bottom:15px}.vehicle-overlay-body .disclaimer{margin-left:0!important;padding-left:0!important;padding-right:0!important;margin-right:0!important}.vehicle-overlay-body .vehicle-icon-row{margin-bottom:10px}.vehicle-icon-set{margin-bottom:4px;padding-bottom:0!important}.vehicle-icon-value{position:relative;padding-left:20px;box-sizing:border-box}#res-vehicles-page #vehicles,.vehicle button.secondary.priced{box-sizing:border-box!important;width:100%!important}.vehicle-icon-value .mm-v-icn{position:absolute;top:-1px;left:0}.vehicle-overlay-body ul span{display:none}.vehicle-overlay-body ul span.feature-item{display:block}.vehicle-overlay-body .vehicle-inclusions h3{text-align:left}.vehicle-overlay-body .includes-list ul li{text-align:left;list-style-type:none;position:relative;padding-left:26px;padding-bottom:6px}.vehicle-overlay-body .includes-list ul span{display:inline}.vehicle-overlay-body .includes-list ul span.icons-info_sm{display:inline-block;position:absolute;top:-2px;left:0;cursor:pointer;z-index:1}.vehicle-overlay-body .includes-list ul{margin:10px 0 0 7px}.vehicle-overlay-body .vehicle-inclusions{padding-left:10px}.vehicle button.secondary.priced{position:inherit!important;display:block!important;background-color:#fff!important;border:2px solid #000!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding:12px 15px!important}.vehicle button.secondary.priced:hover{background-color:#000!important;color:#fff!important}.vech-d-view .vehicles-list-cont div.multiple{padding-top:0!important}.vech-d-view .pricing .single{padding:10px}.vech-d-view .vehicle-info,.vehicle-button-row{display:table!important;width:100%!important;padding:0!important}.vech-d-view .vehicle-col-info,.vech-d-view .vehicle-col-pricing{display:table-cell!important;vertical-align:top}.vehicle-col-pricing .pricing{width:100%!important;box-sizing:border-box}.vehicle-button-row .multiple{width:50%!important;box-sizing:border-box!important;padding:10px!important;display:table-cell!important}.vehicle-button-row .multiple.multiple-pricing-left{padding-right:5px!important}.vehicle-button-row .multiple.multiple-pricing-right{padding-left:5px!important}.vehicles-list-cont article{border:none!important;box-shadow:none!important}.vehicles-list-cont figure{width:100%!important;box-sizing:border-box}.vehicles-list-cont div.pricing .wrapper{margin:0!important}.vech-d-view,.vech-d-view .price-wrapper button{margin-bottom:10px}.vech-d-view .price-wrapper{text-align:center}.vech-d-view{border:1px solid #e6e7eb;margin-top:10px;border-radius:2px;box-shadow:2px 2px 2px rgba(0,0,0,.06);padding-right:10px}.vehicle-full-information-link img{width:20px!important}.vech-d-view .features,.vech-d-view .links{display:none!important}.vehicle-icon-row{display:flex;width:100%;flex-wrap:wrap}.vech-d-view .vehicle-icon-row{align-items:center;justify-content:center;padding-bottom:0!important;width:90%;margin:20px auto 15px}.vehicle-icon-col{width:33.3%;vertical-align:top;box-sizing:border-box;padding:10px 10px 10px 10%}.vehicle-overlay-body .vehicle-icon-col{padding-left:10px}.icon-inactive{display:none}.sort .controls,.vech-d-view .similar-info.icons-info_sm{display:none!important}a.vehicle-full-information-link{display:inline-block!important;position:relative;top:-4px}.vehicles-list-cont article.selected{background:#fff!important}.vehicles-list-cont h1{display:block!important}.vehicle-overlay-headline{font-size:22px;font-weight:300!important;margin:0 0 2px}.vehicle-overlay-subheadline{font-size:12px;color:#5c5f66}.vehicle-overlay-subheadline h1{display:inline-block!important;font-size:12px!important;font-weight:300!important;margin:0 4px 0 1px!important}.vehicle-overlay-subheadline .similar-info.icons-info_sm{display:none!important}.vehicle-overlay-subheadline a.similar-text.similar-info{text-decoration:none!important}.vehicle-overlay-subheadline a.similar-text.similar-info:hover{text-decoration:underline!important}.vech-d-view figure .image{float:right!important;width:320px!important;text-align:right}.vech-d-view figure .image .vehicle-img-lrg{width:320px!important;padding-top:20px}.vech-d-view .vehicle-col-info .details{position:absolute;top:0;left:0;padding-top:10px}.vehicles-list-cont figcaption{margin:0!important}.vech-d-view div.pricing div,.vech-d-view div.pricing div.wrapper{padding-bottom:0!important}.vech-d-view .vehicle-type-headline{font-size:18px!important;margin:0;font-weight:300}.vehicles-list-cont .vech-d-view h1{font-size:12px!important;font-weight:300!important;display:inline-block!important;width:auto!important;float:none!important}.vehicle-col-pricing{width:380px}.vehicle-col-info .vehicles-list-cont div.image{padding-top:20px}.vech-d-view .vehicle-col-info{padding-right:40px;position:relative}.vehicles-list-cont img.car-info{min-width:220px}.vehicles-list-cont article{padding-bottom:10px}#res-vehicles-page #vehicles div.rate-message-header p{font-size:14px!important;padding:0!important;margin:5px 0 10px!important}.vech-d-view .mobile-info{display:none!important}#res-vehicles-page .price-wrapper{border-top:none!important}.sort-row{display:table;width:100%}.sort-col{display:table-cell;vertical-align:top}.sort-col-right{width:325px;padding-bottom:25px}.vehicle-sort-wrap{border:1px solid #d7d8d8;background-color:#fff;max-width:280px}.vehicle-sort-wrap select{width:100%!important;border:none;box-shadow:none;box-sizing:border-box;font-size:16px;padding:4px 0 15px;margin:0}.vehicle-sort-wrap select::-ms-expand{display:none}.vehicle-sort-wrap label{box-sizing:border-box;padding:4px 10px 2px;margin:0}.sort-header{font-size:28px!important;font-weight:300!important}.vech-d-view p.or-similar{display:none!important}.vehicles-list-cont span.approx-total-price{display:block!important;margin-top:5px!important}.sort-col-left .sort-promo-wrapper,.vehicle-promo-code-recap label{display:none}.approx-total-price,.approx-total-price a,.approx-total-price span{color:#365ad8!important;font-size:12px!important;text-decoration:none!important}.approx-total-price a:hover{text-decoration:underline!important}.vehicle-tag.vehicle-tag-recommended{background:#0b6a6e;color:#fff;text-align:center;box-sizing:border-box;padding:5px 10px;font-size:12px;border-radius:4px;margin:0 0 5px}.vehicle-promo-code-recap{text-align:right}.vehicle-promo-code-recap h6{font-size:20px;margin:10px 0 0}.vehicle-promo-code-recap p{margin-top:10px}#disclaimer-and-reserve a,#disclaimer-and-reserve a:visited,#rd-main a,#rd-main:visited,#res-bookable-page #residencyChange,.bookable-cost-header-col-right a,.bookable-cost-header-col-right a:visited,.vehicles-list-cont div.sort a,.vehicles-list-cont div.sort a:visited,a.show-all,a.show-all:visited,a.similar-text,a.similar-text:visited{color:#365ad8!important;text-decoration:none!important;cursor:pointer}#disclaimer-and-reserve a:hover,#rd-main a:hover,#res-bookable-page #residencyChange:hover,.bookable-cost-header-col-right a:hover,.vehicles-list-cont div.sort a:hover,a.show-all:hover,a.similar-text:hover{text-decoration:underline!important}.vehicles-list-cont span.display-count{margin-top:-25px}.sort-content{margin-bottom:20px!important}.brg-promo-inner{width:100%;margin:0 auto;position:relative}.brg-promo-title{font-size:18px;line-height:22px;margin:10px 0 0;font-weight:700}.brg-promo-details{font-size:14px;line-height:20px;margin:3px 0 0}#brgPromo,#brgPromoM,#brgPromoT{display:none}#brgPromo.disabled{display:none!important}.brg-promo-details a{text-decoration:none}#brgPromoM .brg-content,#brgPromoT .brg-content{display:table;width:100%}#brgPromoM .brg-promo-title,#brgPromoT .brg-promo-title{display:table-cell;vertical-align:top;width:75px;padding-right:10px}#brgPromoM .brg-promo-title{width:60px}#brgPromoM .brg-promo-title img,#brgPromoT .brg-promo-title img{width:100%}#brgPromoM .brg-promo-details,#brgPromoT .brg-promo-details{display:table-cell;vertical-align:middle}@media only screen and (max-width:767px){#brgPromoM{display:block}.brg-promo-title br{display:none}#brgPromoM{padding:0 12px 15px}.brg-promo-details{font-size:12px}.brg-promo-title{font-style:italic}.brg-promo-details br{display:none}.vehicle-grid-last-line{display:none}}@media only screen and (max-width:599px){#brgPromoM{padding:1px 0 15px}}@media only screen and (min-width:768px) and (max-width:1435px){#brgPromoT{display:block;padding-bottom:20px}.brg-promo-title br{display:none}.brg-promo-title{font-style:italic;margin-top:0}.brg-promo-details{font-size:14px}.brg-promo-details br{display:none}}@media only screen and (min-width:1436px){#brgPromo{position:fixed;top:281px;right:0;width:100%;z-index:999;background-color:#fff;box-shadow:0 0 8px rgba(0,0,0,.2);padding:15px;box-sizing:border-box;transition:bottom .2s;max-width:166px;opacity:0;display:block}#brgPromo.active{right:0;opacity:1}.brg-content{position:relative;padding-top:10px}.brg-promo-close{position:absolute;top:-15px;right:-15px;box-sizing:border-box}.brg-promo-close a{display:block;padding:10px;width:34px;height:34px;box-sizing:border-box}.brg-promo-title{margin-bottom:15px}.brg-promo-details a{display:inline-block;margin-top:5px}.brg-promo-title{font-size:20px;text-align:center}.brg-promo-title img{width:100px}}@media only screen and (min-width:768px){.vehicle-grid{display:flex;flex-wrap:wrap;justify-content:space-between}.vehicle-grid .vehicle,.vehicle-grid-last-line{flex:0 0 auto;flex-basis:32%;flex-direction:column;margin-bottom:20px}.vehicle-grid .vech-d-view figure .image .vehicle-img-lrg{width:100%!important;max-width:200px!important}.vehicle-grid .vech-d-view .vehicle-col-info{padding:0!important}.vehicle-grid .vech-d-view .vehicle-col-info,.vehicle-grid .vech-d-view .vehicle-col-pricing{display:block!important}.vehicle-grid .vehicle-col-pricing{width:100%}.vehicle-grid .vech-d-view{padding-right:0;height:100%}.vehicle-grid .vech-d-view .vehicle-col-info .details{position:relative;top:auto;left:auto;padding-left:0;padding-right:0}.vehicle-grid .vehicles-list-cont img.car-info{min-width:0}.vehicle-grid .vech-d-view figure .image{width:100%!important;padding-left:10px!important;box-sizing:border-box;padding-right:10px!important;text-align:center}.vehicle-grid .vech-d-view .vehicle-col-pricing{float:left;clear:both;width:100%}#vehicleGrid1{margin-bottom:15px}#vehicleGrid2{margin-top:30px}.vehicle-grid .vech-d-view{margin-top:0}.vehicle-grid .vech-d-view .vehicle-icon-row{margin-top:5px}.vehicles-list-cont .vehicle-grid strong.price{font-weight:400;font-size:14px;font-weight:700}.vehicles-list-cont .vehicle-grid span.rate{font-size:14px;font-weight:700}.vehicle-grid .approx-total-price,.vehicle-grid .approx-total-price a,.vehicle-grid .approx-total-price span{font-size:11px!important}.vehicle-grid .vech-d-view button.primary.priced,.vehicle-grid .vech-d-view button.secondary.priced{padding-left:5px!important;padding-right:5px!important}}';
    window.h0020CSS['vehiclesMobile'] = '@media only screen and (max-width:767px){.sort-content{margin-bottom:0!important}.vehicle-icon-col{padding-top:0!important;padding-bottom:0!important}.vech-d-view figure .image .vehicle-img-lrg{padding-top:5px}.vech-d-view .image{padding-top:0}.vech-d-view .vehicle-col-info .details{position:inherit}.sort-col,.vech-d-view .vehicle-col-info,.vech-d-view .vehicle-col-pricing{display:block!important;width:100%!important;box-sizing:border-box}.vech-d-view figure .image{position:inherit;top:auto;left:auto;width:100%!important;text-align:center!important}#res-vehicles-page .price-wrapper{padding:0!important}.vech-d-view .vehicle-col-info{height:auto;padding-right:0}.vehicles-list-cont figcaption a{display:inline-block!important}.vehicles-list-cont div.details{margin-left:10px!important}.vech-d-view{padding-right:0;border:none;box-shadow:none;margin-left:-10px;margin-right:-10px}.vehicles-list-cont article{padding-bottom:20px}#res-vehicles-page{background:0 0!important}.vech-d-view .pricing .single,.vehicles-list-cont article.dual div.single div.unpriced{padding-top:0!important}.sort .display-count{margin-top:10px!important;display:block!important}.mm-desktop-vehicle-headline{display:block!important;background:0 0!important;padding-top:5px!important}.mm-desktop-vehicle-headline .sort-col-left .rate-message-header,.mm-desktop-vehicle-headline .sort-col-left .sort-header{display:none!important}.vehicle-promo-code-recap{text-align:center;background-color:#FFF;padding:4px 20px;margin-bottom:15px}.vehicle-promo-code-recap h6{font-size:16px;margin-bottom:8px}.vehicles-list-cont span.display-count{float:none;margin-left:0!important;margin-top:0}.vehicle-sort-wrap{max-width:initial}.sort-col-left .sort-promo-wrapper{display:block}.sort-col-right{display:none!important}}';
    window.h0020CSS['ancillaries'] = '.extra-overlay.mm-active figure img{max-width:150px}#res-extras-page #extras{display:block!important;box-sizing:border-box;width:100%!important}h2.ancillaries-header{padding:0!important;margin:25px 0 10px!important;font-size:28px!important;font-weight:300!important}.check-custom-selector{transition:transform .2s}.qty-plus-proxy-first{display:inline-block!important}.extras-item-details label.checkbox{display:inline-block;padding:0!important;position:relative}#extras-list div.controls label.checkbox .add,#extras-list div.controls label.checkbox .remove{display:none!important}.extras-item-details input[type=checkbox]{position:absolute;top:0;right:0;opacity:0}.extras-item-details input[type=checkbox]:focus+.check-custom-selector{box-shadow:2px 2px 2px #e1e1e1}#extras-list div.details h3{font-size:18px!important}.extras-item-details input[type=checkbox]:checked+.check-custom-selector{-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.check-custom-selector::after{position:absolute;top:20px;left:20px;width:0;height:0;background-color:#365ad8;border-radius:20px;transition:top 240ms,left 240ms,width 240ms,height 240ms;content:"";display:block;pointer-events:none}.extras-item-details input[type=checkbox]:checked+.check-custom-selector::after{top:-1px;left:-1px;width:38px;height:38px}#extras-list header h1{font-size:16px!important;font-weight:400!important;background:0 0!important;padding:10px 0 10px!important;margin:0 0 10px;border:none!important;border-bottom:1px solid #e6e7eb!important}#res-extras-page-container .col-headers{display:none!important}#extras-list div.image img{height:auto!important;max-height:initial!important;max-width:100px!important}#extras-list article{border-top:none}#extras-list div.wrapper{border:1px solid #c4c6cc;margin:10px 0;border-radius:2px;overflow:visible!important;background:#fff}.extras-item-details .wrapper{display:table;width:100%;box-sizing:border-box}.extras-item-details .wrapper .details,.extras-item-details .wrapper .image,.extras-item-details .wrapper .pricing{display:table-cell!important;vertical-align:top!important;float:none!important;overflow:visible!important}.extras-item-details .wrapper .image{width:150px!important;text-align:center}.extras-item-details .wrapper .details{width:auto!important}.extras-item-details .wrapper .pricing{width:200px!important}.extras-item-details .wrapper .pricing .controls{text-align:right}#extras-list article{border-top:none!important}#extras-list div.price strong,.extras-item-details .price{font-size:22px!important}.extras-item-details .price .rate{font-size:12px!important}#res-extras-page #extras div.controls{display:block!important;width:auto!important;float:none;position:relative;text-align:right;padding:10px 0 0!important;margin:0 0 10px!important}#res-extras-page #extras div.controls.btn-cloned{display:none!important}#res-extras-page .selection.full-height{display:block!important;float:none!important;padding:0!important}#extras-list div.price{float:none;text-align:right;width:100%}#extras-list div.price span.rate{display:inline-block!important;position:initial!important;top:initial!important}#extras-list div.price,#extras-list div.selection{text-align:right!important;width:100%!important}#extras-list div.wrapper{padding:10px 20px!important}#res-extras-page #extras hr{display:none!important}#res-extras-page #extras div.controls button{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:40px!important;padding-right:40px!important;margin-top:0}#res-extras-page #extras div.controls button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}.qty-control-set-multiple{display:block;text-align:right;margin-bottom:15px}.qty-control-set-multiple-wrap{display:inline-block;background:#3455db;color:#fff;font-size:14px!important;border-radius:24px;box-sizing:border-box;padding:0!important}.qty-control-set-multiple-wrap a{color:#fff!important;text-decoration:none!important}.qty-custom-selector select{display:none!important}.qty-inactive{display:none!important}.qty-control-set-multiple-wrap a,.qty-control-set-multiple-wrap span{display:inline-block!important;padding:5px 10px;line-height:22px!important;vertical-align:top}.qty-control-set-multiple-wrap span{padding-left:4px;padding-top:7px}.qty-control-set-multiple-wrap a{font-size:20px!important;padding:5px 10px 9px}.qty-control-set-multiple-wrap a.qty-minus-proxy{padding-left:20px!important}.qty-control-set-multiple-wrap a.qty-plus-proxy{padding-right:20px!important}.qty-control-set-multiple-wrap .qty-label{padding-right:2px!important}.qty-control-set-multiple-wrap span.qty-value{padding-right:0}#extras-list div.pricing div{padding:0!important;margin:0!important}#extras-list div.price span.rate.free{font-size:22px!important}#extras-list article p{font-size:14px!important;line-height:18px!important;margin-bottom:5px!important}#extras-list div.details a{font-size:14px!important;display:inline-block!important;color:#365ad8!important}#extras-list div.details a{text-decoration:none}#extras-list div.details a:hover{text-decoration:underline}#extras-list article.selected{background:0 0!important}.ancillary-select-dropdown label{margin:0}#extras-list div.pricing .ancillary-select-dropdown{width:100%!important;border:1px solid #c4c6cc!important;border-radius:2px!important;margin-bottom:10px!important;margin-top:10px!important}.ancillary-select-dropdown span{display:block;float:none;width:100%;text-align:left;padding:5px 10px 0;box-sizing:border-box;width:100%}.ancillary-select-dropdown select::-ms-expand{display:none}#res-extras-page #extras .ancillary-select-dropdown-outer .controls{display:none!important}#extras-list div.price{float:none!important}#extras-list .qty-custom-selector label{margin-bottom:0!important}#extras-list article h2{display:none!important}.ancillaries-btn-wrap{margin-bottom:20px}@-webkit-keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}@keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}.more-details{cursor:pointer!important}.mm-checkmark{-webkit-animation:checkmark-enter .32s;animation:checkmark-enter .52s;height:40px;left:0;position:absolute;top:0;width:40px}.mm-checkmark-check{stroke:#fff;stroke-dasharray:48;stroke-width:3px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}@media only screen and (max-width:767px){#res-extras-page #extras div.controls button{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}#extras-list div.details div{padding:0!important}.extras-item-details .wrapper .image{width:100px!important}.extras-item-details .wrapper{position:relative}.extras-item-details .wrapper .details{min-height:110px;padding-left:110px;display:block!important;width:100%!important;box-sizing:border-box;padding-top:10px;padding-bottom:15px}.extras-item-details .wrapper .image{position:absolute;top:10px;left:15px}#extras-list div.image div{padding:0!important}#extras-list div.pricing{display:block!important;width:100%!important;margin:0!important;padding:0!important}#extras-list div.price{text-align:left!important;box-sizing:border-box;padding-right:160px!important}#extras-list div.selection{text-align:left!important}#extras-list div.pricing{border-top:1px solid #eee;margin-top:0!important;position:relative;min-height:59px}#extras-list .checkbox-selector,#extras-list .qty-control-set{position:absolute!important;top:15px;right:0}#extras-list div.pricing .ancillary-select-dropdown{position:absolute!important;top:15px;right:0;width:40%!important;margin-top:0!important}#res-extras-page #extras div.controls{padding:0!important}#extras-list div.pricing div br{display:none}.extras-item-details .wrapper .details h3{margin-top:0!important}#extras-list div.price span.rate{display:inline!important}#extras-list div.pricing div.full-height{padding-right:45%!important;padding-top:3px!important;box-sizing:border-box}#extras-list .ancillary-select-dropdown-outer div.pricing{min-height:85px}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.ancillary-select-dropdown{padding-top:0!important;padding-right:0!important}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.price{padding-top:30px!important}#res-extras-page #extras div.controls button{display:block!important;float:none!important;width:100%!important;border-radius:0!important}.ancillaries-btn-wrap{margin-left:-10px;margin-right:-10px}}@media only screen and (max-width:599px){#extras-list img{width:66px!important}.extras-item-details .wrapper .details{min-height:85px;padding-left:75px}.extras-item-details .wrapper .image{width:66px!important}}@media only screen and (max-width:375px){#extras-list div.pricing div.full-height{padding-right:0!important}#extras-list div.pricing div br{display:block}}';
    window.h0020CSS['ancillariesGrid'] = '.extra-overlay.mm-active figure img{max-width:150px}#res-extras-page #extras{display:block!important;box-sizing:border-box;width:100%!important}h2.ancillaries-header{padding:0!important;margin:25px 0 10px!important;font-size:28px!important;font-weight:300!important}.check-custom-selector{transition:transform .2s}.qty-plus-proxy-first{display:inline-block!important}.extras-item-details label.checkbox{display:inline-block;padding:0!important;position:relative}#extras-list div.controls label.checkbox .add,#extras-list div.controls label.checkbox .remove{display:none!important}#extras-list div.controls label.checkbox{display:inline}.extras-item-details input[type=checkbox]{position:absolute;top:0;right:0;opacity:0}.extras-item-details input[type=checkbox]:focus+.check-custom-selector{box-shadow:2px 2px 2px #e1e1e1}#extras-list div.details h3{font-size:18px!important}.extras-item-details input[type=checkbox]:checked+.check-custom-selector{-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.check-custom-selector::after{position:absolute;top:20px;left:20px;width:0;height:0;background-color:#365ad8;border-radius:20px;transition:top 240ms,left 240ms,width 240ms,height 240ms;content:"";display:block;pointer-events:none}.extras-item-details input[type=checkbox]:checked+.check-custom-selector::after{top:-1px;left:-1px;width:38px;height:38px}#extras-list header h1{font-size:16px!important;font-weight:400!important;background:0 0!important;padding:10px 0 10px!important;margin:0 0 10px;border:none!important;border-bottom:1px solid #e6e7eb!important}#res-extras-page-container .col-headers{display:none!important}#extras-list div.image img{height:auto!important;max-height:initial!important;max-width:100px!important}#extras-list article{border-top:none}#extras-list div.wrapper{overflow:visible!important;background:#fff;border:none!important;position:inherit}.extras-item-details .wrapper{display:table;width:100%;box-sizing:border-box}.extras-item-details .wrapper .details,.extras-item-details .wrapper .image,.extras-item-details .wrapper .pricing{display:table-cell!important;vertical-align:top!important;float:none!important;overflow:visible!important}.extras-item-details .wrapper .image{width:150px!important;text-align:center}.extras-item-details .wrapper .details{width:auto!important}.extras-item-details .wrapper .pricing{width:200px!important}.extras-item-details .wrapper .pricing .controls{text-align:right}#extras-list article{border-top:none!important}#extras-list div.price strong,.extras-item-details .price{font-size:22px!important}#extras-list div.price strong{display:inline-block;padding-right:5px}.extras-item-details .price .rate{font-size:12px!important}#res-extras-page #extras div.controls{display:block!important;width:auto!important;float:none;position:relative;text-align:right;padding:10px 0 0!important;margin:0 0 10px!important;border-top:1px solid #eee}#res-extras-page #extras div.controls.btn-cloned{display:none!important}#res-extras-page .selection.full-height{display:block!important;float:none!important;padding:0!important}#extras-list div.price{float:none;text-align:right;width:100%}body #extras-list div.price span.rate{display:inline-block!important;position:initial!important;top:initial!important;line-height:14px!important;padding-top:0!important}#extras-list div.price,#extras-list div.selection{text-align:right!important;width:100%!important}#extras-list div.wrapper{padding:10px 20px!important}#res-extras-page #extras hr{display:none!important}#res-extras-page #extras div.controls button{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:40px!important;padding-right:40px!important;margin-top:0}#res-extras-page #extras div.controls button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}.qty-control-set-multiple{display:block;text-align:right;margin-bottom:15px}.qty-control-set-multiple-wrap{display:inline-block;background:#3455db;color:#fff;font-size:14px!important;border-radius:24px;box-sizing:border-box;padding:0!important}.qty-control-set-multiple-wrap a{color:#fff!important;text-decoration:none!important}.qty-custom-selector select{display:none!important}.qty-inactive{display:none!important}.qty-control-set-multiple-wrap a,.qty-control-set-multiple-wrap span{display:inline-block!important;padding:5px 10px;line-height:22px!important;vertical-align:top}.qty-control-set-multiple-wrap span{padding-left:4px;padding-top:7px}.qty-control-set-multiple-wrap a{font-size:20px!important;padding:5px 10px 9px}.qty-control-set-multiple-wrap a.qty-minus-proxy{padding-left:20px!important}.qty-control-set-multiple-wrap a.qty-plus-proxy{padding-right:20px!important}.qty-control-set-multiple-wrap .qty-label{padding-right:2px!important}.qty-control-set-multiple-wrap span.qty-value{padding-right:0}#extras-list div.pricing div{padding:0!important;margin:0!important}#extras-list div.price span.rate.free{font-size:22px!important}#extras-list article p{font-size:14px!important;line-height:18px!important;margin-bottom:5px!important}#extras-list div.details a{font-size:14px!important;display:inline-block!important;color:#365ad8!important}#extras-list div.details a{text-decoration:none}#extras-list div.details a:hover{text-decoration:underline}#extras-list article.selected{background:0 0!important}.ancillary-select-dropdown label{margin:0}#extras-list div.pricing .ancillary-select-dropdown{width:100%!important;border:1px solid #c4c6cc!important;border-radius:2px!important}.ancillary-select-dropdown span{display:block;float:none;width:100%;text-align:left;padding:2px 10px 0;box-sizing:border-box;width:100%}.ancillary-select-dropdown select::-ms-expand{display:none}#extras-list div.price{float:none!important}#extras-list .qty-custom-selector label{margin-bottom:0!important}#extras-list article h2{display:none!important}.ancillaries-btn-wrap{margin-bottom:20px}@-webkit-keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}@keyframes checkmark-enter{0%{stroke-dashoffset:48}62%{stroke-dashoffset:48}to{stroke-dashoffset:0}}.more-details{cursor:pointer!important}.mm-checkmark{-webkit-animation:checkmark-enter .32s;animation:checkmark-enter .52s;height:40px;left:0;position:absolute;top:0;width:40px}.mm-checkmark-check{stroke:#fff;stroke-dasharray:48;stroke-width:3px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}@media only screen and (max-width:767px){#res-extras-page #extras div.controls button{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}.ancillaries-btn-wrap{margin-left:-10px;margin-right:-10px}}#extras-list div.details div{padding:0!important}.extras-item-details .wrapper .image{width:100px!important}.extras-item-details .wrapper{position:relative}.extras-item-details .wrapper .details{min-height:110px;padding-left:110px;display:block!important;width:100%!important;box-sizing:border-box;padding-top:10px;padding-bottom:15px}.extras-item-details .wrapper .image{position:absolute;top:10px;left:15px}#extras-list div.image div{padding:0!important}#extras-list div.pricing{display:block!important;width:100%!important;margin:0!important;position:absolute;bottom:0;left:0;padding:0 20px!important;box-sizing:border-box}#extras-list div.price{text-align:left!important;box-sizing:border-box;padding-right:160px!important}#extras-list div.selection{text-align:left!important}#extras-list div.pricing{margin-top:0!important;min-height:69px}#extras-list .ancillary-select-dropdown-outer div.pricing{min-height:69px}#extras-list .checkbox-selector,#extras-list .qty-control-set{position:absolute!important;top:14px;right:0}#extras-list div.pricing .ancillary-select-dropdown{position:absolute!important;top:10px;right:20px;width:130px!important;margin-top:0!important}#res-extras-page #extras div.controls{padding:0!important;margin:0!important}#extras-list div.pricing div br{display:none}.extras-item-details .wrapper .details h3{margin-top:0!important}#extras-list div.pricing .price.full-height{padding-right:150px!important;padding-top:3px!important;box-sizing:border-box;font-size:0!important;display:table-cell;vertical-align:middle;height:59px}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.ancillary-select-dropdown{padding-top:0!important;padding-right:0!important}#extras-list .ancillary-select-dropdown-outer div.pricing div.full-height.price{padding-top:3px!important}@media only screen and (max-width:599px){#extras-list img{width:66px!important}.extras-item-details .wrapper .details{min-height:85px;padding-left:75px}.extras-item-details .wrapper .image{width:66px!important}}@media only screen and (max-width:375px){#extras-list div.pricing div.full-height{padding-right:0!important}#extras-list div.pricing div br{display:block}}.vas-tile{position:relative;border:1px solid #c4c6cc;margin:10px 0;background:#fff;border-radius:2px;padding-bottom:70px;box-sizing:border-box}@media only screen and (min-width:768px){.vas-grid{display:flex;justify-content:space-between;width:100%;flex-wrap:wrap}.vas-tile{flex:0 0 49%}}.featured-vas-tag{position:absolute;top:-5px;left:-5px;background:#fc0;display:inline-block;box-shadow:0 2px 5px rgba(0,0,0,.2);padding:5px 20px}.vas-grid-featured .extras-item-details .wrapper .image{top:35px}#extras-list div.controls .checkbox-selector label.checkbox{display:inline-block}';
    window.h0020CSS['reviewandBook'] = '#BookableCCDisclaimeContent,#BookableCCDisclaimeContent b,#BookableCCDisclaimeContent p,#creditCard .gray-container p{color:#5C5F66}#res-bookable-page #approx-rate .error-term{padding:10px!important}#creditCard .gray-container{background:0 0;padding:0 0 10px}#disclaimer-and-reserve .visible-xs{display:none!important}.cc-text-read-more-description{margin-top:0}.cc-text-hidden{display:none;padding:1px 0}#approx-rate-details,#approx-rate-terms .details,#frequent-traveler .divider.visible-xs,#res-bookable-page #frequent-traveler fieldset legend{display:none!important}.cc-text-hidden p{margin:0}.bookable-terms-and-conditions{padding:10px 0}#res-bookable-page a,#res-bookable-page a:hover{color:#365AD8}#res-bookable-page #billing-info fieldset label input[type=radio]{width:auto}#bookableMultiAddressToggle{margin-bottom:20px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox{padding:5px 0 10px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong{font-weight:400}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox input[type=checkbox]{margin-left:-22px}.bookable-terms-and-conditions p{margin:0}.bookable-btn-row,.bookable-btn-row-inner{display:table;width:100%}.bookable-btn-col,.bookable-btn-col-inner{display:table-cell;vertical-align:top}.bookable-btn-col-inner-right{width:120px}.bookable-btn-col-inner-left{font-size:20px;padding:10px 20px}.bookable-btn-col-left{text-align:left;font-size:20px;padding:10px 0}.bookable-btn-full{text-align:left;padding-top:5px}.bookable-btn-full p{margin-bottom:0}.bookable-rate-details,.bookable-rate-details strong{font-weight:400;color:#5C5F66}.bookable-toggle-section-inner{display:none;padding:1px 0}.bookable-toggle-radio-set label{display:inline-block}#vehicle-overlay-body-wrapper,h2.review-and-book-header{display:none!important}.bookable-toggle-radio-set input[type=radio]{opacity:0;width:0;height:0}.bookable-toggle-radio-set span{position:relative;padding-left:22px}.bookable-toggle-radio-set span::after{position:absolute;top:1px;left:0;content:"";width:16px;height:16px;border:1px solid #9D9EA3;border-radius:10px;box-sizing:border-box;transition:border .2s}.bookable-toggle-radio-set input[type=radio]:checked+span::after{border:4px solid #365AD8}.bookable-toggle-radio-set .bookable-toggle-radio-first{margin-right:40px}.email-conf-text p{margin:0}#bookableCustOptInTable label{box-sizing:border-box;margin-top:4px;margin-bottom:10px}#res-bookable-page #vehicleUpsells{margin-bottom:50px;display:flex}.vehContent-half{flex:1;box-shadow:2px 2px 2px rgba(0,0,0,.06);border:1px solid #C4C6CC;border-radius:2px;padding:10px 15px}#res-bookable-page #vehicleUpsells h3{background:0 0!important}#res-bookable-page .notIncludeSpaces.ccn-note{display:none}#reviewAndBookCost #rd-totals{display:none!important}#reviewAndBookCost #rd-more{border:none!important;padding:0!important}#reviewAndBookCost #rd-more .rd-info{padding:0!important}#reviewAndBookCost .rd-box{background-color:#E6E7EB;box-sizing:border-box}#reviewAndBookCost #rate-details-content{margin-left:0!important}#reviewAndBookCost figure img{max-width:180px;margin:0 auto;display:block}#vehicleUpsells .veh-container{box-sizing:border-box}.upgrade-options .veh-container h3{padding:0!important}.upgrade-options figure .img-container{width:auto!important}.upgrade-options figure .img-container img.vehicle-img-lrg{width:100%!important;max-width:210px!important;height:auto!important;display:block;margin:0 auto}.upgrade-options .button-container{text-align:center}.upgrade-options .veh-container figure,.upsell-button-container{display:table!important;width:100%!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .button-container,.upsell-button-container .upsell-button-container-col-left{display:table-cell!important;vertical-align:top!important;float:none!important;clear:both!important;margin:0!important;padding:0!important;box-sizing:border-box!important}.upgrade-options .veh-container figure figcaption{display:none!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .upsell-button-container-col-left{width:40%!important}#important,#res-bookable-page #information,#res-bookable-page .bookable-main-container{display:block!important;box-sizing:border-box;width:100%!important;margin:0!important}#cb-in-page-enrollment{display:none!important}#res-bookable-page div.content,#res-bookable-page div.content-half,#residency-dropdown{width:100%!important;border:1px solid #C4C6CC!important;border-radius:2px!important;box-sizing:border-box;clear:both}#flight-services-autocomplete{border:1px solid #C4C6CC!important;border-radius:2px!important;box-sizing:border-box}#res-bookable-page div.content.form-radio{border:none!important}#res-bookable-page div.content.form-radio .radio input[type=radio]{margin-left:-6px;margin-right:10px}.upgrade-options .button-container a{float:none!important;padding:0!important;margin:10px 0 0!important}.upgrade-options .veh-container .button-container button{float:none!important;border:2px solid #365AD8!important;background:#FFF!important;color:#365AD8!important;font-size:16px!important;margin:11px 0 0!important;padding:8px 25px!important;border-radius:2px!important}.upgrade-options .veh-container .button-container a.details{color:#365AD8!important;display:inline-block;text-decoration:none}.upgrade-options .veh-container .button-container a.details:hover{text-decoration:underline}#residency-dropdown{margin-bottom:15px!important}#res-bookable-page div.content label,#res-bookable-page div.content-half label{display:block!important;padding:3px 10px 0!important;box-sizing:border-box;margin:0!important}#disclaimer-and-reserve .details #bookableSubmit,#vehicle-border,.gray-border{display:none!important}#bookableCreditCardTable{margin-bottom:5px!important;padding:1px 0!important}#res-bookable-page #pay-with-your-points #points-available{padding:0!important;font-size:18px!important;margin-bottom:10px!important}#res-bookable-page #pay-with-your-points .choose-rewards{border:none!important;padding:0!important;margin:0 0 20px!important}#res-bookable-page #pay-with-your-points .choose-rewards label{cursor:default!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints{color:#5C5F66!important;padding-left:34px!important;position:relative;text-align:left!important;font-weight:400!important;font-size:12px!important;clear:both!important;margin-left:0!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints .icons-info{position:absolute;top:1px;left:2px}#res-bookable-page #customerInfo legend.hertz-gold-title{padding-top:21px!important}.bookable-toggle-title{font-size:14px;text-align:left}.bookable-toggle-title-mrg-0{margin-top:0}#bookableCCToggle,#bookableFreqTravlerToggle{margin-bottom:10px}#bookableCCToggle label{padding-left:0}#bookableCCToggle input{margin-left:0}#bookableMemberSection{padding:20px 0 10px;font-size:14px}#frequent-traveler{margin-bottom:20px}#res-bookable-page select#residenceCountry{height:60px!important}#information .creditcard .expire{font-size:0}.review-and-book-header{font-size:28px!important;margin:0 0 10px!important;font-weight:300!important}#arrival-misc-info .arrival-info-heading,#res-bookable-page legend{font-weight:600!important;font-size:18px!important;border-bottom:1px solid #E6E7EB!important;padding:0 0 5px!important;margin:0 0 20px!important;line-height:20px!important;color:#000!important}#arrival-misc-info .arrival-info-cont,#res-bookable-page #customer-residency.content-half{border:none!important}#arrival-misc-info .arrival-info-heading{margin-top:5px!important;margin-bottom:2px!important}.arrival-info-container,.frequent-traveler-info-container,.misc-info-container{background-color:transparent!important;padding:0!important}.frequent-traveler-info-container{color:#5C5F66}#arrival-info p{margin-left:0!important;margin-right:0!important}#res-bookable-page #approx-rate .total{background-color:#F2F4F7!important}#vehicleUpsells .vehContent{width:50%}#reviewAndBookCost #rd-rental-total header{display:table;width:100%;box-sizing:border-box}#reviewAndBookCost #rd-rental-total header .rd-subtotal,#reviewAndBookCost #rd-rental-total header .rd-title{display:table-cell;vertical-align:middle;font-size:20px;text-align:right}#reviewAndBookCost #rd-rental-total header .rd-title{width:55%;text-align:left}#reviewAndBookCost header .rd-subtotal .review-and-book-summary-currency{font-size:14px}#res-bookable-page #small-screen-itinerary,#reviewAndBookCost #itinerary-content,#reviewAndBookCost .rd-header-crtl{display:none!important}#res-bookable-page #approx-rate .submit-button-full{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#FC0!important;border:2px solid #FC0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:25px!important;padding-right:25px!important;margin-bottom:0!important;float:none!important}#res-bookable-page #approx-rate .submit-button-full:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#res-bookable-page #approx-rate .submit-button-full #approx-rate{display:none!important}.bookable-btn-wrap{text-align:right;background-color:#F3F4F8;padding:10px 20px;margin-bottom:15px}#flight-services{margin-top:10px!important}#res-bookable-page #approx-rate .submit .terms .terms{padding-top:0!important}.bookable-cost-header-row{display:table;width:100%;border-bottom:1px solid #e6e7eb}.bookable-cost-header-col{display:table-cell;vertical-align:top;padding-bottom:3px}.bookable-cost-header-col-right{width:120px;text-align:right;padding-top:4px}.bookable-cost-header-col-right a{font-size:14px;text-decoration:none}.bookable-cost-header-col-left{font-size:18px;font-weight:600}#res-bookable-page #creditCard fieldset legend{display:block!important;background:0 0!important;padding-top:5px!important}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell br{display:none}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell p{margin-top:0}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell{padding-left:0}#res-bookable-page #reviewAndBookCost #itinerary-info{width:100%!important}.review-and-book-row{display:table;width:100%;margin-top:10px;margin-bottom:10px;background-color:#FFF}#res-bookable-page .notIncludeSpaces{padding-bottom:3px!important}.ccn-note{margin-top:-10px;margin-bottom:10px}#res-bookable-page .bookable-row-mobile{display:table;width:100%;margin-bottom:2px}#res-bookable-page .bookable-row-mobile .bookable-col{display:table-cell!important;width:50%!important}#res-bookable-page .bookable-row-mobile .bookable-col-left{padding-right:5px}#res-bookable-page .bookable-row-mobile .bookable-col-right{padding-left:5px}#res-bookable-page #creditCard fieldset .pre-populated-credit-card-details{padding:0!important}#res-bookable-page .bookablePrivacyOptInLink{display:inline-block}#cb_privacy_container{margin-bottom:0}';
    window.h0020CSS['reviewandBookMobile'] = '@media only screen and (max-width:767px){.bookable-cost-header-row{border-bottom:none}#res-bookable-page #pay-with-your-points .choose-rewards select{font-size:14px!important;max-width:none!important}.current-member-email-container{background-color:#FFF;padding:20px 0 0;font-size:14px}#bookablePrivacyOptInText{font-size:14px;margin-top:10px}#reviewAndBookCost #rd-main .rd-detail header{background:#F3F4F8!important;border:1px solid #D7D8DB;text-align:center}#reviewAndBookCost #rd-main .rd-detail header div{display:inline-block;width:auto;padding:0 3px;color:#000}#reviewAndBookCost #rd-main .rd-box{border:none!important}#misc-info .misc-info-container{margin-top:0}.review-and-book-col{width:100%;vertical-align:top}.review-and-book-col-right{display:table-header-group}.bookable-cost-header-col{padding:15px 10px 5px}#reviewAndBookCost #rd-rental-total{padding:0 10px}#reviewAndBookCost #rd-totals{display:block!important}.review-and-book-col-right #rd-more,.review-and-book-col-right #rd-pay-later,.review-and-book-col-right #rd-pay-now,.review-and-book-col-right .rate-type-box.rd-info{display:none!important}.review-and-book-col-left{padding:10px;box-sizing:border-box}#res-bookable-page #approx-rate-terms fieldset{background:0 0!important;padding-top:0!important}#res-bookable-page #approx-rate fieldset .details{border:none!important;margin:0 -10px 20px!important;background:#FFF!important}#res-bookable-page #vehicleUpsells{margin-top:20px;margin-bottom:5px}#vehicleUpsells .vehContent{width:100%}.review-and-book-row{margin-bottom:0}#res-bookable-page{background:0 0!important}#container{background-color:#F3F4F8!important}.bookable-btn-col,.bookable-btn-col-inner,.bookable-btn-row,.bookable-btn-row-inner{display:inline;padding:0;width:auto}.bookable-btn-row{display:block;width:100%;box-sizing:border-box;text-align:center}#res-bookable-page #important,#res-bookable-page #information{margin-left:-10px!important;margin-right:-10px!important;width:auto!important}#res-bookable-page #important{padding:10px;background:#FFF;position:relative}#res-bookable-page #creditCard fieldset{box-sizing:border-box}#res-bookable-page fieldset{padding:10px 0!important}.bookable-currency{font-size:12px;display:inline-block;padding-top:10px}.bookable-btn-wrap{border:1px solid #D7D8DB;margin-top:15px;margin-bottom:20px}#important .terms-first{border-top:1px solid #D7D8DB;padding-top:15px}#important #important-information-toggle,#important .terms .terms h2,h4.rental-links-header{border-bottom:none!important}#arrival-misc-info .arrival-info-heading,#customerInfo legend{padding-left:0!important;box-sizing:border-box;font-size:16px!important;padding-bottom:15px!important;font-weight:500!important;margin-bottom:1px!important}#customerInfo legend{padding-top:20px!important}#res-bookable-page #pay-with-your-points .choose-rewards{padding-bottom:10px!important}#res-bookable-page #approx-rate .submit-button-full{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}#arrival-info #autocomplete-container,#arrival-info #autocomplete-radio-buttons,#reviewAndBookCost #rd-main .rate-separator,#reviewAndBookCost #rd-main .rd-edit-cont{display:none!important}#res-bookable-page #billing-info fieldset legend,#res-bookable-page #creditCard fieldset legend,#res-bookable-page #frequent-traveler fieldset legend,#res-bookable-page #pointsSection fieldset legend{float:left;background:#FFF!important;margin:-10px 0 15px!important;box-sizing:border-box;padding:10px 10px 20px!important;clear:both;width:100%;border:none!important;position:relative;font-size:16px!important;font-weight:500!important}#res-bookable-page #billing-info fieldset legend::after,#res-bookable-page #creditCard fieldset legend::after,#res-bookable-page #frequent-traveler fieldset legend::after,#res-bookable-page #pointsSection fieldset legend::after{position:absolute;bottom:10px;left:0;width:100%;height:1px;pointer-events:none;content:"";border-bottom:1px solid #E6E7EB}.bookable-cost-header-col-left{padding-left:10px}.bookable-cost-header-col-right{padding-right:10px}#disclaimer-and-reserve h4{padding:0 10px 10px}#res-bookable-page #customerInfo legend.hertz-gold-title{margin-bottom:0!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs{background:#FFF!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs .prepend-top{padding-top:0!important}#res-bookable-page input[type=email],#res-bookable-page input[type=tel],#res-bookable-page input[type=text],#res-bookable-page select{font-size:16px}#frequent-traveler,#misc-info{padding:0!important;margin:0!important}#arrival-info #flight-services{display:block!important}#arrival-info #flight-details{margin:0!important}}';
    window.h0020CSS['reviewandBook2'] = '#canSpamElectionCheckbox,#termsAndConditionsAccepted{display:none}#bookableCustOptInTable label,#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox label{padding-left:0}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong,#res-bookable-page .can-spam-inner{position:relative;padding-left:27px;display:block}#res-bookable-page #approx-rate .error-term{padding:10px!important}#BookableCCDisclaimeContent,#BookableCCDisclaimeContent b,#BookableCCDisclaimeContent p{color:#5c5f66}#creditCard .gray-container{background:0 0;padding:0 0 10px}#creditCard .gray-container p{color:#5c5f66}#disclaimer-and-reserve .visible-xs{display:none!important}.cc-text-read-more-description{margin-top:0}.cc-text-hidden{display:none;padding:1px 0}.cc-text-hidden p{margin:0}.bookable-terms-and-conditions{padding:10px 0}#res-bookable-page a,#res-bookable-page a:hover{color:#365ad8}#frequent-traveler .divider.visible-xs,#res-bookable-page #frequent-traveler fieldset legend{display:none!important}#res-bookable-page #billing-info fieldset label input[type=radio]{width:auto}#bookableMultiAddressToggle{margin-bottom:20px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox{padding:5px 0 10px}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong{font-weight:400}#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox input[type=checkbox]{margin-left:-22px}.bookable-terms-and-conditions p{margin:0}#approx-rate-details,#approx-rate-terms .details{display:none!important}.bookable-btn-row,.bookable-btn-row-inner{display:table;width:100%}.bookable-btn-col,.bookable-btn-col-inner{display:table-cell;vertical-align:top}.bookable-btn-col-inner-right{width:120px}.bookable-btn-col-inner-left{font-size:20px;padding:10px 20px}.bookable-btn-col-left{text-align:left;font-size:20px;padding:10px 0}.bookable-btn-full{text-align:left;padding-top:5px}.bookable-btn-full p{margin-bottom:0}.bookable-rate-details,.bookable-rate-details strong{font-weight:400;color:#5c5f66}.bookable-rate-details #location-notes{margin-bottom:20px;margin-top:20px;color:#000!important}.bookable-rate-details #location-notes strong{color:#000!important}.bookable-toggle-section-inner{display:none;padding:1px 0}.bookable-toggle-radio-set label{display:inline-block}.bookable-toggle-radio-set input[type=radio]{opacity:0;width:0;height:0}.bookable-toggle-radio-set span{position:relative;padding-left:22px}.bookable-toggle-radio-set span::after{position:absolute;top:1px;left:0;content:"";width:16px;height:16px;border:1px solid #9d9ea3;border-radius:10px;box-sizing:border-box;transition:border .2s}.bookable-toggle-radio-set input[type=radio]:checked+span::after{border:4px solid #365ad8}.bookable-toggle-radio-set .bookable-toggle-radio-first{margin-right:40px}.email-conf-text p{margin:0}h2.review-and-book-header{display:none!important}#bookableCustOptInTable label{box-sizing:border-box;margin-top:4px;margin-bottom:10px}#vehicle-overlay-body-wrapper{display:none!important}#res-bookable-page #vehicleUpsells{margin-bottom:50px;display:flex}.vehContent-half{flex:1;box-shadow:2px 2px 2px rgba(0,0,0,.06);border:1px solid #c4c6cc;border-radius:2px;padding:10px 15px}#res-bookable-page #vehicleUpsells h3{background:0 0!important}#res-bookable-page .notIncludeSpaces.ccn-note{display:none}#reviewAndBookCost #rd-totals{display:none!important}#reviewAndBookCost #rd-more{border:none!important;padding:0!important}#reviewAndBookCost #rd-more .rd-info{padding:0!important}#reviewAndBookCost .rd-box{background-color:#e6e7eb;box-sizing:border-box}#reviewAndBookCost #rate-details-content{margin-left:0!important}#reviewAndBookCost figure img{max-width:180px;margin:0 auto;display:block}#vehicleUpsells .veh-container{box-sizing:border-box}.upgrade-options .veh-container h3{padding:0!important}.upgrade-options figure .img-container{width:auto!important}.upgrade-options figure .img-container img.vehicle-img-lrg{width:100%!important;max-width:210px!important;height:auto!important;display:block;margin:0 auto}.upgrade-options .button-container{text-align:center}.upgrade-options .veh-container figure,.upsell-button-container{display:table!important;width:100%!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .button-container,.upsell-button-container .upsell-button-container-col-left{display:table-cell!important;vertical-align:top!important;float:none!important;clear:both!important;margin:0!important;padding:0!important;box-sizing:border-box!important}.upgrade-options .veh-container figure figcaption{display:none!important}.upgrade-options .veh-container figure .img-container,.upsell-button-container .upsell-button-container-col-left{width:40%!important}#important,#res-bookable-page #information,#res-bookable-page .bookable-main-container{display:block!important;box-sizing:border-box;width:100%!important;margin:0!important}#cb-in-page-enrollment{display:none!important}#res-bookable-page div.content,#res-bookable-page div.content-half,#residency-dropdown{width:100%!important;border:1px solid #c4c6cc!important;border-radius:2px!important;box-sizing:border-box;clear:both}#flight-services-autocomplete{border:1px solid #c4c6cc!important;border-radius:2px!important;box-sizing:border-box}#res-bookable-page div.content.form-radio{border:none!important}#res-bookable-page div.content.form-radio .radio input[type=radio]{margin-left:-6px;margin-right:10px}.upgrade-options .veh-container .button-container button{float:none!important}.upgrade-options .button-container a{float:none!important;padding:0!important;margin:10px 0 0!important}.upgrade-options .veh-container .button-container button{border:2px solid #365ad8!important;background:#fff!important;color:#365ad8!important;font-size:16px!important;margin:11px 0 0!important;padding:8px 25px!important;border-radius:2px!important}.upgrade-options .veh-container .button-container a.details{color:#365ad8!important;display:inline-block;text-decoration:none}.upgrade-options .veh-container .button-container a.details:hover{text-decoration:underline}#residency-dropdown{margin-bottom:15px!important}#res-bookable-page div.content label,#res-bookable-page div.content-half label{display:block!important;padding:3px 10px 0!important;box-sizing:border-box;margin:0!important}#bookableCreditCardTable{margin-bottom:5px!important;padding:1px 0!important}#res-bookable-page input[type=email],#res-bookable-page input[type=tel],#res-bookable-page input[type=text],#res-bookable-page select{width:100%!important;border:none;box-shadow:none;box-sizing:border-box;font-size:18px;padding:4px 0 15px;margin:0}#res-bookable-page select::-ms-expand{display:none}#res-bookable-page select#redeemPointList{border:1px solid #c4c6cc!important;padding-top:10px!important;padding-bottom:10px!important;margin:0 0 3px!important;font-size:18px!important}#res-bookable-page #pay-with-your-points #points-available{padding:0!important;font-size:18px!important;margin-bottom:10px!important}#res-bookable-page #pay-with-your-points .choose-rewards{border:none!important;padding:0!important;margin:0 0 20px!important}#res-bookable-page #pay-with-your-points .choose-rewards label{cursor:default!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints{color:#5c5f66!important;padding-left:34px!important;position:relative;text-align:left!important;font-weight:400!important;font-size:12px!important;clear:both!important;margin-left:0!important}#res-bookable-page #pay-with-your-points .choose-rewards .noPoints .icons-info{position:absolute;top:1px;left:2px}#res-bookable-page #customerInfo legend.hertz-gold-title{padding-top:21px!important}.bookable-toggle-title{font-size:14px;text-align:left}.bookable-toggle-title-mrg-0{margin-top:0}#bookableCCToggle,#bookableFreqTravlerToggle{margin-bottom:10px}#bookableCCToggle label{padding-left:0}#bookableCCToggle input{margin-left:0}#bookableMemberSection{padding:20px 0 10px;font-size:14px}#frequent-traveler{margin-bottom:20px}#res-bookable-page select#residenceCountry{height:60px!important}#information .creditcard .expire{font-size:0}.review-and-book-header{font-size:28px!important;margin:0 0 10px!important;font-weight:300!important}#arrival-misc-info .arrival-info-heading,#res-bookable-page legend{font-weight:600!important;font-size:18px!important;border-bottom:1px solid #e6e7eb!important;padding:0 0 5px!important;margin:0 0 20px!important;line-height:20px!important;color:#000!important}#arrival-misc-info .arrival-info-heading{margin-top:5px!important;margin-bottom:2px!important}#res-bookable-page #customer-residency.content-half{border:none!important}.gray-border{display:none!important}.arrival-info-container,.frequent-traveler-info-container,.misc-info-container{background-color:transparent!important;padding:0!important}.frequent-traveler-info-container{color:#5c5f66}#arrival-info p{margin-left:0!important;margin-right:0!important}#arrival-misc-info .arrival-info-cont{border:none!important}#disclaimer-and-reserve .details #bookableSubmit{display:none!important}#res-bookable-page #approx-rate .total{background-color:#f2f4f7!important}#vehicle-border{display:none!important}#vehicleUpsells .vehContent{width:50%}#reviewAndBookCost #rd-rental-total header{display:table;width:100%;box-sizing:border-box}#reviewAndBookCost #rd-rental-total header .rd-subtotal,#reviewAndBookCost #rd-rental-total header .rd-title{display:table-cell;vertical-align:middle;font-size:20px;text-align:right}#reviewAndBookCost #rd-rental-total header .rd-title{width:55%;text-align:left}#reviewAndBookCost header .rd-subtotal .review-and-book-summary-currency{font-size:14px}#reviewAndBookCost #itinerary-content,#reviewAndBookCost .rd-header-crtl{display:none!important}#res-bookable-page #small-screen-itinerary{display:none!important}#res-bookable-page #approx-rate .submit-button-full{position:inherit!important;display:inline-block!important;width:auto!important;box-sizing:border-box!important;background-color:#fc0!important;border:2px solid #fc0!important;color:#000!important;font-size:17px!important;border-radius:2px!important;padding-left:25px!important;padding-right:25px!important;margin-bottom:0!important;float:none!important}#res-bookable-page #approx-rate .submit-button-full:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#res-bookable-page #approx-rate .submit-button-full #approx-rate{display:none!important}.bookable-btn-wrap{text-align:right;background-color:#f3f4f8;padding:10px 20px;margin-bottom:15px}#flight-services{margin-top:10px!important}#res-bookable-page #approx-rate .submit .terms .terms{padding-top:0!important}.bookable-cost-header-row{display:table;width:100%;border-bottom:1px solid #e6e7eb}.bookable-cost-header-col{display:table-cell;vertical-align:top;padding-bottom:3px}.bookable-cost-header-col-right{width:120px;text-align:right;padding-top:4px}.bookable-cost-header-col-right a{font-size:14px;text-decoration:none}.bookable-cost-header-col-left{font-size:18px;font-weight:600}#res-bookable-page #creditCard fieldset legend{display:block!important;background:0 0!important;padding-top:5px!important}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell br{display:none}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell p{margin-top:0}.review-and-book-col-left #cbPrivacyRadioGroup .radioCell{padding-left:0}#res-bookable-page #reviewAndBookCost #itinerary-info{width:100%!important}.review-and-book-row{display:table;width:100%;margin-top:10px;margin-bottom:10px;background-color:#fff}#res-bookable-page .notIncludeSpaces{padding-bottom:3px!important}.ccn-note{margin-top:-10px;margin-bottom:10px}#res-bookable-page .bookable-row-mobile{display:table;width:100%;margin-bottom:2px}#res-bookable-page .bookable-row-mobile .bookable-col{display:table-cell!important;width:50%!important}#res-bookable-page .bookable-row-mobile .bookable-col-left{padding-right:5px}#res-bookable-page .bookable-row-mobile .bookable-col-right{padding-left:5px}#res-bookable-page #creditCard fieldset .pre-populated-credit-card-details{padding:0!important}#res-bookable-page .bookablePrivacyOptInLink{display:inline-block}#cb_privacy_container{margin-bottom:0}#res-bookable-page #important .terms h2.inactive{display:none!important}';
    window.h0020CSS['reviewandBookAccordionMobile'] = '@media only screen and (max-width:767px){.essential-col{display:block;width:100%;margin-bottom:12px}.essential-col-inner{margin:0}#res-bookable-page #pay-with-your-points .choose-rewards select{font-size:14px!important;max-width:none!important}.current-member-email-container{background-color:#fff;padding:20px 0 0;font-size:14px}#bookablePrivacyOptInText{font-size:14px;margin-top:10px}#reviewAndBookCost #rd-main .rd-detail header div{color:#000}#reviewAndBookCost #rd-main .rd-box{border:none!important}#misc-info .misc-info-container{margin-top:0}.review-and-book-col{width:100%;vertical-align:top}.review-and-book-col-right{padding:20px;box-sizing:border-box}#reviewAndBookCost #rd-rental-total{padding:0 10px}#reviewAndBookCost #rd-totals{display:block!important}.review-and-book-col-left{padding:10px;box-sizing:border-box}#res-bookable-page #approx-rate-terms fieldset{background:0 0!important;padding-top:0!important}#res-bookable-page #approx-rate fieldset .details{border:none!important;margin:0 -10px 20px!important;background:#fff!important}#res-bookable-page #vehicleUpsells{margin-top:20px;margin-bottom:5px}#vehicleUpsells .vehContent{width:100%}.review-and-book-row{margin-bottom:0}#res-bookable-page{background:0 0!important}#container{background-color:#f3f4f8!important}.bookable-btn-col,.bookable-btn-col-inner,.bookable-btn-row,.bookable-btn-row-inner{display:inline;padding:0;width:auto}.bookable-btn-row{display:block;width:100%;box-sizing:border-box;text-align:center}#res-bookable-page #important,#res-bookable-page #information{margin-left:-10px!important;margin-right:-10px!important;width:auto!important}#res-bookable-page #important{padding:10px;background:#fff;position:relative}#res-bookable-page #creditCard fieldset{box-sizing:border-box}#res-bookable-page fieldset{padding:10px 0!important}.bookable-currency{font-size:12px;display:inline-block;padding-top:10px}.bookable-btn-wrap{border:1px solid #d7d8db;margin-top:15px;margin-bottom:20px}#important .terms-first{border-top:1px solid #d7d8db;padding-top:15px}#important #important-information-toggle,#important .terms .terms h2,h4.rental-links-header{border-bottom:none!important}#customerInfo legend{padding-left:0!important;box-sizing:border-box;font-size:16px!important;padding-bottom:15px!important;font-weight:500!important;margin-bottom:1px!important;padding-top:20px!important}#res-bookable-page #pay-with-your-points .choose-rewards{padding-bottom:10px!important}#res-bookable-page #approx-rate .submit-button-full{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important;float:none!important;min-width:initial}#res-bookable-page #billing-info fieldset legend,#res-bookable-page #creditCard fieldset legend,#res-bookable-page #frequent-traveler fieldset legend,#res-bookable-page #pointsSection fieldset legend{float:left;background:#fff!important;margin:-10px 0 15px!important;box-sizing:border-box;padding:10px 10px 20px!important;clear:both;width:100%;border:none!important;position:relative;font-size:16px!important;font-weight:500!important}#reviewAndBookCost #rd-main .rate-separator,#reviewAndBookCost #rd-main .rd-edit-cont{display:none!important}#res-bookable-page #billing-info fieldset legend::after,#res-bookable-page #creditCard fieldset legend::after,#res-bookable-page #frequent-traveler fieldset legend::after,#res-bookable-page #pointsSection fieldset legend::after{position:absolute;bottom:10px;left:0;width:100%;height:1px;pointer-events:none;content:"";border-bottom:1px solid #e6e7eb}#disclaimer-and-reserve h4{padding:0 10px 10px}#res-bookable-page #customerInfo legend.hertz-gold-title{margin-bottom:0!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs{background:#fff!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs .prepend-top{padding-top:0!important}#res-bookable-page input[type=email],#res-bookable-page input[type=tel],#res-bookable-page input[type=text],#res-bookable-page select{font-size:16px}#frequent-traveler,#misc-info{padding:0!important;margin:0!important}#arrival-info #autocomplete-container,#arrival-info #autocomplete-radio-buttons{display:none!important}#arrival-info #flight-services{display:block!important}#arrival-info #flight-details{margin:0!important}}';
    window.h0020CSS['headerDesktop'] = '#header-container .utility-bar .pos-container ul .change-link{margin:0!important;padding:0!important}#header-container .change-link .languageselector{color:#fff;text-decoration:none!important}#container #header-container .emember-container .firstnametext,#container #header-container .emember-container .lastnametext,#container #header-container .emember-container .welcometext{display:inline-block!important;color:#fff!important}#container #header-container .emember-container .lastnametext{padding-right:24px;position:relative}#container #header-container .cookiedLinks .fullswitchprofilelinktext::after,#container #header-container .emember-container .lastnametext::after{content:"";width:18px;height:10px;background-size:18px auto;display:block;position:absolute;top:3px;right:0}#container #header-container .cookiedLinks .fullswitchprofilelinktext.active::after,#container #header-container .emember-container .active .lastnametext::after{-ms-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}#header-container .pos-container li.line-seperator{display:none}#header-container .mob-nav{display:none!important}#nav-container .nav-menu{display:block!important}.header-primary{position:fixed;top:0;left:0;z-index:1000;width:100%;background-color:#000;box-sizing:border-box}#header-container{position:relative;width:100%}#res-home-page .slides{display:none!important}#nav-container .nav-menu{height:auto!important}#nav-container{padding-top:25px;padding-left:10px;padding-right:10px}.header-collapsed #nav-container{padding-top:18px}.logo-container{padding-bottom:10px}.logo-box{width:auto!important;height:auto!important;display:inline-block}#nav-container .logo-box img{width:150px!important;height:auto!important;transition:width .2s ease-out}.header-collapsed #nav-container .logo-box img{width:80px!important}.header-collapsed .logo-container{display:inline-block;float:left;padding-bottom:0;margin-right:15px}.header-collapsed #nav-container .nav-menu dl{top:25px}.header-collapsed #nav-container .nav-menu table{float:left;display:inline-block}.header-collapsed #nav-container .search-box{display:inline-block}#header-container,#nav-container{max-width:1300px;margin:0 auto}#header-container .utility-bar{width:auto!important;height:auto!important;padding:0!important;position:absolute!important;right:0!important;top:0!important;z-index:2}#header-container .utility-bar::after{content:"";display:block;width:100%;clear:both}#header-container .utility-bar .pos-container{float:none!important;height:auto!important;padding:0!important;background:0 0!important}#header-container .utility-bar .logo-container{height:auto!important;position:inherit!important;left:auto!important;bottom:auto!important}#header-container .logo-container .logo-box{width:auto!important;height:auto!important}#nav-container .nav-menu a,#nav-container .nav-menu span{padding:0!important;text-transform:none!important;font-size:14px!important}.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu span{font-size:13px!important}#nav-container .nav-menu table{margin:0!important}.search-box{float:right;clear:both;display:inline-block}#header-container .pos-container ul{padding-top:15px!important;padding-bottom:26px!important}.header-collapsed #header-container .pos-container ul{padding-top:0!important;padding-bottom:0!important}#header-container .pos-container button{border:none!important;background:0 0!important;padding:0!important;margin:0!important;color:#fff!important}#header-container .pos-container button:hover{color:#fc0!important}#header-container .utility-bar .pos-container ul .change-link{padding:0!important;height:auto!important}.header-collapsed .search-box{clear:none}.header-collapsed .pos-container{display:table}.header-collapsed .header-col{display:table-cell}.search-box .search-trigger{display:none}.search-container-wrap{position:relative;width:100%;clear:both}.search-container{clear:both;width:100%;display:none;background-color:#252525;position:absolute;top:0;left:0}.header-mobile{display:none;width:100%}.header-mobile-actions,.header-mobile-logo,.header-mobile-menu{display:table-cell;vertical-align:top;box-sizing:border-box}.header-mobile-actions,.header-mobile-menu{width:100px}.header-mobile-logo img{width:80px;height:auto}.header-mobile-menu a{display:block;width:50px;height:50px;background-size:20px 20px!important}.header-mobile-logo{padding:11px 14px;text-align:center}.header-mobile-actions{text-align:right;padding:16px 20px 10px}.header-mobile-actions .mm-search-icon{display:inline-block}.search-inner-row{display:table;max-width:1300px;width:100%;margin:0 auto;height:70px}.search-inner-col{display:table-cell;vertical-align:top;box-sizing:border-box}.search-inner-col input[type=text]{box-sizing:border-box;height:70px;width:100%;margin:0!important;padding:5px 20px 10px 40px;position:relative;background-color:#252525;color:#fff;border:none;font-size:20px}.search-inner-col-left{position:relative}.search-inner-col-left::after{content:"";display:block;background-size:18px auto;width:18px;height:18px;position:absolute;top:25px;left:10px;box-shadow:none!important;outline:0!important;pointer-events:none}.search-inner-col input[type=text]:focus{outline:0!important;box-shadow:none!important}.search-inner-col-right{width:75px;position:relative;vertical-align:middle;text-align:center}.search-inner-col-right::after{content:"";display:block;width:1px;height:24px;border-left:1px solid #5c5f66;position:absolute;top:24px;left:0;pointer-events:none}.search-inner-col-right a{color:#c4c6cc;text-decoration:none}.search-inner-col-right a:hover{color:#c4c6cc;text-decoration:underline}.search-box .mm-search-icon{display:inline-block}#container #header-container .utility-bar .emember-container{height:auto!important;padding:0!important;margin:0!important;position:relative;display:block!important}#container #header-container .utility-bar .change-link{display:block!important}#header-container .emember-container ul.topNavtopNavmobileHide{padding:0!important;height:auto!important}.header-collapsed .header-col-ul{padding-top:21px;padding-right:15px}.header-collapsed .header-col-ul .header-col-ul{padding-top:0;padding-right:0}#header-container .change-link .languageselector{margin-top:3px!important}#header-container .change-link .languageselector,#header-container .change-link .languageselector span{color:#fff;text-decoration:none!important}#header-container .change-link .languageselector:hover span{color:#fc0!important}#header-container .pos-container .pos-tab{background:0 0!important;color:#fff!important}#header-container .pos-tab .languageselector span{color:#fff!important}.utility-bar .icons-ic_globe_black{background-position:-68px -226px!important;height:22px!important;width:22px!important}#header-container .pos-container .country-label-text,#header-container .pos-container .language-label-text{color:#fff!important}#header-container .utility-bar .pos-container .pos-box{background-color:#2f2f2f!important;border-top:3px solid #fc0!important}#header-container .utility-bar .pos-container .pos-box::after{content:"";width:13px;height:8px;background-size:100% auto;position:absolute;top:-8px;right:27px}#header-container .utility-bar .pos-container .pos-box .secondary-on-yellow{color:#000!important;background-color:#fc0!important;padding:5px 20px!important}#header-container .utility-bar .pos-container ul .change-link{position:relative}#header-container .emember-container ul{height:auto!important;padding:0!important}#header-container .utility-bar .emember-container .topNavTabletShow{display:none!important}.homeloggedUserDetails .border-line{display:none!important}#header-container .emember-container ul{width:100%}#topNavRegisteredMenuCookied .switchProfileLink{padding:0!important}#topNavRegisteredMenuCookied .fullSwitchProfileLink{display:block!important}#header-container .cookiedLinks .fullswitchprofilelinktext{display:block!important;padding:0 24px 0 5px!important;position:relative}#header-container .utility-bar #member-name-points-info.no-dropdown{display:block!important}#header-container .utility-bar #member-name-points-info.no-dropdown li{border:none;padding:0}#header-container .utility-bar #member-name-points-info.no-dropdown li#logOut{text-align:right!important}#header-container .utility-bar #member-name-points-info.no-dropdown li.useraccount{display:none!important}#header-container .utility-bar #member-name-points-info.no-dropdown li#logOut a{color:#fff;text-decoration:none}#header-container .utility-bar .pos-container.no-dropdown{display:none!important}.mm-header-search-icon{transition:opacity .2s;opacity:1}.mm-header-search-icon.active{opacity:.5}#header-container .fullswitchprofilelinktext,#header-container .partialSwitchProfileLink{display:none!important}#header-container #cookieLink .fullSwitchProfileLink{display:block!important}#header-container .cookiedLinks .fullswitchprofilelinktext,.homeloggedUserDetails{cursor:pointer}.mm-hdr-mob-sctn{display:none;margin-bottom:12px}';
    window.h0020CSS['headerDesktop2'] = '@media only screen and (min-width:1201px){#cookieLink{padding:3px 0!important}.header-email-form-wrap{padding-right:10px}.mm-hdr-mob-sctn{display:none!important}#header-container .emember-container #loggedInTravelAgent,#header-container .emember-container li#loggedInMember{padding:4px 0 0}#header-container .utility-bar .emember-container #topNavDesktopShow{padding-top:3px!important}.header-col-icons{position:absolute;bottom:-24px;right:10px;z-index:-1}#header-container .pos-container ul{height:22px}#container .header-collapsed #header-container .utility-bar .pos-container{display:table!important;height:60px!important}#container .header-collapsed #header-container .utility-bar .pos-container.no-dropdown{display:none!important}.header-collapsed .header-col-icons{position:inherit;bottom:auto;right:auto;vertical-align:middle}.header-collapsed #header-container .pos-container ul{height:auto}.top-nav-registered-menu{background-color:#2f2f2f!important;border-top:3px solid #fc0!important;position:absolute;top:30px;right:0;width:200px!important;display:none!important}.top-nav-registered-menu.active{display:block!important}.top-nav-registered-menu li{display:block!important;padding:0!important;width:100%!important;clear:both!important;margin:0!important;border:none!important}#header-container .utility-bar .emember-container .useraccount{height:auto!important}.header-collapsed .top-nav-registered-menu a,.top-nav-registered-menu a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:10px 15px!important;height:auto!important;border:none!important;display:block!important;clear:both!important;float:none!important;margin:0!important;text-decoration:none!important}.header-collapsed .top-nav-registered-menu a:hover,.top-nav-registered-menu a:hover{background-color:#686b72!important;color:#fff!important}#header-container .utility-bar #member-name-points-info.no-dropdown{display:block!important;position:absolute;top:44px;right:10px}.header-collapsed #header-container .utility-bar #member-name-points-info.no-dropdown{top:20px}#header-container .utility-bar #member-name-points-info.no-dropdown .emember-container{width:200px!important}#header-container .emember-container ul.homeloggedUserDetails,#header-container .emember-container ul.topNavtopNavmobileHide{margin-right:0!important}#header-container .pos-container ul{margin:0 10px 0 0!important}#header-container .utility-bar .pos-container .pos-box{position:absolute!important;right:30px!important;top:30px!important;z-index:1000}.header-inner-mobile{display:block!important}#header-container .utility-bar .pos-container{min-width:100px}#nav-container .nav-menu td{display:inline-block!important;margin-right:30px!important}.header-collapsed #nav-container .nav-menu td{margin-right:15px!important}.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu span{height:25px}.nav-primary-link-no-menu a:hover{background:0 0!important;color:#fff!important}.active-menu,.nav-primary-animate-hover{position:relative}.active-menu::after,.nav-primary-animate-hover::after{content:"";width:100%;height:2px;background-color:#fc0;display:block;position:absolute;bottom:10px;left:0;pointer-events:none}.nav-primary-animate-hover::after{width:0;opacity:0;transition:width .2s}.nav-primary-animate-hover:hover::after{width:100%;opacity:1}.nav-primary-anchor-right::after{left:auto;right:0;opacity:1}.header-collapsed .active-menu::after,.header-collapsed .nav-primary-animate-hover::after{bottom:0}.header-primary{height:135px}.header-primary.header-collapsed{height:60px}.header-collapsed .header-inner-mobile{height:60px}#nav-container .nav-menu dl.menu-show{width:280px!important}#nav-container .menu-show a,.header-collapsed #nav-container .menu-show a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:1px 15px!important;height:auto!important;border:none!important}#nav-container .menu-show a:hover,.header-collapsed #nav-container .menu-show a:hover{background-color:#686b72!important;color:#fff!important}#nav-container .logo-box img{cursor:pointer}#nav-container .nav-menu .nav-mobile-expandable-section a,#nav-container .nav-menu .nav-mobile-expandable-section span{font-size:12px!important}}';
    window.h0020CSS['headerMobile'] = '@media only screen and (max-width:1200px){#header-container .change-link span,#homePageLoginOverlay.mm-force-show #loginFormContainer .memberFormDivInner .cookiedMemberOverlay li{float:left}#homePageLoginOverlay{display:none!important}#homePageLoginOverlay.mm-force-show{display:block!important}#homePageLoginOverlay.mm-force-show #loginFormContainer{display:block!important;top:110px!important}#homePageLoginOverlay.mm-force-show #loginFormContainer .loginHeader{background-color:#000;font-weight:700;padding:15px;margin-top:-1px}#homePageLoginOverlay.mm-force-show #loginFormContainer .memberFormDivInner{overflow:hidden;padding:10px 15px 5px}#homePageLoginOverlay.mm-force-show #loginFormContainer .memberFormDivInner .cookiedMemberOverlay{overflow:hidden;padding:0;width:100%;margin:0;list-style:none}#homePageLoginOverlay.mm-force-show #loginFormContainer .loginHeader img{height:auto;width:184px}#homePageLoginOverlay.mm-force-show #loginFormContainer .formRow{overflow:hidden;margin:10px 0}#homePageLoginOverlay.mm-force-show #loginFormContainer .loginFormInner{border-top:5px solid #000}#memberNavClubHeader{padding:10px 35px!important;display:block;color:silver;text-transform:uppercase}#header-container .fullSwitchProfileLink a,#nav-container .nav-menu .menu-hover{color:#FFF!important}#nav-container .top-nav-registered-menu .mm-hdr-mob-sctn a{padding-left:35px!important}#container #header-container .emember-container,#header-container .utility-bar .pos-container ul .change-link{display:block!important}#homePageLoginOverlay #loginFormContainer{background-color:#fff!important;width:260px!important;z-index:1000!important;border:1px solid #CCC!important}#header-container .utility-bar .emember-container,.emember-container .loginActive{background:0 0!important}#homePageLoginOverlay #loginFormContainer #loginFormInner ul#loggedUserDetails{float:none;line-height:15pt;list-style:none;margin:0;padding:5px 0 0}#homePageLoginOverlay #loginFormContainer #loginFormInner ul#loggedUserDetails li{border-bottom:1px solid #EDEDED;border-right:medium none;cursor:pointer;float:none;margin-bottom:5px;margin-top:5px;padding:0}#homePageLoginOverlay #loginFormContainer #loginFormInner ul#loggedUserDetails li a{text-decoration:none}#homePageLoginOverlay #loginFormContainer #loginFormInner{border-top:5px solid #000!important;padding:15px!important}#header-container #cookieLink .fullSwitchProfileLink{display:inline-block!important}#header-container .pos-container ul{width:100%;box-sizing:border-box;padding:0!important;margin:0!important}#header-container .emember-container .homeloggedUserDetails{display:block!important}#header-container .emember-container .homeloggedUserDetails li{display:none}#header-container .emember-container .homeloggedUserDetails li#topNavDesktopShow{display:block;padding:0}#header-container #member-name-points-info .emember-container{display:none!important}#loginLinkClub{display:block;float:left}#container #header-container .utility-bar .emember-container{position:absolute;top:17px;left:20px;width:300px;max-width:90%}#container #header-container #mobileNavAwards,#container #header-container .topNavmobileShow.mobiMyAccount{display:none!important}#container #header-container .utility-bar #member-name-points-info.no-dropdown .emember-container{right:20px;left:auto}body.mobile-main-menu-open{width:100%;height:100%;overflow:hidden}#header-container .pos-container .change-list{position:absolute;top:14px;right:20px}.header-col .header-col-ul{width:100%!important;display:block!important}.header-col-ul .change-link{display:block!important}body{padding-top:50px!important}#header-container .utility-bar .pos-container .pos-box{position:relative;background:0 0!important;display:none;width:100%!important;top:40px;left:0;padding-bottom:47px;box-sizing:border-box;padding-left:20px;padding-right:20px}#header-container .utility-bar .pos-container .pos-box::after{display:none}#nav-container{padding-top:0!important}.logo-container{padding-bottom:0}.icons-ic_globe.handler-trigger,.languageselector{display:inline-block}.header-mobile{display:table}.header-inner-mobile{display:none}#nav-container .nav-menu span,#nav-container .nav-menu td{display:block!important}#nav-container .nav-menu dl{position:initial!important;width:100%!important;top:auto!important;left:auto!important}#header-container .utility-bar{min-height:20px;position:inherit!important;width:100%!important}#header-container .search-box,.nav-menu .logo-container{display:none!important}#nav-container .menu-show a,#nav-container .menu-show a:hover{background:0 0}#nav-container .nav-menu a,#nav-container .nav-menu dd,#nav-container .nav-menu dd a,#nav-container .nav-menu dl,#nav-container .nav-menu span,#nav-container .top-nav-registered-menu a,.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu dd,.header-collapsed #nav-container .nav-menu dd a,.header-collapsed #nav-container .nav-menu dl,.header-collapsed #nav-container .nav-menu span{display:block!important;height:auto!important;padding:0!important;margin:0!important;font-size:14px!important;line-height:14px!important;background:0 0!important;color:#FFF!important;border:none!important;box-sizing:border-box!important}#nav-container .nav-menu dl{padding-bottom:20px!important}.header-primary{height:50px;transition:height .3s}.header-primary.expanded{height:100%;overflow:auto}.nav-mobile-expandable-link,.nav-mobile-expandable-link-style{position:relative}#nav-container .nav-menu .nav-mobile-expandable-link span,#nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu .nav-mobile-expandable-link span,.header-collapsed #nav-container .nav-menu a{text-transform:uppercase!important;font-size:14px!important;display:block!important;padding:10px 40px 10px 20px!important;text-decoration:none!important}.mobile-expand-active .nav-mobile-expandable-link::after,.nav-mobile-expandable-link-style-inactive::after,.nav-mobile-expandable-section{display:none}#nav-container .nav-menu dl a,.header-collapsed #nav-container .nav-menu dl a{text-transform:none!important;padding:10px 35px!important;text-decoration:none!important}#nav-container{padding:10px 0!important}.nav-mobile-expandable-link-style::after,.nav-mobile-expandable-link::after{content:"";position:absolute;top:6px;right:28px;width:2px;height:10px;background-color:#ccc}.nav-mobile-expandable-link-style::before,.nav-mobile-expandable-link::before{content:"";position:absolute;top:10px;right:24px;width:10px;height:2px;background-color:#ccc}.nav-mobile-expandable-link-style::after{top:14px}.nav-mobile-expandable-link-style::before{top:18px}.header-primary{padding-left:0!important;padding-right:0!important}#nav-container .nav-menu table,#nav-container .nav-menu table tbody,#nav-container .nav-menu table tr,.header-collapsed #nav-container .nav-menu table,.header-collapsed #nav-container .nav-menu table tbody,.header-collapsed #nav-container .nav-menu table tr{float:none!important;display:block!important;width:100%!important}#header-container .utility-bar{display:block!important;background-color:#252525!important}#res-form .home-btn-group .button{padding:0!important}a#pos-change,a#pos-change:hover{text-decoration:none}#member-name-points-info #loginLinkClub{display:none!important}#header-container .pos-container ul li{list-style-type:none}#header-container .utility-bar .pos-container ul .change-link{float:none;width:100%;box-sizing:border-box;position:inherit}#header-container select{width:100%!important;margin:0!important}.utility-bar .icons-ic_globe_black{display:inline-block}#header-container .change-link .languageselector{margin-top:0!important;display:inline-block;position:relative;top:3px;padding-left:5px}#header-container .utility-bar .pos-container,.topNavtopNavmobileHide{display:block!important}#header-container .pos-container .country-label-text,#header-container .pos-container .language-label-text{padding-bottom:10px!important}#header-container .pos-container button{float:right!important}#member-name-points-info{float:left}#header-container .utility-bar{padding-top:15px!important;padding-bottom:15px!important}#header-container .pos-container label{padding:10px 0 15px!important}#header-container .cookiedLinks .fullSwitchProfileLink{display:inline-block;color:#FFF}#header-container .cookiedLinks .fullSwitchProfileLink .cookieFirstName{display:inline-block!important}#header-container .cookiedLinks .fullSwitchProfileLink .cookieFirstInit,#topNavRegisteredMenu,#topNavRegisteredMenuCookied{display:none!important}#header-container .cookiedLinks li{float:none!important}#nav-container .top-nav-registered-menu{display:none;padding-bottom:15px;margin-bottom:15px;border-bottom:1px solid #2a2a2a;height:auto!important}#nav-container .top-nav-registered-menu .switchProfileLink,#nav-container .top-nav-registered-menu.active{display:block!important}#nav-container .top-nav-registered-menu a{display:block;box-sizing:border-box;padding:10px 20px!important;text-decoration:none}#homePageLoginOverlay #loginFormContainer{left:20px!important;position:absolute!important;top:150px!important}#cookieLink{padding:0!important}}',
    window.h0020CSS['confirmation'] = '#important-info{padding-top:10px;padding-bottom:20px;font-size:14px}#res-disclaimer{padding:10px 0 20px}#placePassConf{box-sizing:border-box;padding:10px;text-align:center}#placePassConf img{max-width:100%}.conf-placepass-desktop{display:inline-block}.conf-placepass-mobile{display:none}.confirmation-resflow-box-link-row{display:table;width:90%;max-width:580px;margin:10px auto}.confirmation-resflow-box-link-col{display:table-cell;vertical-align:top}.confirmation-resflow-box-link-col-left{width:180px}.confirmation-resflow-box-link-col-right{text-align:right}#res-confirmation-page #page-content #res-summary #res-summary-box{width:90%!important;padding:20px!important;box-sizing:border-box;max-width:580px!important;margin:-120px auto 0!important;position:relative!important;box-shadow:2px 2px 2px rgba(0,0,0,.06)}.confirmation-row{display:table;width:100%;max-width:1076px;margin:50px auto}.confirmation-col{display:table-cell;vertical-align:top;box-sizing:border-box}.confirmation-col-left{padding-right:60px}.confirmation-col-right{width:360px}#res-confirmation-page #main-content{float:none!important;width:100%!important;max-width:1076px;margin:0 auto;box-sizing:border-box}#confColR #rd-main .rd-box:first-child{margin-top:0!important}#rd-main.rd-state2 .equals,#rd-main.rd-state2 .plus,#rd-main.rd-state3 .equals,#rd-main.rd-state3 .plus{display:none!important}#confColR #rd-main.rd-state2 .rd-col,#confColR #rd-main.rd-state3 .rd-col{width:100%!important}.itinerary-confirmation-image{text-align:right}.itinerary-confirmation-image img{max-width:375px;width:100%}.confirmation-col-max-width{max-width:780px}#calendar-options .cal-icon{display:none!important}.outlook-cal.clearfix::after{content:"|";display:inline-block;padding-left:14px}.conf-summary-buttons button::after{content:"|";display:inline-block;padding-left:9px;padding-right:5px;color:#000}.conf-summary-buttons button:last-child::after{display:none}.confirmation-col-left .itin-expand-ovrvw-row-outlined{margin-bottom:10px}#res-confirmation-page #page-content #res-summary #add-to-cal ul{text-align:center!important}#add-to-cal a{text-decoration:none;color:#3455db!important}#res-summary-box h3{text-align:left;font-size:28px;font-weight:300;margin:0 0 8px}#res-summary-box h4{text-align:left;font-weight:300!important;font-size:14px;margin:3px 0 8px}#res-confirmation-page #page-content{max-width:1076px;margin:0 auto}#res-summary-box h4 .confirmation-number{font-size:14px}#res-confirmation-page #page-content #res-summary #res-summary-box p,#res-confirmation-page #page-content #res-summary #res-summary-box ul{text-align:left;padding-left:0;font-size:14px!important;margin-left:0}#res-confirmation-page #page-content #res-summary .print-cont .print-link{font-size:14px!important}#res-confirmation-page #page-content #res-summary .print-cont{text-align:left!important;margin-bottom:13px;margin-top:8px}.confirmation-prepay-note{max-width:580px!important;margin:16px auto 0;font-size:14px}.confirmation-resflow-box-link-row button{padding:0!important;background:0 0!important;display:inline!important;color:#3455db!important;font-size:13px!important;border:none!important;text-decoration:none!important;font-weight:300!important}#res-confirmation-page #page-content #res-summary #res-summary-box .res-edit-note{display:none}.print-link{color:#3455db!important;text-decoration:none!important}#expand_collapse_vehicle,#itinerary-cont .icons-collapse_icon{display:none!important}#itinerary-cont .itn-container{display:block!important}#rd-rate .rd-header-crtl.link-indicator,#res-itinerary-2 .click-indicator .link-indicator{text-decoration:none!important;color:#000!important;padding:10px!important;font-size:16px!important}#res-confirmation-page #conf-button-cont .modify-res,#res-confirmation-page #conf-button-cont .start-another-res,#res-confirmation-page #conf-button-cont .start-checkin,#res-confirmation-page #page-content #terms-pagination-next{display:none!important}#confColR #rd-rate .rate-separator,#confColR .click-indicator{display:none!important}#counter-bypass p{text-align:center;font-size:14px!important;line-height:18px!important;padding-left:10px!important;padding-right:10px!important}#counter-bypass p strong span span span{font-weight:500;font-size:18px!important}#res-confirmation-page #page-content #counter-bypass{padding:10px 0 0!important}#counter-bypass .primary{font-size:18px;font-weight:500!important;width:100%!important;background:#fc0!important;color:#000!important;border:2px solid #fc0!important;box-sizing:border-box!important;display:block!important;margin-top:20px!important}#counter-bypass .primary:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#confColL #res-itinerary-2 .click-indicator{background:0 0!important;border-bottom:1px solid #e4e5e7}#confColL #res-itinerary-2 .click-indicator .link-indicator{padding:0 0 4px!important;margin:0!important;font-size:18px!important;font-weight:700}#confColL #res-itinerary-2 .itn-container{display:table!important;width:100%!important;margin-left:0!important;margin-right:0!important}#confColL #res-itinerary-2 .int-loc-tm-info,#confColL #res-itinerary-2 .int-misc-info{display:table-cell!important;width:50%!important;margin:0!important;box-sizing:border-box!important;font-size:14px!important;line-height:18px!important}#confColL #res-itinerary-2 .int-loc-tm-info{padding-right:20px!important}#confColL #res-itinerary-2 .int-loc-tm-info label,#confColL #res-itinerary-2 .int-misc-info label{margin-top:20px!important}#confColL #res-itinerary-2{border-bottom:1px solid #e4e5e7!important;margin-bottom:30px!important;padding-bottom:12px;margin-top:20px!important;border:none!important}#res-confirmation-page #page-content #res-disclaimer{margin-bottom:20px!important}#res-confirmation-page #page-content #res-summary #ultimate-choice-box{border:none!important;margin:0!important;padding:0!important}#res-confirmation-page #page-content #conf-button-cont{border-top:1px solid #ededed!important;border-bottom:1px solid #ededed!important;text-align:center!important;padding-top:15px!important;padding-bottom:15px!important}#res-confirmation-page #page-content #conf-button-cont .conf-buttons{text-align:center!important}#res-confirmation-page #page-content #conf-button-cont button{display:inline-block!important;float:none!important;margin:0 5px!important;padding:0!important;background:0 0!important;border:none!important;color:#3455db!important;font-size:14px!important;font-weight:400!important}#res-confirmation-page #page-content #conf-button-cont button:hover{text-decoration:underline!important}#res-prepay-terms-accept input[type=checkbox]{position:absolute;top:-150px;left:0;pointer-events:none;visibility:hidden}#res-prepay-terms-accept{position:relative;padding-left:30px}#conf-button-cont .cancel-res{margin-top:10px;margin-bottom:30px}#confColR .rd-vehicle figure img{width:90%;display:block;margin:0 auto;max-width:290px}#confColR #rd-pay-later,#confColR #rd-pay-now{margin-top:15px!important}#confColR #rd-rental-total .rd-box{background:#f2f4f7!important;box-sizing:border-box!important;padding:10px 15px!important}#confColR #rd-main #rd-charge-discrepancy{margin-top:20px!important}#confColR #rd-optional-info footer{background:0 0!important}#confColR #rd-main.rd-state2 #rd-rental-total,#confColR #rd-main.rd-state3 #rd-rental-total{margin-bottom:18px!important}#confColR #rd-main .rd-opt-rate .rd-name{padding-left:25px!important}#res-confirmation-page #ads-content{width:100%!important;float:none!important;box-sizing:border-box!important;max-width:1076px;margin:0 auto!important;text-align:center!important;background-color:#fff}#res-confirmation-page #ads-content .gptAdBlock{display:block;float:left;margin-right:10px}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-date{font-weight:700}#res-confirmation-page #page-content #page-banners{display:none!important}';
    window.h0020CSS['homepage'] = '.res-inr-wrp #itn-residency{display:none!important}#discountCodeOverlay #GPR_Proxy{position:relative;top:2px}#discountCodeOverlay #discounts{margin-right:6px!important;margin-top:7px!important}.res-inr-wrp #res-form label.checkbox[for=discounts]{padding-left:0;font-size:14px!important}.modal-close-icon{cursor:pointer}#discountCodeOverlay .discount-cont,#discountCodeOverlay .fade-field label{background:0 0!important}.gpr-checkbox-row input[type=checkbox]{display:inline-block;margin-right:5px;margin-left:5px}#discountCodeOverlay .discount .icons-info_sm{display:inline-block;position:relative;top:-2px}#discounts-section,#discounts-section .discount-cont{display:block!important}#discountCodeOverlay #discount-slideout.click-indicator{display:none!important}#discountCodeOverlay #discounts-section .discount{padding:5px 15px}#discountCodeOverlay.no-gpr #discounts-section .discount{padding-top:20px!important}.gpr-checkbox-row{padding:15px 10px 5px}.gpr-checkbox-row label{font-size:14px}.res-inr-wrp #res-form input#GPR_Proxy{margin-right:5px!important;margin-top:1px!important}.res-pos-rel{position:relative}#sld-ctrl-cont,#slide-cont,.hp-bg-wrapper{display:none!important}.res-form{position:inherit!important;left:auto!important;top:auto!important;width:100%!important}#res-home-page #hp-banner-ads{width:100%!important;max-width:1000px;margin:0 auto;text-align:center!important;padding-top:20px!important;padding-bottom:30px!important;box-sizing:border-box}#res-home-page #hp-banner-ads>div{margin-top:10px!important}#hp-banner-container{position:inherit!important}#res-submit-btns nav tr,.res-inr-wrp #res-submit-btns nav table,.res-inr-wrp #res-submit-btns nav td{display:block!important}.res-inr-wrp #res-submit-btns nav td.gaq-rmc-tabs.selected{display:none!important}.homepage-form-group{padding:0!important}#res-itinerary-2 .itn-container .int-loc-tm-info .pickup-location,#res-itinerary-2 .itn-container .int-loc-tm-info .return-location{width:100%!important;float:none!important;margin:0!important}@media only screen and (min-width:768px){#hp-banner-container .gptAdBlock{display:inline-block!important;vertical-align:top;width:auto!important;height:auto!important;float:none!important}}#res-home-page{position:initial!important}.discount-code-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}.discount-code-overlay.active{display:block}.discount-code-overlay-inner{width:95%;max-width:375px;background-color:#fff;margin:10px auto}.res-inr-wrp #itn-vehicle-type,.res-inr-wrp #res-form hr,.res-inr-wrp .find-location,.res-inr-wrp .location-dates-arrival figure,.res-inr-wrp .one-way-cont,.res-inr-wrp .previous-rentals-link{display:none!important}#res-home-page #rmc-section>div{padding-bottom:0!important}.gaq-rmc-tabs.selected{display:none!important}#res-home-page .res-form section{padding:0!important}.res-otr-wrp{padding:20px 15px 10px;box-sizing:border-box;max-width:1230px;margin:-100px auto 0;transition:margin-top .2s ease-out}.res-inr-wrp{position:relative;background-color:#fff;padding:30px 40px 30px;border-radius:7px;border-bottom:5px solid #fc0;box-shadow:0 2px 9px rgba(0,0,0,.2);box-sizing:border-box;min-height:150px;transition:padding-top .2s ease-out}.res-otr-wrp.reduced .res-inr-wrp{padding-top:40px}.res-inr-wrp nav{position:absolute;top:15px;right:30px}.modify-keep-active #res-submit-btns,.modify-keep-active .res-inr-wrp #nonmember-res-search,.modify-keep-active .res-inr-wrp #other-res-search{bottom:79px}.res-inr-wrp #res-submit-btns .prepend-top{margin-top:0}.res-inr-wrp #nonmember-res-search{bottom:-4px}.res-inr-wrp #res-form #return-loc{padding-bottom:0!important}.res-inr-wrp #res-form input,.res-inr-wrp #res-form select{margin:0!important}.res-inr-wrp #res-form .date-header{margin-top:0!important;padding-top:0!important}.res-inr-wrp #itn-age br{display:none}.homepage-form-row,.hp-form-row-inr{display:table;width:100%}.homepage-form-col,.hp-form-col-inr{display:table-cell;width:50%;box-sizing:border-box;vertical-align:top}.homepage-form-col-full{width:100%}.hp-form-col-inr{vertical-align:bottom}.homepage-form-row-discount-only{width:38%}.res-inr-wrp h1.hero-h1{color:#000;text-transform:normal;font-weight:300;margin:0 0 20px;font-size:40px}.homepage-form-group input[type=text],.homepage-form-group select{width:100%!important;border:none;box-shadow:none;box-sizing:border-box;font-size:18px;padding:2px 10px 15px;margin:0}.homepage-form-group select{padding:0 10px;height:40px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-size:18px auto}.homepage-form-group select::-ms-expand{display:none}#resformStartTrigger{border:1px solid #c4c6cc;border-radius:2px;font-size:18px;color:#585961;font-size:18px;position:relative;padding:20px 20px 20px 45px;box-sizing:border-box;cursor:pointer}#resformStartTrigger img{position:absolute;top:21px;left:19px}.reservation-start{margin-top:0;font-size:36px;margin-bottom:20px;font-weight:400}.discount-code-overlay .row{padding:0!important}.res-inr-wrp #discounts-section #cdp-options-business,.res-inr-wrp #discounts-section .discount-cont,.res-inr-wrp #discounts-section .discount-row.highlight,.res-inr-wrp #res-form #redeem-section .redeem{background:0 0!important}.res-inr-wrp #discounts-section #cdp-options-business{padding-top:15px}.res-inr-wrp #cdp-options{padding-top:5px}.res-inr-wrp .corp-gov{margin-bottom:7px}.res-inr-wrp #res-form #redeem-section .redeem{padding:5px 10px}.res-inr-wrp #discounts-section .discount{padding:5px 10px!important}.res-inr-wrp #res-form label.checkbox{font-size:12px!important;line-height:24px!important}.res-inr-wrp #discount-slideout{display:none!important}.res-inr-wrp #discounts-section{display:block!important}.res-inr-wrp .discount-cont{display:none!important}.discount-code-value{height:40px;font-size:18px;padding:5px 10px;box-sizing:border-box;width:100%;overflow:hidden;line-height:28px;position:relative;cursor:pointer}.discount-code-value.active{padding-left:45px}.discount-code-value.active::after{content:"";position:absolute;top:8px;left:9px;width:30px;height:40px;background-size:100% auto}body.discount-overlay-open{width:100%;height:100%;overflow:hidden}.discount-overlay-open #page{z-index:1000}#rmc-section #res-message,#rmc-section .add,#rmc-section hr{display:none!important}.res-inr-wrp #res-form .date-time .date,.res-inr-wrp #res-form .date-time .time-box{width:100%!important;box-sizing:border-box!important;height:40px!important;border:none!important;position:relative}.res-inr-wrp .icons-calendar{position:absolute;top:11px;right:8px}.res-inr-wrp #res-form .date-time .date{padding-left:10px!important;padding-right:10px!important}.res-inr-wrp #res-form .date-time .date .value{font-size:18px;padding:5px 0 0;box-sizing:border-box}.res-inr-wrp #res-form .date-time .date .date-cal{float:right;width:35px!important}.res-inr-wrp #res-form .fts,.res-inr-wrp #res-form article{padding-left:0!important;width:100%!important;box-sizing:border-box}.res-inr-wrp #res-form #age-dropdown,.res-inr-wrp #res-form #dropoff-container,.res-inr-wrp #res-form #pickup-container{margin:0!important}.discount-code-label,.homepage-form-group label,.pseudo-label{display:block;margin:0;box-sizing:border-box;padding:4px 10px;font-size:14px;color:#5c5f66;font-weight:400!important;cursor:pointer}.discount-code-label strong,.homepage-form-group label strong,.pseudo-label strong{font-weight:400}#res-home-page .res-form nav table td{background:0 0!important;color:#000!important;text-align:left!important;width:auto!important;float:left!important}#res-home-page .res-form nav table td h2{font:1em Ride,Muli,Helvetica,Arial,sans-serif;cursor:pointer;margin:0;padding:8px;font-weight:700!important}#container #res-home-page #res-form button.primary{font-size:18px;font-weight:600!important;width:220px!important;background:#fff!important;color:#000!important;border:2px solid #000!important;border-radius:2px!important}#container #res-home-page #res-form button.primary:hover{background:#000!important;color:#fff!important}#container #nonmember-res-search button.primary,#container #nonmember-res-search button.primary:hover,#container #other-res-search button.primary,#container #other-res-search button.primary:hover,#container #res-home-page #res-form button.secondary,#container #res-home-page #res-form button.secondary:hover{font-size:18px;font-weight:600!important;width:220px!important;border-radius:2px!important;color:#000!important;background-color:#fc0!important;border:2px solid #fc0!important;cursor:pointer;opacity:1;transition:opacity .2s;padding-top:10px!important;padding-bottom:10px!important}#container #nonmember-res-search button.primary:hover,#container #other-res-search button.primary:hover,#container #res-home-page #res-form button.secondary:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.5)!important}#container #nonmember-res-search button.primary:disabled,#container #other-res-search button.primary:disabled,#container #res-home-page #res-form button.secondary:disabled{background-color:#eee!important;border:2px solid #eee!important;opacity:.5}.pseudo-label-help-icon{display:inline-block;background-size:20px auto;width:20px;height:20px;margin-left:5px;position:relative;top:5px}#discountCodeOverlay .pseudo-label-help-icon{width:14px;height:14px;background-size:14px auto;margin-left:-4px;top:7px}.res-inr-wrp #discounts-section .discount-row label{display:block;border:1px solid #e6e7eb;padding:0}.res-inr-wrp #discounts-section .discount-row label[for=affiliate-member-join]{border:none;margin-top:10px}.res-inr-wrp #discounts-section .discount-row label[for=affiliate-member-join] input{margin-right:5px!important;margin-top:6px!important}.res-inr-wrp #discounts-section .discount-row input[type=text]{width:100%!important;clear:both!important;float:none!important;border:none;box-shadow:none!important;padding:5px 10px;box-sizing:border-box}.res-inr-wrp #discounts-section .discount-row{padding:10px 10px 0!important;background:0 0}.res-inr-wrp #discounts-section #cdp select#member-selected-cdp{margin-left:10px!important}.res-inr-wrp #cdp-options-business p{margin-bottom:8px!important}.res-inr-wrp #discounts-section .discount-row #member-other-cdp{border:1px solid #e6e7eb!important}.res-inr-wrp #cdp .clearfix{padding-bottom:10px;padding-top:10px}.res-inr-wrp #discounts-section .discount-row span{width:100%!important;float:none!important;display:block;clear:both;margin-bottom:4px;font-size:12px;color:#5c5f66;padding:3px 10px;box-sizing:border-box}.res-inr-wrp #discounts-section #affiliate-member-verification label span{display:inline-block;width:auto!important}.modal-footer-button-row{padding:20px;text-align:right}.modal-button-apply,.modal-button-apply:hover{width:175px;background-color:#fc0;border-radius:2px;color:#000;text-align:center;display:inline-block;margin-left:10px;font-size:20px;padding:10px;text-decoration:none!important}.modal-button-cancel{display:inline-block;font-size:20px;padding:10px;text-decoration:none!important}.res-inr-wrp #res-form .discount-code-overlay input[type=checkbox]{margin-top:5px!important}.mobile-hero-img{display:none!important}.res-inr-wrp #res-home-page #rmc-section .rental-date{width:100%!important;background-color:transparent!important}.rental-info .veh-desc{display:none}.rental-info .header-details-combined{display:none}.rental-date strong,.rental-desc strong{display:none!important}.rental-info .rental-desc{border-top:1px solid #9d9ea3}#res-home-page #rmc-section .rental-info{background-color:rgba(255,255,255,.9)!important;padding:20px 20px 10px;max-width:278px;margin-bottom:10px}.rental-title{text-transform:uppercase;font-size:14px}#rmc-section br{display:none}.member-res-search,.member-res-search:hover{text-transform:uppercase;color:#000;font-weight:700;display:inline-block;position:relative;padding-right:20px}.member-res-search::after{content:"";position:absolute;top:4px;right:0;width:12px;height:8px;background-size:12px auto}#nav-container .nav-menu table{z-index:1}.res-inr-wrp #dropoff-geo-loc,.res-inr-wrp #pickup-geo-loc{display:none!important}#container #res-home-page #res-form button.primary,#container #res-home-page #res-form button.secondary{padding-top:10px!important;padding-bottom:10px!important}#itn-modify-keep-rate .row{padding:0!important}#itn-modify-keep-rate .row label{width:auto!important}#itn-modify-keep-rate .row input[type=checkbox]{position:relative;top:6px}#itn-modify-keep-rate{margin-top:4px!important;margin-left:10px!important}.fade-field label{background:#eee!important}#resformReflow.inactive{display:none;opacity:0}.res-inr-wrp #res-form .redeem-cont label.checkbox a,.res-inr-wrp #res-form .redeem-cont label.checkbox br{display:none}.aaa-proxy-field{border:1px solid #c4c6cc;display:none}.aaa-added .aaa-proxy-field{display:block}#affiliate-member-verification .pseudo-label-usaa-icon{margin-left:2px}#usaaLabel{padding:0 10px 4px}.aaa-added .proxy-label-usaa,.aaa-added .pseudo-label-usaa-icon{display:none!important}.usaa-added #member-ID-span,.usaa-added .proxy-label-aaa,.usaa-added .pseudo-label-aaa-icon{display:none!important}.aaa-added .pseudo-label-usaa-icon,.usaa-added .proxy-label-usaa{display:inline-block!important}.aaa-proxy-field label{padding-top:0}.join-aaa-p{margin:-4px 0 0 20px}.res-inr-wrp label[for=affiliate-member-join]{float:left;margin-top:0!important}.res-inr-wrp label[for=affiliate-member-join] strong{line-height:17px;display:block;margin-top:10px}.res-inr-wrp label[for=affiliate-member-join] br{display:none}@media only screen and (min-width:1201px){.res-inr-wrp #nonmember-res-search,.res-inr-wrp #res-submit-btns{position:absolute;bottom:5px;right:0}.r-toggle-added .res-inr-wrp #other-res-search,.r-toggle-added .res-inr-wrp #res-submit-btns{bottom:31px}.r-toggle-open .res-inr-wrp #other-res-search,.r-toggle-open .res-inr-wrp #res-submit-btns{bottom:89px}.r-toggle-added.modify-added .res-inr-wrp #res-submit-btns{bottom:60px}.r-toggle-open.modify-added .res-inr-wrp #res-submit-btns{bottom:118px}#rToggleM{float:left}.resform-end{width:100%;clear:both}.aaa-added .res-inr-wrp #other-res-search,.aaa-added .res-inr-wrp #res-submit-btns{position:initial}.res-inr-wrp #other-res-search,.res-inr-wrp.single-button-lookup #nonmember-res-search,.travel-agent-form .res-inr-wrp #res-submit-btns{text-align:right;position:inherit}.res-inr-wrp #other-res-search nav,.res-inr-wrp.single-button-lookup nav{position:absolute;bottom:48px;left:33px;top:auto;width:200px}}@media only screen and (max-width:1200px){.reservation-start{font-size:28px}.res-inr-wrp{padding-left:20px;padding-right:20px}#return-loc{display:block!important}#container #res-home-page #res-form button.primary,#container #res-home-page #res-form button.secondary{width:100%!important}.homepage-form-col{display:block;width:100%;background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0 0 10px}#resRow3ColLeft{border:none;margin-bottom:0}#resAgeCol{border:none}#resAgeCol #itn-age{border:1px solid #c4c6cc}#resFormCodeAge .homepage-form-col{display:table-cell;width:50%;background:0 0;border:none;border-radius:0;margin:0}#resFormCodeAge .homepage-form-col-left{border-right:1px solid #c4c6cc}.homepage-form-row-discount-only,.resform-row-code-age{width:100%}.resform-row-code-age.homepage-form-group{background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0;box-sizing:border-box}.aaa-proxy-field{border:none}.hp-form-col-inr-left{border-right:1px solid #c4c6cc}.res-inr-wrp.single-button,.single-button-lookup{padding-bottom:75px}.res-inr-wrp nav{bottom:-44px;top:auto;left:0;right:auto}#container #other-res-search button.primary,#container #other-res-search button.primary:hover,#container #res-home-page #res-form button.secondary,#container #res-home-page #res-form button.secondary:hover{width:100%!important}#res-form .home-btn-group .button{display:block!important;margin-bottom:10px!important}#nonmember-res-search,#other-res-search,#res-submit-btns{width:100%;box-sizing:border-box}.res-otr-wrp{padding-top:12px!important;position:relative}.res-inr-wrp{padding-bottom:65px}.res-otr-wrp.reduced .res-inr-wrp{padding-bottom:20px}#res-home-page .res-form nav table td h2{text-decoration:underline!important}.res-inr-wrp{position:inherit}.mobile-hero-img{display:block!important;width:100%}.res-inr-wrp h1.hero-h1{font-size:33px;position:absolute;top:0;left:0;line-height:40px}#redeem-section .row{padding:0!important}#redeem-section{background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0 0 10px}.res-inr-wrp #res-form #redeem-section .redeem{padding:0;position:relative}.res-inr-wrp #res-form #redeem-section label.checkbox{width:100%!important;padding:22px 42px 22px 30px!important;position:relative;box-sizing:border-box;line-height:18px!important;font-size:14px!important}.res-inr-wrp #res-form #redeem{position:absolute;top:26px;left:10px}#res-form #redeem-section .redeem #redeem-info{position:absolute;top:14px;right:2px;width:40px;height:40px;background-position:10px 10px;margin:0!important}}@media only screen and (max-width:520px){.mobile-hero-img{min-height:225px}#res-home-page .res-form{background-size:200% auto!important}}@media only screen and (max-width:410px){.mobile-hero-img{min-height:205px}#res-home-page .res-form{background-size:230% auto!important}.res-inr-wrp h1.hero-h1{font-size:28px;line-height:30px}.res-inr-wrp #res-form #redeem-section label.checkbox{font-size:12px!important}}@media only screen and (max-width:320px){.mobile-hero-img{min-height:205px}#res-home-page .res-form{background-size:280% auto!important}}@media only screen and (min-width:1201px){.res-inr-wrp #return-loc{display:table-cell!important}.homepage-form-col-age-only{max-width:200px}.homepage-form-col-left,.hp-form-col-inr-left{border-right:1px solid #c4c6cc}.resform-row-code-age .homepage-form-col-left{width:65.5%}.resform-row-code-age .homepage-form-col-right{width:24.5%}.homepage-form-group{background:#fff;border:1px solid #c4c6cc;border-radius:2px;margin:0 0 10px}.homepage-form-group.resform-row-3{border:none;width:calc(100% + 2px)}#resformReflow{opacity:1;transition:opacity .2s ease-out}.homepage-form-group.resform-row-code-age{margin-bottom:0}#resRow3ColLeft{border-right:none}.res-otr-wrp.reduced{padding-bottom:45px}.res-otr-wrp.reduced-no-transition{padding-bottom:45px;transition:none}#discountRowWrap{position:relative}.res-inr-wrp #redeem-section{position:absolute;top:9px;left:121px;width:280px}.res-inr-wrp #res-form #redeem-section .row{padding:0}.res-inr-wrp #res-form .redeem-cont label.checkbox{margin:0;position:relative;line-height:10px!important;padding-left:5px!important;width:100%;box-sizing:border-box;padding:0 25px 0 20px!important}.res-inr-wrp #redeem{position:absolute;top:1px;left:0;z-index:0}.res-inr-wrp #redeem-info{position:absolute;top:-5px;right:0;margin:0!important}.res-inr-wrp #res-form #redeem-section .redeem{position:relative;padding:0}.homepage-form-group label#ageSelectorLabel{padding-top:0}}@media only screen and (min-width:1201px){#cookieLink{padding:3px 0!important}.header-email-form-wrap{padding-right:10px}.mm-hdr-mob-sctn{display:none!important}#header-container .emember-container #loggedInTravelAgent,#header-container .emember-container li#loggedInMember{padding:4px 0 0}#header-container .utility-bar .emember-container #topNavDesktopShow{padding-top:3px!important}.header-col-icons{position:absolute;bottom:-24px;right:10px;z-index:-1}#header-container .pos-container ul{height:22px}#container .header-collapsed #header-container .utility-bar .pos-container{display:table!important;height:60px!important}#container .header-collapsed #header-container .utility-bar .pos-container.no-dropdown{display:none!important}.header-collapsed .header-col-icons{position:inherit;bottom:auto;right:auto;vertical-align:middle}.header-collapsed #header-container .pos-container ul{height:auto}.top-nav-registered-menu{background-color:#2f2f2f!important;border-top:3px solid #fc0!important;position:absolute;top:30px;right:0;width:200px!important;display:none!important}.top-nav-registered-menu.active{display:block!important}.top-nav-registered-menu li{display:block!important;padding:0!important;width:100%!important;clear:both!important;margin:0!important;border:none!important}#header-container .utility-bar .emember-container .useraccount{height:auto!important}.header-collapsed .top-nav-registered-menu a,.top-nav-registered-menu a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:10px 15px!important;height:auto!important;border:none!important;display:block!important;clear:both!important;float:none!important;margin:0!important;text-decoration:none!important}.header-collapsed .top-nav-registered-menu a:hover,.top-nav-registered-menu a:hover{background-color:#686b72!important;color:#fff!important}#header-container .utility-bar #member-name-points-info.no-dropdown{display:block!important;position:absolute;top:44px;right:10px}.header-collapsed #header-container .utility-bar #member-name-points-info.no-dropdown{top:20px}#header-container .utility-bar #member-name-points-info.no-dropdown .emember-container{width:200px!important}#header-container .emember-container ul.homeloggedUserDetails,#header-container .emember-container ul.topNavtopNavmobileHide{margin-right:0!important}#header-container .pos-container ul{margin:0 10px 0 0!important}#header-container .utility-bar .pos-container .pos-box{position:absolute!important;right:30px!important;top:30px!important;z-index:1000}.header-inner-mobile{display:block!important}#header-container .utility-bar .pos-container{min-width:100px}#nav-container .nav-menu td{display:inline-block!important;margin-right:30px!important}.header-collapsed #nav-container .nav-menu td{margin-right:15px!important}.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu span{height:25px}.nav-primary-link-no-menu a:hover{background:0 0!important;color:#fff!important}.active-menu,.nav-primary-animate-hover{position:relative}.active-menu::after,.nav-primary-animate-hover::after{content:"";width:100%;height:2px;background-color:#fc0;display:block;position:absolute;bottom:10px;left:0;pointer-events:none}.nav-primary-animate-hover::after{width:0;opacity:0;transition:width .2s}.nav-primary-animate-hover:hover::after{width:100%;opacity:1}.nav-primary-anchor-right::after{left:auto;right:0;opacity:1}.header-collapsed .active-menu::after,.header-collapsed .nav-primary-animate-hover::after{bottom:0}.header-primary{height:135px}.header-primary.header-collapsed{height:60px}.header-collapsed .header-inner-mobile{height:60px}#nav-container .nav-menu dl.menu-show{width:280px!important}#nav-container .menu-show a,.header-collapsed #nav-container .menu-show a{background-color:#2f2f2f!important;color:#fff!important;box-sizing:border-box;padding:1px 15px!important;height:auto!important;border:none!important}#nav-container .menu-show a:hover,.header-collapsed #nav-container .menu-show a:hover{background-color:#686b72!important;color:#fff!important}#nav-container .logo-box img{cursor:pointer}#nav-container .nav-menu .nav-mobile-expandable-section a,#nav-container .nav-menu .nav-mobile-expandable-section span{font-size:12px!important}}';
    window.h0020CSS['homepagehero'] = '.header-brg::after{content:"";width:25px;height:54px;position:absolute;top:0;left:0}#transPromoTitle{margin-bottom:15px!important}#transPromoMobilePhoneDiv{padding-bottom:20px;padding-top:10px}label[for=transPromoCheckbox]{margin-bottom:10px}.hero-row{background-color:#fc0}#res-home-page .res-form{background:0 0!important}@media only screen and (max-width:767px){.hero-col-right{display:none}.hero-row{width:100%;max-width:1600px;margin:0 auto}.hero-col-left-inner{padding:1px 20px 25px}.hero-h1{font-size:28px;font-weight:400;margin-top:15px;margin-bottom:0}.res-otr-wrp{margin-top:-20px}}@media only screen and (max-width:599px){.hero-col-right{margin-top:-60px}}@media only screen and (max-width:499px){.hero-col-right{margin-top:-40px}}@media only screen and (min-width:768px){.hero-col-right img{display:none}.hero-col-right{position:relative}.hero-row{display:table;width:100%;max-width:1600px;margin:0 auto;height:300px;position:relative}.hero-col{display:table-cell;vertical-align:top}.hero-col-left{width:50%}.hero-col-right::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.hero-col-left-inner{position:absolute;top:0;left:0;width:100%}.hero-col-left-max-width{width:100%;max-width:1230px;margin:0 auto;padding:0 15px 0;box-sizing:border-box}.hero-h1{font-size:40px;line-height:45px;max-width:500px;font-weight:400;margin-top:45px}#resFormHero.reduced h1{font-size:24px;line-height:30px;max-width:none}#resFormHero.reduced h1 br{display:none}.res-otr-wrp.reduced{margin-top:-190px}.hero-row{background-color:#fc0;background-image:radial-gradient(closest-corner at 20% 60%,#ffe990,#fc0)}}@media only screen and (min-width:999px){.hero-col-left-max-width{padding-top:10px}.hero-col-left{width:60%}#resFormHero.reduced h1{font-size:36px;line-height:40px}.res-otr-wrp.reduced{margin-top:-210px}}@media only screen and (min-width:1199px){.hero-h1{font-size:55px;line-height:65px;max-width:500px;margin-top:25px}.res-otr-wrp.reduced{margin-top:-195px}}';
    window.h0020CSS['footer'] = '#copyright-content,#copyright-content a,#seo-content .seo-header,#seo-content .seo-header h1,#seo-content h2,#social-bar button,#social-bar input,.copyright-content-inner .address a,.copyright-content-inner .title a,.seo-info,.title-table .title{color:#000!important}#footer-container{max-width:1300px;margin:0 auto}#footer-container,#social-bar,footer{background-color:#F3F4F8!important;box-sizing:border-box}footer{margin-top:10px!important;clear:both}#footer-container .mob-links{display:none!important}#social-bar,#title-links{display:block!important}#title-links{padding-left:20px!important;padding-right:20px!important;box-sizing:border-box}#title-links a,.title-table .title a{color:#000!important;background:0 0!important}#copyright-content{padding-top:25px!important;float:right;clear:right!important;width:100%!important;text-align:right;border-top:1px solid #000}#copyright-content .address,#copyright-content .title{display:inline-block!important;float:none!important;width:auto!important}.social-email-label-wrap{display:block}.social-email-label{font-size:20px;float:none!important;clear:both;margin:0 0 5px!important;display:inline-block}#social-bar fieldset{display:block;width:100%;clear:both}#social-bar input{background-color:#FFF!important;border-radius:2px;box-sizing:border-box;padding:5px 10px!important;font-size:16px!important;height:45px!important}.social-icon-ul img{width:40px;height:40px}.social-icon-ul li{padding:0 0 0 10px!important;list-style-type:none;display:inline-block}#social-bar{border:none!important;margin-bottom:50px!important;padding:0 20px!important}#seo-content{border-top:1px solid #000!important;border-bottom:1px solid #000!important;padding:20px 25px!important;margin-bottom:30px;box-sizing:border-box}#copyright-content br{display:none}#social-bar button{background-color:#FC0!important;font-size:18px!important;height:45px!important;font-weight:600;box-sizing:border-box;border-radius:2px;padding:10px 50px}#social-bar button:hover{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)!important}#title-links li{padding-left:0!important}#feedback-footer-container{border-top:none!important;margin:0!important;padding:10px 0 0!important}#feedback-footer-container a{text-decoration:underline!important;font-weight:700!important}#feedback-footer-container #opinionLab span{display:none!important}.social-footer-label{text-align:right;font-size:16px;margin:0 0 10px;float:right}#title-links li .title{font-size:14px!important;font-weight:600!important;margin-bottom:5px;text-transform:uppercase!important}#title-links ul{margin-bottom:10px!important}#footer-parsys{float:left;width:100px;box-sizing:border-box}.copyright-content-inner{text-align:right;padding-top:10px}.copyright-content-inner .address,.copyright-content-inner .title{display:inline-block!important;width:auto!important;float:none!important;text-transform:uppercase;font-size:11px}#social-bar form{width:70%!important}#social-bar ul{width:30%!important}#social-bar input{width:350px!important}#res-home-page #hp-banner-container{margin-top:0!important}.social-footer-label-mobile,.social-icon-container-mobile{display:none}.social-footer-label-mobile{text-align:left}.social-footer-label.social-footer-label-mobile{float:none!important;text-align:left;box-sizing:border-box;padding-left:20px;padding-right:20px;font-size:12px;box-shadow:0 0 #000;margin-bottom:20px!important;direction:ltr}#title-links dd{margin:0!important;padding:0!important}.view-on-desktop-link{display:none;padding:0!important}#mob-links{display:none!important}#title-links a{display:inline-block!important;margin:4px 0;padding:2px 0!important}#title-links a:hover{text-decoration:underline}@media only screen and (max-width:991px){#copyright-content .address,#copyright-content .title{display:block!important}#title-links a{margin:0;padding:0!important}#title-links li{padding:4px 0!important}#footer-container .title-table ul dl{padding-top:10px}#feedback-footer-container .view-on-desktop-link a,li#opinionLab a{text-decoration:none!important;padding:0!important;font-size:14px!important;font-weight:500!important}#container .view-on-desktop-link,li#opinionLab{padding-top:10px!important;padding-bottom:10px!important}#container .view-on-desktop-link{display:block}.social-footer-label,.social-icon-container{display:none}li#opinionLab{padding-top:17px!important}#title-links li .title{font-weight:500!important;text-transform:none!important;padding-top:6px;padding-bottom:6px}#social-bar{margin-bottom:25px!important}.social-footer-label-mobile,.social-icon-container-mobile{display:block!important}.social-icon-container-mobile{direction:rtl;text-align:left;margin-top:15px}.social-email-label-wrap{margin-bottom:15px}#social-bar form,#social-bar ul{width:100%!important;box-sizing:border-box;float:none!important;clear:both!important}.social-icon-container-mobile ul{padding:0 0 0 10px!important;margin-bottom:7px!important;margin-top:0!important;box-sizing:border-box}#social-bar input{width:200px!important}#social-bar fieldset{display:table!important}#footer-container .title-table ul dl{display:none}.title-table .title{position:relative;display:block!important;cursor:pointer}.title-table .title::after,.title-table .title::before{content:"";position:absolute;background-color:#000}.title-table .tab{display:none!important}.title-table .title::after{top:6px;right:14px;width:2px;height:10px}.title-table ul.active .title::after{display:none}.title-table .title::before{top:10px;right:10px;width:10px;height:2px}#title-links ul{width:100%!important;background:0 0!important;margin:0!important;padding:0!important}#copyright-content{width:100%!important;text-align:center!important;clear:both!important;padding-top:10px!important}#copyright-content br{display:block}#footer-parsys{float:none!important;width:100%!important;text-align:center}.copyright-content-inner .address,.copyright-content-inner .title{text-align:center!important;width:100%!important;line-height:18px}.copyright-content-inner{padding-top:0}#footer-parsys div a{display:inline-block}#footer-parsys div{width:100%!important;text-align:center;display:block}#seo-content .seo-header{margin-bottom:10px}#seo-content .seo-header,#seo-content .seo-info{width:100%!important;text-align:left;float:none!important}#title-links dd{padding-left:20px!important;padding-top:10px!important;padding-bottom:10px!important}}@media only screen and (min-width:992px){#footer-container .title-table dl{display:block!important;height:auto!important}}@media only screen and (max-width:620px){#social-bar label{display:block;width:100%;float:none}#social-bar input{width:100%!important}#social-bar button{margin:10px 0 0!important;width:100%;box-sizing:border-box}}.rd-veh-image.mm-active{padding:5px}.lb-content-box .vehicle-img-lrg{width:100%}.footer-app-link img{width:40px;height:40px}.footer-app-link{clear:both;text-align:left;padding-left:20px;padding-right:20px}.footer-app-label{padding:5px 20px 20px}.footer-social-col-middle{display:none}#social-bar ul{clear:both}.social-email-label{font-size:20px!important}@media only screen and (max-width:991px){#footer-container #title-links .row{display:block}#social-bar.no-seo-section{border-top:1px solid #000!important;padding-top:25px!important;margin-top:15px}}@media only screen and (min-width:992px){.footer-social-row{display:table;width:100%}.footer-social-col{display:table-cell;vertical-align:top}#social-bar ul{float:none;display:block;width:100%!important}.footer-app-label.social-footer-label{text-align:center;float:none;padding:0}.footer-app-link{text-align:center}.social-footer-app-mobile{display:none}#social-bar .footer-app-link a{display:inline-block}.footer-social-col-middle{width:200px}.footer-social-col-right{width:260px}#social-bar form{width:100%!important}#social-bar input{width:100%!important}#social-bar fieldset label{width:350px;max-width:50%}}#social-bar .footer-email-disclaimer a {display:inline-block}.footer-email-disclaimer{color:#636466;padding-top:15px;clear:both;max-width:558px}';
    window.h0020CSS['carousel'] = '.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;touch-action:manipulation;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot{background:0 0;color:inherit;border:none;padding:0!important;font:inherit}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item .owl-lazy:not([src]),.owl-carousel .owl-item .owl-lazy[src^=""]{max-height:0}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url(owl.video.play.png) no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}';
    window.h0020CSS['gprnavigation'] = '#mobile-nav-member-menu [hidden]{display:block}#header-container .emember-container .arrowClose,#header-container .emember-container .arrowOpen,#mobileWebArrowDropdown.mobileWebArrowClose,#mobileWebArrowDropdown.mobileWebArrowOpen{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTggOSI+PHBhdGggZD0iTTE0NzguNSw2MzAuNzYzbDguNTUyLTgsOC41NTIsOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NzguMTU4IC02MjIuMDc5KSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDsiIC8+PC9zdmc+) no-repeat center center!important;margin:10px 15px 15px 15px!important;cursor:pointer;-ms-transform:rotate(180deg)!important;-webkit-transform:rotate(0)!important;transform:rotate(0)!important}#header-container .emember-container .arrowOpen{-ms-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important}#mobileWebArrowDropdown.mobileWebArrowOpen{-ms-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important}.mobile-nav-member-info-div{display:table}.mm-gpr-navigation #homePageLoginOverlay #loginFormContainer #loginFormInner #loginFormInnerHeader{background-color:#f3f4f8}#homePageLoginOverlay #loginFormContainer #loginFormInner{border-top:5px solid #fc0!important}.pos-container .mobile-nav-member-info-div{display:none!important}.mm-gpr-navigation #loggedUserDetails a{color:#000}.mm-gpr-navigation #loggedUserDetails a:hover{text-decoration:underline!important}.mm-gpr-navigation #header-container .emember-container .memberNumber{color:#000!important}.mm-gpr-navigation #header-container .emember-container #loggedInTravelAgent{color:#000;padding:6px 0 13px 20px}.mm-gpr-navigation.mm-content-page #header-container .pos-container li li{float:left}.mm-gpr-navigation .header-collapsed #homePageLoginOverlay #loginFormContainer{position:fixed!important;top:60px!important}#mobileWebArrowDropdown.ta-hide{display:none!important}#header-container .cookiedLinks .fullswitchprofilelinktext.no-cursor,.homeloggedUserDetails.no-cursor{cursor:default}.ta-logout a,.ta-logout a:visited{color:#ffd100}@media only screen and (max-width:1200px){#loginFormContainer{display:none!important}.header-col .header-col-ul{position:relative;box-sizing:border-box;padding-right:30px}#mobileWebArrowDropdown{width:20px;height:20px;background-color:orange!important;position:absolute;top:0;right:0;z-index:1}#mobile-nav-member-menu{padding:1px 0 20px;border-bottom:1px solid #d4d4d7;margin-bottom:20px}.mob-pos-selector .mobile-nav-member-info-div{background-color:#f3f4f8;padding:20px}.mm-gpr-navigation #container #header-container .emember-container .welcometext{display:block!important;margin-top:0!important;text-align:left}#mobileWebMemberInfo-memberNumber a{float:right;text-decoration:none;font-size:14px;font-weight:400}#mobileWebMemberInfo-memberNumber p{display:inline;width:60%}#mobileWebMemberInfo-memberNumber #memberNumber{display:inline-block!important;vertical-align:top}#nav-container .nav-menu .nav-mobile-expandable-link span,#nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu .nav-mobile-expandable-link span,.header-collapsed #nav-container .nav-menu a{text-transform:none!important}#container #header-container .utility-bar .emember-container{max-width:60%}#nav-container .nav-menu #mobileWebMemberInfo-memberNumber a{padding:0!important;color:#365ad8!important}#header-container .emember-container #topNavDesktopShow span.memberNumber{font-size:12px!important;text-align:left!important}#nav-container .nav-menu span#mobileWebMemberInfo-clubtier{font-size:18px!important;font-weight:700;margin-bottom:15px!important}#nav-container .nav-menu span#mobileWebMemberInfo-points{margin-bottom:10px!important}#mobileWebMemberInfoUL{padding-top:15px}#mobileWebArrowDropdown.mobileWebArrowClose,#mobileWebArrowDropdown.mobileWebArrowOpen{margin-top:0!important}#header-container .emember-container .homeloggedUserDetails li#topNavDesktopShow{width:100%;box-sizing:border-box;padding-right:15px}.mm-gpr-navigation #header-container .emember-container #loggedInTravelAgent{padding-left:0;padding-top:0}.ta-logout{display:inline-block;margin-left:5px}#logOut.applicant{display:block!important}}@media only screen and (min-width:1201px){#mobile-nav-member-menu{display:none!important}.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link{border-right:1px solid #a6a6ab;padding:10px 10px!important}.mm-content-page.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link,.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link.no-border{border-right:none;padding:0!important}#header-container .emember-container .arrowClose,#header-container .emember-container .arrowOpen{margin-right:0!important}#mobileWebArrowDropdown{display:none!important}.mm-gpr-navigation #header-container .pos-container button#loginLink{margin:10px 0 10px 20px!important}.mm-gpr-navigation .header-collapsed #header-container .pos-container button#loginLink{margin-top:9px!important}.mm-gpr-navigation .header-collapsed .header-col-ul{padding-top:7px}.mm-gpr-navigation .header-collapsed .header-col-ul .header-col-ul{padding-top:3px}.mm-gpr-navigation #header-container .emember-container #topNavDesktopShow span{margin:4px 0 0 0}.mm-gpr-navigation .header-collapsed #header-container .emember-container .arrowClose,.mm-gpr-navigation .header-collapsed #header-container .emember-container .arrowOpen{margin-right:0!important;margin-left:10px!important}.mm-gpr-navigation .header-collapsed #loginFormContainer{margin-top:-6px}.mm-gpr-navigation #header-container .emember-container #topNavDesktopShow span{margin-top:0;margin-bottom:4px}.mm-gpr-navigation #header-container .utility-bar .emember-container #topNavDesktopShow{padding-left:20px}.mm-gpr-navigation #header-container .utility-bar .emember-container #topNavDesktopShow{padding-top:0!important}.mm-gpr-navigation #header-container .emember-container .arrowClose,.mm-gpr-navigation #header-container .emember-container .arrowOpen{margin-top:5px}.ta-logout{text-align:right;margin-top:3px}.desktop-float-right{float:right!important}}';
    window.h0020CSS['altbranding'] = '.header-primary{background-color:#fff;border-bottom:6px solid #fc0}#nav-container .nav-menu{background:0 0!important}#header-container .top-bar,#header-container .utility-bar,#header-container .utility-bar .emember-container,#header-container .utility-bar .pos-container{background-color:transparent!important}#container #header-container .emember-container .firstnametext,#container #header-container .emember-container .lastnametext,#container #header-container .emember-container .welcometext,#header-container .change-link .languageselector,#header-container .change-link .languageselector span,#header-container .cookiedLinks .fullswitchprofilelinktext,#header-container .pos-container button,#nav-container .nav-menu a,#nav-container .nav-menu span,#nav-container .nav-menu td,#nav-container .nav-menu td a,#nav-container .nav-menu td span,.nav-primary-link-no-menu a:hover{color:#000!important}.logo-box.mm-branding-update img{width:135px}#itinerarySummary{background:#5c5f66!important}.header-mobile-menu a{display:block;width:50px;height:50px;background-size:20px 20px}@media only screen and (min-width:1201px){#nav-container .menu-show a:hover,.header-collapsed #nav-container .menu-show a:hover{background-color:#f3f4f8!important;color:#000!important}#nav-container .menu-show a,.header-collapsed #nav-container .menu-show a{background-color:#fff!important}.nav-primary-animate-hover::after{display:none!important}.active-menu::after{width:100%;height:9px;background-size:auto 100%;bottom:5px}.header-primary{height:140px}#nav-container .nav-menu dl.menu-show,.top-nav-registered-menu.active{box-shadow:0 1px 6px #4c4c4c}.header-collapsed .active-menu::after,.header-collapsed .nav-primary-animate-hover::after{bottom:-11px}.header-collapsed .top-nav-registered-menu a,.top-nav-registered-menu a{background-color:#fff!important;color:#000!important}.header-collapsed .top-nav-registered-menu a:hover,.top-nav-registered-menu a:hover{background-color:#f3f4f8!important;color:#000!important}.itn-sum-col-inner-desktop-only-left,.itn-sum-col-inner-left,.itn-sum-col-inner-right{border-right:1px solid #fff;height:90px}#header-container .pos-container ul{height:34px}.header-collapsed #nav-container .menu-show a,body #nav-container .menu-show a{color:#000!important}}@media only screen and (max-width:1200px){.logo-box.mm-branding-update img{width:65px}#nav-container .nav-menu a,#nav-container .nav-menu dd,#nav-container .nav-menu dd a,#nav-container .nav-menu dl,#nav-container .nav-menu span,#nav-container .top-nav-registered-menu a,.header-collapsed #nav-container .nav-menu a,.header-collapsed #nav-container .nav-menu dd,.header-collapsed #nav-container .nav-menu dd a,.header-collapsed #nav-container .nav-menu dl,.header-collapsed #nav-container .nav-menu span{color:#000!important}#header-container .fullSwitchProfileLink a,#nav-container .nav-menu .menu-hover{color:#000!important}#nav-container .nav-menu .menu-hover{background:0 0!important}.nav-mobile-expandable-link-style::after,.nav-mobile-expandable-link-style::before,.nav-mobile-expandable-link::after,.nav-mobile-expandable-link::before{background-color:#000}.header-primary{display:block;height:56px}.header-wrap-mobile{display:table;width:100%;height:100%;position:relative}}';
    window.h0020CSS['brgnavigation'] = '.header-brg{display:inline-block;font-size:20px;font-weight:700;font-style:italic;text-transform:none;vertical-align:top;width:310px;height:54px;box-sizing:border-box;position:relative;overflow:hidden}.header-brg-text{position:absolute;top:20px;left:-310px;transition:left .6s;font-size:20px}.header-brg.no-animation .header-brg-text{transition:none}.header-brg.active .header-brg-text{left:20px}#headerEmailM,.header-brg-mobile,.header-collapsed #headerEmailD,.header-collapsed .header-brg{display:none}#headerEmailD .header-email-row{display:table;width:350px}#headerEmailD .header-email-col{display:table-cell;vertical-align:top;position:relative}#headerEmailD .header-email-col-right{width:90px;padding-left:10px}.header-email-submit{display:block;text-align:center;font-size:14px;color:#000;margin:0;width:100%!important;background:0 0;padding:9px 10px;box-sizing:border-box;border:1px solid #000;border-radius:2px;font-weight:700}.header-email-submit:hover{background-color:#000;color:#fff}.header-email-input{font-size:14px;box-sizing:border-box;padding:9px 10px;margin:0;width:100%}#headerEmailD{padding-top:10px;clear:both}.header-email-form .header-email-error{display:none}.header-email-form.error .header-email-error{display:block;position:absolute;top:-22px;color:red}.header-email-form.error .header-email-input{border:1px solid red}@media only screen and (max-width:1200px){#title-links .coln{display:block}.header-email-form.error .header-email-error{top:-8px}#nav-container .nav-menu td#headerSearchNav,.header-brg{display:none!important}#headerEmailD{display:none}#headerEmailM{opacity:0;transition:opacity .2s}#headerEmailM,.header-brg-mobile{display:block}#headerEmailM{position:absolute;bottom:0;width:100%;box-sizing:border-box;padding:10px;background:#fff}#headerEmailM .header-email-col.header-email-col-left{padding-bottom:10px}.header-brg-mobile{margin:30px 20px;border-top:1px solid #d7d8db;border-bottom:1px solid #d7d8db;text-align:center;color:#000;font-size:20px;font-style:italic;font-weight:700;padding:20px}.header-email-input{padding:14px 10px;font-size:16px}.header-email-submit{font-size:16px;padding:16px}.header-mobile{display:table;position:absolute;z-index:1;background:#fff}.header-mobile-wrap,.header-outer-mobile{display:table-row;width:100%}.header-mobile-wrap{height:51px}.header-primary.expanded #headerEmailM{opacity:1}.header-inner-mobile{width:100%;height:calc(100% - 143px);overflow:auto;-webkit-overflow-scrolling:touch}}';
    window.h0020CSS['h0044BookableUpgrades'] = '.upsell-proxy div.vehContent,.upsell-proxy div.vehContent-half{width:100%;box-sizing:border-box;margin:0;border:0;padding:0;box-shadow:none}.upsell-inner-row{display:table;width:100%}.upsell-inner-col{display:table-cell;vertical-align:top;width:50%;box-sizing:border-box}.upsell-inner-col-left{padding-right:10px}.upsell-slide{display:none}.upsell-single-slide{min-height:initial}.upsell-slide.active,.upsell-slide.get-height{display:block}.upsell-slide.get-height{opacity:0}.upsell-indicator{display:inline-block;width:16px;height:16px;border-radius:8px;border:1px solid #9d9ea3;position:relative;box-sizing:border-box;margin:0 3px!important}.upsell-indicator.active::after{content:"";display:block;width:10px;height:10px;background-color:#9d9ea3;border-radius:5px;position:absolute;top:2px;left:2px}.upgrade-options .upsell-slide .veh-container h3{min-height:auto!important;font-size:14px;padding:6px 10px!important;box-sizing:border-box;background:#fc0;margin-bottom:15px}.upsell-proxy{margin-top:25px!important}.upgrade-options .upsell-slide .veh-container .button-container button{display:block!important;color:#000!important;border:2px solid #000!important;width:100%!important}.upgrade-options .upsell-slide .veh-container .button-container button:hover{background-color:#000!important;color:#fff!important}.upsell-indicators{text-align:center}.upsell-name{color:#000;font-weight:700;font-size:14px;margin:0}.upsell-class{margin:2px 0 10px;color:#000;font-size:12px}.upsell-proxy .vech-upsell-price{font-size:12px;color:#000}.upsell-slide figure img{opacity:0;transition:opacity .4s}.upsell-slide figure img.active{opacity:1}.upsell-slide .vehicleUpsellsCollectionContainer{display:none}#vehicleUpsells{display:none!important}.upgrade-options .right-upgrade{display:block!important}@media only screen and (min-width:768px){#vehicleUpsellsProxyM{display:none!important}}';

if(!jQuery().upsizeCarImage){
(function ($){
$.fn.upsizeCarImage=function(options){
var settings=$.extend({
	carName: ""
}, options );
if(options.carName !== ''){
	var carImages= [
		['ZEUSJSAR999','#$(ContentManager:camaro-ss.png)!'], ['ZEUSXSAR999','#$(ContentManager:camaro-ZL1.png)!']
	];
	var carImgLrg="";
	var originalImgSrc=$(this).attr('src');
	var fileNameWithExtension="";
	var fileName="";
	var fileNameSplit="";
	if(originalImgSrc.indexOf('.') > -1){
		fileNameWithExtension=originalImgSrc.match(/\w+\.\w+$/);
		fileNameWithExtension=fileNameWithExtension.toString();
		fileNameSplit=fileNameWithExtension.split('.');
		fileName=fileNameSplit[0];
	}
	for(var i=0; i<carImages.length; i++){
		if(carImages[i][0]==fileName){
			carImgLrg=carImages[i][1];
			break;
		}
	}
	if(carImgLrg !== ""){
		this.attr('src', carImgLrg ).addClass('vehicle-img-lrg');
	}
}
return this;
};
}(jQuery));
}

/*-- Global --*/
/*@CSSINCLUDE:global*/
window.newCSS = {}
window.newCSS['global'] = '#breadCrumns{padding-top:1px}#important .termsAndConditionsContent{height:200px;overflow:auto;padding-left:32px;padding-right:15px;box-sizing:border-box}#important .terms .terms h2{font-size:15px!important;cursor:pointer}#important .terms .terms{margin-bottom:15px}.expandable-section-content{display:none}.expandable-section-btn::after,h4.rental-links-header::after,#important #important-information-toggle::after,#important .terms .terms h2::after{content:\"\";position:absolute;top:8px;left:4px;width:16px;height:8px;background:url(#$(ContentManager:hertz-expand-icon.png)!) no-repeat center top;background-size:16px auto}.expandable-section-btn strong{font-weight:300!important}.rental-policy-groups .expand-collapse-icon{pointer-events:none;position:absolute;top:14px;left:18px;width:16px;height:8px;background:url(#$(ContentManager:hertz-expand-icon.png)!) no-repeat center top;background-size:16px auto}.mm-v-icn-seats{background-image:url(#$(ContentManager:hertz-icon-seats.png)!)}.mm-v-icn-suitcases{background-image:url(#$(ContentManager:hertz-icon-luggage.png)!)}.mm-v-icn-mpg{background-image:url(#$(ContentManager:hertz-icon-mpg.png)!)}.mm-v-icn-awd{background-image:url(#$(ContentManager:hertz-icon-awd.png)!)}.mm-v-icn-doors{background-image:url(#$(ContentManager:hertz-icon-door.png)!)}.mm-v-icn-transmission-automatic{background-image:url(#$(ContentManager:hertz-icon-transmission-automatic.png)!)}.mm-v-icn-transmission-manual{background-image:url(#$(ContentManager:hertz-icon-transmission-manual.png)!)}body.mm-content-page,.mm-content-page div,.mm-content-page dl,.mm-content-page dt,.mm-content-page dd,.mm-content-page ul,.mm-content-page ol,.mm-content-page li,.mm-content-page pre,.mm-content-page form,.mm-content-page p,.mm-content-page blockquote,.mm-content-page th,.mm-content-page td{font-family:\"Ride\",Muli,Helvetica,Arial,sans-serif}@media only screen and (min-width:992px){.mm-content-page #header-container .pos-container li{float:right}}@media only screen and (max-width:767px){#important #rental-links .rental-links-header{margin-left:10px!important;margin-right:10px!important}.mm-desktop-headline{display:none!important}.mm-mobile-headline{display:block!important}#page{background:transparent!important}#res-extras-page{background:transparent!important}#container{background-color:#F3F4F8!important}#steps li .step-content{display:none!important}.step-mobile{display:block}div#rental-links{margin-left:-10px!important;margin-right:-10px!important;width:auto!important;padding:0!important;position:relative!important}.rental-policy-links-wrapper{padding:3px 10px}#steps{background:#FFF!important;margin-left:-10px;margin-right:-10px;padding:15px 20px 20px!important;box-sizing:border-box;margin-top:10px}}\/*-- Itinerary Bar --*\/\/*@CSSINCLUDE:itinerary*\/#itinerarySummary{background:url(#$(ContentManager:hertz-itinerary-background-desktop.jpg)!) no-repeat center top #373945!important;background-size:cover!important;color:#FFF;min-height:90px}#itineraryExpandBtn{height:32px;width:32px;display:inline-block;background:url(#$(ContentManager:hertz-itinerary-arrow.png)!) no-repeat center 13px #FFF;background-size:14px auto;box-shadow:2px 2px 2px rgba(0,0,0,.2);border-radius:16px;transition:transform 200ms}@media only screen and (max-width:767px){.itn-sum-col-inner-desktop-only.itn-sum-col-inner-desktop-only-right{display:block}.itinerary-summary-btn-row,.itinerary-summary-btn-col.itinerary-summary-btn-col-right{display:block;padding:0;width:40px}.itn-sum-row{position:relative}.itinerary-summary-btn-row{position:absolute;bottom:-20px;right:20px;z-index:1}#itineraryNextStep{display:none}.itinerary-summery-cost{display:none}.itinerary-summery-type{text-align:center;display:inline-block;padding-left:34px;padding-right:34px;position:relative}.itinerary-summery-type::before,.itinerary-summery-type::after{content:\"\";display:block;width:25px;border-top:1px solid rgba(255,255,255,.5);position:absolute;top:8px;left:0}.itinerary-summery-type::after{left:auto;right:0}#itineraryCarType{text-align:center;padding-top:0}#itinerarySummary{background-image:url(#$(ContentManager:hertz-itinerary-background-mobile.jpg)!)}.itn-sum-col-inner-left{padding-right:25px;padding-left:25px;position:relative}.itn-sum-col-inner-left::after{position:absolute;content:\"\";top:35px;right:-6px;background:red;display:block;width:25px;height:18px;background:url(#$(ContentManager:hertz-itinerary-arrow-mobile.png)!) no-repeat center center;background-size:25px auto}.itn-sum-col-inner-right{padding-left:25px;padding-right:25px}.itin-sum-col{display:block;width:100%;box-sizing:border-box}div#itineraryCarType{width:100%}}\/*@CSSINCLUDE:itineraryMobile*\/\/*-- Vehicles Page --*\/\/*@CSSINCLUDE:vehicles*\/#mmVehBanner img{width:100%}.hide-modals #light-box-1{display:none}.vehicles-list-cont div.banner{background:transparent!important;padding-top:0!important;padding-bottom:0!important}.approx-total-price.no-link, .approx-total-price.no-link span{color:#000!important}.vehicle-overlay-footer::before{content:\"\";display:block;width:100%;height:16px;background:url(#$(ContentManager:hertz-vehicle-overlay-footer-bg.png)!) repeat-x center bottom;pointer-events:none ;position:absolute;top:-16px;left:0}.vehicle-sort-wrap select{padding:0 10px;height:30px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF;background-size:18px auto}@media only screen and (max-width:1000px){.vech-d-view figure .image .vehicle-img-lrg{max-width:80%;padding-top:30px}.vech-d-view .vehicle-col-info{padding-right:20px}.vehicle-col-pricing{width:35%}}@media only screen and (max-width:850px){.vech-d-view figure .image .vehicle-img-lrg{max-width:80%!important;padding-top:45px}}\/*@CSSINCLUDE:vehiclesMobile*\/\/*-- Ancillaries Page --*\/.check-custom-selector,.qty-plus-proxy-first{display:block!important;width:36px;height:36px;background:url(#$(ContentManager:hertz-icon-plus.png)!) no-repeat center center #FFF;background-size:18px auto;border-radius:24px;border:2px solid #3455DB}.ancillary-select-dropdown select{padding:0 10px;height:30px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF;background-size:18px auto;border:none!important;width:100%!important}\/*@CSSINCLUDE:ancillariesGrid*\/\/*-- Review and Book Page --*\/\/*@CSSINCLUDE:reviewandBook2*\/#res-bookable-page #approx-rate .bookable-terms-and-conditions .terms-conditions-checkbox strong::after, #res-bookable-page .can-spam-inner::after {content:\"\";position:absolute;top:0;left:0;width:20px;height:16px;background:url(#$(ContentManager:hertz-bookable-checkbox-bg.png)!) no-repeat center center;background-size:20px auto}#termsAndConditionsAccepted:checked + strong::after, #canSpamElectionCheckbox:checked + .can-spam-inner::after{background-image:url(#$(ContentManager:hertz-bookable-checkbox-checked-bg-2.png)!)!important}#res-bookable-page select{padding:0 10px;height:42px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF;background-size:18px auto}@media only screen and (min-width:768px){#res-bookable-page .bookable-row{display:table;width:100%;margin-bottom:2px}#res-bookable-page .bookable-row .bookable-col{display:table-cell!important;width:50%!important}#res-bookable-page .bookable-row .bookable-col-left{padding-right:5px}#res-bookable-page .bookable-row .bookable-col-right{padding-left:5px}.review-and-book-col{display:table-cell;vertical-align:top}.review-and-book-col-right{width:330px}.review-and-book-col-left{padding-right:60px}.veh-container h3{min-height:36px}}@media only screen and (max-width:767px){.bookable-cost-header-row{border-bottom:none}#res-bookable-page #pay-with-your-points .choose-rewards select{font-size:14px!important;max-width:none!important}.current-member-email-container{background-color:#FFF;padding:20px 0 0;font-size:14px}#bookablePrivacyOptInText{font-size:14px;margin-top:10px}#reviewAndBookCost #rd-main .rd-detail header{background:#F3F4F8!important;border:1px solid #D7D8DB;text-align:center}#reviewAndBookCost #rd-main .rd-detail header div{display:inline-block;width:auto;padding:0 3px;color:#000}#reviewAndBookCost #rd-main .rd-box{border:none!important}#misc-info .misc-info-container{margin-top:0}.review-and-book-col{width:100%;vertical-align:top}.review-and-book-col-right{display:table-header-group}.bookable-cost-header-col{padding:15px 10px 5px}#reviewAndBookCost #rd-rental-total{padding:0 10px}#reviewAndBookCost #rd-totals{display:block!important}.review-and-book-col-right #rd-pay-later,.review-and-book-col-right .rate-type-box.rd-info,.review-and-book-col-right #rd-pay-now,.review-and-book-col-right #rd-pay-later,.review-and-book-col-right #rd-more{display:none!important}.review-and-book-col-left{padding:10px;box-sizing:border-box}#res-bookable-page #approx-rate-terms fieldset{background:none!important;padding-top:0!important}#res-bookable-page #approx-rate fieldset .details{border:none!important;margin:0 -10px 20px!important;background:#FFF!important}#res-bookable-page #vehicleUpsells{margin-top:20px;margin-bottom:5px}#vehicleUpsells .vehContent{width:100%}.review-and-book-row{margin-bottom:0}#res-bookable-page{background:transparent!important}#container{background-color:#F3F4F8!important}.bookable-btn-row, .bookable-btn-row-inner, .bookable-btn-col, .bookable-btn-col-inner{display:inline;padding:0;width:auto}.bookable-btn-row{display:block;width:100%;box-sizing:border-box;text-align:center}#res-bookable-page #information,#res-bookable-page #important{margin-left:-10px!important;margin-right:-10px!important;width:auto!important}#res-bookable-page #important{padding:10px;background:#FFF;position:relative}#res-bookable-page #creditCard fieldset{box-sizing:border-box}#res-bookable-page fieldset{padding:10px 0!important}.bookable-currency{font-size:12px;display:inline-block;padding-top:10px}.bookable-btn-wrap{border:1px solid #D7D8DB;margin-top:15px;margin-bottom:20px}#important .terms-first{border-top:1px solid #D7D8DB;padding-top:15px}#important .terms .terms h2, #important #important-information-toggle, h4.rental-links-header{border-bottom:none!important}#customerInfo legend,#arrival-misc-info .arrival-info-heading{padding-left:0!important;box-sizing:border-box;font-size:16px!important;padding-bottom:15px!important;font-weight:500!important;margin-bottom:1px!important}#customerInfo legend{padding-top:20px!important}#res-bookable-page #pay-with-your-points .choose-rewards{padding-bottom:10px!important}#res-bookable-page #approx-rate .submit-button-full{display:block!important;width:100%!important;position:fixed!important;bottom:0;left:0;margin:0!important;z-index:1;border-radius:0!important}#res-bookable-page #creditCard fieldset legend,#res-bookable-page #billing-info fieldset legend,#res-bookable-page #pointsSection fieldset legend,#res-bookable-page #frequent-traveler fieldset legend{float:left;background:#FFF!important;margin:-10px 0 15px!important;box-sizing:border-box;padding:10px 10px 20px!important;clear:both;width:100%;border:none!important;position:relative;font-size:16px!important;font-weight:500!important}#reviewAndBookCost #rd-main .rate-separator,#reviewAndBookCost #rd-main .rd-edit-cont{display:none!important}#res-bookable-page #creditCard fieldset legend::after,#res-bookable-page #billing-info fieldset legend::after,#res-bookable-page #pointsSection fieldset legend::after,#res-bookable-page #frequent-traveler fieldset legend::after{position:absolute;bottom:10px;left:0;width:100%;height:1px;pointer-events:none;content:\"\";border-bottom:1px solid #E6E7EB}.bookable-cost-header-col-left{padding-left:10px}.bookable-cost-header-col-right{padding-right:10px#disclaimer-and-reserve h4{padding:0 10px 10px}#res-bookable-page #customerInfo legend.hertz-gold-title{margin-bottom:0!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs{background:#FFF!important}#res-bookable-page #approx-rate-terms fieldset.visible-xs .prepend-top{padding-top:0!important}#res-bookable-page input[type=text], #res-bookable-page input[type=email], #res-bookable-page input[type=tel], #res-bookable-page select{font-size:16px#frequent-traveler,#misc-info{padding:0!important;margin:0!important#arrival-info #autocomplete-container,#arrival-info #autocomplete-radio-buttons{display:none!important}#arrival-info #flight-services{display:block!important}#arrival-info #flight-details{margin:0!important}}\/*-- Confirmation Page --*\/\/*@CSSINCLUDE:confirmation*\/.confirmation-hero-image{width:100%;height:275px;background:url(#$(ContentManager:hertz-confirmation-header-image.jpg)!) no-repeat center top;background-size:cover}#res-prepay-terms-accept label::after, #res-bookable-page .can-spam-inner::after {content:\"\";position:absolute;top:0;left:0;width:20px;height:16px;background:url(#$(ContentManager:hertz-bookable-checkbox-bg.png)!) no-repeat center center;background-size:20px auto}#tcCheckBox:checked + label::after{background-image:url(#$(ContentManager:hertz-bookable-checkbox-checked-bg-2.png)!)!important}@media only screen and (min-width:768px){#confColR .gptAdBlock{display:inline-block!important;vertical-align:top;width:auto!important;height:auto!important;float:none!important}}@media only screen and (min-width:1024px){#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col{text-align:left}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col-left{position:relative;padding-right:50px;padding-left:30px}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col-right{padding-left:50px;padding-right:30px}#res-summary-box .itin-expand-ovrvw-arrow .itin-expand-ovrvw-col-left::after{content:\"\";background:url(#$(ContentManager:hertz-confirmation-itin-arrow.png)!) no-repeat 0 0;background-size:100% auto;width:66px;height:32px;position:absolute;top:10px;right:-33px;pointer-events:none}}@media only screen and (max-width:991px){.conf-placepass-desktop{display:none}.conf-placepass-mobile{display:inline-block#confColL #res-itinerary-2 .int-loc-tm-info,#confColL #res-itinerary-2 .int-misc-info{display:block!important;width:100%!important}#confColL #res-itinerary-2 .int-loc-tm-info{padding-right:0!important}.confirmation-col{width:100%;display:block;box-sizing:border-box;padding:10px 0}#res-confirmation-page #main-content{padding-left:10px;padding-right:10px;background-color:#FFF}.confirmation-resflow-box-link-col{display:inline-block;width:auto;text-align:left}#confirmationResflowBoxLinksLeft button::after{content:\"|\";display:inline-block;padding-left:9px;padding-right:5px}.confirmation-col-left{padding-right:0}.confirmation-col-max-width{max-width:none}#res-prepay-terms-accept input[type=\"checkbox\"]{top:-175px}#res-confirmation-page #page-content #res-warnings{padding-left:0!important;padding-right:0!important}#res-itinerary-2 .itn-edit-cont .itn-edit-link{margin-left:0!important;margin-right:0!important;box-sizing:border-box}}\/*-- Homepage --*\/.homepage-form-group select{background:url(#$(ContentManager:hertz-select-arrow.png)!) no-repeat right 15px center #FFF}.discount-code-value.active::after{background:url(#$(ContentManager:hertz-discount-check.png)!) no-repeat 0 0}.pseudo-label-help-icon{background:url(#$(ContentManager:hertz-info-icon.png)!) no-repeat 0 0}.member-res-search::after{background:url(\\\'#$(ContentManager:hertz-summary-arrow-icon.png)!\\\') no-repeat 0 0}\/*@CSSINCLUDE:homepage*\/\/*-- Header --*\/#container #header-container .emember-container .lastnametext::after,#container #header-container .cookiedLinks .fullswitchprofilelinktext::after{background:url(#$(ContentManager:hertz-nav-dropdown-arrow-white.png)!) no-repeat 0 0;}.header-mobile-menu a{background:url(\'#$(ContentManager:hertz-nav-header-menu-icon.png)!\') no-repeat 15px 15px}header-mobile-menu.active a{background-image:url(\'#$(ContentManager:hertz-nav-header-close-icon.png)!\')}.search-inner-col-left::after{background:url(\'#$(ContentManager:hertz-nav-header-search-icon.png)!\') no-repeat 0 0}#header-container .utility-bar .pos-container .pos-box::after{background:url(\'#$(ContentManager:hertz-menu-expanded-arrow.png)!\') no-repeat}\/*@CSSINCLUDE:headerDesktop*\/\/*@CSSINCLUDE:headerDesktop2*\/\/*@CSSINCLUDE:headerMobile*\/@media only screen and (max-width:599px){#header-container .utility-bar .pos-container ul .change-link{padding-right:0!important}#header-container .pos-container label{padding-bottom:0!important}#container #header-container .emember-container .welcometext{display:none!important}}@media only screen and (min-width:1201px){.top-nav-registered-menu ::after{content:\"\";width:13px;height:8px;background:url(\'#$(ContentManager:hertz-menu-expanded-arrow.png)!\') no-repeat;background-size:100% auto;position:absolute;top:-8px;right:14px}}#hero-image-container{max-width:1248px;margin-left:auto !important;margin-right:auto !important}.homepage-form-row.homepage-form-group.resform-row-code-age{background:none;border:none;position:relative}.homepage-form-row.homepage-form-group.resform-row-code-age .homepage-form-col-right #itn-age{border-left:none}.aaa-added .homepage-form-row.homepage-form-group.resform-row-code-age .homepage-form-col-right #itn-age{border-right:none}#ageAdvisory{left:0;position:absolute;width:100%;bottom:-49px}.age-advisory-inner{width:100%!important;box-sizing:border-box;margin:0px!important;position:relative;height:50px;background:#FFF;border:1px solid #C4C6CC;display:table}#res-form #ageAdvisory #age-advisory-content{padding:5px 20px 5px 60px;display:table-cell;vertical-align:middle}#res-form #ageAdvisory #age-advisory-content::after{content:\"\";width:50px;height:100%;background:url(\'#$(ContentManager:hertz-icon-advisory-white.png)!\') no-repeat 13px center #9D9DA3; background-size:24px auto; position:absolute;top:0;left:-1px;border:1px solid #9D9DA3;border-bottom:0}#ageAdvisory #age-advisory-image{display:none!important}#resformMMActive.age-advisory-expanded{padding-bottom:50px}@media only screen and (max-width:1200px){#resDiscCol{border:none}.discount-code-wrap{border:1px solid #C4C6CC;margin-top:10px}}@media only screen and (min-width:1201px){.homepage-form-row.homepage-form-group.resform-row-code-age .discount-code-trigger,.homepage-form-row.homepage-form-group.resform-row-code-age #itn-age{background:#FFF;border:1px solid #C4C6CC}}.mm-content-page #breadCrumns,.mm-content-page .special-offers{max-width:1250px;margin:0 auto}body .cc-error-list{margin:0 0 20px}\/*@CSSINCLUDE:altbranding*\/#container #header-container .emember-container .lastnametext::after, #container #header-container .cookiedLinks .fullswitchprofilelinktext::after{background-image:url(#$(ContentManager:hertz-nav-dropdown-arrow-black.png)!)}.header-mobile-menu a{background:url(\'#$(ContentManager:hertz-nav-header-menu-icon-black.png)!\') no-repeat 15px 15px}.header-mobile-menu.active a{background-image:url(\'#$(ContentManager:hertz-nav-header-close-icon-black.png)!\')}@media only screen and (min-width:1201px){.active-menu::after{background:url(#$(ContentManager:hertz-nav-selected-arrow.png)!) no-repeat center center;width:100%;height:9px;background-size:auto 100%;bottom:5px}}\/*@CSSINCLUDE:gprnavigation*\/.mm-gpr-navigation #header-container .emember-container #topNavDesktopShow span{color:#000;font-weight:normal;font-family:\"Ride\",Muli,Helvetica,Arial,sans-serif}@media only screen and (min-width:1201px){.mm-gpr-navigation #header-container .utility-bar .pos-container ul .change-link{border-right:none}#loginFormInner::after{background:url(#$(ContentManager:hertz-nav-selected-arrow.png)!) no-repeat center center;width:20px;height:9px;background-size:auto 100%;top:-9px;content:\"\";position:absolute;right:10px}}\/*@CSSINCLUDE:brgnavigation*\/\/*@CSSINCLUDE:homepagehero*\/.header-brg::after{background:url(#$(ContentManager:header-brg-cover.png)!) no-repeat center center}@media only screen and (min-width:768px){.hero-col-right{background:url(#$(ContentManager:hertz-hero-road.jpg)!) no-repeat top center;background-size:cover;position:relative}.hero-col-right::after{background:url(#$(ContentManager:hertz-hero-desktop-mask-bg.png)!) no-repeat left top;background-size:auto 100%}}@media only screen and (min-width:768px){#resformStart.inactive{display:none}}@media only screen and (max-width:767px){#resformStart.inactive #resformStartTrigger{display:none}}@media only screen and (max-width: 599px){#resFormHero{margin-top:0;padding-top:45px;}}body.pay-now-overlay-open{width:100%;height:100%;overflow:hidden}.pay-now-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:1000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}.pay-now-overlay.active{display:block}.pay-now-overlay-inner{width:95%;max-width:620px;background-color:#fff;margin:10px auto}.pay-now-overlay-trigger img{width:20px!important}.pay-now-overlay-trigger{position:relative;top:-4px;margin-left:5px}.pay-now-overlay-close-icon{cursor:pointer;position:absolute;top:17px;right:20px}.modal-body{padding:25px 30px}.pay-now-overlay-inner h2{margin-top:0;font-size:20px;line-height:24px}.pay-now-overlay-inner ul{margin:0 0 0 20px;padding:0}.pay-now-overlay-inner li{margin:0 0 10px;padding:0;font-size:15px;line-height:18px}'

/*-- Global --*/
if(!$("body").hasClass('mm-active')){
	$("body").addClass('mm-active');
	var cssFromJS = '';
	var el = document.createElement('style');

	function addcss(css){
			 var head = document.getElementsByTagName('head')[0];
			 var s = document.createElement('style');
			 s.setAttribute('type', 'text/css');
			 if (s.styleSheet) {   // IE
					 s.styleSheet.cssText = css;
			 } else {                // the world
					 s.appendChild(document.createTextNode(css));
			 }
			 head.appendChild(s);
		}

	// heather's new CSS for maxy sitewide js called h0020CSS 
	for (var name in window.h0020CSS) {
				addcss(window.h0020CSS[name]);
	};

	// heather's new CSS for CSS in January 2019
	addcss(window.newCSS['global']);

	$("body").append('<div id="MMActive"></div>');

	$.initialize(".lb-content-box .rd-veh-image", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$(this).find('img').upsizeCarImage({
				carName: $(this).closest('.rd-veh-details').find('.rd-veh-infos strong').text()
			});
		}
	});

	$.initialize(".lb-foreground-cont #cbGoldMemberForm", function(){
		$(this).find('#closeBtn').trigger('click');
	});

	$.initialize("#rental-policy-links, #bookableImpInfContentArea", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$(this).wrapInner('<div class="rental-policy-links-wrapper"></div>');
		}
	});

	$("body").on( "click", ".rental-links-header,#important #important-information-toggle,#important .terms .terms h2,.expandable-section-btn", function(){
		$(this).toggleClass('inactive');
		if($(this).closest("#important-information-container").length > 0){
			$(this).closest('#important-information-container').find( ".rental-policy-links-wrapper" ).stop(true, false).slideToggle( 600, function(){
				$(this).css('height','auto');
			});
		}else if($(this).closest('.terms').find('#bookableTermsBox').length > 0){
			$(this).closest('.terms').find('#bookableTermsBox').stop(true, false).slideToggle( 600, function(){
				$(this).css('height','auto');
			});
		}else if($(this).closest('.expandable-section').length > 0){
			$(this).closest('.expandable-section').find('.expandable-section-content').stop(true, false).slideToggle( 600, function(){
				$(this).css('height','auto');
			});
		}else{
			$(this).closest('#rental-links').find( ".rental-policy-links-wrapper" ).stop(true, false).slideToggle( 600, function(){
				$(this).css('height','auto');
			});
		}
	});
	$.initialize(".rental-links-header,#important #important-information-toggle", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active').addClass('inactive');
			if($(this).closest("#important-information-container").length > 0){
				$(this).closest('#important-information-container').find( ".rental-policy-links-wrapper" ).hide();
			}else{
				$(this).closest('#rental-links').find( ".rental-policy-links-wrapper" ).hide();
			}
		}
	});
	$.initialize("#steps", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			var foundActive=false;
			t.find('li').each(function(index){
				if(foundActive === false && !$(this).hasClass('current')){
					$(this).addClass('prev-step');
				}else{
					$(this).removeClass('prev-step');
				}
				$(this).prepend('Step ');
				$(this).html(function (i, html){
					return html.replace(".", ":");
				});
				$(this).wrapInner('<div class="step-content"></div>');
				$(this).find('.bar').insertAfter($(this).find('.step-content'));
				if($(this).hasClass('current')){
					foundActive=true;
					$(this).closest('ul').before('<div class="step-mobile">'+$(this).text()+'</div>');
				}
			});
		}
	});
	$('#payNowOverlayMM').remove();
	$('body').append('<div class="pay-now-overlay" id="payNowOverlayMM"><div class="pay-now-overlay-inner"><div class="modal-close-row"><div class="modal-close-title">Pay Now & Save!</div><a class="pay-now-overlay-close-icon"><img src="#$(ContentManager:hertz-modal-icon-close.png)!" alt="Close" width="18" height="18"></a></div><div class="modal-body"><h2>Pay in advance to take advantage of our lowest rates. Please note:</h2><ul><li>The card used to make the reservation needs to be presented at the time of rental and must be in the renter’s name.</li><li>Pay Now charges do not include all taxes, location fees, or incidentals while on rent. Those charges will be paid at time of rent.</li><li>Cancellations prior to 24 hours of scheduled pick-up are subject to a $50 cancellation fee.</li><li>Cancellations within 24 hours of scheduled pick-up are subject to a $100 cancellation fee.</li></ul></div></div></div>');
	$("body").on( "mousedown", ".pay-now-overlay", function(e){
		if($(e.target).closest('.pay-now-overlay-inner').length<1){
			$(this).addClass('click-start');
		}
	});
	$("body").on( "mousedown", ".pay-now-overlay-inner", function(){
		$('.pay-now-overlay').removeClass('click-start');
	});
	$("body").on( "click", ".pay-now-overlay.click-start, .pay-now-overlay-close-icon", function(){
		$('#payNowOverlayMM').removeClass('active');
		$('body').removeClass('pay-now-overlay-open');
	});
	$("body").on( "click", ".pay-now-overlay-trigger", function(){
		$('#payNowOverlayMM').addClass('active');
		$('body').addClass('pay-now-overlay-open');
	});
};


var itinerarySection = '<div id="itinerarySection"><div id="itinerarySectionBG"></div><div id="itinerarySectionInner"><div id="itinerarySummary"><div class="itn-sum-row"><div class="itin-sum-col itin-sum-col-left"><div class="itn-sum-row-inner"><div class="itn-sum-col-inner itn-sum-col-inner-left itinerary-clear" id="itineraryPickUpLocation"></div><div class="itn-sum-col-inner itn-sum-col-inner-right itinerary-clear" id="itineraryDropOffLocation"></div></div></div><div class="itin-sum-col itin-sum-col-right"><div class="itn-sum-row-inner-desktop-only"><div class="itn-sum-col-inner-desktop-only itn-sum-col-inner-desktop-only-left itinerary-clear" id="itineraryCarType"></div><div class="itn-sum-col-inner-desktop-only itn-sum-col-inner-desktop-only-right"><div class="itinerary-summary-btn-row"><div class="itinerary-summary-btn-col itinerary-summary-btn-col-left itinerary-clear" id="itineraryNextStep"></div><div class="itinerary-summary-btn-col itinerary-summary-btn-col-right"><a href="javascript:void(0);" id="itineraryExpandBtn"></a></div></div></div></div></div></div></div><div id="itnExpW"><div id="itineraryExpand"><div class="itinerary-expand-row"><div class="itinerary-expand-col itinerary-expand-col-left"><div id="itineraryExpandOverview"><div id="itnExpOverW"><div class="itin-expand-ovrvw-row itin-expand-ovrvw-row-outlined"><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-left" id="itineraryExpandOverviewLeft"></div><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-right" id="itineraryExpandOverviewRight"></div></div><div class="itin-expand-ovrvw-row"><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-left" id="itineraryExpandCarLeft"></div><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-right" id="itineraryExpandCarRight"></div></div><div class="itinerary-expand-full-details" id="itnExpFullDet"></div></div></div></div><div class="itinerary-expand-col itinerary-expand-col-right itinerary-clear" id="itineraryFullDetails"></div></div></div></div></div></div>';

/*-- Itinerary Bar --*/

if(window.location.hash.indexOf("vehicles") > -1 || window.location.hash.indexOf("extras") > -1 || window.location.hash.indexOf("review-and-book") > -1){
	if($("#itinerarySection").length < 1){ //Add Itinerary Bar
		$("#page").prepend(itinerarySection);

		$.initialize("#itinerary-info #rd-main", function(){
		if(window.location.hash.indexOf("vehicles") > -1 || window.location.hash.indexOf("extras") > -1 || window.location.hash.indexOf("review-and-book") > -1){
			if(!$(this).hasClass('mm-active')){
				$(this).addClass('mm-active');
				var ageCDP = $(this).find('.cdpName:contains("204546")');
				if(ageCDP.length>0){
					ageCDP.html('Promotional Coupon : 204546<br> Estimated total quoted in reservation will not reflect the discount, the discount will be applied at time of rent.');
				}
				$("#itineraryFullDetails").empty();
				$(this).closest('#itinerary-info').removeClass('mm-hide').clone(true).appendTo("#itineraryFullDetails");
				$(this).closest('#itinerary-info').addClass('mm-hide');
				var itnPULoc=$("#itineraryPickUpLocation");
				var itnDOLoc=$("#itineraryDropOffLocation");
				itnPULoc.empty();
				itnDOLoc.empty();
				$("#itnExpFullDet").empty();
				var pickupLocation="";
				var pickupTime="";
				var pickupDate="";
				var dropoffLocation="";
				var dropoffTime="";
				var dropoffDate="";
				var vehicleType="";
				var summarySnippet='<div class="itinerary-summary-city"></div><div class="itinerary-summary-date"></div><div class="itinerary-summary-time"></div>';
				function removeLabel(elementNode){
					var value="";
					if(elementNode.length > -1){
						var newNode=elementNode.clone();
						newNode.find('label').remove();
						value=$.trim(newNode.text());
					}
					return value;
				}

				function formatSummaryTime(elementValue){
					var value="";
					value=elementValue.match(/\d\d:\d\d.*/g);
					value=value.toString();
					value=value.replace(/^0+/, '');
					return value;
				}

				function formatSummaryDate(elementValue){
					var value="";
					value=elementValue.split(",");
					if(value.length >= 2){
						value=value[1];
					}
					return value;

				}

				$(this).find('img.car-info').upsizeCarImage({
					carName: $(this).find('h1').text()
				});


				if($('#res-itinerary-1 .pickup-location-time .itn-location-container').length > 0){
					itnPULoc.append(summarySnippet);
					pickupLocation=removeLabel($('#res-itinerary-1 .pickup-location-time .itn-location-container').first());
					var pickupTimeFull=removeLabel($('#res-itinerary-1 .pickup-location-time .itn-pickup-time').first());
					pickupTime=formatSummaryTime(pickupTimeFull);
					pickupDate=formatSummaryDate(pickupTimeFull);
					itnPULoc.find('.itinerary-summary-city').text(pickupLocation);
					itnPULoc.find('.itinerary-summary-date').text(pickupDate);
					itnPULoc.find('.itinerary-summary-time').text(pickupTime);
				}

				if($('#res-itinerary-1 .return-location-time .itn-location-container').length > 0){
					itnDOLoc.append(summarySnippet);
					dropoffLocation=removeLabel($('#res-itinerary-1 .return-location-time .itn-location-container').first());
					var dropoffTimeFull=removeLabel($('#res-itinerary-1 .return-location-time .itn-return-time').first());
					dropoffTime=formatSummaryTime(dropoffTimeFull);
					dropoffDate=formatSummaryDate(dropoffTimeFull);
					itnDOLoc.find('.itinerary-summary-city').text(dropoffLocation);
					itnDOLoc.find('.itinerary-summary-date').text(dropoffDate);
					itnDOLoc.find('.itinerary-summary-time').text(dropoffTime);
				}

				if($('#res-itinerary-1 .itn-same-location .itn-location-container').length > 0){
					itnPULoc.append(summarySnippet);
					itnDOLoc.append(summarySnippet);
					pickupLocation=removeLabel($('#res-itinerary-1 .itn-same-location .itn-location-container').first());
					dropoffLocation=pickupLocation;
					var pickupTimeFull=removeLabel($('#res-itinerary-1 .itn-pickup-return-time .itn-pickup-time').first());
					pickupTime=formatSummaryTime(pickupTimeFull);
					pickupDate=formatSummaryDate(pickupTimeFull);
					var dropoffTimeFull=removeLabel($('#res-itinerary-1 .itn-pickup-return-time .itn-return-time').first());
					dropoffTime=formatSummaryTime(dropoffTimeFull);
					dropoffDate=formatSummaryDate(dropoffTimeFull);
					itnPULoc.find('.itinerary-summary-city').text(pickupLocation);
					itnPULoc.find('.itinerary-summary-date').text(pickupDate);
					itnPULoc.find('.itinerary-summary-time').text(pickupTime);
					itnDOLoc.find('.itinerary-summary-city').text(pickupLocation);
					itnDOLoc.find('.itinerary-summary-date').text(dropoffDate);
					itnDOLoc.find('.itinerary-summary-time').text(dropoffTime);
				}

				var overviewSnippet='<div class="itin-expand-ovrvw-type"></div><div class="itin-expand-ovrvw-location"></div><div class="itin-expand-ovrvw-date"></div><div class="itin-expand-ovrvw-time"></div>';
				var ininExpL=$("#itineraryExpandOverviewLeft");
				var ininExpR=$("#itineraryExpandOverviewRight");
				ininExpL.empty();
				$("#itineraryExpandOverviewRight").empty();

				if(pickupLocation !== ""){
					ininExpL.append(overviewSnippet);
					ininExpL.find('.itin-expand-ovrvw-type').text('Pick-up');
					ininExpL.find('.itin-expand-ovrvw-location').text(pickupLocation);
					ininExpL.find('.itin-expand-ovrvw-date').text(pickupDate);
					ininExpL.find('.itin-expand-ovrvw-time').text(pickupTime);
				}

				if(dropoffLocation !== ""){
					ininExpR.append(overviewSnippet);
					ininExpR.find('.itin-expand-ovrvw-type').text('Drop-off');
					ininExpR.find('.itin-expand-ovrvw-location').text(dropoffLocation);
					ininExpR.find('.itin-expand-ovrvw-date').text(dropoffDate);
					ininExpR.find('.itin-expand-ovrvw-time').text(dropoffTime);
				}

				$("#itineraryCarType").empty();

				if($("#rd-main .rd-vehicle .rd-info-left").length > 0){
					vehicleType=$("#rd-main .rd-vehicle .rd-info-left").prev().text();
					var vehicleTypeSplit=vehicleType.split('(');
					vehicleType=vehicleTypeSplit[0].toString();

					if(vehicleType.indexOf('Passenger') > 0){
						vehicleTypeSplit=vehicleType.split('Passenger');
						vehicleType=vehicleTypeSplit[1].toString();
					}

					if(vehicleType.indexOf('2 or 4 Door') > 0){
						vehicleTypeSplit=vehicleType.split('2 or 4 Door');
						vehicleType=vehicleTypeSplit[0].toString();
					}

					if(vehicleType.indexOf('2 or 4 door') > 0){
						vehicleTypeSplit=vehicleType.split('2 or 4 door');
						vehicleType=vehicleTypeSplit[0].toString();
					}

					if(vehicleType.indexOf('2 or 4 dr.') > 0){
						vehicleTypeSplit=vehicleType.split('2 or 4 dr.');
						vehicleType=vehicleTypeSplit[0].toString();
					}

					vehicleType=vehicleType.replace("4WD/AWD", "");

					if(vehicleType.indexOf("Reserve this Exact Model") > -1){
						vehicleType=$("#rd-main .rd-vehicle .rd-info-left strong").first().text();
					}

					$("#itineraryCarType").append('<div class="itinerary-summery-type">'+vehicleType+'</div>');
				}

				if($("#rd-rental-total .rd-subtotal").length > 0){
					var cost=$("#rd-rental-total .rd-subtotal").first().text();
					var costHTML="";
					if(cost.indexOf(' ') > 0){
						var costSplit=cost.split(' ');
						for(var i=0; i < costSplit.length; i++){
							if(i==1){
								costHTML += '<span class="itinerary-currency">';
							}
							costHTML += costSplit[i];
							if(i==costSplit.length - 1){
								costHTML += '</span>';
							}
						}

					}else{
						costHTML=cost;
					}
					$("#itineraryCarType").append('<div class="itinerary-summery-cost">'+costHTML+'</div>')
				}

				$("#itineraryNextStep").empty();
				if($("#extras .controls button.primary").length > -1 && $("#steps li:nth-child(3)").hasClass('current')){
					if(window.location.hash.indexOf("vehicles")==-1){
						$("#extras .controls button.primary").first().clone().addClass('extrasBtn').appendTo("#itineraryNextStep");
						if($(".extrasBtn").text()=="Submit"){ $(".extrasBtn").text('Continue') }
						$("#extras .controls button.primary").first().closest('.controls').addClass('btn-cloned');
					}
				}else if($("#bookableSubmit").length > -1 && $("#steps li:nth-child(4)").hasClass('current')){
					if(window.location.hash.indexOf("vehicles")==-1){
						$("#bookableSubmit").first().clone().addClass('bookableSubmitBtn').attr('id','').text("Reserve").appendTo("#itineraryNextStep");
					}
				}

				$("#itnExpFullDet").empty();
				$("#res-itinerary-1").clone().appendTo($("#itnExpFullDet"));
				$("#itnExpFullDet .itn-edit-link").removeClass('itn-edit-link').addClass('itn-edit-link-proxy');
				$("#itnExpFullDet .itn-edit-cont").insertAfter($("#itnExpFullDet .click-indicator").first());
				$("#itnExpFullDet .itn-loc-detail-link").removeClass('itn-loc-detail-link').addClass('itn-loc-detail-link-proxy');
				$("#itnExpFullDet .loc-view-link1 .itn-loc-detail-link-proxy").last().addClass('itn-loc-detail-link-proxy-last');
				$(this).find('.rd-vehicle figure img').upsizeCarImage({
					carName: $(this).find('.rd-vehicle .rd-info-left').text()
				});

				$("#itineraryExpandCarRight").empty();
				$(this).find('.rd-vehicle figure img').clone().appendTo("#itineraryExpandCarRight");

				$("#itineraryExpandCarLeft").empty();

				if(vehicleType !== ""){
					$("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-headline">Vehicle</p>');
					$("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-type">'+vehicleType+'</p>');
					$("#itineraryExpandCarRight").closest('.itin-expand-ovrvw-row').show();
				}else{
					$("#itineraryExpandCarRight").closest('.itin-expand-ovrvw-row').hide();
				}

				var expandVehicleClass="";
				if($(this).find('.rd-info-left').length > 0){
					expandVehicleClass=$(this).find('.rd-info-left').first().text();
					if(expandVehicleClass.indexOf(')') > -1){
						var expandVehicleClassSplit=expandVehicleClass.split(')');
						expandVehicleClass=expandVehicleClassSplit[1];
					}
					$("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-class">'+expandVehicleClass+'</p>');
				}

				if($(this).find('.rd-edit-link').length > 0){
					$("#itineraryExpandCarLeft").append('<p class="itinerary-expand-vehicle-details"><a class="itinerary-expand-vehicle-link-proxy">'+$(this).find(".rd-edit-link").first().text()+'</a></p>');
				}

				$("#itineraryFullDetails").find(".rd-edit-link").first().removeClass('rd-edit-link').addClass('itinerary-expand-vehicle-link-proxy');
				$("#itineraryFullDetails").find(".rd-opt-detail-link1 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-open-proxy');
				$("#itineraryFullDetails").find(".rd-opt-detail-link2 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-close-proxy');

				if($('#reviewAndBookCost #rd-main').length > 0){
					$('#reviewAndBookCost #rd-main').empty();
					$('#res-bookable-page').find('#itinerary-info').clone(true).removeClass('mm-hide').appendTo("#reviewAndBookCost #rd-main");
					$("#reviewAndBookCost .rd-opt-detail-link1 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-open-proxy');
					$("#reviewAndBookCost .rd-opt-detail-link2 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-close-proxy');

					var summaryCostSplit=$('#rdReviewAndBookSummary').find('.rd-subtotal').text().split(' ');
					if(summaryCostSplit.length > 1){
						$('#rdReviewAndBookSummary').find('.rd-subtotal').html(summaryCostSplit[0]+' <span class="review-and-book-summary-currency">'+summaryCostSplit[1]+'</span>');
					}
					$('#reviewAndBookCost #rd-more .rd-info').html(function (i, html){
						return html.replace('Rate is guaranteed.  Taxes, fees and extras, if not included in the Rate, are subject to change.', '');
					});

					$('#reviewAndBookCost #rd-rental-total .rd-subtotal').html(function (i, html){
						return html.replace('USD', '<span class="bookable-currency">USD</span>');
					});

					if($('#reviewAndBookCost #rd-pay-now .rd-title .pay-now-overlay-trigger').length<1){
						$('#reviewAndBookCost #rd-pay-now .rd-title').first().append('<a href="javascript:void(0);" class="pay-now-overlay-trigger"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');
					}
				}
			}
		}
	});

	$.initialize("#itinerary-info #itinerary-content", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			if($(this).closest('#itinerary-info').find('#rd-main').length < 1){
				$(this).closest('#itinerary-info').append('<div id="rd-main"></div>');
			}
		}
	});
	}else{
		$("#itinerarySection").removeClass('inactive');
	}
}else{ //Page Without Itinerary Bar
	if($("#itinerarySection").length > 0){ //Itinerary Bar Added Previously
		$("#itinerarySection").addClass('inactive');
	}
}

if(!$("body").hasClass('mm-itinerary-active')){
	$("body").addClass('mm-itinerary-active');

	$("body").on( "click", "#itineraryExpandBtn", function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('#itinerarySectionBG').addClass('active');
		}else{
			$('#itinerarySectionBG').removeClass('active');
		}
		$( "#itineraryExpand" ).stop(true, false).slideToggle(600);
	});

	$("body").on( "click", "#itinerarySectionBG", function(){
		$("#itineraryExpandBtn").trigger('click');
	});

	$("body").on( "click", "#itnExpFullDet .itn-edit-link-proxy", function(event){
		$("#res-itinerary-1 .itn-edit-link").first().trigger('click');
		event.stopPropagation();

	});
	$("body").on( "click", "#itnExpFullDet .itn-loc-detail-link-proxy", function(event){
		if($(this).hasClass('itn-loc-detail-link-proxy-last')){
			$("#res-itinerary-1 .itn-loc-detail-link").last().trigger('click');
		} else {
			$("#res-itinerary-1 .itn-loc-detail-link").first().trigger('click');
		}
		event.stopPropagation();
	});

	$("body").on( "click", ".itinerary-expand-vehicle-link-proxy", function(){
		$("#itineraryExpandBtn").first().trigger('click');
		$("#rd-rate .rd-vehicle .rd-edit-link").first().trigger('click');
	});

	$("body").on( "click", ".rd-view-options-link-open-proxy", function(){
		$(this).closest('.rd-opt-detail-link1').hide();
		$(this).closest('.rd-info').find('.rd-opt-detail-link2').show();
		$(this).closest('.rd-info').find('.rd-optionals').show();

	});

	$("body").on( "click", ".rd-view-options-link-close-proxy", function(){
		$(this).closest('.rd-opt-detail-link2').hide();
		$(this).closest('.rd-info').find('.rd-opt-detail-link1').show();
		$(this).closest('.rd-info').find('.rd-optionals').hide();

	});

	$("body").on( "click", "#itineraryNextStep .extrasBtn", function(){
		$("#extras .controls button.primary").first().trigger('click');
	});

	$("body").on( "click", "#itineraryNextStep .bookableSubmitBtn", function(){
		$("#bookableSubmit").first().trigger('click');
	});

	$("body").on( "click", "#res-bookable-page #bookableSubmit", function(){
		if($('#termsAndConditionsAccepted').length > 0) {
			if($('#termsAndConditionsAccepted').prop("checked") === false) {
				setTimeout(function(){
					$('html, body').animate({
									scrollTop: $("label[for='termsAndConditionsAccepted']").closest('.bookable-terms-and-conditions').offset().top-$('.header-primary').first().height()-15
							});
						}, 500);
			}
		}
	});
}


/*-- Vehicles Page --*/

if(window.location.hash.indexOf("vehicles") > -1){
if(!$("body").hasClass('mm-vehicle-page-active')){
	$("body").addClass('mm-vehicle-page-active');

	window.updateDiscountDisplay=function(){
		if($('.sort-promo-wrapper').length>0){
			$('.sort-promo-wrapper').empty();
			var discountElem=$('.itn-discounts').first();
			var discountElemTxt = discountElem.html();
			if(discountElem.text().indexOf('No Affiliations')==-1){
				var pluralDiscounts="discount is";
				if(discountElem.text().split(":").length > 2){
					pluralDiscounts="discounts are";
				}
				var discountCopy = 'Your '+pluralDiscounts+' included in the rates below.';
				if(discountElemTxt.indexOf('204546')>-1) {
					discountCopy = 'Estimated total quoted in reservation will not reflect the discount, the discount will be applied at time of rent.';
				}
				$('.sort-promo-wrapper').append('<div class="vehicle-promo-code-recap"><h6>'+discountElemTxt+'</h6><p>'+discountCopy+'</p></div>');
				$('.vehicle-promo-code-recap').html(function (i, html){
					html=html.replace(/\:/g, ' Applied:');
					return html;
				});
				$('.sort-col-left .sort-content').empty();
				$('.sort-promo-wrapper').clone().appendTo($('.sort-col-left .sort-content'));
			}
		}
	}

	window.resizeVechGrid = function() {

		if($('#res-vehicles-page').length > 0) {
			$('.vehicle figure').css('min-height', '');
			$(".vehicle-grid").each(function(index) {
				var height = 0;
				var rowPos = 0;
				var hasBanner = false;
				var p = $(this);
				p.find(".vehicle:not('.filter-inactive')").each(function(index) {
					$(this).addClass('mm-vehicle-grid-resize');
					var curHeight = $(this).find('.vech-d-view figure').outerHeight();
					if (curHeight > height) {
						height = curHeight;
					}

					if(rowPos == 2) {
						if(height > 0) {
							p.find('.mm-vehicle-grid-resize figure').css('min-height', height);
						}
						if(hasBanner === true) {
							p.find(".mm-vehicle-grid-resize").each(function(index) {
								if ($(this).find('.vehicle-tag').length < 1) {
									$(this).addClass('vehicle-row-with-banner')
								}
							});
						}
						p.find('.mm-vehicle-grid-resize').removeClass('mm-vehicle-grid-resize');
						rowPos = 0;
						height = 0;
						hasBanner = false;
					}

					if($(this).find('.vehicle-tag').length > 0) {
						hasBanner = true;
					}

					rowPos++;
				});
			});
		}
		$('.mm-vehicle-grid-resize').removeClass('mm-vehicle-grid-resize');
	}

	var resizeTimer;
	$(window).on('resize', function(e) {
	  clearTimeout(resizeTimer);
	  resizeTimer = setTimeout(function() {
		window.resizeVechGrid();
	  }, 500);
	});

 $.initialize("#vehicleGrid1 .banner", function(){
	$(this).insertAfter("#vehicleGrid1");
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		window.resizeVechGrid();
	}, 500);
  });

	$.initialize("#vehicles-list", function(){
	if(!$(this).hasClass('mm-vehicle-brg')){
		$(this).addClass('mm-vehicle-brg');

		if($('#brgPromo').length < 1 && $('#brgPromoM').length < 1){
			$('body').append('<div id="brgPromo"></div>');
			$(this).prepend('<div id="brgPromoM"></div>');
			$(this).find('.sort-control-wrapper').before('<div id="brgPromoT"></div>');

			$('#brgPromo,#brgPromoM,#brgPromoT').append('<div class="brg-promo-inner"><div class="brg-content"></div></div>');
			$('.brg-content').html('<div class="brg-promo-title"><img src="#$(ContentManager:our-best-rate-guaranteed-badge.png)!" alt="Our Best Rate Guaranteed"></div><div class="brg-promo-details">If you find a lower rate on a Hertz car rental online, we will match the base rate and give you 10% off your rental.<br> <a href="https://www.hertz.com/rentacar/rental-car-deals/best-rate">Learn more.</a></div>');
			$('#brgPromo .brg-promo-inner').first().prepend('<div class="brg-promo-close"><a href="javascript:void();"><img src="#$(ContentManager:hertz-icon-close.png)!" alt="Close" width="14" height="14"></a></div>');

			function getCookie(name) {
			  var value = "; " + document.cookie;
			  var parts = value.split("; " + name + "=");
			  if (parts.length == 2) return parts.pop().split(";").shift();
			}

			var brgClosed = getCookie('mm-h0047-brg-closed');

			if(brgClosed == 'closed') {
				$('#brgPromo').addClass('disabled');
			}
		}

		setTimeout(function() {
			$('#brgPromo').addClass('active');
		}, 3000);
	}
	});
	$("body").on( "click", ".brg-promo-close a", function(){
		document.cookie('mm-h0047-brg-closed=closed');
		$('#brgPromo').removeClass('active');
	});
	$.initialize("#cancel-fee-overlay", function(){
		$(this).find('button.primary').trigger('click');
		setTimeout(function() {
			$('body').removeClass('hide-modals');
		}, 1000);
	});
	$("body").on( "click", ".pay-now-button", function(){
		$('body').addClass('hide-modals');
		setTimeout(function() {
			$('body').removeClass('hide-modals');
		}, 3000);
	});

	$.initialize(".vehicle", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			$('.vehicle').last().addClass('last-vehicle');

			//Modifications that apply to all views
			t.find('img.car-info').upsizeCarImage({
				carName: t.find('h1').text()
			})
			t.find('button:contains("Save $ Pay Now")').text('Pay Now').addClass('pay-now-button');
			t.find('.pay-now-button').closest('.price-wrapper').find('.rate').append('<a href="javascript:void(0);" class="pay-now-overlay-trigger"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');

			if(t.find('.mileage').length > 0){
				t.find('.details .wrapper ul').append('<li>'+t.find('.mileage').first().text()+'</li>');
				t.find('.price-wrapper .mileage').hide();
			}

			var pricingRate=t.find('.price-wrapper .rate').first().text();
			pricingRate=pricingRate.replace("Per Week", "/ week");
			t.find('.price-wrapper .rate').first().text(pricingRate);
			t.find(".show-rate-details, .approx-total-price").each(function(index){
				var label=$(this).find('span').clone();
				$(this).find('span').remove();
				$(this).prepend(label);
				var html=$(this).html();
				html=html.replace(")", "");
				html=html.replace("(", "");
				$(this).html(html);
			});
			t.find(".approx-total-price").each(function(index){
				$(this).find('.approx').prependTo($(this).find('.show-rate-details'));
				if($(this).find('a').length < 1){
					$(this).addClass('no-link');
				}
			});

			t.wrapInner('<div class="vech-d-view"></div>');

			var overlay = $('<div class="vehicle-overlay-outer"><div class="vehicle-overlay-wrap"><div class="vehicle-overlay-header"><div class="vehicle-overlay-headline"></div><div class="vehicle-overlay-subheadline"></div><a href="javascript:void(0);" class="vehicle-overlay-close"><img src="#$(ContentManager:hertz-icon-close.png)!" width="20"></a></div><div class="vehicle-overlay-body-wrapper"><div class="vehicle-overlay-body"></div></div><div class="vehicle-overlay-footer"></div></div></div>');

			//Create Overlay
			var overlayBody=overlay.find('.vehicle-overlay-body');
			var overlayFooter=overlay.find('.vehicle-overlay-footer');
			var headlineText=t.find('.vehicle-type').text();
			var subHeadline=t.find('.vehicle-header').clone();
			subHeadline.find('.vehicle-type').remove();
			var subHeadlineText=subHeadline.text();
			overlay.find('.vehicle-overlay-headline').text(headlineText);
			overlay.find('.vehicle-overlay-subheadline').text(subHeadlineText);
			overlay.find('.vehicle-overlay-subheadline').append(t.find('h1').clone());
			overlay.find('.vehicle-overlay-subheadline').append(t.find('.similar-info').clone(true));
			overlayBody.append(t.find('img.car-info').clone());

			overlayBody.append('<div class="vehicle-icon-row"><div class="vehicle-icon-col vehicle-icon-col-1"><div class="vehicle-icon-set">Seats</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-seats"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-2"><div class="vehicle-icon-set">Suitcases</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-suitcases"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-3"><div class="vehicle-icon-set">MPG</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-mpg"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-4"><div class="vehicle-icon-set">Doors</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-doors"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-5"><div class="vehicle-icon-set">Transmission</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-transmission-automatic"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-6">Drive<div class="vehicle-icon-set"></div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-awd"></div></div></div></div>');

			overlayBody.append(t.find('.details .wrapper ul').clone());
			overlayBody.append(t.find('.vehicle-amenities ul').clone());
			overlayBody.append(t.find('.includes-list').clone(true));
			overlayBody.append(t.find('.disclaimer').clone());
			overlayFooter.append(t.find('.pricing').clone(true));
			overlay.prependTo(t);
			//Modify standard view
			t.find('.vech-d-view figure').wrap('<div class="vehicle-col-info"></div>');
			t.find('.vech-d-view .pricing').wrap('<div class="vehicle-col-pricing"></div>');
			t.find('.vech-d-view .vehicle-info .car-info').appendTo(t.find('.vehicle-col-image'));
			t.find('.vech-d-view .pricing').wrapInner('<div class="vehicle-button-row"></div>');

			if(t.find('.multiple').length > 0){
				t.find('.multiple:nth-child(1)').addClass('multiple-pricing-left');
				t.find('.multiple:nth-child(2)').addClass('multiple-pricing-right');
			}

			var vehicleType=t.find(".vehicle-header .vehicle-type").text();
			var vehicleTypeSplit=vehicleType.split('(');
			vehicleType=vehicleTypeSplit[0].toString();
			vehicleType=vehicleType.replace('2 or 4 dr.', '');
			vehicleType=vehicleType.replace('2 or 4 Door', '');
			vehicleType=vehicleType.replace('2 or 4 door', '');
			vehicleType=vehicleType.replace('4 Dr.', '');


			var vehicleDetails=t.find(".vech-d-view h1").text();
			if(vehicleDetails.indexOf(')') > -1){
				var vehicleDetailsSplit=vehicleDetails.split(')');
				vehicleDetails=vehicleDetailsSplit[1];
			}

			if(vehicleType !== ""){
				t.find('.vehicle-col-info .details').prepend('<p class="vehicle-type-headline">'+vehicleType+'</p>');
				t.find(".vech-d-view h1").text(vehicleDetails);
			}else{
				t.find('.vehicle-col-info .details').prepend('<p class="vehicle-type-headline">'+vehicleDetails+'</p>');
			}
			t.find('.vehicle-col-info figcaption').prependTo($(this).find('.vehicle-col-info figure'));
			t.find(".vech-d-view .vehicle-type-headline").append('<a href="javascript:void(0);" class="vehicle-full-information-link"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');

			var selText = "Your Preferred Vehicle";

			if($('#loginLink').length>0){
				selText = "Selected Vehicle";
			}

			if(t.find('.selected').length > 0){
				t.find('.vehicle-col-info .details').prepend('<div class="vehicle-tag vehicle-tag-recommended">'+selText+'</div>');
			}

			t.find(".vehicle-header").hide();
			t.find('.vech-d-view .pricing').prepend('<div class="vehicle-icon-row"><div class="vehicle-icon-col vehicle-icon-col-1"><div class="vehicle-icon-set">Seats</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-seats"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-2"><div class="vehicle-icon-set">Suitcases</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-suitcases"></div></div></div><div class="vehicle-icon-col vehicle-icon-col-3"><div class="vehicle-icon-set">MPG</div><div class="vehicle-icon-value"><div class="mm-v-icn mm-v-icn-mpg"></div></div></div></div>');

			//Seats Icon
			var vechSel1=".vech-d-view .vehicle-icon-col-";
			var vechSel2=".vehicle-overlay-outer .vehicle-icon-col-";
			var iconTxt="";
			if(t.find('.vech-d-view .icons-gray_people').length > 0){
				iconTxt=t.find('.vech-d-view .icons-gray_people').closest('li').text();
				iconTxt=iconTxt.match(/\d+/);
				iconTxt=iconTxt.toString();
				t.find(vechSel1+'1 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'1 .vehicle-icon-value').append(iconTxt);
			}

			if(iconTxt==""){
				t.find(vechSel1+'1').addClass('icon-inactive');
				t.find(vechSel2+'1').addClass('icon-inactive');
			}

			//Luggage Icon
			iconTxt="";
			if(t.find('.vech-d-view .icons-gray_suitcase').length > 0){
				iconTxt=t.find('.vech-d-view .icons-gray_suitcase').closest('li').text();
				iconTxt=iconTxt.match(/\d+/g);
				var suitcaseCount=0;
				for(var i=0; i < iconTxt.length; i++){
					suitcaseCount += parseInt(iconTxt[i]);
				}
				if(suitcaseCount > 0){
					t.find(vechSel1+'2 .vehicle-icon-value').append(suitcaseCount);
					t.find(vechSel2+'2 .vehicle-icon-value').append(suitcaseCount);
				}
			}

			if(iconTxt==""){
				t.find(vechSel1+'2').addClass('icon-inactive');
				t.find(vechSel2+'2').addClass('icon-inactive');
			}

			//MPG Icon
			iconTxt="";
			if(t.find('.vech-d-view .icons-fuel').length > 0){
				iconTxt=t.find('.vech-d-view .icons-fuel').closest('li').text();
				iconTxt=iconTxt.match(/\d+/);
				iconTxt=iconTxt.toString();
				t.find(vechSel1+'3 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'3 .vehicle-icon-value').append(iconTxt);
			}

			if(iconTxt==""){
				t.find(vechSel1+'3').addClass('icon-inactive');
				t.find(vechSel2+'3').addClass('icon-inactive');
			}

			//Doors Icon
			iconTxt="";
			if(t.find('.vech-d-view .vehicle-type-headline:contains("2 or 4 dr.")').length > 0 || t.find('.vech-d-view .vehicle-type-headline:contains("2 or 4 door")').length > 0 || t.find('.vech-d-view .vehicle-type-headline:contains("2 or 4 Door")').length > 0){
				iconTxt='2-4';
				t.find(vechSel1+'4 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'4 .vehicle-icon-value').append(iconTxt);
			}else if(t.find('.vech-d-view .vehicle-type-headline:contains("4 Dr.")').length > 0){
				iconTxt='4';
				t.find(vechSel1+'4 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'4 .vehicle-icon-value').append(iconTxt);
			}

			if(iconTxt==""){
				t.find(vechSel1+'4').addClass('icon-inactive');
				t.find(vechSel2+'4').addClass('icon-inactive');
			}

			//Transmission Icon
			iconTxt="";
			if(t.find('.vehicle-overlay-outer .transmission:contains("A")').length > 0){
				iconTxt='Auto';
				t.find(vechSel1+'5 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'5 .vehicle-icon-value').append(iconTxt);
			}else if(t.find('.vehicle-overlay-outer .transmission:contains("M")').length > 0){
				iconTxt='Manual';
				t.find(vechSel1+'5 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'5 .vehicle-icon-value').append(iconTxt);

				t.find('.mm-v-icn-transmission-automatic').removeClass('mm-v-icn-transmission-automatic').addClass('mm-v-icn-transmission-manual');
			}

			if(iconTxt==""){
				t.find(vechSel1+'5').addClass('icon-inactive');
				t.find(vechSel2+'5').addClass('icon-inactive');
			}
			//AWD Icon
			iconTxt="";
			if(t.find('.vech-d-view .vehicle-type-headline:contains("4WD")').length > 0 || t.find('.vech-d-view .vehicle-type-headline:contains("AWD")').length > 0){
				iconTxt='AWD';
				t.find(vechSel1+'6 .vehicle-icon-value').append(iconTxt);
				t.find(vechSel2+'6 .vehicle-icon-value').append(iconTxt);
			}

			if(iconTxt==""){
				t.find(vechSel1+'6').addClass('icon-inactive');
				t.find(vechSel2+'6').addClass('icon-inactive');
			}

			var sipp = t.find('.vehicle-header').first().html();

			sipp = $.trim(sipp.split('</span>')[1]);
			if(sipp.length !== 4){
			  sipp = t.find('.vehicle-header span').first().html();
			  sipp = sipp.match(/[A-Z]{4}$/g);
			  if (sipp !== null) {
				 sipp = sipp[0];
			  }
			}
			t.attr('data-sipp', sipp);

			var vehicleCollection = '';
			if(t.find('.icons-prestige_sm').length>0){
			  vehicleCollection = 'prestige';
			} else if(t.find('.icons-adrenaline_sm').length>0){
			  vehicleCollection = 'adrenaline';
			} else if(t.find('.vehicle-type-headline').first().text().indexOf('DREAM')>0){
			  vehicleCollection = 'dream';
			}
			if(vehicleCollection !== '') {
			  t.attr('data-collection', vehicleCollection);
			}

			var vehicleExactModel = 'false';
			if(t.find('.or-similar').length>0){
			  vehicleExactModel = 'true';
			}
			t.attr('data-similar', vehicleExactModel);

			t.find('.price-wrapper').each(function( index ) {
			  if($(this).find('span:contains("USD")').length > 0) {
				$(this).find('span:contains("USD")').hide();
				$(this).find('strong.price').prepend('$');
			  }
			  $(this).find('span:contains("Per Week")').html(function(i, html) {
				return html.replace("Per Week", "/ week");
			  });
			});
			if($('#vehicleGrid1').length < 1 ) {
				$('#vehicles-list').find('.sort').first().after('<div class="vehicle-grid" id="vehicleGrid1"></div>');
			}
			if($('#vehicleGrid2').length < 1 ) {
				if($('#vehicles-list').find('.banner').length > 0) {
					$('#vehicles-list').find('.banner').first().after('<div class="vehicle-grid" id="vehicleGrid2"></div>');
			} else {
					$('#vehicleGrid1').after('<div class="vehicle-grid" id="vehicleGrid2"></div>');
				}
			}
			if($('#vehicleGrid1').hasClass('vehicle-set') && $('#vehicleGrid2').length > 0 ) {
				t.appendTo('#vehicleGrid2');
			} else {
				t.appendTo('#vehicleGrid1');
			}
			if($('#vehicleGrid1 .vehicle').length > 5) {
				$('#vehicleGrid1').addClass('vehicle-set');
			}
			if(t.hasClass('last-vehicle')){
				setTimeout(window.updateDiscountDisplay,500);
				$('.vehicle-grid').each(function( index ) {
					var checkLength = $(this).find(".vehicle:not('.filter-inactive')").length+1;
					if( (checkLength % 3) === 0 ) {
						$(this).append('<div class="vehicle-grid-last-line"></div>');
					}
				});
				window.resizeVechGrid();
			}
		}
	});

	$.initialize("#vehicles-list .banner", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			$('#mmVehBanner').remove();
			t.find('.gptAdBlock').hide().after('<div id="mmVehBanner"><img src="#$(ContentManager:Banner.jpg)!" alt="24/7 Peace of Mind"></div>');
		}
	});

}
if(!$("#vehicles-list .sort").hasClass('mm-active')){
	$.initialize("#vehicles-list .sort", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			if(t.find('.sort-row').length < 1){
				t.prepend('<div class="sort-row"><div class="sort-col sort-col-left"><div class="sort-content"></div><div class="sort-control-wrapper"></div></div><div class="sort-col sort-col-right"><div class="sort-promo-wrapper"></div></div></div>');
			}
			var colL=t.find('.sort-col-left');
			var colLC=colL.find('.sort-content');
			colLC.empty();
			colL.find('.sort-promo-wrapper').empty();

			$('.mm-mobile-vehicle-headline').remove();

			if(t.find('.sort-header').length > 0){
				t.find('.sort-header').appendTo(colLC);
			}else{
				var title=$("#steps li:nth-child(2)").text();
				title=title.split(':');
				colLC.append('<div class="sort-header">'+title[title.length-1]+'</div>');
			}
			$('#res-vehicles-page .rate-message-header').appendTo(colLC);
			window.updateDiscountDisplay();
			if(t.find('.vehicle-sort-wrap').length < 1){
				t.find('.sort-control-wrapper').append('<div class="vehicle-sort-wrap"><label for="vehicleSortSelect">'+t.find('.controls .label').text()+'</label><select id="vehicleSortSelect"></select></div>');
				$('#vehicleSortSelect').append($('<option>', { value: 0, text: ''}));
				t.find('.sort-arrows a').each(function(index){
					var defaultSelected=false;
					if(window.location.hash.indexOf("vehicles/sort/size/") > -1 && $(this).attr('class')=='size'){
						defaultSelected=true;
					}else if(window.location.hash.indexOf("vehicles/sort/price/") > -1 && $(this).attr('class')=='price'){
						defaultSelected=true;
					}
					if(defaultSelected === false){
						$('#vehicleSortSelect').append($('<option>', { value: $(this).attr('class'), text: $(this).text()}));
					}else{
						$('#vehicleSortSelect').append($('<option>', { value: $(this).attr('class'), text: $(this).text(), selected: true}));
					}
				});
			}

			t.addClass('mm-desktop-headline mm-desktop-vehicle-headline');
			t.clone(true).addClass('mm-mobile-headline').addClass('mm-mobile-vehicle-headline').removeClass('mm-desktop-vehicle-headline').removeClass('mm-desktop-headline').insertBefore("#res-vehicles-page #steps");
			$('.mm-mobile-vehicle-headline .sort-col-right, .mm-mobile-vehicle-headline .display-count, .mm-mobile-vehicle-headline .sort-control-wrapper, .mm-mobile-vehicle-headline .sort-promo-wrapper').remove();
		}
	});
}

$("body").on( "click", ".vehicle-full-information-link", function(event){
	$('body').addClass('vehicle-overlay-open');
	$(this).closest('.vehicle').find('.vehicle-overlay-outer').addClass('active');
});

$("body").on( "click", ".vehicle-overlay-outer, .vehicle-overlay-close", function(){
	if( (!$(event.target).hasClass("vehicle-overlay-wrap") && $(event.target).closest(".vehicle-overlay-wrap").length < 1) || $(event.target).hasClass("vehicle-overlay-close") || $(event.target).closest(".vehicle-overlay-close").length > 0){
		if($(this).closest(".vehicle-overlay-outer").length > 0){
			$(this).closest(".vehicle-overlay-outer").removeClass('active');
		}else{
			$(this).removeClass('active');
		}
		$('body').removeClass('vehicle-overlay-open');
	}
});

$("body").on( "change", "#vehicleSortSelect", function(event){
	if($(this).val() !== ""){
		$("#vehicles-list .sort").find('a.'+$(this).val()).trigger('click');
	}else{
		if($('#vehicleSortSelect .controls .reset').length > 0){
			$('#vehicleSortSelect .controls .reset').trigger('click');
		}
	}
});

} //End Vehicles Page


/*-- Ancillaries Page --*/

if(window.location.hash.indexOf("extras") > -1){
if(!$("body").hasClass('mm-ancillaries-page-active')){
	$("body").addClass('mm-ancillaries-page-active');

	$.initialize(".lb-content-box .extra-overlay", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			var title = $(this).closest('.lb-foreground-cont').find('section').first().text();
			var container = $(".extras-item-details h3:contains('"+title+"')").first().closest('article');
			if(container.length>0){
				var img = container.find('.image img').attr('src');
				$(this).find('figure img').first().attr('src',img);
			}

		}
	});
	window.mmCheckmark = '<svg class="mm-checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path class="mm-checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.9" fill="none"></path></svg>';

	window.checkVAS=function (){
		var madeUpdate = false;
		$('.extras-item-details.mm-active').each(function(index){
			if($(this).find('.checkbox-selector').length>0){
				if($(this).find('input[type=checkbox]').is(':checked') && $(this).find('.mm-checkmark').length<1){
					$(this).find('.checkbox').append(window.mmCheckmark);
					if($(this).hasClass('featured-vas-default-ldw')){//H0040 Support
						$('.mm-featured-vas-ldw').find('input[type=checkbox]').prop("checked", true);
						$('.mm-featured-vas-ldw').find('.checkbox').append(window.mmCheckmark);
					}else if($(this).hasClass('featured-vas-default-sirius')){
						$('.mm-featured-vas-sirius').find('input[type=checkbox]').prop("checked", true);
						$('.mm-featured-vas-sirius').find('.checkbox').append(window.mmCheckmark);
					}else if($(this).hasClass('featured-vas-default-fpo')){
						$('.mm-featured-vas-fpo').find('input[type=checkbox]').prop("checked", true);
						$('.mm-featured-vas-fpo').find('.checkbox').append(window.mmCheckmark);
					}
					madeUpdate = true;
				} else if(!$(this).find('input[type=checkbox]').is(':checked') && $(this).find('.mm-checkmark').length>0) {
					$(this).find('.mm-checkmark').remove();
					if($(this).hasClass('featured-vas-default-ldw')){//H0040 Support
						$('.mm-featured-vas-ldw').find('input[type=checkbox]').prop("checked", false);
						$('.mm-featured-vas-ldw').find('.mm-checkmark').remove();
					}else if($(this).hasClass('featured-vas-default-sirius')){
						$('.mm-featured-vas-sirius').find('input[type=checkbox]').prop("checked", false);
						$('.mm-featured-vas-sirius').find('.mm-checkmark').remove();
					}else if($(this).hasClass('featured-vas-default-fpo')){
						$('.mm-featured-vas-fpo').find('input[type=checkbox]').prop("checked", false);
						$('.mm-featured-vas-fpo').find('.mm-checkmark').remove();
					}
					madeUpdate = true;
				}
			} else if($('.qty-plus-proxy').length>0){
				var val=$(this).find("select").val();
				if(!isNaN(parseFloat(val)) && isFinite(val) && !$(this).find('.qty-plus-proxy-first').hasClass('qty-inactive')){
					$(this).find('.qty-value').text(val);
					$(this).find('.qty-plus-proxy-first').addClass('qty-inactive');
					$(this).find('.qty-control-set-multiple').removeClass('qty-inactive');
					madeUpdate = true;
				}else if(isNaN(parseFloat(val)) && $(this).find('.qty-plus-proxy-first').hasClass('qty-inactive')){
					$(this).find('.qty-plus-proxy-first').removeClass('qty-inactive');
					$(this).find('.qty-control-set-multiple').addClass('qty-inactive');
					madeUpdate = true;
				}
			}
		});
		if(madeUpdate===false && window.checkVASCount<20){
			setTimeout(window.checkVAS,500);
		}
	}

	$("body").on( "click", ".lb-content-box .extra-overlay,.rd-extra-remove-link", function(event){
		window.checkVASCount = 0;
		setTimeout(window.checkVAS,500);
	});


	$.initialize("#extras-list article header", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			var t = $(this).closest('article');
			$(this).next().addClass('vas-grid');
			//$(this).insertBefore(t.find('.vas-grid'));
			t.find('.vas-grid div:not(.vas-grid div div)').addClass('vas-tile');
		}
	});

	$.initialize("#extras-list", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$('.ancillaries-header').remove();
			var title=$("#steps li:nth-child(3) .wrapper").first().text();
			$(this).prepend('<h2 class="ancillaries-header mm-desktop-headline">'+title+'</div>');
			$(this).find('.ancillaries-header').clone().addClass('mm-mobile-headline').removeClass('mm-desktop-headline').insertBefore("#res-extras-page #steps");
		}
	});

	$.initialize("#res-extras-page button.primary", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$(this).text('Continue').wrap('<div class="ancillaries-btn-wrap"></div>');
		}
	});

	$.initialize(".extras-item-details", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$(this).find('.controls').prependTo($(this).find('.pricing'));


		$("#extras .controls .rd-full-link-extras").closest('.controls').find('strong').hide();

		if($(this).find('#quantity-options').length > 0){
			var values=$(this).find('#quantity-options').text();

			if(!isNaN(parseFloat(values)) && isFinite(values)){
				$(this).find('.controls').closest('.pricing').addClass('qty-custom-selector');

				var curValue=$(this).find('#quantity-options').val();
				var isDefault=false;
				if(!isNaN(parseFloat(curValue)) && isFinite(curValue)){
					curValue=$(this).find('#quantity-options').val();
				}else{
					isDefault=true;
					curValue=0;
				}

				$(this).find('.controls').append('<div class="qty-control-set"><a class="qty-plus-proxy qty-plus-proxy-first" href="javascript:void(0);"></a><div class="qty-control-set-multiple"><div class="qty-control-set-multiple-wrap"><a class="qty-minus-proxy" href="javascript:void(0);">-</a><span class="qty-label">QTY.</span><span class="qty-value">'+curValue+'</span><a class="qty-plus-proxy" href="javascript:void(0);">+</a></div></div></div>');

				if(isDefault){
					$(this).find('.qty-control-set-multiple').addClass('qty-inactive');
				}else{
					$(this).find('.qty-plus-proxy-first').addClass('qty-inactive');
				}
				$(this).find('.controls input[type=checkbox]').closest('div').hide();
			}else{ // non numeric selectbox
				$(this).find('#quantity-options').closest('.extra-options').addClass('ancillary-select-dropdown-outer');
				$(this).find('#quantity-options').closest('.selection').addClass('ancillary-select-dropdown');
				$(this).find('#quantity-options').before('<span>'+$(this).parent().closest('article').find('.col-headers .quantity').text()+'</span>')
			}
		}else{
			$(this).find('.controls input[type=checkbox]').after('<span class="check-custom-selector"></span>');
			$(this).find('.controls input[type=checkbox]').closest('div').addClass('checkbox-selector');
			if($(this).find('.controls input[type=checkbox]').prop('checked')){
				$(this).find('.checkbox').append(window.mmCheckmark);
			}
		}

		$(this).find('.price.full-height strong').first().prepend('+');
		var ancName=$(this).find('h3').text();
		var ancImg="";

		if(ancName.indexOf("Loss Damage Waiver")>-1 || ancName.indexOf("LDW")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-ldw-2.png)!';
		}else if(ancName.indexOf("NeverLost")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-gps.png)!';
		}else if(ancName.indexOf("Infant Child Seat")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-infant-seat.png)!';
		}else if(ancName.indexOf("Child Seat")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-toddler-seat.png)!';
		}else if(ancName.indexOf("Booster Seat")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-booster-seat.png)!';
		}else if(ancName.indexOf("Hand Controls")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-hand-controls.png)!';
		}else if(ancName.indexOf("Wheelchair Accessible Bus")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-bus.png)!';
		}else if(ancName.indexOf("Prepay the Fuel")>-1 || ancName.indexOf("Re-Fuel")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-prepay-fuel-2.png)!';
		}else if(ancName.indexOf("Navigation + Wi-Fi On Demand")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-connect.png)!';
		}else if(ancName.indexOf("SiriusXM")>-1){
			ancImg='#$(ContentManager:siriusxm-200x200.png)!';
		}else if(ancName.indexOf("Connect")>-1){
			ancImg='#$(ContentManager:hertz-ancillary-connect.png)!';
		}
		if(ancImg !== ""){
			$(this).find('.image img').attr('src', ancImg);
		}
		$(this).addClass('mm-vas-applied');
		}
	});

	$("body").on( "change", ".checkbox-selector input[type=checkbox]", function(event){
		$(this).closest('.checkbox').find('.mm-checkmark').remove();
		if (this.checked){
			$(this).closest('.checkbox').append(window.mmCheckmark);
		}
	});

	$("body").on( "click", ".qty-plus-proxy", function(event){
		var curValue=$(this).closest('.pricing').find('select').val();
		var isDefault=false;
		if(!isNaN(parseFloat(curValue)) && isFinite(curValue)){
			curValue=parseInt(curValue);
		}else{
			curValue=0;
			isDefault=true;
		}
		var newValue=curValue + 1;
		$(this).closest('.pricing').find('select option[value='+newValue+']').attr('selected','selected').trigger('change');
		$(this).closest('.qty-control-set').find('.qty-value').text(newValue);
		var nextValue=newValue + 1;
		if($(this).hasClass('qty-plus-proxy-first')){
			$(this).addClass('qty-inactive');
			$(this).closest('.qty-control-set').find('.qty-control-set-multiple').removeClass('qty-inactive');
		}
	});

	$("body").on( "click", ".qty-minus-proxy", function(event){
		var curValue=$(this).closest('.pricing').find('select').val();
		var isDefault=false;
		if(!isNaN(parseFloat(curValue)) && isFinite(curValue)){
			curValue=parseInt(curValue);
		}else{
			curValue=0;
			isDefault=true;
		}
		var newValue=curValue - 1;
		if(newValue < 0){ newValue=0 }
		if(newValue < 1 && isDefault === false && newValue !== curValue){
			$(this).closest('.pricing').find('select option').first().attr('selected','selected').trigger('change');
		}else if(newValue > 0 && newValue !== curValue){
			$(this).closest('.pricing').find('select option[value='+newValue+']').attr('selected','selected').trigger('change');
		}
		$(this).closest('.qty-control-set').find('.qty-value').text(newValue);
		var nextValue=newValue - 1;
		if(nextValue < 0){
			$(this).closest('.qty-control-set').find('.qty-control-set-multiple').addClass('qty-inactive');
			$(this).closest('.qty-control-set').find('.qty-plus-proxy-first').removeClass('qty-inactive');
		}
	});
}

} //End Ancillaries Page

/*-- Review and Book Page --*/
if(window.location.hash.indexOf("review-and-book") > -1){
	if(!$("body").hasClass('mm-review-and-book-page-active')){
		$("body").addClass('mm-review-and-book-page-active');

		$.initialize(".lb-content-box .updgrade-detail-overlay", function(){
			if(!$(this).hasClass('mm-active')){
				$(this).find('img').upsizeCarImage({
					carName: $(this).text()
				});
			}
		});

		$.initialize("#bookableSubmit.submit-button-full", function(){
			var t=$(this);
			if(!t.hasClass('mm-active')){
				t.addClass('mm-active');
				var c = t.closest('#res-bookable-page');
				t.text('Reserve').wrap('<div class="bookable-btn-wrap"><div class="bookable-btn-row"><div class="bookable-btn-col bookable-btn-col-right"><div class="bookable-btn-row-inner"><div class="bookable-btn-col-inner bookable-btn-col-inner-right"></div></div></div></div></div>');

				c.find('.bookable-btn-col-right').before('<div class="bookable-btn-col bookable-btn-col-left"></div>');
				c.find('.bookable-btn-col-inner-right').before('<div class="bookable-btn-col-inner bookable-btn-col-inner-left"></div>');
				c.find('.bookable-btn-col-left').text(c.find('#approx-rate-details .total .rd-name').text());
				c.find('.bookable-btn-col-inner-left').text(c.find('#approx-rate-details .total .rd-price').text());

				c.find('.bookable-btn-col-inner-left').html(function (i, html){
					return html.replace('USD', '<span class="bookable-currency">USD</span>');
				});

				c.find('.bookable-btn-row').after('<div class="bookable-btn-full"></div>');
				c.find('.bookable-btn-wrap').after('<div class="bookable-rate-details"></div>');
				c.find('#location-notes').first().appendTo(c.find('.bookable-rate-details'));
				c.find('#approx-rate-terms .submit p').first().appendTo(c.find('.bookable-rate-details'));
				c.find('.bookable-rate-details p').prepend('Rate is guaranteed. Taxes, fees  and extras are subject to change.');

				c.find('.terms-conditions-checkbox').insertBefore(c.find('.bookable-btn-wrap')).wrap('<div class="bookable-terms-and-conditions"></div>');
				c.find('#termsAndConditionsAccepted').closest('label').attr('for',c.find('#termsAndConditionsAccepted').attr('id'));
				c.find('.submit-button p').appendTo(c.find('.bookable-btn-full'));
				c.find('.bookable-btn-full').html(function (i, html){
					return html.replace('"Submit"', '"Reserve"');
				});
			};
		});

		$.initialize("#res-bookable-page .bookable-main-container #canSpamElectionCheckbox", function(){
			var t=$(this);
			if(!t.hasClass('mm-active')){
				t.addClass('mm-active');
				t.closest('label').wrapInner('<div class="can-spam-inner"></div>');
				t.closest('label').find('.can-spam-inner input').insertBefore(t.closest('label').find('.can-spam-inner'));
				//t.closest('label').find('.can-spam-inner').text('Yes - I want to receive promotional emails from Hertz.');
			}
		});


		$.initialize("#res-bookable-page .bookable-main-container", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			$('.review-and-book-header').remove();
			t.find('#important').insertAfter(t.find("#information"));
			var title=$("#steps li:nth-child(4)").text();
			title=title.split(':');
			t.find('legend').first().before('<h2 class="review-and-book-header mm-desktop-headline">'+title[title.length-1]+'</div>');
			t.find('.review-and-book-header').clone().addClass('mm-mobile-headline').removeClass('mm-desktop-headline').insertBefore("#res-bookable-page #steps");
			t.find('#customer-name-fields .content-half').parent().addClass('bookable-row');
			t.find('#homeAddressLine1, #homeCity, #homeZip, #creditCardType, #nonMemberFrequentTravelerProgramList, #businessAddressLine1, #businessCity, #businessZip').closest('div').parent().addClass('bookable-row');
			t.find('#creditCardNumber').closest('.bookable-row').find('.notIncludeSpaces').addClass('ccn-note').insertAfter(t.find('#creditCardNumber').closest('.bookable-row'));
			t.find('#errorsHomePhone').insertBefore(t.find('#homeZip').closest('.bookable-row'));
			t.find('#errorsFTField').insertBefore(t.find('#nonMemberFrequentTravelerProgramList').closest('.bookable-row'));
			t.find('#homeCountryStateProvince').closest('.content-half').insertAfter(t.find('#homeCity').closest('.content-half'));
			t.find('#homeCountryStateProvince').insertAfter(t.find('#homeCountryStateProvince').closest('label'));
			t.find('#homePhone').closest('.content-half').insertAfter(t.find('#homeZip').closest('.content-half'));
			t.find("select[name='businessCountryStateProvince']").closest('.content-half').insertAfter(t.find("#businessCity").closest('.content-half'));
			t.find("#businessPhone").closest('.content-half').insertAfter(t.find("#businessZip").closest('.content-half'));
			t.find('#email-fields').find('.content-half').first().parent().addClass('bookable-row');
			t.find('#email-fields').find('.content-half').last().appendTo(t.find('#email-fields .bookable-row'));

			t.find('#creditCardType').insertAfter(t.find('#creditCardType').closest('label'));
			t.find('#ccExpirationMonth').closest('.content-half').wrap('<div class="bookable-row bookable-row-mobile" id="bookableCCExpRow"></diV>');
			t.find('#bookableCCExpRow').append('<div class="content-half" id="bookableCCExpirationYear"><label for="ccExpirationYear">Expiration:</label></div>');
			t.find('#ccExpirationMonth').closest('.content-half').find('label').attr('for','ccExpirationMonth').text('Expiration:');
			t.find('#ccExpirationYear').appendTo(t.find('#bookableCCExpirationYear'));

			t.find('#transPromoMobilePhoneCountryCodeBox').parent().wrapInner('<div class="bookable-row"></div>');
			t.find('#transPromoMobilePhoneCountryCodeBox, #transPromoMobilePhoneBox').addClass('bookable-col').wrap('<div class="content-half"></div>');
			t.find('#transPromoMobilePhoneDiv .inputs').removeClass('inputs');
			if(t.find('#flight-services').length > 0){
				t.find('#flight-services').closest('.clearfix').wrapInner('<div class="bookable-row" id="fsBookableRow"></div>');
			}
			t.find(".bookable-row .content-half").wrap('<div class="bookable-col"></div>');
			t.find(".bookable-row").each(function(index){
				$(this).find('.bookable-col').first().addClass('bookable-col-left');
				$(this).find('.bookable-col').last().addClass('bookable-col-right');
			});

			var fsBookableRow = t.find('#fsBookableRow');
			var fsBookableText = 'In case of a delay, we can hold your vehicle. Would you like to add flight information?';
			if(fsBookableRow.length > 0){
				fsBookableRow.find('#autocomplete-container').appendTo(fsBookableRow.find('.bookable-col-left'));
				fsBookableRow.find('#autocomplete-radio-buttons').appendTo(fsBookableRow.find('.bookable-col-right'));
				if(fsBookableRow.find('#selectedAirline  option[value="UNKN"]').length > 0){
					fsBookableRow.find('#selectedAirline').val('UNKN').trigger('change');
				}else {
					fsBookableText='In case of a delay, we can hold your vehicle. Please add flight information.';
				}
			}

			t.find('#companyOrderNumber').val('');
			var arrivalDescription = t.find("#arrival-info p:contains('Please add your flight information. These details will help us keep track of any changes in your flight and better prepare for your arrival.')");
			if(arrivalDescription.length > 0){
				arrivalDescription.hide();
			}

			var arrivalHeader = t.find(".arrival-info-heading:contains('Arrival/Flight Information')");
			if(arrivalHeader.length > 0){
				arrivalHeader.text('Additional Information');
			}

			var personalHeader = t.find("legend span:contains('Your Personal Information')");
			if(personalHeader.length > 0){
				personalHeader.text('Personal Information');
			}

			var ccHeader = t.find("legend span:contains('Your Credit Card Information'), .credit-card-title:contains('Your Credit Card Information')");
			if(ccHeader.length > 0){
				ccHeader.text('Payment Information');
			}

			var billingHeader = t.find("legend span:contains('Your Billing Information:')");
			if(billingHeader.length > 0){
				billingHeader.text('Billing Information');
			}

			var ccText = t.find("#creditCard .gray-container p:contains('At the time of rental, you MUST produce the same credit card you paid online and valid driver’s license in your name.')");

			if(ccText.length>0){
				//non member always only add a new card for members
				var ccTextContainer = ccText.closest('.gray-container');
				ccTextContainer.wrapInner('<div class="cc-text-hidden"></div>');
				ccTextContainer.prepend('<p class="cc-text-read-more-description">At the time of rental, you MUST produce the same credit card you paid online and valid driver’s license in your name. <a href="#" class="cc-text-read-more-link">Read More</a></p>');

				ccText.html(function (i, html){
					return html.replace('At the time of rental, you MUST produce the same credit card you paid online and valid driver’s license in your name.', '');
				});


				var bookableGoldMsg = t.find('#bookableCreditCardGoldMsg');
				if(bookableGoldMsg.length>0){
					ccTextContainer.append('<p>'+bookableGoldMsg.find('.errorMessage-container p').text()+'</p>');
					bookableGoldMsg.hide();
				}

				ccTextContainer.append('<p>To qualify for a rental using a debit card, you will be required to provide proof of a return airline flight and present two (2) valid forms of identification. Debit cards are accepted for payment at the end of your rental. Please refer to Forms of Payment in the Rental Qualifications & Requirements for complete information.</p>');
			}
			function toggleSet(target, text){
				var id = 'toggleSet_'+target.find('input,select').first().attr('id');
				target.wrap('<div class="bookable-toggle-section" id="'+id+'"><div class="bookable-toggle-section-inner"></div></div>');
				var targetParent = target.closest('.bookable-toggle-section');
				targetParent.prepend('<p class="bookable-toggle-title">'+text+'</p>')
				targetParent.find('.bookable-toggle-title').after('<div class="bookable-toggle-radio-set"><label for="'+id+'_radio_yes" class="bookable-toggle-radio-first"><input type="radio" value="Yes" id="'+id+'_radio_yes" name="'+id+'_radio" class="toggle-radio-btn" /><span>Yes</span></label><label for="'+id+'_radio_no"><input type="radio" value="No" id="'+id+'_radio_no" name="'+id+'_radio" class="toggle-radio-btn" checked /><span>No</span></label></div>');
			}
			var toggleSelectors = [
				['#fsBookableRow', fsBookableText],
				['#misc-info', 'Do you have a Company Order/Billing Reference Number?']
			];
			var toggleCur = '';
			for(var i=0; i<toggleSelectors.length; i++){
				toggleCur = t.find(toggleSelectors[i][0]);
				if(toggleCur.length > 0){
					toggleSet(toggleCur, toggleSelectors[i][1]);
				}
			}
			if(fsBookableRow.find('#selectedAirline  option[value="UNKN"]').length < 1){
				fsBookableRow.closest('.bookable-toggle-section-inner').show();
				fsBookableRow.closest('.bookable-toggle-section').find('.bookable-toggle-radio-set').hide();
			}
			t.find('.terms').first().clone().addClass('terms-first').prependTo('#important');
			$('#important .terms-first h2').addClass('inactive');
			$('#important .terms-first .terms-container').hide();
			$("#bookableMainContainer #vehicleUpsells").insertBefore("#bookableMainContainer");
			$("#bookableMainContainer").wrapInner('<div class="review-and-book-row"><div class="review-and-book-col review-and-book-col-left"></div></div>');
			$("#bookableMainContainer .review-and-book-row").append('<div class="review-and-book-col review-and-book-col-right" id="reviewAndBookCost"></div>');
			if(t.find('#pay-with-your-points').length > 0 && t.find('#creditCard').length > 0){
				$('#pointsSection').remove();
				t.find('#creditCard').before('<div id="pointsSection"></div>');
				var pSect=$('#pointsSection');
				pSect.append('<fieldset><legend class="hertz-gold-title">Your Hertz Gold Plus Points Information</legend>');
				t.find('#pay-with-your-points').appendTo(pSect);
				if(pSect.find('.noPoints').length>0){
					pSect.find('.noPoints').prepend('<div class="icons-info"></div>');
				}
			}
			if($("#rd-rental-total").length > 0){
				$("#reviewAndBookCost").append('<div class="bookable-cost-header-row"><div class="bookable-cost-header-col bookable-cost-header-col-left">Cost Summary</div><div class="bookable-cost-header-col bookable-cost-header-col-right"><a href="javascript:void(0);" class="display_quote_details-proxy">View Details</a></div></div>');
				$('#reviewAndBookCost').append('<div id="rd-main"></div>');
				t.closest('#res-bookable-page').find('#itinerary-info').clone(true).removeClass('mm-hide').appendTo("#reviewAndBookCost #rd-main");
				if($('#reviewAndBookCost #rd-pay-now .rd-title .pay-now-overlay-trigger').length<1){
					$('#reviewAndBookCost #rd-pay-now .rd-title').first().append('<a href="javascript:void(0);" class="pay-now-overlay-trigger"><img src="#$(ContentManager:hertz-icon-info.png)!" width="20"></a>');
				}
				t.find("#reviewAndBookCost .rd-opt-detail-link1 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-open-proxy');
				t.find("#reviewAndBookCost .rd-opt-detail-link2 .rd-view-options-link").first().removeClass('rd-view-options-link').addClass('rd-view-options-link-close-proxy');
				var summaryCostSplit=$('#rdReviewAndBookSummary').find('.rd-subtotal').text().split(' ');
				if(summaryCostSplit.length > 1){
					$('#rdReviewAndBookSummary').find('.rd-subtotal').html(summaryCostSplit[0]+' <span class="review-and-book-summary-currency">'+summaryCostSplit[1]+'</span>');
				}
				$('#reviewAndBookCost #rd-more .rd-info').html(function (i, html){
					return html.replace('Rate is guaranteed.  Taxes, fees and extras, if not included in the Rate, are subject to change.', '');
				});
				$('#reviewAndBookCost #rd-rental-total .rd-subtotal').html(function (i, html){
					return html.replace('USD', '<span class="bookable-currency">USD</span>');
				});
			}
			if( t.find("input[name='authorizationNumber']").closest('.content-half').length > 0){
				t.find("input[name='authorizationNumber']").attr('id', 'authorizationNumber');
				t.find("input[name='authorizationNumber']").closest('.content-half').contents().eq(0).wrap('<label for="authorizationNumber"/>')
			}
			t.find(".notIncludeSpaces").each(function(index){
				$(this).insertAfter($(this).closest('.content-half'));
			});
			t.find("input[type=radio]").each(function(index){
				$(this).closest('.content').addClass('form-radio');
			});
			if(t.find('#firstName').val()=="" && t.find('#lastName').val()=="" && t.find('#firstName').length > 0 && t.find('#lastName').length > 0){
				$('.bookableSubmitBtn').prop("disabled",true);
			}else{
				$('.bookableSubmitBtn').prop("disabled",false);
			}
			if(t.find('#member-email-info').find('div').length>0){
				t.find('#arrival-misc-info').append('<div id="bookableMemberSection"></div>');
				t.find('#personal-data').closest('fieldset').hide();
				personalHeader.closest('legend').hide();
				t.find('#member-email-info').appendTo(t.find('#bookableMemberSection'));
				t.find('#bookableCustSection').appendTo(t.find('#bookableMemberSection'));
				t.find("#bookableCustSection #customer-opt-in div:contains('An email confirmation will be sent to the email address in your profile.')").hide();
				t.find('#cb_privacy_container').removeClass('hidden').css('display','none');
			}
			if(t.find('#eMemberCreditCardList').length>0){
				if(t.find("input[name='creditCardSelector']").val() == 'profile'){
					$('#bookableCreditCardTable').hide();
				} else {
					$('#eMemberCreditCardList').closest('.content-half').parent().hide();
				}

				t.find('#creditCard legend').after('<div class="bookable-toggle-radio-set" id="bookableCCToggle"></div>');
				t.find("#creditCard input[name='creditCardSelector']").closest('label').wrapInner('<span></span>').appendTo('#bookableCCToggle');
				t.find("#creditCard .content.form-radio").hide();
				t.find("#bookableCreditCardGoldMsg").insertAfter(t.find('#creditCard fieldset').first());
				t.find('#bookableCCToggle label').first().addClass('bookable-toggle-radio-first');
				t.find('#bookableCCToggle label').each(function(index){
					$(this).find('input').prependTo($(this));
				});
				t.find('#creditCard .content-half').each(function(index){
					if($(this).height() < 4 && $(this).is(":visible")){
						$(this).hide();
					}
				});
			}

			var freqTravlr = t.find('#frequent-traveler');
			if(freqTravlr.length>0){

				if(t.find("input[name='ftSelector']").val() == 'hertz1awards'){
					t.find('#frequent-traveling-member').hide();
					t.find('#nonMemberFrequentTravelerProgramList').closest('.bookable-row').wrap('<div class="bookable-freq-other-row"></div>');
					t.find('.bookable-freq-other-row').hide();
				}

				if(t.find('#billing-info').length>0){
					freqTravlr.insertBefore(t.find('#billing-info'));
				}else{
					freqTravlr.insertBefore(t.find('#arrival-misc-info'));
				}
				freqTravlr.prepend('<div class="bookable-toggle-radio-set" id="bookableFreqTravlerToggle"></div>');
				freqTravlr.find('.form-radio label').wrapInner('<span></span>').appendTo('#bookableFreqTravlerToggle');
				freqTravlr.find('.content.form-radio').hide();
				t.find('#bookableFreqTravlerToggle label').first().addClass('bookable-toggle-radio-first');
				t.find('#bookableFreqTravlerToggle label').each(function(index){
					$(this).find('input').prependTo($(this));
				});

				var replacedText=false;
				var msg = 'Frequent Flyer Surcharge of up to $1.00 per day may apply when renters choose to take miles or credits from a U.S. and Canadian Frequent Flyer program.';
				t.find('.frequent-traveler-info-container').html(function (i, html){

					if(html.indexOf(msg)>0){
						replacedText=true;
						html = html.replace(msg, "");
					}
					return html;
				});
				if(replacedText===true){
					t.find('.bookable-freq-other-row #bookableFFSurcharge').remove();
					t.find('.bookable-freq-other-row').append('<div id="bookableFFSurcharge"><p>'+msg+'</p></div>')
				}
			}

			var multiAddress = t.find("#billing-info input[name='addressType']");
			if(multiAddress.length>0){
				var multiAddressContainer = multiAddress.first().closest('.gray-container');
				multiAddressContainer.hide();
				multiAddressContainer.after('<div class="bookable-toggle-radio-set" id="bookableMultiAddressToggle"><p class="bookable-toggle-title">Use the address from my profile:</p></div>');
				multiAddress.each(function(index){
					$(this).appendTo('#bookableMultiAddressToggle')
					if($(this).val()=="H"){
						$(this).attr('id','bookableAddressTypeHome').wrap('<label for="bookableAddressTypeHome"></label>')
						$(this).closest('label').append('<span>Home</span>');
						$(this).closest('label').addClass('bookable-toggle-radio-first');
					} else if($(this).val()=="B"){
						$(this).attr('id','bookableAddressTypeBusiness').wrap('<label for="bookableAddressTypeBusiness"></label>')
						$(this).closest('label').append('<span>Business</span>');
					}
				});
			}

			var pointsSection = t.find('#pointsSection');
			if(pointsSection.length>0){
				pointsSection.insertAfter(t.find('#creditCard fieldset legend').first());
				pointsSection.find('#points-available').hide();
				pointsSection.find('.choose-rewards label').first().hide();
				pointsSection.find('legend').first().closest('fieldset').hide();
				pointsSection.find('.pointsAvailable').hide();
				var totalPoints = pointsSection.find('.totalPoints').text();
				if(parseInt(totalPoints)){
					totalPoints = parseInt(totalPoints).toLocaleString('en');
					pointsSection.find('.choose-rewards label').first().before('<p class="bookable-toggle-title bookable-toggle-title-mrg-0">Hertz Reward Points - Current Balance: '+totalPoints+'</p>');
				}
			}
		}
		});

		$.initialize("#res-bookable-page .field-error-list li", function() {
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			var masterList = $('#res-bookable-page #error-list');

			if($(this).closest('#error-list').length<1){
				var txt = $(this).text();
				masterList.find("li:contains('"+txt+"')").addClass('hide-overview-error');
				if(txt.indexOf('[DE')==-1){
					txt = txt.replace(/\[.*?\]/g, "");
				}
				$(this).text(txt);
			}
			if($(this).closest('#bookableCreditCardTable').length>0){
				$(this).closest('ul').addClass('cc-error-list').insertAfter($('#creditCard .credit-card-title').first());
			}

			if(masterList.find('li').not(".hide-overview-error").length>0){
				masterList.show();
			}else{
				masterList.hide();
			}
		}
		});

		$.initialize("#cc-disclaimer-content", function() {
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
				$(this).closest(".lb-foreground").css('display', 'none');
				$(this).closest(".lb-foreground-cont").find('.lb-close').trigger('click');
				$('#bookableMainContainer #bookableCreditCardTable').find('#BookableCCDisclaimeContent').remove();
				$('#bookableMainContainer #bookableCreditCardTable').append('<div id="BookableCCDisclaimeContent">'+$(this).html()+'</div>');
		}
		});

		$.initialize("#vehicleUpsells", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$(this).insertAfter('#res-bookable-page section#approx-rate');
		}
		});

		$.initialize("#vehicleUpsells .vehContent-half, #vehicleUpsells .vehContent", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			t.find('.img-container img').upsizeCarImage({
				carName: $(this).find('figcaption b').text()
			});


			var text = t.find('figcaption span').first().text();
			var price = text.substring(text.lastIndexOf(",") + 1);
			if(price.indexOf('USD')>-1){
				t.find('.button-container').append('<p class="vech-upsell-price">'+price+' Total</p>');
			}
			text = t.find('figcaption span b').first().text();
			var model = text.substring(text.lastIndexOf(")") + 1);
			var title = t.find('h3');
			title.attr('data-upgrade-text', title.find('div').first().text());
			title.find('.hidden').remove();
			if(title.text().indexOf('Original Vehicle') > -1) {
				title.text('Original Vehicle: '+model);
			} else if (title.text().indexOf('Upgrade for') > -1) {
				var curText = title.text();
				curText = curText.replace('Upgrade for', 'Upgrade to a '+model+' or similar for');
				title.text(curText);
			} else if (title.text().indexOf('No Additional Charge') > -1) {
				var curText = title.text();
				curText = curText.replace('No Additional Charge', 'No additional charge for a '+model+' or similar');
				title.text(curText);
			}

			t.find('a.details').appendTo(t.find('.button-container'));

		}
		});

		$("body").on( "change", "input[name='ftSelector']", function(event){
			var t=$(this);
			if(t.val() == 'hertz1awards'){
				$('#frequent-traveling-member').stop(true, false).slideUp( 300 );
				$('.bookable-freq-other-row').stop(true, false).slideUp( 300 );

			} else if(t.val() == 'profile'){
				$('#frequent-traveling-member').stop(true, false).slideDown( 300 );
				$('.bookable-freq-other-row').stop(true, false).slideUp( 300 );
			} else {
				$('#frequent-traveling-member').stop(true, false).slideUp( 300 );
				$('.bookable-freq-other-row').stop(true, false).slideDown( 300 );
			}
		});



		$("body").on( "change", "input[name='creditCardSelector']", function(event){
			var t=$(this);
			if(t.val() == 'profile'){
				$('#bookableCreditCardTable').stop(true, false).slideUp( 300 );
				$('#eMemberCreditCardList').closest('.content-half').parent().slideDown( 300 );
			} else {
				$('#bookableCreditCardTable').stop(true, false).slideDown( 300 );
				$('#eMemberCreditCardList').closest('.content-half').parent().slideUp( 300 );
			}
		});


		$("body").on( "change", ".toggle-radio-btn", function(event){
			var t=$(this);
			t.closest('.bookable-toggle-section').find('.bookable-toggle-section-inner').stop(true, false).slideToggle( 300 );
			var parent = t.closest('.bookable-toggle-section');
			if(parent.find('#selectedAirline').length > 0){
				if(t.val() == 'No'){
					parent.find('#selectedAirline').val('UNKN').trigger('change');
					parent.find('#flightNumber').val('');
				} else {
					parent.find('#selectedAirline').prop("selectedIndex",0).trigger('change');
				}
			} else if(parent.find('#companyOrderNumber').length > 0){
				if(t.val() == 'No'){
					parent.find('#companyOrderNumber').val('');
				}
			}

		});

		$("body").on( "click", "#res-bookable-page .bookablePrivacyOptInLink", function(event){
			event.preventDefault();
			$(this).closest('#bookableCustSection').find('#cb_privacy_container').stop(true, false).slideToggle( 300 );
		});

		$("body").on( "click", ".cc-text-read-more-link", function(event){
			event.preventDefault();
			var ccHiddenContainer = $(this).closest('.gray-container').find('.cc-text-hidden');
			ccHiddenContainer.toggleClass('active').stop(true, false).slideToggle( 300 );
			if(ccHiddenContainer.hasClass('active')) {
				$(this).text('Read Less');
			} else {
				$(this).text('Read More');
			}
		});

		$("body").on( "click", ".display_quote_details-proxy", function(event){
			$("#display_quote_details").trigger('click');
		});

		$("body").on( "change keyup", "#res-bookable-page #firstName, #res-bookable-page #lastName", function(event){
			if($('#res-bookable-page #firstName').val()=="" && $('#res-bookable-page #lastName').val()=="" && $('#res-bookable-page #firstName').length > 0 && $('#res-bookable-page #lastName').length > 0){
				$('.bookableSubmitBtn').prop("disabled",true);
			}else{
				$('.bookableSubmitBtn').prop("disabled",false);
			}
		});
	}

} //End Review and Book Page

var resFlowHTML = '<div class="confirmation-resflow-box-link-row"><div class="confirmation-resflow-box-link-col confirmation-resflow-box-link-col-left" id="confirmationResflowBoxLinksLeft"></div><div class="confirmation-resflow-box-link-col confirmation-resflow-box-link-col-right" id="confirmationResflowBoxLinksRight"></div></div><div class="confirmation-prepay-note"><p>If you have prepaid for your rental, don’t forget to bring the same credit card you used to PrePay when you pickup your car.</p></div><div class="confirmation-row"><div class="confirmation-col confirmation-col-left" id="confColL"></div><div class="confirmation-col confirmation-col-right" id="confColR"></div></div>';


/*-- Confirmation Page --*/

if(window.location.hash.indexOf("confirmation") > -1 || location.search.indexOf('confirmationNumber=')>=0 || window.location.hash.indexOf("review") > -1){
if(!$("body").hasClass('mm-confirmation-page-active')){
	$("body").addClass('mm-confirmation-page-active');
	$.initialize("#res-confirmation-page #main-content", function(){
		var t = $(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			var ageCDP = t.find('.cdpName:contains("204546")');
			if(ageCDP.length>0){
				ageCDP.html('Promotional Coupon : 204546<br> Estimated total quoted in reservation will not reflect the discount, the discount will be applied at time of rent.');
			}
			t.find('#important-info').appendTo(t);
			t.find('#res-disclaimer').appendTo(t);
			t.find('#conf-button-cont').appendTo(t);
			if(t.find('#conf-button-cont label').length < 1){t.find('#conf-button-cont').hide()}else{t.find('#conf-button-cont #tcCheckBox').prependTo(t.find('#res-prepay-terms-accept'))}
			t.find('#res-warnings,#res-terms-cont').addClass('expandable-section');
			t.find('#res-warnings header,#res-terms-cont header').addClass('expandable-section-btn').addClass('inactive');
			t.find('#res-warnings ul,#res-terms').wrap('<div class="expandable-section-content"></div>');
			$("#confirmationResflowBoxLinks").empty();
			$("#confColL").empty();
			$("#confColR").empty();
			$("#res-summary-box").after(html);
			t.find(".print-cont").insertBefore(".conf-summary-buttons");
			t.find(".conf-summary-buttons .primary").first().appendTo("#confirmationResflowBoxLinksLeft");
			t.find(".conf-summary-buttons").appendTo("#confirmationResflowBoxLinksRight");
			if($('#res-review-page-container').length > 0 && $(".confirmation-hero-image").length < 1){
				$("#res-review-page-container").prepend('<div class="confirmation-hero-image"></div>');
			}else if( $(".confirmation-hero-image").length < 1){
				$("#res-confirmation-page-container").prepend('<div class="confirmation-hero-image"></div>');
			}
			var headline=t.find('#res-summary-box h3').text();
			if(headline.indexOf('Thanks for Traveling at the Speed of Hertz®') > -1){
				headline=headline.replace('Thanks for Traveling at the Speed of Hertz®', '');
				headline=headline.replace('!', '');
				headline=$.trim(headline.toLowerCase());
				headline=headline.charAt(0).toUpperCase() + headline.slice(1);
				var headlineSplit=headline.split(' ');
				t.find('#res-summary-box h3').text('Thank you, '+headlineSplit[0]);
			}

			t.find('.rd-vehicle figure img').upsizeCarImage({
				carName: $(this).find('.rd-vehicle .rd-info-left').text()
			});

			t.find('#res-summary-box').append('<div class="itin-expand-ovrvw-row itin-expand-ovrvw-arrow"><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-left" id="itineraryConfirmationLeft"></div><div class="itin-expand-ovrvw-col itin-expand-ovrvw-col-right" id="itineraryConfirmationRight"></div></div>');

			var pickupLocation="";
			var pickupTime="";
			var pickupDate="";
			var pickupDay="";
			var dropoffLocation="";
			var dropoffTime="";
			var dropoffDate="";
			var dropoffDay="";

			function removeLabel(elementNode){
				var value="";
				if(elementNode.length > -1){
					var newNode=elementNode.clone();
					newNode.find('label').remove();
					value=$.trim(newNode.text());
				}
				return value;
			}

			function formatSummaryTime(elementValue){
				var value="";
				value=elementValue.match(/\d\d:\d\d.*/g);
				value=value.toString();
				value=value.replace(/^0+/, '');
				return value;
			}

			function formatSummaryDate(elementValue){
				var value="";
				value=elementValue.split(",");
				if(value.length >= 2){
					value=value[1];
				}
				return value;
			}
			function formatSummaryDay(elementValue){
				var value="";
				value=elementValue.split(",");
				if(value.length >= 2){
					value=value[0];
				}
				if(value !==''){
					value+=', ';
				}
				return value;
			}

			if($('#res-itinerary-2 .pickup-location .int-loc-cont').length > 0){
				var clone1=$('#res-itinerary-2 .pickup-location .int-loc-cont').clone();
				clone1.find('div').remove();
				clone1.find('section').remove();
				pickupLocation=clone1.text();
				var pickupTimeFull=removeLabel($('#res-itinerary-2 .itn-pickup-time').first());
				pickupTime=formatSummaryTime(pickupTimeFull);
				pickupDate=formatSummaryDate(pickupTimeFull);
				pickupDay=formatSummaryDay(pickupTimeFull);
			}

			if($('#res-itinerary-2 .return-location .int-loc-cont').length > 0){
				var clone2=$('#res-itinerary-2 .return-location .int-loc-cont').clone();
				clone2.find('div').remove();
				clone2.find('section').remove();
				dropoffLocation=clone2.text();
				var dropoffTimeFull=removeLabel($('#res-itinerary-2 .itn-return-time').first());
				dropoffTime=formatSummaryTime(dropoffTimeFull);
				dropoffDate=formatSummaryDate(dropoffTimeFull);
				dropoffDay=formatSummaryDay(dropoffTimeFull);
				$('#res-itinerary-2 .return-location').appendTo($('#res-itinerary-2 .pickup-location'));
			}

			if($('#res-itinerary-2 .itn-same-location').length > 0){
				var clone=$('#res-itinerary-2 .itn-same-location .int-loc-cont').clone();
				clone.find('div').remove();
				clone.find('section').remove();
				pickupLocation=clone.text();
				dropoffLocation=pickupLocation;
				var pickupTimeFull=removeLabel($('#res-itinerary-2 .itn-pickup-time').first());
				pickupTime=formatSummaryTime(pickupTimeFull);
				pickupDate=formatSummaryDate(pickupTimeFull);
				pickupDay=formatSummaryDay(pickupTimeFull);
				var dropoffTimeFull=removeLabel($('#res-itinerary-2 .itn-return-time').first());
				dropoffTime=formatSummaryTime(dropoffTimeFull);
				dropoffDate=formatSummaryDate(dropoffTimeFull);
				dropoffDay=formatSummaryDay(dropoffTimeFull);
			}

			function formatLinkDate(dateNum){
				dateNum = parseInt(dateNum);
				if(dateNum<=9){
					dateNum='0'+dateNum;
				}
				return dateNum;
			}
			function formatLinkDate(dateString){
				var date=dateString.split(",");
				if(date.length >= 2){
					var monthAndDay=$.trim(date[1]).split(" ");
					var m = '';
					if(monthAndDay[0].indexOf('Jan')>-1){
						m='01';
					}else if(monthAndDay[0].indexOf('Feb')>-1){
						m='02';
					}else if(monthAndDay[0].indexOf('Mar')>-1){
						m='03';
					}else if(monthAndDay[0].indexOf('Apr')>-1){
						m='04';
					}else if(monthAndDay[0].indexOf('May')>-1){
						m='05';
					}else if(monthAndDay[0].indexOf('Jun')>-1){
						m='06';
					}else if(monthAndDay[0].indexOf('Jul')>-1){
						m='07';
					}else if(monthAndDay[0].indexOf('Aug')>-1){
						m='08';
					}else if(monthAndDay[0].indexOf('Sep')>-1){
						m='09';
					}else if(monthAndDay[0].indexOf('Oct')>-1){
						m='10';
					}else if(monthAndDay[0].indexOf('Nov')>-1){
						m='11';
					}else if(monthAndDay[0].indexOf('Dec')>-1){
						m='12';
					}
					d=monthAndDay[1];
					var yearAndTime=$.trim(date[2]).split(" ");
					var y=yearAndTime[0];
					return y+'-'+m+'-'+d;
				}
			}

			t.find('#placePassConf').remove();
			t.find('#itinerary-cont').append('<div id="placePassConf" data-itnStart="'+formatLinkDate(pickupTimeFull)+'" data-itnEnd="'+formatLinkDate(dropoffTimeFull)+'"></div>');

			var locCheck = 0;
			var locInt = setInterval(function(){
				locCheck++;
				if (typeof(s) != "undefined"){
					if (typeof(s.eVar3) != "undefined"){
						var adContainer = $('#placePassConf');
						adContainer.empty();
						var adLink = 'https://plus.hertz.com/property/'+s.eVar3+'?endDate='+adContainer.attr('data-itnEnd')+'&startDate='+adContainer.attr('data-itnStart')+'&utm_source=Hertz&utm_medium=Web&utm_campaign=ResFlow&utm_content=ConfirmationMax';
						adContainer.html('<a href="'+adLink+'" class="conf-placepass-desktop" target="_blank"><img src="#$(ContentManager:HertzPlus_Conf_Banner_10_26.jpg)!" alt=""></a><a href="'+adLink+'" class="conf-placepass-mobile" target="_blank"><img src="#$(ContentManager:hertz-confirmation-placepass-350x200.jpg)!" alt=""></a>');
						clearInterval(locInt);
					}
				}
				if(locCheck>100){
					clearInterval(locInt);
				}
			}, 20);

			var overviewSnippet='<div class="itin-expand-ovrvw-date"></div><div class="itin-expand-ovrvw-type"></div><div class="itin-expand-ovrvw-location"></div><div class="itin-expand-ovrvw-time"></div>';

			var itnConfLeft = $('#itineraryConfirmationLeft');
			var itnConfRight = $('#itineraryConfirmationRight');
			if(pickupLocation !== ""){
				itnConfLeft.append(overviewSnippet);
				itnConfLeft.find('.itin-expand-ovrvw-location').text(pickupLocation);
				itnConfLeft.find('.itin-expand-ovrvw-date').text(pickupDay+pickupDate);
				itnConfLeft.find('.itin-expand-ovrvw-time').text(pickupTime);
			}
			if(dropoffLocation !== ""){
				itnConfRight.append(overviewSnippet);
				itnConfRight.find('.itin-expand-ovrvw-location').text(dropoffLocation);
				itnConfRight.find('.itin-expand-ovrvw-date').text(dropoffDay+dropoffDate);
				itnConfRight.find('.itin-expand-ovrvw-time').text(dropoffTime);
			}
			$("#calendar-options").appendTo(t.find('#res-summary-box'));

			var vehicleType="";

			if(t.find("#rd-main .rd-vehicle .rd-link-right").length > 0){

				vehicleType=$("#rd-main .rd-vehicle .rd-link-right").next().text();

				var vehicleTypeSplit=vehicleType.split('(');
				vehicleType=vehicleTypeSplit[0].toString();

				if(vehicleType.indexOf('Passenger') > 0){
					vehicleTypeSplit=vehicleType.split('Passenger');
					vehicleType=vehicleTypeSplit[1].toString();
				}

				if(vehicleType.indexOf('2 or 4 Door') > 0){
					vehicleTypeSplit=vehicleType.split('2 or 4 Door');
					vehicleType=vehicleTypeSplit[0].toString();
				}

				if(vehicleType.indexOf('2 or 4 dr.') > 0){
					vehicleTypeSplit=vehicleType.split('2 or 4 dr.');
					vehicleType=vehicleTypeSplit[0].toString();
				}
			}

			t.find("#confColR").append('<div id="rd-main"></div>');
			t.find("#confColR #rd-main").empty();
			t.find("#rd-pay-later").appendTo('#confColR #rd-main');
			t.find("#rd-pay-now").appendTo('#confColR #rd-main');
			t.find("#rd-totals").appendTo('#confColR #rd-main');
			t.find("#counter-bypass").appendTo('#confColR #rd-main');
			t.find("#rd-more").appendTo('#confColR #rd-main');
			t.find("#confColR .cdpName").html(function (i, html){
				return html.replace(',CDP Rate :', '<br />CDP Rate:');
			});
			t.find("#counter-bypass p").each(function(index){
				if($(this).text()=="" || $(this).html()=='&nbsp;'){
					$(this).addClass('mm-hide');
				}
			});
			t.find("#itinerary-cont").appendTo('#confColL');
			t.find("#page-banners").appendTo('#confColL');
			$("#confColL").wrapInner('<div class="confirmation-col-max-width"></div>')
		}
	});
}

} //End Confirmation Page
var confirmationCSS = "#rProxyM{display:none}.r-toggle.active #rProxyM{display:block}.r-toggle.active .r-toggle-edit,.r-toggle.active .r-toggle-cur-country,.r-toggle.active .r-toggle-text{display:none}.r-toggle-select{display:none}.r-toggle.active .r-toggle-select{display:block;width:50%;max-width:407px}.r-toggle-edit{display:inline-block;font-weight:bold;font-size:12px}.r-toggle-a{color:#000!important}.r-toggle .r-toggle-text{display:inline-block;font-weight:bold;padding:5px 10px 10px 0}@media only screen and (min-width:1201px){.r-toggle{text-align:left}.r-toggle .r-toggle-text{display:inline-block;font-weight:bold;padding:5px 10px 0 0}}@media only screen and (max-width:1200px){.hro-col-right{display:none}.r-toggle{margin-bottom:20px;margin-top:10px}.r-toggle.active .r-toggle-select{width:100%;max-width:none}#rToggleM{margin-top:-10px}}"


/*-- Homepage --*/
if(!$("#res-itinerary-page-container").hasClass('mm-active')){
$("#res-itinerary-page-container").addClass('mm-active');
// dom.addCss(css);
$("body").css(confirmationCSS)
window.updateDiscountCode=function(){
	var discMsg="";
	var container=$('.res-inr-wrp');

	function apndDiscTxt(field, discMsg){
		var newValue="";
		if(field.find('option').length>0 && field.length > 0 && field.val() !== ""){
			if($.trim(discMsg).length > 0){ newValue += ', ' }
			newValue += field.find('option:selected').text();
		}else if(field.length > 0 && field.val() !== ""){
			if($.trim(discMsg).length > 0){ newValue += ', ' }
			newValue += field.val();
		}
		return newValue;
	}
	var cdpLabel = container.find('#cdp-options-business label').first();
	if(cdpLabel.length>0 && $('#GPR_Proxy').length<1){ // Applicant
		var cdpTxt = $.trim(cdpLabel.text());
		cdpTxt = cdpTxt.split('CDP/Discount Code :');
		if(cdpTxt.length > 1) { discMsg += cdpTxt[1]; }
	}
	if($('#profile-cdp-indicator').is(':checked')){
		discMsg += apndDiscTxt(container.find("select[name='memberSelectedCdp']"), discMsg);
	}else{
		discMsg += apndDiscTxt(container.find("input#member-other-cdp"), discMsg);
	}
	discMsg += apndDiscTxt(container.find("input[name='cdpField']"), discMsg);
	discMsg += apndDiscTxt(container.find("input[name='pcNumber']"), discMsg);
	discMsg += apndDiscTxt(container.find("input[name='typeInRateQuote']"), discMsg);
	discMsg += apndDiscTxt(container.find("input[name='cvNumber']"), discMsg);
	discMsg += apndDiscTxt(container.find("input[name='itNumber']"), discMsg);

	var discMsgSplit=discMsg.split(" ");
	var discMsgUse="";
	for(var i=0; i<discMsgSplit.length; i++){
		if(i < 4 && discMsgUse.length < 20){
			if(i>0){
				discMsgUse += ' ';
			}
			discMsgUse += discMsgSplit[i];
		}
	}
	if(discMsgSplit.length >=4){
		discMsgUse += '...';
	}
	discMsgUse=discMsgUse.replace(':', '');
	var discVal=container.find(".discount-code-value");
	discVal.text(discMsgUse);
	if(discMsgUse.length>0){
		discVal.addClass('active');
	}else{
		discVal.removeClass('active');
	}
}

window.checkAAA=function (){
	if($('#affiliate-member-verification').length>0&&$('#affiliate-member-ID').length>0){
	if($('#aaaProxy1').length<1){
		$('#affiliate-member-ID').hide().before('<span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-aaa-icon"></span><input type="text" id="aaaProxy1">');
		$('#affiliate-member-join').prependTo($("label[for='affiliate-member-join']").first());
		$("label[for='affiliate-member-join']").html(function (i, html){
			var html = html.replace(/Not a Member\?/g, '<p class="join-aaa-p">Not a Member\?');
			if(html.indexOf('join-aaa-p')>-1){
				html+='</p>'
			}
			return html;
		});
	}
	if($('#affiliate-member-verification').attr('hidden')=='hidden'){
		$('.res-otr-wrp').removeClass('aaa-added').removeClass('usaa-added');
	}else{
		$('.res-otr-wrp').addClass('aaa-added');
	}
	if($('#affiliate-member-join').is(':checked')){
		$('#aaaProxy1,#aaaProxy2').attr("disabled", "disabled");
		$('.res-otr-wrp').removeClass('aaa-added').removeClass('usaa-added');
	}else{
		$('#aaaProxy1,#aaaProxy2').removeAttr("disabled");
	}
	if($("label[for='affiliate-member-join']").first().text().indexOf('USAA')>-1) {
		if($('#usaaLabel').length<1){
			$('#member-ID-span').after('<div id="usaaLabel">'+$('#member-ID-span').html()+': <span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-usaa-icon"></span></div>');
		}
		$('.res-otr-wrp').addClass('usaa-added');
	} else {
		$('#usaaLabel').remove();
		$('.res-otr-wrp').removeClass('usaa-added');
	}
	}
}
$("body").on( "click", "#rmc-tab", function(){
	$('.res-inr-wrp').addClass('single-button-lookup');
});

$("body").on( "click", "#gaq-tab", function(){
	$('.res-inr-wrp').removeClass('single-button-lookup');
});
$("body").on( "mousedown", ".discount-code-overlay", function(e){
	if($(e.target).closest('.discount-code-overlay-inner').length<1){
		$(this).addClass('click-start');
	}
});
$("body").on( "mousedown", ".discount-code-overlay-inner", function(){
	$('.discount-code-overlay').removeClass('click-start');
});
$("body").on( "click", ".discount-code-overlay.click-start, .modal-button-cancel, .modal-button-apply, .modal-close-icon", function(){
	if($(this).closest(".discount-code-overlay").length > 0){
		$(this).closest(".discount-code-overlay").removeClass('active');
	}else{
		$(this).removeClass('active');
	}
	$('body').removeClass('discount-overlay-open');
	window.checkAAA();
	window.updateDiscountCode();
});
$("body").on( "click", ".discount-code-overlay-inner,#redeem-section", function(event){
	event.stopPropagation();
});

$("body").on( "click", ".pseudo-label, .pseudo-label-icon", function(){
	if($(this).hasClass('pseudo-label-aaa-icon')) {
		$('body').addClass('aaa-card-overlay');
		$('#redeem-info').trigger('click');
	}else if($(this).hasClass('pseudo-label-usaa-icon')) {
		$('body').addClass('usaa-card-overlay');
		$('#redeem-info').trigger('click');
	}else{
		$('#'+$(this).attr('data-for')).trigger('click');
	}
});
$("body").on( "change", "#affiliate-member-join", function(event){
	window.checkAAA();
});
$("body").on( "focus", "#aaaProxy1,#aaaProxy2", function(){
	$(this).addClass('active');
});
$("body").on( "blur", "#aaaProxy1,#aaaProxy2", function(){
	$(this).removeClass('active');
});
$("body").on( "keyup paste", "#aaaProxy1.active,#aaaProxy2.active", function(e){
	if($('.res-otr-wrp.usaa-added').length<1){
	var val = $(this).val();
	var valNoSpace = val.replace(/\s/g, '');
	function doGetCaretPosition(ctrl){
		var CaretPos=-1;
		if(ctrl.selectionStart||ctrl.selectionStart==0){
			if(ctrl.selectionStart==ctrl.selectionEnd){
				CaretPos = ctrl.selectionStart;
			}
		}
		return CaretPos;
	}
	function setCaretPosition(ctrl,pos){
		if(ctrl.setSelectionRange){
			ctrl.focus();
			ctrl.setSelectionRange(pos,pos);
		}else if(ctrl.createTextRange){
			var range=ctrl.createTextRange();
			range.collapse(true);
			range.moveEnd('character',pos);
			range.moveStart('character',pos);
			range.select();
		}
	}
	var curPos=doGetCaretPosition(this);
	var movePos=true;
	var initCharCount=val.length;
	var addSpace=true;
	if(e.keyCode==8&&(curPos==3||curPos==7||curPos==17)){//backspace over space
		addSpace=false;
	}
	var valSpaces = valNoSpace;
	if(curPos==initCharCount){movePos=false}
	if(valNoSpace.length>2){valSpaces = [valSpaces.slice(0, 3), ' ', valSpaces.slice(3)].join('');}
	if(valNoSpace.length>5){valSpaces = [valSpaces.slice(0, 7), ' ', valSpaces.slice(7)].join('');}
	if(valNoSpace.length>14){valSpaces = [valSpaces.slice(0, 17), ' ', valSpaces.slice(17)].join('');}
	if(e.keyCode==8||e.keyCode==46){//backspace or delete
		valSpaces = valSpaces.replace(/\s+$/, '');
	}

	if(initCharCount<valSpaces.length&&curPos>-1&&addSpace===true){//space added
	 curPos+=1;
	}
	$('#aaaProxy1,#aaaProxy2').val(valSpaces);
	if(movePos===true&&curPos>-1){
		setCaretPosition(this,curPos);
	}
	$('#affiliate-member-ID').val(valNoSpace).trigger('change');
	}else{
		$('#aaaProxy1,#aaaProxy2').val($(this).val());
		$('#affiliate-member-ID').val($(this).val()).trigger('change');
	}
});
$("body").on( "change", ".res-inr-wrp #redeem", function(){
	if(this.checked !== $('#GPR_Proxy').checked) {
		$('#GPR_Proxy').prop("checked", this.checked);
	}
	var o=$('.discount-code-overlay');
	o.find('.fade-field').removeClass('fade-field')
	o.find("input[type=text]:disabled").closest('div').addClass('fade-field');
});
$("body").on( "change", "#GPR_Proxy", function(){
	if(this.checked !== $('.res-inr-wrp #redeem').checked) {
		$('.res-inr-wrp #redeem').trigger('click');
	}
	var o=$('.discount-code-overlay');
	o.find('.fade-field').removeClass('fade-field')
	o.find("input[type=text]:disabled").closest('div').addClass('fade-field');
});
$("body").on( "click", ".discount-code-trigger", function(){
	var o=$('.discount-code-overlay');
	o.addClass('active');
	o.find('.fade-field').removeClass('fade-field');
	o.find("input[type=text]:disabled").closest('div').addClass('fade-field')
	if(!o.find('#discounts').is(':checked')){
		o.find('#discounts').trigger('click');
	}
	$('body').addClass('discount-overlay-open');
});
$("body").on( "click", ".res-inr-wrp #resformStartTrigger", function(event){
		if($("#resformReflow.inactive").length > 0 && !$("#resformReflow.inactive").hasClass('transition')){
			$('#resformStart').addClass('inactive');
			$('.res-form nav').hide();
			//$('#resFormHero').addClass('reduced');
			//$(".res-otr-wrp").addClass('reduced');
			$("#resformReflow.inactive").addClass('transition').slideDown( 400, "easeOutCustom", function(){
				$(this).removeClass('inactive').removeClass('transition');
				$('.res-inr-wrp #pickup-location').focus();
			});
		}
});

$("body").on( "change", "#rProxyM", function(event){
	$(".pos-box select[name='country_code'] option:selected").removeAttr("selected");
	$(".pos-box select[name='country_code'] option[value="+$(this).val()+']').attr('selected', 'selected');
	$('form[name=selectLanguageTopNav] button').trigger('click');
});

$("body").on( "click", ".r-toggle-a", function(){
	$(this).closest('.r-toggle').addClass('active');
	$('.res-otr-wrp').addClass('r-toggle-open');
});
$("body").on( "change keyup", ".res-inr-wrp #dropoff-location", function(event){
	if($(this).val() !== ""){
		if($("#resformReflow.inactive").length > 0 && !$("#resformReflow.inactive").hasClass('transition')){
			//$(".res-otr-wrp").addClass('reduced');
			$("#resformReflow.inactive").addClass('transition').slideDown( 400, "easeOutCustom", function(){
				$(this).removeClass('inactive').removeClass('transition');
			});
		}
		if (!$('#one-way').is(':checked')){
			$("#one-way").trigger('click');
		}
	}else{
		if ($('#one-way').is(':checked')){
			$("#one-way").trigger('click');
		}
	}
});
}

if(!$("#hp-banner-ads").hasClass('mm-active')){
$.initialize("#hp-banner-ads", function(){
	if(!$(this).hasClass('mm-active')){
		$(this).addClass('mm-active');
		if($("#itn-ta-country").length==0){ //Not for Travel Agents
		var bnrAd1Img='#$(ContentManager:1118-hertzplus-sweeps-globe-small-banner.jpg)!';
		var bnrAd1URL='https://www.hertz.com/rentacar/rental-car-deals/hertzplus-sweepstakes-122018';
		var bnrAd2Img='#$(ContentManager:free_wi_fi_banner_10_1.jpg)!';
		var bnrAd2URL='https://www.hertz.com/rentacar/rental-car-deals/one-month-free-wifi-deal-us-122018';
		var bnrAd3Img='#$(ContentManager:hertz_email_signup_new.jpg)!';
		var bnrAd3URL='https://pub.emails.hertz.com/EmailAcquisition?source=hertzdotcom?&icid_source=enus&icid_campaign=H_A_USCA_IN_EmailAcquisition_Offer&icid_medium=hero_banner_4';
		$("#hp-banner-ads").addClass('mm-active').prepend('<div class="gptAdBlock gptAdBlock-custom"><a href="'+bnrAd1URL+'" class="hp-banner-ad-1"><img src="'+bnrAd1Img+'" alt="" width="300" height="250"></a></div> <div class="gptAdBlock gptAdBlock-custom"><a href="'+bnrAd2URL+'" class="hp-banner-ad-2"><img src="'+bnrAd2Img+'" alt="" width="300" height="250"></a></div> <div class="gptAdBlock gptAdBlock-custom"><a href="'+bnrAd3URL+'" class="hp-banner-ad-3"><img src="'+bnrAd3Img+'" alt="" width="300" height="250"></a></div>');
		}
	}
});
}

if(!$(".res-form").hasClass('mm-active')){
function addFormRow(container, targetId, targetClass, showInnerRow){
	var htmlInnerRow="";
	if(showInnerRow === true){
		htmlInnerRow='<div class="hp-form-row-inr"><div class="hp-form-col-inr hp-form-col-inr-left"></div><div class="hp-form-col-inr hp-form-col-inr-right"></div></div>';
	}
	container.prepend('<div class="homepage-form-row homepage-form-group '+targetClass+'" id="'+targetId+'"><div class="homepage-form-col homepage-form-col-left">'+htmlInnerRow+'</div><div class="homepage-form-col homepage-form-col-right">'+htmlInnerRow+'</div></div>');
}

$.initialize("#modify-error", function(){
	if(!$(this).hasClass('mm-active')){
		$(this).addClass('mm-active');
		$("#rmc-section").prepend('<div id="resformReflowModify"></div>');

		if($("#conf-last-name").length > 0){
			$("#conf-num").closest('div').addClass('homepage-form-row').addClass('homepage-form-group').attr('id','resformReflowModifyFull');
			$("#conf-num").prev().addClass('confirmation-label').attr('for', "conf-num");
			$("#conf-last-name").prev().addClass('confirmation-label-name').attr('for', "conf-last-name");
			$("#conf-num").wrap('<div class="homepage-form-col homepage-form-col-left"></div>');
			$("#conf-last-name").wrap('<div class="homepage-form-col homepage-form-col-right"></div>');
			$(".confirmation-label").prependTo($("#resformReflowModifyFull .homepage-form-col-left"));
			$(".confirmation-label-name").prependTo($("#resformReflowModifyFull .homepage-form-col-right"));
		}else{
			$("#conf-num").prev().addClass('confirmation-label').attr('for', "conf-num");
			$("#conf-num").wrap('<div class="homepage-form-row homepage-form-group" id="resformReflowModifyFull"><div class="homepage-form-col homepage-form-col-full"></div></div>');
			$(".confirmation-label").prependTo('#resformReflowModifyFull .homepage-form-col-full');
		}
	}
});

$.initialize(".lb-content-box #redeem-info-overlay", function(){
	var t = $(this);
	if(!t.hasClass('mm-active')){
		t.addClass('mm-active');

		if($('body').hasClass('aaa-card-overlay')){
			$('body').removeClass('aaa-card-overlay');
			t.closest('.lb-foreground-cont').find('section').first().html('AAA Membership ID');
			t.html('<p>AAA members can enjoy exclusive benefits and savings up to 20% off the base rate* when you include your designated discount code (CDP#) in your reservation.</p><p style="text-align:center"><img src="#$(ContentManager:aaa-membership-card.jpg)!" alt="AAA Card" style="max-width:100%"></p><p>*Base rate includes time and mileage charges only. Taxes and fees excluded.</p>');
		}else if($('body').hasClass('usaa-card-overlay')){
			$('body').removeClass('usaa-card-overlay');
			t.closest('.lb-foreground-cont').find('section').first().html('USAA Member Number');
			t.html('<p>If you are not able to find/recall your member number, <span data-href="'+$('#member-ID-span a').first().attr('href')+'" class="usaa-overlay-link" style="color:#308dff;text-decoration:underline;cursor:pointer">click here</span> to login through USAA.</p>');
		}else{
			var link = $('.res-inr-wrp #res-form #redeem-section .redeem a');
			if(link.length>0){
				t.find('#mmRedeemLink').remove();
				t.append('<p id="mmRedeemLink"></p>');
				link.clone().attr('target', '_blank').attr('onclick','javascript:window.location=this.getAttribute("href")').appendTo(t.find('#mmRedeemLink'));
			}
		}
	}
});

$.initialize("#gaq-section.hidden", function(){
	$('.res-inr-wrp').addClass('single-button-lookup');
});

$.initialize(".rental-info", function(){
	var t=$(this);
	if(!t.hasClass('mm-active')){
		t.addClass('mm-active');
		t.find('.rental-date').before('<div class="rental-title">Upcoming Reservation</div>')
		t.find('.member-res-search').text('View Trip Summary');
		t.find('.rental-date').html(function (i, html){
			html=html.split(', ');
			var htmlString="";
			for(var i=0; i<html.length; i++){
				if(i > 1){
					htmlString += ', ';
				}
				if(i > 0){
					htmlString += html[i];
				}
			}
			return htmlString;
		});
		t.insertBefore("#other-res-search");
	}
});

$.initialize(".res-form", function(){
	var t=$(this);
	if(!t.hasClass('mm-active')){
		t.addClass('mm-active');
		t.wrapInner('<div class="res-otr-wrp"><div class="res-inr-wrp"><div class="res-pos-rel"></div></div></div>');
		t.find('#error-list').insertBefore(t.find('.res-pos-rel'));
		if(t.find("#pickup-location").val() !== "" || t.find("#dropoff-location").val() !== ""){
			//t.find('.res-otr-wrp').addClass('reduced-no-transition');
			//t.find('nav').hide();
		}
		if($('#gaq-section').hasClass('hidden')){
			t.find('.res-inr-wrp').addClass('single-button-lookup');
		}
		window.checkAAA();
	}
});

$("body").on( "change keyup blur", ".res-inr-wrp #dropoff-location,.res-inr-wrp #pickup-location", function(event){
	window.checkAAA();
	setTimeout(window.checkAAA,500);
	setTimeout(window.checkAAA,1000);
});
$.initialize("#res-home-page #res-form", function(){
	var t=$(this);
	if(!t.hasClass('mm-active')){
	t.addClass('mm-active');
	if(t.closest("#res-flow-edit").length < 1){
		if(t.find('#resformMMActive').length < 1 && $("#pickupLocationLabel").length < 1){
			if(t.find('#itn-modify-keep-rate').length > 0){
				t.find('#itn-modify-keep-rate input[type=checkbox]').attr('id','originalRqCheckBox');
			}
			t.find("#car-type option").first().attr('selected', true);
			t.wrapInner('<div id="resformMMActive" class="mm-active"></div>');
			t.append('<div class="discount-code-overlay"><div class="discount-code-overlay-inner" id="discountCodeOverlay"></div></div>');
			var discOverlay=$('#discountCodeOverlay');
			discOverlay.append('<div class="modal-close-row"><div class="modal-close-title">Discount Code</div><a class="modal-close-icon"><img src="#$(ContentManager:hertz-modal-icon-close.png)!" alt="Close" width="18" height="18"></a></div>');

			if(t.find('#redeem-section .redeem label').first().length > 0) {
				var redeemLabel=t.find('#redeem-section .redeem label').first().text();
				redeemLabel=redeemLabel.replace('Learn More About Your Points','');
				discOverlay.append('<div class="gpr-checkbox-row"><label for="GPR_Proxy"><input id="GPR_Proxy" type="checkbox">'+redeemLabel+'</label></div>');
			}
			$('#GPR_Proxy').prop("checked", $(".res-inr-wrp #redeem").checked);
			if($('#loginLink').length<1&&($('#discounts').prop('checked')===false || (
				$("input[name='pcNumber']").val()==''&&
				$("input[name='typeInRateQuote']").val()==''&&
				$("input[name='cvNumber']").val()==''&&
				$("input[name='itNumber']").val()=='') )

			){
				if($(".res-inr-wrp #redeem").prop("checked")===false){
					$(".res-inr-wrp #redeem").trigger('click');
					$('#GPR_Proxy').prop("checked",true);
				}
				$('.res-inr-wrp #redeem-section').hide();
			}

			$("#itn-discounts").appendTo(discOverlay);

			if(discOverlay.find('#GPR_Proxy').length<1){
				discOverlay.addClass('no-gpr');
			}
			var displayedCodes=false;

			t.find("#redeem-section input, #itn-discounts input").each(function(index){
				if(!$(this).closest('div').hasClass('hidden')){
					displayedCodes=true;
					return false;
				}
			});

			discOverlay.append('<div class="modal-footer-button-row"><a href="javascript:void(0);" class="modal-button-cancel">Cancel</a><a href="javascript:void(0);" class="modal-button-apply">Apply</a></div>');

			discOverlay.find('#discounts').prependTo(discOverlay.find("label[for='discounts']").first());
			discOverlay.find('#discounts').parent().after('<p style="margin: 0 0 0 21px;">If you are using a partner Discount Code, we will validate your Member ID at pickup.</p>');
			window.checkAAA();
			if($("#res-submit-btns button").length==1){ //Only One Button
				$(".res-inr-wrp").addClass('single-button');
			}
			t.find("#itn-location").wrapInner('<div class="homepage-form-row homepage-form-group"></div>');
			t.find("#pickup-location").closest('.clearfix').addClass('homepage-form-col').addClass('homepage-form-col-left').addClass('resFormLocationLeft');
			t.find("#return-loc").addClass('homepage-form-col').addClass('homepage-form-col-right').addClass('resFormLocationRight');
			t.find(".resFormLocationLeft").prepend('<label for="pickup-location" id="pickupLocationLabel">'+$("#itn-location h3").first().text()+'</label>');
			t.find("#itn-location h3").first().closest('div').hide();
			t.find(".resFormLocationRight").prepend('<label for="dropoff-location">'+$("#return-loc h3").first().text()+'</label>');
			t.find("#return-loc h3").first().closest('div').hide();
			t.find("#dropoff-location").attr('placeholder', 'Same as Pickup');

			if($("#resFormHero").length<1){
				$('#res-home-page').prepend('<div id="resFormHero"><div class="hero-row"><div class="hero-col hero-col-left"><div class="hero-col-left-inner"><div class="hero-col-left-max-width"><h1 class="hero-h1">We\'re here<br> to get you there.</h1></div></div></div><div class="hero-col hero-col-right"><img src="#$(ContentManager:hertz-hero-road-mobile.jpg)!" class="hero-mobile-img"></div></div></div>');
			}
			if(t.find('#itn-age').length>0){
				t.find('#itn-age').wrap('<div id="resformReflow"></div>');
			}else{
				t.find(".location-dates-arrival .location").after('<div id="resformReflow"></div>');
			}

			t.find("#resformReflow").before('<div id="resformStart"><h2 class="reservation-start">Start your reservation.</h2><div id="resformStartTrigger"><img src="#$(ContentManager:icon-pickup-location.png)!" alt="" height="22"> Pick-up Location</div></div>');
			/*
			if(t.find("#pickup-location").val()=="" && t.find("#dropoff-location").val()==""){
				t.find("#resformReflow").addClass('inactive');
				t.find(".res-otr-wrp").removeClass('reduced-no-transition').removeClass('reduced');
			} else {
				t.find('#resformStart').hide();
				$('#resFormHero, .res-otr-wrp').addClass('reduced');
				t.find('nav').hide();

			}
			*/
			t.find("#resformReflow").addClass('inactive');
			t.find(".res-otr-wrp").removeClass('reduced-no-transition').removeClass('reduced');

			addFormRow($("#resformReflow"), 'resFormDateRow', 'date-time', true);
			t.find('#itn-location').prependTo('#resformReflow');
			var pickupDateTimeText=$(".pickup-date h3").first().text();
			var pickupDateText="";
			var pickupTimeText="";
			if(pickupDateTimeText.indexOf("Pickup Date & Time") >= 0){
				pickupDateText="Pickup Date";
				pickupTimeText="Pickup Time";
			}else{
				pickupDateText=pickupDateTimeText;
			}
			t.find("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-left").prepend('<div class="pseudo-label" data-for="pickup-date-box">'+pickupDateText+'</div>');

			t.find(".pickup-date h3").first().closest('div').hide();
			t.find("#pickup-date-box").appendTo($("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-left"));

			t.find("select[name='pickupTime']").attr('id','pickupTimeSelect');
			t.find("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-right").prepend('<label for="pickupTimeSelect">'+pickupTimeText+'</label>');
			t.find("#pickup-time").appendTo($("#resFormDateRow .homepage-form-col-left .hp-form-col-inr-right"));

			var returnDateTimeText=t.find(".dropoff-date h3").first().text();
			var returnDateText="";
			var returnTimeText="";
			if(returnDateTimeText.indexOf("Return Date & Time") >= 0){
				returnDateText="Return Date";
				returnTimeText="Return Time";
			}else{
				returnDateText=returnDateTimeText;
			}
			t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-left").prepend('<div class="pseudo-label" data-for="dropoff-date-box">'+returnDateText+'</div>');

			t.find(".dropoff-date h3").first().closest('div').hide();
			t.find("#dropoff-date-box").appendTo(t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-left"));
			t.find("select[name='dropoffTime']").attr('id','dropoffTimeSelect');
			t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-right").prepend('<label for="dropoffTimeSelect">'+returnTimeText+'</label>');
			t.find("#dropoff-time").appendTo(t.find("#resFormDateRow .homepage-form-col-right .hp-form-col-inr-right"));
			var discountCodeHTML='<div class="discount-code-wrap"><div class="discount-code-label">Discount Code</div><div class="discount-code-value"></div></div>';

			if(t.find('#itn-age').length>0  && displayedCodes === true){//Age and Discount
				t.find('#itn-age').wrap('<div id="discountRowWrap"><div class="homepage-form-row homepage-form-group resform-row-3"><div class="homepage-form-col homepage-form-col-left" id="resRow3ColLeft"><div class="homepage-form-row homepage-form-group resform-row-code-age"><div class="homepage-form-col homepage-form-col-right" id="resAgeCol"></div></div></div></div></div>');
				t.find('#resRow3ColLeft').after('<div class="homepage-form-col homepage-form-col-right" id="resAAACol"></div>');
				t.find('#resAgeCol').before('<div class="homepage-form-col homepage-form-col-left" id="resDiscCol"></div>');
				t.find("#resDiscCol").addClass('discount-code-trigger').append(discountCodeHTML);
				t.find('#resAAACol').html('<div class="aaa-proxy-field"><label for="aaaProxy2"><span class="proxy-label-aaa">AAA Membership ID #: <span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-aaa-icon"></span></span><span class="proxy-label-usaa">USAA Members <span class="pseudo-label-icon pseudo-label-help-icon pseudo-label-usaa-icon"></span></span></label><input type="text" value="" name="aaaProxy2" id="aaaProxy2"></div>');
				$('#aaaProxy1,#aaaProxy2').val($('#affiliate-member-ID').val());
				$('#aaaProxy1').addClass('active').trigger('keyup').removeClass('active');
				window.checkAAA();
				setTimeout(window.checkAAA,500);
				setTimeout(window.checkAAA,1000);
				setTimeout(window.checkAAA,2000);
			}else if($("#itn-age").length > 0){ //No Discounts, But Has Age Ex. Applicant
				t.find('#itn-age').wrap('<div class="homepage-form-row"><div class="homepage-form-col homepage-form-col-full" id="resAgeCol"></div></div>');
			}else if(displayedCodes === true){ //Discount Only
				t.find("#resformReflow").append('<div class="homepage-form-row homepage-form-group homepage-form-row-discount-only" id="discountCodeOnly"><div class="homepage-form-col homepage-form-col-full" id="resDiscCol"></div></div>');
				t.find("#discountCodeOnly .homepage-form-col-full").addClass('discount-code-trigger').append(discountCodeHTML);
				t.find("#discountCodeOnly").wrap('<div id="discountRowWrap"></div>');
			}
			t.find("#redeem-info").addClass('pseudo-label-help-icon').removeClass('icons-info_sm');
			if(t.find('#discountRowWrap').length > 0){
				$("#redeem-section").prependTo("#resDiscCol");
			}
			window.updateDiscountCode();
			t.find('#itn-modify-keep-rate').appendTo('#resformReflow');

			if($('#loginLink').length>0){
				var rToggle = '<div class="r-toggle"><span class="r-toggle-text">Country of Residence: <span class="r-toggle-cur-country"></span></span><div class="r-toggle-edit"><a href="javascript:void(0);" class="r-toggle-a">Edit</a></div><div class="r-toggle-select"><div class="homepage-form-group"><div class="homepage-form-col"><label for="rProxyM" id="rToggleLabel">Country of Residence:</label></div></div></div></div>';
				$('#resformReflow').append('<div id="rToggleM">'+rToggle+'</div>');
				$(".pos-box select[name='country_code']").clone().attr('name', 'r-proxy-m').attr('id', 'rProxyM').insertAfter($('#rToggleLabel'));

				if($(".pos-box select[name='country_code'] option:selected").length<0){
					$('.r-toggle-cur-country').text($(".pos-box select[name='country_code']").val());
				} else if ($('.languageselector span:contains("US")').length > 0) {
					$('.r-toggle-cur-country').text('US');
				} else if ($('.languageselector span:contains("CA")').length > 0) {
					$('.r-toggle-cur-country').text('CA');
				}
				$('.res-otr-wrp').addClass('r-toggle-added');
			}
			if(t.find("#itn-ta-country").length > 0){ //Travel Agent Country
				t.find("#itn-ta-country").prependTo('#resformReflow');
				t.find("#itn-ta-country").wrap('<div class="homepage-form-row homepage-form-group"></div>');
				t.find("#itn-ta-country").addClass('homepage-form-col').addClass('homepage-form-col-full');
				t.find("#itn-ta-country strong").wrap('<label for="itn-ta-country"></label>');
				$('.res-otr-wrp').addClass('travel-agent-form');
			}
			if(t.find("#itn-ta-member-info").length > 0){ //Travel Agent Club #
				t.find('#itn-ta-member-info').appendTo('#resformReflow');
				t.find("#itn-ta-member-info .row").addClass('homepage-form-row').addClass('homepage-form-group');
				t.find("#itn-ta-member-info .row").html(function (i, html){
					return html.replace(/label/g, 'div');
				});
				t.find("#itn-ta-member-info input[name='no1ClubNumber']").attr('id', 'no1ClubNumber').closest('div').addClass('homepage-form-col').addClass('homepage-form-col-left');
				t.find("#itn-ta-member-info input[name='lastName']").attr('id', 'taLastName').closest('div').addClass('homepage-form-col').addClass('homepage-form-col-right');
				t.find("#itn-ta-member-info .homepage-form-col-left strong").wrap('<label for="no1ClubNumber"></label>');
				t.find("#itn-ta-member-info .homepage-form-col-right strong").wrap('<label for="taLastName"></label>');
			}
			t.find('#res-submit-btns').appendTo(t.find("#resformReflow"));
			t.find('#res-submit-btns').after('<div class="resform-end"></div>');
			t.find('.member-other').html(function (i, html){
				return html.replace("&nbsp;", "");
			});
		}
	}
	t.addClass('mm-init');
	}
});

$.initialize("#res-home-page #res-form.mm-init #age-dropdown", function(){
	var t = $(this);
	if(!t.hasClass('mm-active')){
		var p = t.closest('#itn-age');
		if(p.find('#ageSelectorLabel').length<1){
			p.prepend('<label for="ageSelector" id="ageSelectorLabel">Age<span class="pseudo-label-icon pseudo-label-help-icon" data-for="age-info-link"></span></label>');
		}
		t.find('option:contains("Please Select an Age")').text(" ");
		p.find('#age-info-link').closest('div').hide();
	}
});
$.initialize("#ageAdvisory", function(){
	var t = $(this);
	if(!t.hasClass('mm-active')){
		t.wrapInner('<div class="age-advisory-inner"></div>');
	}
});
$("body").on( "change", "#ageSelector", function(event){
	if($('#ageAdvisory').css("display") == 'block'){
		$('#resformMMActive').addClass('age-advisory-expanded');
	}else{
		$('#resformMMActive').removeClass('age-advisory-expanded');
	}
});
$("body").on( "click", ".usaa-overlay-link", function(event){
	window.location=$(this).attr('data-href');
});

$("body").on( "click", "#res-submit-btns .login-submit", function(event){
	if($('#loginLink').length==1&&($('#discounts').prop('checked')===false || (
		$("input[name='pcNumber']").val()==''&&
		$("input[name='typeInRateQuote']").val()==''&&
		$("input[name='cvNumber']").val()==''&&
		$("input[name='itNumber']").val()=='') )

	){
		if($(".res-inr-wrp #redeem").prop("checked")===false){
			$(".res-inr-wrp #redeem").trigger('click');
			$('#GPR_Proxy').prop("checked",true);
		}
	}
});


}

if(!$("body").hasClass('mm-header-active')){
	$("body").addClass('mm-header-active');

	$.initialize("#header-container", function(){
	if(!$(this).hasClass('mm-active')){
		$(this).addClass('mm-active');
		if($('#header-container #cookieLink').length > 0){
			$('#header-container #cookieLink .fullSwitchProfileLink a').html(function (i, html){
				return html.replace("Please ", "");
		});
		var container=$('#header-container .cookiedLinks');
		container.after('<ul class="top-nav-registered-menu" id="topNavRegisteredMenuCookied"></ul>');
			container.find('.fullSwitchProfileLink.switchProfileLink').first().appendTo('#topNavRegisteredMenuCookied');
			$('#topNavRegisteredMenuCookied').clone().attr('id', 'topNavRegisteredMenuCookiedMobile').prependTo('#nav-container');
		}
		$("#header-container").closest('header').addClass('header-primary');
		$(".header-primary").wrapInner('<div class="header-wrap-mobile"><div class="header-outer-mobile"><div class="header-inner-mobile"><div class="header-inner-mobile-wrap"></div></div></div></div>');
		$(".header-outer-mobile").before('<div class="header-mobile-wrap"><div class="header-mobile"><div class="header-mobile-menu"><a href="javascript:void(0);"></a></div><div class="header-mobile-logo"></div><div class="header-mobile-actions"></div></div></div>');
		$(".header-outer-mobile").append('<div class="search-container-wrap"><div class="search-container"><form name="submitProxyForm" id="submitProxyForm" action="https://www.hertz.com/rentacar/customersupport/index.jsp" method="post"><div class="search-inner-row"><div class="search-inner-col search-inner-col-left"><input name="searchProxy" id="searchProxy" type="text"></div><div class="search-inner-col search-inner-col-right"><a href="javascript:void(0);" id="headerSearchCancel">Cancel</a></div></div><a href="javascript:void(0);" class="header-search-tracking"></a></form></div></div>')

		var initMenu=false;
		if(!$("#welcomeMsg").hasClass('mm-active')){
			$.initialize("#welcomeMsg", function(){
				if(!$(this).hasClass('mm-active')){
					$(this).addClass('mm-active');
					if(initMenu === false){
						initMenu=true;
						var container=$('#welcomeMsg').closest('.emember-container');
						$('#welcomeMsg').addClass('mm-active');
						container.addClass('mm-active');
						if(container.find('.useraccount').length > 0 || container.find('#logOut').length > 0){
							container.append('<ul class="top-nav-registered-menu" id="topNavRegisteredMenu"></ul>');
							container.find('.useraccount').appendTo('#topNavRegisteredMenu');
							container.find('#logOut').appendTo('#topNavRegisteredMenu');
							$('#topNavRegisteredMenu').clone().attr('id', 'topNavRegisteredMenuMobile').prependTo('#nav-container');

						}
					}
				}
			});
		}

		if(!$("#searchBoxOverlayContainer").hasClass('mm-active')){
			$.initialize("#searchBoxOverlayContainer", function(){
				if(!$(this).hasClass('mm-active')){
					$(this).addClass('mm-active');
					$("#searchBoxOverlayContainer").addClass('mm-active');
					$('.search-box').appendTo('.pos-container');
					$('.pos-container .search-box').wrap('<div class="header-col header-col-icons"></div>')
					$('.pos-container ul').first().wrap('<div class="header-col header-col-ul"></div>');
					$(".header-col-ul").children('li').addClass('header-col-li');



				}
			});
			if(!$("#header-container .utility-bar #member-name-points-info").hasClass('mm-active')){ //
				$.initialize("#header-container .utility-bar #member-name-points-info", function(){
					if(!$(this).hasClass('mm-active')){
						$(this).addClass('mm-active');
						if($("#searchBoxOverlayContainer").length==0 && $('.pos-container .change-link a').length==0){
							$(this).addClass('no-dropdown');
							$(this).closest('.utility-bar').find('.pos-container').first().addClass('no-dropdown');
						}
					}
				});
			}

		}

		$.initialize("#headerSearchNav", function(){
			if(!$(this).hasClass('mm-active')){
				$(this).addClass('mm-active');
				$("#headerSearchNav, .header-mobile-actions").append('<div class="mm-search-icon"><a class="mm-header-search-icon" id="headerSearchIcon" href="javascript:void(0);"><img src="#$(ContentManager:hertz-nav-header-search-icon-black.png)!" alt="Search" width="18" height="18"></a></div>');
			}
		});

		$.initialize("#social-email", function(){
			var t = $(this);
			if(!t.hasClass('mm-active')){
				t.addClass('mm-active');
				var emailForm='<div class="header-email-form-wrap"><form class="header-email-form" name="headerEmailForm" action="https://email.hertz.com/apps/JoinMarketing" method="get"><div class="header-email-row"><div class="header-email-col header-email-col-left"><div class="header-email-error">You must enter a valid email address</div><input type="text" placeholder="Enter your email and save 10%" class="header-email-input"></div><div class="header-email-col header-email-col-right"><input type="submit" class="header-email-submit" value="Sign Up"></div></div></form></div>';

				if($('#loginLink').length>0&&$('#social-email').length>0){
					$(".header-col-ul").after('<div id="headerEmailD">'+emailForm+'</div>');
					$('.header-inner-mobile').after('<div id="headerEmailM">'+emailForm+'</div>');
				}
			}
		});

		$.initialize(".logo-container .logo-box", function(){
			var t = $(this);
			if(!t.hasClass('mm-active')){
				t.addClass('mm-active');
				t.find('img').attr('src','#$(ContentManager:hertz-logo-black.png)!');
				$(".logo-container .logo-box").clone().appendTo('.header-mobile-logo');
				t.addClass('mm-branding-update');
				var brg = 'Our Best Rate Guaranteed*';
				t.after('<div class="header-brg"><div class="header-brg-text">'+brg+'</div></div>');
				$('.header-inner-mobile').append('<div class="header-brg-mobile">'+brg+'</div>');
				if(getCookie('mm-h0020-brg-animate') !== 'true'){
					createCookie('mm-h0020-brg-animate', 'true', 30);
					setTimeout(function(){
						$(".header-brg").addClass('active');
					}, 1500);
				}else{
					$(".header-brg").addClass('active').addClass('no-animation');
				}
			}
		});

		$.initialize("#nav-container .nav-menu", function(){
			if(!$(this).hasClass('mm-active')){
				$(this).addClass('mm-active');

				$(this).find( "dl" ).each(function(index){
					$(this).wrap('<div class="nav-mobile-expandable-section"></div>');
					$(this).closest('td').find('span').first().wrap('<div class="nav-mobile-expandable-link"></div>');

				});

				$(this).find( "td" ).each(function(index){
					$(this).addClass('nav-primary-set');
					if($(this).find('.nav-mobile-expandable-section').length < 1){
						$(this).addClass('nav-primary-link-no-menu').addClass('nav-primary-animate-hover');
					}else{
						$(this).addClass('nav-primary-link-with-menu').addClass('nav-primary-animate-hover');
					}
				});

				if(!$('body').hasClass('mm-content-page')) {
					$('.nav-primary-link-with-menu').first().addClass('active-menu').removeClass('nav-primary-animate-hover');
				} else {
					var url = window.location.pathname + window.location.search;

					$(this).find( ".nav-primary-set a" ).each(function(index){
						var href = $(this).attr('href');
						href = href.replace('https://www.hertz.com','');
						if(url.indexOf(href)>-1) {
							$(this).closest('td').addClass('active-menu').removeClass('nav-primary-animate-hover');
							return false;
						} else if(href=='/rentacar/member/enrollment/gold/step' && url.indexOf('/rentacar/member/enrollment')>-1) {
							$(this).closest('td').addClass('active-menu').removeClass('nav-primary-animate-hover');
							return false;
						}
					});
				}
				$(this).find('.nav-mobile-expandable-link span:contains("HERTZ+")').text('Hertz+');
				$(this).find('tr').first().append('<td id="headerSearchNav"></td>');
			}
		});
	}
});



$.initialize("header .logo-container", function(){
	if(!$(this).hasClass('mm-active')){
		$(this).addClass('mm-active');
		$("header .logo-container").first().prependTo( ".nav-menu" );
	}
});

$.initialize("#homePageLoginOverlay", function(){
	var t=$(this);
	if(!t.hasClass('mm-active')){
		t.addClass('mm-active');
		$('#accountMobSctn').remove();
		t.find('#loginFormInner').clone(true).attr('id','accountMobSctn').addClass('mm-hdr-mob-sctn').appendTo('#topNavRegisteredMenuMobile .useraccount');
		$('#accountMobSctn #loggedUserDetails').attr('id', 'loggedUserDetailsMob');
		$('#topNavRegisteredMenuMobile .myaccount').addClass('nav-mobile-expandable-link-style');
		var usePoints = t.find('#loggedUserDetails a[href$="awardsTab.do"]').first().closest('li');
		if(usePoints.length>0){
			if(t.find('#loggedUserDetails a[href*="hertzrewards.hertz.com"]').length<1){
			usePoints.after('<li class="mm-auc"><a href="https://hertzrewards.hertz.com/">Hertz Rewards</a></li>');
			}
		}
	}
});

	$("body").on( "submit", ".header-email-form", function(event){
		event.preventDefault();
		var emailValue=$(this).find('.header-email-input').val();
		function validateEmail(email){
			var re = /\S+@\S+\.\S+/;
			return re.test(email);
		}
		if(validateEmail(emailValue)){
			$(this).removeClass('error');
			$('#social-email').attr('value', emailValue);
			$('#social-email').closest('form').find('button').trigger('click');
		}else{
			$(this).addClass('error');
		}
	});

	$( "body" ).on( "click", "#header-container #cookieLink .fullSwitchProfileLink a", function(){
		$("#homePageLoginOverlay").toggleClass('mm-force-show');
	});

	$( "body" ).on( "click", ".header-primary", function(event){
		if($(event.target).closest('.cookieLink').length<1 && $(event.target).closest('.mm-force-show').length<1){
			$("#homePageLoginOverlay").removeClass('mm-force-show');
		}
	});

	$( "body" ).on( "click", ".header-primary #myaccount", function(){
		$('.nav-mobile-expandable-link-style').toggleClass('nav-mobile-expandable-link-style-inactive');
		$("#accountMobSctn").stop(true, false).slideToggle( 300 );
	});

	$( "body" ).on( "click", "#headerSearchIcon, #headerSearchIconMobile, #headerSearchCancel", function(){
		$('#headerSearchIcon, #headerSearchIconMobile').toggleClass('active');
		$(".search-container").stop(true, false).slideToggle( 300 );
		$(".header-primary").toggleClass('search');
		if($('#headerSearchIcon').hasClass('active')){
			$("#searchProxy").focus();
		}
		if($(".header-mobile-menu").hasClass('active')){
			$(".header-mobile-menu").toggleClass('active');
			$(".header-primary").toggleClass('expanded');
			$(".header-inner-mobile").stop(true, false).slideToggle( 300 );
		}
	});

	$( "body" ).on( "click", ".nav-mobile-expandable-link", function(){
		var curContainer=$(this).closest('td');
		curContainer.addClass('current');
		curContainer.toggleClass('mobile-expand-active');
		if($('.mobile-expand-active').length > 0){
			$('.mobile-expand-active').each(function(index){
				if(!$(this).hasClass('current')){
					$(this).removeClass('mobile-expand-active');
					$(this).find('.nav-mobile-expandable-section').stop(true, false).slideToggle( 300 );
				}
			});
		};
		curContainer.find('.nav-mobile-expandable-section').stop(true, false).slideToggle( 300 );
		curContainer.removeClass('current');
	});

	$("body .nav-primary-animate-hover").on({ mouseenter: function (){
		$(this).removeClass('nav-primary-anchor-right');
	}, mouseleave: function (){
		$(this).addClass('nav-primary-anchor-right');
	}});

	function headerSizing(){
		var height=0;
		if($('.header-primary').hasClass('header-collapsed')){
			height=60;
		}else{
			height=135;
		}
		$('body').css('padding-top', height);
	}

	headerSizing();

	$(window).resize(function(){
		 headerSizing();
	});

	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if ( scrollTop > 0){
			if(!$('.header-primary').hasClass('header-collapsed')){
				$('.header-primary').addClass('header-collapsed');
				headerSizing();
			}
		}else{
			if($('.header-primary').hasClass('header-collapsed')){
				$('.header-primary').removeClass('header-collapsed');
				headerSizing();
			}
		}
	});

	$("body").on( "change keyup", "#searchProxy", function(event){
		$("#search-input").val($('#searchProxy').val()).trigger('click');
	});

	$("body").on( "submit", "#submitProxyForm", function(event){
		event.preventDefault();
		$("#search-input").val($('#searchProxy').val());
		$('.header-search-tracking').trigger('click');
		$("#search-input").closest('div').addClass('lb-foreground-cont');

		setTimeout(function(){
			$("#search-button-trigger").trigger('click');
		}, 100);
	});

	$( "body" ).on( "click", ".header-mobile-menu", function(){
		$(".header-mobile-menu").toggleClass('active');
		$(".header-primary").toggleClass('expanded');
		if($(".header-primary").hasClass('expanded')){
			$('body').addClass('mobile-main-menu-open');
		}else{
			$('body').removeClass('mobile-main-menu-open');
		}
		$(".header-inner-mobile").stop(true, false).slideToggle( 300 );
		if($("#headerSearchIcon").hasClass('active')){
			$('#headerSearchIcon, #headerSearchIconMobile').toggleClass('active');
			$(".header-primary").toggleClass('search');
			$(".search-container").stop(true, false).slideToggle( 300 );
		}
	});
	$( "body" ).on( "click", ".homeloggedUserDetails", function(event){
		if(!$(this).hasClass('no-cursor')){
			$('#header-container .homeloggedUserDetails').toggleClass('active');
			$("#topNavRegisteredMenu").toggleClass('active');
			$("#topNavRegisteredMenuMobile").stop(true, false).slideToggle( 300 );
		}else{
			if($(event.target).closest("a").length < 1){
			event.preventDefault();
			}
		}
	});
	$( "body" ).on( "click", "#header-container .cookiedLinks .fullswitchprofilelinktext", function(event){
		if(!$(this).hasClass('no-cursor')){
			$(this).toggleClass('active');
			$("#topNavRegisteredMenuCookied").toggleClass('active');
			$("#topNavRegisteredMenuCookiedMobile").stop(true, false).slideToggle( 300 );
		}else{
			if($(event.target).closest("a").length < 1){
			event.preventDefault();
			}
		}
	});
}

// <style type="text/css">
// 	/*-- Footer --*/
// 	/*@CSSINCLUDE:footer*/
// </style>
/*-- Footer --*/

if(!$('#footer-container').hasClass('mm-active')){
// 	var cssFromJS = '';
// 	for (var name in window.h0020CSS) {
// 			if(css.indexOf('/*@CSSINCLUDE:'+name+'*/') > -1) {
// 				css = css.replace("/*@CSSINCLUDE:"+name+"*/", window.h0020CSS[name]);
// 			}
// 	}
//
// 	window.footerCSS = css;

	$.initialize("#footer-container.mm-active", function(){
		if(!$(this).hasClass('mm-active-action')){
			$(this).addClass('mm-active-action');
			$( "body" ).on( "click", ".title-table .title", function(){
				var curContainer=$(this).closest('ul');
				curContainer.addClass('current');
				if($('#footer-container .title-table ul.active').length > 0){
					$('#footer-container .title-table ul.active').each(function(index){
						if(!$(this).hasClass('current')){
							$(this).find('dl').stop(true, false).slideToggle( 300 );
							$(this).removeClass('active');
						}
					});
				}
				curContainer.toggleClass('active');
				curContainer.find('dl').stop(true, false).slideToggle( 300 );
				curContainer.removeClass('current');
			});
		}
	});
	$.initialize("#footer-container.mm-active #seo-content", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			$(this).insertBefore("#social-bar");
		}
	});
	$.initialize("#footer-container.mm-active #social-bar", function(){
		var t=$(this);
		if(!t.hasClass('mm-active')){
			t.addClass('mm-active');
			var appLabel = '<div class="footer-app-label social-footer-label">Download Our App</div>';
			var appLabelMobile = '<div class="footer-app-label">Download Our App</div>';
			var appLink = '<div class="footer-app-link"><a href="https://go.onelink.me/qgdE/hertzWebFooterDownload2019"><img src="#$(ContentManager:hertz-footer-icon-app.png)!" alt="Hertz App"></a></div>';
			t.find('form').wrap('<div class="footer-social-row"><div class="footer-social-col footer-social-col-left"></div></div>').prepend('<div class="social-email-label-wrap"><label for="social-email" class="social-email-label">Email Offers from Hertz</label></div>');
			$("#social-bar ul").first().addClass('social-icon-ul');
			t.find('.footer-social-col-left').after('<div class="footer-social-col footer-social-col-middle"><div class="footer-app-link-wrap">'+appLabel+appLink+'</div></div><div class="footer-social-col footer-social-col-right"><div class="social-footer-label social-footer-label-desktop">Follow Us on Social Media.</div></div>')
			$(".social-icon-ul").wrap('<div class="social-icon-container"></div>');
			t.find('.social-icon-container').appendTo(t.find('.footer-social-col-right'));

			t.find('img').each(function(index){
				var src="";
				var t2=$(this);
				if(t2.attr('alt')=="Facebook"){
					src="#$(ContentManager:hertz-footer-icon-facebook.png)!";
				}else if(t2.attr('alt')=="Twitter"){
					src="#$(ContentManager:hertz-footer-icon-twitter.png)!";
				}else if(t2.attr('alt')=="Instagram"){
					src="#$(ContentManager:hertz-footer-icon-instagram.png)!";
				}else if(t2.attr('alt')=="YouTube"){
					src="#$(ContentManager:hertz-footer-icon-youtube.png)!";
				}else if(t2.attr('alt')=="Google Plus"){
					src="#$(ContentManager:hertz-footer-icon-gplus.png)!";
				}
				if(src !== ""){
					t2.attr('src', src);
				}
			});

			var target = $('#seo-content');
			if(target.length<1){
				target = $('#social-bar');
				target.addClass('no-seo-section');
			}
			$(".social-icon-container").clone().append('<div class="social-footer-label social-footer-label-mobile">Follow Us on Social Media.</div>').addClass('social-icon-container-mobile').insertBefore(target);
			target.before('<div class="social-footer-app-mobile">'+appLink+appLabelMobile+'</div>');
		}
	});
	$.initialize("#footer-container.mm-active #mob-links", function(){
	var t=$(this);
	if(!t.hasClass('mm-active')){
		t.addClass('mm-active');
		$("#opinionLab").before('<li class="view-on-desktop-link"></div>');
		t.find('a[href*="deviceGroup=desktop"]').appendTo('.view-on-desktop-link');
	}
	});

	$.initialize("#footer-container.mm-active #copyright-content", function(){
	var t=$(this);
	if(!t.hasClass('mm-active')){
		t.addClass('mm-active');
		t.wrapInner('<div class="copyright-content-inner"></div>');
		t.find('a').first().before('<br />');
		$("#footer-parsys").prependTo(this);
	}
	});

	$.initialize("#footer-container #title-links", function(){
		if(!$(this).hasClass('mm-active')){
			$(this).addClass('mm-active');
			if($(this).find('dl').length > 0) {
				// dom.addCss(footerCSS);
				$('#footer-container').addClass("mm-active");
			} else {
				$('#footer-container').wrapInner('<div style="width:100%;max-width:1248px;margin:0 auto"></div>');
			}
		}
	});
}

/*-- Global --*/
if(!$("body").hasClass('mm-gpr-navigation-active')){
	$("body").addClass('mm-gpr-navigation-active');

	$.initialize(".emember-container.myaccount#myaccount", function(){
		$("body").addClass('mm-gpr-navigation');
	});
	$.initialize("#mobile-nav-member-info", function(){
		$("body").addClass('mm-gpr-navigation');
		var t=$(this);
		if(!t.hasClass('mm-gpr') && t.length>0){
		t.addClass('mm-gpr');
		t.insertAfter('#myaccount .homeloggedUserDetails');
		$('#mobile-nav-member-menu').insertBefore($('#nav-container table').first());
		if($('#mobileWebMemberInfoUL a:contains("Logout")').length<1) {
			$('#loginFormContainer #logOut').clone().attr('id','').appendTo($('#mobileWebMemberInfoUL'));
		}
		if($('#loggedInTravelAgent').css("display") == 'list-item'){
			$('#loggedInTravelAgent').append('<div class="ta-logout"></div>');
			$('#topNavRegisteredMenu #logOut a').clone().appendTo($('#loggedInTravelAgent .ta-logout'));
			$('#mobileWebArrowDropdown').addClass('ta-hide');
			$('.homeloggedUserDetails, #header-container .cookiedLinks .fullswitchprofilelinktext').addClass('no-cursor');
		}
		if($('#homeloggedUserDetails a:contains("Logout")').length<1 && $('.change-link a').length<1 && $.trim($('.welcometext').first().text()).length < 1) {
			$('li#logOut').first().appendTo($('.homeloggedUserDetails').first());
			$('.homeloggedUserDetails #logOut').addClass('applicant').wrapInner('<div class="ta-logout"></div>');
			$('.homeloggedUserDetails #logOut').closest('article').closest('li').addClass('desktop-float-right');
			$('.homeloggedUserDetails, #header-container .cookiedLinks .fullswitchprofilelinktext').addClass('no-cursor');
			$('#mobileWebArrowDropdown').addClass('ta-hide');
			$('#header-container .utility-bar .pos-container ul .change-link').addClass('no-border');
		}
		var usePointsM = $('#mobileWebMemberInfoUL a[href$="awardsTab.do"]').first().closest('li');
		if(usePointsM.length>0&& $('#mobileWebMemberInfoUL .mm-auc').length<1){
			$('.mm-auc').first().clone().insertAfter(usePointsM);
		}
		$("body").on( "click", "#topNavDesktopShow", function(event){
			if($('#mobileWebArrowDropdown').width()>0){
				$('#mobileWebArrowDropdown').trigger('click');
			}else{
				$('#arrowDropdown').trigger('click');
			}
			event.stopPropagation();
		});
		}
	});
	$("body").on( "mousedown", "#topNavDesktopShow,#mobileWebArrowDropdown", function(){
		var t=$('#mobile-nav-member-menu');
		if(t.css("height") == '0px' || t.css("display") == 'none' ) {
			t.css("height","");
		}
		if($('#mobileWebMemberInfoUL a:contains("Logout")').length<1) {
			$('#loginFormContainer #logOut').clone().attr('id','').appendTo($('#mobileWebMemberInfoUL'));
		}
	});
}
