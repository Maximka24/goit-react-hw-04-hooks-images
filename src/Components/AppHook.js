import { useState, useEffect } from "react";

import GetImg from "./GetImg/GetImg.jsx";
import ImgContainer from "./ImgContainer/ImgContainer.jsx";
import Api from "../Api/Api";

export default function AppHook() {
  const [imgList, setImgList] = useState([]);
  const [nameImg, setNameImg] = useState("");
  const [pageImg, setPageImg] = useState(1);
  const [status, setStatus] = useState("idle");
  const [targetImg, setTargetImg] = useState("");
  const [error, setError] = useState(null);
  const [statusLoad, setStatusLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (nameImg === "") {
      return;
    }

    setStatus("load");

    Api.fetchApi({ nameImg, pageImg })
      .then((img) => setImgList(img))
      .catch((error) => setError(error))
      .finally(() => setStatus("resolved"));
  }, [nameImg]);

  useEffect(() => {
    if (pageImg === 1) {
      return;
    }

    setStatusLoad(true);

    Api.fetchApi({ nameImg, pageImg })
      .then((img) => setImgList((prevState) => [...prevState, ...img]))
      .then(scrollToTarget)
      .catch((error) => setError(error))
      .finally(() => setStatusLoad(false));
  }, [pageImg]);

  const onSubmitNameState = (getNameImg) => {
    setImgList([]);
    setNameImg(getNameImg);
    setPageImg(1);
  };

  const onClickPageState = () => {
    setPageImg((prevPage) => prevPage + 1);
  };

  const scrollToTarget = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const modalRendImg = (e) => {
    if (e.target !== e.currentTarget) {
      setTargetImg(e.target.currentSrc);
    }
  };

  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <div className="App">
      <GetImg onSubmit={onSubmitNameState} />

      <ImgContainer
        imgList={imgList}
        imgName={nameImg}
        imgStatus={status}
        errorApi={error}
        statusLoad={statusLoad}
        showModal={showModal}
        targetImg={targetImg}
        onClickPageState={onClickPageState}
        modalRendImg={modalRendImg}
        toggleModal={toggleModal}
      />
    </div>
  );
}
