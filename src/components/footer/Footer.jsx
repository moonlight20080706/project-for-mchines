import "./Footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") {
      alert("Iltimos, taklif yozing.");
      return;
    }
    alert("Taklif yuborildi: " + message);
    setMessage("");
  };

  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <div className="foot-left">
          <h4>Bizning manzil</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11987.853234067774!2d71.6076895!3d40.9986192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4a38219aaaab%3A0xd1574c4d67e7fd69!2sStoyanka!5e0!3m2!1sru!2s!4v1692532158460!5m2!1sru!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manzil"
          />

          <p>
            5A mikrarayon <b>Katta stoyankada</b> <br />m{"o'"}njal: Mahalla
            kamitetini teparo{"g'"}ida
          </p>
        </div>

        <div className="footer-section footer-center">
          <h2>Aloqa</h2>
          {/* <h3>Otabek telefon raqam:</h3> */}
          <p>
            1: <a href="tel:+998913482288">+998 91 348 22 88</a> -Otabek
          </p>
          <p>
            2: <a href="tel:+998939150855">+998 93 348 08 55</a> -Otabek
          </p>
          <p>
            3: <a href="tel:+998939150815">+998 93 348 08 15</a> -{"Ulug'bek"}
          </p>
          <p>
            Telegram:{" "}
            <a
              href="https://t.me/OtabekRover"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F2C300", fontSize: "24px" }}
            >
              Otabek
            </a>
          </p>
        </div>
      </div>

      <div className="footer-section footer-right">
        <h4>Taklif yuborish</h4>
        <textarea
          placeholder="Taklif yozing..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Yuborish</button>
        <h2>
          <Link to="/info">
            <a href="">Biz haqimmizda {"ma'lumot"}</a>
          </Link>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
