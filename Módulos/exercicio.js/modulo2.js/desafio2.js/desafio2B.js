const carrinho = [
    { produto: "Notebook", preco: 4500, quantidade: 1 },
    { produto: "Mouse", preco: 120, quantidade: 2 },
    { produto: "Teclado", preco: 280, quantidade: 1 },
    { produto: "Monitor", preco: 1800, quantidade: 2 },
    { produto: "Headset", preco: 350, quantidade: 1 }
  ];
  
  let totalGeral = 0;
  let itemMaisCaro = carrinho[0];
  
  // Percorre o carrinho
  for (const item of carrinho) {
  
    console.log(`${item.produto} x${item.quantidade} — R$ ${item.preco.toFixed(2)}`);
  
    // Subtotal
    const subtotal = item.preco * item.quantidade;
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
  
    // Soma ao total
    totalGeral += subtotal;
  
    // Verifica o item mais caro
    if (item.preco > itemMaisCaro.preco) {
      itemMaisCaro = item;
    }
  
    console.log("-------------------------");
  }
  
  // Total geral
  console.log(`Total da compra: R$ ${totalGeral.toFixed(2)}`);
  
  // Item mais caro
  console.log(`Item mais caro: ${itemMaisCaro.produto} - R$ ${itemMaisCaro.preco.toFixed(2)}`);
  
  // Desconto
  if (totalGeral > 5000) {
    const desconto = totalGeral * 0.10;
    const valorFinal = totalGeral - desconto;
  
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
  } else {
    console.log("Não há desconto.");
  }