import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PVS84CSG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Layout {...props} />
    </>
  );
}