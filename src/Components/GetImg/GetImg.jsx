import { useState } from "react";
import { BiSearch } from "react-icons/bi";

import PropTypes from "prop-types";

import s from "./GetImg.module.css";

export default function GetImg({ onSubmit }) {
  const [nameImg, setNameImg] = useState("");

  const handleNameChangeInput = (event) => {
    setNameImg(event.currentTarget.value.toLowerCase());
  };

  const handelSubmitForm = (event) => {
    event.preventDefault();

    if (nameImg.trim() === "") {
      return alert("Введите название картинки!");
    }

    onSubmit(nameImg);
    setNameImg("");
  };

  return (
    <div className={s.GetContainer}>
      <form onSubmit={handelSubmitForm}>
        <button className={s.BtnForm} type="submit">
          <BiSearch style={{ width: 24, height: 24 }} />
        </button>
        <input
          type="tel"
          placeholder="Search images..."
          name="number"
          value={nameImg}
          onChange={handleNameChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Наименование изображения может состоять только из букв!!!"
          // required
        />
      </form>
    </div>
  );
}

GetImg.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
