export default  {
    port: 4000,
    mongoUrl: "mongodb+srv://admin:admin@cluster0.hhy4ah8.mongodb.net/?retryWrites=true&w=majority",
     corsOptions: { 
        origin:'*', 
        credentials:true,            
        optionSuccessStatus:200
    }
}