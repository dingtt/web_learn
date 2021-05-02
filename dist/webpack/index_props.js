import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "React的生命周期",
        "link": "react/lifecycle.html"
    },
    'next': {
        "text": "webpack的使用",
        "link": "webpack/webpack-use.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'gh-pages' },
    'pagePath': "webpack/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "webpack/index.html",
    'title': "Webpack",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Webpack</h1>\n<h2 id="%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE">基本配置<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE">§</a></h2>\n<h2 id="%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90%E5%8F%8A%E5%8E%9F%E7%90%86">模块解析及原理<a class="anchor" href="#%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90%E5%8F%8A%E5%8E%9F%E7%90%86">§</a></h2>\n<p>常用loader</p>\n<p>常用plugins</p>\n<p>写loader</p>\n<p>写plugin</p>\n<p>最佳实践</p>\n<p>webpack-dev-server</p>\n<p>HMR热更新</p>\n<p>构建速度</p>\n<p>性能优化</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Webpack"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE">基本配置<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE">§</a></h2>\n<h2 id="%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90%E5%8F%8A%E5%8E%9F%E7%90%86">模块解析及原理<a class="anchor" href="#%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90%E5%8F%8A%E5%8E%9F%E7%90%86">§</a></h2>\n<p>常用loader</p>\n<p>常用plugins</p>\n<p>写loader</p>\n<p>写plugin</p>\n<p>最佳实践</p>\n<p>webpack-dev-server</p>\n<p>HMR热更新</p>\n<p>构建速度</p>\n<p>性能优化</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE" }, "\u57FA\u672C\u914D\u7F6E")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90%E5%8F%8A%E5%8E%9F%E7%90%86" }, "\u6A21\u5757\u89E3\u6790\u53CA\u539F\u7406")))),
    'author': "dingtt",
    'contributors': [
        "dingtt",
        "dingdtt"
    ],
    'date': "2020-06-23T13:42:45.000Z",
    'updated': "2020-10-16T08:42:52.000Z",
    'excerpt': "基本配置 模块解析及原理 常用loader 常用plugins 写loader 写plugin 最佳实践 webpack-dev-server HMR热更新 构建速度 性能优化",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Hello world",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "link": "WebAPI/README.md",
            "children": [],
            "text": "WebAPI/README.md"
        },
        {
            "link": "HTTP/index.html",
            "children": [
                {
                    "text": "浏览器",
                    "link": "HTTP/browser.html",
                    "pagePath": "HTTP/browser.md"
                },
                {
                    "text": "HTTP协议请求方法和状态码",
                    "link": "HTTP/HTTP.html",
                    "pagePath": "HTTP/HTTP.md"
                },
                {
                    "text": "网络硬件",
                    "link": "HTTP/internet-hardware.html",
                    "pagePath": "HTTP/internet-hardware.md"
                }
            ],
            "pagePath": "HTTP/README.md",
            "text": "HTTP协议与浏览器"
        },
        {
            "link": "js/todo.md",
            "children": [
                {
                    "text": "JavaScript基础",
                    "link": "js/basics.html",
                    "pagePath": "js/basics.md"
                },
                {
                    "text": "基础",
                    "link": "js/Object.html",
                    "pagePath": "js/Object.md"
                },
                {
                    "text": "执行上下文",
                    "link": "js/context.html",
                    "pagePath": "js/context.md"
                },
                {
                    "text": "闭包和面向对象",
                    "link": "js/closure.html",
                    "pagePath": "js/closure.md"
                },
                {
                    "text": "正则",
                    "link": "js/regex.html",
                    "pagePath": "js/regex.md"
                },
                {
                    "text": "算法",
                    "link": "js/algo.html",
                    "pagePath": "js/algo.md"
                },
                {
                    "text": "JS设计模式",
                    "link": "js/design-patterns.html",
                    "pagePath": "js/design-patterns.md"
                }
            ],
            "text": "js/todo.md"
        },
        {
            "link": "TS/index.html",
            "children": [
                {
                    "text": "TS基础",
                    "link": "TS/basics.html",
                    "pagePath": "TS/basics.md"
                },
                {
                    "text": "TS枚举 类型 接口 泛型",
                    "link": "TS/enum.html",
                    "pagePath": "TS/enum.md"
                }
            ],
            "pagePath": "TS/README.md",
            "text": "TS"
        },
        {
            "link": "vue/index.html",
            "children": [
                {
                    "text": "Vue开发技巧",
                    "link": "vue/vue-skills.html",
                    "pagePath": "vue/vue-skills.md"
                },
                {
                    "text": "Vue组件通信",
                    "link": "vue/vue-communication.html",
                    "pagePath": "vue/vue-communication.md"
                },
                {
                    "text": "Vue路由",
                    "link": "vue/vue-router/vue-router.html",
                    "pagePath": "vue/vue-router/vue-router.md"
                }
            ],
            "pagePath": "vue/README.md",
            "text": "Vue"
        },
        {
            "text": "React的生命周期",
            "link": "react/lifecycle.html",
            "pagePath": "react/lifecycle.md"
        },
        {
            "link": "webpack/index.html",
            "children": [
                {
                    "text": "webpack的使用",
                    "link": "webpack/webpack-use.html",
                    "pagePath": "webpack/webpack-use.md"
                },
                {
                    "text": "Webpack打包原理解析",
                    "link": "webpack/webpack-principle.html",
                    "pagePath": "webpack/webpack-principle.md"
                },
                {
                    "text": "生产环境配置",
                    "link": "webpack/webpack-dev-config.html",
                    "pagePath": "webpack/webpack-dev-config.md"
                },
                {
                    "text": "实现自己的loader",
                    "link": "webpack/webpack-custom-loader.html",
                    "pagePath": "webpack/webpack-custom-loader.md"
                },
                {
                    "text": "实现自己的plugin",
                    "link": "webpack/webpack-custom-plugin.html",
                    "pagePath": "webpack/webpack-custom-plugin.md"
                },
                {
                    "text": "webpack代码分片",
                    "link": "webpack/webpack-split-chunks.html",
                    "pagePath": "webpack/webpack-split-chunks.md"
                },
                {
                    "text": "webpack-dev-server 与 HMR",
                    "link": "webpack/webpack-dev-server-hmr.html",
                    "pagePath": "webpack/webpack-dev-server-hmr.md"
                }
            ],
            "pagePath": "webpack/README.md",
            "text": "Webpack"
        },
        {
            "text": "前端监控简介",
            "link": "web-monitor/web-monitor.html",
            "pagePath": "web-monitor/web-monitor.md"
        },
        {
            "text": "Git使用",
            "link": "git/git.html",
            "pagePath": "git/git.md"
        }
    ]
};
