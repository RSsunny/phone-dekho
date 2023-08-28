const loadphone= async(phoneName='a',isShowall) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data=await res.json()
    const phone=data.data
    disolayPhone(phone,isShowall)   
}
const disolayPhone=(phones ,isShowall)=>{
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent=' '
    const moreBtn=document.getElementById('more-btn')
    if(phones.length>12 && !isShowall){
        moreBtn.classList.remove('hidden')
    }else{
        moreBtn.classList.add('hidden')
    }
    if(!isShowall){
        phones=phones.slice(0,12)
    }
    phones.forEach(phone=>{
        const div=document.createElement('div')
        div.classList=`card  bg-white py-5`
        div.innerHTML=`
                <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body"> 
                  <h2 class="text-2xl text-center">${phone.phone_name}</h2>
                  <p>There are many variations of passages of available, but the majority have suffered</p>
                  <div class="card-actions justify-center">
                  <button onclick="handelShowDetails('${phone.slug}')" class="btn btn-secondary">Show Details</button>
                  </div>
                </div>
        `
        phoneContainer.appendChild(div)
    });
    loadSpring(false)
}
const heandelSearch=(isShowall)=>{
    loadSpring(true)
    const inputFild=document.getElementById('input-fild')
    const inputValue=inputFild.value
    loadphone(inputValue ,isShowall)    
}
const loadSpring=(isloading)=>{
    const load=document.getElementById('load-spring')
    if(isloading){
        load.classList.remove('hidden')
    }else{
        load.classList.add('hidden')
    }
}
const showall=()=>{
    heandelSearch(true)
}
const handelShowDetails=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data=await res.json()
    showDetails(data)
}
const showDetails=(phone)=>{
    show_modal.showModal()
    const data=phone.data
    console.log(data);
    
    const showDetailsContainer=document.getElementById('show-details-container')
    showDetailsContainer.innerHTML=`
        <img src="${data.image}" alt="">
        <h1>${data.name}</h1>
        <p>${data.brand}</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <p><span>Storage : </span>${data.mainFeatures.storage
        }</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p> 
    
    `
}
loadphone('a')