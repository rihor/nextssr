import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/kakyoin.jpg" width="400" />
    <h1>Hello NextJS</h1>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
