//! custom hook alanı
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchStart, firmSuccess, fetchFail } from "../features/firmSlice";
const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();
  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken("/firms");
      // console.log(data);
      dispatch(firmSuccess(data));
    } catch (error) {
      // console.log(error);
      dispatch(fetchFail());
    }
  };

  const firmDelete = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.delete(`/firms/${id}`);
      dispatch(firmSuccess(data));
      getFirms();
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getFirms, firmDelete };
};
export default useStockRequest;
