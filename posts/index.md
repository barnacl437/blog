---
title: posts
layout: "layout.html"
---


here comes my writings. intermittently blogged since 2023<sup>tm</sup>. here are posts i've written and pasted on here since mid-2025. dont ask me where was the rest of them before that. expect opinions.

{% for post in collections.article reversed %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p><small>{{post.data.standfirst}}</small></p>
    <time class="small default" style="color: #2ff1c4">{{ post.data.date | date: "%d %B %Y" }}</time>
  </article>
{% endfor %}