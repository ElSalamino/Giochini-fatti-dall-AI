// =========================
// CONFIG
// =========================
const TAX_RATE_ON_CASH = 0.02;
const STARTING_CASH = 10000;

const MOVE_RATE = {
  Edile: [-3, 3],
  Guerra: [-10, 10],
  Navale: [-25, 25],
  Turismo: [-12, 10],
  Ristoranti: [-1, 2],
  Truffe: [-10, 12],
  Casuale: [-100, 100],
};



const PLANTS = {
  Tarassaco: { sell: 25, fruit: 5 },
  // esempi
  Carota:    { sell: 60, fruit: 8 },
  Patata:    { sell: 45, fruit: 6 },
  Zucca:     { sell: 120, fruit: 15 },
  Pomodoro:    { sell: 60, fruit: 8 },
  Sasso:    { sell: 1500, fruit: 3 },
  Albero:     { sell: 120, fruit: 235 },
  Fieno:    { sell: 60, fruit: 8 },
  Uva:    { sell: 45, fruit: 60 },
  More:     { sell: 120, fruit: 45 },
  Erbaccia:    { sell: 10, fruit: 1 },
  Piselli:    { sell: 105, fruit: 5 },
  Peperoncino:     { sell: 190, fruit: 15 },
  
};
const GROWTH_YEARS = {
  Tarassaco: 1,
  // esempi
  Carota:    1,
  Patata:    2,
  Zucca:     3,
  Pomodoro:    1,
  Sasso:    20,
  Albero:     5,
  Fieno:    1,
  Uva:    4,
  More:     2,
  Erbaccia:    3,
  Piselli:    2,
  Peperoncino:     5,
  
};
///​
const PLANT_EMOJI = {
  Tarassaco: "​🥬",
  Carota:    "🥕",
  Patata:    "🥔",
  Zucca:     "🎃​",
  Pomodoro:    "🍅",
  Sasso:    "🪨​",
  Albero:     "🌳",
  Fieno:    "🌾",
  Uva:    "🍇",
  More:     "🫐",
  Erbaccia:    "🌿",
  Piselli:    "🫛​",
  Peperoncino:     "🌶️",
  
};

const NEWS_POOL = [
  {
    comparsa: 0.8,
    Testo: "Scoppia una guerra al sud",
    Effetti: { Guerra: [1, 3], Navale: [1, 2], Turismo: [-3, -1] },
    Durata: 3,
  },
  {
    comparsa: 0.5,
    Testo: "Nuove rotte commerciali internazionali",
    Effetti: { Navale: [2, 4], Edile: [0, 1], Truffe: [1, 2] },
    Durata: 2,
  },
  {
    comparsa: 0.4,
    Testo: "Crisi energetica globale",
    Effetti: { Edile: [-2, -1], Ristoranti: [-1, -1], Guerra: [1, 2] },
    Durata: 3,
  },
  {
    comparsa: 0.1,
    Testo: "Crescita economica aiuta gli abitanti",
    Effetti: { Edile: [1, 1], Ristoranti: [0, 1], Guerra: [-1, -2], Turismo: [3, 0], Truffe: [8, -2] },
    Durata: 1,
  },
  {
    comparsa: 0.6,
    Testo: "Repubblica si riforma",
    Effetti: { Casuale: [-1, 1] },
    Durata: 1,
  },
  {
    comparsa: 0.7,
    Testo: "Riintegro delle spiagge sui comuni costieri",
    Effetti: { Turismo: [1, 2], Truffe: [-1, -8] },
    Durata: 3,
  },
  {
    comparsa: 0.5,
    Testo: "Nuovi materiali trovati in medio oriente",
    Effetti: { Guerra: [-2, 6], Navale: [3, 6], Turismo: [-5, -5], Truffe: [-18, -2] },
    Durata: 2,
  },
  {
    comparsa: 0.2,
    Testo: "Chiusura Portuale in dogana",
    Effetti: { Edile: [-2, -1], Ristoranti: [-1, -1], Guerra: [-1, -2], Navale: [-1, -2] },
    Durata: 3,
  },
  {
    comparsa: 0.8,
    Testo: "Nasce una nuova influenza",
    Effetti: {},
    Durata: 3,
  },
  {
    comparsa: 0.44,
    Testo: "Panda comprano azioni a wall street",
    Effetti: { Casuale: [-20, 20], Ristoranti: [-3, 3] },
    Durata: 5,
  },
  {
    comparsa: 0.4,
    Testo: "Nuove leggi EU limitano gli export",
    Effetti: { Edile: [3, 3], Ristoranti: [0, -1], Guerra: [-1, 0] },
    Durata: 5,
  },
  {
    comparsa: 0.2,
    Testo: "Nuovo Bonus Edilizio",
    Effetti: { Edile: [2, 3], Truffe: [3, 4], Turismo: [-1, -2] },
    Durata: 8,
  },
  {
    comparsa: 0.1,
    Testo: "Azionisti anonimi comprano tutto il casuale",
    Effetti: { Casuale: [90, 30] },
    Durata: 1,
  },
  {
    comparsa: 0.22,
    Testo: "Azionisti anonimi vendono tutto il casuale",
    Effetti: { Casuale: [-30, -90] },
    Durata: 1,
  },
  {
    comparsa: 0.12,
    Testo: "Il governo impone una nuova tassa",
    Effetti: { Edile: [-1, 12], Navale: [4, -2], Turismo: [-23, -23] },
    Durata: 10,
  },
  {
    comparsa: 0.2,
    Testo: "Aperta una via commerciale",
    Effetti: { Ristoranti: [4, 0], Guerra: [4, 0], Turismo: [4, 0] },
    Durata: 7,
  },
  {
    comparsa: 0.92,
    Testo: "Ricalcolo di bilancio da parte dell'UE",
    Effetti: {
      Edile: [-2, 2],
      Guerra: [-2, 2],
      Navale: [-2, 2],
      Turismo: [-2, 2],
      Ristoranti: [-2, 2],
      Truffe: [-2, 2],
      Casuale: [-2, 2],
    },
    Durata: 3,
  },
];
const CROSSBREED = {
  // esempio: Tarassaco + Tarassaco con buco al centro
  "Tarassaco|Tarassaco": [
    { p: 0.09, plant: "Tarassaco" }, // 5%
    { p: 0.08, plant: "Carota" },  
    { p: 0.03, plant: "Zucca" },
    
  ],

  // esempio: Tarassaco + Carota
  "Carota|Tarassaco": [
    { p: 0.06, plant: "Patata" },
    { p: 0.02, plant: "Zucca" },
  ],
};

