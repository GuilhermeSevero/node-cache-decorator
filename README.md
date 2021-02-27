# node-cache-decorator

A very simple wrapper for [node-cache](https://www.npmjs.com/package/node-cache) which is a caching module that has set, get and delete methods and works a little bit like memcached. Keys can have a timeout (ttl) after which they expire and are deleted from the cache. All keys are stored in a single object so the practical limit is at around 1m keys.. This use as dependence the project [node-cache/node-cache](https://github.com/node-cache/node-cache), adding Method Decorator.

## Dependencies
* [node-cache](https://github.com/node-cache/node-cache)

## Installation
1. Install node-cache-decorator:
    ```
    npm install node-cache-decorator
    ```

## Using
You can encrypt your PDF by following:
```
import cache from 'node-cache-decorator';

class TestCache {
  count: number = 0;

  @cache('TestCache.get', 20)
  public get(): number {
    this.count += 1;
    return this.count;
  }
}

const tesCache = new TestCache();

setInterval(() => {
  console.log(tesCache.get());
}, 1000);
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/GuilhermeSevero/node-cache-decorator.


## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
