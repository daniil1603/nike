const hamburguer = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const navButtons = document.querySelector(".nav__buttons");
const navLogo = document.querySelector(".nav__logo");
const navLinksAll = document.querySelectorAll(".nav__links a");
const navButtonsAll = document.querySelectorAll(".nav__buttons button");
const categoriasButtonsAll = document.querySelectorAll(".categorias__buttons button");
let dataStoreSneakersCategorias = [
    {
        id: 0,
        img: "0",
        name: "Luka 1",
        description: "Zapatillas de Baloncesto",
        price: 240,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "women",
        buttonClass: "sneakers-card__button-add"
    },

    {
        id: 1,
        img: "1",
        name: "Phantom GX Pro",
        description: "Botas de fútbol para jugar en terreno duro",
        price: 180,
        rating: 4.2,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "boots",
        buttonClass: "sneakers-card__button-add"
    },

    {
        id: 2,
        img: "2",
        name: "Nike Air Max Plus",
        description: "Zapatillas deportivas versátiles para hombres.",
        price: 240,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "men",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 3,
        img: "3",
        name: "Lebron XXI 'FreshWater'",
        description: "Zapatillas de baloncesto",
        price: 210,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "women",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 4,
        img: "4",
        name: "Nike Air Max 270",
        description: "Zapatillas universales para hombres",
        price: 210,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "men",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 5,
        img: "5",
        name: "Phantom GX Pro",
        description: "Tacos bajos para césped artificial",
        price: 160,
        rating: 4.0,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "boots",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 6,
        img: "6",
        name: "Phantom GX Academy",
        description: "Botas de corte bajo para terrenos blandos",
        price: 79,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "boots",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 7,
        img: "7",
        name: "Luka 2 ‘Trick Shot’",
        description: "Zapatillas de baloncesto",
        price: 230,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "men",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 8,
        img: "8",
        name: "Mercurial Superfly",
        description: "Botas de fútbol para jugar en terreno firme",
        price: 210,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "boots",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 9,
        img: "10",
        name: "Mercurial Superfly",
        description: "Botas de fútbol para jugar en terreno firme",
        price: 210,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 9,
        img: "9",
        name: "Zion 2",
        description: "Zapatillas de baloncesto",
        price: 210,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "men",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 10,
        img: "10",
        name: "Pegasus Trail 4",
        description: "Hidroprofilaxis en mujeres con diabetes mellitus",
        price: 290,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "women",
        buttonClass: "sneakers-card__button-add"
    },
    {
        id: 11,
        img: "11",
        name: "Alphafly 3 Proto",
        description: "Zapatillas de carrera para mujer",
        price: 210,
        rating: 4.9,
        buttonState: "Añadir a la cesta",
        favourites: false,
        categoria: "women",
        buttonClass: "sneakers-card__button-add"
    },
]



hamburguer.onclick = function () {
    navLinks.classList.toggle("show");
    navButtons.classList.toggle("show");
    hamburguer.classList.toggle("active");
    navLogo.classList.toggle("active");
}

navLogo.onclick = function () {
    navLinks.classList.remove("show");
    navButtons.classList.remove("show");
    hamburguer.classList.remove("active");
    navLogo.classList.remove("active");
}

for (let i = 0; i < navLinksAll.length; i++) {
    navLinksAll[i].onclick = function () {
        navLinks.classList.remove("show");
        navButtons.classList.remove("show");
        hamburguer.classList.remove("active");
        navLogo.classList.remove("active");
    }
}

for (let i = 0; i < navButtonsAll.length; i++) {
    navButtonsAll[i].onclick = function () {
        navLinks.classList.remove("show");
        navButtons.classList.remove("show");
        hamburguer.classList.remove("active");
        navLogo.classList.remove("active");
    }
}

for (let i = 0; i < categoriasButtonsAll.length; i++) {
    categoriasButtonsAll[i].onclick = function () {
        for (let j = 0; j < categoriasButtonsAll.length; j++) {
            categoriasButtonsAll[j].classList.remove("categorias__button_active");
        }
        categoriasButtonsAll[i].classList.add("categorias__button_active");
        const buttonId = categoriasButtonsAll[i].getAttribute('id')
        categoriaCartRender(buttonId)
    }
}


function categoriaCartRender(categoria) {

    const categoriaListDiv = document.querySelector(".sneakers-list");
    categoriaListDiv.innerHTML = "";

    for (let i = 0; i < dataStoreSneakersCategorias.length; i++) {
        const cardInfo = dataStoreSneakersCategorias[i]
        if (categoria == "all" || categoria == cardInfo.categoria) {
            const categoriaCartDiv = document.createElement("div");
            console.log(cardInfo)
            categoriaCartDiv.classList.add("sneakers-list__item", "sneakers-card");
            categoriaCartDiv.setAttribute("id", cardInfo.id)
            categoriaCartDiv.innerHTML = `
            <div class="sneakers-card__img">
                <img src="./img/Categorias/${cardInfo.img}.png" alt="">
            </div>
            <div class="sneakers-card__info">
                <div class="sneakers-card__text">
                    <div class="sneakers-card__name">
                        <h3>
                            ${cardInfo.name}
                        </h3>
                        <span>
                            ${cardInfo.price}$
                        </span>
                    </div>
                    <p>
                        ${cardInfo.description}
                    </p>
                    <div class="rating sneakers-card__rating">
                        <span>${cardInfo.rating}</span>
                        <hr>
                        <div class="rating__stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <button class="${cardInfo.buttonClass}">
                    ${cardInfo.buttonState}
                </button>
            </div>
        `
            const buttonAddToCart = categoriaCartDiv.querySelector(".sneakers-card__button-add");
            buttonAddToCart.addEventListener("click", () => {
                if (cardInfo.buttonState == "Añadir a la cesta") {
                    buttonAddToCart.innerHTML = "Ya esta en la cesta";
                    cardInfo.buttonState = "Ya esta en la cesta";
                    buttonAddToCart.classList.add("button_active")
                    cardInfo.buttonClass = "sneakers-card__button-add button_active"
                }
                else {
                    buttonAddToCart.innerHTML = "Añadir a la cesta";
                    cardInfo.buttonState = "Añadir a la cesta";
                    buttonAddToCart.classList.remove("button_active")
                    cardInfo.buttonClass = "sneakers-card__button-add"

                }

            })
            categoriaListDiv.appendChild(categoriaCartDiv);
        }

    }
}

categoriaCartRender("all")

