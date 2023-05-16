import React, { useEffect, useState } from 'react';
import { Table , Checkbox, Form, Input,InputNumber , Modal, Typography, Space, Button } from 'antd';
import { Author } from './types';
import { SizeType } from 'antd/es/config-provider/SizeContext';
// import TextArea from 'antd/es/input/TextArea';


const { Text, Paragraph } = Typography;
const { TextArea } = Input;

interface CardProps {
    // id?:number,
    cAuthor?:Author,
    isModalOpen?:boolean,
    onOk?:() => void;
    onCancel?:() => void;
}

const CardDetail: React.FC<CardProps > = ({cAuthor, isModalOpen, onOk, onCancel }) => {

  // console.log("🚀 ~ file: CardDetail.tsx:49 ~ cAuthor:", cAuthor)
  
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
        <Text strong>Год:</Text> <InputNumber   min={1900} max={2050}  value={cAuthor?.year_int}/> <br/>
        <Text strong>Авторы:</Text> <Input value={cAuthor?.author_name }/> <br/>
        <Text strong >Отчет:</Text> <TextArea  rows={4} style={{ height: 100, resize: 'none' }}  value={cAuthor?.report_name }/> <br/>
        <Space>
          <Space.Compact direction="vertical">
            <Text strong>Инв.№ РГФ:</Text> <Input value={cAuthor?.rgf }/>
            <Text strong>Инв.№ ХМТГФ:</Text> <Input value={cAuthor?.tgf_hmao }/>
          </Space.Compact>
          <Space.Compact direction="vertical">
            <Text strong>Инв.№ ЯНТГФ:</Text> <Input value={cAuthor?.tgf_ynao }/> 
            <Text strong>Инв.№ КраснТГФ:</Text> <Input value={cAuthor?.tgf_kras }/>     
          </Space.Compact>
          <Space.Compact direction="vertical">
            <Text strong>Инв.№ ЕкатерТГФ:</Text> <Input value={cAuthor?.tgf_ekat }/> 
            <Text strong>Инв.№ ОмскТГФ:</Text> <Input value={cAuthor?.tgf_omsk }/>     
          </Space.Compact>
        </Space>
        <Space>
          <Space.Compact direction="vertical">
            <Text strong>Инв.№ ЕкатерТГФ:</Text> <Input value={cAuthor?.tgf_ekat }/> 
            <Text strong>Инв.№ ОмскТГФ:</Text> <Input value={cAuthor?.tgf_omsk }/> 
          </Space.Compact>
          <Space.Compact direction="vertical">
            <Text strong>Инв.№ НовосибТГФ:</Text> <Input value={cAuthor?.tgf_novo }/> 
            <Text strong>Инв.№ МорскойТГФ:</Text> <Input value={cAuthor?.tgf_more }/> 
          </Space.Compact>
          <Space.Compact direction="vertical">
            <Text strong>Инв.№ ТюмТГФ:</Text> <Input value={cAuthor?.tgf_tmn }/> 
            <Text strong>ТГФ:</Text> <Input value={cAuthor?.tgf }/> 
          </Space.Compact>
        </Space>
         <br/>
        {/* <Text strong>Инв.№ ХМТГФ:</Text> <Input value={cAuthor?.tgf_hmao }/> <br/> */}
        {/* <Text strong>Инв.№ ЯНТГФ:</Text> <Input value={cAuthor?.tgf_ynao }/> <br/>
        <Text strong>Инв.№ КраснТГФ:</Text> <Input value={cAuthor?.tgf_kras }/> <br/> */}
        
        
        
        <Text strong >Путь полный:</Text> <TextArea  rows={4} style={{ height: 100, resize: 'none' }}  value={cAuthor?.folder_root }/> <br/>
        <Text strong>Название папки:</Text> <Input value={cAuthor?.folder_name }/> <br/>
        <Text strong>Территория:</Text> <Input value={cAuthor?.territory_name }/> <br/>


      </Modal>
    </>
  );
};

export default CardDetail;