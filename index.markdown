---
title: 
layout: home
---

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/me.jpg" alt="" align-right width="18%"
style="float:right;padding: 2px">
I'm a postdoc in [Martin S. Andersen](https://www2.compute.dtu.dk/~mskan/)'s group in the [Scientific Computing Section](https://www.compute.dtu.dk/english/research/research-sections/sco) of [DTU](dtu.dk).
I was previously at [Imperial College London](www.imperial.ac.uk
) where I did my Ph.D. under the supervision of [Colin Cotter](https://www.imperial.ac.uk/people/colin.cotter).


Here you will find a few things about me and my research. Feel free to [get in touch](mailto:me@andreasbock.dk) if you are interested in my research!

# News

{% assign news_sorted = site.news | reverse %}

<ul class="news-list">
  {%- assign date_format = site.minima.date_format -%}
  {%- for news in news_sorted limit: 4 -%}
  <span class="news-meta"></span>
   <b>{{ news.date | date: date_format | append: " " -}}</b>
    {{ news.content }}
  {%- endfor -%}
</ul>
