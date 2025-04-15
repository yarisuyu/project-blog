import React from 'react';

import { getBlogPostList } from '../helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {

  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {blogPosts.map(blogPost => (
        <BlogSummaryCard
            key={crypto.randomUUID()}
            slug={blogPost.slug}
            title={blogPost.title}
            abstract={blogPost.abstract}
            publishedOn={blogPost.publishedOn}
          />
      )
      )}

      <BlogSummaryCard
        key={crypto.randomUUID()}
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />

    </div>
  );
}

export default Home;
