import React from "react";

import "./styles.css";

function Collapse() {
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Energia Solar Fotovoltaica – Guia do Comprador
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">
            O Portal Solar te ajuda a escolher a empresa e o sistema de energia
            solar fotovoltaica ideais para você! Nesta seção você vai aprender o
            que precisa saber para tomar uma decisão informada e comprar o
            sistema de energia solar correto para sua casa ou empresa.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lista de empresas de energia solar fotovoltaica
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              FINANCIAMENTO PARA ENERGIA SOLAR BV - FORMULÁRIO
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body">
            Descubra rapidamente qual é o tamanho do sistema fotovoltaico que
            sua propriedade precisa e o valor das parcelas caso você queira
            financiar o seu gerador de energia solar. Dúvidas sobre o
            financiamento para energia solar? entre em contato conosco:
            financiamento@portalsolar.com.br ou (11) 5090-5560
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
