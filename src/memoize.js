export function memoize(func) {
    const Cache = new Map();
    if (typeof func !== 'function') return null;

    const memoized = function (...args) {
        const key = args.map(x => `${String(x)}:${typeof x}`).join('|');

        if (Cache.has(key)) {
            return Cache.get(key);
        }
        const result = func.apply(this, args);
        Cache.set(key, result);
        return result;
    };

    return memoized;
}

