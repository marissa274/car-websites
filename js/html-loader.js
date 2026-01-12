const parts = [
  ["head","html/head.html"],
  ["header","html/header.html"],
  ["hero","html/hero.html"],
  ["featured","html/featured.html"],
  ["inventory","html/inventory.html"],
  ["why","html/why.html"],
  ["contact","html/contact.html"],
  ["footer","html/footer.html"],
  ["modal-details","html/modal-details.html"],
  ["modal-favorites","html/modal-favorites.html"]
];

parts.forEach(([id,file])=>{
  fetch(file).then(r=>r.text()).then(html=>{
    document.getElementById(id).innerHTML = html;
  });
});
