const app = require("express")();
const fav = require("./Assets/favorite.json");
const cat = require("./Assets/categories.json");
const atistirmalik = require("./Assets/atistirmalik.json");
const bebek = require("./Assets/bebek.json");
const cardsData = require("./Assets/cardsData.json");
const cinselSaglik = require("./Assets/cinselSaglik.json");
const discount = require("./Assets/discount.json");
const dondurma = require("./Assets/dondurma.json");
const evyasam = require("./Assets/ev&yasam.json");
const evbakim = require("./Assets/evbakim.json");
const evcilHayvan = require("./Assets/evcilHayvan.json");
const firindan = require("./Assets/firindan.json");
const fitform = require("./Assets/fit&form.json");
const footerLink = require("./Assets/footerLink.json");
const kahvaltilik = require("./Assets/kahvaltilik.json");
const kisiselbakim = require("./Assets/kisiselbakim.json");
const meyvesebze = require("./Assets/meyve&sebze.json");
const newItem = require("./Assets/newItem.json");
const sliderData = require("./Assets/sliderData.json");
const suicecek = require("./Assets/su&icecek.json");
const suturunleri = require("./Assets/suturunleri.json");
const teknoloji = require("./Assets/teknoloji.json");
const temelgida = require("./Assets/temelgida.json");
const yiyecek = require("./Assets/yiyecek.json");
const campaings = require("./Assets/Campaings.json");
const urunler = require("./Assets/Urunler.json");
const bodyParser = require("body-parser");
const cors = require("cors");

app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("index", {
    title: "Getir-API",
    message: "Getir-Clone API",
  });
});
app.get("/api", (req, res) => {
  res.render("index", {
    title: "Getir-API",
    message: "Getir-Clone API",
  });
});

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Favorites API Endpoint
app.get("/api/favorite", (req, res) => {
  res.send(200, fav);
});
app.get("/api/favorite/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li  Favorite eleman?? bulunamad??",
    });
  }
  if (fav) {
    res.send(200, fav[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li Favorite eleman?? bulunamad??",
    });
  }
});
app.post("/api/favorite", (req, res) => {
  const dataSave = {
    id: fav.length + 1,
    name: req.body.name,
    price: req.body.price,
    unit: req.body.unit,
    url: req.body.url,
  };
  fav.push(dataSave);
  res.send(201, dataSave);
});
app.patch("/api/favorite/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li Favorite eleman?? bulunamad??",
    });
  } else {
    const favo = fav.find((obj) => obj.id == req.params.id);
    if (favo) {
      Object.keys(req.body).forEach((key) => {
        favo[key] = req.body[key];
      });
      res.send(200, favo);
    } else {
      res.send(404, {
        message: req.params.id + " id'li Favorite eleman?? bulunamad??",
      });
    }
  }
});
app.delete("/api/favorite/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li Favorite eleman?? bulunamad??",
    });
  } else {
    const favIndex = fav.findIndex((obj) => obj.id == req.params.id);
    if (favIndex > -1) {
      fav.splice(favIndex, 1);
      res.send(201, { message: "Silme i??lemi ba??ar??l??" });
    } else {
      res.send(404, {
        message: req.params.id + " id'li Favorite eleman?? bulunamad??",
      });
    }
  }
});
// Favorites API Endpoint
app.get("/api/categories", (req, res) => {
  res.send(200, cat);
});
app.get("/api/categories/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li Favorite eleman?? bulunamad??",
    });
  }
  if (cat) {
    res.send(200, cat[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li Categories eleman?? bulunamad??",
    });
  }
});

app.post("/api/categories", (req, res) => {
  const catSave = {
    id: fav.length + 1,
    name: req.body.name,
    price: req.body.price,
    unit: req.body.unit,
    url: req.body.url,
  };
  fav.push(catSave);
  res.send(200, catSave);
});
app.patch("/api/categories/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li Favorite eleman?? bulunamad??",
    });
  } else {
    const cate = fav.find((obj) => obj.id == req.params.id);
    if (cate) {
      Object.keys(req.body).forEach((key) => {
        cate[key] = req.body[key];
      });
      res.send(200, cate);
    } else {
      res.send(404, {
        message: req.params.id + " id'li Categories eleman?? bulunamad??",
      });
    }
  }
});
app.delete("/api/categories/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + "li Favorite eleman?? bulunamad??",
    });
  } else {
    const favIndex = fav.findIndex((obj) => obj.id == req.params.id);
    if (favIndex > -1) {
      fav.splice(favIndex, 1);
      res.send(201, { message: "Silme i??lemi ba??ar??l??" });
    } else {
      res.send(404, {
        message: req.params.id + "li Categories eleman?? bulunamad??",
      });
    }
  }
});

