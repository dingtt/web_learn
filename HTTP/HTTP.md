# HTTP协议请求方法和状态码

HTTP是一个无状态的协议，简单的可以理解为即使同一个客户端连续两次发送请求给服务器，服务器也无法识别这个同一个客户端发的请求。为了解决 HTTP 无状态导致的问题（HTTP1.x），后来出现了 Cookie。

请求部分，第一行被称作 request line，它分为三个部分，HTTP Method，也就是请求的“方法”，请求
的路径和请求的协议和版本。  

响应部分，第一行被称作 response line，它也分为三个部分，协议和版本、状态码和状态文本 。

## 常见的HTTP请求方法

| 方法    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| GET     | 请求指定页面的信息并返回实体主体，如果是文件，返回文件内容；如果是CGI程序，返回该程序的输出数据。 |
| HEAD    | 类似于GET，返回的响应中没有具体的内容，只有消息头，用于获取文件最好更新时间等属性信息。 |
| POST    | 向指定的资源提交数据进行处理请求，数据包含在请求体中         |
| PUT     | 从客户端向服务端传递数据取代指定的文档内容，如果文件不存在则创建该文件。 |
| DELETE  | 请求服务器删除指定的内容                                     |
| OPTIONS | 用于通知或查询通信选项                                       |
| TRACE   | 将服务器收到的请求行和头部直接返回给客户端，用于再使用代理的环境中检查改写请求的情况。 |
| CONNECT | 使用代理传输加密消息时使用的方法                             |

## HTTP1.1支持的状态码

| 状态码 | 已定义范围 | 分类                                       |
| ------ | ---------- | ------------------------------------------ |
| 1XX    | 100~101    | 信息提示，请求已被接收成功，继续处理       |
| 2XX    | 200~206    | 成功，标识请求已被成功接收、理解接受       |
| 3XX    | 300~305    | 重定向，要完成的请求，必须进行进一步的处理 |
| 4XX    | 400~415    | 客户端错误，请求有语法错误或请求无法实现   |
| 5XX    | 500~505    | 服务器错误，服务器未能实现合法的请求       |

## 常见的状态码

| 名称    | 释义                                                         |
| ------- | ------------------------------------------------------------ |
| 200     |                                                              |
| 204     | No Content 返回的响应中只有一个状态行和一些响应头，没有响应的Body。常用于：了解资源情况，查看对象是否存在，通过Header查看资源是否被修改 |
| 206     | 仅限GET方法，代表服务器已经成功处理了部分GET请求。配合请求头中的Range和响应头中的Content—Range，常用于断电续传，流媒体技术，如视频HLS |
| 301/302 | 请求的URL已已移走，Response中应该包含一个Location URL，说明资源限制所处的位置。301永久重定向，旧的资源已经被永久移除了，例如更换了域名，设置旧域名301；302临时重定向，旧的资源还在，仍然可以访问，例如未登录，跳转到登录页面。 |
| 304     | Not Modified 未修改。客户端本地已有缓存版本，并且通过request告诉了服务端，当服务端通过时间或者tag，发现没有更新的适合，就会返回一个不含body的304状态。 |
| 401     | Unauthorized未授权错误                                       |
| 403     | Forbidden 服务器拒绝请求，无权限。                           |
| 404     | Not Found 未找到，资源不存在                                 |
| 500     | Internal Server Error 服务器内部错误，无法对请求提供服务     |
| 503     | 服务器暂时不可用，维护或过载等。                             |
|         |                                                              |

## HTTP请求Header

**通用头**

| 名称               | 释义                                                     |      |
| ------------------ | -------------------------------------------------------- | ---- |
| Date               | 日期                                                     |      |
| Pragma             | HTTP1.0 控制缓存的时效性                                 |      |
| Cache-Control      | 控制缓存的时效性                                         |      |
| Connection         | 连接方式，如果是keep-alive，并且服务端支持，则会复用连接 |      |
| Transfer-Encodeing | 消息主体的编码格式                                       |      |
| Via                | 记录途中经过的代理和网关                                 |      |

**请求头**

| 名称                | 释义                                     |
| ------------------- | ---------------------------------------- |
| Authorization       |                                          |
| From                |                                          |
| If-Modified-Since   | 上传访问时的更改时间                     |
| Referer             | 来源                                     |
| User-agent          | 客户端标识                               |
| Accept              | 浏览器端接受的格式                       |
| Accept-Charset      |                                          |
| Accept-Encoding     | 浏览器端接受的编码方式                   |
| Accept-Language     | 浏览器端接受的语言，用于服务端判断多语言 |
| Host                | 域名                                     |
| If-Match            |                                          |
| If-None-Match       | 上次访问时使用的E-Tag                    |
| If-Unmodified-Since |                                          |
| Range               |                                          |