// =========================
// RNG helpers
// =========================
function rand() { return Math.random(); }
const randint = (a, b) => {
  const min = Math.min(a, b), max = Math.max(a, b);
  return Math.floor(min + rand() * (max - min + 1));
};

function formatDate(d) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

// Data fittizia: anno 1 => 2020, anno 2 => 2021, ecc.
function fakeNewsDate(year, idx) {
  const baseYear = 2020 + (year - 1);
  const month = ((year * 7 + idx * 3) % 12);
  const day = 1 + ((year * 13 + idx * 11) % 28);
  return formatDate(new Date(baseYear, month, day));
}
function tarassacoDropChance(bet, cashBeforeBet) {
  if (cashBeforeBet <= 0) return 0;
  const ratio = bet / cashBeforeBet;     // 0.10 = 10%
  const chance = ratio * 0.10;           // 10% => 1%
  return Math.max(0, Math.min(0.25, chance)); // clamp (evita follie)
}


// =========================
// STATE
// =========================
function initialState() {
  return {
    orto: {
    w: 5,
    h: 5,
    grid: Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => null)),
    seeds: { Tarassaco: 4 },  // inventario semi
    selectedSeed: null,
    },
    year: 1,
    cash: STARTING_CASH,
    prices: {
      Edile: 100,
      Guerra: 100,
      Navale: 100,
      Turismo: 100,
      Ristoranti: 100,
      Truffe: 100,
      Casuale: 100,
    },
    horse: {
  inRace: false,
  betHorse: 1,
  betAmount: 100,
  positions: [0, 0, 0, 0, 0], // 0..1
},
    portfolio: {},     // asset -> [{shares, buy_price, buy_year}]
    activeNews: [],    // [{Testo, Effetti, anni_rimanenti, Data}]
    prevPrices: null,
    log: [],
    priceHistory: {
      Edile: [], Guerra: [], Navale: [], Turismo: [],
      Ristoranti: [], Truffe: [], Casuale: []
    },
    selectedAsset: null,
  };
}

function ensureStateShape(s) {
  // compatibilità con salvataggi vecchi
  if (!s || typeof s !== "object") return initialState();

  if (typeof s.year !== "number") s.year = 1;
  if (!s.horse) s.horse = initialState().horse;
  if (typeof s.cash !== "number") s.cash = STARTING_CASH;

  if (!s.prices) s.prices = initialState().prices;
  for (const k of Object.keys(initialState().prices)) {
    if (typeof s.prices[k] !== "number") s.prices[k] = 100;
  }

  if (!s.portfolio || typeof s.portfolio !== "object") s.portfolio = {};
  if (!Array.isArray(s.activeNews)) s.activeNews = [];
  if (!Array.isArray(s.log)) s.log = [];
  if (!s.priceHistory || typeof s.priceHistory !== "object") {
    s.priceHistory = initialState().priceHistory;
  }
  for (const k of Object.keys(initialState().priceHistory)) {
    if (!Array.isArray(s.priceHistory[k])) s.priceHistory[k] = [];
  }

  if (!("prevPrices" in s)) s.prevPrices = null;
  if (!("selectedAsset" in s)) s.selectedAsset = null;
  if (!s.orto) s.orto = initialState().orto;

  if (typeof s.orto.w !== "number") s.orto.w = 5;
  if (typeof s.orto.h !== "number") s.orto.h = 5;
  if (!Array.isArray(s.orto.grid)) {
    s.orto.grid = Array.from({ length: s.orto.h }, () =>
      Array.from({ length: s.orto.w }, () => null)
    );
  }
  if (!s.orto.seeds || typeof s.orto.seeds !== "object") s.orto.seeds = { Tarassaco: 0 };
  if (!("selectedSeed" in s.orto)) s.orto.selectedSeed = null;

  return s;
}

