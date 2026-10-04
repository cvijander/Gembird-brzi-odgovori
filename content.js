// Redosled grupa i broj kolona u svakoj grupi.
// Dugmad unutar grupe idu redom kojim su navedena u ODGOVORI.
const GRUPE = [
  { naziv: "Stanje",      kolone: 2 },
  { naziv: "Rok slanja",  kolone: 3 },
  { naziv: "Preuzimanje", kolone: 2 },
  { naziv: "Porudžbina",  kolone: 2 },
  { naziv: "Ostalo",      kolone: 3 }
];

const ODGOVORI = [
  // ---------- STANJE ----------
  {
    group: "Stanje",
    label: "Dostupno",
    text: "Poštovanje,\nimamo na stanju,\nmožete doci lično ( lokacija i radno vreme vam pišu u opisu oglasa, nemamo aparat za kartice) ili\nAko želite da platite pouzecem po prijemu paketa\nPotrebno je ostaviti sledeće podatke:\n1.Ime i Prezime\n2.Tačnu Adresu\n3.Grad\n4.Poštanski broj\n5.Broj telefona\nDostava je besplatna za sve porudžbine od 3000 i preko dinara ( ispod toga trošak dostave je 330 din)\nŠaljemo preko kurirske službe bex\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
    group: "Stanje",
    label: "EN: Available",
    text: "Hello,\nthe item is in stock,\nyou can come in person (the location and working hours are in the listing description, we do not have a card payment terminal) or\nif you prefer to pay cash on delivery when you receive the package,\nplease provide the following details:\n1. First and last name\n2. Exact address\n3. City\n4. Postal code\n5. Phone number\nDelivery is free for all orders of 3000 RSD and above (below that, the delivery cost is 330 RSD).\nWe ship via BEX courier service.\nVisit our website https://www.gembird.rs/"
  },
  {
    group: "Stanje",
    label: "Nemamo na stanju",
    text: "Poštovanje, nažalost ovaj artikal nemamo na stanju, pogledajte našu ponudu :"
  },
  {
    group: "Stanje",
    label: "EN: Out of stock",
    text: "Hello, unfortunately we don't have this item in stock, please take a look at our offer:"
  },

  // ---------- ROK SLANJA ----------
  {
    group: "Rok slanja",
    label: "Danas",
    text: "Poštovani,\n\nObaveštavamo Vas da će Vaša porudžbina biti poslata danas putem kurirske službe Bex.\nNapominjemo da je dostava besplatna za sve porudžbine u iznosu od 3000 dinara i više. Za porudžbine ispod tog iznosa, trošak dostave iznosi 330 dinara.\nHvala Vam na poverenju.\n-----------------------------------\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
    group: "Rok slanja",
    label: "Sutra",
    text: "Poštovani,\n\nObaveštavamo Vas da će Vaša porudžbina biti poslata sutra putem kurirske službe Bex.\nNapominjemo da je dostava besplatna za sve porudžbine u iznosu od 3000 dinara i više. Za porudžbine ispod tog iznosa, trošak dostave iznosi 330 dinara.\nHvala Vam na poverenju.\n-----------------------------------\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
    group: "Rok slanja",
    label: "Ponedeljak",
    text: "Poštovani,\n\nObaveštavamo Vas da će Vaša porudžbina biti poslata u ponedeljak putem kurirske službe Bex.\nNapominjemo da je dostava besplatna za sve porudžbine u iznosu od 3000 dinara i više. Za porudžbine ispod tog iznosa, trošak dostave iznosi 330 dinara.\nHvala Vam na poverenju.\n-----------------------------------\nPosetite nas sajt https://www.gembird.rs/"
  },

  {
    group: "Rok slanja",
    label: "EN: Today",
    text: "Dear Customer,\n\nWe would like to inform you that your order will be shipped today via BEX courier service.\nPlease note that delivery is free for all orders of 3000 RSD or more. For orders below that amount, the delivery cost is 330 RSD.\nThank you for your trust.\n-----------------------------------\nVisit our website https://www.gembird.rs/"
  },
  {
    group: "Rok slanja",
    label: "EN: Tomorrow",
    text: "Dear Customer,\n\nWe would like to inform you that your order will be shipped tomorrow via BEX courier service.\nPlease note that delivery is free for all orders of 3000 RSD or more. For orders below that amount, the delivery cost is 330 RSD.\nThank you for your trust.\n-----------------------------------\nVisit our website https://www.gembird.rs/"
  },
  {
    group: "Rok slanja",
    label: "EN: Monday",
    text: "Dear Customer,\n\nWe would like to inform you that your order will be shipped on Monday via BEX courier service.\nPlease note that delivery is free for all orders of 3000 RSD or more. For orders below that amount, the delivery cost is 330 RSD.\nThank you for your trust.\n-----------------------------------\nVisit our website https://www.gembird.rs/"
  },

  // ---------- PREUZIMANJE ----------
  {
    group: "Preuzimanje",
    label: "Lično preuzimanje",
    text: "Poštovanje,\n\npošto lično dolazite kod nas u kancelariju \nNaše radno vreme je radnim danima od 09 do 16 i 45 sa strankama, \nMoramo da napomenemo da nemamo aparat za kartice.\nAdresa je: Ljubice Đorđević 2 (stari naziv - Zrenjaninski put 103b ).\nGoogle mapa: Gembird.rs\n\nVidimo se. "
  },
  {
    group: "Preuzimanje",
    label: "EN: Personal pickup",
    text: "Hello,\n\nSince you are coming to our office in person,\nplease note that our working hours with customers are Monday to Friday from 9:00 AM to 4:45 PM.\nWe must also point out that we do not have a card payment terminal.\nThe address is: Ljubice Đorđević 2 (old name: Zrenjaninski put 103b).\nGoogle Maps: Gembird.rs\nSee you soon."
  },
  {
    group: "Preuzimanje",
    label: "Mail to Office",
    text: "Postovani,\npustite poruku na office@gembird.rs\npa će Vam neko od kolega koji je stručniji dati bolji odgovor.\nHvala i svako dobro."
  },
  {
    group: "Preuzimanje",
    label: "Uskoro",
    text: "Postovanje,\ntrenutno nase artikle tj uvid u stanje mozete videti na nasem sajtu.  https://www.gembird.rs/\nAko na slici tog artikla   koji Vas interesuje,  stoji mala ikonica u desnom cosku  (uskoro) , to je oznaka da nazalost tog artikla nemamo trenutno na stanju tj da je stanje 0.\nOstali artikli koji nemaju tu slikicu , su dostupni, dok ulaskom u sam artikal mozete da vidite i tacnu kolicinu na stanju .\nVeliki pozdrav ."
  },

  // ---------- PORUDŽBINA (NOVO) ----------
  {
    group: "Porudžbina",
    label: "Firma / Fizičko lice",
    text: "Poštovani,\n\nUkoliko ste firma, kupovina se može obaviti preko računa.\nUkoliko ste fizičko lice, pošiljka se šalje pouzećem.\n\nZa izradu i slanje predračuna potrebni su nam sledeći podaci:\n*PIB\n*Matični broj\n*Ime i prezime kontakt osobe\n*Kontakt telefon\n*Email adresa na koju ćemo poslati predračun\n\nTakođe, robu možete preuzeti lično (lokacija i radno vreme nalaze se u opisu oglasa).\nNapomena: nemamo aparat za kartice.\n\nUkoliko želite dostavu, potrebno je da nam pošaljete sledeće podatke:\n1.Ime i prezime\n2.Tačnu adresu\n3.Grad\n4.Poštanski broj\n5.Broj telefona\n\nDostava je besplatna za sve porudžbine od 3000 dinara i više.\nZa porudžbine ispod tog iznosa, cena dostave iznosi 330 dinara.\n\nKurirska služba: Bex\n\nNaš sajt možete posetiti na:\nhttps://www.gembird.rs/\n\nSrdačan pozdrav."
  },
  {
    group: "Porudžbina",
    label: "Reklamacija (servis)",
    text: "Poštovani,\n\nza servis / reklamaciju javite se kolegi na:\n067/77-24-100\n011/43-40-508\nservis@gembird.rs\n\npa će Vam on dati adekvatne informacije i postupak za dalje."
  },
  {
    group: "Porudžbina",
    label: "EN: Company/Person",
    text: "Dear Customer,\n\nIf you are a company, the purchase can be made via invoice.\nIf you are an individual, the package is sent cash on delivery.\n\nTo prepare and send a proforma invoice, we need the following details:\n*Tax ID (PIB)\n*Company registration number\n*Contact person's full name\n*Contact phone number\n*Email address to which we will send the proforma invoice\n\nYou can also pick up the goods in person (the location and working hours are in the listing description).\nPlease note: we do not have a card payment terminal.\n\nIf you would like delivery, please send us the following details:\n1. First and last name\n2. Exact address\n3. City\n4. Postal code\n5. Phone number\n\nDelivery is free for all orders of 3000 RSD or more.\nFor orders below that amount, the delivery cost is 330 RSD.\n\nCourier service: BEX\n\nYou can visit our website at:\nhttps://www.gembird.rs/\n\nKind regards."
  },
  {
    group: "Porudžbina",
    label: "EN: Warranty / Service",
    text: "Dear Customer,\n\nfor service / warranty claims, please contact our colleague at:\n+381 67 77 24 100\n+381 11 43 40 508\nservis@gembird.rs\n\nand he will give you the appropriate information and the next steps."
  },

  // ---------- OSTALO ----------
  {
    group: "Ostalo",
    label: "Mala količina",
    text: "Ako želite da Vam se pošalje,\nsamo mi javite da idem da fizički proverim da li ga imamo fizički na stanju.\nPošto je jedno što se vodi u sistemu,\na jedno je realno stanje na polici.\nHvala na razumevanju."
  },
  {
    group: "Ostalo",
    label: "Ocena",
    text: "Izuzetna saradnja i profesionalnost. Dogovor u par recenica.\nŽelimo Vam puno zadovoljstva i sreće u korišćenju našeg proizvoda i nadamo se prilici za ponovnu saradnju.\nSve naše iskrene preporuke za ovog kupca"
  },
  {
    group: "Ostalo",
    label: "Gembird",
    text: "Postovanje,\ntrenutno nase artikle tj uvid u stanje mozete videti na nasem sajtu.  https://www.gembird.rs/"
  }
];

