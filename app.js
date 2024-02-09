const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const Item = require('./models/item.js');


// mongoose.set('bufferCommands', false); 
mongoose.set('bufferTimeoutMS', 30000);

const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));



main()
.then(()=>{
    console.log("connection successfully");
})
.catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/Food');
// await mongoose.connect('mongodb+srv://mahaveerprajapat2702:C4V3DxcgPZvFGtZA@cluster0.0ffhglv.mongodb.net/?retryWrites=true&w=majority');

  await mongoose.connect('mongodb+srv://mahaveerprajapat2702:C4V3DxcgPZvFGtZA@cluster0.0ffhglv.mongodb.net/?retryWrites=true&w=majority');
}

// index route
app.get("/items",async(req,res)=>{
    let items  = await Item.find().maxTimeMS(30000);
    res.render("index.ejs",{items});
});

// new route
app.get("/items/new",(req,res)=>{
       res.render("new.ejs");
});

// create route
app.post("/items/new",(req,res)=>{
   let {name,price,origin,category,description,image} = req.body;
   let newItem = new Item({
        name: name,
        price: price,
        origin: origin,
        category: category,
        description: description,
        image: image,
    });
    newItem.save().then((res)=>{
        // console.log(res);
        console.log("food added");
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/items");
});

// show route 
app.get("/items/:id",async(req,res)=>{
    let {id} = req.params;
    const item  = await Item.findById(id);
    res.render("show.ejs",{item});
});



// edit route
app.get("/items/:id/edit",async(req,res)=>{
    let{id} = req.params;
    const item = await Item.findById(id);
    // console.log(item);
    res.render("edit.ejs",{item});
});

//update route
app.put("/items/:id",async(req,res)=>{
    let{id} = req.params;
    let {name,price,origin,category,description} = req.body;
    let updatedItem  = await Item.findByIdAndUpdate(id,{name:name,price:price,origin:origin,category:category,description:description},{runValidators: true, new: true});
    // console.log(updatedItem);
    res.redirect("/items");
});

// delete route 
app.delete("/items/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedItem = await Item.findByIdAndDelete(id);
    // console.log(deletedItem);
    res.redirect("/items");
});

app.get("/",(req,res)=>{
    res.send("this is root");
});
app.listen(port,()=>{
        console.log(`listing to port is${port}`);
});