function save() {
  localStorage.setItem("MARKETSIM_STATE", JSON.stringify(state));
}
function load() {
  const raw = localStorage.getItem("MARKETSIM_STATE");
  if (!raw) return null;
  try { return ensureStateShape(JSON.parse(raw)); } catch { return null; }
}
function reset() {
  localStorage.removeItem("MARKETSIM_STATE");
  state = initialState();
  // storico iniziale
  recordPriceHistory(state.year);
  render();
}

let state = load() ?? initialState();
// salva lo storico iniziale se vuoto
if (Object.values(state.priceHistory).every(arr => arr.length === 0)) {
  recordPriceHistory(state.year);
}

// =========================
// PERFORMANCE helpers
// =========================
function lotPnlPct(asset, lot) {
  const current = state.prices[asset];
  const cost = lot.shares * lot.buy_price;
  if (cost <= 0) return 0;
  return ((lot.shares * current) - cost) / cost; // 0.10 = +10%
}
function fakeYearLabel() {
  return 2020 + (state.year - 1);
}
function assetPnlPct(asset, lots) {
  const current = state.prices[asset];
  let cost = 0, value = 0;
  for (const lot of lots) {
    cost += lot.shares * lot.buy_price;
    value += lot.shares * current;
  }
  if (cost <= 0) return 0;
  return (value - cost) / cost;
}

// =========================
// NEWS + BONUS
// =========================


function pairKey(a, b) {
  return [a, b].sort().join("|");
}
function renderSeedsUI() {
  const sel = document.getElementById("seedSel");
  const info = document.getElementById("seedInfo");
  if (!sel || !info) return;

  const seeds = state.orto.seeds || {};
  const names = Object.keys(seeds);

  // includi almeno Tarassaco anche se 0
  if (!names.includes("Tarassaco")) seeds.Tarassaco = seeds.Tarassaco ?? 0;

  sel.innerHTML = Object.keys(seeds).map(n => {
    const c = seeds[n] ?? 0;
    return `<option value="${n}">${n} (${c})</option>`;
  }).join("");

  // preserva selezione se esiste
  if (state.orto.selectedSeed && seeds[state.orto.selectedSeed] != null) sel.value = state.orto.selectedSeed;
  else state.orto.selectedSeed = sel.value;

  const p = PLANTS[state.orto.selectedSeed];
  info.innerHTML = p
    ? `Vendita raccolto: <b>${p.sell}</b> | Fruttamento annuo se non raccolto: <b>${p.fruit}</b> | Anno: <b>${fakeYearLabel()}</b>`
    : "";
}
function renderOrto() {
  const gridEl = document.getElementById("ortoGrid");
  if (!gridEl) return;

  const { w, h, grid } = state.orto;
  gridEl.innerHTML = "";

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const cell = grid[y][x];

      const div = document.createElement("div");
      div.className = "ortoCell";

      if (!cell) {
        div.classList.add("empty");
        div.textContent = "";
      } else {
        const age = (fakeYearLabel() - cell.plantedYear);
        const growYears = GROWTH_YEARS[cell.plant] ?? 1;
        const mature = age >= growYears;

        div.textContent = PLANT_EMOJI[cell.plant] ?? "🌱";
        if (mature) div.classList.add("mature");
        else div.classList.add("stale");
      }

      div.dataset.x = x;
      div.dataset.y = y;

      gridEl.appendChild(div);
    }
  }
}
function tryPlantOrHarvest(x, y) {
  const cell = state.orto.grid[y][x];

  // se vuoto: pianta
  if (!cell) {
    const seed = state.orto.selectedSeed;
    if (!seed) return;

    const have = state.orto.seeds[seed] ?? 0;
    if (have <= 0) return;

    state.orto.seeds[seed] -= 1;
    state.orto.grid[y][x] = { plant: seed, plantedYear: fakeYearLabel() };

    state.log.unshift(`Orto: piantato ${seed} in (${x+1},${y+1})`);
    renderSeedsUI();
    renderOrto();
    return;
  }

  // se pieno: raccogli solo se maturo
  const age = fakeYearLabel() - cell.plantedYear;
  const growYears = GROWTH_YEARS[cell.plant] ?? 1;
  if (age < growYears) return;

  harvestCell(x, y);
}
function harvestSeedYield() {
  let seeds = 1;
  if (Math.random() < 0.30) seeds++;
  if (Math.random() < 0.05) seeds++;
  if (Math.random() < 0.01) seeds++;
  return seeds;
}

