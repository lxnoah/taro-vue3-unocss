export default {
  pages: [
    "pages/spread/index",
    "pages/income/index",
    "pages/mine/index",
  ],
  tabBar: { 
    color: "#9C9891",
    selectedColor: "#333",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/spread/index",
        iconPath: "images/tabbar/menu-home-def.png",
        selectedIconPath: "images/tabbar/menu-home.png",
        text: "推广",
      },
      {
        pagePath: "pages/income/index",
        iconPath: "images/tabbar/menu-wallet-def.png",
        selectedIconPath: "images/tabbar/menu-wallet.png",
        text: "收益",
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "images/tabbar/menu-mine-def.png",
        selectedIconPath: "images/tabbar/menu-mine.png",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: 'custom'
  },
};
