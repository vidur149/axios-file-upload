import { Axios } from "../utils/axios";

export const addProductsAPI = async ({ upl, token }) => {
  const formData = new FormData();
  if (upl) {
    // @ts-ignore
    formData.append("file", upl.data);
  }

  try {
    const res = await Axios.post("/productupload", formData, {
      headers: {
        "access-token": token
      }
    });
    return res.data;
  } catch (e) {
    throw e;
  }
};
