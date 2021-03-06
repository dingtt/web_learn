#  浏览器

### 进程和线程

##### 进程

​	程序的一次执行,  它占有一片独有的内存空间

##### 线程

​	CPU的基本调度单位, 是程序执行的一个完整流程

##### 进程与线程的关系

​	一个进程中一般至少有一个运行的线程: 主线程
​	一个进程中也可以同时运行多个线程, 这时程序就是多线程运行的
​	一个进程内的数据可以供其中的多个线程直接共享
​	多个进程之间的数据是不能直接共享的

##### 浏览器运行是单进程还是多进程?

​	老版的大多数是单进程
​	新版的大多数是多进程
​	任务管理器 --->进程

##### 浏览器运行是单线程还是多线程?

​	都是多线程运行的

浏览器（多进程）包含了**Browser进程**（浏览器的主进程）、**第三方插件进程**和**GPU进程**（浏览器渲染进程），其中**GPU进程**（多线程）和Web前端密切相关，包含以下线程：

- **GUI渲染线程**
- **JS引擎线程**
- **事件触发线程**（和EventLoop密切相关）
- **定时触发器线程**
- **异步HTTP请求线程**

> **GUI渲染线程**和**JS引擎线程**是互斥的，为了防止DOM渲染的不一致性，其中一个线程执行时另一个线程会被挂起。

这些线程中，和Vue的`nextTick`息息相关的是**JS引擎线程**和**事件触发线程**

（**宏任务** > 渲染 > **宏任务** > ...）

**微任务**是在当前**宏任务**执行结束之后立即执行的任务（在当前 **宏任务**执行之后，UI渲染之前执行的任务）。

**微任务**的响应速度相比`setTimeout`（下一个**宏任务**）会更快，因为无需等待UI渲染。

### js是单线程的

1. ##### 验证1
	
	定时器并非定时执行
	原理
		setTimeout()的回调函数是在主线程执行的
		定时器回调函数只有在运行栈中的代码全部执行完后才有可能执行
	代码
	
   
   ```javascript
   var btn = document.getElementById('btn'), timerId = null;
    btn.onclick = function (ev) {
     // 0. 清除定时器
     clearTimeout(timerId);
     // 1. 获取当前的时间
     var cTime = Date.now();
     console.log('------之前-----');
     // 2. 开启定时器
    timerId = setTimeout(function () {
         console.log((Date.now() - cTime) + 'ms后执行');
     }, 200);
    console.log('------之后-----');
   
   ```

  // 3. 耗时的任务
	  for(var i = 0; i < 1000000000; i++){
	
	  }
	}
	```


​	
​	
2. 代码划分
	初始化代码
	回调代码
3. js引擎执行代码的基本流程
	先执行初始化代码: 包含一些特别的代码
		设置定时器
		绑定监听
		网络(ajax)
	后面在某个时刻才可能执行回调代码(异步)
4. 验证2
	// 1. 定时器1
setTimeout(function () {
 console.log('------2m');
}, 2000);
// 2. 定时器2
setTimeout(function () {
 console.log('------1m');
}, 1000);
// 3. 函数
function func() {
 console.log('--------func()');
}
func();
// 4. 弹窗
alert('阻断');
// 5. 后续操作
console.log('---------弹窗之后操作1-----');
console.log('---------弹窗之后操作2-----');
5. 为什么js要用单线程, 而不用多线程?
    JavaScript的单线程，与它的用途有关。
    作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。
    这决定了它只能是单线程，否则会带来很复杂的同步问题，比如一边增加dom，一边删除dom
    图示
6. **「JS阻塞DOM解析」**，也就会阻塞页面
7. 如果 JavaScript 文件中没有操作 DOM 相关代码，就可以将该 JavaScript 脚本设置为异步加载，通过 async 或 defer 来标记代码

#### **defer 和 async**

- 两者都是异步去加载外部JS文件，不会阻塞DOM解析
- Async是在外部JS加载完成后，浏览器空闲时，Load事件触发前执行,可能会在DOMContentLoaded之前或之后执行。标记为async的脚本并不保证按照指定他们的先后顺序执行，下载完成，立马执行。（此时才发生阻塞）。
- defer是在JS加载完成后，整个文档解析完成后，触发 `DOMContentLoaded` 事件前执行。

### CSS

- `CSS`不会阻塞`DOM`解析，但会阻塞`DOM`渲染。
- `CSS`会阻塞JS执行，并不会阻塞JS文件下载
- DOM 和 CSSOM通常是并行构建的，所以**「CSS 加载不会阻塞 DOM 的解析」**  renderObject  layerObject

#### requestAnimationFrame

### 各种高度

```
页可见区域宽： document.body.clientWidth;
网页可见区域高： document.body.clientHeight;
网页可见区域宽： document.body.offsetWidth (包括边线的宽);
网页可见区域高： document.body.offsetHeight (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;

```

**图片懒加载可视区域计算**

-  clientHeight-scrollTop-offsetTop
- element.getBoundingClientRect()



### 浏览器内核

简介
	支持浏览器运行的最核心的程序
	Chrome, Safari: webkit
	firefox: Gecko
	IE: Trident
	360,搜狗等国内浏览器: Trident + webkit
内核模块组成
	html,css文档解析模块
		负责页面文本的解析
	dom/css模块
		负责dom/css在内存中的相关处理
	布局和渲染模块
		负责页面的布局和效果的绘制
	定时器模块
		负责定时器的管理
	网络请求模块
		负责服务器请求(常规/Ajax)
	事件响应模块
		负责事件的管理
	......	

### 事件循环模型

1. 图示
	
	![image-20200625134628783](C:\Users\ding\AppData\Roaming\Typora\typora-user-images\image-20200625134628783.png)
	
2. 了解
    模型的组成
    	事件管理模块
    	回调队列
    代码分类
    	初始化执行代码(同步代码)
    		包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码
    	回调执行代码(异步代码)
    		处理回调逻辑
    模型的运转流程
    	执行初始化代码, 将事件回调函数交给对应模块管理
    	当事件发生时, 管理模块会将回调函数及其数据添加到回调列队中
    	只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行

**浏览器完成一个宏任务，在下一个宏任务执行开始前，会对页面进行重新渲染。**  

**如果存在微任务，浏览器会清空微任务之后再重新渲染。**  