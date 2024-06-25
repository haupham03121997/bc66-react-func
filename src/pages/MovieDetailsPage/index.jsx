import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const params = useParams();

  console.log('params', params);
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
