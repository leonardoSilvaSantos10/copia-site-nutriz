import { useParams } from "react-router-dom";
import produtosData from "../../data/produtos.json";
import style from './produtoDetalhe.module.css';
import { useState } from "react"; // adiciona esse import lá em cima

const ProdutoDetalhe = () => {
  const { id } = useParams(); // pega o ID da URL
  const produto = produtosData.find((p) => p.id === id); // busca o produto certo

  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setShowZoom(true);
  const handleMouseLeave = () => setShowZoom(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPos({
      x,
      y,
      mouseX: e.clientX - left,
      mouseY: e.clientY - top,
    });
  };


// console.log("ID da URL:", id);
// console.log("Produto encontrado:", produto);


  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div className={style["teste"]}>
        <div className={style["container-img-texto"]}>
            <div className={style["div-img-produ"]}>
                <img
                className={style["produto-imagem"]}
                src={produto.imagem}
                alt={produto.nome}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />

            <div
              className={`${style["produto_zoom"]} ${showZoom ? style.show : ""}`}
              style={{
                backgroundImage: `url(${produto.imagem})`,
                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                left: `${zoomPos.mouseX - 90}px`,
                top: `${zoomPos.mouseY - 90}px`,
              }}
            ></div>     
            </div>
            

            <div className={style["produto-textos"]}>
                <div className={style["tamanho-textos"]}>
                    <h1 className={style["titulo"]}>{produto.nome}</h1>
                    {produto.sobre?.trim() && (
                      <p className="descricao">{produto.sobre}</p>
                    )}
                        
                    <p><span style={{ color: "#000", marginRight: "6px" }}>•</span>Linha: {produto.linha}</p>
                    <p><span style={{ color: "#000", marginRight: "6px" }}>•</span>Código do produto: {produto.codigo}</p>
                    <p><span style={{ color: "#000", marginRight: "6px" }}>•</span>Descrição: {produto.descricao}</p>

                    <p><span style={{ color: "#000", marginRight: "6px" }}>•</span>Composição da caixa:</p>
                        <div className={style["composicao"]}>
                        {produto.composicao_caixa.map((item, index) => (
                            <p key={index}><span style={{ color: "#000", marginRight: "6px" }}>•</span>{item}</p>
                        ))}
                        </div>
                   
                    {produto.composicao_produto?.trim() && ( /*aqui faz uma verificacao se o produto clicado tem o obj composicao_produto*/
                    <p>
                      <span style={{ color: "#000", marginRight: "6px" }}>•</span><strong>Composição do produto:</strong> {produto.composicao_produto}
                    </p>
                    )}
                    <p><span style={{ color: "#000", marginRight: "6px" }}>•</span><strong>GTIN13:</strong> {produto.GTIN13}</p>
                    <p><span style={{ color: "#000", marginRight: "6px" }}>•</span><strong>GTIN14:</strong> {produto.GTIN14}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProdutoDetalhe;
