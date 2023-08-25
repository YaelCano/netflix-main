const path = "config";

let construirEncabezado = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion =  document.querySelector("#myJsonSection");
    selecion.insertAdjacentHTML("beforeend",/*html*/`
    <h1 class="display-4 fw-normal text-body-emphasis">${res.section.titulo}</h1>
        <p class="fs-5 text-body-secondary">
            ${res.section.parrafo.map((value)=>/*html*/`
            ${value.image}${value.text}<br>`).join(" ")}
        </p>

    `);
}
/**Div contendores */ 
let construirDivContenerdor  = async()=>{
    let peticion = await fetch(`${parch}.json`);
    let res = await peticion.json();
    let myJsonCartas = document.querySelector("#myJsonCarta");
    myJsonCartas.insertAdjacentHTML("beforeend",/*html*/`
    <div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
        <h4 class="my-0 fw-normal">${item.title}</h4>
    </div>
    <div class="card-body">
        <h1 class="card-title pricing-card-title">${item.price}<small class="text-body-secondary fw-light"></small></h1>
        <ul class="list-unstyled mt-3 mb-4">
        ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <button type="button" class="w-100 btn btn-lg btn-danger">Get started</button>
    </div>
    </div>`);
}

construirEncabezado();