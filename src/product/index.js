app.post("/product/", function(req, res) {
  if (req.body) {
    res.send(`product post`);
  }
});

app.get("/product/", function(req, res) {
  if (req.body) {
    res.send(`product get`);
  }
});

app.post("/product/", function(req, res) {
  if (req.body) {
    res.send(`product`);
  }
});
