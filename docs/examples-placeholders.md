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

- Make sure examples are meaningful and matches real use cases
- Avoid exposing real data or proprietary information through examples
- Format examples as *italics*, but also text that the user is expected to replace or enter
- Introduce the examples you're about to show and explain what they allow to do

**:thumbsup: Correct**

*michael.scott@dundermifflin.com*

**:thumbsdown: Don't use**

*bobama@whitehouse.com*

handle@domain.tld

## When examples are code

When examples that the user is expected to replace occurs in a block of code, do the following:

- Make it all caps. For example, *ACCOUNT*
- Format it as *italics*
- Separate words with underscores. For example, *ACCOUNT_ID*
- Do not use other symbols like `$`, or `{}`
- After the sample code, instruct the user to replace placeholder values

:::warning Italics in code blocks
Some markup languages, especially markdown, do not allow to apply special formatting inside code blocks.
In that case, apply the allowed formatting, leaving special formatting for the replacement instructions.

For more information on how to deal with code using Markdown, see the [Markdown Styleguide](https://ocular-d.github.io/styleguide-markdown/code.html "Link to ocular-d Markdown Styleguide").
:::

**:thumbsup: Correct**

1. Customize your account settings by adding this code to `example.py`.

```python {6}
import asyncio
import aiohttp
import json

URL: MY_URL
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
ACCOUNT: $ACCOUNTID
```

## Placeholder values

When your example has special values that require clarification or replacement, explain them after they occur.
This is especially useful for code examples.

- Introduce placeholders. You can use '*Replace these values:*'
- When placeholders are several, use an unordered list
- List them in the order they appear in the code example
- When it's just one placeholder, use a full sentence. For example, 'Replace *`ACCOUNT_ID`* with your email address'
- When a placeholder is ambiguous, add a meaningful example.
For example, '*`ACCOUNT_ID`* is the email you registered with.
For example *`you@acmecorp.com`*'
- Leave original values all caps, but make examples follow the same capitalization expected by the system
- If a value is cap sensitive, mention it
- Even if the same value is in many code examples, list it every time to prevent readers from scrolling

**:thumbsup: Correct**

Replace *`ACCOUNT_ID`* with the ID of your account

or

Replace these values:
- *`ACCOUNT_ID`* with the ID of your account
- *`EMAIL_ADDRESS`* with your email address. For example michael.scott@dundermifflin.com

**:thumbsdown: Don't use**

Replace `$ACCOUNT_ID` with the ID of your account

Replace `ACCOUNT-ID` with the ID of your account

Replace `{ACCOUNTID}` with the ID of your account