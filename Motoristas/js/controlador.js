
let motoristasA;
let ordenesDisponiblesA;
let ordenesPorEntregarA;
let ordenesEntregadasA;
let motoristaActual;

const cargarMotoristas= async () => {
    const respuesta = await fetch('/motoristas', {
        method: "get"});
        motoristasA = await respuesta.json();
        console.log('Motoristas', motoristasA)
    }
cargarMotoristas();

const cargarOrdenesDisponibles= async () => {
    const respuesta = await fetch('/od', {
        method: "get"});
        ordenesDisponiblesA = await respuesta.json();
        console.log('ordenes d', ordenesDisponiblesA)
    }
cargarOrdenesDisponibles();

const cargarOrdenesPorEntregar= async () => {
    const respuesta = await fetch('/ope', {
        method: "get"});
        ordenesPorEntregarA = await respuesta.json();
        console.log('ordenes por e', ordenesPorEntregarA)
    }
    cargarOrdenesPorEntregar();

const cargarOrdenesEntregadas= async () => {
    const respuesta = await fetch('/oe', {
        method: "get"});
        ordenesEntregadasA = await respuesta.json();
        console.log('ordenes e', ordenesEntregadasA)
    }
    cargarOrdenesEntregadas();


function verificarUsuario(){
    let enteredUser= document.getElementById("user").value;
    let enteredPassword=document.getElementById("password").value;

motoristaActual = motoristasA.filter(user => user.usuario == enteredUser);
if(motoristaActual.length>0){
    if(motoristaActual[0].contrasena==enteredPassword){
        document.getElementById('sign-in-screen').classList.add('oculto');
            generarOrdenesDisponibles();
            generarOrdenesPorEntregar();
            generarOrdenesEntregadas();
            document.getElementById('ordenes-disponibles-screen').classList.remove('oculto');
            setProfileInfo(motoristaActual[0]);
            
    }else{
        alert("Usuario o contrasena incorrecta");}
}else{
    alert("Usuario o contrasena incorrecta");
} 
}

function setProfileInfo(user){
    document.getElementById("info-perfil").innerHTML= ``
    
    document.getElementById("info-perfil").innerHTML+=
    `<div class="imagen-perfil">
    <img src="./imagenes/conductor1.jpg" alt="">
    <h1>${user.usuario}</h1>
    </div>
    
    <div style="margin:5px" class="ajustes-perfil"><i class="fa-solid fa-gear"></i>Ajustes
    </div>
    <div style="margin:5px" onclick="backLogOut('profile-screen','sign-in-screen')" class="cerrar-sesion-perfil"><i class="fa-solid fa-arrow-right-from-bracket"></i>Cerrar sesion
    </div>`

}

function crearCuenta(){
    document.getElementById('sign-in-screen').classList.add('oculto');
    document.getElementById('new-acc').classList.remove('oculto');
}

function crearNuevaCuenta(){

let usuario= document.getElementById("newuser").value;
let contrasena=document.getElementById("newpsw").value;

    fetch('/newuser',{
        method: "post",
        body: JSON.stringify({usuario,
                           contrasena}),
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        }}).then(res => {
        alert("Usuario creado");

        console.log('Success:', res);

        document.getElementById('new-acc').classList.add('oculto');
        document.getElementById('sign-in-screen').classList.remove('oculto');
        document.getElementById("password").value="";
    })
    .catch(error => console.error('Error:', error))
    }


