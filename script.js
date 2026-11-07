// ===== CATÁLOGO =====
// Formato: [marca, nombre, precio]. Precio null = "Consultar precio".
// Las imágenes están en img/d01.jpg… (diseñador) e img/a01.jpg… (árabes), en el mismo orden.
const disenador = [
  ["Dior", "Sauvage EDT 100ml", 550000],
  ["Yves Saint Laurent", "Y Eau De Parfum", 620000],
  ["Carolina Herrera", "212 Men NYC 100ml", 390000],
  ["Giorgio Armani", "Acqua Di Gio Pour Homme", 380000],
  ["Giorgio Armani", "Acqua di Gio Profondo Parfum", 640000],
  ["Jean Paul Gaultier", "Le Beau Paradise Garden", null],
  ["Versace", "Eros Eau De Parfum", 320000],
  ["Montale", "Arabians Tonka", 479000],
  ["Jean Paul Gaultier", "Le Male Elixir Absolu", null],
  ["Azzaro", "The Most Wanted Parfum", 470000],
  ["Chanel", "Bleu de Chanel Parfum", null],
  ["Paco Rabanne", "Invictus Victory", 440000],
  ["Paco Rabanne", "Phantom Parfum", null],
  ["Emporio Armani", "Stronger With You Intensely", null],
  ["Emporio Armani", "Stronger With You Absolutely", null],
  ["Carolina Herrera", "212 VIP Black", null],
  ["Viktor & Rolf", "Spicebomb Infrared EDP", null],
  ["Lacoste", "Essential", null],
  ["Dolce & Gabbana", "Light Blue Summer Vibes Pour Homme", null],
  ["Versace", "Pour Homme", 250000],
  ["Valentino", "Uomo Born in Roma", 550000],
  ["Dior", "Homme Intense", 650000],
  ["Montblanc", "Explorer Platinum", 320000],
  ["Valentino", "Uomo Born In Roma Intense", null],
  ["Jean Paul Gaultier", "Le Beau Le Parfum", null],
  ["Montblanc", "Starwalker", null],
  ["Versace", "Dylan Blue Pour Homme", null],
  ["Azzaro", "The Most Wanted EDP", null],
  ["Calvin Klein", "CK One", null],
  ["Paco Rabanne", "Invictus Victory Elixir", null],
  ["Montblanc", "Legend Spirit", null],
  ["Yves Saint Laurent", "MYSLF", null],
  ["Paco Rabanne", "Invictus Parfum", null],
  ["Yves Saint Laurent", "MYSLF Le Parfum", null],
  ["Dolce & Gabbana", "Light Blue Pour Homme", null],
  ["Jean Paul Gaultier", "Scandal Pour Homme", null],
  ["Paco Rabanne", "Invictus", null],
  ["Carolina Herrera", "Bad Boy Le Parfum", null],
  ["Yves Saint Laurent", "Y EDP Intense", null],
  ["Hugo Boss", "HUGO Man", null],
  ["Paco Rabanne", "Phantom", null],
  ["Paco Rabanne", "One Million", null],
  ["Paco Rabanne", "One Million Lucky", null],
  ["Paco Rabanne", "One Million Royal", null],
  ["Carolina Herrera", "Bad Boy Cobalt", null],
  ["Carolina Herrera", "Bad Boy", null],
  ["Carolina Herrera", "CH Men", null],
  ["Dolce & Gabbana", "K EDT", null],
  ["Dolce & Gabbana", "K EDP", null],
  ["Nautica", "Voyage", null],
  ["Versace", "Man Eau Fraiche", null],
  ["Paco Rabanne", "Invictus Platinum", null],
  ["Giorgio Armani", "Acqua di Gio Parfum", null],
  ["Jo Milano", "Game of Spades Win", null],
  ["Viktor & Rolf", "Spicebomb", null],
  ["Versace", "Eros Flame", null],
  ["Versace", "Eros Energy", null],
  ["Valentino", "Uomo Born in Roma", null],
  ["Valentino", "Uomo Intense", null],
  ["Moschino", "Toy Boy", null],
  ["Moschino", "Toy Boy 2", null],
  ["Montblanc", "Explorer", null],
  ["Montblanc", "Legend EDT", null],
  ["Montblanc", "Legend Red", null],
  ["Montblanc", "Emblem", null],
  ["Montblanc", "Legend Night", null],
  ["Montblanc", "Explorer Ultra Blue", null],
  ["Calvin Klein", "CK Be", null],
];

