// src/theme/BlogPostPage/Footer/index.js
import React from 'react';
import Footer from '@theme-original/BlogPostPage/Footer';
import GiscusComments from '@site/src/components/GiscusComments';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <GiscusComments />
    </>
  );
}