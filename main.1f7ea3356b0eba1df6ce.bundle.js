webpackJsonp([1],{"+h1B":function(n,t,l){"use strict";var e=l("/oeL"),u=l("aR8+"),i=l("wQAS"),o=l("q4dy"),r=l("qbdv"),c=l("fc+i"),s=l("q6gn");l.d(t,"a",function(){return a});var a=e.b(u.a,[i.a],function(n){return e.c([e.d(512,e.e,e.f,[[8,[o.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,r.a,r.b,[e.h]),e.d(4608,e.j,e.j,[]),e.d(5120,e.k,e.l,[]),e.d(5120,e.m,e.n,[]),e.d(5120,e.o,e.p,[]),e.d(4608,c.b,c.c,[c.d]),e.d(6144,e.q,null,[c.b]),e.d(4608,c.e,c.f,[]),e.d(5120,c.g,function(n,t,l,e){return[new c.h(n),new c.i(t),new c.j(l,e)]},[c.d,c.d,c.d,c.e]),e.d(4608,c.k,c.k,[c.g,e.r]),e.d(135680,c.l,c.l,[c.d]),e.d(4608,c.m,c.m,[c.k,c.l]),e.d(6144,e.s,null,[c.m]),e.d(6144,c.n,null,[c.l]),e.d(4608,e.t,e.t,[e.r]),e.d(4608,c.o,c.o,[c.d]),e.d(4608,c.p,c.p,[c.d]),e.d(4608,s.a,s.a,[]),e.d(512,r.c,r.c,[]),e.d(1024,e.u,c.q,[]),e.d(1024,e.v,function(n,t){return[c.r(n,t)]},[[2,c.s],[2,e.w]]),e.d(512,e.x,e.x,[[2,e.v]]),e.d(131584,e.y,e.y,[e.r,e.z,e.A,e.u,e.e,e.x]),e.d(2048,e.B,null,[e.y]),e.d(512,e.C,e.C,[e.B]),e.d(512,c.t,c.t,[[3,c.t]]),e.d(512,u.a,u.a,[])])})},0:function(n,t,l){n.exports=l("cDNt")},FhRd:function(n,t,l){"use strict";var e=l("rlar"),u=(l.n(e),l("q6gn"));l.d(t,"a",function(){return i});var i=function(){function n(n){this.timeSource=n,this.running=!1,this.accumulatedTime=0,this.stateSource=new e.Subject,this.state$=this.stateSource.asObservable()}return n.prototype.reset=function(){this.running=!1,this.accumulatedTime=0,this.initTime=this.timeSource.currentTimeMillis(),this.stateSource.next(!1)},n.prototype.start=function(){this.isRunning()||(this.running=!0,this.initTime=this.timeSource.currentTimeMillis(),this.stateSource.next(!0))},n.prototype.stop=function(){this.isRunning()&&(this.running=!1,this.accumulatedTime+=this.getSegmentRunningTime(),this.stateSource.next(!1))},n.prototype.toggle=function(){this.isRunning()?this.stop():this.start()},n.prototype.isRunning=function(){return this.running},n.prototype.getTime=function(){return this.isRunning()?this.getTotalRunningTime():this.accumulatedTime},n.prototype.read=function(){var n=Math.floor(this.getTime()/10),t=0,l=0,e=0,u=0;return u=n%100,n=(n-u)/100,e=n%60,n=(n-e)/60,l=n%60,n=(n-l)/60,t=n,l<1&&(l=0),t<1&&(t=0),e<1&&(e=0),[t,l,e,u]},n.prototype.getSegmentRunningTime=function(){return this.timeSource.currentTimeMillis()-this.initTime},n.prototype.getTotalRunningTime=function(){return this.getSegmentRunningTime()+this.accumulatedTime},n.ctorParameters=function(){return[{type:u.a}]},n}()},IL5k:function(n,t,l){"use strict";function e(n){return r._12(0,[(n()(),r._13(0,null,null,1,"a",[["class","timer-close-button"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.close()&&e}return e},null,null)),(n()(),r._14(null,["\n        ×\n    "]))],null,null)}function u(n){return r._12(0,[r._20(0,c.g,[r.h]),(n()(),r._13(0,null,null,18,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),r._14(null,["\n    "])),(n()(),r._18(16777216,null,null,1,null,e)),r._16(16384,null,0,c.h,[r._2,r._3],{ngIf:[0,"ngIf"]},null),(n()(),r._14(null,["\n    "])),(n()(),r._13(0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),r._14(null,["\n        "])),(n()(),r._13(0,null,null,3,"div",[["class","small-12 column"]],null,null,null,null,null)),(n()(),r._14(null,["\n            "])),(n()(),r._13(0,null,null,0,"input",[["type","text"]],null,null,null,null,null)),(n()(),r._14(null,["\n        "])),(n()(),r._14(null,["\n    "])),(n()(),r._14(null,["\n    "])),(n()(),r._13(0,null,null,4,"div",[["class","timerclock"]],null,null,null,null,null)),(n()(),r._14(null,["\n        ","H ","M ",".","S (","H)\n    "])),r._21(2),r._21(2),r._21(2),(n()(),r._14(null,["\n"])),(n()(),r._14(null,["\n"]))],function(n,t){n(t,4,0,t.component.showCloseButton)},function(n,t){var l=t.component;n(t,1,0,l.divClass+" timer"),n(t,15,0,l.runtime[0],l.runtime[1],r._22(t,15,2,n(t,16,0,r._23(t,0),l.runtime[2],"2.0-0")),r._22(t,15,3,n(t,17,0,r._23(t,0),l.runtime[3],"2.0-0")),r._22(t,15,4,n(t,18,0,r._23(t,0),l.fractionalHours,"1.2-2")))})}function i(n){return r._12(0,[(n()(),r._13(0,null,null,2,"app-timer",[],null,null,null,u,d)),r._15(512,null,a.a,a.a,[m.a]),r._16(114688,null,0,s.a,[a.a],null,null)],function(n,t){n(t,2,0)},null)}var o=l("chHH"),r=l("/oeL"),c=l("qbdv"),s=l("qXVe"),a=l("FhRd"),m=l("q6gn");l.d(t,"b",function(){return d}),t.a=u;var p=[o.a],d=r._11({encapsulation:0,styles:p,data:{}});r._19("app-timer",s.a,i,{showCloseButton:"showCloseButton"},{onClose:"onClose"},[])},NhKt:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=['app-timer[_ngcontent-%COMP%]{cursor:pointer}div.plus-sign[_ngcontent-%COMP%]{position:relative;height:150px}div.plus-sign[_ngcontent-%COMP%]:before{content:"+";font-size:10rem;text-align:center;color:#ccc;display:block;height:150px;line-height:150px}div.add-timer[_ngcontent-%COMP%]   .callout[_ngcontent-%COMP%]{background-color:#777;height:250px;cursor:pointer}div.add-timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ccc;font-size:2rem;display:block;text-align:center}']},"aR8+":function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){}return n}()},cDNt:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("/oeL"),u=l("p5Ee"),i=l("+h1B"),o=l("fc+i");u.a.production&&l.i(e.a)(),l.i(o.a)().bootstrapModuleFactory(i.a)},chHH:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=[".timer[_ngcontent-%COMP%]{min-height:250px}.timerclock[_ngcontent-%COMP%]{position:absolute;bottom:0;display:inline-block;max-width:200px;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}input[_ngcontent-%COMP%]{text-align:center;border-radius:5px}.timer-close-button[_ngcontent-%COMP%]{color:#8a8a8a;cursor:pointer;font-size:1.4rem;line-height:1;position:absolute;top:-.2rem;right:.2rem}.timer-close-button[_ngcontent-%COMP%]:hover{color:#000}"]},p5Ee:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e={production:!0}},q4dy:function(n,t,l){"use strict";function e(n){return r._12(0,[(n()(),r._13(0,null,null,6,"div",[["class","small-6 medium-4 column"]],null,null,null,null,null)),(n()(),r._14(null,["\n        "])),(n()(),r._13(0,null,null,3,"app-timer",[],null,[[null,"click"],[null,"onClose"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.clk(n.context.$implicit,l)&&e}if("onClose"===t){e=!1!==u.doClose(n.context.$implicit)&&e}return e},c.a,c.b)),r._15(512,null,s.a,s.a,[a.a]),r._16(114688,[[1,4]],0,m.a,[s.a],{showCloseButton:[0,"showCloseButton"]},{onClose:"onClose"}),(n()(),r._14(null,["\n        "])),(n()(),r._14(null,["\n    "]))],function(n,t){n(t,4,0,!0)},null)}function u(n){return r._12(0,[r._17(671088640,1,{timerComponents:1}),(n()(),r._14(null,["\n"])),(n()(),r._13(0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(n()(),r._14(null,["\n    "])),(n()(),r._18(16777216,null,null,1,null,e)),r._16(802816,null,0,p.f,[r._2,r._3,r.m],{ngForOf:[0,"ngForOf"]},null),(n()(),r._14(null,["\n    "])),(n()(),r._13(0,null,null,6,"div",[["class","small-6 medium-4 column add-timer end"]],null,[[null,"click"]],function(n,t,l){var e=!0,u=n.component;if("click"===t){e=!1!==u.clkAddTimer()&&e}return e},null,null)),(n()(),r._14(null,["\n        "])),(n()(),r._13(0,null,null,3,"div",[["class","callout"]],null,null,null,null,null)),(n()(),r._14(null,["\n            "])),(n()(),r._13(0,null,null,0,"div",[["class","plus-sign"]],null,null,null,null,null)),(n()(),r._14(null,["\n        "])),(n()(),r._14(null,["\n    "])),(n()(),r._14(null,["\n"])),(n()(),r._14(null,["\n"]))],function(n,t){n(t,5,0,t.component.timers)},null)}function i(n){return r._12(0,[(n()(),r._13(0,null,null,1,"app-root",[],null,null,null,u,h)),r._16(4308992,null,0,d.a,[],null,null)],function(n,t){n(t,1,0)},null)}var o=l("NhKt"),r=l("/oeL"),c=l("IL5k"),s=l("FhRd"),a=l("q6gn"),m=l("qXVe"),p=l("qbdv"),d=l("wQAS");l.d(t,"a",function(){return _});var f=[o.a],h=r._11({encapsulation:0,styles:f,data:{}}),_=r._19("app-root",d.a,i,{},{},[])},q6gn:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){}return n.prototype.currentTimeMillis=function(){return+new Date},n.prototype.currentDate=function(){return new Date},n}()},qXVe:function(n,t,l){"use strict";var e=l("/oeL"),u=l("FhRd");l.d(t,"a",function(){return i});var i=function(){function n(n){this.timerService=n,this.showCloseButton=!1,this.runtime=[0,0,0,0],this.fractionalHours=0,this.divClass="callout warning",this.onClose=new e.V}return n.prototype.ngOnInit=function(){var n=this,t=this;setInterval(function(){t.runtime=t.timerService.read(),t.fractionalHours=t.timerService.getTime()/1e3/3600},10),this.timerService.state$.subscribe(function(t){n.divClass=!0===t?"callout success":"callout warning"})},n.prototype.close=function(){this.onClose.emit()},n.prototype.toggle=function(){this.timerService.toggle()},n.prototype.stop=function(){this.timerService.stop()},n.prototype.start=function(){this.timerService.start()},n.ctorParameters=function(){return[{type:u.a}]},n}()},qtrl:function(n,t){function l(n){throw new Error("Cannot find module '"+n+"'.")}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="qtrl"},wQAS:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(){this.title="App",this.timers=[0],this.maxTimer=0}return n.prototype.ngOnInit=function(){},n.prototype.clk=function(n,t){if("input"===t.toElement.tagName.toLowerCase()||"a"===t.toElement.tagName.toLowerCase())return!0;var l=this.timers.indexOf(n),e=this.timerComponents.toArray();if(e[l].toggle(),e[l].timerService.isRunning())for(var u=0,i=e;u<i.length;u++){var o=i[u];o!==e[l]&&o.stop()}},n.prototype.doClose=function(n){this.timers.indexOf(n);this.timers.splice(n,1)},n.prototype.clkAddTimer=function(){this.timers.push(++this.maxTimer)},n.prototype.ngAfterViewInit=function(){this.timerComponents.map(function(n){return n.stop()})},n}()}},[0]);