const arabes = [
  ["Lattafa", "Badee al Oud Oud For Glory", null],
  ["Afnan", "9 AM Dive", null],
  ["Afnan", "9 PM Masculina", null],
  ["Bharara", "King", null],
  ["Armaf", "Club de Nuit Iconic", null],
  ["Armaf", "Club De Nuit Intense Man EDT", null],
  ["Al Haramain", "Amber Oud Gold Edition 100ml", null],
  ["Rasasi", "Hawas For Him", null],
  ["Rasasi", "Hawas Ice", null],
  ["Lattafa", "Al Noble Ameer", null],
  ["Lattafa", "Pride Al Qiam Gold", null],
  ["Lattafa", "Asad", null],
  ["Lattafa", "Fakhar Black", null],
  ["Lattafa", "Khamrah", null],
  ["Lattafa", "Khamrah Qahwa", null],
  ["Armaf", "Odyssey Mandarin Sky", null],
  ["Emper", "Stallion 53", null],
  ["Lattafa", "Asad Elixir", null],
  ["French Avenue", "Vulcan Feu", null],
  ["Fragrance World", "Liquid Brun", null],
  ["Armaf", "Club De Nuit Urban Man Elixir", null],
  ["Al Haramain", "Amber Oud Aqua Dubai", null],
  ["Dumont", "Nitro Red", null],
  ["Lattafa", "Pride Art of Universe", null],
  ["Armaf", "Club de Nuit Precieux 1", null],
  ["Afnan", "Supremacy Collector's Edition", null],
  ["Armaf", "Odyssey Aqua Edition", null],
  ["Lattafa", "Asad Bourbon", null],
  ["Rasasi", "Hawas Fire", null],
  ["Afnan", "9 PM Night Out", null],
  ["Armaf", "Odyssey Mandarin Sky Elixir", null],
  ["Dumont", "Nitro Red Intensely", null],
  ["Maison Alhambra", "Jean Lowe Noir", null],
  ["Armaf", "Eter Arabian Sky", null],
  ["Maison Alhambra", "Jean Lowe Vibe", null],
  ["Arabiyat Prestige", "Marwa", null],
  ["Fragrance World", "Aether Extrait by French Avenue", null],
  ["Rasasi", "Hawas Tropical", null],
  ["Rayhaan", "Elixir Eau de Parfum", null],
  ["Afnan", "9 PM Rebel", null],
  ["Rayhaan", "Aquatica", null],
  ["Lattafa", "Pride Vintage Radio", null],
  ["Rasasi", "Hawas Kobra", null],
  ["Rasasi", "Hawas Black", null],
  ["Lattafa", "His Confession", null],
  ["Lattafa", "The Kingdom Pour Homme", null],
  ["Khadlaj", "Island", null],
  ["Rasasi", "Hawas Malibu", null],
  ["Rayhaan", "Italia", null],
  ["Maison Alhambra", "Jean Lowe Azure", null],
  ["Armaf", "Dunescape", null],
  ["Rayhaan", "Tropical Vibe", null],
  ["Lattafa", "Khamrah Waha", null],
  ["Rayhaan", "Crimson", null],
  ["Riiffs", "Freeze", null],
  ["Rasasi", "Hawas Verde", null],
  ["Rayhaan", "Ocean Rush", null],
  ["Armaf", "Tag Him Uomo Rosso", null],
  ["Armaf", "Odyssey Nexus", null],
  ["Riiffs", "Freeze In Flames", null],
];

const pad = (n) => String(n).padStart(2, "0");
const perfumes = [
  ...disenador.map(([marca, nombre, precio], i) => ({ id: "d" + pad(i + 1), cat: "disenador", marca, nombre, precio })),
  ...arabes.map(([marca, nombre, precio], i) => ({ id: "a" + pad(i + 1), cat: "arabes", marca, nombre, precio })),
];
const byId = Object.fromEntries(perfumes.map((p) => [p.id, p]));

// ===== UTILIDADES =====
const $ = (s) => document.querySelector(s);
const fmt = (n) => "$" + n.toLocaleString("es-CO");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

let categoria = "disenador";
let carrito = [];
try { carrito = (JSON.parse(localStorage.getItem("leshoms-cart")) || []).filter((it) => byId[it.id]); } catch { carrito = []; }

$("#countD").textContent = `(${disenador.length})`;
$("#countA").textContent = `(${arabes.length})`;

