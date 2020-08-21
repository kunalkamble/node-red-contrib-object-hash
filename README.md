# node-red-contrib-object-hash for Node-RED



### What is object-hash
Generate hashes from objects and values in node and the browser. Uses node.js crypto module for hashing. Supports SHA1 and many others (depending on the platform) as well as custom streams (e.g. CRC32).

```js
msg.payload = { "name": "John Doe" }
// Returns e317d3d9d64fceaa527beee730c6cc23d2e10555

// You can pass options supported by object-hash along with payload
msg.options = { "excludeValues": true }
// Returns 4cde23d99c51efdfe33c129bc2eea88a52c822a6
```

[Read more](https://www.npmjs.com/package/object-hash)