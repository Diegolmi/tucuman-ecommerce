import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';
import './App.css';
import Productos from './Components/Productos';
import TopMenu from './Components/TopMenu';
import Carrousel from './Components/Carrousel';

const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Layout className='layout' style={{height:"100vh"}}>
      <Header>
        <div className='logo' />
        <TopMenu />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Carrousel />
        <Productos />
        <div className='site-layout-content'>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      
      </Footer>
    </Layout>
  );
}

export default App;
