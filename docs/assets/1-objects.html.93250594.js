import{_ as n,r as l,o as c,c as i,a as e,d as r,e as t}from"./app.71a3349a.js";const s={},d=t('<h1 id="reactive-objects" tabindex="-1"><a class="header-anchor" href="#reactive-objects" aria-hidden="true">#</a> Reactive Objects</h1><p>Reactive objects behave just like regular objects, so this page describes how invalidation works.</p><p>Cells in a reactive object:</p><ul><li><code>object-&gt;keys</code>: an iteration over the keys of the object</li><li><code>object-&gt;entries[property]</code> (for each <em>accessed</em> property)</li></ul><p>An entry has:</p><ul><li><code>entry-&gt;presence</code>: whether the property is present in the object</li><li><code>entry-&gt;value</code>: the last update of the property&#39;s value</li></ul><h2 id="accesses" tabindex="-1"><a class="header-anchor" href="#accesses" aria-hidden="true">#</a> Accesses</h2><h3 id="checking-for-property-membership-has" tabindex="-1"><a class="header-anchor" href="#checking-for-property-membership-has" aria-hidden="true">#</a> Checking for Property Membership (<code>has</code>)</h3><p>The <code>has</code> operation occurs when property membership is <strong>checked</strong>:</p><ol><li>Using <code>Reflect.has</code></li><li>Using <code>in</code></li></ol>',10),a=e("thead",null,[e("tr",null,[e("th",null,"Reflect Operation")])],-1),p={href:"https://262.ecma-international.org/#sec-ordinary-object-internal-methods-and-internal-slots-hasproperty-p",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"[[HasProperty]]",-1),y=t('<div class="algorithm"><p><code>presence</code> is <code>true</code> if the property is present in the object, and <code>false</code> otherwise.</p><ol><li>If <code>object-&gt;entries[property] as entry</code> exists: <ol><li>consume <code>entry-&gt;presence</code></li></ol></li><li>Otherwise, <ol><li><code>object-&gt;entries[property] = Entry(presence: presence) as entry</code></li><li>consume <code>entry-&gt;presence</code></li></ol></li></ol></div><h3 id="accessing-a-property-get" tabindex="-1"><a class="header-anchor" href="#accessing-a-property-get" aria-hidden="true">#</a> Accessing a Property (<code>get</code>)</h3><p>The <code>get</code> operation occurs when a property is <strong>accessed</strong>:</p><ol><li>Using <code>Reflect.get</code></li><li>Using <code>.</code> or <code>[]</code> notation</li></ol>',4),u=e("thead",null,[e("tr",null,[e("th",null,"Spec Operation")])],-1),b={href:"https://262.ecma-international.org/#sec-ordinary-object-internal-methods-and-internal-slots-get-p-receiver",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"[[Get]]",-1),f=t('<div class="algorithm"><p><code>presence</code> is <code>true</code> if the property is present in the object, and <code>false</code> otherwise.</p><ol><li>If <code>object-&gt;entries[property] as entry</code> exists: <ol><li>consume <code>entry-&gt;presence</code></li><li>consume <code>entry-&gt;value</code></li></ol></li><li>Otherwise, <ol><li><code>object-&gt;entries[property] = Entry(value: undefined) as entry</code></li><li>consume <code>entry-&gt;presence</code></li><li>consume <code>entry-&gt;value</code></li></ol></li></ol></div><h3 id="accessing-the-keys-ownkeys" tabindex="-1"><a class="header-anchor" href="#accessing-the-keys-ownkeys" aria-hidden="true">#</a> Accessing the Keys (<code>ownKeys</code>)</h3><p>The <code>ownKeys</code> operation occurs when the keys of a property are <strong>accessed</strong>:</p><ol><li><code>Reflect.ownKeys</code></li><li><code>Object.keys</code></li><li><code>Object.getOwnPropertyNames</code></li><li><code>Object.getOwnPropertySymbols</code></li><li><code>Object.getOwnPropertyDescriptors</code></li></ol>',4),_=e("thead",null,[e("tr",null,[e("th",null,"Spec Operation")])],-1),j={href:"https://262.ecma-international.org/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"[[OwnPropertyKeys]]",-1),v=t('<div class="algorithm"><ol><li>consume <code>object-&gt;keys</code></li></ol></div><h2 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> Mutations</h2><h3 id="defining-a-property" tabindex="-1"><a class="header-anchor" href="#defining-a-property" aria-hidden="true">#</a> Defining a property</h3><p>A property is <strong>defined</strong> when it is added to an object <strong>when it is not already an own property of the object</strong>, by:</p><ol><li><code>Object.defineProperty</code> / <code>Reflect.defineProperty</code></li><li><code>Object.defineProperties</code></li><li><code>Reflect.set</code></li><li>dot or bracket notation</li></ol>',5),k=e("thead",null,[e("tr",null,[e("th",null,"Spec Operation"),e("th",null,"Conditions")])],-1),w={href:"https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"[[DefineOwnProperty]]",-1),x=e("td",null,"The property does not already exist",-1),P=t('<div class="algorithm"><ol><li>If <code>object-&gt;entries[property]</code> exists: <ol><li><code>entry.presence = true</code></li></ol></li><li>Otherwise, <ol><li>Create a new entry for the property (<code>presence = true</code>)</li></ol></li><li>update <code>object.keys</code></li></ol></div><h3 id="updating-a-property" tabindex="-1"><a class="header-anchor" href="#updating-a-property" aria-hidden="true">#</a> Updating a Property</h3><p>A property is <strong>updated</strong> when it already existed on the object, and its value is changed, by:</p><ol><li><code>Object.defineProperty</code> / <code>Reflect.defineProperty</code></li><li><code>Object.defineProperties</code></li><li><code>Reflect.set</code></li><li>dot or bracket notation</li></ol>',4),R=e("thead",null,[e("tr",null,[e("th",null,"Spec Operation"),e("th",null,"Conditions")])],-1),T={href:"https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"[[DefineOwnProperty]]",-1),A=e("td",null,"The property already exists",-1),I=t('<div class="algorithm"><ol><li>If an <code>entry</code> for the property already exists: <ol><li>update <code>entry.value</code></li></ol></li><li>update <code>object.keys</code></li></ol></div><h3 id="deleting-a-property" tabindex="-1"><a class="header-anchor" href="#deleting-a-property" aria-hidden="true">#</a> Deleting a property</h3><p>A property is <strong>deleted</strong> when it is removed from an object, by:</p><ol><li><code>Reflect.deleteProperty</code></li><li>The <code>delete</code> operator</li></ol>',4),C=e("thead",null,[e("tr",null,[e("th",null,"Spec Operation"),e("th",null,"Conditions")])],-1),E={href:"https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-delete-p",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"[[Delete]]",-1),K=e("td",null,"The property exists",-1),U=t('<div class="algorithm"><ol><li>If an <code>entry</code> for the property already exists: <ol><li><code>entry-&gt;presence = false</code></li></ol></li><li>update <code>object.keys</code></li></ol></div><h3 id="sealing-an-object" tabindex="-1"><a class="header-anchor" href="#sealing-an-object" aria-hidden="true">#</a> Sealing an Object</h3><p>An object is <strong>sealed</strong> when:</p><ul><li><code>Object.seal</code> is called on the object</li><li><code>Object.freeze</code> is called on the object</li><li><code>{Object,Reflect}.preventExtensions</code> is called on the object and all remaining properties are non-configurable</li></ul><p>Sealing an object updates the object&#39;s <code>keys</code> iteration:</p><div class="algorithm"><ol><li>freeze <code>object-&gt;keys</code></li></ol></div><div class="custom-container note"><p class="custom-container-title">Note</p><p>The <code>keys</code> iteration represents the list of enumerable, own keys of the object. This is what the <code>{ ...spread }</code> operator uses to spread the object&#39;s properties, it&#39;s what <code>Object.keys</code> uses to produce the list of keys, and its what <code>Reflect.ownKeys</code> uses.</p><p>If an object is <strong>sealed</strong>, the list of keys cannot be changed, and (critically), the enumerability of the remaining keys cannot be changed.</p><p>However, when <code>preventExtensions</code> is called, the keys remain configurable, which means that they can be adjusted to be non-enumerable.</p></div><h3 id="updating-an-object-s-prototype" tabindex="-1"><a class="header-anchor" href="#updating-an-object-s-prototype" aria-hidden="true">#</a> Updating an Object&#39;s Prototype</h3><p>This operation is currently not supported on reactive objects.</p>',9);function N(B,V){const o=l("ExternalLinkIcon");return c(),i("div",null,[d,e("table",null,[a,e("tbody",null,[e("tr",null,[e("td",null,[e("a",p,[h,r(o)])])])])]),y,e("table",null,[u,e("tbody",null,[e("tr",null,[e("td",null,[e("a",b,[g,r(o)])])])])]),f,e("table",null,[_,e("tbody",null,[e("tr",null,[e("td",null,[e("a",j,[m,r(o)])])])])]),v,e("table",null,[k,e("tbody",null,[e("tr",null,[e("td",null,[e("a",w,[O,r(o)])]),x])])]),P,e("table",null,[R,e("tbody",null,[e("tr",null,[e("td",null,[e("a",T,[S,r(o)])]),A])])]),I,e("table",null,[C,e("tbody",null,[e("tr",null,[e("td",null,[e("a",E,[D,r(o)])]),K])])]),U])}var H=n(s,[["render",N],["__file","1-objects.html.vue"]]);export{H as default};
