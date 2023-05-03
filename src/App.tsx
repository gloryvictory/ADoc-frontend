import React, { useEffect, useState } from 'react';
import {Space, Card, Input, List, Typography, Image, Avatar } from "antd"
import './App.css';
import { Author } from './types';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Search } = Input;



const App: React.FC = () => {
  const [seachedText,setSeachedText] = useState("")
  const [loading,setLoading] = useState(false)
  const [dataSource,setDataSource] = useState<Author[]>([])
  const [previewImages,setPreviewImages] = useState<string[]>([])
  const [dataCount, setDataCount] = useState<number>(10)

  useEffect(()=>{
    // API
    asyncGetCall()
  }, [seachedText])

  const asyncGetCall = async () => {
    try {
      setLoading(true)
        //  const response = await fetch(`https://dummyjson.com/products/search?q=${seachedText}`) ;
         const response = await fetch(`http://localhost:8002/api/v1/adoc/10/1`) ;
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
  }

  const onSearch = (value: string)=>{ setSeachedText(value) }


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
          style={{maxWidth: 500, display:'flex', margin:'auto'}}
          onSearch={onSearch}
          placeholder="введите поисковой запрос"
          allowClear
          // onSearch={(value)=>{ setSeachedText(value) }}
        />
        <Typography.Text >Поиск для: <Typography.Text strong>{seachedText||"Все"} и показано {dataCount}</Typography.Text> </Typography.Text>
      </Space>

      <List
      loading={loading}
        dataSource={dataSource}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{height:300, margin: 12, overflow:"hidden"}}
              key={item?.id}
              title={item?.author_name}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
            <Card.Meta
                avatar={item?.year_str}
                title={item?.territory_name}
                description={item?.report_name}
            />

            {/* </Card.Meta> */}
            </Card>
          </List.Item>
        )}
      ></List>

      </Space>
    </>
  );
}

export default App;
