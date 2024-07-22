import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir: "docs", // 打包输出的目录
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home导航', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // 左侧
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // 必须配合 git 才有效 git 提交这个文件的时间 它就会被列为最后修改时间
    lastUpdated: {
      text: '最后更改时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      }
    },
    // 搜索
    search: {
      provider: 'local',
    },

    // 固定的几个模式 youtobe tuitter
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
