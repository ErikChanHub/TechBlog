import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: '你好，  ！',
  description: '这是我的第一个站点',
  head: [
    ['link',
        { rel: 'icon', href: '/logo.png' }
        //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Article',
        link: '/guide/',
      },
      {
        text: 'Category',
        link: '/category/',
      },
      {
        text: 'Tag',
        link: '/tag/',
      },
      {
        text: 'Timeline',
        link: '/timeline/',
      },
    ],

    sidebar: [
        // SidebarItem
        {
          text: 'Foo',
          prefix: '/foo/',
          link: '/foo/',
          children: [
            // SidebarItem
            {
              text: 'github',
              link: 'https://github.com',
              children: [],
            },
            // 字符串 - 页面文件路径
            'bar.md', // 解析为 `/foo/bar.md`
            '/ray.md', // 解析为 `/ray.md`
          ],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
  }),
})
