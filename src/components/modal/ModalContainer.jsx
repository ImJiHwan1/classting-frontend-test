import {Image, Modal} from 'antd';
import React from 'react';

const ModalContainer = (props) => {
  const {name, description, image} = props.storeDetailItem;

  const handleOk = () => {
    if (props.onOk) {
      props.onOk();
    }
  };

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <Modal open={props.open} onOk={handleOk} onCancel={handleCancel} footer={null} width={1000} height={1000}>
      <div className="s-modal">
        <div className="s-modal-inner">
          <Image src={image} alt={name} width="100%" preview={false} />
        </div>
        <div className="s-modal-inner right">
          <div className="s-modal-text-wrap">
            <div className="s-modal-text-wrap-top">{name}</div>
            <br />
            <br />
            <br />
            <div className="s-modal-text-wrap-bottom">
              <div style={{whiteSpace: 'pre-line'}}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContainer;
