import PropTypes from "prop-types";

import s from "./DownloadImg.module.css";

export default function DownloadImg({ nameImgState, onClickPageState }) {
  return (
    <div className={s.DownloadContainer}>
      {nameImgState !== "" && (
        <button className={s.DownloadBtnImg} onClick={onClickPageState}>
          Add image
        </button>
      )}
    </div>
  );
}

DownloadImg.propTypes = {
  onSubmit: PropTypes.func,
};
