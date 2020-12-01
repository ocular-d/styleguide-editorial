---
home: true
title: Content Style Guide
actionText: Get Started  →
actionLink: /about
xfeatures:
  - title: 📖 Accessibility terms
    link: https://editorial.ocular-d.tech/accessibility-terms.html
    details: Write in a way that puts people first.
  - title: ❤ Bias-free communication
    link: https://editorial.ocular-d.tech/bias-free.html
    details: Use gender-neutral alternatives for common terms.
  - title: ✅ Examples and placeholders
    link: https://editorial.ocular-d.tech/examples-placeholders.html
    details: Best practices on how to provide examples and placeholder text so that users can relate to them.
footer: Made with ❤ by people
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>