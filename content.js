
const ODGOVORI = [
  {
    label: "Dostupno",
    text: "Poštovanje,\nimamo na stanju,\nmožete doci lično ( lokacija i radno vreme vam pišu u opisu oglasa, nemamo aparat za kartice) ili\nAko želite da platite pouzecem po prijemu paketa\nPotrebno je ostaviti sledeće podatke:\n1.Ime i Prezime\n2.Tačnu Adresu\n3.Grad\n4.Poštanski broj\n5.Broj telefona\nDostava je besplatna za sve porudžbine od 3000 i preko dinara ( ispod toga trošak dostave je 330 din)\nŠaljemo preko kuririrske službe bex\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
    label: "Danas",
    text: "Poštovani,\n\nObaveštavamo Vas da će Vaša porudžbina biti poslata danas putem kurirske službe Bex.\nNapominjemo da je dostava besplatna za sve porudžbine u iznosu od 3000 dinara i više. Za porudžbine ispod tog iznosa, trošak dostave iznosi 330 dinara.\nHvala Vam na poverenju.\n-----------------------------------\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
    label: "Sutra",
    text: "Poštovani,\n\nObaveštavamo Vas da će Vaša porudžbina biti poslata sutra putem kurirske službe Bex.\nNapominjemo da je dostava besplatna za sve porudžbine u iznosu od 3000 dinara i više. Za porudžbine ispod tog iznosa, trošak dostave iznosi 330 dinara.\nHvala Vam na poverenju.\n-----------------------------------\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
    label: "Ponedeljak",
    text: "Poštovani,\n\nObaveštavamo Vas da će Vaša porudžbina biti poslata u ponedeljak putem kurirske službe Bex.\nNapominjemo da je dostava besplatna za sve porudžbine u iznosu od 3000 dinara i više. Za porudžbine ispod tog iznosa, trošak dostave iznosi 330 dinara.\nHvala Vam na poverenju.\n-----------------------------------\nPosetite nas sajt https://www.gembird.rs/"
  },
  {
	 label: "Lično preuzimanje",
     text :"Poštovanje,\n\npošto lično dolazite kod nas u kancelariju \nNaše radno vreme je radnim danima od 09 do 16 i 45 sa strankama, \nMoramo da napomenemo da nemamo aparat za kartice.\nAdresa je: Ljubice Đorđević 2 (stari naziv - Zrenjaniski put 103b ).\nGoogle mapa: Gembird.rs\n\nVidimo se. "
  },
  {
	  label:"Nemamo na stanju",
	  text:"Poštovanje, nažalost ovaj artikal nemamo na stanju, pogledajte našu ponudu :"
  },
  {
	  label :"Mala kolicina",
	  text:"Ako želite da Vam se pošalje,\nsamo mi javite da idem da fizički proverim da li ga imamo fizički na stanju.\nPošto je jedno što se vodi u sistemu,\na jedno je realno stanje na polici.\nHvala na razumevanju."
  },
  {
	  label:"Ocena",
	  text:"Izuzetna saradnja i profesionalnost. Dogovor u par recenica.\nŽelimo Vam puno zadovoljstva i sreće u korišćenju našeg proizvoda i nadamo se prilici za ponovnu saradnju.\nSve naše iskrene preporuke za ovog kupca"
  },
  {
	  label:"Uskoro",
	  text:"Postovanje,\ntrenutno nase artikle tj uvid u stanje mozete videti na nasem sajtu.  https://www.gembird.rs/\nAko na slici tog artikla   koji Vas interesuje,  stoji mala ikonica u desnom cosku  (uskoro) , to je oznaka da nazalost tog artikla nemamo trenutno na stanju tj da je stanje 0.\nOstali artikli koji nemaju tu slikicu , su dostupni, dok ulaskom u sam artikal mozete da vidite i tacnu kolicinu na stanju .\nVeliki pozdrav ."
  },
  {
	  label:"Mail to Office",
	  text:"Postovani,\npustite poruku na office@gembird.rs\npa će Vam neko od kolega koji je stručniji dati bolji odgovor.\nHvala i svako dobro."
  }
];

function kreirajWidget() {
  if (document.getElementById("kp-quick-reply-widget")) return;

  const widget = document.createElement("div");
  widget.id = "kp-quick-reply-widget";

  const naslov = document.createElement("h4");
  naslov.innerText = "⚡ Brzi Odgovori";
  widget.appendChild(naslov);

  ODGOVORI.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "kp-qr-btn";
    btn.innerText = item.label;
    
    btn.addEventListener("click", () => ubaciUTextarea(item.text));
    widget.appendChild(btn);
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