---
title: Headings
description: Use short and understandable headings
meta:
  - name: "og:description"
    content: Use short and understandable headings
  - name: keywords
    content: Use short and understandable headings
tags:
  - headings
  - short
---

<Header/>

---

## Use sentence case

Capitalize the first word of the title, unless it's a proper noun that starts with lowercase or a code snippet.

**:thumbsup: Correct** code for this rule:

```markdown
# The quick brown fox jumps over the lazy dog

# React

# `string`

# init main
```

**:thumbsdown: Incorrect** code for this rule:

```markdown

# The Quick Brown Fox Jumps Over The Lazy Dog

# summer is hot

# react

# `String`

# Init
```

## Verb tense

Use the imperative form, especially when writing the title of a task, because it increases findability.
In other words, avoid the gerundive form, because users don't use gerund when searching.

**:thumbsup: Correct** code for this rule:

```markdown
# Create a dashboard
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# Creating a dashboard
```

## Length

Prefer using short header with a maximum length of 80 character (without markers).

Instead of using a long sentence, make the header a summary and write the long sentence as the first paragraph beneath the header.

This makes it effortless to refer to the header later, specially if automatic IDs or a TOC (Table Of Content) are created.

**:thumbsup: Correct** code for this rule:

```markdown
# One

The summer is sparkling and awesome!
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# The summer is sparkling and awesome!
```

## Punctuation after content

Do not use any punctuation at the end of a header
for example a trailing (semi)colon `;:`, period `.`, closing marker `#` or any "sentence amplifier" (`!?`).

Every header is an introduction to what is about to come next, which is exactly the function of a colon.

The header is not a sentence, or at least only a short sentence, there is no need to add a sentence separator to it.

**:thumbsup: Correct** code for this rule:

```markdown
# One

Sparkling and awesome.
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# One: Sparkling
```

```markdown
# One. Frozen.
```

```markdown
# One #
```