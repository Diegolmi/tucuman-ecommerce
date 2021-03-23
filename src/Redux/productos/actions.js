import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductos = createAsyncThunk(
  'productos/fetchProductos',
  async () => {
    const response = await fetch(
      'https://e-show-server.herokuapp.com/api/v1/products'
    );
    const data = await response.json();
    console.log(data);
    return data;
    
  }
);
