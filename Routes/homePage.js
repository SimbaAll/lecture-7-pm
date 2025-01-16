import express from "express";
import homePageController from "../Controllers/homePage.js";

const router = express.Router()

router.post('/insert',homePageController.insert)
router.get('/get',homePageController.get)
router.put('/update/:id',homePageController.update)
router.delete('/delete/:id',homePageController.delete)

export default router