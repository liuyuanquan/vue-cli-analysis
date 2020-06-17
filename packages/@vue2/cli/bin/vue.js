#!/usr/bin/env node

const program = require('commander');
program
.option('--type [typeName]', 'type: dev && build')
.parse(process.argv);

const {type} = program;
if(type == 'dev'){
    console.log('do something h5', type)
}else if(type == 'build'){
    console.log('do something h5', type)
}else{
    console.log('params error');
    program.help();
}