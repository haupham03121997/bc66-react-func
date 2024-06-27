import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd'

import { fetchBannerApi } from "../../redux/slices/banner";

const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, listBanner, error } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(fetchBannerApi());
  }, []);

  const handleRedirectDetails = (maPhim) => {
    navigate(`/movie/${maPhim}`);
  };

  if (loading) return <p>....Loading</p>;

  if (error) return <p>Oops!!!</p>;

  return (
    <div>
      <Carousel arrows infinite={false}>
        {listBanner.map((item) => (
          <div key={item.maBanner} className="mb-5" onClick={() => handleRedirectDetails(item.maPhim)}>
            <img src={item.hinhAnh} className="w-full h-screen object-cover cursor-pointer" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
