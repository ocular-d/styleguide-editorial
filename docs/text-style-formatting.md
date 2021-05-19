---
title: Text style and formatting
description: Learn how to format names and other types of non-standard text.
meta:
  - name: "og:description"
    content: Learn how to format names and other types of non-standard text
  - name: keywords
    content: Learn how to format names and other types of non-standard text
tags:
  - style
  - text
  - formatting
---

<Header/>

---

::: warning Note
 For more information about how to deal with code samples, check the [examples](./examples-placeholders.md "Link to Code Samples") section.

An exhaustive list of use cases for the code font is available in the [Google Dev Style Guide](https://developers.google.com/style/code-in-text "Link to Google Dev Docs Style Guide").
:::

## Paths and directories

Use the inline code style for paths and directories.
Make them lowercase and use forward slashes (/) where applicable.
When possible, separate words in a path or directory using hyphens.
Otherwise, follow the original separator.

**:thumbsup: Correct**

`/directory/subdirectory/awesome-file.md`

**:thumbsdown: Don't use**

`\Directory\SubDirectory\Awesome_File.md`

## File names

When possible, write file names lowercase and use hypens to separate words instead of underscores.
Otherwise, follow the original capitalization of the file.

Use only standard ASCII alphanumeric characters in file and directory names.

**:thumbsup: Correct**

`my-awesomefile.md`

**:thumbsdown: Don't use**

`My_Awesomefile.md`

## File types

When referring to a file type, use the common name of the file type, or its condensed name, all caps.
Avoid referring to the file type using its extension.

Don't use special formatting for file types.

**:thumbsup: Correct**

A PNG file

A Bash file

**:thumbsdown: Don't use**

A .png file

A `.png` file

An `.sh` file

## HTTP calls

Use inline code when referring to HTTP calls.
They're still technical keywords that deserve being treated as ones.
This means not creating verbs from them.

**:thumbsup: Correct**

Send a `GET` request.

**:thumbsdown: Don't use**

`GET` the data.

GET the data.

## Anchors

- Introduce anchors with the hashtag symbol (#)
- Spell anchors in lower caps
- Replace spaces in anchors with an hyphen (-)
