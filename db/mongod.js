var CONFIG = require('config').mongod;
var mongod = require('mongodb');


MDB = function() {
  this.db = new mongod.Db(CONFIG.db, new mongod.Server(CONFIG.host, CONFIG.port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};

MDB.prototype.getCollection= function(collection, callback) {
  this.db.collection(collection, function(error, theCollection) {
    if( error ) callback(error);
    else callback(null, theCollection);
  });
};

MDB.prototype.findAll = function(collection,callback) {
    this.getCollection(collection,function(error, theCollection) {
      if( error ) callback(error)
      else {
          theCollection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

MDB.prototype.findById = function(collection, id, callback) {
    this.getCollection(collection, function(error, theCollection) {
      if( error ) callback(error)
      else {
          theCollection.findOne({_id: id}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

MDB.prototype.save = function(collection, items, callback) {
    this.getCollection(collection, function(error, theCollection) {
      if( error ) callback(error)
      else {
        if( typeof(items.length)=="undefined")
          items = [items];

        theCollection.insert(items, function() {
          callback(null, items);
        });
      }
    });
};

exports.MDB = MDB;
