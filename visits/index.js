const exp = require("express");
const redis = require("redis");

const app = exp();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set("visits", 0);

app.get("/", (req, res)=>{
    client.get('visits', (err,  visits)=>{
        res.send("Visitors Count: " + visits);
        client.set('visits', parseInt(visits)+1);
    })
})

app.listen(8081, ()=>{
    console.log("listening on port 8081");
})