// ===== CATÁLOGO =====
function render() {
  const q = norm($("#search").value.trim());
  const lista = perfumes.filter((p) => p.cat === categoria && (!q || norm(p.marca + " " + p.nombre).includes(q)));
  $("#grid").innerHTML = lista.map((p) => `
    <article class="card">
      <div class="art"><img src="img/${p.id}.jpg" alt="${esc(p.marca + " " + p.nombre)}" loading="lazy"></div>
      <div class="card-body">
        <span class="brand">${esc(p.marca)}</span>
        <h3>${esc(p.nombre)}</h3>
        <div class="card-foot">
          ${p.precio
            ? `<span class="price">${fmt(p.precio)}</span><button class="add" data-id="${p.id}">Añadir</button>`
            : `<span class="price ask">Precio a consultar</span><button class="add" data-ask="${p.id}">Consultar</button>`}
        </div>
      </div>
    </article>`).join("");
  $("#emptySearch").hidden = lista.length > 0;
}

function setCategoria(cat) {
  categoria = cat;
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.cat === cat));
  render();
}

// ===== CARRITO =====
function guardar() { try { localStorage.setItem("leshoms-cart", JSON.stringify(carrito)); } catch {} }

function renderCart() {
  const items = $("#cartItems");
  items.innerHTML = carrito.length
    ? carrito.map((it) => {
        const p = byId[it.id];
        return `<li>
          <img src="img/${p.id}.jpg" alt="">
          <div class="info"><strong>${esc(p.marca)}</strong><br>${esc(p.nombre)}<br><small>${fmt(p.precio)}</small></div>
          <div class="qty">
            <button data-act="-" data-id="${p.id}" aria-label="Quitar uno">−</button>${it.qty}
            <button data-act="+" data-id="${p.id}" aria-label="Añadir uno">+</button>
          </div>
        </li>`;
      }).join("")
    : `<li class="empty">Tu pedido está vacío.</li>`;
  const total = carrito.reduce((s, it) => s + byId[it.id].precio * it.qty, 0);
  $("#cartTotal").textContent = fmt(total);
  $("#cartCount").textContent = carrito.reduce((s, it) => s + it.qty, 0);
  guardar();
}

function cambiar(id, delta) {
  const it = carrito.find((x) => x.id === id);
  if (it) it.qty += delta; else if (delta > 0) carrito.push({ id, qty: 1 });
  carrito = carrito.filter((x) => x.qty > 0);
  renderCart();
}

function toggleCart(open) {
  $("#cart").classList.toggle("open", open);
  $("#overlay").classList.toggle("show", open);
  $("#cart").setAttribute("aria-hidden", String(!open));
}

function irAContacto(texto) {
  $("#msg").value = texto;
  $("#contacto").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => $("#msg").focus({ preventScroll: true }), 600);
}

// ===== EVENTOS =====
$("#grid").addEventListener("click", (e) => {
  const b = e.target.closest(".add");
  if (!b) return;
  if (b.dataset.ask) {
    const p = byId[b.dataset.ask];
    irAContacto(`Hola, quisiera saber el precio de ${p.marca} ${p.nombre}.`);
    return;
  }
  cambiar(b.dataset.id, 1);
  b.textContent = "✓ Añadido";
  setTimeout(() => (b.textContent = "Añadir"), 1000);
});

$("#cartItems").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-act]");
  if (b) cambiar(b.dataset.id, b.dataset.act === "+" ? 1 : -1);
});

document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => setCategoria(t.dataset.cat)));
document.querySelectorAll("[data-go]").forEach((a) => a.addEventListener("click", () => setCategoria(a.dataset.go)));
$("#search").addEventListener("input", render);

$("#cartBtn").onclick = () => toggleCart(true);
$("#closeCart").onclick = () => toggleCart(false);
$("#overlay").onclick = () => toggleCart(false);
$("#checkout").onclick = () => {
  if (!carrito.length) return;
  const lineas = carrito.map((it) => `- ${it.qty} x ${byId[it.id].marca} ${byId[it.id].nombre} (${fmt(byId[it.id].precio)})`);
  const total = carrito.reduce((s, it) => s + byId[it.id].precio * it.qty, 0);
  toggleCart(false);
  irAContacto(`Hola, quiero hacer este pedido:\n${lineas.join("\n")}\nTotal: ${fmt(total)}`);
};

$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  $("#formMsg").hidden = false;
});

$("#year").textContent = new Date().getFullYear();
render();
renderCart();