function harvestCell(x, y) {
  const cell = state.orto.grid[y][x];
  if (!cell) return;

  const plant = cell.plant;
  const p = PLANTS[plant];
  if (!p) return;

  // vendita raccolto
  state.cash += p.sell;

  // semi ottenuti
  const gained = harvestSeedYield();
  state.orto.seeds[plant] = (state.orto.seeds[plant] ?? 0) + gained;

  // libera la casella
  state.orto.grid[y][x] = null;

  state.log.unshift(`Orto: raccolto ${plant} (+${p.sell} cash) | semi +${gained}`);
  renderSeedsUI();
  renderOrto();
  render(); // per aggiornare cash in alto e log
}
function applyOrtoYearlyFruit() {
  let total = 0;
  const { w, h, grid } = state.orto;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const cell = grid[y][x];
      if (!cell) continue;

      const age = fakeYearLabel() - cell.plantedYear;
      const growYears = GROWTH_YEARS[cell.plant] ?? 1;

      if (age >= growYears) {
        const p = PLANTS[cell.plant];
        if (p?.fruit) {
          total += p.fruit;
        }
      }
    }
  }

  state.cash += total;
  return total;
}

function weightedPick(outcomes) {
  const r = Math.random();
  let acc = 0;
  for (const o of outcomes) {
    acc += o.p;
    if (r < acc) return o.plant;
  }
  return null;
}

function applyOrtoCrossbreed() {
  const { w, h, grid } = state.orto;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grid[y][x]) continue; // solo buchi

      // orizzontale A _ B
      if (x - 1 >= 0 && x + 1 < w) {
        const L = grid[y][x - 1];
        const R = grid[y][x + 1];
        if (L && R) trySpawnFromPair(L.plant, R.plant, x, y);
      }

      // verticale A _ B
      if (y - 1 >= 0 && y + 1 < h) {
        const U = grid[y - 1][x];
        const D = grid[y + 1][x];
        if (U && D) trySpawnFromPair(U.plant, D.plant, x, y);
      }
    }
  }
}

function trySpawnFromPair(a, b, x, y) {
  const key = pairKey(a, b);
  const rules = CROSSBREED[key];
  if (!rules) return;

  const plant = weightedPick(rules);
  if (!plant) return;

  // spawn come “pianta appena nata” (deve poi crescere)
  state.orto.grid[y][x] = { plant, plantedYear: fakeYearLabel() };
  state.log.unshift(`Orto: incrocio ${a} + ${b} ha generato ${plant} in (${x+1},${y+1})`);
}

function pickNewsForYear() {
  // 1..3 news, pesate con comparsa. Doppioni permessi (reinserimento).
  const k = randint(1, 3);
  const weights = NEWS_POOL.map(n => Math.max(0, Number(n.comparsa) || 0));

  const chosen = [];
  for (let i = 0; i < k; i++) {
    const total = weights.reduce((a, b) => a + b, 0);
    if (total <= 0) break;

    let r = rand() * total;
    let pickedIndex = 0;
    for (let j = 0; j < NEWS_POOL.length; j++) {
      r -= weights[j];
      if (r <= 0) { pickedIndex = j; break; }
    }
    chosen.push(NEWS_POOL[pickedIndex]);
  }
  return chosen;
}

function applyNewsBonus() {
  // settore -> [min,max] (normalizzati)
  const bonus = {};
  for (const n of state.activeNews) {
    for (const [sector, range] of Object.entries(n.Effetti || {})) {
      const bmin = Math.min(range[0], range[1]);
      const bmax = Math.max(range[0], range[1]);

      if (!bonus[sector]) bonus[sector] = [bmin, bmax];
      else bonus[sector] = [bonus[sector][0] + bmin, bonus[sector][1] + bmax];
    }
  }
  return bonus;
}

// =========================
// HISTORY (stock chart)
// =========================
function recordPriceHistory(yearLabel) {
  for (const asset of Object.keys(state.prices)) {
    state.priceHistory[asset].push({ year: yearLabel, price: state.prices[asset] });
    if (state.priceHistory[asset].length > 80) state.priceHistory[asset].shift();
  }
}

