import React, { useState } from 'react';
import { Button, Modal } from 'antd';


interface CardProps {
    id?:number,
    isModalOpen?:boolean,
    onOk?:() => void;
    onCancel?:() => void;
}

const CardDetail: React.FC<CardProps > = ({id, isModalOpen, onOk, onCancel }) => {


  return (
    <>

      <Modal title="Basic Modal" open={isModalOpen} onOk={onOk} onCancel={onCancel}>
        <p>Some contents...{ id }</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CardDetail;