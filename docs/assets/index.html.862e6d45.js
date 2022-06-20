import{_ as t,r as o,o as p,c,a as n,d as e,e as r,b as s}from"./app.590b66e2.js";const i={},l=r(`<h1 id="react-dom" tabindex="-1"><a class="header-anchor" href="#react-dom" aria-hidden="true">#</a> <code>react-dom</code></h1><p>This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as <code>react</code> to npm.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react react-dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="in-the-browser" tabindex="-1"><a class="header-anchor" href="#in-the-browser" aria-hidden="true">#</a> In the browser</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="on-the-server" tabindex="-1"><a class="header-anchor" href="#on-the-server" aria-hidden="true">#</a> On the server</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToPipeableStream <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... in your server handler ...</span>
  <span class="token keyword">const</span> stream <span class="token operator">=</span> <span class="token function">renderToPipeableStream</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">onShellReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      stream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="react-dom-1" tabindex="-1"><a class="header-anchor" href="#react-dom-1" aria-hidden="true">#</a> <code>react-dom</code></h3>`,11),d=s("See "),u={href:"https://reactjs.org/docs/react-dom.html",target:"_blank",rel:"noopener noreferrer"},k=s("https://reactjs.org/docs/react-dom.html"),h=n("h3",{id:"react-dom-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-dom-client","aria-hidden":"true"},"#"),s(),n("code",null,"react-dom/client")],-1),m=s("See "),v={href:"https://reactjs.org/docs/react-dom-client.html",target:"_blank",rel:"noopener noreferrer"},b=s("https://reactjs.org/docs/react-dom-client.html"),_=n("h3",{id:"react-dom-server",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-dom-server","aria-hidden":"true"},"#"),s(),n("code",null,"react-dom/server")],-1),f=s("See "),g={href:"https://reactjs.org/docs/react-dom-server.html",target:"_blank",rel:"noopener noreferrer"},x=s("https://reactjs.org/docs/react-dom-server.html");function w(y,j){const a=o("ExternalLinkIcon");return p(),c("div",null,[l,n("p",null,[d,n("a",u,[k,e(a)])]),h,n("p",null,[m,n("a",v,[b,e(a)])]),_,n("p",null,[f,n("a",g,[x,e(a)])])])}var S=t(i,[["render",w],["__file","index.html.vue"]]);export{S as default};
