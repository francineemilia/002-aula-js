function calcularPreco (nome,preco){
    let frete = 0;
    let valorFinal = 0;
    if(preco>=1 && preco<=2000){
        frete = 300;
    }else if(preco>=2001 && preco<=4000){
        frete = 450;
    }else{
        frete = 700;
    }
    valorFinal = preco + frete;
    console.log(`O produto ${nome} custa R$${preco}. Seu custo de envio é R$${frete}. Portanto, o preço final é R$${valorFinal}`);
}

calcularPreco ('Macbook', 2500);
calcularPreco ('Celular', 500);
calcularPreco ('Playstation', 4500);