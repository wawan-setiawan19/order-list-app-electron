import data from "../data/dummy-data.js";
import { getButtonOrder } from "./routes.js";
let currentPage = 1;
const dataPerPage = 3;

const numberOfPage = () =>{
    return Math.ceil(data.orders.length / dataPerPage);
}

const previousPage = ()=>{
    if(currentPage > 1){
        currentPage--;
        changePage(currentPage);
    }
}

const nextPage = ()=>{
    if(currentPage < numberOfPage()){
        currentPage++;
        changePage(currentPage);
    }
}

const changePage = (page)=>{
    const btnPrevious = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    let orderElement = document.querySelector('.content');
    const dataFoodOrder = data.orders;
    console.log(dataFoodOrder);

    if(page < 1) page = 1
    if(page>numberOfPage())page=numberOfPage();

    orderElement.innerHTML = '';
    for (let index = (page-1)*dataPerPage; index < (page*dataPerPage) && index < dataFoodOrder.length; index++) {
        const element = dataFoodOrder[index];
        orderElement.innerHTML += `
            <div class="content-container">
                <div class="food-container">
                    <img class="food-img" src="./assets/${element.detail.food.picture}" alt="">
                    <div class="food-name">${element.detail.food.foodName}</div>
                </div>
                <div class="detail-container">
                    <table>
                        <tr>
                            <td class="property">Room</td>
                            <td class="property">:</td>
                            <td class="value">${element.detail.room}</td>
                        </tr>
                        <tr>
                            <td class="property">Jumlah</td>
                            <td class="property">:</td>
                            <td class="value">${element.detail.qty}</td>
                        </tr>
                        <tr>
                            <td class="property">Modifier</td>
                            <td class="property">:</td>
                            <td class="value">${element.detail.Modifier}</td>
                        </tr>
                        <tr>
                            <td class="property">Notes</td>
                            <td class="property">:</td>
                            <td class="value">${element.detail.Notes}</td>
                        </tr>
                    </table>
                </div>
                <div class="status-container">
                    <div class="status">Status: <span class="${
                        element.status === "Diterima" ? "status-value" : ""
                    }">${element.status}</span></div>
                    <div class="time">${element.time}</div>
                </div>
            </div>
        `;        
    }
    getButtonOrder();
}

export {changePage, nextPage, previousPage}