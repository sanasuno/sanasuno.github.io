// src/components/GiscusComments/index.js
import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GiscusComments() {
  const { colorMode } = useColorMode();
  const giscusTheme = colorMode === 'dark' ? 'dark' : 'light';
  const giscusContainerRef = useRef(null);
  const siteConfig = useDocusaurusContext().siteConfig;
  const giscusConfig = siteConfig.customFields?.giscus || {};

  useEffect(() => {
    if (!giscusContainerRef.current) return;

    // giscusのスクリプトを毎回クリア
    const existingScript = document.getElementById('giscus-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Giscusスクリプトを生成
    const script = document.createElement('script');
    script.id = 'giscus-script';
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', giscusConfig.repo);
    script.setAttribute('data-repo-id', giscusConfig.repoId);
    script.setAttribute('data-category', giscusConfig.category);
    script.setAttribute('data-category-id', giscusConfig.categoryId);
    script.setAttribute('data-mapping', giscusConfig.mapping || 'pathname');
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled || '1');
    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata || '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', giscusTheme);
    script.setAttribute('data-lang', 'ja');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // スクリプトを追加
    giscusContainerRef.current.appendChild(script);

    // クリーンアップ関数
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [giscusTheme]);

  return (
    <div className="giscus-comments-container">
      <div ref={giscusContainerRef} />
    </div>
  );
}