// =========================
// MARKET
// =========================
function grow(asset, bonusBySector) {
  const price = state.prices[asset];

  // rubber band
  let chance = 0;
  if (price < 3) chance = 1.0;
  else if (price < 10) chance = 0.7;
  else if (price < 40) chance = 0.2;

  if (rand() < chance) {
    const pct = randint(45, 90);
    state.prices[asset] = price + (price * pct / 100);
    return pct;
  }

  const [min0, max0] = MOVE_RATE[asset];
  const [addMin, addMax] = bonusBySector[asset] ?? [0, 0];
  const pct = randint(min0 + addMin, max0 + addMax);

  const next = price + (price * pct / 100);
  state.prices[asset] = Math.max(Math.floor(Math.random() * 6) + 1, next);
  return pct;
}

function advanceYear() {
  // snapshot prezzi precedenti per flash/badge
  state.prevPrices = { ...state.prices };

  // tasse sul cash
  const tax = state.cash * TAX_RATE_ON_CASH;
  state.cash -= tax;
  const ortoIncome = applyOrtoYearlyFruit();

  if (ortoIncome > 0) {
    state.log.unshift(`Orto: fruttato annuale +${ortoIncome} cash`);
  } else {
    state.log.unshift(`Orto: nessun frutto quest'anno`);
  }
  applyOrtoCrossbreed();
  renderOrto();
  renderSeedsUI();


  // news opache (ma con data)
  const picked = pickNewsForYear();
  if (picked.length) {
    state.log.unshift(`News: ${picked.map(x => x.Testo).join(" | ")}`);
    for (let i = 0; i < picked.length; i++) {
      const n = picked[i];
      state.activeNews.push({
        Testo: n.Testo,
        Effetti: n.Effetti,
        anni_rimanenti: Number(n.Durata),
        Data: fakeNewsDate(state.year, i),
      });
    }
  }

  const bonus = applyNewsBonus();

  // crescita prezzi
  for (const asset of Object.keys(state.prices)) {
    const pct = grow(asset, bonus);
    state.log.unshift(`Anno ${state.year}: ${asset} cambia (${pct >= 0 ? "+" : ""}${pct}%)`);
  }

  // decrement news
  state.activeNews.forEach(n => n.anni_rimanenti--);
  state.activeNews = state.activeNews.filter(n => n.anni_rimanenti > 0);

  // registra storico PREZZI a fine anno (dopo la crescita)
  recordPriceHistory(state.year);

  state.log.unshift(`Fine anno ${state.year}: tassa cash -${tax.toFixed(2)}`);
  state.year += 1;

  // limita log
  state.log = state.log.slice(0, 250);
}

// =========================
// PORTFOLIO + TRADING
// =========================
function portfolioTotals() {
  let invested = 0, value = 0;
  for (const [asset, lots] of Object.entries(state.portfolio)) {
    const current = state.prices[asset];
    for (const lot of lots) {
      invested += lot.shares * lot.buy_price;
      value += lot.shares * current;
    }
  }
  const pnl = value - invested;
  return { invested, value, pnl, netWorth: state.cash + value };
}

function buy(asset, qty) {
  qty = Number(qty);
  if (!Number.isInteger(qty) || qty < 1) return "Quantità non valida.";

  const price = state.prices[asset];
  const cost = qty * price;
  if (cost > state.cash) return "Cash insufficiente.";

  state.cash -= cost;
  if (!state.portfolio[asset]) state.portfolio[asset] = [];
  state.portfolio[asset].push({ shares: qty, buy_price: price, buy_year: state.year });

  state.log.unshift(`Compra: ${qty} ${asset} @ ${price.toFixed(2)} (costo ${cost.toFixed(2)})`);
  return "Acquisto registrato.";
}

function sell(asset, qty) {
  qty = Number(qty);
  if (!Number.isInteger(qty) || qty < 1) return "Quantità non valida.";

  const lots = state.portfolio[asset] ?? [];
  const total = lots.reduce((s, l) => s + l.shares, 0);
  if (qty > total) return "Non hai abbastanza azioni.";

  let remaining = qty;
  const current = state.prices[asset];
  let proceeds = 0;

  // FIFO
  while (remaining > 0 && lots.length) {
    const lot = lots[0];
    const take = Math.min(remaining, lot.shares);
    lot.shares -= take;
    remaining -= take;

    proceeds += take * current;

    if (lot.shares === 0) lots.shift();
  }

  if (lots.length === 0) delete state.portfolio[asset];

  state.cash += proceeds;
  state.log.unshift(`Vendi: ${qty} ${asset} @ ${current.toFixed(2)} (incasso ${proceeds.toFixed(2)})`);
  return "Vendita completata.";
}

// =========================
// CHART (optional modal)
// =========================
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function openChart(asset) {
  const modal = document.getElementById("chartModal");
  const canvas = document.getElementById("chartCanvas");
  const title = document.getElementById("chartTitle");

  if (!modal || !canvas || !title) return; // se non hai la modal in HTML, non rompe nulla

  state.selectedAsset = asset;
  title.textContent = `Andamento: ${asset}`;
  modal.classList.remove("hidden");
  drawChart(asset);
}

