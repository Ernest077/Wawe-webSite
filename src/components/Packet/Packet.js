import React from "react";
import "./Packet.scss";
export default function Packet() {
  let Package = [
    {
      id: 0,
      name: "Стандарт",
      descripton:
        "Проживание на вилле 6 ночей Номер категории стандарт Экипировка для обучения Обучение серфингу 5 тренировок по 2 часа Страховка Вечеринка с угощениями и дискотекой ",
      price: "450$",
    },
    {
      id: 1,
      name: "Все вклюxчено",
      descripton:
        "Проживание на вилле 6 ночей ,Номер категории люкс, Экипировка для обучения, Обучение серфингу 8 тренировок по 2 часа, Страховка, Вечеринка с угощениями и дискотекой.Авиа перелет Тенерифе -Лансароте - Тенерифе, Завтраки на вилле  ",
      price: "950$",
    },
    {
      id: 2,
      name: "Профи",
      descripton:
        "Проживание на вилле 6 ночей ,Номер категории люкс, Экипировка для обучения, Обучение серфингу 16 тренировок по 2 часа, Страховка, Вечеринка с угощениями и дискотекой.Авиа перелет Тенерифе -Лансароте - Тенерифе, Завтраки и ужины на вилле ",
      price: "1450$",
    },
  ];
  return (
    <div className="Packet">
      <h1 className="Packet__Title">ПАКЕТЫ УСЛУГ</h1>
      <p className="Packet__Slash">/</p>
      <div className="Packet__Package">
        {Package.map((elem) => (
          <div key={elem.id} className="Packet__Package_Container">
            <h1>{elem.name}</h1>
            <p>{elem.descripton}</p>
            <span>{elem.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
