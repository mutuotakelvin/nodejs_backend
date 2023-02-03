import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';


const router = Router()

//  Product
router.get('/product', (req,res) => {
    res.json({message:"hello"})
})
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(),handleInputErrors,(req,res) => {
})
router.post('/product',body('name').isString(),handleInputErrors, () => {})
router.delete('/product', () => {})

//  Update
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS','LIVE','DEPRECATED','ARCHIVED']),
    body('version').optional(),
    handleInputErrors,
    (req,res) => {
})
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    () => {

})
router.delete('/update', () => {})

// Update Points
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
() => {})
router.post('/updatepoint',
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('updateId').exists().isString(),
    () => {})
router.delete('/updatepoint', () => {})

export default router