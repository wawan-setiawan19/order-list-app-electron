import data from "../data/dummy-data.js";
import { changePage, nextPage, previousPage } from "./pagination.js";
const loadPage = (page) => {
    const bodyContent = document.querySelector("#body-content");
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                bodyContent.innerHTML = xmlHttp.responseText;
                if (page === "login") getButtonLogin();
                if (page === "order") getOrder();
            }
        }
    };

    xmlHttp.open("GET", `pages/${page}.html`, true);
    xmlHttp.send();
};

const getButtonLogin = () => {
    const btnLogin = document.querySelector("#btnLogin");
    btnLogin.addEventListener("click", () => {
        login();
    });
};

const getOrder = () => {
    const foodElement = document.querySelector(".content");
    const dataFoodOrder = data.orders;
    let dummyHTML = "";
    dataFoodOrder.reverse().forEach((element) => {
        dummyHTML += `
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
    });
    foodElement.innerHTML = dummyHTML;
    getButtonPagination();
    changePage(1);
};

const getButtonOrder = () =>{
    const btnStatus = document.querySelector(".status-value");
    btnStatus.addEventListener("click", () => {
        confirmationOrder();
    });
}

const getButtonPagination = () => {
    const btnPrevious = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    btnNext.addEventListener("click",()=>{
        nextPage();
    })
    btnPrevious.addEventListener('click',()=>{
        previousPage();
    })
};

const confirmationOrder = () => {
    const popUpElement = document.querySelector(".pop-up");
    const btnYes = document.querySelector(".btn-yes");
    const btnNo = document.querySelector(".btn-no");

    popUpElement.style = "display:flex";
    btnYes.addEventListener("click", () => {
        document.querySelector(".status-value").innerHTML = "Dibuat";
        document.querySelector(".status-value").setAttribute("class", "");
        popUpElement.style = "display:none";
    });
    btnNo.addEventListener("click", () => {
        popUpElement.style = "display:none";
    });
};

const login = () => {
    loadPage("order");
    // const nameElement = document.querySelector("#name");
    // const passwordElement = document.querySelector("#password");
    // let username = nameElement.value;
    // let password = passwordElement.value;

    // data.users.forEach(element=>{
    //     if(element.username === username && element.password === password){
    //         loadPage('order')
    //     }else{
    //         console.log('error');
    //         nameElement.value = ''
    //         passwordElement.value = ''
    //     }
    // })
};

export { loadPage, getButtonLogin, getButtonOrder };
