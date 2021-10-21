import { NextPage } from 'next';

import { useGetBookQuery } from '../generated/graphql';

const Index: NextPage = () => {
  const { loading, error, data } = useGetBookQuery({
    variables: {
      id: '2656d255-26c6-4a18-ad11-7045e2024c4b',
    },
  });
  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>{error.toString()}</p>;
  }
  return <div>{JSON.stringify(data)}</div>;
};

export default Index;
