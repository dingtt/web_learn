# 视频

## 视频播放协议

### HLS

Extended M3U（m3u8）Playlist 文件，用于寻找可用的媒体流。

如果要做视频版权保护，那我们可以考虑使用对称加密算法，比如 AES-128 对切片进行对称加密。当客户端进行播放时，先根据 m3u8 文件中配置的密钥服务器地址，获取对称加密的密钥，然后再下载分片，当分片下载完成后再使用匹配的对称加密算法进行解密播放。

hlv.js

基于 HLS 流媒体协议视频加密的解决方案框架 [video-hls-encrypt](https://github.com/hauk0101/video-hls-encrypt) 

FFmpeg

### DASH

**基于 HTTP 的动态自适应流**

MPEG-DASH 是首个基于 HTTP 的自适应比特率流解决方案，MPEG-DASH 客户端可以无缝适应不断变化的网络条件并提供高质量的播放体验，**可以接受任何编码格式编码的内容**

### FLV

FLV 是 FLASH Video 的简称，FLV 文件由 FLV Header 和 FLV Body 两部分构成，而 FLV Body 由一系列的 Tag 构成：

flv.js

[flv.js](https://github.com/Bilibili/flv.js/) 是用纯 JavaScript 编写的 HTML5 Flash Video（FLV）播放器，它底层依赖于 [Media Source Extensions](https://w3c.github.io/media-source/)。在实际运行过程中，它会自动解析 FLV 格式文件并喂给原生 HTML5 Video 标签播放音视频数据

vue视频播放器插件  video.js