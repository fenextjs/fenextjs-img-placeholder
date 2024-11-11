import {FenextImgUserPlaceholder} from '.';

export default {
    id: "FenextImgUserPlaceholder",
    name: "FenextImgUserPlaceholder",
    description: "Imagen que se puede usar para mostrar un placeholder en caso de que la imagen del usuaro tenga un problema de carga.",
    html:`
        <img src="${FenextImgUserPlaceholder}" alt="" style={{width:"100%",maxWidth:"200px",}} />
    `,
      useExample: [
        {
          text: "Usar en la etiqueta img",
          content: `<img src={FenextImgUserPlaceholder} alt="" />`
        },
        {
          text: "Usar en la etiqueta Img de fenextjs",
          content: `import { Img } from "fenextjs";
<Img src={"...url"} alt="" imgIf404={FenextImgUserPlaceholder} />`
        },
      ]
};
