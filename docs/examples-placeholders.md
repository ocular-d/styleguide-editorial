---
title: Examples and placeholders
description: Best practices on how to provide examples and placeholder text so that users can relate to them
meta:
  - name: "og:description"
    content: Examples and placeholders
  - name: keywords
    content: Best practices on how to provide examples and placeholder text so that users can relate to them
tags:
  - Placeholders
  - Examples
  - Values
  - Dummy
---

<Header/>

---

## Use meaningful examples

- Make sure example and placeholder text is always meaningful and matches real use cases
- Avoid exposing real addresses or proprietary information through examples

**:thumbsup: Correct**

user@domain.com

**:thumbsdown: Don't use**

bobama@whitehouse.com

handle@domain.tld

## Format standard text as *italics*

Format example text and text the user is expected to replace or enter as *italics*.

## How to deal with sample code

::: warning Note
For more information on how to deal with code using Markdown, see the [Markdown Styleguide](https://ocular-d.github.io/styleguide-markdown/code.html "Link to ocular-d Markdown Styleguide").
:::

#### Block-level code text

When example text that the user is expected to replace occurs in code text, do the following:

- make it all caps
- separate words with underscores
- Introduce the code sample you're about to show and explain what it allows to do
- Describe the placeholder values in a unordered list, sorting them in the order they appear in the code block

**:thumbsup: Correct**

1. Customize your account settings by adding this code to `example.py`.

```python {6}
import asyncio
import aiohttp
import json

URL: myurl.com
ACCOUNT: ACCOUNT_ID
```

Replace these values:

- *`ACCOUNT_ID`* with the ID of your account

**:thumbsdown: Don't use**

1. Customize this code by replacing *`ACCOUNT_ID`* with the ID of your account and add it to `example.py`.

```python
import asyncio
import aiohttp
import json

URL: myurl.com
ACCOUNT: ACCOUNT_ID
```

Replace these values:

- *`ACCOUNT_ID`* with the ID of your account

#### Inline-level code text

- format it as *italics*
- make it all caps
- separate words with underscores

**:thumbsup: Correct**

*`ACCOUNT_ID`* is the ID of your account

**:thumbsdown: Don't use**

Replace `$ACCOUNT_ID` with the ID of your account

Replace `ACCOUNT-ID` with the ID of your account

Replace `{ACCOUNTID}` with the ID of your account