Sequelize constants plugin
========================

Plugin allow to define constants in sequelize model

## Usage
```javascript

const sequelize = new Sequelize( credentials, options );

// Use plugin
require('sequelize-constants')( sequelize );

const MyModel = sequelize.define('MyModel', {
    /// Here cols defs
}, {
    constant: [
        STATUS_PENDING: 'pending',
        STATUS_RUNNING: 'running',
        STATUS_COMPLETE: 'complete',
        STATUS_ERROR: 'error',
        STATUS_ABORT: 'abort'
    ]
});

/// NOW access by

console.log( MyModel.STATUS_PENDING );

MyModel.STATUS_PENDING = 'foo'; // throw an error, readonly property!

```
