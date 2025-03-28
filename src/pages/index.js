import React from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';

export default function Home() {
  return (
    <Layout
      title="トップページ">
      
      {/* ヒーローセクション */}
      <header className='mainHeader' style={{
        padding: '2rem 2rem',
        textAlign: 'center',
      }}>
        <h1>さなすの考察録へようこそ</h1>
      </header>

      {/* メインコンテンツ */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h2><a href='/conlang'>人工言語</a></h2>
        <h2><a href='/blog'>ブログ</a></h2>
      </main>

    </Layout>
  );
}