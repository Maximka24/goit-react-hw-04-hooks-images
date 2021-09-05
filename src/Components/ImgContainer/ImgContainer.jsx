import PropTypes from "prop-types";

import DownloadImg from "../DownloadImg/DownloadImg";
import ModalImg from "../ModalImg/ModalImg";
import ImageItem from "../ImgItem/ImgItem";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import s from "./ImgContainer.module.css";

export default function ImgContainer({
  imgList,
  toggleModal,
  modalRendImg,
  onClickPageState,
  targetImg,
  showModal,
  statusLoad,
  imgName,
  imgStatus,
  errorApi,
}) {
  if (imgStatus === "idle") {
    return <div className={s.ImgContainer}>Введите запросы в поле выше!! </div>;
  }

  if (imgStatus === "error") {
    return <h1 className={s.ImgContainer}> {errorApi} </h1>;
  }

  if (imgStatus === "load") {
    return (
      <div className={s.ImgContainer}>
        <Loader type="Oval" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }

  if (imgStatus === "resolved") {
    return (
      <>
        {imgList && (
          <ImageItem
            imgName={imgName}
            imgList={imgList}
            onClickOpenModal={modalRendImg}
            onClickToggleModal={toggleModal}
          />
        )}
        {statusLoad && (
          <div className={s.ImgContainer}>
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        )}

        <DownloadImg
          nameImgState={imgName}
          onClickPageState={() => {
            onClickPageState();
          }}
        />

        {showModal && (
          <ModalImg onClose={toggleModal}>
            <img src={targetImg} alt={`Картинка по запросу ${imgName}`} />
          </ModalImg>
        )}
      </>
    );
  }
}

ImgContainer.propTypes = {
  onClickPageState: PropTypes.func.isRequired,
  modalRendImg: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  imgName: PropTypes.string.isRequired,
  imgList: PropTypes.array.isRequired,
  imgStatus: PropTypes.string.isRequired,
  statusLoad: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
};
