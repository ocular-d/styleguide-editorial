## Code samples

::: tip Key Point
:bulb: Learn how to write usable code samples and how to complement them with useful information.
:::

::: warning Note
For more information on how to deal with code using Markdown, see the [Markdown Styleguide](https://ocular-d.github.io/styleguide-markdown/code.html "Link to ocular-d Markdown Styleguide").
:::

## Best practices

When providing code samples, highlight lines that are relevant for the user.

Introduce the code sample you're about to show, commenting what it allows the user to do.

Always follow the code sample with a list where you describe the placeholder values, sorting them in the order they appear in the code block.

**:thumbsup: Correct**

1. Customize your account settings by adding this code to `package.json`.

```json {3}
 information {
     URL: myurl.com,
     ACCOUNT: ACCOUNT_ID
 }
```
Where:

- *`ACCOUNT_ID`* is the ID of your account

**:thumbsdown: Don't use**

1. Customize this code by replacing *`ACCOUNT_ID`* with the ID of your account and add it to `package.json`.

```json
 information {
     URL: myurl.com,
     ACCOUNT: ACCOUNT_ID
 }
```
Where:

- *`ACCOUNT_ID`* is the ID of your account

## Placeholder text in code

Make placeholder text meaningful by referring to what the user is expected to enter. Make it all caps and separate words with underscores. When the placeholder text is in a paragraph, format it as inline code and make it italic. When in a code block, use line highlighting to point the reader to lines that have placeholder text.

**:thumbsup: Correct**

```json {3}
 information {
     URL: myurl.com,
     ACCOUNT: ACCOUNT_ID
 }
```

**:thumbsdown: Don't use**

Replace `$ACCOUNT_ID` with the ID of your account.

Replace `ACCOUNT-ID` with the ID of your account.

Replace `{ACCOUNTID}` with the ID of your account.