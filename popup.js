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
      const a = document.createElement('a')
      a.target = '_blank';
      a.href = doc.url
      document.getElementById('articles').appendChild(a)
  })}).catch(error => {
    console.log(error)
  });



const addPage = document.getElementById('addpage');

addPage.onclick = function(element) {
  const day = new Date()
  const doc = {_id: Date.now(), day: day.getDate(), url: 'http://nytimes.com'}
  db.put(docs, function(err, result) {
    if (!err) console.log('added');
    else throw(err);
})
}




const login = document.getElementById('login');

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
  }