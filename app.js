//Kredit
const meblegdeyiseni = document.getElementById('meblegdeyiseni')
const mebleg = document.getElementById('mebleg')
function artirmebleg(){
    meblegdeyiseni.innerHTML = `${mebleg.value}  ₼`
    hesabla()
}

const muddetdeyiseni = document.getElementById('muddetdeyiseni')
const muddet = document.getElementById('muddet')
function artirmuddet(){
    muddetdeyiseni.innerHTML = `${muddet.value} ay`
    hesabla()
}

const faizdeyiseni = document.getElementById('faizdeyiseni')
const faiz = document.getElementById('faiz')
function artirfaiz(){
    faizdeyiseni.innerHTML = `${faiz.value} %`
    hesabla()
}
function hesabla(){
let kreditodenisi = document.getElementById('kreditodenisi')
let kredit = Math.round( +mebleg.value*(100 + +faiz.value)/100/ +muddet.value ) + ' ₼'
kreditodenisi.innerHTML = kredit
}


//click bg-white 
let azn = document.getElementById('azn')
let usd = document.getElementById('usd')
azn.addEventListener("click" , function(){
    azn.classList.add("bg-white" )
    usd.classList.remove("bg-white" )
})
usd.addEventListener("click" , function(){
    usd.classList.add("bg-white")
    azn.classList.remove("bg-white" )
})

let ay = document.getElementById('ay')
let il = document.getElementById('il')
ay.addEventListener("click" , function(){
    ay.classList.add("bg-white" )
    il.classList.remove("bg-white")
})
il.addEventListener("click" , function(){
    il.classList.add("bg-white")
    ay.classList.remove("bg-white")
})

//Depozit start
const deyisenmblg = document.getElementById('deyisenmblg')
const mblg = document.getElementById('mblg')
 function artirmblg(){
    deyisenmblg.innerHTML = `${mblg.value} ₼`
    depozithesabla()
 }

const qazanc = document.getElementById('qazanc')
const odenilenfaiz = document.getElementById('odenilenfaiz')

function depozithesabla(){
    let deyerqazanc = Math.round(+mblg.value * 8 / 100) + ' ₼'
    let herayode = Math.round(+mblg.value *8 / 100) / 2 + ' ₼'
    qazanc.innerHTML = deyerqazanc
    odenilenfaiz.innerHTML = herayode
}
let faizderecesi = document.getElementById('faizderecesi')
function three(){
    qazanc.innerHTML = `${Math.round(+mblg.value*0.3)} ₼`
    odenilenfaiz.innerHTML = `${Math.round(+mblg.value *0.03)} ₼`
    faizderecesi.innerHTML = '8 %'
}
function six(){
    qazanc.innerHTML = `${Math.round(+mblg.value*1.6)} ₼`
    odenilenfaiz.innerHTML = `${Math.round(+mblg.value * 0.06)} ₼`
    faizderecesi.innerHTML = '9 %'
}
function twelve(){
    qazanc.innerHTML = `${Math.round(+mblg.value * 0.12)} ₼`
    odenilenfaiz.innerHTML = `${Math.round(+mblg.value * 0.012)} ₼`
    faizderecesi.innerHTML = '9.5 %'
}
function eighteen(){
    qazanc.innerHTML = `${Math.round(+mblg.value*0.18)} ₼`
    odenilenfaiz.innerHTML = `${Math.round(+mblg.value*0.018)} ₼`
    faizderecesi.innerHTML = '10 %'
}
function twenty_four(){
    qazanc.innerHTML = `${Math.round(+mblg.value *0.24)} ₼`
    odenilenfaiz.innerHTML = `${Math.round(+mblg.value * 0.024)} ₼`
    faizderecesi.innerHTML = '10 %'
}

function thirty_six(){
    qazanc.innerHTML = `${Math.round(+mblg.value * 0.36)} ₼`
    odenilenfaiz.innerHTML = `${Math.round(+mblg.value * 0.036)}`
    faizderecesi.innerHTML = '8.5 %'
}

