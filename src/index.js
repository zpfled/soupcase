import { camelCase, forIn, isArray, snakeCase } from "lodash";

export function toCamelCase (value) {
  return _recursiveMapKeys(
    str => (`${str}`[ 0 ] === "_" ? `_${camelCase(str)}` : camelCase(str)),
  )(value);
}

export function toSnakeCase (value) {
  return _recursiveMapKeys(
    str => (`${str}`[ 0 ] === "_" ? `_${snakeCase(str)}` : snakeCase(str)),
  )(value);
}

function _isObject (value) {
  return Boolean(
    value && typeof value === "object" && value.constructor === Object,
  );
}

// _recursiveMapKeys
// - returns: function (function) that recursively calls the { iterator }
//   on every nested key in the returned function's argument
// - arguments: iterator (function)
function _recursiveMapKeys (iterator) {
  const converterFn = value => {
    if (isArray(value)) {
      return value.map(converterFn);
    }

    if (_isObject(value)) {
      let convertedObj = {};

      forIn(value, (value, key) => {
        convertedObj = { ...convertedObj, [ iterator(key) ]: converterFn(value) };
      });

      return convertedObj;
    }

    return value;
  };

  return converterFn;
}
