import React from "react";
import "./Bid.scss";
export default function Bid() {
  return (
    <div className="Bid">
      <h1>ОСТАВИТЬ ЗАЯВКУ</h1>
      <p>/</p>

      <form className="Bid__Form">
        <input defaultValue="Имя"></input>
        <input defaultValue="Телефон"></input>
        <input
          className="sms"
          defaultValue="Оставьте сообщение, и мы свяжемся с Вами в ближайшее время"
        ></input>
        <button>ОТПРАВИТЬ</button>
      </form>
      <div className="Bid__Info">
        <b className="Bid__Info__Descp">
          Есть вопрос? Вы можете связаться с нами:
        </b>
        <b className="Bid__Info__Descp">
          WhatsApp, Viber, Telegram +3 467 486-37-88
        </b>
        <b className="Bid__Info__Descp">
          Avenida grandes playas 79, Corralejo la Oliva Fuerteventura, Spain.
          35660
        </b>
      </div>
      <div className="Bid__Soc">
        <a href="https://www.instagram.com/" target="_blank">
          INSTAGRAM
        </a>
        <a
          className="fb"
          href="https://www.facebook.com/?locale=hy_AM"
          target="_blank"
        >
          FACEBOOK
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          YOUTUBE
        </a>
      </div>
    </div>
  );
}
