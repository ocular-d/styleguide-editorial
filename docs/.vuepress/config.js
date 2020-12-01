module.exports = {
  title: 'Editorial Style Guide',
  description: 'Make every word matter',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
  },],
  ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
  },],
  ],
  themeConfig: {
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    repo: 'ocular-d/styleguide-editorial',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Markdown Style Guide', link: 'https://ocular-d.github.io/styleguide-markdown/' }
    ],
    sidebar: [{
      title: 'Guidelines',
      collapsable: false,
      children: [
        'alt-text',
        'accessibility-terms',
        'admonitions',
        'bias-free',
        'chapter-and-section',
        'examples-placeholders',
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
