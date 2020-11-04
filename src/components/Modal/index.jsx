import React from "react";

const Modal = (props) => {
  const { showModal, children } = props;
  return (
    showModal && (
      <div className="modalBackground">
        <div className="modalContainer">{children}</div>
      </div>
    )
  );
};

export default Modal;
