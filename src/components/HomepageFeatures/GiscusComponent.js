// src/components/GiscusComponent.js
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

function GiscusComponent() {
  const { colorMode } = useColorMode();
  return (
    <div>
      <script
        src="https://giscus.app/client.js"
        data-repo="sanasuno/sanasuno.github.io"
        data-repo-id="R_kgDON7MpzA"
        data-category="Announcements"
        data-category-id="DIC_kwDON7MpzM4CnaLx"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="ja"
        crossorigin="anonymous"
        async
      ></script>
    </div>
  );
}

export default GiscusComponent;
