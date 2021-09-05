import PropTypes from "prop-types";

import s from "./ImgItem.module.css";

export default function ImageItem({
  imgName,
  imgList,
  onClickToggleModal,
  onClickOpenModal,
}) {
  return (
    <ul className={s.ImageGallery} onClick={onClickOpenModal}>
      {imgList.map(({ id, webformatURL }) => (
        <li
          key={id}
          className={s.ImageGalleryItem}
          onClick={onClickToggleModal}
        >
          <img
            className={s.ImageGalleryItemImage}
            src={webformatURL}
            alt={`Картинка по запросу ${imgName}`}
          />
        </li>
      ))}
    </ul>
  );
}

ImageItem.propTypes = {
  onClickOpenModal: PropTypes.func,
  onClickToggleModal: PropTypes.func,
  imgName: PropTypes.string.isRequired,
  imgList: PropTypes.array,
};
