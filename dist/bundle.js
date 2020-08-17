!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,u){function i(e){try{s(o.next(e))}catch(e){u(e)}}function c(e){try{s(o.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),u=n(2),i=n(3),c=u.default({dev:!1,dir:"./client/"}),s=c.getRequestHandler(),l=process.env.PORT||3e3;o(void 0,void 0,void 0,(function*(){try{yield c.prepare();const t=r(),o=n(4);var e=n(5)("production");Object.keys(e).forEach(t=>{process.env[t]=e[t]}),t.use(r.json()),t.use(i()),t.use("/",o),t.use("/joint/",r.static("./server/public/")),t.all("*",(e,t)=>s(e,t)),t.listen(l,e=>{if(e)throw e;console.log(`> Ready on localhost:${l} - env production \n`)})}catch(e){console.error(e),process.exit(1)}}))},function(e,t){e.exports=require("next")},function(e,t){e.exports=require("cookie-parser")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0).Router();o.get("/hello",(e,t)=>t.json({say:"Hi",developer:"PhiberSoft"})),e.exports=o},function(e,t){e.exports=e=>{const t={};return"production"===e?{...t}:{DB_USER:"postgres",DB_PASSWORD:"alakamyok8",DB_HOST:"localhost",DB_DATABASE:"",...t}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2Vudi5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInJlcXVpcmUiLCJjb29raWVQYXJzZXIiLCJhcHAiLCJkZXYiLCJkaXIiLCJoYW5kbGUiLCJnZXRSZXF1ZXN0SGFuZGxlciIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsInByZXBhcmUiLCJzZXJ2ZXIiLCJleHByZXNzIiwicm91dGVzIiwianNvbiIsImtleXMiLCJmb3JFYWNoIiwiayIsInVzZSIsInN0YXRpYyIsImFsbCIsInJlcSIsInJlcyIsImxpc3RlbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZXJyb3IiLCJleGl0Iiwicm91dGVyIiwiUm91dGVyIiwic2F5IiwiZGV2ZWxvcGVyIiwiZnJpZW5kc2hpcCIsIkRCX1VTRVIiLCJEQl9QQVNT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UUFBUUcsTUFBTUQsR0FDZHBCLFFBQVFzQixLQUFLLFEsY0NqQ2pCL0QsRUFBT0QsUUFBVWtDLFFBQVEsUyxjQ0F6QmpDLEVBQU9ELFFBQVVrQyxRQUFRLGtCLDhFQ0F6QixNQUVNK0IsRUFGTixLQUV1Q0MsU0FDdkNELEVBQU9sRCxJQUFJLFNBQVUsQ0FBQ3lDLEVBQXNCQyxJQUMxQ0EsRUFBSVIsS0FBSyxDQUFFa0IsSUFBSyxLQUFNQyxVQUFXLGdCQUVuQ25FLEVBQU9ELFFBQVVpRSxHLGNDTmpCaEUsRUFBT0QsUUFBVzJDLElBQ2hCLE1BQU0wQixFQUFhLEdBRW5CLE1BQVksZUFBUjFCLEVBQ0ssSUFDRjBCLEdBR0UsQ0FDTEMsUUFBUyxXQUNUQyxZQUFhLGFBQ2JDLFFBQVMsWUFDVEMsWUFBYSxNQUNWSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcclxuY29uc3QgY29va2llUGFyc2VyID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7XHJcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIjtcclxuY29uc3QgYXBwID0gbmV4dCh7IGRldiwgZGlyOiBcIi4vY2xpZW50L1wiIH0pO1xyXG5jb25zdCBoYW5kbGUgPSBhcHAuZ2V0UmVxdWVzdEhhbmRsZXIoKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGFwcC5wcmVwYXJlKCk7XHJcbiAgICBjb25zdCBzZXJ2ZXIgPSBleHByZXNzKCk7XHJcbiAgICBjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwiLi9yb3V0ZXNcIik7XHJcbiAgICB2YXIganNvbjogb2JqZWN0ID0gcmVxdWlyZShcIi4vLi4vZW52XCIpKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcclxuICAgIE9iamVjdC5rZXlzKGpzb24pLmZvckVhY2goKGspID0+IHtcclxuICAgICAgcHJvY2Vzcy5lbnZba10gPSBqc29uW2tdO1xyXG4gICAgfSk7XHJcbiAgICBzZXJ2ZXIudXNlKGV4cHJlc3MuanNvbigpKTtcclxuICAgIHNlcnZlci51c2UoY29va2llUGFyc2VyKCkpO1xyXG4gICAgc2VydmVyLnVzZShcIi9cIiwgcm91dGVzKTtcclxuICAgIFxyXG4gICAgc2VydmVyLnVzZShcIi9qb2ludC9cIiwgZXhwcmVzcy5zdGF0aWMoXCIuL3NlcnZlci9wdWJsaWMvXCIpKTtcclxuICAgIHNlcnZlci5hbGwoXCIqXCIsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBoYW5kbGUocmVxLCByZXMpO1xyXG4gICAgfSk7XHJcbiAgICBzZXJ2ZXIubGlzdGVuKHBvcnQsIChlcnI/OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgPiBSZWFkeSBvbiBsb2NhbGhvc3Q6JHtwb3J0fSAtIGVudiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfSBcXG5gXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxufSkoKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmNvbnN0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5yb3V0ZXIuZ2V0KFwiL2hlbGxvXCIsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PlxyXG4gIHJlcy5qc29uKHsgc2F5OiBcIkhpXCIsIGRldmVsb3BlcjogXCJQaGliZXJTb2Z0XCIgfSlcclxuKTtcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKGVudikgPT4ge1xyXG4gIGNvbnN0IGZyaWVuZHNoaXAgPSB7fTtcclxuXHJcbiAgaWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmZyaWVuZHNoaXAsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBEQl9VU0VSOiBcInBvc3RncmVzXCIsXHJcbiAgICAgIERCX1BBU1NXT1JEOiBcImFsYWthbXlvazhcIixcclxuICAgICAgREJfSE9TVDogXCJsb2NhbGhvc3RcIixcclxuICAgICAgREJfREFUQUJBU0U6IFwiXCIsXHJcbiAgICAgIC4uLmZyaWVuZHNoaXAsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==