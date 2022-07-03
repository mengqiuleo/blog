import{_ as n,o as s,c as a,a as t}from"./app.5e02f2d4.js";const p={},e=t(`<h1 id="\u3010vue\u3011\u53CC\u5411\u6570\u636E\u7ED1\u5B9A-\u4E00-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u3010vue\u3011\u53CC\u5411\u6570\u636E\u7ED1\u5B9A-\u4E00-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u3010vue\u3011\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF08\u4E00\uFF09--\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</h1><blockquote><p>\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</p></blockquote><ol><li>Dep \u7C7B</li></ol><ul><li>\u8D1F\u8D23\u8FDB\u884C<strong>\u4F9D\u8D56\u6536\u96C6</strong></li><li>\u9996\u5148\uFF0C\u6709\u4E2A<strong>\u6570\u7EC4</strong>\uFF0C\u4E13\u95E8\u6765\u5B58\u653E\u6240\u6709\u7684\u8BA2\u9605\u4FE1\u606F</li><li>\u5176\u6B21\uFF0C\u8FD8\u8981\u63D0\u4F9B\u4E00\u4E2A\u5411\u6570\u7EC4\u4E2D\u8FFD\u52A0\u8BA2\u9605\u4FE1\u606F\u7684\u65B9\u6CD5</li><li>\u7136\u540E\uFF0C\u8FD8\u8981\u63D0\u4F9B\u4E00\u4E2A\u5FAA\u73AF\uFF0C\u5FAA\u73AF\u89E6\u53D1\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u8BA2\u9605\u4FE1\u606F</li></ul><ol start="2"><li><p>Watcher \u7C7B</p><p>\u8D1F\u8D23<strong>\u8BA2\u9605\u4E00\u4E9B\u4E8B\u4EF6</strong>\uFF0C\u5C06\u81EA\u5DF1\u7684\u4E00\u4E9B\u884C\u4E3A\u4EA4\u7ED9\u4E86 Dep\u7C7B\uFF0C\u653E\u5728 Dep\u6570\u7EC4\u4E2D\u3002</p><p>\u5F53\u4EE5\u540E\u5230\u4E86\u4E00\u5B9A\u65F6\u673A\uFF0C Dep\u7C7B\u8D1F\u8D23\u5BF9\u6BCF\u4E00\u4E2A\u884C\u4E3A\u8FDB\u884C\u5FAA\u73AF\uFF0C\u7136\u540E\u89E6\u53D1\u3002\u6B64\u65F6 Watcher\u7C7B\u5C31\u53EF\u4EE5\u6536\u5230\u901A\u77E5\u3002</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6536\u96C6\u4F9D\u8D56/\u6536\u96C6\u8BA2\u9605\u8005</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u4E2A subs \u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u6240\u6709\u8BA2\u9605\u8005\u7684\u4FE1\u606F</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5411 subs \u6570\u7EC4\u4E2D\uFF0C\u6DFB\u52A0\u8BA2\u9605\u8005\u7684\u4FE1\u606F</span>
  <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D1\u5E03\u901A\u77E5\u7684\u65B9\u6CD5</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> watcher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BA2\u9605\u8005\u7684\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb
  <span class="token punctuation">}</span>

  <span class="token comment">// \u89E6\u53D1\u56DE\u8C03\u7684\u65B9\u6CD5</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u6D4B\u8BD5\u4EE3\u7801</span>
<span class="token keyword">const</span> w1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u7B2C1\u4E2A\u8BA2\u9605\u8005&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> w2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u7B2C2\u4E2A\u8BA2\u9605\u8005&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>w1<span class="token punctuation">)</span>
dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>w2<span class="token punctuation">)</span>

dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u53EA\u8981\u6211\u4EEC\u4E3A Vue \u4E2D data \u6570\u636E\u91CD\u65B0\u8D4B\u503C\u4E86\uFF0C\u8FD9\u4E2A\u8D4B\u503C\u7684\u52A8\u4F5C\uFF0C\u4F1A\u88AB Vue \u76D1\u542C\u5230</span>
<span class="token comment">// \u7136\u540E vue \u8981\u628A\u6570\u636E\u7684\u53D8\u5316\uFF0C\u901A\u77E5\u5230\u6BCF\u4E2A\u8BA2\u9605\u8005\uFF01\uFF01\uFF01</span>
<span class="token comment">// \u63A5\u4E0B\u6765\uFF0C\u8BA2\u9605\u8005\uFF08DOM\u5143\u7D20\uFF09\u8981\u6839\u636E\u6700\u65B0\u7684\u6570\u636E\uFF0C\u66F4\u65B0\u81EA\u5DF1\u7684\u5185\u5BB9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(i,l){return s(),a("div",null,c)}var d=n(p,[["render",o],["__file","\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F.html.vue"]]);export{d as default};