function drawChart(asset) {
  const canvas = document.getElementById("chartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const data = state.priceHistory[asset] ?? [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (data.length < 2) {
    ctx.fillStyle = "#9fb0c3";
    ctx.font = "14px system-ui";
    ctx.fillText("Dati insufficienti: passa qualche anno.", 20, 40);
    return;
  }

  const padL = 46, padR = 18, padT = 18, padB = 30;
  const w = canvas.width - padL - padR;
  const h = canvas.height - padT - padB;

  let minP = Infinity, maxP = -Infinity;
  for (const d of data) { minP = Math.min(minP, d.price); maxP = Math.max(maxP, d.price); }
  if (minP === maxP) { minP *= 0.95; maxP *= 1.05; }

  // assi
  ctx.strokeStyle = "#223047";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT);
  ctx.lineTo(padL, padT + h);
  ctx.lineTo(padL + w, padT + h);
  ctx.stroke();

  // linea
  ctx.strokeStyle = "#e8eef6";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < data.length; i++) {
    const x = padL + (i / (data.length - 1)) * w;
    const y = padT + (1 - (data[i].price - minP) / (maxP - minP)) * h;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // labels min/max
  ctx.fillStyle = "#9fb0c3";
  ctx.font = "12px system-ui";
  ctx.fillText(maxP.toFixed(1), 8, padT + 10);
  ctx.fillText(minP.toFixed(1), 8, padT + h);
}

function startHorseRace() {
  if (state.horse.inRace) return;

  const sel = document.getElementById("horseSel");
  const betInput = document.getElementById("horseBet");
  const msg = document.getElementById("horseMsg");

  const betHorse = Number(sel?.value ?? 1);
  const betAmount = Number(betInput?.value ?? 0);

  if (!Number.isInteger(betHorse) || betHorse < 1 || betHorse > 5) {
    if (msg) msg.textContent = "Cavallo non valido.";
    return;
  }
  if (!Number.isInteger(betAmount) || betAmount < 1) {
    if (msg) msg.textContent = "Puntata non valida.";
    return;
  }
  if (betAmount > state.cash) {
    if (msg) msg.textContent = "Cash insufficiente.";
    return;
  }

  // scala subito la puntata
  state.cash -= betAmount;

  state.horse.inRace = true;
  state.horse.betHorse = betHorse;
  state.horse.betAmount = betAmount;

  state.log.unshift(`Cavalli: puntata ${betAmount} su Cavallo ${betHorse}`);
  if (msg) msg.textContent = "Partiti.";
  // reset allo start (SOLO quando parte una nuova corsa)
  state.horse.positions = [0, 0, 0, 0, 0];
  delete state.horse._lastTime;
  state.horse.cashBeforeBet = state.cash;

  // mostra cavalli allo start
  render();

  // piccolo delay e poi PARTI
  setTimeout(() => {
    if (msg) msg.textContent = "Partiti.";
    runHorseAnimation();
  }, 200);
}

