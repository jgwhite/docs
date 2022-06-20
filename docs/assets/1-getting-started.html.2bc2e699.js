import{_ as u,r as t,o as k,c as d,d as e,w as a,a as n,b as s}from"./app.590b66e2.js";const b={},m=n("h1",{id:"getting-started-with-react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started-with-react","aria-hidden":"true"},"#"),s(" Getting Started with React")],-1),v=n("p",null,"Start by installing the Starbeam renderer into your app.",-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(` @starbeam/react @starbeam/core @starbeam/js @starbeam/peer
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @starbeam/react @starbeam/core @starbeam/js @starbeam/peer
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @starbeam/react @starbeam/core @starbeam/js @starbeam/peer
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("h2",{id:"using-starbeam",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#using-starbeam","aria-hidden":"true"},"#"),s(" Using Starbeam")],-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Cell "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@starbeam/core"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useStarbeam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@starbeam/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRoot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react-dom/client"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Counter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"useStarbeam"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" counter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Cell"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s(`button
          onClick`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" counter"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" c "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"++"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token comment"},"// highlight:next"),s(`
        `),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("counter"),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("p"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"createRoot"),n("span",{class:"token punctuation"},"("),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#root"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token operator"},"<"),s("Counter "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Cell "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@starbeam/core"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useStarbeam "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@starbeam/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRoot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react-dom/client"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Counter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"useStarbeam"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" counter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Cell"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s(`button
          onClick`),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" counter"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" c "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"++"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token comment"},"// highlight:next"),s(`
        `),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("counter"),n("span",{class:"token punctuation"},"."),s("current"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("p"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token function"},"createRoot"),n("span",{class:"token punctuation"},"("),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#root"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token operator"},"<"),s("Counter "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x={class:"custom-container details"},C=n("summary",null,"Play with it on StackBlitz",-1);function S(B,R){const p=t("CodeTabs"),r=t("Code"),i=t("StackBlitz");return k(),d("div",null,[m,v,e(p,{data:[{title:"pnpm"},{title:"npm"},{title:"yarn"}],"tab-id":"npm"},{tab0:a(({title:o,value:c,isActive:l})=>[h]),tab1:a(({title:o,value:c,isActive:l})=>[g]),tab2:a(({title:o,value:c,isActive:l})=>[_]),_:1}),f,e(r,null,{ts:a(()=>[y]),js:a(()=>[w]),_:1}),n("details",x,[C,e(i,{id:"starbeam-react-example-counter",file:"src/App.tsx"})])])}var A=u(b,[["render",S],["__file","1-getting-started.html.vue"]]);export{A as default};