function heril(){
    odenilenfaiz.innerHTML =' 800 ₼'

}
function heray(){
    odenilenfaiz.innerHTML =' 66.67 ₼'

}
function usdchange(){
    let deyerqazanc2 = Math.round((+mblg.value * 8 / 100)*1.70) + ' $'
    qazanc.innerHTML = deyerqazanc2
    let herayode2 = Math.round((+mblg.value *8 / 100)*1.70) / 2 + ' $'
    odenilenfaiz.innerHTML = herayode2
    faizderecesi.innerHTML = '2 %'
   
}
function changeazn(){
    let deyerqazanc2 = Math.round((+mblg.value * 8 / 100)) +  ' ₼'
    qazanc.innerHTML = deyerqazanc2
    let herayode2 = Math.round((+mblg.value *8 / 100)) / 2 + ' ₼'
    odenilenfaiz.innerHTML = herayode2
    faizderecesi.innerHTML = '8 %'
}
function opencardkredit(){
    let cardkredit = document.getElementById('cardkredit')
    cardkredit.style.display = 'block'
    carddepozit.style.display = 'none'
    avtomobilkrediti.style.display = 'none'
    containeripoteka.style.display = 'none'

}
function opencarddepozit(){
    let carddepozit = document.getElementById('carddepozit')
    cardkredit.style.display = 'none'
    carddepozit.style.display = 'block'
    avtomobilkrediti.style.display = 'none'
    containeripoteka.style.display = 'none'


}

//avtomobil krediti
const elektrik = document.getElementById('elektrik')
const hibrid = document.getElementById('hibrid')
const diger = document.getElementById('diger')

elektrik.addEventListener("click" ,function(){
    elektrik.classList.add('bg-white')
    hibrid.classList.remove('bg-white')
    diger.classList.remove('bg-white')
})
hibrid.addEventListener("click" ,function(){
    hibrid.classList.add('bg-white')
    elektrik.classList.remove('bg-white')
    diger.classList.remove('bg-white')
})
diger.addEventListener("click" ,function(){
    diger.classList.add('bg-white')
    hibrid.classList.remove('bg-white')
    elektrik.classList.remove('bg-white')
})

let avtomobil = document.getElementById('avtomobil')
let deyisenavto = document.getElementById('deyisenavto')
 function artiravto(){
    deyisenavto.innerHTML = `${avtomobil.value}  ₼`
    hesablaqiymetleri()
 }
  let deyisenilkin = document.getElementById('deyisenilkin')
  let ilkin = document.getElementById('ilkin')
