"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[2081],{1701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var s=n(2615),r=n(4848),i=n(8453);const o={title:"\u30b5\u30a4\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3000\u305d\u306e4"},c=void 0,u={authorsImageUrls:[]},a=[{value:"Github\u306e\u8a2d\u5b9a",id:"github\u306e\u8a2d\u5b9a",level:2},{value:"Docusaurus\u5074\u306e\u8a2d\u5b9a",id:"docusaurus\u5074\u306e\u8a2d\u5b9a",level:2}];function p(e){const t={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"giscus\u306b\u3088\u308b\u30b3\u30e1\u30f3\u30c8\u6a5f\u80fd\u306e\u5c0e\u5165"}),"\n",(0,r.jsx)(t.h2,{id:"github\u306e\u8a2d\u5b9a",children:"Github\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/apps/giscus",children:"giscus"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002",(0,r.jsx)(t.br,{}),"\n","\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u8a2d\u5b9a\u304b\u3089Discussions\u3092\u6709\u52b9\u5316\u3059\u308b\u3002",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://giscus.app/ja",children:"\u3053\u3053"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u3092\u5165\u529b\u3059\u308b\u3002",(0,r.jsx)(t.br,{}),"\n","\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u30ab\u30c6\u30b4\u30ea\u306eID\u3092\u63a7\u3048\u3066\u304a\u304f\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"docusaurus\u5074\u306e\u8a2d\u5b9a",children:"Docusaurus\u5074\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsx)(t.p,{children:"giscus\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install @giscus/react\n"})}),"\n",(0,r.jsx)(t.p,{children:"docusaurus.config.js\u306b\u4ee5\u4e0b\u3092\u8ffd\u8a18\uff08\u9069\u5b9c\u5909\u66f4\uff09"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"themeConfig: {\n    giscus: {\n    repo: '\u30e6\u30fc\u30b6\u30fc\u540d/\u30ea\u30dd\u30b8\u30c8\u30ea\u540d',\n    rpoId: '\u30ea\u30dd\u30b8\u30c8\u30eaID',\n    category: 'Announcements',\n    categoryId: '\u30ab\u30c6\u30b4\u30eaID',\n    mapping: 'pathname',\n    reactionEnabled: '1',\n    emitMetadata: '0',\n    },\n},\n"})}),"\n",(0,r.jsx)(t.p,{children:"src/components/GiscusComments/index.js\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u308a\u3001\u4ee5\u4e0b\u3092\u8a18\u8ff0\u3059\u308b\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"// src/components/GiscusComments/index.js\nimport React, { useEffect, useRef } from 'react';\nimport { useColorMode } from '@docusaurus/theme-common';\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nexport default function GiscusComments() {\n  const { colorMode } = useColorMode();\n  const giscusTheme = colorMode === 'dark' ? 'dark' : 'light';\n  const giscusContainerRef = useRef(null);\n  const siteConfig = useDocusaurusContext().siteConfig;\n  const giscusConfig = siteConfig.themeConfig?.giscus || {};\n\n  useEffect(() => {\n    if (!giscusContainerRef.current) return;\n  \n    // \u65e2\u5b58\u306e Giscus \u30b3\u30e1\u30f3\u30c8\u3092\u524a\u9664\n    while (giscusContainerRef.current.firstChild) {\n      giscusContainerRef.current.removeChild(giscusContainerRef.current.firstChild);\n    }\n  \n    // Giscus \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u751f\u6210\n    const script = document.createElement('script');\n    script.src = 'https://giscus.app/client.js';\n    script.setAttribute('data-repo', giscusConfig.repo);\n    script.setAttribute('data-repo-id', giscusConfig.repoId);\n    script.setAttribute('data-category', giscusConfig.category);\n    script.setAttribute('data-category-id', giscusConfig.categoryId);\n    script.setAttribute('data-mapping', giscusConfig.mapping || 'pathname');\n    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled || '1');\n    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata || '0');\n    script.setAttribute('data-input-position', 'top');\n    script.setAttribute('data-theme', giscusTheme);\n    script.setAttribute('data-lang', 'ja');\n    script.setAttribute('crossorigin', 'anonymous');\n    script.async = true;\n  \n    giscusContainerRef.current.appendChild(script);\n  }, [giscusTheme]); // colorMode \u5909\u66f4\u6642\u306b\u30ea\u30ed\u30fc\u30c9\n  \n\n  return (\n    <div className=\"giscus-comments-container\">\n      <div ref={giscusContainerRef} />\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap\n"})}),"\n",(0,r.jsx)(t.p,{children:"src/theme/BlogPostItem/index.js\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u308b\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7de8\u96c6\u3059\u308b\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"// src/theme/BlogPostItem/Footer/index.js\nimport React from 'react';\nimport BlogPostItem from '@theme-original/BlogPostItem';\nimport GiscusComments from '@site/src/components/GiscusComments';\n\nexport default function FooterWrapper(props) {\n  return (\n    <>\n      <BlogPostItem {...props} />\n      <GiscusComments />\n    </>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2615:e=>{e.exports=JSON.parse('{"permalink":"/blog/2025/03/27/1","source":"@site/blog/2025-03-27-1.md","title":"\u30b5\u30a4\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3000\u305d\u306e4","description":"giscus\u306b\u3088\u308b\u30b3\u30e1\u30f3\u30c8\u6a5f\u80fd\u306e\u5c0e\u5165","date":"2025-03-27T00:00:00.000Z","tags":[],"readingTime":1.67,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\u30b5\u30a4\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3000\u305d\u306e4"},"unlisted":false,"nextItem":{"title":"\u30b5\u30a4\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3000\u305d\u306e3","permalink":"/blog/2025/03/23/1"}}')},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);