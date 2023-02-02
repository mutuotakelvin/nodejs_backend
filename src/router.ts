import {Router} from 'express'
import { body, validationResult } from "express-validator";


const router = Router()

//  Product
router.get('/product', (req,res) => {
    res.json({message:"hello"})
})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), (req,res) => {
    const errors = validationResult(req)
    console.log(errors)
    
    if(!errors.isEmpty()){
        res.status(400)
        res.json({errors:errors.array()})
    }
})
router.post('/product', () => {})
router.delete('/product', () => {})

//  Update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update', () => {})

// Update Points
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint', () => {})

export default router