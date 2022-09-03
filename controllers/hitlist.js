const Hitlist = require('../models/Hitlist')

module.exports = {
    getEntries: async (req,res)=>{
        console.log(req.user)
        try{
            const entryItems = await Hitlist.find({userId:req.user.id})
            //res.render('todos.ejs', {entry: entryItems, user: req.user})
            res.status(200).json(entryItems)
        }catch(err){
            console.log(err)
        }
    },
    postEntry: async (req, res)=>{
        try{
            const entry = await Hitlist.create({
                companyName: req.body.companyName,
                dateAdded: req.body.dateAdded,
                url: req.body.url,
                rolePosition: req.body.rolePosition,
                typeOfPosition: req.body.typeOfPosition,
                source: req.body.source,
                userId: req.user.id
            })
            res.status(200).json(entry)
            //res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    putEntry: async (req, res)=>{
        try{
            //await Hitlist.findOneAndUpdate({_id:req.body.todoIdFromJSFile},req.body)
            const updatedEntry = await Hitlist.findByIdAndUpdate(req.params.id, req.body,{new: true})
            res.status(200).json(updatedEntry)
        }catch(err){
            console.log(err)
        }
    },
    deleteEntry: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            //await Hitlist.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            await Hitlist.findByIdAndDelete(req.params.id)
            res.json('Deleted')
        }catch(err){
            console.log(err)
        }
    }
}    