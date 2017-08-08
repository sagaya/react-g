#!/usr/bin/env node
const program = require('commander');
var touch = require("touch")
const mkdirp = require('mkdirp');
const fs = require('fs');
var path = require('path');

program
  .version('0.0.1')
  .option('-g, --generate [generate]', 'Generate new component')
  .parse(process.argv)


const newComponent = "import React, {Component } from 'react'; \n \n class " + program.generate + " extends Component {\n constructor() {\n \tsuper() \n } \n render(){ \n\treturn( \n\t<div>\n\t</div>\n)\n}\n} \n\n export default "+program.generate

mkdirp('components/'+program.generate, (err)=>{
  if (err) {
    console.log(err);
  }else {
    touch('components/'+program.generate +'/'+ program.generate + '.jsx', (err)=>{
      if (err) {
        console.log(err);
      }else {
        touch('components/'+program.generate +'/'+ program.generate + '.sass', (err)=>{
          if (err) {
            console.log(err);
          }else {
            var filePath = path.join(__dirname, 'components', program.generate , program.generate + '.jsx');
            fs.writeFile(filePath, newComponent, (err)=>{
              if (err) {
                console.log(err);
              }else {
                console.log(program.generate + '.jsx created');
                console.log(program.generate + '.sass created');
                console.log("Pow!");
              }
            })
          }
        })
      }
    })
  }
})
