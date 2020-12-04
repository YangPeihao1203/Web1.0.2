module.exports = {
 apps:[
  {
    name:'抄一抄',
    exec_mode:'cluster',
    instance:'max',
    script:'./node_modules/nuxt/bin/nuxt.js',
    args:'start',
  },
 ],
};
