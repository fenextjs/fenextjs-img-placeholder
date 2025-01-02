import { FenextImgPlaceholder } from ".";

export default {
  id: "FenextImgPlaceholder",
  name: "FenextImgPlaceholder",
  description:
    "Imagen que se puede usar para mostrar un placeholder en caso de que la imagen original tenga un problema de carga.",
  html: `
        <img src="${FenextImgPlaceholder}" alt="" style={{width:"100%",maxWidth:"200px",}} />
    `,
  useExample: [
    {
      text: "Usar en la etiqueta img",
      content: `<img src={FenextImgPlaceholder} alt="" />`,
    },
    {
      text: "Usar en la etiqueta Img de fenextjs",
      content: `import { Img } from "fenextjs";
<Img src={"...url"} alt="" imgIf404={FenextImgPlaceholder} />`,
    },
  ],
};
