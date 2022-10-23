const init = (app, middleware=null)=>{
    app.use('/admin', (req)=>{
        console.log(req)
    })
}