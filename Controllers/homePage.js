import joi from "joi";
import DbConnection from "../mongoconnection.js";
import { ObjectId } from "mongodb";
import detailsSchema from "../Schema/homePage.js";

const homePageController = {
    async insert(req, res, next) {
        const { name, email, password, repeat_pass} = req.body

        const details = new detailsSchema({
            name,email,password, repeat_pass
        }) 
        
        const result = await details.save()

        res.send(result)
    },
    async get(req, res) {
        const data = await detailsSchema.find().select("-createdAt -updatedAt -__v").sort({name: -1})
        res.send(data)
    },
    async update(req, res) {
        
        const { name, email, password, repeat_pass} = req.body

        const result = await detailsSchema.findByIdAndUpdate({_id: req.params.id},{name, email, password, repeat_pass})

        res.send(result)
    },
    async delete(req, res) {
        const deleteData = await detailsSchema.findByIdAndDelete({_id: req.params.id})
        res.send(deleteData)
    }
}

export default homePageController