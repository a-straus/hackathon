var db = new PouchDB('http://134.122.118.232:5984/hackathon');

console.log(db);

class User {
  constructor(name, id) {
    this._id = id;
    this.name = name;
  }
}

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

const login = document.getElementById('login');
const addPage = document.getElementById('addpage');
addPage.onclick = function (element) {
  const day = new Date();
  const doc = {
    _id: Date.now().toString(),
    day: day.getDate(),
    url: 'http://nytimes.com'
  };
  db.put(doc, function (err, result) {
    if (!err) console.log('added');
    else throw err;
  });
};

const data = {
  _id: 'mittens',
  name: 'Mittens',
  occupation: 'kitten',
  age: 3,
  hobbies: [
    'playing with balls of yarn',
    'chasing laser pointers',
    "lookin' hella cute"
  ]
};

login.onclick = function (element) {
  console.log(window.document);
  let username = document.getElementById('username-field').value;
  console.log(username);
  const docs = new User(username, '1');
  console.log(JSON.stringify(docs));
  db.put(docs, function (err, result) {
    if (!err) console.log('added');
    else throw err;
  });
};
