import fetcher from "./fetcher"


export const loginApi = async (payload)=>{
  // payload = {taiKhoan : "" , matKhau : ""}
  try {
    const response = await fetcher.post('/QuanLyNguoiDung/DangNhap', payload);
    return response.data.content
  } catch (error) {
    // throw Error(error);
    throw Error(error.response.data.content)
  }
}