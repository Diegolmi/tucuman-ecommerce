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
    <div>
      <>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>
            <Badge count={badgeCount}>
              <ShoppingCartOutlined
                style={{ color: 'white' }}
                onClick={toggleSlider}
               
              />
            </Badge>
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
    </div>
  );
};

export default TopMenu;
