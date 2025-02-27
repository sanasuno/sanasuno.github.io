import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '../../components/HomepageFeatures/GiscusComponent';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <GiscusComponent />
    </>
  );
}
