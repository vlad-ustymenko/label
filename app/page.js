import Image from "next/image";
import styles from "./page.module.css";
import Sofa from "@/components/Sofa/Sofa";
export default function Home() {
  return (
    <>
      <header
        className="navbar"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "2",
          backgroundColor: "transparent",
        }}
      >
        <div className="logo">LOGO</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Портфоліо</a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          top: "0",
          left: "0",
        }}
      >
        <div className="title">LABEL</div>
        <div className="title2">LABEL</div>
        <span className="subtitle">studio</span>
        <div className="subtitle2">
          Архітектурний дизайн
          <br /> преміум-класу
        </div>
        <div className="subtitle3">
          <div>Авторський нагляд</div>
          <div>3D візуалізація</div>
        </div>
        <Sofa />
      </div>

      <section className="hero card">
        <h1 className="inset_text" data-text="Створюємо простори майбутнього">
          Створюємо простори майбутнього
        </h1>
        <p>Архітектурний дизайн преміум-класу</p>
        <button className="btn">Переглянути проекти</button>
        <button className="btn2">Переглянути проекти</button>
        <button className="btn3">Переглянути проекти</button>
      </section>

      <section className="about card">
        <h2>Про нас</h2>
        <p>Наша студія створює унікальні архітектурні рішення, що надихають.</p>
      </section>

      <section className="projects">
        <h2>Наші проекти</h2>
        <div className="projects-grid">
          <div className="project-card card">Проект 1</div>
          <div className="project-card card">Проект 2</div>
          <div className="project-card card">Проект 3</div>
        </div>
      </section>

      <section className="services">
        <h2>Послуги</h2>
        <div className="services-grid">
          <div className="service-card card">Проектування будівель</div>
          <div className="service-card card">Дизайн інтер&apos;єру</div>
          <div className="service-card card">Ландшафтний дизайн</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Архітектурна Студія</p>
      </footer>
    </>
  );
}
