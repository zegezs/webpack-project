class BasePlugin {

  constructor(options) {
    console.log(options);
  }

  apply(compiler) {
    // console.log(compiler);

    compiler.plugin('compilation', function(compilation, callback){

      compilation.plugin("optimize", function() {
        console.log("Assets are being optimized.");
      });

      // callback() 
    })
  }

}

module.exports = BasePlugin