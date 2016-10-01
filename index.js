'use strict';

module.exports = db => {
  db.hook('afterDefine', Model => {
    if( Model.options.constants ) {
      for( let name in Model.options.constants ) {
        Object.defineProperty( Model, name, {
          value: Model.options.constants[name],
          enumerable: true
        });
      }
    }
  });
};