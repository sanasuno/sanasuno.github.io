// src/theme/BlogPostItem/index.js
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComments from '@site/src/components/GiscusComments';

// Docusaurus v2.0.0-beta.21以降の場合
import {useBlogPost} from '@docusaurus/theme-common/internal';

// 上記の方法でエラーが出る場合は、以下のいずれかを試してください
// import {useBlogPost} from '@docusaurus/theme-common'; // 古いバージョン用
// または
// import BlogPost from '@theme/BlogPost'; // コンテキストを直接使わない方法

export default function BlogPostItemWrapper(props) {
  // useBlogPostがエラーになる場合、以下の条件判定を変更する
  const {isBlogPostPage} = useBlogPost?.() || props.metadata?.isBlogPostPage || false;
  
  // 別の方法: props.isBlogPostや他のプロパティを使用
  // const isBlogPostPage = props.isBlogPostPage || false;
  
  return (
    <>
      <BlogPostItem {...props} />
      {/* コメント欄はページの末尾にのみ表示 */}
      {isBlogPostPage && <GiscusComments />}
    </>
  );
}