# Headings

::: tip Key Point
:bulb: Always use short and understandable headings.
:::


## Sentences case

Use an upper case letter as the first letter of a header, unless it is a word that always starts with lowercase letters,
for example proper names or code snippets.

**:thumbsup: Correct** code for this rule:

```markdown
# The quick brown fox jumps over the lazy dog
```

Proper names or code snippets:

```markdown
# React

# `string`

# init main
```

**:thumbsdown: Incorrect** code for this rule:

```markdown
# summer is hot
```

Proper names or code snippets:

```markdown
# react

# `String`

# Init
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