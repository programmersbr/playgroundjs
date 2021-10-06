// https://ichi.pro/pt/crie-um-jogo-de-memoria-com-react-e-javascript-133303565646838

/* É usado para renderizar as caixas que o jogador pode abrir clicando.
Se dois números corresponderem, eles permanecerão abertos.
Caso contrário, ambos estão fechados.
Em seguida, definimos o answerestado com as respostas.
itemIds tenha os IDs do cartão de resposta que estão abertos.
Pode haver no máximo 2 abertos.
Em seguida, definimos o onClickque verifica se itemIdsinclui id.
Se não, nós o adicionamos ao itemIdsarray com setItemIds.
Em seguida, chamamos setAnswerpara definir o item em answerque a openpropriedade deve ser aberta true.
Em seguida, temos um useEffectretorno de chamada para verificar se itemIds.lengthé 2.
Se for, então ligamos findIndexpara obter os índices dos answeritens que clicamos.
Se seus values não corresponderem, então os fechamos definindo a openpropriedade de ambos os itens como false.
Observamos os valores itemIdse answerpara fazer a atualização de acordo.
E temos outro useEffectgancho para verificar se itemIds.lengthé 2 novamente, mas desta vez, se for true, quando definimos itemIdscomo um array vazio.
Em seguida, adicionamos os estilos dos cartões na styletag.
Em seguida, renderizamos os answersitens em divs.
Mostramos que o valor é a.opené true.
Caso contrário, mostramos uma caixa vazia. */

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const answerArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  .map((n) => {
    return {
      id: uuidv4(),
      open: false,
      value: n
    };
  })
  .sort(() => Math.random() - 0.5);
export default function App() {
  const [answer, setAnswer] = useState([...answerArr]);
  const [itemIds, setItemIds] = useState([]);
  const onClick = (id) => {
    if (!itemIds.includes(id)) {
      setItemIds((itemIds) => [...itemIds, id]);
    }
    const index = answer.findIndex((a) => a.id === id);
    setAnswer((answer) => {
      const ans = [...answer];
      ans[index].open = true;
      return ans;
    });
  };
  useEffect(() => {
    if (itemIds.length === 2) {
      const item1Index = answer.findIndex((a) => a.id === itemIds[0]);
      const item2Index = answer.findIndex((a) => a.id === itemIds[1]);
      if (answer[item1Index].value !== answer[item2Index].value) {
        setAnswer((answer) => {
          const ans = [...answer];
          ans[item1Index].open = false;
          ans[item2Index].open = false;
          return ans;
        });
      }
    }
  }, [itemIds, answer]);
  useEffect(() => {
    if (itemIds.length === 2) {
      setItemIds([]);
    }
  }, [itemIds]);
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
          }
.tile {
            border: 1px solid black;
            width: 20vw;
            height: 50px;
          }
          `}
      </style>
      <div className="container">
        {answer.map((a) => {
          return (
            <div key={a.id} className="tile" onClick={() => onClick(a.id)}>
              {a.open ? <div>{a.value}</div> : <div>&nbsp;</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}