import{_ as e,o as a,c as s,a as l}from"./app.74eca79f.js";const F=JSON.parse('{"title":"@starbeam/core","description":"","frontmatter":{},"headers":[{"level":2,"title":"Cell","slug":"cell"},{"level":3,"title":"Properties","slug":"properties"},{"level":3,"title":"Methods","slug":"methods"},{"level":2,"title":"FormulaFn","slug":"formulafn"}],"relativePath":"api/core.md"}'),n={name:"api/core.md"},o=l(`<h1 id="starbeam-core" tabindex="-1">@starbeam/core <a class="header-anchor" href="#starbeam-core" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#cell">Cell</a><ul><li><a href="#current-read-write">current (read-write)</a></li><li><a href="#set">set</a></li><li><a href="#update">update</a></li></ul></li><li><a href="#formulafn">FormulaFn</a></li></ul></nav><h2 id="cell" tabindex="-1"><code>Cell</code> <a class="header-anchor" href="#cell" aria-hidden="true">#</a></h2><p>The <code>Cell</code> API is the fundamental storage building block of Starbeam.</p><div class="api"><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Cell</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> description</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Cell</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><dl class="signature"><dt>value</dt><dd><code>T</code><span>The initial value of the cell.</span></dd><dt>description</dt><dd><code>string</code><span>(optional) A description of the cell.</span></dd><dt>returns</dt><dd><code>Cell&lt;T&gt;</code></dd></dl></div><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><h4 id="current-read-write" tabindex="-1"><code>current</code> (read-write) <a class="header-anchor" href="#current-read-write" aria-hidden="true">#</a></h4><div class="api"><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cell</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current: T</span></span>
<span class="line"></span></code></pre></div><dl><dt>current</dt><dd><code>T</code><span>the current value of the cell.</span></dd></dl></div><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><h4 id="set" tabindex="-1"><code>set</code> <a class="header-anchor" href="#set" aria-hidden="true">#</a></h4><div class="api"><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><dl class="signature"><dt>value</dt><dd><code>T</code><span>The new value of the cell.</span></dd><dt>returns</dt><dd><code>boolean</code></dd></dl></div><h4 id="update" tabindex="-1"><code>update</code> <a class="header-anchor" href="#update" aria-hidden="true">#</a></h4><p>Update the value of the cell based on the previous value.</p><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}PROTIP\u{1F4A1}</p><p>The <code>update</code> method updates the cell&#39;s value <strong>without</strong> &quot;consuming&quot; the previous value. This is useful in advanced patterns where you are trying to carefully control the consumption of values. It is generally not important in high-level usage.</p></div><div class="api"><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">update</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">updater</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><dl class="signature"><dt>updater</dt><dd><code>(prev: T) =&gt; T</code><span>A function that computes the new value of the cell from its previous value.</span></dd><dt>returns</dt><dd><code>boolean</code></dd></dl></div><h2 id="formulafn" tabindex="-1"><code>FormulaFn</code> <a class="header-anchor" href="#formulafn" aria-hidden="true">#</a></h2><p>The <code>FormulaFn</code> API allows you to cache the result of computing a value based on other reactive values.</p><p>If you call the formula function a second time, it will return the same value as long as the cells used in the last computation are still valid.</p><p>If any of the dependencies change and you call the formula function again, it will compute a new value. This effectively means that the behavior of the formula function is equivalent to the behavior of the function it wraps, <strong>except for object identity</strong>.</p><p>This also means that subscribers to a formula will be notified whenever any of its dependencies change.</p><div class="api"><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FormulaFn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> description</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormulaFn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><dl class="signature"><dt>callback</dt><dd><code>() =&gt; T</code><span>The function that reads from reactive values and computes a value.</span></dd><dt>description</dt><dd><code>string</code><span>A description of the formula.</span></dd><dt>returns</dt><dd><code>FormulaFn&lt;T&gt;</code></dd></dl></div>`,21),t=[o];function c(d,r,p,i,u,h){return a(),s("div",null,t)}var v=e(n,[["render",c]]);export{F as __pageData,v as default};
