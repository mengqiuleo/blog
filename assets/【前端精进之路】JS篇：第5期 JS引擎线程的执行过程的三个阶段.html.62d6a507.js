import{_ as e,o as n,c as s,a}from"./app.988effc2.js";const i={},o=a(`<h1 id="\u3010\u524D\u7AEF\u7CBE\u8FDB\u4E4B\u8DEF\u3011js\u7BC7-\u7B2C5\u671F-js\u5F15\u64CE\u7EBF\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u7684\u4E09\u4E2A\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u3010\u524D\u7AEF\u7CBE\u8FDB\u4E4B\u8DEF\u3011js\u7BC7-\u7B2C5\u671F-js\u5F15\u64CE\u7EBF\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u7684\u4E09\u4E2A\u9636\u6BB5" aria-hidden="true">#</a> \u3010\u524D\u7AEF\u7CBE\u8FDB\u4E4B\u8DEF\u3011JS\u7BC7\uFF1A\u7B2C5\u671F JS\u5F15\u64CE\u7EBF\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u7684\u4E09\u4E2A\u9636\u6BB5</h1><p>[TOC]</p><h2 id="\u5199\u5728\u524D\u9762" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u524D\u9762" aria-hidden="true">#</a> \u5199\u5728\u524D\u9762</h2><p>\u8FD9\u91CC\u662F\u5C0F\u98DE\u4FA0Pan\u{1F973}\uFF0C\u7ACB\u5FD7\u6210\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u524D\u7AEF\u7A0B\u5E8F\u5A9B\uFF01\uFF01\uFF01</p><p>\u672C\u7BC7\u6587\u7AE0\u6536\u5F55\u4E8E\u6211\u7684\u4E13\u680F\uFF1A<a href="https://blog.csdn.net/weixin_52834435/category_11886356.html?spm=1001.2014.3001.5482" target="_blank" rel="noopener noreferrer">\u524D\u7AEF\u7CBE\u8FDB\u4E4B\u8DEF</a></p><p>\u540C\u65F6\u6536\u5F55\u4E8E\u6211\u7684<a href="https://github.com/mengqiuleo" target="_blank" rel="noopener noreferrer">github</a>\u524D\u7AEF\u7B14\u8BB0\u4ED3\u5E93\u4E2D\uFF0C\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u6B22\u8FCEstar~</p><p>\u{1F449}<a href="https://github.com/mengqiuleo/myNote" target="_blank" rel="noopener noreferrer">https://github.com/mengqiuleo/myNote</a></p><hr><blockquote><p><strong>JS\u5F15\u64CE\u7EBF\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u7684\u4E09\u4E2A\u9636\u6BB5</strong></p><p>\u5728\u4E86\u89E3\u53D8\u91CF\u63D0\u5347\u548C\u51FD\u6570\u63D0\u5347\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u4E00\u4E0B<strong>JavaScript\u4EE3\u7801\u662F\u600E\u4E48\u6267\u884C\u7684\uFF1F</strong></p><p>\u9996\u5148\uFF0CJavaScript\u4EE3\u7801\u6267\u884C\u4E00\u5171\u5206\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u8BED\u6CD5\u5206\u6790</li><li>\u9884\u7F16\u8BD1</li><li>\u89E3\u91CA\u6267\u884C</li></ul></blockquote><h2 id="\u8BED\u6CD5\u5206\u6790\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u5206\u6790\u9636\u6BB5" aria-hidden="true">#</a> \u8BED\u6CD5\u5206\u6790\u9636\u6BB5</h2><p>\u5728\u8BED\u6CD5\u5206\u6790\u9636\u6BB5\uFF0C\u6211\u4EEC\u4F1A\u6709\uFF1A<strong>\u8BCD\u6CD5\u5206\u6790\uFF0C\u8BED\u6CD5\u5206\u6790\uFF0C\u4EE3\u7801\u751F\u6210\uFF0C\u8FD9\u4E09\u4E2A\u8FC7\u7A0B\u7EDF\u79F0\u4E3A\u8BED\u6CD5\u5206\u6790\u9636\u6BB5</strong>\u3002</p><ul><li><p><strong>\u8BCD\u6CD5\u5206\u6790</strong>\uFF08Tokenizing/Lexing\uFF09\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u5C06\u7531\u5B57\u7B26\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\u5206\u89E3\u6210\uFF08\u5BF9\u7F16\u7A0B\u8BED\u8A00\u6765\u8BF4\uFF09\u6709\u610F\u4E49\u7684\u4EE3\u7801\u5757\uFF0C\u8FD9\u4E9B\u4EE3\u7801\u5757\u88AB\u79F0\u4E3A\u8BCD\u6CD5\u5355\u5143\uFF08token\uFF09\u3002</p><p>\u4F8B\u5982\uFF0C\u8003\u8651\u7A0B\u5E8Fvar a = 2;\u3002\u8FD9\u6BB5\u7A0B\u5E8F\u901A\u5E38\u4F1A\u88AB\u5206\u89E3\u6210\u4E3A\u4E0B\u9762\u8FD9\u4E9B\u8BCD\u6CD5\u5355\u5143\uFF1Avar\u3001a\u3001=\u30012 \u3001;\u3002\u7A7A\u683C\u662F\u5426\u4F1A\u88AB\u5F53\u4F5C\u8BCD\u6CD5\u5355\u5143\uFF0C\u53D6\u51B3\u4E8E\u7A7A\u683C\u5728\u8FD9\u95E8\u8BED\u8A00\u4E2D\u662F\u5426\u5177\u6709\u610F\u4E49\u3002</p></li><li><p><strong>\u8BED\u6CD5\u5206\u6790</strong>\uFF08Parsing\uFF09\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u5C06\u8BCD\u6CD5\u5355\u5143\u6D41\uFF08\u6570\u7EC4\uFF09\u8F6C\u6362\u6210\u4E00\u4E2A\u7531\u5143\u7D20\u9010\u7EA7\u5D4C\u5957\u6240\u7EC4\u6210\u7684\u4EE3\u8868\u4E86\u7A0B\u5E8F\u8BED\u6CD5\u7ED3\u6784\u7684\u6811\u3002\u8FD9\u4E2A\u6811\u88AB\u79F0\u4E3A\u201C<strong>\u62BD\u8C61\u8BED\u6CD5\u6811</strong>\u201D\uFF08Abstract Syntax Tree, AST\uFF09\u3002</p><p>var a = 2\uFF1B\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\u4E2D\u53EF\u80FD\u4F1A\u6709\u4E00\u4E2A\u53EB\u4F5CVariableDeclaration\u7684\u9876\u7EA7\u8282\u70B9\uFF0C\u63A5\u4E0B\u6765\u662F\u4E00\u4E2A\u53EB\u4F5CIdentifier\uFF08\u5B83\u7684\u503C\u662Fa\uFF09\u7684\u5B50\u8282\u70B9\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u53EB\u4F5CAssignmentExpression\u7684\u5B50\u8282\u70B9\u3002AssignmentExpression\u8282\u70B9\u6709\u4E00\u4E2A\u53EB\u4F5CNumericLiteral\uFF08\u5B83\u7684\u503C\u662F2\uFF09\u7684\u5B50\u8282\u70B9\u3002</p></li><li><p><strong>\u4EE3\u7801\u751F\u6210</strong> <strong>\u5C06AST\u8F6C\u6362\u4E3A\u53EF\u6267\u884C\u4EE3\u7801\u7684\u8FC7\u7A0B\u88AB\u79F0\u4E3A\u4EE3\u7801\u751F\u6210</strong>\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u4E0E\u8BED\u8A00\u3001\u76EE\u6807\u5E73\u53F0\u7B49\u606F\u606F\u76F8\u5173\u3002\u629B\u5F00\u5177\u4F53\u7EC6\u8282\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u6709\u67D0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5C06var a = 2\uFF1B\u7684AST\u8F6C\u5316\u4E3A\u4E00\u7EC4\u673A\u5668\u6307\u4EE4\uFF0C\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u53EB\u4F5Ca\u7684\u53D8\u91CF\uFF08\u5305\u62EC\u5206\u914D\u5185\u5B58\u7B49\uFF09\uFF0C\u5E76\u5C06\u4E00\u4E2A\u503C\u50A8\u5B58\u5728a\u4E2D\u3002</p></li></ul><p><strong>\u4E00\u4E2AAST\u7684\u4F8B\u5B50</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">==</span> <span class="token string">&quot;undefined&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> 
    a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
    a <span class="token operator">=</span> a<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
<span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://doc.panjingyi.top/blog/202207012146508.jpg" alt=""></p><h2 id="\u9884\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u9884\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> \u9884\u7F16\u8BD1\u9636\u6BB5</h2><p>\u8BE5\u9636\u6BB5\u4F1A<strong>\u8FDB\u884C\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u521B\u5EFA</strong>\uFF0C\u5305\u62EC\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61VO\u3001\u5EFA\u7ACB\u4F5C\u7528\u57DF\u94FE\u3001\u786E\u5B9A this \u7684\u6307\u5411\u7B49\u3002\u6BCF\u8FDB\u5165\u4E00\u4E2A\u4E0D\u540C\u7684\u8FD0\u884C\u73AF\u5883\u65F6\uFF0CV8 \u5F15\u64CE\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p>\u9884\u7F16\u8BD1\uFF0C\u5C31\u662F\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E00\u5757\u7A7A\u95F4\uFF0C\u7528\u6765\u5B58\u653E\u53D8\u91CF\u548C\u51FD\u6570\u3002\u9884\u7F16\u8BD1\u53D1\u751F\u5728<strong>\u51FD\u6570\u521B\u5EFA\u65F6\uFF0C\u51FD\u6570\u6267\u884C\u524D</strong>\uFF1B\u4E5F\u5C31\u662F\u8BF4\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u9884\u7F16\u8BD1\u5DF2\u7ECF\u7ED3\u675F\u3002</p><p>\u5728\u8FD9\u4E2A\u9636\u6BB5\u4F1A\u5BF9\u53D8\u91CF\uFF0C\u51FD\u6570\u8FDB\u884C\u58F0\u660E\uFF0C\u8D4B\u503C\u4E3Aundefined\uFF0C<strong>\u540C\u65F6\u4F1A\u5229\u7528\u53D8\u91CF\u63D0\u5347\u548C\u51FD\u6570\u63D0\u5347\u7684\u4E24\u4E2A\u89C4\u5219\u8FDB\u884C\u58F0\u660E\uFF08\u53D8\u91CF\u63D0\u5347\u548C\u51FD\u6570\u63D0\u5347\u7684\u89C4\u5219\u4F1A\u5728\u4E0B\u4E00\u5C0F\u8282\u8BF4\u660E\uFF09</strong>\u3002</p><p>\u5728\u9884\u7F16\u8BD1\u9636\u6BB5\uFF0C\u53D8\u91CF\u5BF9\u8C61\u90FD\u662F\u4E0D\u80FD\u8BBF\u95EE\u7684\uFF0C\u56E0\u4E3A\u6B64\u65F6\u7684<strong>\u53D8\u91CF\u5BF9\u8C61VO</strong>\u4E2D\u7684\u53D8\u91CF\u5C5E\u6027\u5C1A\u672A\u8D4B\u503C\uFF0C\u503C\u4ECD\u4E3Aundefined\u3002</p><p>\u53EA\u6709\u8FDB\u5165\u6267\u884C\u9636\u6BB5\uFF0C\u53D8\u91CF\u5BF9\u8C61\u4E2D\u7684\u53D8\u91CF\u5C5E\u6027\u8FDB\u884C\u8D4B\u503C\u540E\uFF0C\u53D8\u91CF\u5BF9\u8C61\uFF08Variable Object\uFF09\u8F6C\u4E3A\u6D3B\u52A8\u5BF9\u8C61\uFF08Active Object\uFF09\u540E\uFF0C\u624D\u80FD\u8FDB\u884C\u8BBF\u95EE\uFF0C<strong>\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662FVO \u2013&gt; AO\u8FC7\u7A0B</strong>\u3002</p><p>\u53E6\u5916\uFF0C\u5728\u9884\u7F16\u8BD1\u9636\u6BB5\uFF0C\u51FD\u6570\u7684<strong>\u4F5C\u7528\u57DF</strong>\u5C31\u5DF2\u7ECF\u786E\u5B9A\u4E86\u3002\u901A\u4FD7\u7406\u89E3\uFF0C\u4F5C\u7528\u57DF\u94FE\u7531\u5F53\u524D\u6267\u884C\u73AF\u5883\u7684\u53D8\u91CF\u5BF9\u8C61\uFF08\u672A\u8FDB\u5165\u6267\u884C\u9636\u6BB5\u524D\uFF09\u4E0E\u4E0A\u5C42\u73AF\u5883\u7684\u4E00\u7CFB\u5217\u6D3B\u52A8\u5BF9\u8C61\u7EC4\u6210\u3002\u5F53\u51FD\u6570\u521B\u5EFA\u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2A\u540D\u4E3A <code>[[scope]]</code> \u7684\u5185\u90E8\u5C5E\u6027\u4FDD\u5B58\u5F53\u524D\u73AF\u5883\u7684VO\u548C\u6240\u6709\u7236\u53D8\u91CF\u5BF9\u8C61\u5230\u5176\u4E2D\u3002\u5F53\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u7136\u540E\u901A\u8FC7<strong>\u590D\u5236</strong>\u51FD\u6570\u7684 <code>[[scope]]</code> \u5C5E\u6027\u4E2D\u7684\u5BF9\u8C61\u6784\u5EFA\u8D77\u6267\u884C\u73AF\u5883\u7684\u4F5C\u7528\u57DF\u94FE\uFF0C\u7136\u540E\uFF0C<strong>\u53D8\u91CF\u5BF9\u8C61 <code>VO</code> \u88AB\u6FC0\u6D3B\u751F\u6210 <code>AO</code> \u5E76\u6DFB\u52A0\u5230\u4F5C\u7528\u57DF\u94FE\u7684\u524D\u7AEF</strong>\uFF0C\u5B8C\u6574\u4F5C\u7528\u57DF\u94FE\u521B\u5EFA\u5B8C\u6210\u3002</p><h2 id="\u6267\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u9636\u6BB5" aria-hidden="true">#</a> \u6267\u884C\u9636\u6BB5</h2><p>\u5728\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C/\u89E3\u91CA\u51FD\u6570\u4EE3\u7801\uFF0C\u5E76\u5728\u4EE3\u7801\u9010\u884C\u6267\u884C\u65F6\u5206\u914D\u53D8\u91CF\u503C\u3002</p><h2 id="\u4E00\u4E2A\u5B8C\u6574\u7684demo" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u5B8C\u6574\u7684demo" aria-hidden="true">#</a> \u4E00\u4E2A\u5B8C\u6574\u7684demo</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var scope = &quot;global scope&quot;;
function checkscope(){
    var scope2 = &#39;local scope&#39;;
    return scope2;
}
checkscope();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p>1.checkscope \u51FD\u6570\u88AB\u521B\u5EFA\uFF0C\u4FDD\u5B58<strong>\u4F5C\u7528\u57DF\u94FE</strong>\u5230 \u5185\u90E8\u5C5E\u6027[[scope]]</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscope.[[scope]] = [
    globalContext.VO
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u6267\u884C checkscope \u51FD\u6570\uFF0C\u521B\u5EFA checkscope \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0Ccheckscope \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u538B\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u6808</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ECStack = [
    checkscopeContext,
    globalContext
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.checkscope \u51FD\u6570\u5E76\u4E0D\u7ACB\u523B\u6267\u884C\uFF0C\u5F00\u59CB\u505A\u51C6\u5907\u5DE5\u4F5C\uFF0C\u7B2C\u4E00\u6B65\uFF1A<strong>\u590D\u5236\u51FD\u6570[[scope]]\u5C5E\u6027\u521B\u5EFA\u4F5C\u7528\u57DF\u94FE(\u4ECE\u8FD9\u91CC\u5C31\u53EF\u4EE5\u770B\u51FA\u4F5C\u7528\u57DF\u7684\u521B\u5EFA\u65F6\u673A\u662F\u5728\u51FD\u6570\u88AB\u521B\u5EFA\uFF0C\u5373\u88AB\u58F0\u660E\u65F6\uFF0C\u53D1\u751F\u5728\u9884\u7F16\u8BD1\u9636\u6BB5\u3002\u5728\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4F5C\u7528\u57DF\u94FE\u65F6\uFF0C\u53EA\u662F\u590D\u5236\u5DF2\u7ECF\u5B58\u5728\u7684\u4F5C\u7528\u57DF\u94FE)</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
    Scope: checkscope.[[scope]],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u7B2C\u4E8C\u6B65\uFF1A\u7528 arguments \u521B\u5EFA\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u968F\u540E\u521D\u59CB\u5316\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u52A0\u5165\u5F62\u53C2\u3001\u51FD\u6570\u58F0\u660E\u3001\u53D8\u91CF\u58F0\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
    VO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    }\uFF0C
    Scope: checkscope.[[scope]],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u7B2C\u4E09\u6B65\uFF1A\u6267\u884C\u8BE5\u51FD\u6570\uFF0C\u5C06<strong>\u6D3B\u52A8\u5BF9\u8C61AO\u538B\u5165 checkscope \u4F5C\u7528\u57DF\u94FE\u9876\u7AEF\uFF0CVO \u6FC0\u6D3B\u4E3A AO</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.\u51C6\u5907\u5DE5\u4F5C\u505A\u5B8C\uFF0C\u5F00\u59CB\u6267\u884C\u51FD\u6570\uFF0C\u968F\u7740\u51FD\u6570\u7684\u6267\u884C\uFF0C\u4FEE\u6539 AO \u7684\u5C5E\u6027\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: &#39;local scope&#39;
    },
    Scope: [AO, [[Scope]]]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.\u67E5\u627E\u5230 scope2 \u7684\u503C\uFF0C\u8FD4\u56DE\u540E\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u51FD\u6570\u4E0A\u4E0B\u6587\u4ECE\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u4E2D\u5F39\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ECStack = [
    globalContext
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ECEjs\u5F15\u64CE\u7684\u89D2\u5EA6\u5206\u6790js\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4ECEjs\u5F15\u64CE\u7684\u89D2\u5EA6\u5206\u6790js\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u4ECEJS\u5F15\u64CE\u7684\u89D2\u5EA6\u5206\u6790js\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B</h2><p>\u9700\u8981\u8FD0\u884C\u4E00\u6BB5 <code>javascript</code> \u4EE3\u7801\uFF0C\u6709\u4E24\u4E2A\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E1C\u897F\uFF1A<strong>JS \u5F15\u64CE</strong> \u548C <strong>\u7F16\u8BD1\u5668</strong>\u3002\u524D\u8005\u7C7B\u4F3C\u4E8E\u603B\u7BA1\u7684\u89D2\u8272\uFF0C\u8D1F\u8D23\u6574\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u65F6\u6240\u9700\u7684\u5404\u79CD\u8D44\u6E90\u7684\u8C03\u5EA6\uFF1B\u540E\u8005\u53EA\u662F\u524D\u8005\u7684\u4E00\u90E8\u5206\uFF0C\u8D1F\u8D23\u5C06 <code>javascript</code> \u6E90\u7801\u7F16\u8BD1\u6210\u673A\u5668\u80FD\u8BC6\u522B\u7684\u673A\u5668\u6307\u4EE4\uFF0C\u7136\u540E\u4EA4\u7ED9\u5F15\u64CE\u8FD0\u884C\u3002</p><p>\u4ECEJS\u5F15\u64CE\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u4E00\u6BB5\u4EE3\u7801\u5206\u4E3A\u7F16\u8BD1\u548C\u6267\u884C\u4E24\u4E2A\u9636\u6BB5\u3002</p><p>\u8FD9\u91CC\u4EE5\u4E00\u4E2A\u4F8B\u5B50\u6765\u5206\u6790JS\u5F15\u64CE\u7684\u6267\u884C\u8FC7\u7A0B\uFF1A</p><p>\u4ECB\u7ECD\u5BF9\u7A0B\u5E8F <code>var a = 2\uFF1B</code>\u7684\u5904\u7406</p><p>1\uFF0E\u9047\u5230var a\uFF0C\u7F16\u8BD1\u5668\u4F1A\u8BE2\u95EE\u4F5C\u7528\u57DF\u662F\u5426\u5DF2\u7ECF\u6709\u4E00\u4E2A\u8BE5\u540D\u79F0\u7684\u53D8\u91CF\u5B58\u5728\u4E8E\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u7684\u96C6\u5408\u4E2D\u3002\u5982\u679C\u662F\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5FFD\u7565\u8BE5\u58F0\u660E\uFF0C\u7EE7\u7EED\u8FDB\u884C\u7F16\u8BD1\uFF1B\u5426\u5219\u5B83\u4F1A\u8981\u6C42\u4F5C\u7528\u57DF\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u96C6\u5408\u4E2D\u58F0\u660E\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\uFF0C\u5E76\u547D\u540D\u4E3Aa\u3002</p><p>2\uFF0E\u63A5\u4E0B\u6765\u7F16\u8BD1\u5668\u4F1A\u4E3A\u5F15\u64CE\u751F\u6210\u8FD0\u884C\u65F6\u6240\u9700\u7684\u4EE3\u7801\uFF0C\u8FD9\u4E9B\u4EE3\u7801\u88AB\u7528\u6765\u5904\u7406a = 2\u8FD9\u4E2A\u8D4B\u503C\u64CD\u4F5C\u3002\u5F15\u64CE\u8FD0\u884C\u65F6\u4F1A\u9996\u5148\u8BE2\u95EE\u4F5C\u7528\u57DF\uFF0C\u5728\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\u4E00\u4E2A\u53EB\u4F5Ca\u7684\u53D8\u91CF\u3002\u5982\u679C\u662F\uFF0C\u5F15\u64CE\u5C31\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\uFF1B\u5982\u679C\u5426\uFF0C\u5F15\u64CE\u4F1A\u7EE7\u7EED<strong>\u67E5\u627E</strong>\u8BE5\u53D8\u91CF\u3002</p><p>\u5982\u679C\u5F15\u64CE\u6700\u7EC8\u627E\u5230\u4E86a\u53D8\u91CF\uFF0C\u5C31\u4F1A\u5C062\u8D4B\u503C\u7ED9\u5B83\u3002\u5426\u5219\u5F15\u64CE\u5C31\u4F1A\u4E3E\u624B\u793A\u610F\u5E76\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38\uFF01</p><p>\u603B\u7ED3\uFF1A<strong>\u53D8\u91CF\u7684\u8D4B\u503C\u64CD\u4F5C\u4F1A\u6267\u884C\u4E24\u4E2A\u52A8\u4F5C</strong>\uFF0C\u9996\u5148<strong>\u5728\u7F16\u8BD1\u65F6</strong>\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF08\u5982\u679C\u4E4B\u524D\u6CA1\u6709\u58F0\u660E\u8FC7\uFF09\uFF0C\u7136\u540E\u5728<strong>\u8FD0\u884C\u65F6</strong>\u5F15\u64CE\u4F1A\u5728\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E\u8BE5\u53D8\u91CF\uFF0C\u5982\u679C\u80FD\u591F\u627E\u5230\u5C31\u4F1A\u5BF9\u5B83\u8D4B\u503C\u3002</p><h3 id="\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> \u7F16\u8BD1\u9636\u6BB5</h3><ul><li><p><strong>\u5206\u8BCD / \u8BCD\u6CD5\u5206\u6790</strong>\uFF1A\u7F16\u8BD1\u5668\u4F1A\u5148\u5C06\u4E00\u8FDE\u4E32\u5B57\u7B26\u6253\u65AD\u6210\uFF08\u5BF9\u4E8E\u8BED\u8A00\u6765\u8BF4\uFF09\u6709\u610F\u4E49\u7684\u7247\u6BB5\uFF0C\u79F0\u4E3A token\uFF08\u8BB0\u53F7\uFF09\uFF0C\u4F8B\u5982 <code>var a = 2;</code>\u3002\u8FD9\u6BB5\u7A0B\u5E8F\u5F88\u53EF\u80FD\u4F1A\u88AB\u6253\u65AD\u6210\u5982\u4E0B token\uFF1A<code>var</code>\uFF0C<code>a</code>\uFF0C<code>=</code>\uFF0C<code>2</code>\uFF0C\u548C <code>;</code>\u3002</p></li><li><p><strong>\u89E3\u6790 / \u8BED\u6CD5\u5206\u6790</strong>\uFF1A\u7F16\u8BD1\u5668\u5C06\u4E00\u4E2A <code>token</code> \u7684\u6D41\uFF08\u6570\u7EC4\uFF09\u8F6C\u6362\u4E3A\u4E00\u4E2A\u201C\u62BD\u8C61\u8BED\u6CD5\u6811\u201D\uFF08<code>AST \u2014\u2014 Abstract Syntax Tree</code>\uFF09\uFF0C\u5B83\u8868\u793A\u4E86\u7A0B\u5E8F\u7684\u8BED\u6CD5\u7ED3\u6784\u3002</p></li><li><p><strong>\u4EE3\u7801\u751F\u6210</strong>\uFF1A\u7F16\u8BD1\u5668\u5C06\u4E0A\u4E00\u6B65\u4E2D\u751F\u6210\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\u8F6C\u6362\u4E3A\u673A\u5668\u6307\u4EE4\uFF0C\u7B49\u5F85\u5F15\u64CE\u6267\u884C\u3002</p></li></ul><h3 id="\u6267\u884C\u9636\u6BB5-1" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u9636\u6BB5-1" aria-hidden="true">#</a> \u6267\u884C\u9636\u6BB5</h3><p>\u7F16\u8BD1\u5668\u4E00\u987F\u64CD\u4F5C\u731B\u5982\u864E\uFF0C\u751F\u6210\u4E86\u4E00\u5806\u673A\u5668\u6307\u4EE4\uFF0CJS \u5F15\u64CE\u5F00\u5FC3\u5730\u62FF\u5230\u8FD9\u5806\u6307\u4EE4\uFF0C\u5F00\u59CB\u6267\u884C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u8981\u8BF4\u7684 <code>LHS</code> \u548C <code>RHS</code> \u5C31\u767B\u573A\u4E86\u3002</p><h4 id="lhs\u67E5\u8BE2-\u548C-rhs\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#lhs\u67E5\u8BE2-\u548C-rhs\u67E5\u8BE2" aria-hidden="true">#</a> LHS\u67E5\u8BE2 \u548C RHS\u67E5\u8BE2</h4><p>\u5728\u4E0A\u9762\u5BF9\u4EE3\u7801\u5904\u7406\u7684\u7B2C\u4E8C\u6B65\uFF08\u5373\u5728\u7F16\u8BD1\u65F6\uFF09\uFF0C\u6700\u540E\u63D0\u5230\uFF1A\u5F15\u64CE\u4F1A<strong>\u67E5\u627E</strong>\u53D8\u91CFa\u6765\u5224\u65AD\u5B83\u662F\u5426\u5DF2\u58F0\u660E\u8FC7\uFF0C\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u58F0\u660E\u4E00\u4E2A\u53D8\u91CFa\u3002\u90A3\u4E48\uFF0C\u8FD9\u91CC\u5C31\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0B\u5F15\u64CE\u7684\u67E5\u627E\u89C4\u5219\uFF1A</p><p>\u67E5\u627E\u5206\u4E3A LHS\u67E5\u8BE2 \u548C RHS\u67E5\u8BE2\u3002</p><p>\u201CL\u201D\u548C\u201CR\u201D\u7684\u542B\u4E49\uFF0C\u5B83\u4EEC\u5206\u522B\u4EE3\u8868\u5DE6\u4FA7\u548C\u53F3\u4FA7\u3002\u4EC0\u4E48\u4E1C\u897F\u7684\u5DE6\u4FA7\u548C\u53F3\u4FA7\uFF1F\u662F\u4E00\u4E2A\u8D4B\u503C\u64CD\u4F5C\u7684\u5DE6\u4FA7\u548C\u53F3\u4FA7\u3002</p><p>\u66F4\u51C6\u786E\u7684\u6765\u8BF4\uFF0CRHS\u5E76\u4E0D\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u201C\u8D4B\u503C\u64CD\u4F5C\u7684\u53F3\u4FA7\u201D\uFF0C\u66F4\u51C6\u786E\u5730\u8BF4\u662F\u201C\u975E\u5DE6\u4FA7\u201D\u3002</p><p>\u201C\u8D4B\u503C\u64CD\u4F5C\u7684\u5DE6\u4FA7\u6216\u53F3\u4FA7\u201D\u5E76\u4E0D\u4E00\u5B9A\u610F\u5473\u7740\u5C31\u662F\u201C=\u8D4B\u503C\u64CD\u4F5C\u7B26\u7684\u5DE6\u4FA7\u6216\u53F3\u4FA7\u201D\u3002\u8D4B\u503C\u64CD\u4F5C\u8FD8\u6709\u5176\u4ED6\u51E0\u79CD\u5F62\u5F0F\uFF0C\u56E0\u6B64\u5728\u6982\u5FF5\u4E0A\u6700\u597D\u5C06\u5176\u7406\u89E3\u4E3A\u201C\u8D4B\u503C\u64CD\u4F5C\u7684\u76EE\u6807\u662F\u8C01\uFF08LHS\uFF09\u201D\u4EE5\u53CA\u201C\u8C01\u662F\u8D4B\u503C\u64CD\u4F5C\u7684\u6E90\u5934\uFF08RHS\uFF09\u201D\u3002</p><blockquote><p>\u5982\u679C\u67E5\u627E\u7684\u76EE\u7684\u662F\u5BF9\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C\uFF0C\u90A3\u4E48\u5C31\u4F1A\u4F7F\u7528LHS\u67E5\u8BE2\uFF1B\u5982\u679C\u76EE\u7684\u662F\u83B7\u53D6\u53D8\u91CF\u7684\u503C\uFF0C\u5C31\u4F1A\u4F7F\u7528RHS\u67E5\u8BE2\u3002</p><p>\u50CFvar a = 2\u8FD9\u6837\u7684\u58F0\u660E\u4F1A\u88AB\u5206\u89E3\u6210\u4E24\u4E2A\u72EC\u7ACB\u7684\u6B65\u9AA4\uFF1A</p><p>1\uFF0E\u9996\u5148\uFF0Cvar a\u5728\u5176\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u65B0\u53D8\u91CF\u3002\u8FD9\u4F1A\u5728\u6700\u5F00\u59CB\u7684\u9636\u6BB5\uFF0C\u4E5F\u5C31\u662F\u4EE3\u7801\u6267\u884C\u524D\u8FDB\u884C\u3002</p><p>2\uFF0E\u63A5\u4E0B\u6765\uFF0Ca = 2\u4F1A\u67E5\u8BE2\uFF08LHS\u67E5\u8BE2\uFF09\u53D8\u91CFa\u5E76\u5BF9\u5176\u8FDB\u884C\u8D4B\u503C\u3002</p></blockquote><p>\u53EF\u4EE5\u5C06RHS\u7406\u89E3\u6210retrieve his source value\uFF08\u53D6\u5230\u5B83\u7684\u6E90\u503C\uFF09\uFF0C\u8FD9\u610F\u5473\u7740\u201C\u5F97\u5230\u67D0\u67D0\u7684\u503C\u201D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E3E\u4E00\u4E2A\u4F8B\u5B50</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4E0A\u9762\u7684\u7A0B\u5E8F\uFF0C\u5176\u4E2D\u65E2\u6709LHS\u4E5F\u6709RHS\u5F15\u7528\uFF1A</p><ul><li><p>\u6700\u540E\u4E00\u884Cfoo (..)\u51FD\u6570\u7684\u8C03\u7528\u9700\u8981\u5BF9foo\u8FDB\u884C<strong>RHS\u5F15\u7528</strong>\uFF0C\u610F\u5473\u7740\u201C\u53BB\u627E\u5230foo\u7684\u503C\uFF0C\u5E76\u628A\u5B83\u7ED9\u6211\u201D\u3002\u5E76\u4E14(..)\u610F\u5473\u7740foo\u7684\u503C\u9700\u8981\u88AB\u6267\u884C\u3002</p></li><li><p>\u4EE3\u7801\u4E2D\u9690\u5F0F\u7684a=2\u64CD\u4F5C\u53EF\u80FD\u5F88\u5BB9\u6613\u88AB\u4F60\u5FFD\u7565\u6389\u3002\u8FD9\u4E2A\u64CD\u4F5C\u53D1\u751F\u57282\u88AB\u5F53\u4F5C\u53C2\u6570\u4F20\u9012\u7ED9foo(..)\u51FD\u6570\u65F6\uFF0C2\u4F1A\u88AB\u5206\u914D\u7ED9\u53C2\u6570a\u3002\u4E3A\u4E86\u7ED9\u53C2\u6570a\uFF08\u9690\u5F0F\u5730\uFF09\u5206\u914D\u503C\uFF0C\u9700\u8981\u8FDB\u884C\u4E00\u6B21<strong>LHS\u67E5\u8BE2</strong>\u3002</p></li><li><p>\u8FD9\u91CC\u8FD8\u6709\u5BF9a\u8FDB\u884C\u7684RHS\u5F15\u7528\uFF0C\u5E76\u4E14\u5C06\u5F97\u5230\u7684\u503C\u4F20\u7ED9\u4E86console.log(..)\u3002console. log(..)\u672C\u8EAB\u4E5F\u9700\u8981\u4E00\u4E2A\u5F15\u7528\u624D\u80FD\u6267\u884C\uFF0C\u56E0\u6B64\u4F1A\u5BF9console\u5BF9\u8C61\u8FDB\u884C<strong>RHS\u67E5\u8BE2</strong>\uFF0C\u5E76\u4E14\u68C0\u67E5\u5F97\u5230\u7684\u503C\u4E2D\u662F\u5426\u6709\u4E00\u4E2A\u53EB\u4F5Clog\u7684\u65B9\u6CD5\u3002</p></li><li><p>\u6700\u540E\uFF0C\u5728\u6982\u5FF5\u4E0A\u53EF\u4EE5\u7406\u89E3\u4E3A\u5728LHS\u548CRHS\u4E4B\u95F4\u901A\u8FC7\u5BF9\u503C2\u8FDB\u884C\u4EA4\u4E92\u6765\u5C06\u5176\u4F20\u9012\u8FDBlog(..)\uFF08\u901A\u8FC7\u53D8\u91CFa\u7684<strong>RHS\u67E5\u8BE2</strong>\uFF09\u3002\u5047\u8BBE\u5728log(..)\u51FD\u6570\u7684\u539F\u751F\u5B9E\u73B0\u4E2D\u5B83\u53EF\u4EE5\u63A5\u53D7\u53C2\u6570\uFF0C\u5728\u5C062\u8D4B\u503C\u7ED9\u5176\u4E2D\u7B2C\u4E00\u4E2A\uFF08\u4E5F\u8BB8\u53EB\u4F5Carg1\uFF09\u53C2\u6570\u4E4B\u524D\uFF0C\u8FD9\u4E2A\u53C2\u6570\u9700\u8981\u8FDB\u884C<strong>LHS\u5F15\u7528\u67E5\u8BE2</strong>\u3002</p></li></ul><p>\u5B8C\u6574\u7684\u67E5\u8BE2\u8FC7\u7A0B\uFF1A</p><p>\u5F15\u64CE\uFF1A\u6211\u8BF4\u4F5C\u7528\u57DF\uFF0C\u6211\u9700\u8981\u4E3Afoo\u8FDB\u884CRHS\u5F15\u7528\u3002\u4F60\u89C1\u8FC7\u5B83\u5417\uFF1F</p><p>\u4F5C\u7528\u57DF\uFF1A\u522B\u8BF4\uFF0C\u6211\u8FD8\u771F\u89C1\u8FC7\uFF0C\u7F16\u8BD1\u5668\u90A3\u5C0F\u5B50\u521A\u521A\u58F0\u660E\u4E86\u5B83\u3002\u5B83\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7ED9\u4F60\u3002</p><p>\u5F15\u64CE\uFF1A\u54E5\u4EEC\u592A\u591F\u610F\u601D\u4E86\uFF01\u597D\u5427\uFF0C\u6211\u6765\u6267\u884C\u4E00\u4E0Bfoo\u3002</p><p>\u5F15\u64CE\uFF1A\u4F5C\u7528\u57DF\uFF0C\u8FD8\u6709\u4E2A\u4E8B\u513F\u3002\u6211\u9700\u8981\u4E3Aa\u8FDB\u884CLHS\u5F15\u7528\uFF0C\u8FD9\u4E2A\u4F60\u89C1\u8FC7\u5417\uFF1F</p><p>\u4F5C\u7528\u57DF\uFF1A\u8FD9\u4E2A\u4E5F\u89C1\u8FC7\uFF0C\u7F16\u8BD1\u5668\u6700\u8FD1\u628A\u5B83\u58F0\u540D\u4E3Afoo\u7684\u4E00\u4E2A\u5F62\u5F0F\u53C2\u6570\u4E86\uFF0C\u62FF\u53BB\u5427\u3002</p><p>\u5F15\u64CE\uFF1A\u5927\u6069\u4E0D\u8A00\u8C22\uFF0C\u4F60\u603B\u662F\u8FD9\u4E48\u68D2\u3002\u73B0\u5728\u6211\u8981\u628A2\u8D4B\u503C\u7ED9a\u3002</p><p>\u5F15\u64CE\uFF1A\u54E5\u4EEC\uFF0C\u4E0D\u597D\u610F\u601D\u53C8\u6765\u6253\u6270\u4F60\u3002\u6211\u8981\u4E3Aconsole\u8FDB\u884CRHS\u5F15\u7528\uFF0C\u4F60\u89C1\u8FC7\u5B83\u5417\uFF1F</p><p>\u4F5C\u7528\u57DF\uFF1A\u54B1\u4FE9\u8C01\u8DDF\u8C01\u554A\uFF0C\u518D\u8BF4\u6211\u5C31\u662F\u5E72\u8FD9\u4E2A\u3002\u8FD9\u4E2A\u6211\u4E5F\u6709\uFF0Cconsole\u662F\u4E2A\u5185\u7F6E\u5BF9\u8C61\u3002\u7ED9\u4F60\u3002</p><p>\u5F15\u64CE\uFF1A\u4E48\u4E48\u54D2\u3002\u6211\u5F97\u770B\u770B\u8FD9\u91CC\u9762\u662F\u4E0D\u662F\u6709log(..)\u3002\u592A\u597D\u4E86\uFF0C\u627E\u5230\u4E86\uFF0C\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p><p>\u5F15\u64CE\uFF1A\u54E5\u4EEC\uFF0C\u80FD\u5E2E\u6211\u518D\u627E\u4E00\u4E0B\u5BF9a\u7684RHS\u5F15\u7528\u5417\uFF1F\u867D\u7136\u6211\u8BB0\u5F97\u5B83\uFF0C\u4F46\u60F3\u518D\u786E\u8BA4\u4E00\u6B21\u3002</p><p>\u4F5C\u7528\u57DF\uFF1A\u653E\u5FC3\u5427\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u6CA1\u6709\u53D8\u52A8\u8FC7\uFF0C\u62FF\u8D70\uFF0C\u4E0D\u8C22\u3002</p><p>\u5F15\u64CE\uFF1A\u771F\u68D2\u3002\u6211\u6765\u628Aa\u7684\u503C\uFF0C\u4E5F\u5C31\u662F2\uFF0C\u4F20\u9012\u8FDBlog(..)\u3002</p><p>\u2026\u2026</p><p><strong>\u53C2\u8003\u6587\u7AE0</strong></p><p><a href="https://github.com/mqyqingfeng/Blog/issues/6" target="_blank" rel="noopener noreferrer">JavaScript\u6DF1\u5165\u4E4B\u4F5C\u7528\u57DF\u94FE</a></p><p>\u300A\u4F60\u4E0D\u77E5\u9053\u7684js\u4E0A\u300B</p>`,82),t=[o];function c(r,p){return n(),s("div",null,t)}var d=e(i,[["render",c],["__file","\u3010\u524D\u7AEF\u7CBE\u8FDB\u4E4B\u8DEF\u3011JS\u7BC7\uFF1A\u7B2C5\u671F JS\u5F15\u64CE\u7EBF\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u7684\u4E09\u4E2A\u9636\u6BB5.html.vue"]]);export{d as default};
