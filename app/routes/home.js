'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg:'bg1.svg', title: 'Pet Factory'});
};

exports.about = (req, res)=>{
  res.render('home/about', {bg:'bg2.svg', title: 'About'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {bg: 'bg3.svg', title: 'Contact Us'});
};
