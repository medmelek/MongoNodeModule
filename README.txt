# MongoNodeModule
i present my MnM, which is reused a bloc of code, to configure your mongodb in (node)expressjs project 

=============================

1/ git clone https://github.com/medmelek/MongoNodeModule.git
2/ add db.js in your project 
3/ call db.js in your app.js file , with the following statement :
      const db = require('./db')
      db.connect();
4/ then, in your router :
      const db = require('./db')
      db.get()
   or directly in app.js, if your middelware is there
      db.get()
5/ after finished 
      db.close()