function generarOrdenesDisponibles(){
    let BtnDetalles=["1","2","3","4","5","6","7","8"];
    let cont=0;

    ordenesDisponiblesA.forEach(od => {
    document.getElementById('ordenesD').innerHTML+= `
            <div class="ordenD">
            <div><img style="height: 100px; width:100px"  src="./imagenes/c-logo-img.png" alt=""></div>
            <div class="ordenD-info">
                <div class="orderId">#${od._id}</div>
                <div class="local">${od.direccionRestaurante}</div>
                
                <div type="button" class="btn detalles" data-bs-toggle="modal" data-bs-target="modalOD${BtnDetalles[cont]}">Ver detalles</div>

                <div class="tomar"><h5>Tomar orden</h5></i></div>

            </div>
        </div>
        <div class="modal fade"  id="modalOD${BtnDetalles[cont]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel">${od.id}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div><img style="height: 200px; width:200px; margin-left: 60px"  src="" alt=""></div>
            <h4>Direccion a entregar: ${od.direccionCliente}
            <h4>Restaurante: ${od.direccionRestaurante}
            <h4>Metodo de pago: ${od.totalPedido}
            </div>
            <div class="modal-footer">
                <button style="height: 30px; width:80px; background-color: #2c2d4c; color: white; border: none; border-radius: 10px; font-size: 1.4rem; font-weight: bold;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
        </div>
    </div>`
    cont++;
})}


function generarOrdenesPorEntregar(){
    let BtnDetalles=["1","2","3","4","5","6","7","8"];
    let cont=0;
    ordenesPorEntregarA.forEach(op => {
    document.getElementById('ordenesPE').innerHTML+= `
        <div class="ordenPE">
        <div><img style="height: 100px; width:100px"  src="./imagenes/c-logo-img.png" alt=""></div>
        <div class="ordenPE-info">
            <div class="orderId">#${op._id}</div>
            <div class="local">${op.direccionRestaurante}</div>
                <div type="button" class="btn detalles" data-bs-toggle="modal" data-bs-target="modalOPE${BtnDetalles[cont]}">Ver detalles</div>
            <div class="estado"><h5>Estado<i class="fa-solid fa-angle-down"></i></h5></i></div>
        </div>
    </div>
    
    <div class="modal fade"  id="modalOPE${BtnDetalles[cont]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title" id="exampleModalLabel">${op.id}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div><img style="height: 200px; width:200px; margin-left: 60px"  src="" alt=""></div>
                <h4>Direccion a entregar: ${op.direccionCliente}
                <h4>Restaurante: ${op.direccionRestaurante}
                <h4>Metodo de pago: ${op.totalPedido}
                </div>
                <div class="modal-footer">
                    <button style="height: 30px; width:80px; background-color: #2c2d4c; color: white; border: none; border-radius: 10px; font-size: 1.4rem; font-weight: bold;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
        </div>`
        cont++;

})}

function generarOrdenesEntregadas(){
    let BtnDetalles=["1","2","3","4","5","6","7","8"];
    let cont=0;
    ordenesEntregadasA.forEach(oe => {
    document.getElementById('ordenesE').innerHTML+= `
        <div class="ordenE">
        <div><img style="height: 100px; width:100px"  src="./imagenes/c-logo-img.png" alt=""></div>
        <div class="ordenE-info">
            <div class="orderId">#${oe._id}</div>
            <div class="local">${oe.direccionRestaurante}</div>
            <div type="button" class="btn detalles" data-bs-toggle="modal" data-bs-target="yyy">Ver detalles</div>

            
        </div>
    </div>
    
    <div class="modal fade"  id="yyy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">${oe._id}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div><img style="height: 200px; width:200px; margin-left: 60px"  src="" alt=""></div>
        <h4>Direccion a entregar: ${oe.direccionCliente}
        <h4>Restaurante: ${oe.direccionRestaurante}
        <h4>Metodo de pago: ${oe.totalPedido}
        </div>
        <div class="modal-footer">
            <button style="height: 30px; width:80px; background-color: #2c2d4c; color: white; border: none; border-radius: 10px; font-size: 1.4rem; font-weight: bold;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
    </div>
    </div>
</div>`
cont++;
})}



function checkButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("ordenes-entregadas-screen").classList.remove('oculto');
}


function homeButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("ordenes-disponibles-screen").classList.remove('oculto');
}


function runningButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("ordenes-por-entregar-screen").classList.remove('oculto');

}

function profileButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("profile-screen").classList.remove('oculto');

} 

function back(hide,show){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById(show).classList.remove('oculto'); 
}