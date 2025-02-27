// src/theme/BlogPostItem/Footer/index.js
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComments from '@site/src/components/GiscusComments';

export default function FooterWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <GiscusComments />
    </>
  );
}