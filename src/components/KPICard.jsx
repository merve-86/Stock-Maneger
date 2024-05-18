import Paper from "@mui/material/Paper";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepPurple, pink, amber } from "@mui/material/colors";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";

const KPICard = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  //console.log(sales);
  
  const totalSales = sales?.reduce((acc, sale) => acc + sale.amount, 0);
  const totalPurchases = purchases?.reduce((acc, purchase) => acc + purchase.amount, 0);
  console.log(totalSales);
  
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <MonetizationOnIcon sx={{ fontSize: "1.8rem" }} />,
      amount: "₺" + totalSales.toLocaleString("tr-TR"),
      color: deepPurple[700],
      bgColor: deepPurple[100],
    },

    {
      id: 2,
      title: "Profit",
      icon: <ShoppingCartIcon sx={{ fontSize: "1.7rem" }} />,
      amount: "₺" + (totalSales - totalPurchases).toLocaleString("tr-TR"),
      color: pink[700],
      bgColor: pink[100],
    },

    {
      id: 3,
      title: "Purchases",
      icon: <LocalMallIcon sx={{ fontSize: "1.7rem" }} />,
      amount: "₺" + totalPurchases.toLocaleString("tr-TR"),
      color: amber[700],
      bgColor: amber[100],
    },
  ];
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((data) => (
        <Paper
          key={data.id}
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: 275,
            p: 2,
            pl: 3,
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: data.bgColor,
              color: data.color,
              width: 60,
              height: 60,
            }}
          >
            {data.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{data.title}</Typography>
            <Typography variant="h5">{data.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICard;
