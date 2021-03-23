import React from 'react'
import { Modal, Button } from 'antd';

const ModalProducto = ({isModalVisible, handleOk,handleCancel, productos }) => {
    
    return (
        <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{productos.description}</p>
      </Modal>
        </>
    )
}

export default ModalProducto
