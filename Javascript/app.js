const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 }
  ]
  
  const mais = cart.reduce ((accumulator, jogos) => {
  
      return `${accumulator}- ${jogos.name}\n`
  
  },'')
  