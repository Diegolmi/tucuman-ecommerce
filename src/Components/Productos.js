import React, { useState, useEffect } from 'react'
import { Card, Skeleton } from "antd";
import { ShoppingCartOutlined, InfoCircleOutlined } from "@ant-design/icons";
import {
  agregarProducto,
  getProductos,
  getProductosLoading,
} from "../Redux/productos/productosSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../Redux/productos/actions";
import ModalProducto from './ModalProducto';

const { Meta } = Card;


const Productos = () => {
  const dispatch = useDispatch();
  const productos = useSelector(getProductos);
  const loading = useSelector(getProductosLoading);
  const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

  useEffect(() => {
    if (!productos.length) {
      dispatch(fetchProductos());
    }
  }, [productos]);
  if (loading) return <Skeleton avatar active paragraph={{ rows: 4 }} />;

  const handleAgregarProducto = (producto) => () => {
    dispatch(agregarProducto(producto));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(250px,1fr))",
        gap: 20,
        marginTop: "150px",
      }}
    >
      {productos.map((producto) => (
        <>
        <Card
          key={producto.id}
          hoverable
          cover={<img alt="example" src={producto.image} height="200" />}
          actions={[
             <ShoppingCartOutlined onClick={handleAgregarProducto(producto)} />,
             <InfoCircleOutlined onClick={showModal} />,
          ]}
        >
          <Meta title={producto.name} description={producto.description.length > 30 ? producto.description.substring(0, 30 - 3) + "..." : producto.description } />
          
        </Card>
        
        </>
      ))}
      <ModalProducto
            handleOk={handleOk}
            handleCancel={handleCancel}
            productos={productos}
            isModalVisible={isModalVisible}
          />
    </div>
  );
};

export default Productos;