function runHorseAnimation() {
  const durationMs = 7000;
  const start = performance.now();

  // scegli un cavallo lento (0..4)
  const slowIndex = Math.floor(Math.random() * 5);

  // velocità base per cavallo
  const speeds = Array.from({ length: 5 }, (_, i) => {
    const base = 0.00014 + Math.random() * 0.00005; // velocità normale
    return i === slowIndex ? base * 0.82 : base;   // uno più lento
  });

  state.horse.positions = [0, 0, 0, 0, 0];
  let finished = false;

  function step(now) {
    if (finished) return;

    const elapsed = now - start;
    const dt = elapsed > 0 ? (now - (state.horse._lastTime ?? now)) : 0;
    state.horse._lastTime = now;

    // aggiorna posizioni
    for (let i = 0; i < 5; i++) {
      const noise = (Math.random() - 0.5) * 0.00005;
      state.horse.positions[i] += (speeds[i] + noise) * dt;
      state.horse.positions[i] = Math.max(0, state.horse.positions[i]);
    }

    // controllo vittoria immediata
    const winnerIndex = state.horse.positions.findIndex(p => p >= 1);
    if (winnerIndex !== -1) {
      finished = true;
      state.horse.positions[winnerIndex] = 1;
      renderHorsesOnly();
      finishHorseRace(winnerIndex);
      return;
    }

    // controllo timeout (7 secondi)
    if (elapsed >= durationMs) {
      finished = true;

      // vince chi è più avanti
      let best = 0;
      for (let i = 1; i < 5; i++) {
        if (state.horse.positions[i] > state.horse.positions[best]) best = i;
      }

      // normalizza: il vincitore arriva a 1
      const maxP = state.horse.positions[best] || 1;
      state.horse.positions = state.horse.positions.map(p => Math.min(1, p / maxP));

      renderHorsesOnly();
      finishHorseRace(best);
      return;
    }

    renderHorsesOnly();
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function renderHorsesOnly() {
  for (let i = 0; i < 5; i++) {
    const el = document.getElementById(`horse${i + 1}`);
    if (!el) continue;

    const lane = el.parentElement;
    const w = lane ? lane.clientWidth : 380;
    const maxX = Math.max(0, w - 60); // spazio utile
    const pos = state.horse.positions[i] ?? 0;
    const x = Math.floor(pos * maxX);

    el.style.transform = `translate(${x}px, -50%)`;
  }
}
function finishHorseRace(winnerIndex) {
  const msg = document.getElementById("horseMsg");
  const winnerHorse = winnerIndex + 1;

  const betHorse = state.horse.betHorse;
  const betAmount = state.horse.betAmount;

  const payout = (winnerHorse === betHorse) ? (betAmount * 5) : 0;

  if (payout > 0) {
    state.cash += payout;
    state.log.unshift(`Cavalli: VINTO! Cavallo ${winnerHorse}. Incasso ${payout}.`);
    if (msg) msg.textContent = `Hai vinto! Cavallo ${winnerHorse}. +${payout}`;
  } else {
    state.log.unshift(`Cavalli: perso. Vince Cavallo ${winnerHorse}.`);
    if (msg) msg.textContent = `Hai perso. Vince Cavallo ${winnerHorse}.`;
  }

  state.horse.inRace = false;
  state.horse.positions[winnerIndex] = 1;

  const chance = tarassacoDropChance(state.horse.betAmount, state.horse.cashBeforeBet);
  if (Math.random() < chance) {
    state.orto.seeds.Tarassaco = (state.orto.seeds.Tarassaco ?? 0) + 1;
    state.log.unshift(`Drop: ottenuto 1 seme di Tarassaco (corsa cavalli)`);
    renderSeedsUI();
  }

  render();
}

function maxIndex(arr) {
  let bestI = 0, bestV = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bestV) { bestV = arr[i]; bestI = i; }
  }
  return bestI;
}

// =========================
// RENDER
// =========================
function render() {
  const totals = portfolioTotals();

  document.getElementById("year").textContent = state.year;
  document.getElementById("cash").textContent = state.cash.toFixed(2);
  document.getElementById("netWorth").textContent = totals.netWorth.toFixed(2);

  // asset select
  const assets = Object.keys(state.prices);
  const sel = document.getElementById("assetSelect");
  const prevSel = sel.value;
  sel.innerHTML = assets.map(a => `<option value="${a}">${a}</option>`).join("");
  if (assets.includes(prevSel)) sel.value = prevSel;

  // --- Cavalli: select
  const horseSel = document.getElementById("horseSel");
  if (horseSel) {
    const prev = horseSel.value;
    horseSel.innerHTML = [1,2,3,4,5].map(n => `<option value="${n}">Cavallo ${n}</option>`).join("");
    if (prev) horseSel.value = prev;
  }

  // --- Cavalli: pista
  const track = document.getElementById("horseTrack");
  if (track) {
    const lanes = [1, 2, 3, 4, 5].map((n, i) => {
      return `
        <div class="lane">
          <div class="finish"></div>
          <div class="horse h${n}" id="horse${n}" style="transform: translate(0px, -50%);">🐎</div>
        </div>
      `;
    }).join("");

    track.innerHTML = lanes;
    renderHorsesOnly();
    renderSeedsUI();
    renderOrto();
  }

  // prezzi (flash + click chart)
  const pricesDiv = document.getElementById("prices");
  pricesDiv.innerHTML = assets.map(a => {
    const p = state.prices[a];
    const prev = state.prevPrices?.[a];

    let flashCls = "";
    let badge = `<span class="badge">=</span>`;
    if (prev != null) {
      if (p > prev) { badge = `<span class="badge up">▲</span>`; flashCls = "flash-up"; }
      else if (p < prev) { badge = `<span class="badge down">▼</span>`; flashCls = "flash-down"; }
    }

    return `
      <div class="priceItem ${flashCls}" data-asset="${a}">
        <div class="priceTop">
          <div><b>${a}</b></div>
          ${badge}
        </div>
        <div class="small">Prezzo: ${p.toFixed(2)}</div>
      </div>
    `;
  }).join("");

  // click: apri grafico stock
  document.querySelectorAll(".priceItem").forEach(el => {
    el.onclick = () => openChart(el.dataset.asset);
  });

  // portfolio ordinato per performance
  const port = document.getElementById("portfolio");
  let html = `
    <div class="small">
      Investito: <b>${totals.invested.toFixed(2)}</b><br/>
      Valore: <b>${totals.value.toFixed(2)}</b><br/>
      P/L: <b>${totals.pnl.toFixed(2)}</b>
    </div>
    <hr/>
  `;

  const entries = Object.entries(state.portfolio)
    .map(([asset, lots]) => [asset, lots, assetPnlPct(asset, lots)])
    .sort((a, b) => b[2] - a[2]);

  if (!entries.length) {
    html += `<div class="small">(vuoto)</div>`;
  } else {
    for (const [asset, lots, apct] of entries) {
      const avgBuy =
        lots.reduce((s, l) => s + l.shares * l.buy_price, 0) /
        Math.max(1, lots.reduce((s, l) => s + l.shares, 0));

      let assetCls = "flat";
      if (state.prices[asset] > avgBuy) assetCls = "up";
      else if (state.prices[asset] < avgBuy) assetCls = "down";

      html += `
        <div class="${assetCls}">
          <b>${asset}</b> <span class="small">(${(apct * 100).toFixed(1)}%)</span>
          (prezzo ${state.prices[asset].toFixed(2)})
        </div>
      `;

      const sortedLots = [...lots].sort((l1, l2) => lotPnlPct(asset, l2) - lotPnlPct(asset, l1));

      sortedLots.forEach((lot, i) => {
        const current = state.prices[asset];
        let cls = "flat";
        if (current > lot.buy_price) cls = "up";
        else if (current < lot.buy_price) cls = "down";

        html += `
          <div class="small lot ${cls}">
            Lotto ${i + 1}: ${lot.shares} @ ${lot.buy_price.toFixed(2)}
            (ora ${current.toFixed(2)}, anno ${lot.buy_year})
          </div>
        `;
      });

      html += `<hr/>`;
    }
  }
  port.innerHTML = html;

  // news (data + stile per anni rimanenti)
  const newsDiv = document.getElementById("news");
  if (!state.activeNews.length) {
    newsDiv.innerHTML = `<div class="small">(nessuna)</div>`;
  } else {
    newsDiv.innerHTML =
      `<div class="newsList">` +
      state.activeNews.map(n => {
        const yrs = Number(n.anni_rimanenti);
        const cls =
          (yrs >= 4) ? "newsItem newsStrong" :
          (yrs <= 2) ? "newsItem newsThin" :
          "newsItem";

        const date = n.Data ?? "";
        return `
          <div class="${cls}">
            <div class="newsLeft">
              <div class="newsText">${escapeHtml(n.Testo)}</div>
            </div>
            <div class="newsDate">${escapeHtml(date)}</div>
          </div>
        `;
      }).join("") +
      `</div>`;
  }

  // log
  const logDiv = document.getElementById("log");
  logDiv.innerHTML = state.log.map(l => `<div class="logLine">${escapeHtml(l)}</div>`).join("");
}

