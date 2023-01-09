import { Table, Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction } from "../../redux/action/favorites.actions";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const favorites = useSelector((state) => state.favoritesReducer);

  const getData = async () => {
    const response = await axios("https://northwind.vercel.app/api/customers");
    setCustomers(await response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();
  const handleAddToFavorites = (customer) => {
    if (!favorites.includes(customer)) {
      dispatch(addToFavoritesAction(customer));
    } else {
      window.alert("Already Favorited");
    }
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "CompanyName",
      dataIndex: "companyName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Adress",
      dataIndex: "address",
      render: (el) => `${el.city}, ${el.country}`,
    },
    {
      title: "Add To Favorites",
      render: (obj) => (
        <Button type="primary" onClick={() => handleAddToFavorites(obj)}>
          {!favorites.includes(obj) ? "Add to Favorites" : "Favorited Already"}
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={customers} rowKey={"id"} />;
};

export default CustomerList;
