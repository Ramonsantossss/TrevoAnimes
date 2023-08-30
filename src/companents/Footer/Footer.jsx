import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer_top">
        <div className="fotter_top_blog1">
          <div className="footer_first">
            <div className="f_first_top">
              <div className="logo_f">
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="46"
                    viewBox="0 0 35 46"
                    fill="none"
                  >
                    <path
                      d="M32.956 22.6957C32.48 21.5635 31.9375 20.2807 31.4107 18.697C30.0282 14.5512 34.4452 10.0292 34.4872 9.98725L32.0127 7.51275C31.7677 7.75775 26.0225 13.5992 28.0892 19.803C28.6597 21.5145 29.2302 22.8655 29.7307 24.0555C30.8986 26.363 31.5049 28.9138 31.5 31.5C31.2949 33.5846 30.4946 35.5662 29.1945 37.2085C27.8944 38.8509 26.1494 40.0847 24.1675 40.7627C24.7936 38.3087 24.7843 35.7356 24.1404 33.2862C23.4965 30.8367 22.2392 28.5917 20.4872 26.7627L18.6602 24.9357L17.6417 27.3105C14.4287 34.8075 10.605 38.08 8.35625 39.445C6.97576 38.5995 5.8157 37.4385 4.97145 36.0572C4.1272 34.676 3.62289 33.1141 3.5 31.5C3.62072 29.297 4.17309 27.1392 5.12575 25.1492C6.25556 22.7504 6.89287 20.1494 7 17.5V14.3885C8.5295 15.0185 10.5 16.6687 10.5 21V25.5552L13.5502 22.1707C18.9962 16.1262 17.8605 8.9285 15.6607 4.13175C17.3329 4.68912 18.7688 5.79297 19.7373 7.26558C20.7058 8.73819 21.1506 10.4939 21 12.25H24.5C24.5 2.56025 16.4867 0 12.25 0H8.75L10.85 2.79825C11.0897 3.122 15.8585 9.6705 13.2177 16.2522C12.6301 14.5983 11.5532 13.1622 10.13 12.1348C8.7069 11.1074 7.00487 10.5372 5.25 10.5H3.5V17.5C3.37928 19.703 2.8269 21.8607 1.87425 23.8507C0.744443 26.2496 0.10713 28.8506 0 31.5C0 38.234 6.69025 45.5 17.5 45.5C28.3097 45.5 35 38.234 35 31.5C35.0026 28.4474 34.3033 25.435 32.956 22.6957ZM11.9612 41.1705C13.6238 39.7943 15.1218 38.2401 16.4305 36.5398C17.6629 34.9387 18.7275 33.2079 19.6035 31.374C20.5678 32.9311 21.1157 34.71 21.1945 36.5398C21.2732 38.3697 20.8802 40.189 20.0532 41.8232C19.2069 41.9371 18.354 41.9962 17.5 42C15.6219 42.013 13.7532 41.7331 11.9612 41.1705Z"
                      fill="#BD00FF"
                    />
                  </svg>
                  <span>Animes Online.</span>
                </Link>
                <p className="logo_bottm_text">Bem vindo ao melhor site de animes</p>
              </div>

            </div>
            <div className="f_secend_bottom">
              <p>Animes online todos os direitos reservados</p>
              <p>Atenção: Este site não hospeda nenhum vídeo em seu servidor.<br />
                Todo conteudo é provido por terceiros e não afiliados.</p>
            </div>
          </div>
          <div className="footer_secend">
            <ul className="ul_f ul_f_fist">
              <span>
              <li>
                <Link to={"/"}>Home</Link>
                <i></i>
              </li>
              <li>
                <Link to={"/"}>News</Link>
                <i></i>
              </li>
              <li>
                <Link to={"/"}>Categories</Link>
                <i></i>
              </li>
              </span>
            </ul>
            <ul className="ul_f ul_f_secend">
              <span>
                <li>
                  <Link to={"/"}>New Epsodes</Link>
                  <i></i>
                </li>
                <li>
                  <Link to={"/"}>Highlights</Link>
                  <i></i>
                </li>
              </span>

            </ul>
          </div>
        </div>
        <div className="fotter_top_blog2">
          <ul className="fotter_links">
            <li><p>Social Midia</p></li>
            <li><Link to={"https://github.com/MrKarimov01"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Github</title>
  <desc>A solid styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
  fill="#ffffff"></path>
  <path data-name="layer1" d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
  fill="#ffffff"></path>
</svg> @MrKarimov01</Link></li>
            <li><Link to={"https://github.com/MrKarimov01"}><svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>@Dubber_Link</Link></li>

          </ul>
        </div>
      </div>
      <div className="footer_bottom_f">
        <div className="fT_line"></div>
        <p>
          Copyright DMCA (English) Termos de Uso Politica de Privacidade todos os direitos reservados 2021 - Assistir Animes Online Grátis. Os melhores animes, desenhos e filmes, Assista seus melhores animes dublado e animes legendado em Hd , favoritos tv shows, dubbed anime, tv series, anime series , anime stream, anime fans, watch anime for free , anime planet , anime websites, anime movie,anime episodes,watch thousands
        </p>
      </div>
    </div>
  );
}

export default Footer;
