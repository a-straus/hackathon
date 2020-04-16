var db = new PouchDB('http://134.122.118.232:5984/hackathon');
let x = db
  .createIndex({
    index: { fields: ['day'] }
  })
  .then(function () {
    return db.find({
      selector: { day: { $gte: date.getDate() - 3 } }
    });
  })
  .then(function (data) {
    data.docs.forEach((doc) => {
      console.log(doc);
      const a = document.createElement('a');
      a.innerHTML = doc.title;
      a.target = '_blank';
      a.href = doc.url;
      console.log(a);
      const articles = document.getElementById('articles');
      articles.appendChild(a);
      const span = document.createElement('span');
      span.innerHTML = ` - ${doc.name}`;
      a.insertAdjacentElement('afterend', span);
      const br = document.createElement('br');
      articles.appendChild(br);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const date = new Date();
console.log(
  db
    .createIndex({
      index: { fields: ['day'] }
    })
    .then(function () {
      return db.find({
        selector: { day: { $gte: date.getDate() - 3 } }
      });
    })
);

const addPage = document.getElementById('addpage');

addPage.onclick = function (element) {
  const day = new Date();
  const doc = {
    _id: Date.now(),
    day: day.getDate(),
    url: 'http://nytimes.com'
  };
  db.put(docs, function (err, result) {
    if (!err) console.log('added');
    else throw err;
  });
};
