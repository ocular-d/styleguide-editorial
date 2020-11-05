module.exports = {
  title: 'Editorial Styleguide',
  description: 'Make every word matter',
  base: "/styleguide-editorial/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
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
        'admonitions',
        'bias-free',
        'chapter-and-section',
        'code-samples',
        'headings',
        'links-urls',
        'numbers',
        'use-simple-words-concise-sentences',
        'periods',
        'pronouns-and-gender',
        'screenshots',
        'text-style-formatting',
        'we',
      ]
    }
  ]
  }
}
