// function calcularMedia(N1,N2,N3){
//     let resultado = (N1 + N2 + N3)/3;
//     return resultado;
// }
// function calcularExame(nota){
//     let resultado = 10 - nota;
//     return resultado;
// function calcularDelta(a, b, c){
//     let delta = b*b - (4*a*c); 
//     return delta; 
// }
// function calcularx1(a, b, delta){
//     let x1 = (-1*b + Math.sqrt(delta)) / 2 * a; 
//     return x1; 
// }
// function calcularx2(a,b,delta){
//     let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
//     return x2;
   
function pegarItem(item, valor){
        // alert("peguei o item" + item);
        if (item == "arroz") {
        console.log(item + " valor "+valor);
      }

}
$('#btcalcular').click(
    function(){
        produtos =
        [ 
            {"nome":"arroz", "valor" :10},
            {"nome":"arroz", "valor" :12},
            {"nome":"feijão", "valor" :10},
            {"nome":"ovo", "valor" :1}
        ]
        for (i = 0; i <=produtos.length-1 ; i++){
                          pegarItem (produtos[i].nome, produtos[i].valor)
            
                  }
    
    }
)

        // {"nome":"willian", "idade" :18}, 
        // {"nome":"Gabriel", "idade" :20}, 
        // {"nome":"Jean", "idade" :29}, 
        // {"nome":"Samoel", "idade" :23}, 
        // {"nome":"Diego", "idade" :21}, 
        // {"nome":"Adam", "idade" :21}, 

        // console.log(turma[3].nome);  samoel
        // console.log(turma[0].nome);  18
        // console.log(turma[5].nome);  21
        // console.log(turma[4].nome);  Diego
        // console.log(turma[2].nome);  Jean
        

    

// $('#btcalcular').click(
//     function(){

//         listaCompras = ["arroz" , "arroz", "feijão", "ovo"]
//         valorProduto = [10,        12,       8,        1];

//         for (i = 0; i <=listaCompras.length-1 ; i++){
//              pegarItem (listaCompras[i], valorProduto[i])

//         }
// }

// )

// $('#inputOla').click(
//     function(){
//         let notas = [9,7,5,4,8];
//         let nome  = "Maria";

//          for (i=0;i<notas.length;i++){
//            console.log(notas[i]);
//          }

        //  for (i=0;i<nome.length;i++){
        //     console.log(nome[i]);
        //  }

        // calculo =
        // {
        //     'N1':document.getElementById('inputA').value,
        //     'N2':document.getElementById('inputB').value,
        //     'N3':document.getElementById('inputC').value
        // }
        // let media = calcularMedia (parseInt(calculo.N1), parseInt(calculo.N2), parseInt(calculo.N3));
    
   
        // if 
        // (media >= 7) {
        // alert('Você foi aprovado' + media);
        //  } else {
        //     alert('Você esta de recuperação' + calcularExame(media));

           // let exame= 10-media;
           // alert (exame);

