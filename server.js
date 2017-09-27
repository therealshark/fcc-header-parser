const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log(ctx.request);
  ctx.body = {
    software: ctx.request.header['user-agent'],
    ipaddress: ctx.request.header['x-forwarded-for'].split(',')[0],
    language: ctx.request.header['accept-language'].split(',')[0],
  };
});

app.listen(process.env.PORT);