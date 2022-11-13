storage-sync-lite<br>
[![NPM Version](https://img.shields.io/npm/v/storage-sync-lite.svg?branch=main)](https://www.npmjs.com/package/storage-sync-lite)
[![Install Size](https://badgen.net/packagephobia/install/storage-sync-lite)](https://packagephobia.now.sh/result?p=storage-sync-lite)
[![Downloads Per Week](https://img.shields.io/npm/dw/storage-sync-lite.svg?color=blue)](https://www.npmjs.com/package/storage-sync-lite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
================

Easily store objects or any type of data to localStorage or sessionStorage.<br>
Why this? When you store a JSON/object to localStorage or sessionStorage you need to stringify the data. After storing a number in localStorage when you will read it, you will get the number as a string. But storage-sync-lite allows storing and retrieving data without changing the type. If you store an object when you will read, it will return the object.


## Table of Contents

-   [Features](#features)
-   [Install](#install)
-   [Usage](#usage)
-   [License](#license)
-   [Author](#author)


## Features

- Set, get and delete localStorage or sessionStorage without stringifying or changing the data type.
- Change/update objects in localStorage or sessionStorage.
- Clear localStorage or sessionStorage.


## Install

```sh
npm i storage-sync-lite
```

## Usage

Set and get local:
```javascript
import { setLocal, getLocal } from 'storage-sync-lite'

// Set/Store
setLocal('user', {
    email: 'user@example.com',
    age: 25
})

// Get
let user = getLocal('user')
console.log(user) // Returns: { email: 'user@example.com', age: 25 }
```

Change/update properties from local:
```javascript
import { changeLocal, getLocal } from 'storage-sync-lite'

// Change/update properties
changeLocal('user', {
    name: 'Mr. User'
})

console.log(getLocal('user')) // Returns: { email: 'user@example.com', age: 25, name: 'Mr. User' }
```

Delete data from local:
```javascript
import { deleteLocal, clearLocal } from 'storage-sync-lite'

// Delete single data from local
deleteLocal('user')

// Clear / delete all data from local
clearLocal()
```

Set and get session:
```javascript
import { setSession, getSession } from 'storage-sync-lite'

// Set/Store
setSession('user', {
    email: 'user@example.com',
    age: 25
})

// Get
let user = getSession('user')
console.log(user) // Returns: { email: 'user@example.com', age: 25 }
```

Change/update properties from session:
```javascript
import { changeSession, getSession } from 'storage-sync-lite'

// Change/update properties
changeSession('user', {
    name: 'Mr. User'
})

console.log(getSession('user')) // Returns: { email: 'user@example.com', age: 25, name: 'Mr. User' }
```

Delete data from session:
```javascript
import { deleteSession, clearSession } from 'index'

// Delete single data from session
deleteSession('user')

// Clear / delete all data from session
clearSession()
```


## License

storage-sync-lite is licensed under the [MIT license](https://github.com/SheikhAminul/storage-sync-lite/blob/main/LICENSE).


## Author

|[![@SheikhAminul](https://avatars.githubusercontent.com/u/25372039?v=4&s=96)](https://github.com/SheikhAminul)|
|:---:|
|[@SheikhAminul](https://github.com/SheikhAminul)|
