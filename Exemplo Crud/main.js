'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


    //APENAS p/ TESTES
const tempClient = {
    nome: "Fernando",
    email: "Fernando@gmail.com",
    celular: "49997452365",
    cidade: "S. Paulo"
}



const getLocalStorage = () => JSON.parse(localStorage.getItem('bd__Client')) ?? []//pega oq tem no bd transformando em obj json
const setLocalStorage = (bd_Client) => localStorage.setItem("bd__Client", JSON.stringify(bd_Client)) //manda para o BD o BD-client

//crud - create read update delete


//CRUD ---- DELETE
const deletar = (index) => {
    const bdClient = readClient()
    bdClient.splice(index,1)
    setLocalStorage(bdClient)
}

//CRUD ---- UPDATE
const updateClient = (index, client) => {
    const bdClient = readClient()
    bdClient[index] = client
    setLocalStorage(bdClient)
}
//CRUD ----- READ
const readClient = () => getLocalStorage();


//CRUD --- CREATE  
const createClient = (client) => {
    const bdClient = getLocalStorage()
    bdClient.push (client) //adiciona o novo cliente na array
    setLocalStorage(bdClient)
    console.log(bdClient);
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity(); //verifica se as regras minimas do HTML estão sendo compridas

}

// interaçaõ com o layout
const saveClient = () => {
    if (isValidFields()) {
        console.log("cadastrando")
    }
}


document.getElementById('salvar').addEventListener('click', saveClient)

document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

