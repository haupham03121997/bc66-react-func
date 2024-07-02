import { Button, Col, Form, Input, Row, Typography, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../apis/user.api';
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  username: yup.string().trim().required('Vui lòng nhập username!').min(3, 'Username phải nhiều hơn 2 ký tự!'),
  password: yup
    .string()
    .trim()
    .required('Vui lòng nhập mật khẩu!')
    // .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm  1 chữ cái và số!'),
});

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
    criteriaMode: 'all',
  });

  const navigate = useNavigate();
  
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const [messageApi, contextHolder] = message.useMessage();

  const { mutate : handleLogin, isPending} = useMutation({
    mutationFn: (payload) => loginApi(payload),
    onSuccess: (response) => {
      localStorage.setItem('currentUser', JSON.stringify(response));
      setCurrentUser(response);
      navigate('/')
    },
    onError: (error) => {
      messageApi.open({
        content: error.message,
        type: 'error',
        duration: 2,
      })
    }
  });

  const onSubmit = (formValues) => {
    const { username, password } = formValues;
    const payload = {
      taiKhoan: username,
      matKhau: password,
    }
    handleLogin(payload);
  };

  return (
    <>
      {contextHolder}
      <div className="w-[400px] ">
        <div className="my-4 text-center">
          <Typography className="font-bold text-3xl">Đăng nhập</Typography>
          <Typography className="mt-2">Hi, Chào mừng bạn quay lại 👋</Typography>
        </div>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Row gutter={[48, 16]}>
            <Col span={24}>
              <label className="text-xs text-[#6A7280]">*Tài khoản</label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => {
                  // field : {name : "username" , onChange: ()=> , onBlur : ()=> {},...}
                  return (
                    <Input
                      {...field}
                      type="text"
                      size="large"
                      className="mt-1"
                      placeholder="Vui lòng nhập tài khoản..."
                      status={errors.username ? 'error' : ''}
                    />
                  );
                }}
              />
              {errors?.username && (
                <>
                  <p className="text-xs text-red-600">{errors.username.types.required}</p>
                  <p className="text-xs text-red-600">{errors.username.types.min}</p>
                </>
              )}
            </Col>
            <Col span={24}>
              <label className="text-xs text-[#6A7280]">*Mật khẩu</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="password"
                      size="large"
                      className="mt-1"
                      placeholder="Vui lòng nhập mật khẩu..."
                      status={errors.password ? 'error' : ''}
                    />
                  );
                }}
              />
              {errors?.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
            </Col>

            <Col span={24}>
              <Button loading={isPending} disabled={isPending} type="primary" htmlType="submit" size="large" block>
                Đăng nhập
              </Button>
            </Col>
          </Row>
        </Form>

        <Typography className="mt-8 text-center">
          Chưa có tài khoản? <span className="text-blue-700 font-medium cursor-pointer">Tạo tài khoản</span>
        </Typography>
      </div>
    </>
  );
};

export default LoginPage;
