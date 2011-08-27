var CONFIG = require('config').mongod;
var mongoose = require('mongoose');
Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://'+CONFIG.host+':'+CONFIG.port+'/'+CONFIG.db);

var File = new Schema({
  id      : ObjectId,
  name    : {type : String, default : '', required : true},
  offset  : {type : Number, default : 0},
  length  : {type : Number, default : 0}
});

var Task = new Schema({
  id      : ObjectId,
  jobid   : {type : String, default : '', required : true},
  input   : [File],
  output  : [File],
  type    : {type : String, default : 'map', enum: ['map','reduce']}
  status  : {type : String, default : 'pending', enum: ['pending','running','failed','completed']},
  message : String,
  nodeid  : {type : String, default : ''}
});

var Job = new Schema({
  id           : ObjectId,
  input        : [File],
  output       : [File],
  maps         : [Task],
  reduces      : [Task],
  created_at   : {type : Date, default : Date.now},
  finished_at  : {type : Date, default : Date.now},
  status       : {type : String, default : 'pending', enum: ['pending','running','failed','completed']},
  message      : String
});


mongoose.model('Job', Job);
var Job = exports.Job = mongoose.model('Job');

mongoose.model('File', File);
var File = exports.File = mongoose.model('File');

mongoose.model('Task', Task);
var Task = exports.Task = mongoose.model('Task');
  