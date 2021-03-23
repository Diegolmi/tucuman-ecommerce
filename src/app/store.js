import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from '../Redux/productos/productosSlice';

export default configureStore({
  reducer: {
    carrito: carritoReducer,
  },
});
