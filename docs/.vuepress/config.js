/*
 * @Author: your name
 * @Date: 2020-06-13 15:17:20
 * @LastEditTime: 2020-06-13 22:27:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepresssBlog\docs\.vuepress\config.js
 */

module.exports = {
  title: "娟子的博客",
  base: "/vuepressBlog/", //部署到github的相关配置
  // head: [
  // 注入到当前页面的 HTML <head> 中的标签
  // ["link", { rel: "icon", href: "/avatar.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  themeConfig: {
    // logo: "/avatar.png", // 左上角logo
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      { text: "技术文档", link: "http://www.baidu.com" },
      { text: "CSDN", link: "http://www.baidu.com" },
      { text: "Github", link: "https://github.com/Olliverzhang" },
    ],
    sidebar: "auto", // 侧边栏配置
  },
};