// Atistirmalik API Endpoint
app.get("/api/atistirmalik", (req, res) => {
  res.status(200).send(atistirmalik);
});
app.get("/api/atistirmalik/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li atistirmalik eleman?? bulunamad??",
    });
  }
  if (atistirmalik) {
    res.send(200, atistirmalik[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li atistirmalik eleman?? bulunamad??",
    });
  }
});

// bebek API Endpoint
app.get("/api/bebek", (req, res) => {
  res.status(200).send(bebek);
});
app.get("/api/bebek/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li bebek eleman?? bulunamad??",
    });
  }
  if (bebek) {
    res.send(200, bebek[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li bebek eleman?? bulunamad??",
    });
  }
});

// Cards API Endpoint
app.get("/api/cards", (req, res) => {
  res.status(200).send(cardsData);
});
app.get("/api/cards/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li cardsData eleman?? bulunamad??",
    });
  }
  if (cardsData) {
    res.send(200, cardsData[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li cardsData eleman?? bulunamad??",
    });
  }
});

// cinselSaglik API Endpoint
app.get("/api/cinselSaglik", (req, res) => {
  res.status(200).send(cinselSaglik);
});
app.get("/api/cinselSaglik/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li cinselSaglik eleman?? bulunamad??",
    });
  }
  if (cinselSaglik) {
    res.send(200, cinselSaglik[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li cinselSaglik eleman?? bulunamad??",
    });
  }
});

// discount API Endpoint
app.get("/api/discount", (req, res) => {
  res.status(200).send(discount);
});
app.get("/api/discount/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li discount eleman?? bulunamad??",
    });
  }
  if (discount) {
    res.send(200, discount[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li discount eleman?? bulunamad??",
    });
  }
});

// dondurma API Endpoint
app.get("/api/dondurma", (req, res) => {
  res.status(200).send(dondurma);
});
app.get("/api/dondurma/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li dondurma eleman?? bulunamad??",
    });
  }
  if (dondurma) {
    res.send(200, dondurma[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li dondurma eleman?? bulunamad??",
    });
  }
});

// evyasam API Endpoint
app.get("/api/evyasam", (req, res) => {
  res.status(200).send(evyasam);
});
app.get("/api/evyasam/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li evyasam eleman?? bulunamad??",
    });
  }
  if (evyasam) {
    res.send(200, evyasam[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li evyasam eleman?? bulunamad??",
    });
  }
});

// evbakim API Endpoint
app.get("/api/evbakim", (req, res) => {
  res.status(200).send(evbakim);
});
app.get("/api/evbakim/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li evbakim eleman?? bulunamad??",
    });
  }
  if (evbakim) {
    res.send(200, evbakim[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li evbakim eleman?? bulunamad??",
    });
  }
});

// evcilHayvan API Endpoint
app.get("/api/evcilHayvan", (req, res) => {
  res.status(200).send(evcilHayvan);
});
app.get("/api/evcilHayvan/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li evcilHayvan eleman?? bulunamad??",
    });
  }
  if (evcilHayvan) {
    res.send(200, evcilHayvan[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li evcilHayvan eleman?? bulunamad??",
    });
  }
});

// firindan API Endpoint
app.get("/api/firindan", (req, res) => {
  res.status(200).send(firindan);
});
app.get("/api/firindan/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li firindan eleman?? bulunamad??",
    });
  }
  if (firindan) {
    res.send(200, firindan[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li firindan eleman?? bulunamad??",
    });
  }
});

// fitform API Endpoint
app.get("/api/fitform", (req, res) => {
  res.status(200).send(fitform);
});
app.get("/api/fitform/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li fitform eleman?? bulunamad??",
    });
  }
  if (fitform) {
    res.send(200, fitform[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li fitform eleman?? bulunamad??",
    });
  }
});

// footerLink API Endpoint
app.get("/api/footerLink", (req, res) => {
  res.status(200).send(footerLink);
});
app.get("/api/footerLink/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li footerLink eleman?? bulunamad??",
    });
  }
  if (footerLink) {
    res.send(200, footerLink[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li footerLink eleman?? bulunamad??",
    });
  }
});

