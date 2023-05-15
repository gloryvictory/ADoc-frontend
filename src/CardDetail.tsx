import React, { useEffect, useState } from 'react';
import { Table , Checkbox, Form, Input, Modal, Typography } from 'antd';
import { Author } from './types';
import { SizeType } from 'antd/es/config-provider/SizeContext';

const { Text, Paragraph } = Typography;

interface CardProps {
    // id?:number,
    cAuthor?:Author,
    isModalOpen?:boolean,
    onOk?:() => void;
    onCancel?:() => void;
}

const CardDetail: React.FC<CardProps > = ({cAuthor, isModalOpen, onOk, onCancel }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const columns = [
  //   {
  //     title: 'Имя',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: 'Параметр',
  //     dataIndex: 'param',
  //     key: 'param',
  //   },
  // ];

  return (
    <>

      <Modal 
        title="Подробности" 
        centered 
        open={isModalOpen} 
        onOk={onOk} 
        onCancel={onCancel}
      >
        <Text disabled> ID: {cAuthor?.id }</Text> <br/>
        <Text > author_name: {cAuthor?.author_name }</Text> <br/>
        <Text > report_name: {cAuthor?.report_name }</Text> <br/>
        <Text > rgf: {cAuthor?.rgf }</Text><br/>
        <Text > tgf_hmao: {cAuthor?.tgf_hmao }</Text><br/>
        <Text > tgf_ynao: {cAuthor?.tgf_ynao }</Text><br/>
        <Text > tgf_kras: {cAuthor?.tgf_kras }</Text><br/>
        <Text > tgf_ekat: {cAuthor?.tgf_ekat }</Text><br/>
        <Text > tgf_omsk: {cAuthor?.tgf_omsk }</Text><br/>
        <Text > tgf_novo: {cAuthor?.tgf_novo }</Text><br/>
        <Text > tgf_more: {cAuthor?.tgf_more }</Text><br/>
        <Text > tgf_tmn: {cAuthor?.tgf_tmn }</Text><br/>
        <Text > tgf: {cAuthor?.tgf }</Text><br/>
        <Text > folder_root: {cAuthor?.folder_root }</Text><br/>
        <Text > folder_name: {cAuthor?.folder_name }</Text><br/>        
        {/* <Paragraph>  {cAuthor?.id}</Paragraph> */}

        {/* <Table columns={columns} dataSource={data} />; */}
      </Modal>
    </>
  );
};

export default CardDetail;