import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "同人术语胶囊",
  description: "帮你拆解同人圈黑话的胶囊词典",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://ftpod.unknownmp.top'
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FanWork Platform', link: 'https://fwp.unknownmp.top' },
    ],
    sidebar: [
      { text: '简介', link: '/intro' },
      { text: '反馈 & 共建', link: '/contact' },
      { text: '速查表', link: '/cheat-sheet' },
      {
        text: '基础知识',
        items: [
          { text: '配对类型', link: '/basic/pair-type' },
          { text: '结局类型', link: '/basic/ending-type' },
          { text: '内容分级', link: '/basic/content-rating' }
        ]
      },{
        text: '角色设定',
        items: [
          { text: '泥塑 (逆苏)', link: '/character/idealization' },
          { text: '性转', link: '/character/sex-transform' },
          { text: '原设', link: '/character/canon' },
          { text: 'OOC', link: '/character/ooc' },
          { text: 'OC', link: '/character/oc' },
        ]
      },{
        text: '背景设定',
        items: [
          { text: 'AU & pa', link: '/background/au-pa' },
          { text: 'ABO', link: '/background/worldview/abo' },
          { text: '哨向', link: '/background/worldview/sentinel-and-guide' }
        ]
      },{
        text: 'CP & CB',
        items: [
          { text: 'CP', link: '/relation/cp' },
          { text: 'CB', link: '/relation/cb' },
          { text: '左 / 右 向 (攻受)', link: '/relation/left-right' },
          { text: '无差 / 互攻', link: '/relation/no-role-difference' },
          { text: 'all 向', link: '/relation/all-ships' },
          { text: '骨科', link: '/relation/incest' },
          { text: '弯恋直', link: '/relation/queer-straight' },
          { text: '深柜', link: '/relation/deep-in-closet' },
          { text: 'RPS (真人同人)', link: '/relation/rps' },
          { text: '幼驯染', link: '/relation/osananajimi' },
        ]
      },{
        text: '粉丝行为',
        items: [
          { text: '推', link: '/fan-action/oshi'},
          { text: '拆家 & 逆家 (拆逆)', link: '/fan-action/anti-cp'},
          { text: '梦女 & 梦男', link: '/fan-action/dream-fan'},
          { text: '毒唯', link: '/fan-action/solo-fan'},
          { text: 'Ky', link: '/fan-action/ky'},
          { text: '公公 / 嬷嬷', link: '/fan-action/gonggong-momo.md'},
        ]
      }
    ],
    socialLinks: [
      { icon: 'gitea', link: 'http://git.unknownmp.top/FandomTermPod' },
      { icon: 'github', link: 'https://github.com/UnknownMp391' },
    ],
    search: {
      provider: 'local'
    }
  },
  cleanUrls: true,
})
