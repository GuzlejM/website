import Head from 'next/head';

const SEO = ({ title, description, keywords }) => (
  <Head>
    <title>{title} | Unorthodox Engineers</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
);

export default SEO;