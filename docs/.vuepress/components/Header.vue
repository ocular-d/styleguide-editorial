<template>
  <div>
    <h1>{{$page.frontmatter.title}}</h1>
    <div
      style="width: 4rem; height: .4rem; margin: .1rem 0rem 1rem .3rem; background-color: #5469d4;"
    ></div>
    <p>{{$page.frontmatter.description}}</p>
    <br />
    <!-- &#x1F4A1; {{ $page.readingTime.text }} -->

  </div>
</template>
