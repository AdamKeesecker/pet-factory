'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var pets = global.nss.db.collection('pets');

  pets.find().toArray((err, records)=>{
    res.render('pets/index', {pets: records, bg: 'bg4.svg', title: 'Pets'});
  });
};

exports.show = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findOne({_id:_id}, (err, record)=>{
    res.render('pets/show', {pet: record, bg: 'bg4.svg', title: 'Pets'});
  });
};

exports.new = (req, res)=>{
  res.render('pets/new', {bg: 'bg4.svg', title: 'New Pet'});
};

exports.destroy = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/pets');
  });
};

exports.create = (req, res)=>{
  var photo;

  switch(req.body.species){
  case 'Cat':
    photo = 'cat.jpeg';
    break;
  case 'Dolphin':
    photo = 'dolhpin_Img.jpeg';
    break;
  case 'Duck':
    photo = 'duck.jpeg';
    break;
  case 'Frog':
    photo = 'frog.jpeg';
    break;
  case 'Giraffe':
    photo = 'giraffe.jpeg';
    break;
  case 'Kangaroo':
    photo = 'kangaroo.jpeg';
    break;
  case 'Monkey':
    photo = 'monkey.jpeg';
    break;
  case 'Owl':
    photo = 'owl.jpeg';
    break;
  case 'Rhino':
    photo = 'rhino.jpeg';
    break;
  case 'Tiger':
    photo = 'tiger.jpeg';
  }
  req.body.photo = photo;
  var pets = global.nss.db.collection('pets');
  pets.save(req.body, (err, obj)=>{
    res.redirect('/pets');
  });
};
