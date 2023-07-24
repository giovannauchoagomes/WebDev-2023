
# Tarefa 5 - Objetos

## Objetivo

&nbsp; &nbsp; A intenção dessa tarefa é ajudar o aluno a se acostumar com códigos que utilizam
objetos, um conceito um tanto quanto estranho à primeira vista. Assim, aqui focamos na leitura
e no entendimento do código. A solução deve ficar bem simples, precisando
apenas de uma ou outra linha digitada.

## O que é?

&nbsp; &nbsp; A página acessível pelo index.html representa a linha de produção de uma fábrica de enlatados. Inicialmente,
a fábrica dispõe de algumas latas vazias na linha, que aparecem na tela como quadrados azuis com uma
identificação genérica (img 1).

<figure>
    <img src="img/inicio.png"
    alt="imagem inicio"
    />
    <p align="center"><b>Img 1 - Início </b></p>
</figure>

&nbsp; &nbsp; Ao pressinar o botão "Atualizar", novas latas - agora não vazias - são produzidas e, em seguida,
colocadas na tela do usuário (img 2).

<figure>
    <img src="img/fim.png"
    alt="imagem fim"
    />
    <p align="center"><b>Img 2 - Após apertar no botão "Atualizar"</b></p>
</figure>


&nbsp; &nbsp; As latas produzidas podem possuir diversos conteúdos, chamados de opções.
As opções são escolhidas aleatoriamente para as latas da linha de produção e podem ser, por padrão:
milho, feijao, ervilha, sardinhas ou pessego.
Para impulsionar as vendas, cada opção dispõe de uma lata própria.
Por exemplo, as latas de milho possuem uma imagem de milho em sua embalagem junto do texto "milho".

## O que fazer na tarefa?

### Parte 1

&nbsp; &nbsp; Infelizmente, a fábrica parou de funcionar pois alguém retirou uma parte essencial da
função "coloca_latas_na_tela()" :///. Agora, quando se pressiona o botão "atualizar", nada acontece, deixando a tela somente com latas vazias,
como na img 1.
<br />
&nbsp; &nbsp; Assim, a primeira parte da tarefa é arrumar esse problema e fazer com que a fábrica volte a funcionar
que nem na img 2.

### Parte 2

&nbsp; &nbsp; Com a fábrica consertada, os administradores acharam interessante criar mais duas opções
para produção. Eles não têm preferência alguma para as opções e apenas desejam que elas sejam
produzidas da mesma maneira que as antigas.
<br />
&nbsp; &nbsp; Dessa forma, a segunda parte da tarefa é criar outras duas opções de enlatados. Você deve
ter que modificar tanto o objeto "fabrica" do "script.js" quanto criar algumas classes
no arquivo de estilos "style.css"
