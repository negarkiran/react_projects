import React, { useState } from "react";
import Modal from "react-modal";

const EditWord = ({ isHidden }) => {

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

  const [isOpen, setIsOpen] = useState(true);
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div hidden={isHidden}>
      <Modal
        isOpen={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Word"
      >
        Modal
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default EditWord;
