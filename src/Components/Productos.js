import { Card, Skeleton } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons'
import { agregarProducto, getProductos, getProductosLoading } from '../Redux/productos/productosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductos } from '../Redux/productos/actions';

const { Meta } = Card;

const Productos = () => {

  const dispatch = useDispatch();
  const productos = useSelector(getProductos);
  const loading = useSelector(getProductosLoading)


  useEffect(() => {
      if(!productos.length){
         dispatch(fetchProductos())
      }
  }, [productos])
  if (loading) return <Skeleton avatar active paragraph={{ rows: 4 }} />;

  const handleAgregarProducto = (producto) => () => {
     
      dispatch( agregarProducto(producto))
  }
  

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat( auto-fill, minmax(250px,1fr))", gap: 20, marginTop:"150px"}}>
      {productos.map((producto) => (
        <Card
          key={producto.id}
          hoverable
         
          cover={<img alt='example' src={producto.image} height='200' />}
          actions={[<PlusCircleFilled  onClick={handleAgregarProducto(producto)} />]}
        >
          <Meta title={producto.name} description={producto.description} />

        </Card>
      ))}
    </div>
  );
};

export default Productos;
