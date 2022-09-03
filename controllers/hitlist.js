const Hitlist = require('../models/Hitlist')

module.exports = {
    getEntries: async (req,res)=>{
        console.log(req.user)
        try{
            const entryItems = await Hitlist.find({userId:req.user.id})
            //const entryTotal = await Hitlist.countDocuments()
            res.render('hitlist.ejs', {entries: entryItems, numEntries: entryItems.length,  user: req.user})
            //res.status(200).json(entryItems)
        }catch(err){
            console.log(err)
        }
    },
    getEntry: (req, res)=>{
        res.render('form.ejs')
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
            //res.status(200).json(entry)
            res.redirect('/hitlist')
        }catch(err){
            console.log(err)
        }
    },
    getEntryToEdit: async (req, res)=>{
        try {
            const singleEntry = await Hitlist.findById(req.params.id)
            res.render('editForm', {entry: singleEntry})
            //res.status(200).json(singleEntry)
        } catch (err) {
            console.error(err)
        }
    },
    putEntry: async (req, res)=>{
        try{
            //await Hitlist.findOneAndUpdate({_id:req.body.todoIdFromJSFile},req.body)
            const updatedEntry = await Hitlist.findByIdAndUpdate(req.params.id, req.body,{new: true})
            //res.status(200).json(updatedEntry)
            res.redirect('/hitlist')
        }catch(err){
            console.log(err)
        }
    },
    deleteEntry: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            //await Hitlist.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            await Hitlist.findByIdAndDelete(req.params.id)
            //res.json('Deleted')
            res.redirect('/hitlist')
        }catch(err){
            console.log(err)
        }
    }
}    