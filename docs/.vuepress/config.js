module.exports = {
  title: "娟子的博客",
  // head: [
  // 注入到当前页面的 HTML <head> 中的标签
  // ["link", { rel: "icon", href: "/avatar.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  themeConfig: {
    // logo: "/avatar.png", // 左上角logo
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      { text: "CSDN", link: "http://www.baidu.com" },
      { text: "Github", link: "https://github.com/Olliverzhang" },
    ],
    sidebar: "auto", // 侧边栏配置
  },
};
