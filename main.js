let genera = document.querySelector('#genera')
let annulla = document.querySelector('#annulla')

genera.addEventListener('click',function(){
    let biglietto = document.querySelector('#Biglietto')
    biglietto.style.display='block'
    let genera = document.querySelector('#genera')
    genera.textContent='biglietto Generato'

    let nome = document.querySelector('#nome').value
    let cognome = document.querySelector('#cognome').value
    
    let Nome = document.querySelector('#Nome')
    let Cognome = document.querySelector('#Cognome')
    Nome.innerHTML=nome
    Cognome.innerHTML=cognome
    let posto = Math.floor(Math.random()*(1,50))
    let carrozza = Math.floor(Math.random()*(1,20))
    let binario = Math.floor(Math.random()*(1,21))
    let tratta = document.querySelector('#km').value
    let eta = document.querySelector('#eta').value
    console.log(eta);
    let km = 0.21
    let prezzoIntero = tratta * km;
        prezzoIntero = prezzoIntero.toFixed(2)
    let scontoGiovani = prezzoIntero / 100 *80;
        scontoGiovani= scontoGiovani.toFixed(2)
    let scontoAnziani = prezzoIntero / 100 * 60;
        scontoAnziani = scontoAnziani.toFixed(2)
    document.querySelector('#Tratta').innerHTML=tratta+''+'Km'
    document.querySelector('#Posto').innerHTML=posto
    document.querySelector('#Carrozza').innerHTML=carrozza
    document.querySelector('#Binario').innerHTML=binario
    document.querySelector('#Totale').innerHTML=' '+prezzoIntero
     
    if(nome==''||cognome==''||eta=='nulla'){
         
        alert('non puoi lasciare questo campo vuoto')
        location.reload()
        
    }
    if(eta=='young'){
        document.querySelector('#Sconto').innerHTML='Sconto Young del 20%'
        document.querySelector('#Scontato').innerHTML = scontoGiovani
    } else if(eta =='adult'){
        document.querySelector('#Sconto').innerHTML='Sconto non disponibile'
        document.querySelector('#Scontato').innerHTML = prezzoIntero
    } else if(eta == 'senior'){
        document.querySelector('#Sconto').innerHTML='Sconto senior del 40%'
        document.querySelector('#Scontato').innerHTML = scontoAnziani
    }

   if(tratta < 20 || tratta > 2000){
      alert('i km inseriti non son attuabili inserire una distanza tra 20 & 2000')
      location.reload()

   }
 
    
})


annulla.addEventListener('click',function(){
    let genera = document.querySelector('#genera')
    let biglietto = document.querySelector('#Biglietto')
    biglietto.style.display='none'
    genera.textContent='genera Biglietto'
    location.reload()
})
