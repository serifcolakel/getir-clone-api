const app = require("express")();
const fav = require("./favorite.json");
const cat = require("./categories.json");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("index", {
    title: "Getir-API",
    message: "Serif Colakel Getir-RESTful-API",
  });
});
app.get("/api", (req, res) => {
  res.render("index", {
    title: "Getir-API",
    message: "Serif Colakel Getir-RESTful-API",
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/favorite", (req, res) => {
  res.send(200, fav);
});
app.get("/api/favorite/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li  Favorite elemanı bulunamadı",
    });
  }
  if (fav) {
    res.send(200, fav[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li Favorite elemanı bulunamadı",
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
      message: req.params.id + " id'li Favorite elemanı bulunamadı",
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
        message: req.params.id + " id'li Favorite elemanı bulunamadı",
      });
    }
  }
});
app.delete("/api/favorite/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li Favorite elemanı bulunamadı",
    });
  } else {
    const favIndex = fav.findIndex((obj) => obj.id == req.params.id);
    if (favIndex > -1) {
      fav.splice(favIndex, 1);
      res.send(201, { message: "Silme işlemi başarılı" });
    } else {
      res.send(404, {
        message: req.params.id + " id'li Favorite elemanı bulunamadı",
      });
    }
  }
});

app.get("/api/categories", (req, res) => {
  res.send(200, cat);
});
app.get("/api/categories/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + " id'li Favorite elemanı bulunamadı",
    });
  }
  if (cat) {
    res.send(200, cat[req.params.id]);
  } else {
    res.send(404, {
      message: req.params.id + " id'li Categories elemanı bulunamadı",
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
      message: req.params.id + " id'li Favorite elemanı bulunamadı",
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
        message: req.params.id + " id'li Categories elemanı bulunamadı",
      });
    }
  }
});
app.delete("/api/categories/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.send(400, {
      message: req.params.id + "li Favorite elemanı bulunamadı",
    });
  } else {
    const favIndex = fav.findIndex((obj) => obj.id == req.params.id);
    if (favIndex > -1) {
      fav.splice(favIndex, 1);
      res.send(201, { message: "Silme işlemi başarılı" });
    } else {
      res.send(404, {
        message: req.params.id + "li Categories elemanı bulunamadı",
      });
    }
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
