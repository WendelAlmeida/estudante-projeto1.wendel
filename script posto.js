function calcular() {
       
       var msg = document.getElementById("res")
       var gasosa = document.getElementById("gas")
       var etanol = document.getElementById("alc")
       do {
              var gas = Number.parseFloat(gasosa.value)
              var eta = Number.parseFloat(etanol.value)
              var res = gas / eta
              if (res > 0.7){
                     msg.innerHTML = ("É mais vantajoso abastecer com <strong>gasolina</stong>!")
              } else if (res < 0.7){
                     msg.innerHTML = ("É mais vantajoso abastecer com <strong>etanol</strong>!")
              } else {
                       msg.innerHTML = ("não faz diferença, abasteça com qualquer um <strong>combustível</strong>!")
                     }  
               
                     var continuar  = prompt("Você deseja realizar mais alguma pesquisa? s/n") 
              } while (continuar =="s")
              
                     alert("muito obrigado!") 
                         
       } 
       
       
       
       
       
    
 

    

