---
layout: layout-vi.html
title: viết lách
---

nơi tôi viết về mọi thứ ~~trừ thứ hai~~. 


{% for post in collections.article_vi reversed %}
    <article>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <time class="small default">{{ post.data.date | date: "%d/%m/%Y" }}</time>
  </article>
{% endfor %}
