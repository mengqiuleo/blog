import{_ as n,o as s,c as a,a as e}from"./app.988effc2.js";const t={},p=e(`<h1 id="\u3010vue\u3011vue-router\u5E38\u89C1\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u3010vue\u3011vue-router\u5E38\u89C1\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u3010vue\u3011vue-Router\u5E38\u89C1\u9762\u8BD5\u9898</h1><p>[TOC]</p><h2 id="\u4E00\u3001vue-router\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001vue-router\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u4E00\u3001vue-Router\u57FA\u672C\u4F7F\u7528</h2><p>1.\u70B9\u51FB\u8FD9\u91CC\u{1F449}<a href="https://blog.csdn.net/weixin_52834435/article/details/122917256" target="_blank" rel="noopener noreferrer">vue-router\u4F7F\u7528</a></p><p>2.\u5BFC\u822A\u5B88\u536B\u7684\u4F7F\u7528\uFF1A<a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html" target="_blank" rel="noopener noreferrer">\u5BFC\u822A\u5B88\u536B</a></p><h2 id="\u4E8C\u3001\u5E38\u89C1\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5E38\u89C1\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u4E8C\u3001\u5E38\u89C1\u9762\u8BD5\u9898</h2><h3 id="_1-vue-router-\u8DEF\u7531\u94A9\u5B50\u51FD\u6570\u662F\u4EC0\u4E48-\u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-vue-router-\u8DEF\u7531\u94A9\u5B50\u51FD\u6570\u662F\u4EC0\u4E48-\u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1.vue-router \u8DEF\u7531\u94A9\u5B50\u51FD\u6570\u662F\u4EC0\u4E48 \u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48</h3><p>\u94A9\u5B50\u51FD\u6570\u79CD\u7C7B\u6709:\u5168\u5C40\u5B88\u536B\u3001\u8DEF\u7531\u5B88\u536B\u3001\u7EC4\u4EF6\u5B88\u536B</p><ul><li>\u5168\u5C40\u524D\u7F6E/\u94A9\u5B50\uFF1AbeforeEach\u3001beforeResolve\u3001afterEach</li><li>\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B\uFF1AbeforeEnter</li><li>\u7EC4\u4EF6\u5185\u7684\u5B88\u536B\uFF1AbeforeRouteEnter\u3001beforeRouteUpdate\u3001beforeRouteLeave</li></ul><p><strong>\u5B8C\u6574\u7684\u5BFC\u822A\u89E3\u6790\u6D41\u7A0B:</strong></p><ol><li>\u5BFC\u822A\u88AB\u89E6\u53D1\u3002</li><li>\u5728\u5931\u6D3B\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 beforeRouteLeave \u5B88\u536B\u3002</li><li>\u8C03\u7528\u5168\u5C40\u7684 beforeEach \u5B88\u536B\u3002</li><li>\u5728\u91CD\u7528\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 beforeRouteUpdate \u5B88\u536B (2.2+)\u3002</li><li>\u5728\u8DEF\u7531\u914D\u7F6E\u91CC\u8C03\u7528 beforeEnter\u3002</li><li>\u89E3\u6790\u5F02\u6B65\u8DEF\u7531\u7EC4\u4EF6\u3002</li><li>\u5728\u88AB\u6FC0\u6D3B\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 beforeRouteEnter\u3002</li><li>\u8C03\u7528\u5168\u5C40\u7684 beforeResolve \u5B88\u536B (2.5+)\u3002</li><li>\u5BFC\u822A\u88AB\u786E\u8BA4\u3002</li><li>\u8C03\u7528\u5168\u5C40\u7684 afterEach \u94A9\u5B50\u3002</li><li>\u89E6\u53D1 DOM \u66F4\u65B0\u3002</li><li>\u8C03\u7528 beforeRouteEnter \u5B88\u536B\u4E2D\u4F20\u7ED9 next \u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u521B\u5EFA\u597D\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u4F20\u5165\u3002</li></ol><h3 id="_2-vue-router-\u52A8\u6001\u8DEF\u7531\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-vue-router-\u52A8\u6001\u8DEF\u7531\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 2. vue-router \u52A8\u6001\u8DEF\u7531\u662F\u4EC0\u4E48 \u6709\u4EC0\u4E48\u95EE\u9898</h3><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2A User \u7EC4\u4EF6\uFF0C\u5BF9\u4E8E\u6240\u6709 ID \u5404\u4E0D\u76F8\u540C\u7684\u7528\u6237\uFF0C\u90FD\u8981\u4F7F\u7528\u8FD9\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u90A3\u4E48\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 vue-router \u7684\u8DEF\u7531\u8DEF\u5F84\u4E2D\u4F7F\u7528\u201C\u52A8\u6001\u8DEF\u5F84\u53C2\u6570\u201D(dynamic segment) \u6765\u8FBE\u5230\u8FD9\u4E2A\u6548\u679C\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const User = {
  template: &quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>User<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>&quot;,
};

const router = new VueRouter({
  routes: [
    // \u52A8\u6001\u8DEF\u5F84\u53C2\u6570 \u4EE5\u5192\u53F7\u5F00\u5934
    { 
    	path: &quot;/user/:id&quot;, 
    	component: User 
    },
  ],
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-params-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-params-\u65B9\u5F0F" aria-hidden="true">#</a> (1) params \u65B9\u5F0F</h4><ul><li>\u914D\u7F6E\u8DEF\u7531\u683C\u5F0F\uFF1A<code>/router/:id</code></li><li>\u4F20\u9012\u7684\u65B9\u5F0F\uFF1A\u5728path\u540E\u9762\u8DDF\u4E0A\u5BF9\u5E94\u7684\u503C</li><li>\u4F20\u9012\u540E\u5F62\u6210\u7684\u8DEF\u5F84\uFF1A<code>/router/123</code></li></ul><p>1\uFF09\u8DEF\u7531\u5B9A\u4E49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5728APP.vue\u4E2D</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;&#39;/user/&#39;+userId&quot;</span> replace<span class="token operator">&gt;</span>\u7528\u6237<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>    

<span class="token comment">//\u5728index.js</span>
<span class="token punctuation">{</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:userid&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\uFF09\u8DEF\u7531\u8DF3\u8F6C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u6CD51\uFF1A</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{ name: &#39;users&#39;, params: { uname: wade }}&quot;</span><span class="token operator">&gt;</span> \u6309\u94AE <span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token comment">// \u65B9\u6CD52\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">uname</span><span class="token operator">:</span>wade<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u6CD53\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/user/&#39;</span> <span class="token operator">+</span> wade<span class="token punctuation">)</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\uFF09\u53C2\u6570\u83B7\u53D6 \u901A\u8FC7 <code>this.$route.params.userid</code> \u83B7\u53D6\u4F20\u9012\u7684\u503C</p><h4 id="_2-query-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-query-\u65B9\u5F0F" aria-hidden="true">#</a> (2) query \u65B9\u5F0F</h4><ul><li>\u914D\u7F6E\u8DEF\u7531\u683C\u5F0F\uFF1A<code>/router</code>\uFF0C\u4E5F\u5C31\u662F\u666E\u901A\u914D\u7F6E</li><li>\u4F20\u9012\u7684\u65B9\u5F0F\uFF1A\u5BF9\u8C61\u4E2D\u4F7F\u7528query\u7684key\u4F5C\u4E3A\u4F20\u9012\u65B9\u5F0F</li><li>\u4F20\u9012\u540E\u5F62\u6210\u7684\u8DEF\u5F84\uFF1A<code>/route?id=123</code></li></ul><p>1\uFF09\u8DEF\u7531\u5B9A\u4E49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u65B9\u5F0F1\uFF1A\u76F4\u63A5\u5728router-link \u6807\u7B7E\u4E0A\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{path:&#39;/profile&#39;,query:{name:&#39;why&#39;,age:28,height:188}}&quot;</span><span class="token operator">&gt;</span>\u6863\u6848<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token comment">// \u65B9\u5F0F2\uFF1A\u5199\u6210\u6309\u94AE\u4EE5\u70B9\u51FB\u4E8B\u4EF6\u5F62\u5F0F</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&#39;profileClick&#39;</span><span class="token operator">&gt;</span>\u6211\u7684<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>    

<span class="token function">profileClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/profile&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;kobi&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;28&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">198</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\uFF09\u8DF3\u8F6C\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u6CD51\uFF1A</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{ name: &#39;users&#39;, query: { uname: james }}&quot;</span><span class="token operator">&gt;</span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token comment">// \u65B9\u6CD52\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span>james <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u6CD53\uFF1A</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{ path: &#39;/user&#39;, query: { uname:james }}&quot;</span><span class="token operator">&gt;</span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token comment">// \u65B9\u6CD54\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span>james <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u6CD55\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/user?uname=&#39;</span> <span class="token operator">+</span> jsmes<span class="token punctuation">)</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\uFF09\u83B7\u53D6\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u901A\u8FC7<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query \u83B7\u53D6\u4F20\u9012\u7684\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-params-\u548C-query-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-params-\u548C-query-\u7684\u533A\u522B" aria-hidden="true">#</a> (3) params \u548C query \u7684\u533A\u522B</h4><ul><li>\u5BF9\u4E8E query\uFF1A</li></ul><p>name \u548C path \u90FD\u53EF\u4EE5\u7528\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link :to=&quot;{ name: &#39;W&#39;, query: { id:&#39;1234&#39;\uFF0Cage:&#39;12&#39; }}&quot;/&gt;
&lt;router-link :to=&quot;{ path: &#39;/W&#39;, query: { id:&#39;1234&#39;,age:&#39;12&#39; }}&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u4E8E params:</li></ul><p>\u53EA\u80FD\u7528 name,</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link :to=&quot;{ name: &#39;W&#39;, params: { id:&#39;1234&#39;,age:&#39;12&#39; }}&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u603B\u7ED3</strong></p><p>\u7528\u6CD5\uFF1Aquery\u8981\u7528path\u6765\u5F15\u5165\uFF0Cparams\u8981\u7528name\u6765\u5F15\u5165\uFF0C\u63A5\u6536\u53C2\u6570\u90FD\u662F\u7C7B\u4F3C\u7684\uFF0C\u5206\u522B\u662F <code>this.$route.query.name</code> \u548C <code>this.$route.params.name</code> \u3002</p><p><strong>url\u5730\u5740\u663E\u793A</strong>\uFF1Aquery\u66F4\u52A0\u7C7B\u4F3C\u4E8Eajax\u4E2Dget\u4F20\u53C2\uFF0Cparams\u5219\u7C7B\u4F3C\u4E8Epost\uFF0C\u8BF4\u7684\u518D\u7B80\u5355\u4E00\u70B9\uFF0C\u524D\u8005\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u4E2D\u663E\u793A\u53C2\u6570\uFF0C\u540E\u8005\u5219\u4E0D\u663E\u793A</p><p><strong>\u6CE8\u610F</strong>\uFF1Aquery\u5237\u65B0\u4E0D\u4F1A\u4E22\u5931query\u91CC\u9762\u7684\u6570\u636E params\u5237\u65B0\u4F1A\u4E22\u5931 params\u91CC\u9762\u7684\u6570\u636E\u3002</p><h3 id="_3-route-\u548C-router-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-route-\u548C-router-\u7684\u533A\u522B" aria-hidden="true">#</a> 3.$route \u548C $router \u7684\u533A\u522B</h3><ul><li><code>$router</code>\u4E3AVueRouter\u5B9E\u4F8B\uFF0C\u60F3\u8981\u5BFC\u822A\u5230\u4E0D\u540CURL\uFF0C\u5219\u4F7F\u7528$router.push\u65B9\u6CD5</li><li><code>$route</code>\u4E3A\u5F53\u524Drouter\u8DF3\u8F6C\u5BF9\u8C61\uFF0C\u91CC\u9762\u53EF\u4EE5\u83B7\u53D6name\u3001path\u3001query\u3001params\u7B49</li></ul><h3 id="_4-vue-router-\u7684\u61D2\u52A0\u8F7D\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-vue-router-\u7684\u61D2\u52A0\u8F7D\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 4.Vue-Router \u7684\u61D2\u52A0\u8F7D\u5982\u4F55\u5B9E\u73B0</h3><p>\u8DEF\u7531\u61D2\u52A0\u8F7D\u7684\u542B\u4E49\uFF1A</p><p>\u628A\u4E0D\u540C\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5206\u5272\u6210\u4E0D\u540C\u7684\u4EE3\u7801\u5757\uFF0C\u7136\u540E\u5F53\u8DEF\u7531\u88AB\u8BBF\u95EE\u7684\u65F6\u5019\u624D\u52A0\u8F7D\u5BF9\u5E94\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const List = () =&gt; import(&#39;@/components/list.vue&#39;)

const router = new VueRouter({
  routes: [
    { path: &#39;/list&#39;, component: List }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-vue-router-\u4E2D\u5E38\u7528\u7684\u8DEF\u7531\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-vue-router-\u4E2D\u5E38\u7528\u7684\u8DEF\u7531\u6A21\u5F0F" aria-hidden="true">#</a> 5.vue-router \u4E2D\u5E38\u7528\u7684\u8DEF\u7531\u6A21\u5F0F</h3><h4 id="hash-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#hash-\u6A21\u5F0F" aria-hidden="true">#</a> hash \u6A21\u5F0F</h4><ol><li><p>location.hash \u7684\u503C\u5B9E\u9645\u5C31\u662F URL \u4E2D#\u540E\u9762\u7684\u4E1C\u897F \u5B83\u7684\u7279\u70B9\u5728\u4E8E\uFF1Ahash \u867D\u7136\u51FA\u73B0 URL \u4E2D\uFF0C\u4F46\u4E0D\u4F1A\u88AB\u5305\u542B\u5728 HTTP \u8BF7\u6C42\u4E2D\uFF0C\u5BF9\u540E\u7AEF\u5B8C\u5168\u6CA1\u6709\u5F71\u54CD\uFF0C\u56E0\u6B64\u6539\u53D8 hash \u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002</p></li><li><p>\u53EF\u4EE5\u4E3A hash \u7684\u6539\u53D8\u6DFB\u52A0\u76D1\u542C\u4E8B\u4EF6</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;hashchange&quot;</span><span class="token punctuation">,</span> funcRef<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6BCF\u4E00\u6B21\u6539\u53D8 hash\uFF08window.location.hash\uFF09\uFF0C\u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u7684\u8BBF\u95EE\u5386\u53F2\u4E2D\u589E\u52A0\u4E00\u4E2A\u8BB0\u5F55\u5229\u7528 hash \u7684\u4EE5\u4E0A\u7279\u70B9\uFF0C\u5C31\u53EF\u4EE5\u6765\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u201C\u66F4\u65B0\u89C6\u56FE\u4F46\u4E0D\u91CD\u65B0\u8BF7\u6C42\u9875\u9762\u201D\u7684\u529F\u80FD\u4E86</p><blockquote><p>\u7279\u70B9\uFF1A\u517C\u5BB9\u6027\u597D\u4F46\u662F\u4E0D\u7F8E\u89C2</p></blockquote><h4 id="history-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#history-\u6A21\u5F0F" aria-hidden="true">#</a> history \u6A21\u5F0F</h4><p>\u5229\u7528\u4E86 HTML5 History Interface \u4E2D\u65B0\u589E\u7684 pushState() \u548C replaceState() \u65B9\u6CD5\u3002</p><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5E94\u7528\u4E8E\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u7AD9\uFF0C\u5728\u5F53\u524D\u5DF2\u6709\u7684 back\u3001forward\u3001go \u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u5B83\u4EEC\u63D0\u4F9B\u4E86\u5BF9\u5386\u53F2\u8BB0\u5F55\u8FDB\u884C\u4FEE\u6539\u7684\u529F\u80FD\u3002\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6709\u4E2A\u5171\u540C\u7684\u7279\u70B9\uFF1A\u5F53\u8C03\u7528\u4ED6\u4EEC\u4FEE\u6539\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u6808\u540E\uFF0C\u867D\u7136\u5F53\u524D URL \u6539\u53D8\u4E86\uFF0C\u4F46\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\uFF0C\u8FD9\u5C31\u4E3A\u5355\u9875\u5E94\u7528\u524D\u7AEF\u8DEF\u7531\u201C\u66F4\u65B0\u89C6\u56FE\u4F46\u4E0D\u91CD\u65B0\u8BF7\u6C42\u9875\u9762\u201D\u63D0\u4F9B\u4E86\u57FA\u7840\u3002</p><blockquote><p>\u7279\u70B9\uFF1A\u867D\u7136\u7F8E\u89C2\uFF0C\u4F46\u662F\u5237\u65B0\u4F1A\u51FA\u73B0 404 \u9700\u8981\u540E\u7AEF\u8FDB\u884C\u914D\u7F6E(\u4E00\u822C\u662F\u5C06\u9875\u9762\u914D\u7F6E\u91CD\u5B9A\u5411\u5230\u9996\u9875\u8DEF\u7531)</p></blockquote><p><strong>\u603B\u7ED3</strong></p><p>hash\u6A21\u5F0F\u662F\u5F00\u53D1\u4E2D\u9ED8\u8BA4\u7684\u6A21\u5F0F\uFF0C\u5982\u679C\u60F3\u8981\u5207\u6362\u5230history\u6A21\u5F0F\uFF0C\u5C31\u8981\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF08\u540E\u7AEF\u4E5F\u8981\u8FDB\u884C\u914D\u7F6E\uFF09\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const router = new VueRouter({
  mode: &#39;history&#39;,
  routes: [...]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A-\u4E0E-\u58F0\u660E\u5F0F\u8DEF\u7531\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#_6-\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A-\u4E0E-\u58F0\u660E\u5F0F\u8DEF\u7531\u5BFC\u822A" aria-hidden="true">#</a> 6.\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A \u4E0E \u58F0\u660E\u5F0F\u8DEF\u7531\u5BFC\u822A</h3><h4 id="\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A-\u5373\u5199-js-\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A-\u5373\u5199-js-\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A --&gt; \u5373\u5199 js \u7684\u65B9\u5F0F</h4><p>\u76F8\u5173 API\uFF1A</p><p><strong>1) this.$router.push(path):</strong></p><p>\u76F8\u5F53\u4E8E\u70B9\u51FB\u8DEF\u7531\u94FE\u63A5(\u53EF\u4EE5\u8FD4\u56DE\u5230\u5F53\u524D\u8DEF\u7531\u754C\u9762) --&gt; \u961F\u5217\u7684\u65B9\u5F0F\uFF08\u5148\u8FDB\u5148\u51FA\uFF09</p><p><strong>2)this.$router.replace(path):</strong></p><p>\u7528\u65B0\u8DEF\u7531\u66FF\u6362\u5F53\u524D\u8DEF\u7531(\u4E0D\u53EF\u4EE5\u8FD4\u56DE\u5230\u5F53\u524D\u8DEF\u7531\u754C\u9762) --&gt; \u6808\u7684\u65B9\u5F0F\uFF08\u5148\u8FDB\u540E\u51FA\uFF09</p><p><strong>3)this.$router.back():</strong></p><p>\u8BF7\u6C42(\u8FD4\u56DE)\u4E0A\u4E00\u4E2A\u8BB0\u5F55\u8DEF\u7531</p><p><strong>4)this.$router.go(-1):</strong></p><p>\u8BF7\u6C42(\u8FD4\u56DE)\u4E0A\u4E00\u4E2A\u8BB0\u5F55\u8DEF\u7531</p><p><strong>5) this.$router.go(1):</strong></p><p>\u8BF7\u6C42\u4E0B\u4E00\u4E2A\u8BB0\u5F55\u8DEF\u7531</p><h4 id="\u58F0\u660E\u5F0F\u8DEF\u7531\u5BFC\u822A-\u5373-router-link" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u8DEF\u7531\u5BFC\u822A-\u5373-router-link" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u8DEF\u7531\u5BFC\u822A --&gt; \u5373 <code>&lt;router-link&gt;</code></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link to=&#39;xxx&#39; tag=&#39;li&#39;&gt;  To PageB  &lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A<code>&lt;router-link&gt;</code> \u4F1A\u9ED8\u8BA4\u89E3\u6790\u6210 a \u6807\u7B7E\uFF0C\u53EF\u4EE5\u901A\u8FC7 tag \u5C5E\u6027\u6307\u5B9A\u5B83\u89E3\u6790\u6210\u4EC0\u4E48\u6807\u7B7E</p><h3 id="_7-\u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u7F3A\u70B9-spa" tabindex="-1"><a class="header-anchor" href="#_7-\u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u7F3A\u70B9-spa" aria-hidden="true">#</a> 7.\u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u7F3A\u70B9\uFF08SPA\uFF09</h3><p>\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F\u5C06\u6240\u6709\u7684\u6D3B\u52A8\u5C40\u9650\u4E8E\u4E00\u4E2AWeb\u9875\u9762\u4E2D\uFF0C\u5728\u8BE5Web\u9875\u9762\u521D\u59CB\u5316\u65F6\u52A0\u8F7D\u76F8\u5E94\u7684HTML\u3001JavaScript \u548C CSS\u3002\u4E00\u65E6\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\uFF0C\u5355\u9875\u9762\u5E94\u7528\u4E0D\u4F1A\u56E0\u4E3A\u7528\u6237\u7684\u64CD\u4F5C\u800C\u8FDB\u884C\u9875\u9762\u7684\u91CD\u65B0\u52A0\u8F7D\u6216\u8DF3\u8F6C\u3002\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\u5229\u7528 JavaScript \u52A8\u6001\u7684\u53D8\u6362HTML\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u5B9E\u73B0UI\u4E0E\u7528\u6237\u7684\u4EA4\u4E92\u3002\u7531\u4E8E\u907F\u514D\u4E86\u9875\u9762\u7684\u91CD\u65B0\u52A0\u8F7D\uFF0C\u5355\u9875\u9762\u5E94\u7528\u53EF\u4EE5\u63D0\u4F9B\u8F83\u4E3A\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002</p><h4 id="\u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u5355\u9875\u9762\u5E94\u7528\u7684\u4F18\u70B9</h4><ul><li>\u826F\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C</li></ul><p>\u5355\u9875\u5E94\u7528\u7684\u5185\u5BB9\u7684\u6539\u53D8\u4E0D\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762\uFF0C\u83B7\u53D6\u6570\u636E\u4E5F\u662F\u901A\u8FC7Ajax\u5F02\u6B65\u83B7\u53D6\uFF0C\u6CA1\u6709\u9875\u9762\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u5C31\u4E0D\u4F1A\u51FA\u73B0\u201C\u767D\u5C4F\u73B0\u8C61\u201D,\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u5047\u6B7B\u5E76\u6709\u201C\u95EA\u70C1\u201D\u73B0\u8C61\uFF0C\u9875\u9762\u663E\u793A\u6D41\u7545</p><ul><li>\u826F\u597D\u7684\u524D\u540E\u7AEF\u5DE5\u4F5C\u5206\u79BB\u6A21\u5F0F</li></ul><p>\u540E\u7AEF\u4E0D\u518D\u8D1F\u8D23\u6A21\u677F\u6E32\u67D3\u3001\u8F93\u51FA\u9875\u9762\u5DE5\u4F5C\uFF0C\u540E\u7AEFAPI\u901A\u7528\u5316\uFF0C\u5373\u540C\u4E00\u5957\u540E\u7AEF\u7A0B\u5E8F\u4EE3\u7801\uFF0C\u4E0D\u7528\u4FEE\u6539\u5C31\u53EF\u4EE5\u7528\u4E8EWeb\u754C\u9762\u3001\u624B\u673A\u3001\u5E73\u677F\u7B49\u591A\u79CD\u5BA2\u6237\u7AEF</p><ul><li>\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B</li></ul><p>\u5355\u9875\u5E94\u7528\u76F8\u5BF9\u670D\u52A1\u5668\u538B\u529B\u5C0F\uFF0C\u670D\u52A1\u5668\u53EA\u7528\u51FA\u6570\u636E\u5C31\u53EF\u4EE5\uFF0C\u4E0D\u7528\u7BA1\u5C55\u793A\u903B\u8F91\u548C\u9875\u9762\u5408\u6210\uFF0C\u541E\u5410\u80FD\u529B\u4F1A\u63D0\u9AD8\u51E0\u500D</p><h4 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h4><ul><li><p>\u9996\u5C4F\u52A0\u8F7D\u6162</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li><p>1.vue-router\u61D2\u52A0\u8F7D</p><p>Vue-router\u61D2\u52A0\u8F7D\u5C31\u662F\u6309\u9700\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u53EA\u6709\u5F53\u8DEF\u7531\u88AB\u8BBF\u95EE\u65F6\u624D\u4F1A\u52A0\u8F7D\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u5728\u52A0\u8F7D\u9996\u9875\u7684\u65F6\u5019\u5C31\u52A0\u8F7D\uFF0C\u9879\u76EE\u8D8A\u5927\uFF0C\u5BF9\u9996\u5C4F\u52A0\u8F7D\u7684\u901F\u5EA6\u63D0\u5347\u5F97\u8D8A\u660E\u663E</p></li><li><p>2.\u4F7F\u7528CDN\u52A0\u901F</p><p>\u5728\u505A\u9879\u76EE\u65F6\uFF0C\u6211\u4EEC\u4F1A\u7528\u5230\u5F88\u591A\u5E93\uFF0C\u91C7\u7528cdn\u52A0\u8F7D\u53EF\u4EE5\u52A0\u5FEB\u52A0\u8F7D\u901F\u5EA6\u3002</p></li><li><p>3.\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6</p></li><li><p>4.\u670D\u52A1\u7AEF\u6E32\u67D3</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\u8FD8\u80FD\u5BF9seo\u4F18\u5316\u8D77\u5230\u4F5C\u7528\uFF0C\u6709\u5229\u4E8E\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u66F4\u591A\u6709\u7528\u7684\u4FE1\u606F\uFF08\u5982\u679C\u9875\u9762\u7EAF\u524D\u7AEF\u6E32\u67D3\uFF0C\u641C\u7D22\u5F15\u64CE\u6293\u53D6\u5230\u7684\u5C31\u53EA\u662F\u7A7A\u9875\u9762\uFF09</p></li></ul></li><li><p>\u4E0D\u5229\u4E8ESEO</p></li></ul><p>seo \u672C\u8D28\u662F\u4E00\u4E2A\u670D\u52A1\u5668\u5411\u53E6\u4E00\u4E2A\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u89E3\u6790\u8BF7\u6C42\u5185\u5BB9\u3002\u4F46\u4E00\u822C\u6765\u8BF4\u641C\u7D22\u5F15\u64CE\u662F\u4E0D\u4F1A\u53BB\u6267\u884C\u8BF7\u6C42\u5230\u7684js\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u641C\u7D22\u5F15\u64CE\u7684\u57FA\u7840\u722C\u866B\u7684\u539F\u7406\u5C31\u662F\u6293\u53D6url\uFF0C\u7136\u540E\u83B7\u53D6html\u6E90\u4EE3\u7801\u5E76\u89E3\u6790\u3002 \u5982\u679C\u4E00\u4E2A\u5355\u9875\u5E94\u7528\uFF0Chtml\u5728\u670D\u52A1\u5668\u7AEF\u8FD8\u6CA1\u6709\u6E32\u67D3\u90E8\u5206\u6570\u636E\u6570\u636E\uFF0C\u5728\u6D4F\u89C8\u5668\u624D\u6E32\u67D3\u51FA\u6570\u636E\uFF0C\u5373\u641C\u7D22\u5F15\u64CE\u8BF7\u6C42\u5230\u7684html\u662F\u6A21\u578B\u9875\u9762\u800C\u4E0D\u662F\u6700\u7EC8\u6570\u636E\u7684\u6E32\u67D3\u9875\u9762\u3002 \u8FD9\u6837\u5C31\u5F88\u4E0D\u5229\u4E8E\u5185\u5BB9\u88AB\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u5230</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li><p>1.\u670D\u52A1\u7AEF\u6E32\u67D3</p><p>\u670D\u52A1\u5668\u5408\u6210\u5B8C\u6574\u7684 html \u6587\u4EF6\u518D\u8F93\u51FA\u5230\u6D4F\u89C8\u5668</p></li><li><p>2.\u9875\u9762\u9884\u6E32\u67D3</p></li><li><p>3.\u8DEF\u7531\u91C7\u7528h5 history\u6A21\u5F0F</p></li></ul>`,89),r=[p];function o(i,l){return s(),a("div",null,r)}var c=n(t,[["render",o],["__file","\u3010vue\u3011vue-Router\u5E38\u89C1\u9762\u8BD5\u9898.html.vue"]]);export{c as default};
