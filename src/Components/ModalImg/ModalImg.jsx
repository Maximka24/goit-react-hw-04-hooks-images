import { useEffect } from "react";
import { createPortal } from "react-dom";

import s from "./ModalImg.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function ModalImg({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleClickKeyDown);
  });

  const handleClickKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleClickBackDrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div id="Overlay" className={s.Overlay} onClick={handleClickBackDrop}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
