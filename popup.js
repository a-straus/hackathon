var db = new PouchDB('http://134.122.118.232:5984/hackathon');
console.log(db);

class User {
    constructor(name, id) {
        this._id = id;
        this.name = name;
    }
}


const login = document.getElementById('login');
const addPage = document.getElementById('addpage');
addPage.onclick = function(element) {
  const day = new Date().getDay
  const doc = {_id: Date.now(), day: day.getDate(), url: 'http://nytimes.com'}
  db.put(docs, function(err, result) {
    if (!err) console.log('added');
    else throw(err);
})
}


const data = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
  "hobbies": [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
  ]
}



login.onclick = function(element) {
    console.log(window.document);
    let username = document.getElementById('username-field').value;
    console.log(username);
    const docs = new User(username, "1");
    console.log(JSON.stringify(docs));
    db.put(docs, function(err, result) {
        if (!err) console.log('added');
        else throw(err);
    })

  };