module.exports = {
  title: 'Editorial Styleguide',
  description: 'Make every word matter',
  base: "/styleguide-editorial/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'ocular-d/styleguide-editorial',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    sidebar: [{
      title: 'Guidelines',
      collapsable: false,
      children: [
        'alt-text',
        'accessibility-terms',
        'use-simple-words-concise-sentences',
        'pronouns-and-gender',
        'bias-free',
        'periods',
        'we',
        'chapter-and-section',
        'headings',
        'names-and-naming'
      ]
    }
  ]
  }
}
