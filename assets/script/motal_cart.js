export function setupLinkCartEvent(link_cart) {
  link_cart.addEventListener('click', (ev) => {
    ev.preventDefault(); // Impede o comportamento padrão do link
    console.log('O link foi clicado!');
  });
}