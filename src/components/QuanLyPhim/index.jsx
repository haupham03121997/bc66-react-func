import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBannerApi } from '../../redux/slices/banner';
import { useNavigate } from 'react-router-dom';

const QuanLyPhim = () => {
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
      <h3 className="mb-5">QuanLyPhim</h3>
      {listBanner.map((item) => (
        <div key={item.maBanner} className="mb-5" onClick={() => handleRedirectDetails(item.maPhim)}>
          <img src={item.hinhAnh} className="w-full h-440 object-cover cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default QuanLyPhim;
