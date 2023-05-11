import React, { useEffect, useState } from 'react';
import {Space, Card, Input, List, Typography, Image, Avatar, Button } from "antd"
import './App.css';
import { Author } from './types';
import { EnvironmentOutlined, ExceptionOutlined, FolderOpenOutlined, LinkOutlined  } from '@ant-design/icons';
import CardDetail from './CardDetail';

const { Search } = Input;
const { Text, Paragraph } = Typography;



const App: React.FC = () => {
  const [seachedText,setSeachedText] = useState("")
  const [loading,setLoading] = useState(false)
  const [dataSource,setDataSource] = useState<Author[]>([])
  // const [previewImages,setPreviewImages] = useState<string[]>([])
  const [dataCount, setDataCount] = useState<number>(10)
  const [dataCountAll, setDataCountAll] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idCurrent, setIdCurrent] = useState<number>(0)

   useEffect(()=>{
    // API
    asyncGet()
    asyncGetcCountAll()
  }, [])

  const asyncGet = async () => {
    try {
      if(loading){return}
      setLoading(true)
        //  const response = await fetch(`https://dummyjson.com/products/search?q=${seachedText}`) ;
         const response = await fetch(`http://localhost:8002/api/v1/adoc/10/10`) ;
         const data_all = await response.json();
        // enter you logic when the fetch is successful
         const { data } = data_all
         setDataCount(data_all?.count)
         setDataSource(data)
         console.log(data)
         setLoading(false)
       } catch(error) {
          // enter your logic for when there is an error (ex. error toast)
          console.log(error)
         }
         finally{ setLoading(false) }
  }

  const asyncGetcCountAll = async () => {
    try {
      if(loading){return}
      setLoading(true)
        //  const response = await fetch(`https://dummyjson.com/products/search?q=${seachedText}`) ;
         const response = await fetch(`http://localhost:8002/api/v1/adoc/count`) ;
         const data_all = await response.json();
        // enter you logic when the fetch is successful
         const { count } = data_all
         console.log(count)
         setDataCountAll(count)
       } catch(error) {
          // enter your logic for when there is an error (ex. error toast)
          console.log(error)
         }
         finally{ setLoading(false) }
  }

  const onSearch = (value: string)=>{ setSeachedText(value) }

  // const showModal = () => { setIsModalOpen(true);};
  const showModal = (id:number ) => { console.log(id); setIdCurrent(id); setIsModalOpen(true);};

  const handleOk = () => {  setIsModalOpen(false); };

  const handleCancel = () => {setIsModalOpen(false); };


  return (
    <>
     <Space
        style={{padding: "0px 16px"}}
        direction="vertical"
     >
      <Typography.Title
      style={{textAlign: "center",fontFamily:"monospace"}}
      > Поиск по отчетам
      </Typography.Title>
      <Space
        style={{maxWidth: 500, display:'flex', margin:'auto'}}
        direction="vertical">
        <Search
          // style={{maxWidth: 500, display:'flex', margin:'auto'}}
          onSearch={onSearch}
          placeholder="введите поисковой запрос"
          allowClear
          // onSearch={(value)=>{ setSeachedText(value) }}
        />
      </Space>

      <List
        style={{maxWidth: 800}}
        loading={loading}
        dataSource={dataSource}
        // dataSource={dataSource.filter((item) => {
        //   return seachedText.toLowerCase() === ''
        //     ? item
        //     : item?.report_name.toLowerCase().includes(seachedText);
        // })}
        header={<div><Typography.Text >Поиск для: <Typography.Text strong>{seachedText||"Все"} и показано {dataCount}</Typography.Text> </Typography.Text> </div>}

        footer={<div>{`Показано ${dataCount} из ${dataCountAll}`} </div>}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          xxl: 1,
        }}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{maxWidth: 800, height:350, margin: 5, overflow:"hidden"}}
              key={item?.id}
              title={item?.report_name}
              actions={[
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                <Button type="link" onClick={()=>{showModal(item?.id)}} >Подробнее...</Button>
                // <a key="list-loadmore-more">Подробнее...</a>
                // <EllipsisOutlined key="ellipsis" />,
              ]}
            >
            <Card.Meta
                avatar={item?.year_str}
                title={item?.author_name}
                description={item?.report_name}
            />
            
            {item?.territory_name?.length
            ?<p><EnvironmentOutlined /> {item?.territory_name}</p>
            :null}

            {item?.folder_name?.length
            ?<Paragraph copyable> <FolderOpenOutlined style={{color: 'orange'}}/> {item?.folder_name}</Paragraph>
            :null}

            {/* {item?.folder_link?.length
            ?<p><LinkOutlined /> {item?.folder_link}</p>
            :null} */}

            {item?.folder_link?.length
            ?
              <Paragraph copyable> <LinkOutlined style={{color: 'blue'}}/> {item?.folder_link}</Paragraph>
            :null}
            
            
            {item?.tgf_tmn?.length
            ? <> ТюмТГФ: <Text strong>{item?.tgf_tmn},</Text></>
            :null}

            {item?.rgf?.length
            ? <> РГФ: <Text strong>{item?.rgf}, </Text></>
            :null}

            {item?.tgf_hmao?.length
            ? <>ХМТГФ: <Text strong>{item?.tgf_hmao}, </Text></>
            :null}

            {item?.tgf_ynao?.length
            ? <>ЯНТГФ: <Text strong>{item?.tgf_ynao}, </Text></>
            :null}

            {item?.tgf_kras?.length
            ? <>КраснТГФ: <Text strong>{item?.tgf_kras}, </Text></>
            :null}

            {item?.tgf_ekat?.length
            ? <>ЕкатерТГФ: <Text strong>{item?.tgf_ekat}, </Text></>
            :null}

            {item?.tgf_omsk?.length
            ? <>ОмскТГФ: <Text strong>{item?.tgf_omsk}, </Text></>
            :null}

            {item?.tgf_novo?.length
            ? <>НовосибТГФ: <Text strong>{item?.tgf_novo}, </Text></>
            :null}

            {item?.tgf_more?.length
            ? <>МорскойТГФ: <Text strong>{item?.tgf_more}, </Text></>
            :null}

            {item?.comments?.length
            ? <><ExceptionOutlined /> <Text strong>{item?.comments}</Text></>
            :null}

            {/* </Card.Meta> */}
            </Card>
          </List.Item>
        )}
      ></List>

      </Space>
      <CardDetail id={idCurrent} isModalOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
    </>
  );
}

export default App;
