import { Router } from "express";

import { VersionH, Detalles } from '../controllers/generico.controllers.js'

const router = Router()

router.post('/VersionH/' , VersionH)

router.post('/Detalles/', Detalles);



export default router