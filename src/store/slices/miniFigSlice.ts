import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "redux";
import { MiniFigTypes, MiniFigPartsTypes, IFormInput } from "../../types/types";

interface InitialState {
  miniFigs: MiniFigTypes[];
  curMiniFig: MiniFigTypes | { name: ""; set_img_url: "" };
  curMiniFigParts: MiniFigPartsTypes | {};
}

const initialState: InitialState = {
  miniFigs: [],
  curMiniFig: {
    name: "",
    set_img_url: "",
  },
  curMiniFigParts: {},
};

const slice = createSlice({
  name: "minifigs",
  initialState: initialState,
  reducers: {
    setMiniFigs: (state, action) => {
      state.miniFigs = action.payload;
    },
    setCurMiniFig: (state, action) => {
      localStorage.setItem("curMiniFig", JSON.stringify(action.payload));
      state.curMiniFig = action.payload;
    },
    setCurMiniFigParts: (state, action) => {
      state.curMiniFigParts = action.payload;
    },
  },
});

const proxyUrl = process.env.REACT_APP_PROXY_URL;
const apiKey = process.env.REACT_APP_REBRICHABLE_API_KEY;

const axiosInstance = axios.create({
  baseURL: proxyUrl,
  headers: { Authorization: `key ${apiKey}` },
});

export const { setMiniFigs, setCurMiniFig, setCurMiniFigParts } = slice.actions;

export const fetchMiniFigs = () => {
  return async (dispatch: Dispatch) => {
    try {
      const miniFigsUrl = process.env
        .REACT_APP_REBRICHABLE_MINIFIGS_API_URL as string;
      const res = await axiosInstance.get(
        proxyUrl + miniFigsUrl + `?page=10&page_size=3`,
        {
          data: { page_size: 3 },
        }
      );
      dispatch(setMiniFigs(res.data.results));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchMiniFigParts = (setNum: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const miniFigsPartsUrl = process.env
        .REACT_APP_REBRICHABLE_MINIFIGS_PARTS_API_URL as string;
      const { data } = await axiosInstance.get(
        proxyUrl + miniFigsPartsUrl + `${setNum}/parts`,
        {
          data: { set_num: setNum },
        }
      );
      dispatch(setCurMiniFigParts(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const submitShippingDetails = (details: IFormInput) => {
  return async () => {
    axios.post(proxyUrl + "signin", {
      ...details,
    });
  };
};

export default slice.reducer;
