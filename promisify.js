export default (target, ctx) => {
  if (typeof target !== 'function') throw new TypeError(`promisfiy first argument should be function instead of ${typeof target}`);
  // if target is already a Promise
  if (target.toString().match(/\[(.*?)\]|$/)[1] && RegExp.$1 === 'native code') return target;
  return (...args) => {
    return new Promise((resolve, reject) => {
      target.apply(ctx, [...args, (err, res) => {
        err ? reject(err) : resolve(res);
      }]);
    });
  };
};

