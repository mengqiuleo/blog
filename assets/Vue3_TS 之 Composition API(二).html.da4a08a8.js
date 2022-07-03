import{_ as n,o as s,c as a,a as t}from"./app.988effc2.js";const p={},e=t(`<h1 id="vue3-ts-\u4E4B-composition-api-\u4E8C" tabindex="-1"><a class="header-anchor" href="#vue3-ts-\u4E4B-composition-api-\u4E8C" aria-hidden="true">#</a> Vue3+TS \u4E4B Composition API(\u4E8C)</h1><p>[TOC]</p><h2 id="\u5199\u5728\u524D\u9762" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u524D\u9762" aria-hidden="true">#</a> \u5199\u5728\u524D\u9762</h2><p>\u8FD9\u91CC\u662F\u5C0F\u98DE\u4FA0Pan\u{1F973},\u7ACB\u5FD7\u6210\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u524D\u7AEF\u7A0B\u5E8F\u5A9B\uFF01\uFF01\uFF01</p><p>\u672C\u7BC7\u535A\u5BA2\u6536\u5F55\u4E8E\u6211\u7684github\u524D\u7AEF\u7B14\u8BB0\u4ED3\u5E93\u4E2D\uFF0C\u6301\u7EED\u66F4\u65B0\uFF0C\u6B22\u8FCEstar~</p><p>\u{1F449}<a href="https://github.com/mengqiuleo/myNote" target="_blank" rel="noopener noreferrer">https://github.com/mengqiuleo/myNote</a></p><h2 id="composition-api-\u5176\u4ED6\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#composition-api-\u5176\u4ED6\u90E8\u5206" aria-hidden="true">#</a> Composition API(\u5176\u4ED6\u90E8\u5206)</h2><h3 id="_1-shallowreactive-\u4E0E-shallowref" tabindex="-1"><a class="header-anchor" href="#_1-shallowreactive-\u4E0E-shallowref" aria-hidden="true">#</a> 1\uFF09shallowReactive \u4E0E shallowRef</h3><ul><li><p>shallowReactive\uFF1A\u53EA\u5904\u7406\u5BF9\u8C61\u6700\u5916\u5C42\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F\uFF08\u6D45\u54CD\u5E94\u5F0F\uFF09\u3002</p></li><li><p>shallowRef\uFF1A\u53EA\u5904\u7406\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F, \u4E0D\u8FDB\u884C\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u5904\u7406\u3002</p></li><li><p>\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528?</p><ul><li>\u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E\uFF0C\u7ED3\u6784\u6BD4\u8F83\u6DF1, \u4F46\u53D8\u5316\u65F6\u53EA\u662F\u5916\u5C42\u5C5E\u6027\u53D8\u5316 ==&gt; shallowReactive\u3002</li><li>\u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E\uFF0C\u540E\u7EED\u529F\u80FD\u4E0D\u4F1A\u4FEE\u6539\u8BE5\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u800C\u662F\u751F\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362 ==&gt; shallowRef\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> m3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m4 <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-readonly-\u4E0E-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#_2-readonly-\u4E0E-shallowreadonly" aria-hidden="true">#</a> 2\uFF09readonly \u4E0E shallowReadonly</h3><ul><li><p>readonly: \u8BA9\u4E00\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E\u53D8\u4E3A\u53EA\u8BFB\u7684\uFF08\u6DF1\u53EA\u8BFB\uFF09\u3002</p></li><li><p>shallowReadonly\uFF1A\u8BA9\u4E00\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E\u53D8\u4E3A\u53EA\u8BFB\u7684\uFF08\u6D45\u53EA\u8BFB\uFF0C\u53EA\u53EF\u4EE5\u4FDD\u8BC1\u7B2C\u4E00\u5C42\u6570\u636E\u4E0D\u53EF\u4EE5\u88AB\u66F4\u6539\uFF0C\u91CC\u9762\u6DF1\u5C42\u7684\u6570\u636E\u4F9D\u7136\u53EF\u4EE5\u66F4\u6539\uFF09\u3002</p></li><li><p>\u5E94\u7528\u573A\u666F:</p><ul><li>\u5728\u67D0\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B, \u6211\u4EEC\u53EF\u80FD\u4E0D\u5E0C\u671B\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u65B0\u7684\u64CD\u4F5C, \u90A3\u5C31\u53EF\u4EE5\u5305\u88C5\u751F\u6210\u4E00\u4E2A\u53EA\u8BFB\u4EE3\u7406\u5BF9\u8C61\u6765\u8BFB\u53D6\u6570\u636E, \u800C\u4E0D\u80FD\u4FEE\u6539\u6216\u5220\u9664\uFF08\u6BD4\u5982\u6211\u4EEC\u5F15\u7528\u4E86\u522B\u4EBA\u7684\u4EE3\u7801\uFF09</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// const rState1 = readonly(state)</span>
    <span class="token keyword">const</span> rState2 <span class="token operator">=</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-toraw-\u4E0E-markraw" tabindex="-1"><a class="header-anchor" href="#_3-toraw-\u4E0E-markraw" aria-hidden="true">#</a> 3\uFF09toRaw \u4E0E markRaw</h3><ul><li>toRaw <ul><li>\u5C06\u4E00\u4E2A\u7531<code>reactive</code>\u751F\u6210\u7684<strong style="color:orange;">\u54CD\u5E94\u5F0F\u5BF9\u8C61</strong>\u8F6C\u4E3A<strong style="color:orange;">\u666E\u901A\u5BF9\u8C61</strong></li><li>\u8FD9\u662F\u4E00\u4E2A\u8FD8\u539F\u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\u4E34\u65F6\u8BFB\u53D6\uFF0C\u8BBF\u95EE\u4E0D\u4F1A\u88AB\u4EE3\u7406/\u8DDF\u8E2A\uFF0C\u5199\u5165\u65F6\u4E5F\u4E0D\u4F1A\u89E6\u53D1\u754C\u9762\u66F4\u65B0\u3002</li><li>\u4F7F\u7528\u573A\u666F\uFF1A\u7528\u4E8E\u8BFB\u53D6\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5BF9\u5E94\u7684\u666E\u901A\u5BF9\u8C61\uFF0C\u5BF9\u8FD9\u4E2A\u666E\u901A\u5BF9\u8C61\u7684\u6240\u6709\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u5F15\u8D77\u9875\u9762\u66F4\u65B0\u3002</li></ul></li><li>markRaw <ul><li>\u6807\u8BB0\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F7F\u5176\u6C38\u8FDC\u4E0D\u4F1A\u8F6C\u6362\u4E3A\u4EE3\u7406\u3002\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB</li><li>\u5E94\u7528\u573A\u666F: <ul><li>\u6709\u4E9B\u503C\u4E0D\u5E94\u88AB\u8BBE\u7F6E\u4E3A\u54CD\u5E94\u5F0F\u7684\uFF0C\u4F8B\u5982\u590D\u6742\u7684\u7B2C\u4E09\u65B9\u7C7B\u5B9E\u4F8B\u6216 Vue \u7EC4\u4EF6\u5BF9\u8C61\u3002</li><li>\u5F53\u6E32\u67D3\u5177\u6709\u4E0D\u53EF\u53D8\u6570\u636E\u6E90\u7684\u5927\u5217\u8868\u65F6\uFF0C\u8DF3\u8FC7\u4EE3\u7406\u8F6C\u6362\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002</li></ul></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> state <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">testToRaw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
      user<span class="token punctuation">.</span>age<span class="token operator">++</span> <span class="token comment">// \u754C\u9762\u4E0D\u4F1A\u66F4\u65B0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">testMarkRaw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> likes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
      <span class="token comment">// state.likes = likes</span>
      state<span class="token punctuation">.</span>likes <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span> <span class="token comment">// likes\u6570\u7EC4\u5C31\u4E0D\u518D\u662F\u54CD\u5E94\u5F0F\u7684\u4E86</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>likes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-customref" tabindex="-1"><a class="header-anchor" href="#_4-customref" aria-hidden="true">#</a> 4\uFF09customRef</h3><p>\u4F5C\u7528\uFF1A\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 ref\uFF0C\u5E76\u5BF9\u5176\u4F9D\u8D56\u9879\u8DDF\u8E2A\u548C\u66F4\u65B0\u89E6\u53D1\u8FDB\u884C\u663E\u5F0F\u63A7\u5236\u3002</p><p>demo\u5B9E\u73B0\u9632\u6296\u6548\u679C\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyword<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{keyword}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>customRef<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// let keyword = ref(&#39;hello&#39;) //\u4F7F\u7528Vue\u51C6\u5907\u597D\u7684\u5185\u7F6Eref</span>
			<span class="token comment">//\u81EA\u5B9A\u4E49\u4E00\u4E2AmyRef</span>
			<span class="token keyword">function</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">let</span> timer
				<span class="token comment">//\u901A\u8FC7customRef\u53BB\u5B9E\u73B0\u81EA\u5B9A\u4E49</span>
				<span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span>trigger</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
					<span class="token keyword">return</span><span class="token punctuation">{</span>
						<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
							<span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u544A\u8BC9Vue\u8FD9\u4E2Avalue\u503C\u662F\u9700\u8981\u88AB\u201C\u8FFD\u8E2A\u201D\u7684</span>
							<span class="token keyword">return</span> value
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
							<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
							timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
								value <span class="token operator">=</span> newValue
								<span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u544A\u8BC9Vue\u53BB\u66F4\u65B0\u754C\u9762</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">let</span> keyword <span class="token operator">=</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">//\u4F7F\u7528\u7A0B\u5E8F\u5458\u81EA\u5B9A\u4E49\u7684ref</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				keyword
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-provide-\u4E0E-inject" tabindex="-1"><a class="header-anchor" href="#_5-provide-\u4E0E-inject" aria-hidden="true">#</a> 5\uFF09provide \u4E0E inject</h3><img src="https://v3.cn.vuejs.org/images/components_provide.png" style="width:300px;"><ul><li><p>\u4F5C\u7528\uFF1A\u5B9E\u73B0<strong style="color:#DD5145;">\u7956\u4E0E\u540E\u4EE3\u7EC4\u4EF6\u95F4</strong>\u901A\u4FE1</p></li><li><p>\u5957\u8DEF\uFF1A\u7236\u7EC4\u4EF6\u6709\u4E00\u4E2A <code>provide</code> \u9009\u9879\u6765\u63D0\u4F9B\u6570\u636E\uFF0C\u540E\u4EE3\u7EC4\u4EF6\u6709\u4E00\u4E2A <code>inject</code> \u9009\u9879\u6765\u5F00\u59CB\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E</p></li><li><p>\u5177\u4F53\u5199\u6CD5\uFF1A</p><ol><li><p>\u7956\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;\u5954\u9A70&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">&#39;40\u4E07&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span>car<span class="token punctuation">)</span>
    <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u540E\u4EE3\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token operator">...</span><span class="token operator">...</span>
    <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>car<span class="token punctuation">}</span>
	<span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ul><h3 id="_6-\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_6-\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD" aria-hidden="true">#</a> 6\uFF09\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD</h3><ul><li>isRef: \u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u4E00\u4E2A ref \u5BF9\u8C61</li><li>isReactive: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406</li><li>isReadonly: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>readonly</code> \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406</li><li>isProxy: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u6216\u8005 <code>readonly</code> \u65B9\u6CD5\u521B\u5EFA\u7684\u4EE3\u7406</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;\u5954\u9A70&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">&#39;40W&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token keyword">let</span> car2 <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span>

			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>car2<span class="token punctuation">)</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span>

			
			<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api-vs-option-api" tabindex="-1"><a class="header-anchor" href="#composition-api-vs-option-api" aria-hidden="true">#</a> Composition API VS Option API</h2><h3 id="_1-option-api-\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-option-api-\u7684\u95EE\u9898" aria-hidden="true">#</a> 1\uFF09Option API \u7684\u95EE\u9898</h3><p>\u5728\u4F20\u7EDF\u7684 Vue OptionsAPI \u4E2D\uFF0C\u65B0\u589E\u6216\u8005\u4FEE\u6539\u4E00\u4E2A\u9700\u6C42\uFF0C\u5C31\u9700\u8981\u5206\u522B\u5728 data\uFF0Cmethods\uFF0Ccomputed \u91CC\u4FEE\u6539 \uFF0C\u6EDA\u52A8\u6761\u53CD\u590D\u4E0A\u4E0B\u79FB\u52A8</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="_2-\u4F7F\u7528-compisition-api" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-compisition-api" aria-hidden="true">#</a> 2) \u4F7F\u7528 Compisition API</h3><p>\u6211\u4EEC\u53EF\u4EE5\u66F4\u52A0\u4F18\u96C5\u7684\u7EC4\u7EC7\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u51FD\u6570\u3002\u8BA9\u76F8\u5173\u529F\u80FD\u7684\u4EE3\u7801\u66F4\u52A0\u6709\u5E8F\u7684\u7EC4\u7EC7\u5728\u4E00\u8D77</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image" alt=""></p><blockquote><p>\u7B14\u8BB0\u5747\u6765\u81EAb\u7AD9\u5C1A\u7845\u8C37vue2+vue3\u7684\u5B66\u4E60</p></blockquote>`,36),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","Vue3+TS \u4E4B Composition API(\u4E8C).html.vue"]]);export{r as default};
