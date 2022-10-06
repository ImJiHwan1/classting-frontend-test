import {Col, Image, Row, message} from 'antd';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import StoreApi from '../../api/StoreApi';
import ModalContainer from '../modal/ModalContainer';

const Store = () => {
  const [storeList, setStoreList] = useState([
    {
      description: String,
      id: Number,
      image: String,
      name: String,
      thumb: String,
    },
  ]);
  const [storeDetailItem, setStoreDetailItem] = useState({
    description: String,
    id: Number,
    image: String,
    name: String,
    thumb: String,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    message.config({top: 60, duration: 1, maxCount: 1});
  }, []);

  useEffect(() => {
    async function fetchStoreList() {
      try {
        const fetchStoreListData = await StoreApi.getStoreList();
        if (fetchStoreListData.data.length > 0) {
          // console.log(fetchStoreListData.data);
          setStoreList(fetchStoreListData.data);
        } else {
          message.error('매장 정보 API를 불러오는데 실패하였습니다.');
        }
      } catch (e) {
        message.error('매장 정보 API를 불러오는데 실패하였습니다.');
      }
    }
    fetchStoreList();
  }, []);

  const onClickStore = async (storeId) => {
    try {
      const fetchStoreDetailItem = await StoreApi.getStoreListDetail(storeId);
      if (fetchStoreDetailItem) {
        // console.log(fetchStoreDetailItem.data);
        setIsModalOpen(true);
        setStoreDetailItem(fetchStoreDetailItem.data);
      } else {
        message.error('매장 상세 정보 API를 불러오는데 실패하였습니다.');
      }
    } catch (e) {
      message.error('매장 상세 정보 API를 불러오는데 실패하였습니다.');
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="section-store">
        <div className="container">
          <div className="card-wrap">
            <h1 className="c-color2">STORE</h1>
            <Row gutter={[4, 16]}>
              {storeList.length > 0 ? (
                storeList.map((item) => (
                  <Col xs={6} sm={6} md={6} lg={6} key={item.id}>
                    <Image className="card" src={item.thumb} alt={item.name} preview={false} onClick={() => onClickStore(item.id)} width="180px" />
                  </Col>
                ))
              ) : (
                <p>스토어 정보를 불러오는데 실패하였습니다.</p>
              )}
            </Row>
          </div>
        </div>
      </section>
      <ModalContainer storeDetailItem={storeDetailItem} open={isModalOpen} onOk={() => handleOk()} onCancel={() => handleCancel()} />
    </>
  );
};

export default Store;
