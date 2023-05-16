import React, { useEffect, useState } from 'react';
import { Table , Checkbox, Form, Input, Modal, Typography } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import TextArea from 'antd/es/input/TextArea';
import { Author } from '../types';

const { Text, Paragraph } = Typography;

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
        <Text strong>Год:</Text> <Input value={cAuthor?.year_str }/> <br/>
        <Text strong>Авторы:</Text> <Input value={cAuthor?.author_name }/> <br/>
        <Text strong >Отчет:</Text> <TextArea  rows={4} style={{ height: 100, resize: 'none' }}  value={cAuthor?.report_name }/> <br/>
        {/* <Text > report_name: {cAuthor?.report_name }</Text> <br/> */}
        <Text strong>Инв.№ РГФ:</Text> <Input value={cAuthor?.rgf }/> <br/>
        <Text strong>Инв.№ ХМТГФ:</Text> <Input value={cAuthor?.tgf_hmao }/> <br/>
        <Text strong>Инв.№ ЯНТГФ:</Text> <Input value={cAuthor?.tgf_ynao }/> <br/>
        <Text strong>Инв.№ КраснТГФ:</Text> <Input value={cAuthor?.tgf_kras }/> <br/>
        <Text strong>Инв.№ ЕкатерТГФ:</Text> <Input value={cAuthor?.tgf_ekat }/> <br/>
        <Text strong>Инв.№ ОмскТГФ:</Text> <Input value={cAuthor?.tgf_omsk }/> <br/>
        <Text strong>Инв.№ НовосибТГФ:</Text> <Input value={cAuthor?.tgf_novo }/> <br/>
        <Text strong>Инв.№ МорскойТГФ:</Text> <Input value={cAuthor?.tgf_more }/> <br/>
        <Text strong>Инв.№ ТюмТГФ:</Text> <Input value={cAuthor?.tgf_tmn }/> <br/>
        <Text strong>ТГФ:</Text> <Input value={cAuthor?.tgf }/> <br/>
        <Text strong >Путь полный:</Text> <TextArea  rows={4} style={{ height: 100, resize: 'none' }}  value={cAuthor?.folder_root }/> <br/>
        <Text strong>Название папки:</Text> <Input value={cAuthor?.folder_name }/> <br/>
        <Text strong>Территория:</Text> <Input value={cAuthor?.territory_name }/> <br/>

        {/* <Text > rgf: {cAuthor?.rgf }</Text><br/> */}
        {/* <Text > tgf_hmao: {cAuthor?.tgf_hmao }</Text><br/> */}
        {/* <Text > tgf_ynao: {cAuthor?.tgf_ynao }</Text><br/> */}
        {/* <Text > tgf_kras: {cAuthor?.tgf_kras }</Text><br/> */}
        {/* <Text > tgf_ekat: {cAuthor?.tgf_ekat }</Text><br/> */}
        {/* <Text > tgf_omsk: {cAuthor?.tgf_omsk }</Text><br/> */}
        {/* <Text > tgf_novo: {cAuthor?.tgf_novo }</Text><br/> */}
        {/* <Text > tgf_more: {cAuthor?.tgf_more }</Text><br/> */}
        {/* <Text > tgf_tmn: {cAuthor?.tgf_tmn }</Text><br/> */}
        {/* <Text > tgf: {cAuthor?.tgf }</Text><br/> */}
        {/* <Text > folder_root: {cAuthor?.folder_root }</Text><br/> */}
        {/* <Text > folder_name: {cAuthor?.folder_name }</Text><br/>         */}
        {/* <Paragraph>  {cAuthor?.id}</Paragraph> */}

        {/* <Table columns={columns} dataSource={data} />; */}
      </Modal>
    </>
  );
};

export default CardDetail;