function artirilkin(){
    deyisenilkin.innerHTML = `${ilkin.value}  %`
    hesablaqiymetleri()
}
let avtoay = document.getElementById('avtoay')
let deyisenay = document.getElementById('deyisenay')
function artiray(){
    deyisenay.innerHTML = `${avtoay.value} ay`
    hesablaqiymetleri()
}
function hesablaqiymetleri(){
    let ayliqkredit = document.getElementById('ayliqkredit')
    let kreditmeblegi = document.getElementById('kreditmeblegi')
    let x =`${ Math.round(+avtomobil.value - (+avtomobil.value *(+ilkin.value)/100 )) }  ₼ `
    let xqiymeti =  Math.round(+avtomobil.value - (+avtomobil.value *(+ilkin.value)/100 )) 
    kreditmeblegi.innerHTML = x
    let y = `${Math.round(xqiymeti*0.0125*(1+0.0125)**(+avtoay.value)/(1+0.0125)**(+avtoay.value) - 1)} ₼`
    ayliqkredit.innerHTML = y
    let komissiya = document.getElementById('komissiya')
    let k = `${Math.round(Math.max(20, xqiymeti * 0.005 )) } ₼`
    komissiya.innerHTML = k
    let umumiodenis = document.getElementById('umumiodenis')
    let faizavto = document.getElementById('faizavto')
    let ayliqkredity  = Math.round(xqiymeti*0.0125*(1+0.0125)**(+avtoay.value)/(1+0.0125)**(+avtoay.value) - 1)
    let a = `${Math.round(ayliqkredity * (+avtoay.value))} ₼`
    umumiodenis.innerHTML = a
    ayliqkredit.innerHTML = a
    let b =`${Math.round( (+avtoay.value - 3) * (14 / 57) + 1)} %`
    faizavto.innerHTML = b

}
function elek(){
    ayliqkredit.innerHTML = `${Math.ceil(+avtomobil.value/(+ilkin.value)/100)*40} ₼`
    faizavto.innerHTML = '14 %'
    umumiodenis.innerHTML = `${Math.ceil(+avtomobil.value*10/200)} ₼`
}
function hib(){
    ayliqkredit.innerHTML = `${Math.ceil(+avtomobil.value/(+ilkin.value)/50)*20} ₼`
    faizavto.innerHTML = '14 .5 %'
    umumiodenis.innerHTML = `${Math.ceil(+avtomobil.value/100)} ₼`
}
function dgr(){
    ayliqkredit.innerHTML = `${Math.ceil(+avtomobil.value/5*(+ilkin.value)/50)} ₼`
    faizavto.innerHTML = '15 %'
    umumiodenis.innerHTML = `${Math.ceil(+avtomobil.value/300)} ₼`
}
let avtomobilkrediti = document.getElementById('avtomobilkrediti')
function openavtomobil(){
    avtomobilkrediti.style.display = 'block'
    cardkredit.style.display = 'none'
    carddepozit.style.display = 'none'
    containeripoteka.style.display = 'none'

}
//title's background 
const kd = document.getElementById('kd')
const dt = document.getElementById('dt')
const at = document.getElementById('at')
const pt = document.getElementById('pt')
kd.addEventListener("click", function(){
    kd.classList.add('bg-black', 'text-white')
    dt.classList.remove('bg-black' ,'text-white')
    at.classList.remove('bg-black','text-white')
    pt.classList.remove('bg-black','text-white')
})
dt.addEventListener("click", function(){
    dt.classList.add('bg-black', 'text-white')
    kd.classList.remove('bg-black','text-white')
    at.classList.remove('bg-black','text-white')
    pt.classList.remove('bg-black','text-white')
})
at.addEventListener("click", function(){
    at.classList.add('bg-black', 'text-white')
    dt.classList.remove('bg-black','text-white')
    kd.classList.remove('bg-black','text-white')
    pt.classList.remove('bg-black','text-white')
})
pt.addEventListener("click", function(){
    pt.classList.add('bg-black', 'text-white')
    dt.classList.remove('bg-black','text-white')
    at.classList.remove('bg-black','text-white')
    kd.classList.remove('bg-black','text-white')
})
//Ipoteka
let containeripoteka = document.getElementById('containeripoteka')
function openipoteka(){
    containeripoteka.style.display = 'block'
  cardkredit.style.display = 'none'
    carddepozit.style.display = 'none'
    avtomobilkrediti.style.display = 'none'
}

let ipodeyiseni = document.getElementById('ipodeyiseni')
let ipotekakredit = document.getElementById('ipotekakredit')
function ipoteka(){
    ipodeyiseni.innerHTML = `${ipotekakredit.value} ₼`
    hesablaipoteka()
}

let deyisenvaxt = document.getElementById('deyisenvaxt')
let vaxt = document.getElementById('vaxt')
function vaxtartir(){
    deyisenvaxt.innerHTML =`${ vaxt.value} il`
    hesablaipoteka()
}

function hesablaipoteka(){
    let odenis = document.getElementById('odenis')
    let ayliqodenis = `${Math.round(+ipotekakredit.value * (+vaxt.value) / 100)} ₼`
    odenis.innerHTML = ayliqodenis
    let kreditmeblegipoteka = document.getElementById('kreditmeblegipoteka')
    kreditmeblegipoteka.innerHTML = `${+ipotekakredit.value} ₼`
}

let faizipoteka = document.getElementById('faizipoteka')
function per4(){
    faizipoteka.innerHTML = '4%'
    odenis.innerHTML = `${Math.round(+ipotekakredit.value * 0.04)} ₼`
}
function per7(){
    faizipoteka.innerHTML = '7%'
    odenis.innerHTML = `${Math.round(+ipotekakredit.value * 0.07)} ₼`
}
function per8(){
    faizipoteka.innerHTML = '8%'
    odenis.innerHTML = `${Math.round(+ipotekakredit.value * 0.08)} ₼`
}
function per11(){
    faizipoteka.innerHTML = '11%'
    odenis.innerHTML = `${Math.round(+ipotekakredit.value * 0.11)} ₼`
}
function per12(){
    faizipoteka.innerHTML = '12%'
    odenis.innerHTML = `${Math.round(+ipotekakredit.value * 0.12)} ₼`
}
function per13(){
    faizipoteka.innerHTML = '13%'
    odenis.innerHTML = `${Math.round(+ipotekakredit.value * 0.13)} ₼`
}