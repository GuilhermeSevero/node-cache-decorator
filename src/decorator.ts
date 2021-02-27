import NodeCache from 'node-cache';

const cache = new NodeCache();

export default (id: string, ttl: number = 0) => {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const key = JSON.stringify({ id, args });

      if (!cache.has(key)) {
        const result = original.apply(this, args);
        cache.set(key, result, ttl);
      }

      return cache.get(key);
    }
  };
}
