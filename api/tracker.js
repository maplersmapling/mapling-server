/*=============================================================================
File: tracker.js of mapling-server
-------------------------------------------------------------------------------
Description: holds middleware, declarations, and endpoints for Trackers 
             component
=============================================================================*/
// import express framework and middleware 
const express = require('express'); // creates servers and routers
const cors = require('cors'); // allows restricted resources on webpage
const helmet = require('helmet'); // secures express apps 

const db = require('../database/dbConfig');

const server = express(); // initialize server  

server.get(cors());
server.get(helmet());
server.get(express.json()); // parse requests in json format

/* starting endpoint - arguments: 1st - url endpoint, 2nd - callback of request and response */
server.get('/', (req, res) => {
    res.send('Welcome to the Trackers component server!')
});

server.get('/dailyTrackers', async (req, res) => {
    // GET all tracker items
    // return everything from todos table else error
    try {
        const items = await db('dailyTrackers');
        res.json(items)
    } catch(err) {
        console.log(err)
    }
});

// GET a specific dailyTracker item
server.get('/dailyTrackers/:id', async (req, res) => {

    const { id } = req.params
 
    try {
        const currentItem = await db('dailyTrackers').where({ id }) 
       // error message if there is an empty item
       currentItem.length === 0 ? res.status(404).json({ name: 'Task not found!' }) : res.status(200).json(currentTodo)
       res.status(201).json(currentItem)
    } catch(err) {
       console.log(err)
    }
 });
 

server.post('/dailyTrackers', async (req, res) => {
    // POST a tracker item
    //take item from request body
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ name: 'Missing text from submission!' })
    }

    try {
        await db('dailyTrackers').insert({ name })
        res.status(201).json({ name: 'Task successfully stored!' })
    } catch(err) {
        console.log(err)
    }

});

server.put('/dailyTrackers/:id', async (req, res) => {
    // Update a tracker item, pass id as variable 
    const { id } = req.params
    const { name } = req.body

    if(!name) {
        return res.status(400).json({ name: 'Missing text from submission!' })
    }

    try {
        const currentItem = await db('dailyTrackers').where({id}).update({message})
        res.status(200).json({name: 'update successful!'})
    } catch(err) {
        console.log(err)
    }

});

server.delete('/dailyTrackers/:id', async (req, res) => {
    // Delete a tracker item, pass id as variable 
    const { id } = req.params

    try {
        const currentItem = await db('dailyTrackers').where({id}).update({message})
        res.status(200).json({name: 'Delete successful!'})
    } catch(err) {
        console.log(err)
    }

});