// kahvaltilik API Endpoint
app.get("/api/kahvaltilik", (req, res) => {
  res.status(200).send(kahvaltilik);
});
app.get("/api/kahvaltilik/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li kahvaltilik eleman?? bulunamad??",
    });
  }
  if (kahvaltilik) {
    res.send(200, kahvaltilik[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li kahvaltilik eleman?? bulunamad??",
    });
  }
});

// kisiselbakim API Endpoint
app.get("/api/kisiselbakim", (req, res) => {
  res.status(200).send(kisiselbakim);
});
app.get("/api/kisiselbakim/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li kisiselbakim eleman?? bulunamad??",
    });
  }
  if (kisiselbakim) {
    res.send(200, kisiselbakim[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li kisiselbakim eleman?? bulunamad??",
    });
  }
});

// meyvesebze API Endpoint
app.get("/api/meyvesebze", (req, res) => {
  res.status(200).send(meyvesebze);
});
app.get("/api/meyvesebze/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li meyvesebze eleman?? bulunamad??",
    });
  }
  if (meyvesebze) {
    res.send(200, meyvesebze[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li meyvesebze eleman?? bulunamad??",
    });
  }
});

// newItem API Endpoint
app.get("/api/newItem", (req, res) => {
  res.status(200).send(newItem);
});
app.get("/api/newItem/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li newItem eleman?? bulunamad??",
    });
  }
  if (newItem) {
    res.send(200, newItem[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li newItem eleman?? bulunamad??",
    });
  }
});

// sliderData API Endpoint
app.get("/api/sliderData", (req, res) => {
  res.status(200).send(sliderData);
});
app.get("/api/sliderData/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li sliderData eleman?? bulunamad??",
    });
  }
  if (sliderData) {
    res.send(200, sliderData[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li sliderData eleman?? bulunamad??",
    });
  }
});

// suicecek API Endpoint
app.get("/api/suicecek", (req, res) => {
  res.status(200).send(suicecek);
});
app.get("/api/suicecek/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li suicecek eleman?? bulunamad??",
    });
  }
  if (suicecek) {
    res.send(200, suicecek[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li suicecek eleman?? bulunamad??",
    });
  }
});

// suturunleri API Endpoint
app.get("/api/suturunleri", (req, res) => {
  res.status(200).send(suturunleri);
});
app.get("/api/suturunleri/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li suturunleri eleman?? bulunamad??",
    });
  }
  if (suturunleri) {
    res.send(200, suturunleri[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li suturunleri eleman?? bulunamad??",
    });
  }
});

// teknoloji API Endpoint
app.get("/api/teknoloji", (req, res) => {
  res.status(200).send(teknoloji);
});
app.get("/api/teknoloji/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li teknoloji eleman?? bulunamad??",
    });
  }
  if (teknoloji) {
    res.send(200, teknoloji[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li teknoloji eleman?? bulunamad??",
    });
  }
});

// temelgida API Endpoint
app.get("/api/temelgida", (req, res) => {
  res.status(200).send(temelgida);
});
app.get("/api/temelgida/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li temelgida eleman?? bulunamad??",
    });
  }
  if (temelgida) {
    res.send(200, temelgida[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li temelgida eleman?? bulunamad??",
    });
  }
});

// yiyecek API Endpoint
app.get("/api/yiyecek", (req, res) => {
  res.status(200).send(yiyecek);
});
app.get("/api/yiyecek/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li yiyecek eleman?? bulunamad??",
    });
  }
  if (yiyecek) {
    res.send(200, yiyecek[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li yiyecek eleman?? bulunamad??",
    });
  }
});
// campaings API Endpoint
app.get("/api/campaings", (req, res) => {
  res.status(200).send(campaings);
});
app.get("/api/campaings/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li campaings eleman?? bulunamad??",
    });
  }
  if (campaings) {
    res.send(200, campaings[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li campaings eleman?? bulunamad??",
    });
  }
});

// urunler API Endpoint
app.get("/api/urunler", (req, res) => {
  res.status(200).send(urunler);
});
app.get("/api/urunler/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li urunler eleman?? bulunamad??",
    });
  }
  if (urunler) {
    res.send(200, urunler[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li urunler eleman?? bulunamad??",
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
