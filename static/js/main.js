/* ?? = if database is empty, an array is created */
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_product')) ?? []
const setLocalStorage = (dbProduct) => localStorage.setItem("db_product", JSON.stringify(dbProduct))

const openLoadingModal = () => {
    document.getElementById('total').style.opacity = '0'
    document.getElementById('modal-loading').classList.add('active')
}

const openMessageModal = (msg) => {
    document.getElementById('form-modal-message').innerHTML = msg
    document.getElementById('modal-message').classList.add('active')
}

const closeMessageModal = () => document.getElementById('modal-message').classList.remove('active')

const showTotal = () => {
    document.getElementById('total').style.opacity = '1'
    document.getElementById('total').innerHTML = `<h3>Total: ${total}</h3>`
}

const readProduct = () => getLocalStorage()

const clearTable = () => {
    console.log('clearTable')
    const rows = document.querySelectorAll('#tableProduct>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    console.log('updateTable')
    const dbProduct = readProduct()
    dbProduct.forEach(createRow)
    localStorage.clear()
}

const createRow = () => {
    console.log('createRow')
    //console.log('CODE: ' + code)
    if(code == ''){
        openMessageModal(`<h2><br>No Results Found!</h2>`)
    }else{
        var t = '';
        const newRow = document.createElement('tr')
        for(var i = 0; i < code.length; i++){
            var tr = '<tr>';
            tr += newRow.innerHTML = `
            <td>${code[i]}</td>
            <td>${title[i]}</td>
            <td>${category[i]}</td>
            <td>${price[i]}</td>
            `
            tr += '</tr>'
            t += tr
        }
        document.querySelector('#tableProduct>tbody').innerHTML += t;
        showTotal()
    }
    document.getElementById('product_name').setAttribute('value', localStorage.input)
}

const search_ad = () => {
    var input = document.getElementById('product_name').value
    //console.log(input)
    if(input != ''){
        clearTable()
        localStorage.clear()
        localStorage.setItem('input', input)
        console.log(input)
        openLoadingModal()
        const dbProduct = getLocalStorage()
        dbProduct.push(document.querySelector('#tableProduct>tbody').innerHTML)
        setLocalStorage(dbProduct)
    }
}

updateTable()

// Click events
document.getElementById('search').addEventListener('click', search_ad)
document.getElementById('close').addEventListener('click', closeMessageModal)