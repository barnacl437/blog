---
title: posts
layout: "layout.html"
---


here comes my writing. decided to put it here. article list in the home index only omitted by using html comment tag, but the code is still there for potential fallback.

{% for post in collections.article reversed %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <time class="small default">{{ post.data.date | date: "%d %B %Y" }}</time>
  </article>
{% endfor %}