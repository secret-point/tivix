import styled from "styled-components";
import SummaryCard from "../components/SummaryCard";
import { RootState, useAppDispatch } from "../store";
import { useEffect } from "react";
import { fetchMiniFigParts } from "../store/slices/miniFigSlice";
import { useSelector } from "react-redux";
import { MiniFigPartsTypes } from "../types/types";
import ShippingInfo from "../components/ShippingInfo";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

const ShippingDetails = () => {
  const dispatch = useAppDispatch();

  const curMiniFig = JSON.parse(localStorage.getItem("curMiniFig") as string);
  const curMiniFigParts = useSelector(
    (state: RootState) =>
      state.miniFigReducer.curMiniFigParts as MiniFigPartsTypes
  );

  const { results, count } = curMiniFigParts;

  useEffect(() => {
    dispatch(fetchMiniFigParts(curMiniFig.set_num));
  }, []);

  return (
    <Container>
      <ShippingInfo />
      <SummaryCard miniFig={curMiniFig} miniFigParts={results} count={count} />
    </Container>
  );
};

export default ShippingDetails;
