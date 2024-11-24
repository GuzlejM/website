import { useRouter } from 'next/router';

const ServicePage = ({ serviceData }) => {
  const router = useRouter();
  const { service } = router.query; // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <div>
      <h1>{serviceData.title}</h1>
      <p>{serviceData.description}</p>
    </div>
  );
};

export default ServicePage;

export async function getStaticPaths() {
  const services = await getServices();
  const paths = services.map((service) => ({
    params: { service: service.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const serviceData = await getServiceData(params.service);
  return { props: { serviceData } };
}