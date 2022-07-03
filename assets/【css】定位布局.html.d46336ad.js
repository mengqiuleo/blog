import{_ as n,o as s,c as a,a as t}from"./app.0c7d7e04.js";const p={},e=t(`<h1 id="\u3010css\u3011\u5B9A\u4F4D\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u3010css\u3011\u5B9A\u4F4D\u5E03\u5C40" aria-hidden="true">#</a> \u3010css\u3011\u5B9A\u4F4D\u5E03\u5C40</h1><p>[TOC]</p><h2 id="\u4E00\u3001position\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001position\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u4E00\u3001position\u7684\u5C5E\u6027</h2><p>position \u6709\u4EE5\u4E0B\u5C5E\u6027\u503C\uFF1A</p><table><thead><tr><th>\u5C5E\u6027\u503C</th><th>\u6982\u8FF0</th></tr></thead><tbody><tr><td>absolute</td><td>\u751F\u6210<strong>\u7EDD\u5BF9\u5B9A\u4F4D</strong>\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E static \u5B9A\u4F4D\u4EE5\u5916\u7684\u4E00\u4E2A\u7236\u5143\u7D20\u8FDB\u884C\u5B9A\u4F4D\u3002\u5143\u7D20\u7684\u4F4D\u7F6E\u901A\u8FC7 left\u3001top\u3001right\u3001bottom \u5C5E\u6027\u8FDB\u884C\u89C4\u5B9A\u3002</td></tr><tr><td>relative</td><td>\u751F\u6210<strong>\u76F8\u5BF9\u5B9A\u4F4D</strong>\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u5176\u539F\u6765\u7684\u4F4D\u7F6E\u8FDB\u884C\u5B9A\u4F4D\u3002\u5143\u7D20\u7684\u4F4D\u7F6E\u901A\u8FC7 left\u3001top\u3001right\u3001bottom \u5C5E\u6027\u8FDB\u884C\u89C4\u5B9A\u3002</td></tr><tr><td>fixed</td><td>\u751F\u6210<strong>\u56FA\u5B9A\u5B9A\u4F4D</strong>\u7684\u5143\u7D20\uFF0C\u6307\u5B9A\u5143\u7D20\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u89C6\u2F1D\uFF08viewport\uFF09\u7684\u4F4D\u7F6E\u6765\u6307\u5B9A\u5143\u7D20\u4F4D\u7F6E\u3002\u5143\u7D20\u7684\u4F4D\u7F6E\u5728\u5C4F\u5E55\u6EDA\u52A8\u65F6\u4E0D\u4F1A\u6539\u53D8\uFF0C\u2F50\u5982\u56DE\u5230\u9876\u90E8\u7684\u6309\u94AE\u2F00\u822C\u90FD\u662F\u2F64\u6B64\u5B9A\u4F4D\u2F45\u5F0F\u3002</td></tr><tr><td>static</td><td>\u9ED8\u8BA4\u503C\uFF0C\u6CA1\u6709\u5B9A\u4F4D\uFF0C\u5143\u7D20\u51FA\u73B0\u5728\u6B63\u5E38\u7684\u6587\u6863\u6D41\u4E2D\uFF0C\u4F1A\u5FFD\u7565 top, bottom, left, right \u6216\u8005 z-index \u58F0\u660E\uFF0C\u5757\u7EA7\u5143\u7D20\u4ECE\u4E0A\u5F80\u4E0B\u7EB5\u5411\u6392\u5E03\uFF0C\u2F8F\u7EA7\u5143\u7D20\u4ECE\u5DE6\u5411\u53F3\u6392\u5217\u3002</td></tr><tr><td>inherit</td><td>\u89C4\u5B9A\u4ECE\u7236\u5143\u7D20\u7EE7\u627F position \u5C5E\u6027\u7684\u503C</td></tr><tr><td>sticky</td><td><strong>\u7C98\u6027\u5B9A\u4F4D</strong></td></tr></tbody></table><h3 id="relative-\u76F8\u5BF9\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#relative-\u76F8\u5BF9\u5B9A\u4F4D" aria-hidden="true">#</a> relative\uFF08\u76F8\u5BF9\u5B9A\u4F4D\uFF09</h3><p>\u76F8\u5BF9\u5B9A\u4F4D\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u539F\u6765\u7684\u4F4D\u7F6E\u63A7\u5236\uFF0C\u5F53\u5143\u7D20\u53D1\u751F\u4F4D\u7F6E\u504F\u79FB\u65F6\uFF0C\u539F\u4F4D\u7F6E\u7559\u767D</p><p>\u5143\u7D20\u7684\u4F4D\u7F6E\u901A\u8FC7 left\u3001top\u3001right\u3001bottom \u5C5E\u6027\u8FDB\u884C\u89C4\u5B9A\u3002</p><h4 id="\u4F4D\u7F6E\u504F\u79FB" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E\u504F\u79FB" aria-hidden="true">#</a> \u4F4D\u7F6E\u504F\u79FB</h4><p>\u53EF\u4EE5\u4E3A\u90E8\u5206\u7C7B\u578B\u7684\u5B9A\u4F4D\u5143\u7D20\u8BBE\u7F6E<code>\u4E0A\u3001\u4E0B\u3001\u5DE6\u3001\u53F3</code> \u7684\u4F4D\u7F6E\u504F\u79FB\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>top</td><td>\u8DDD\u79BB\u9876\u8FB9</td></tr><tr><td>bottom</td><td>\u8DDD\u79BB\u4E0B\u8FB9</td></tr><tr><td>left</td><td>\u8DDD\u79BB\u5DE6\u90E8</td></tr><tr><td>right</td><td>\u8DDD\u79BB\u53F3\u8FB9</td></tr></tbody></table><p>\u4E3E\u4F8B\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    .box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px saddlebrown solid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
      &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://doc.panjingyi.top/blog/202207012142793.jpg" alt=""></p><p>\u5F53\u7ED9\u5B50\u76D2\u5B50\u6DFB\u52A0 \u76F8\u5BF9\u5B9A\u4F4D\uFF08relative\uFF09\u65F6\uFF0C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    .box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px saddlebrown solid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span><span class="token comment">/*\u6DFB\u52A0\u76F8\u5BF9\u5B9A\u4F4D*/</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
      &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u76F8\u5BF9\u5B9A\u4F4D\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u539F\u6765\u7684\u4F4D\u7F6E\u53D1\u751F\u6539\u53D8\uFF0C\u548C\u5176\u4ED6\u5143\u7D20\u6CA1\u5173\u7CFB\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u5143\u7D20</strong></p><p><img src="https://doc.panjingyi.top/blog/202207012142794.jpg" alt=""></p><h3 id="absolute-\u7EDD\u5BF9\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#absolute-\u7EDD\u5BF9\u5B9A\u4F4D" aria-hidden="true">#</a> absolute\uFF08\u7EDD\u5BF9\u5B9A\u4F4D\uFF09</h3><p>\u5982\u679C\u8865\u4E2A\u5143\u7D20\u8BBE\u7F6E\u4E86absolute\uFF0C\u4E14\u4E3Aabsolute\u8BBE\u7F6E\u4E86 top\u3001left\u7B49\u503C\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9012\u5F52\u67E5\u627E\u8BE5\u5143\u7D20\u7684\u6240\u6709\u7236\u5143\u7D20\uFF0C\u5982\u679C\u627E\u5230\u4E00\u4E2A\u8BBE\u7F6E\u4E86<code>position:relative/absolute/fixed/sticky</code>\u7684\u5143\u7D20\uFF0C\u5C31\u4EE5\u8BE5\u5143\u7D20\u4E3A\u57FA\u51C6\u5B9A\u4F4D\uFF0C\u5982\u679C\u6CA1\u627E\u5230\uFF0C\u5C31\u4EE5\u6D4F\u89C8\u5668\u8FB9\u754C\u5B9A\u4F4D\u3002</p><h4 id="\u5C45\u4E2D\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u5C45\u4E2D\u5B9A\u4F4D" aria-hidden="true">#</a> \u5C45\u4E2D\u5B9A\u4F4D</h4><p>\u901A\u8FC7\u5C06 <code>left</code> \u8BBE\u7F6E\u4E3A50% ,\u5E76\u5411\u5DE6\u504F\u79FB\u5B50\u5143\u7D20\u5BBD\u5EA6\u4E00\u534A\u53EF\u4EE5\u5B9E\u73B0\u6C34\u5E73\u5C45\u4E2D\uFF0C\u5782\u76F4\u5C45\u4E2D\u4F7F\u7528\u65B9\u5F0F\u7C7B\u4F3C\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    .box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px saddlebrown solid<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span><span class="token comment">/*\u5C06 left \u8BBE\u7F6E\u4E3A50%*/</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span><span class="token comment">/*\u5411\u5DE6\u504F\u79FB\u5B50\u5143\u7D20\u5BBD\u5EA6\u4E00\u534A*/</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
      &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
    &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://doc.panjingyi.top/blog/202207012142795.jpg" alt=""></p><h4 id="\u53D1\u751F\u6EDA\u52A8\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u53D1\u751F\u6EDA\u52A8\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u53D1\u751F\u6EDA\u52A8\u7684\u60C5\u51B5</h4><p>\u5F53\u6709absolute\u5B9A\u4F4D\u7684\u5B50\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20\u53EF\u4EE5\u6709\u6EDA\u52A8\u6761\u65F6\uFF0C\u79FB\u52A8\u6EDA\u52A8\u6761\uFF0C\u5B50\u5143\u7D20\u4F1A\u968F\u7740\u6EDA\u52A8\u6761\u53D1\u751F\u79FB\u52A8\uFF0C\u4F4D\u7F6E\u4E0D\u662F\u56FA\u5B9A\u7684\u3002</p><p>\u4E3E\u4F8B\uFF1A</p><p>\u5148\u7ED9absolute\u7684\u7236\u5143\u7D20\u8BBE\u7F6E\u4E3A\u6EA2\u51FA\uFF0C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    .box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 5px saddlebrown solid<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> palegoldenrod<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
      &lt;div class=<span class="token string">&quot;parent&quot;</span>&gt;
        &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://doc.panjingyi.top/blog/202207012142796.jpg" alt=""></p><p>\u7136\u540E\u5C06\u6EA2\u51FA\u8BBE\u7F6E\u4E3A overflow\uFF1Ascroll\uFF0C\u6B64\u65F6\u53EF\u4EE5\u51FA\u73B0\u6EDA\u52A8\u6761</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    .box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 5px saddlebrown solid<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span><span class="token comment">/*\u8BBE\u7F6E\u6EDA\u52A8\u6761*/</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> palegoldenrod<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
      &lt;div class=<span class="token string">&quot;parent&quot;</span>&gt;
        &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://doc.panjingyi.top/blog/202207012142797.jpg" alt=""></p><p><img src="https://doc.panjingyi.top/blog/202207012142798.jpg" alt=""></p><p><img src="https://doc.panjingyi.top/blog/202207012142799.jpg" alt=""></p><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u672C\u6765 \u5B50\u5143\u7D20\u662F\u5728\u7236\u5143\u7D20\u4E2D\u5C45\u4E2D\u7684\uFF0C\u4F46\u968F\u7740\u7236\u5143\u7D20\u7684\u79FB\u52A8\uFF0C\u5B50\u5143\u7D20\u7684\u4F4D\u7F6E\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8\u3002</p><h3 id="sticky-\u7C98\u6027\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#sticky-\u7C98\u6027\u5B9A\u4F4D" aria-hidden="true">#</a> sticky\uFF08\u7C98\u6027\u5B9A\u4F4D\uFF09</h3><p>\u67D0\u4E2A\u5143\u7D20\u8BBE\u7F6E\u7C98\u6027\u5B9A\u4F4D\u540E\uFF0C\u901A\u8FC7\u6EDA\u52A8\u6761\u79FB\u52A8\uFF0C\u5E76\u4E0D\u4F1A\u4E00\u76F4\u79FB\u52A8\uFF0C\u800C\u662F\u4F1A\u5B9A\u5728\u67D0\u5904\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    .box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 5px saddlebrown solid<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> palegoldenrod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
      &lt;div class=<span class="token string">&quot;box2&quot;</span>&gt;&lt;/div&gt;
      &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
      &lt;div class=<span class="token string">&quot;box2&quot;</span>&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fixed-\u56FA\u5B9A\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#fixed-\u56FA\u5B9A\u5B9A\u4F4D" aria-hidden="true">#</a> fixed\uFF08\u56FA\u5B9A\u5B9A\u4F4D\uFF09</h3><p>\u5B83\u7684\u53C2\u8003\u4F4D\u7F6E\u662F\u9875\u9762\u6D4F\u89C8\u5668\uFF0C\u4F46\u662F\u5B83\u5177\u6709\u7834\u574F\u6027\uFF0C\u4F1A\u5BFC\u81F4\u5176\u4ED6\u5143\u7D20\u4F4D\u7F6E\u7684\u53D8\u5316\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">&lt;style&gt;
    header</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 5px #7f35c9<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 5px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 3000px<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> solid 5px #ddd<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
  &lt;body&gt;
    &lt;header&gt;&lt;/header&gt;
    &lt;article&gt;&lt;/article&gt;
  &lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001absolute-\u4E0E-fixed-\u5171\u540C\u70B9\u4E0E\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001absolute-\u4E0E-fixed-\u5171\u540C\u70B9\u4E0E\u4E0D\u540C\u70B9" aria-hidden="true">#</a> \u4E8C\u3001absolute \u4E0E fixed \u5171\u540C\u70B9\u4E0E\u4E0D\u540C\u70B9</h2><p><strong>\u5171\u540C\u70B9\uFF1A</strong></p><ul><li>\u6539\u53D8\u884C\u5185\u5143\u7D20\u7684\u5448\u73B0\u65B9\u5F0F\uFF0C\u5C06 display \u7F6E\u4E3A inline-block</li><li>\u4F7F\u5143\u7D20\u8131\u79BB\u666E\u901A\u6587\u6863\u6D41\uFF0C\u4E0D\u518D\u5360\u636E\u6587\u6863\u7269\u7406\u7A7A\u95F4</li><li>\u8986\u76D6\u975E\u5B9A\u4F4D\u6587\u6863\u5143\u7D20</li></ul><p><strong>\u4E0D\u540C\u70B9\uFF1A</strong></p><ul><li>absolute \u4E0E fixed \u7684\u6839\u5143\u7D20\u4E0D\u540C\uFF0Cabsolute \u7684\u6839\u5143\u7D20\u53EF\u4EE5\u8BBE\u7F6E\uFF0Cfixed \u6839\u5143\u7D20\u662F\u6D4F\u89C8\u5668\u3002</li><li>\u5728\u6709\u6EDA\u52A8\u6761\u7684\u9875\u9762\u4E2D\uFF0Cabsolute \u4F1A\u8DDF\u7740\u7236\u5143\u7D20\u8FDB\u884C\u79FB\u52A8\uFF0Cfixed \u56FA\u5B9A\u5728\u9875\u9762\u7684\u5177\u4F53\u4F4D\u7F6E\u3002</li></ul>`,47),i=[e];function l(o,c){return s(),a("div",null,i)}var d=n(p,[["render",l],["__file","\u3010css\u3011\u5B9A\u4F4D\u5E03\u5C40.html.vue"]]);export{d as default};
