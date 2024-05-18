import React, { useEffect } from "react";
import KPICard from "../components/KPICard";
import Charts from "../components/Charts";
import useStockRequest from "../services/useStockRequest";

const Home = () => {
  const { getStock } = useStockRequest();
  useEffect(() => {
    getStock("sales");
    getStock("purchases");
  }, []);
  return (
    <div>
      <KPICard />
      <Charts />
    </div>
  );
};

export default Home;
