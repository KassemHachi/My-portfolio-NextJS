import React from 'react'
import { Modal, Text } from "@nextui-org/react";
export default function ModalView(props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
    };
  return (
    <div className='w-full h-full'> <img 
        
    className="w-full h-full"
    src={props.Small}
    onClick={()=> setVisible(true)}
    ></img>
  <Modal noPadding open={visible} onClose={closeHandler}>
    <Modal.Header
     className="bg-slate-900"
    >
      <Text color="#fff">
       {props.Title}
      </Text>
    </Modal.Header>
    <Modal.Body>
      <img
       src={props.Large}
      />
    </Modal.Body>
  </Modal></div>
  )
}
