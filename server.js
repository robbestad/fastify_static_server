var f= require("fastify")({logger:true});
var path=require("path");
f.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist'),
  prefix: '/'
});
(async()=>{
try{
await f.listen(process.env.PORT||4000);
f.log.info("running on "+f.server.address().port);
}catch(e){
f.log.error(e); process.exit(1);
}})()
