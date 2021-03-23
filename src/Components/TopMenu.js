import { Badge, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import CarritoCompras from './CarritoCompras';
import { useSelector } from 'react-redux';
import { getCarrito } from '../Redux/productos/productosSlice';
import Carrousel from './Carrousel';

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSlider = () => setIsOpen((state) => !state);
  const carrito = useSelector(getCarrito)

  const badgeCount = carrito.length;

  return (
      <>
        <Menu style={{textAlign: 'end'}} theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' style={{ color: 'white', fontSize: 20, marginRight: 5 }}>
            Inicio
          </Menu.Item>
          <Menu.Item key='2'>
            <Badge count={badgeCount}>
              <ShoppingCartOutlined
                style={{ color: 'white', fontSize: 20 }}
                onClick={toggleSlider}
               
              />
            </Badge>
          </Menu.Item>
          <Menu.Item key='3' style={{ color: 'white', fontSize: 20, marginLeft: 5 }}>
            Login
          </Menu.Item>
        </Menu>
        {/* <Carrousel /> */}
        
        <Drawer
          title='Carrito de compras'
          placement='right'
          closable={false}
          onClose={toggleSlider}
          visible={isOpen}
          width='450'
        >
         <CarritoCompras />
        </Drawer>
      </>
  );
};

export default TopMenu;
