import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Col, Layout, Row, Space, Tabs, Typography } from 'antd';
import { format } from 'date-fns';

import { fetchMovieDetailsApi } from '../../redux/slices/movieDetails';

const { Content } = Layout;

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    if (id) {
      // call api
      dispatch(fetchMovieDetailsApi(id));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oops!</p>;

  if (!data) return '';
  return (
    <Content className="mx-auto max-w-lg">
      <Row gutter={[48]} className="mt-10">
        <Col span={8}>
          <img src={data.hinhAnh} className="h-60 w-full" alt={data.tenPhim} />
        </Col>
        <Col span={16}>
          <Typography className="text-3xl font-semibold text-green-800">{data.tenPhim}</Typography>
          <Typography>{data.moTa}</Typography>
          <Typography>{data.ngayKhoiChieu && format(data.ngayKhoiChieu, 'PPpp')}</Typography>
        </Col>
      </Row>

      <div className="mt-10">
        <Tabs
          tabPosition={'left'}
          items={data?.heThongRapChieu?.map((item) => {
            return {
              label: <img src={item.logo} className="w-8 h-8 rounded-full" />,
              key: item.maHeThongRap,
              children: (
                <div>
                  {item.cumRapChieu.map((cumRap) => {
                    return (
                      <Space size={8} key={cumRap.maCumRap} direction="vertical">
                        <Typography className="text-2xl font-medium">{cumRap.tenCumRap}</Typography>
                        <Typography>{cumRap.diaChi}</Typography>
                        <div>
                          {cumRap.lichChieuPhim.map((lichChieu) => {
                            return (
                              <Button key={lichChieu.maLichChieu} type="default">
                                {format(lichChieu.ngayChieuGioChieu, 'PPpp')}
                              </Button>
                            );
                          })}
                        </div>
                      </Space>
                    );
                  })}
                </div>
              ),
            };
          })}
        />
      </div>
    </Content>
  );
};

export default MovieDetailsPage;