// =========================
// WIRE UI
// =========================
document.getElementById("btnAdvance").onclick = () => { advanceYear(); render(); };
document.getElementById("btnBuy").onclick = () => {
  const asset = document.getElementById("assetSelect").value;
  const qty = document.getElementById("qty").value;
  document.getElementById("tradeMsg").textContent = buy(asset, qty);
  render();
};
document.getElementById("btnSell").onclick = () => {
  const asset = document.getElementById("assetSelect").value;
  const qty = document.getElementById("qty").value;
  document.getElementById("tradeMsg").textContent = sell(asset, qty);
  render();
};
document.getElementById("btnSave").onclick = () => { save(); state.log.unshift("Salvato."); render(); };
document.getElementById("btnLoad").onclick = () => { state = load() ?? state; state.log.unshift("Caricato."); render(); };
document.getElementById("btnReset").onclick = () => { reset(); };

const btnHorse = document.getElementById("btnHorseRace");
if (btnHorse) btnHorse.onclick = () => startHorseRace();

// modal close (se esiste)

function closeChartModal() {
  const modal = document.getElementById("chartModal");
  if (modal) modal.classList.add("hidden");
}

// Chiudi con bottone
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "btnCloseModal") {
    closeChartModal();
  }

  // Chiudi cliccando sullo sfondo (backdrop)
  if (e.target && e.target.id === "chartModal") {
    closeChartModal();
  }
});

// Chiudi con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeChartModal();
});

document.getElementById("seedSel")?.addEventListener("change", (e) => {
  state.orto.selectedSeed = e.target.value;
  renderSeedsUI();
});
document.getElementById("ortoGrid")?.addEventListener("click", (e) => {
  const cell = e.target.closest(".ortoCell");
  if (!cell) return;

  const x = Number(cell.dataset.x);
  const y = Number(cell.dataset.y);
  tryPlantOrHarvest(x, y);

  e.stopPropagation(); // importante: non triggerare “click fuori”
});

document.addEventListener("click", (e) => {
  const inside = e.target.closest("#ortoGrid") || e.target.closest("#seedSel");
  if (inside) return;

  state.orto.selectedSeed = null;
  const sel = document.getElementById("seedSel");
  if (sel) sel.value = "";
  const info = document.getElementById("seedInfo");
  if (info) info.textContent = "";
});


render();
