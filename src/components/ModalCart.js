import { Modal, Card, Image } from 'antd';
import { useState } from 'react';
import "./ModalCart.css"
import {  HeartTwoTone } from '@ant-design/icons';

const { Meta } = Card;


const ModalCart = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  

  const showModal = () => {

    setVisible(true);
  };

  const handleOk = () => {
    
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <div className="card-modal">
      <Card
        hoverable
        onClick={showModal}
        style={{ width: '100%' }}
        cover={<img alt={data.id} src={data.image} />}
      >
        <Meta title={data.name} description={data.status} />

      </Card>
      <Modal
        title={data.name}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1000}
        centered
      >
        <div className="content-modal" >
          <Image
            width={250}
            src={data.image}
            alt={data.id}
            style={{ display: "inline-block", verticalAlign: "bottom" }}
          />
          <div className="content-message">

            {data.status === "Alive" ? <h3 className="title"> <HeartTwoTone twoToneColor="#eb2f96" />{data.status}</h3>
              : <h3 className="title"><HeartTwoTone twoToneColor="#001100" />{data.status}</h3>
            }
            <h3>{data.species} - {data.gender}</h3>
            <p>Last known location:</p>
            <p className="title">{data.origin.name}</p>
            
            <p>First seen in:</p>
            <p className="title">{data.episode[0].name}</p>
          </div>
        </div>

      </Modal>

    </div >
  );
};

export default ModalCart;