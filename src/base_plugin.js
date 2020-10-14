class BasePlugin {

  constructor(options) {
    console.log(options);
  }

  apply(compiler) {
    console.log(compiler);

    compiler.plugins('compilation', function(compilation){})
  }

}

module.exports = BasePlugin