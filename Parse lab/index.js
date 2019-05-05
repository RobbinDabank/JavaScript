let osmosis = require("osmosis");
let fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

osmosis
  .get("https://rozetka.com.ua/headphones/c80027/producer=koss/?gclid=Cj0KCQjwh6XmBRDRARIsAKNInDGtUMTSF_KWBCI7Shra86W_pB0MhSfemWmRaNkn9JFoVn4k6H-NZl8aAmQyEALw_wcB#search_text=koss")
  .find(".g-i-tile-i-box-desc")
  .set({
    related: [".g-i-tile-i-title a"]
    
  })
  .data(function(listing) {
    console.log(listing);
    let data = {},
      data1 = {};
    for (let i = 0; i < listing.related.length; i++) {
      data1[i] = listing.related[i];
    }
    data.films = data1;
    console.log(data);
    fs.appendFileSync("index.html", JSON.stringify(data), function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
    mongoClient.connect(function(err, client) {
      const db = client.db("Task_DB");
      const collection = db.collection("parse_collection");
      collection.insertOne(data, function(err, result) {
        if (err) {
          return console.log(err);
        }
        // console.log(result.ops);
        client.close();
      });
    });
  });
