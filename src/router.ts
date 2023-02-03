import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
import { handleInputErrors } from './modules/middleware';


const router = Router()

//  Product
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(),handleInputErrors,(req,res) => {
})
router.post('/product',body('name').isString(),handleInputErrors,createProduct)
router.delete('/product/:id', deleteProduct)

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
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {})
router.delete('/updatepoint', () => {})

export default router