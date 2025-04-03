/*
 * this is require module syntax
 * there also exist import express from 'express'
 * 
 * for hiding the variables and making them environment var we use dotenv module
 *  
 */

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('undead_004')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login here <h1/>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>This is for youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})