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
- Avoid exposing real data or proprietary information through examples

**:thumbsup: Correct**

michael.scott@dundermifflin.com

**:thumbsdown: Don't use**

bobama@whitehouse.com

handle@domain.tld

## Format examples and placeholders as *italics*

Format examples as *italics*, but also text that the user is expected to replace or enter.

## How to deal with sample code

::: warning Note
For more information on how to deal with code using Markdown, see the [Markdown Styleguide](https://ocular-d.github.io/styleguide-markdown/code.html "Link to ocular-d Markdown Styleguide").
:::

#### Block-level code text

When example text that the user is expected to replace occurs in a block of code, do the following:

- make it all caps. For example, *ACCOUNT*
- separate words with underscores. For example, *ACCOUNT_ID*
- Introduce the code sample you're about to show and explain what it allows to do
- Describe the placeholder values in a unordered list, sorting them in the order they appear in the code block
- When the placeholder value is ambiguous, add an example.
For example, '*ACCOUNT_ID* is the email you registered with.
For example *you@acmecorp.com*'
- When adding an example, 

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

```python{6}
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