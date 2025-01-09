import { pedido, sempedido } from "./string.js";
const modal_container = document.querySelector(".modal-container-cart");

function openModal(message = sempedido) {
  
  modal_container.classList.add("active");
  modal_container.addEventListener("click", (ev) => {
    if (ev.target.className.indexOf("modal-container") !== -1) {
      modal_container.classList.remove("active");
    }
  });
}

export function setupLinkCartEvent(link_cart) {
  link_cart.addEventListener("click", (ev) => {
    ev.preventDefault(); // Impede o comportamento padrão do link
    openModal(); // Chama a função corretamente
    console.log("O link foi clicado!");
  });
}