function kreirajWidget() {
  if (document.getElementById("kp-quick-reply-widget")) return;

  const widget = document.createElement("div");
  widget.id = "kp-quick-reply-widget";

  const naslov = document.createElement("h4");
  naslov.innerText = "⚡ Brzi Odgovori";
  widget.appendChild(naslov);

  GRUPE.forEach(grupa => {
    const stavke = ODGOVORI.filter(o => o.group === grupa.naziv);
    if (stavke.length === 0) return;

    const nazivEl = document.createElement("div");
    nazivEl.className = "kp-qr-naslov";
    nazivEl.innerText = grupa.naziv;
    widget.appendChild(nazivEl);

    const grid = document.createElement("div");
    grid.className = "kp-qr-grid";
    grid.style.gridTemplateColumns = "repeat(" + grupa.kolone + ", 1fr)";

    stavke.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "kp-qr-btn" + (item.label.startsWith("EN:") ? " kp-qr-en" : "");
      btn.innerText = item.label;
      btn.title = item.label;

      btn.addEventListener("click", () => ubaciUTextarea(item.text));
      grid.appendChild(btn);
    });

    widget.appendChild(grid);
  });

  (document.body || document.documentElement).appendChild(widget);
}

function ubaciUTextarea(tekst) {
  const textarea = document.querySelector("textarea") || document.querySelector("[contenteditable='true']");

  if (textarea) {
    if (textarea.tagName === "TEXTAREA") {
      textarea.value = tekst;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      textarea.innerText = tekst;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    textarea.focus();
  } else {
    alert("Otvori konverzaciju sa korisnikom pa klikni ponovo.");
  }
}

setInterval(kreirajWidget, 1000);
