import React from "react";

import "./assets/css/base.css";
import "./assets/css/home.css";
import "./assets/css/style.css";

import Logo from "./assets/img/logotipo.svg";
import BlackFriday from "./assets/img/black-friday.svg";
import Produto1 from "./assets/img/cozinha-madesa.svg";
import Produto2 from "./assets/img/escritorio.svg";
import Produto3 from "./assets/img/guarda-roupa.svg";
import Produto4 from "./assets/img/kit-mesa.svg";
import Produto5 from "./assets/img/poltronas.svg";
import Produto6 from "./assets/img/quarto-bebe.svg";
import Produto7 from "./assets/img/sala-jantar.svg";
import Produto8 from "./assets/img/sofa.svg";
import Menu from "./components/Menu";
import Slider from "./components/Slider";

export default function Principal() {
  return (
    <>
    <Menu />
    <Slider />

    <main>

      <div className="bloco-post">
        <div className="post1">
          <img src={BlackFriday} alt="banner Black Friday" />
        </div>
        <div className="post2">
          <p>
            Redecore e renove sua casa com as ofertas que preparamos para você!
          </p>
        </div>
      </div>

      <div className="card-container" id="promocoes">
        <div className="card">
          <h3>Cozinha Madesa</h3>
          <img
            src={Produto1}
            className="card-img-top"
            alt="Cozinha Madesa"
          />
          <div className="price">
            <p className="price-p">De R$ 3.500,00 por</p>
            <h2>R$ 2.739,99</h2>
          </div>
          <div className="popup" onclick="openPopup()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details">
              <p className="description">
                Fabricada com materias de qualidade superior, tem puxadores
                embutidos em alumínio, dobradiças metálicas e gavetas com
                corrediças de metal. Além de pés em madeira, muito sofisticados
                e resistentes.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Escritório Completo</h3>
          <img
            src={Produto2}
            className="card-img-top"
            alt="Escritório Tecno Mobili"
          />
          <div className="price">
            <p className="price-p">De R$ 2.990,00 por</p>
            <h2>R$ 2.609,90</h2>
          </div>
          <div className="popup" onclick="openPopup2()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details2">
              <p className="description">
                O Escritório Tecno Mobili possui peças que fazem toda diferença
                ao ambiente. Oferecer espaços excelentes e prateleiras
                reforçadas proporcionando organização, conforto e beleza ao seu
                ambiente.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Guarda Roupa</h3>
          <img
            src={Produto3}
            className="card-img-top"
            alt="Guarda Roupa Madesa"
          />
          <div className="price">
            <p>De R$ 3.190,00 por</p>
            <h2 className="price">R$ 2.469,99</h2>
          </div>
          <div className="popup" onclick="openPopup3()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details3">
              <p className="description">
                O Guarda Roupa Madesa possui acabamento em Pintura Poliéster
                branco e tubos cabideiros muito resistentes. Profundidade ideal
                para qualquer tamanho de cabide, além de possuir 4 gavetas
                espaçosas.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Kit Mesa Noronha</h3>
          <img
            src={Produto4}
            className="card-img-top"
            alt="Kit Mesa Noronha"
          />
          <div className="price">
            <p className="price-p">De R$ 4.290,00 por</p>
            <h2>R$ 3.767,99</h2>
          </div>
          <div className="popup" onclick="openPopup4()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details4">
              <p className="description">
                Kit Mesa Dobrável Retrátil Em Madeira 415x89 Com 2 bancos,
                produzido em madeira maciça Esse produto é perfeito para
                incrementar seu ambiente e valorizar seu lar. Renove seu espaço
                com bom gosto.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Poltronas Alberta</h3>
          <img
            src={Produto5}
            className="card-img-top"
            alt="Poltronas Alberta"
          />
          <div className="price">
            <p className="price-p">De R$ 3.390,00 por</p>
            <h2>R$ 3.029,90</h2>
          </div>
          <div className="popup" onclick="openPopup5()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details5">
              <p className="description">
                A Poltrona Alberta foi desenvolvida para proporcionar grande
                conforto e estilo a sua casa. Base giratória de madeira. A opção
                perfeita para inovar sua sala de estar, recepção ou hall de
                entrada.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Quarto Multimóveis</h3>
          <img
            src={Produto6}
            className="card-img-top"
            alt="Quarto de Bebê Multimóveis"
          />
          <div className="price">
            <p className="price-p">De R$ 2.850,00 por</p>
            <h2>R$ 2.179,90</h2>
          </div>
          <div className="popup" onclick="openPopup6()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details6">
              <p className="description">
                O quarto infantil Pimpolho da Multimóveis é produzido em MDF/MDP
                com pintura UV Premium de alta resistência e Laca PU(que garante
                maior durabilidade e facilidade na limpeza). Beleza e
                praticidade.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Sala de Jantar</h3>
          <img
            src={Produto7}
            className="card-img-top"
            alt="Sala de Jantar Arezzo"
          />
          <div className="price">
            <p className="price-p">De R$ 7.290,00 por</p>
            <h2>R$ 6.949,90</h2>
          </div>
          <div className="popup" onclick="openPopup7()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details7">
              <p className="description">
                A Sala De Jantar Arezzo Mesa 180 Cm com 06 Cadeiras é perfeita
                para você que busca um móvel diferenciado para sua casa.
                Produtos de excelente qualidade, um acabamento impecável e
                sofisticação.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Sofá Linoforte</h3>
          <img
            src={Produto8}
            className="card-img-top"
            alt="Sofá Lindoforte"
          />
          <div className="price">
            <p className="price-p">De R$ 2.890,00 por</p>
            <h2>R$ 2.419,90</h2>
          </div>
          <div className="popup" onclick="openPopup8()">
            <p className="legend">Ver mais</p>
            <div className="content-popup" id="details8">
              <p className="description">
                Sofá com 4 lugares retrátil e reclinável com Baú Linoforte
                Artemis é ideal para você. A estrutura de matéria-prima em
                madeira de reflorestamento, percintas elásticas e revestimento
                em tecido Suede.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div id="content">
          <h3>Cadastre-se e fique por dentro das novidades e promoções</h3>
          <form id="form">
            <input
              className="input"
              type="email"
              placeholder="E-mail"
              id="email"
              required
            />
            <input className="button-home" type="submit" value="ENVIAR" />
          </form>
        </div>
      </div>
    </main>

    <footer id="contato">
      <div className="contato-footer">
        <div>
          <p>
            Beautiful Home Store Ltda. <br />
            Rua do Comércio, 1234 Cidade Linda-RS CEP: 91234-567
            <br />
            Beautiful.home@bh-store.com <br />
            (51)4000-0001 | (51)9999-9999
          </p>
        </div>
        <div>
          <img
            src={Logo}
            alt="logotipo da Beautiful Home Store"
          />
        </div>
      </div>
      <div className="direitos-footer">
        <p>&COPY;2021 Vanessa Vargas. Todos os direitos reservados.</p>
      </div>
    </footer>
    
    </>
  )
}
