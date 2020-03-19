function f(collection, fn) {
  return _.map(collection, fn);
}

_.map([1, 2, 3], () => {});

_.map({ a: 1, b: 2 }, () => {});

const m1 = _.map([], () => {}); // здесь должно сработать
_ = { map: () => [] };

const m2 = _.map([], () => {}); // здесь НЕ должно сработать