**响应头**

| 名称                         | 取值                                                         | 释义                                                         |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Location                     |                                                              |                                                              |
| Server                       |                                                              | 服务端语言                                                   |
| WWW-Authenticate             |                                                              |                                                              |
| Accept-Ranges                |                                                              |                                                              |
| Access-Control-allow-origins |                                                              |                                                              |
| Set-Cookie                   | Set-Cookie: id=aad3fWa; Expires=Wed, 21 May 2020 07:28:00 GMT;Max-Age=604800; Secure HTTPOnly SameSite | Expires 属性缺省时，值为 Session时，表示是会话性 Cookie，值保存在客户端内存中，并在用户关闭浏览器时失效；Max-Age用于设置在 Cookie 失效之前需要经过的秒数;Expires 和 Max-Age 都存在，Max-Age 优先级更高；Domain 指定了 Cookie 可以送达的主机名；Path=/docs`，`/docs/Web/；Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL；SameSite 属性可以让 Cookie 在跨站请求时（src href get post iframe）不会被发送 |

**实体头**

| Allow            |                                                      |      |
| ---------------- | ---------------------------------------------------- | ---- |
| Content-Encoding | 内容编码方式，通常是gzip                             |      |
| Content-Length   | 内容的长度，有利于浏览器判断内容是否结束             |      |
| Content-Type     | 内容类型，MIME。                                     |      |
| Expires          | 过期时间，                                           |      |
| Last-Modified    | 页面最后修改时间                                     |      |
| Content-language |                                                      |      |
| Content-Location |                                                      |      |
| Content-Range    |                                                      |      |
| Etag             | 页面的信息摘要，用于判断是否需要重新到服务端取回页面 |      |

使用html的form标签提交产生的html请求，默认会产生	application/x-www-form-urlencoded	的数据 格式，当有文件上传时，则会使用multipart/form-data

### HTTP请求头中于缓存相关的Header

| 名称                | 取值                    | 释义                         |
| ------------------- | ----------------------- | ---------------------------- |
| Cache-Control       | max-age=0，以秒为单位； |                              |
| If-Modefied-Since   | 时间                    | 从缓存文件获取的最后修改时间 |
| if-Unmodified-Since |                         |                              |
| If-None-Match       | 字符哈希                | 缓存文件的Etag               |
| If-Match            |                         |                              |

### HTTP响应头中与缓存相关的Header

| 名称                                  | 取值                                  | 释义                                                         |
| ------------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| Cache-Control(HTTP1.1，优先于Expires) | max-age=6000                          | no-cache需要使用协商缓存来验证数据；   public客户端和代理服务器都能缓存，响应被缓存，并且在多用户间共享；private,客户端可以缓存，响应自能作为私有缓存，不能再用户之间共享；no-store，绝对禁止缓存；max-age=60，60s之后缓存过期。如果同时存在Cache-Control和Expires，优先使用前者 200(from memory cache) |
| Date                                  | 当前响应发送的时间                    |                                                              |
| Expires(HTTP1.0)                      | Expires:Mon, 29 Jun 2020 11:10:23 GMT | 强缓存，缓存过期的时间，绝对时间。*服务器的时间和浏览器的时间可能并不一致* |
| Last-modified（性能更好）             | 绝对时间                              | 协商缓存，服务器中该资源的最后修改时间，服务器拿到请求头中的`If-Modified-Since`的字段后，其实会和这个时间做对比。单位时间是秒。未修改304 |
| ETag（优先级高，精度更准）            | hash值                                | 协商缓存，Etag用于某些服务器不能精确得到文件的最后修改时间，某些文件的修改非常频繁，文件修改时间变量但内容未变 |
| pragma                                | HTTP1.0中的                           |                                                              |
|                                       |                                       |                                                              |

#### 缓存位置

Service Worker Cache PWA使用的 ，内存缓存Memory Cache，渲染进程结束后消失；Disk Cache 磁盘缓存

图片文件是磁盘缓存。

### HTTP协议压缩

Content-Encoding:gzip

gzip compress deflate都是无损压缩算法，图片不适合使用gzip压缩。

### URL Encode

URL Uniform Resource locator 统一资源定位符

FTP File Transfer Protocol 文件传送协议  

访问方法（包含协议）：服务器域名 计算机名localhost ：端口号 文件的路径 

URL Encode就是把所有非英文字母，数字字符都替换成百分号（%）后加两位十六进制数，比如空格的编码为“%20”

协议栈：操作系统中的网络控制软件，将消息打包加上目的地等控制信息，错误时重新发包，调节数据发送速率。

网卡会将包转换为电信号，

### HTTPS

### HTTP 2