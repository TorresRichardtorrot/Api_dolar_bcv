import { Router } from "express";
import { getDollar,createDollar,modifyDollar } from '../controller/dolar.controller.js'
const router = Router()


router.get('/dollarBcv',getDollar)

router.post('/dollarBcv',createDollar)

router.put('/dollarBcv/:_id',modifyDollar)

export default router