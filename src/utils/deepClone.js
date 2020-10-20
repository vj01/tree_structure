export const deepClone = (data) => {
  if(Array.isArray(data)) {
    return data.map(el => deepClone(el));
  }

  if(typeof data === 'object') {
    var newObj = {};
    Object.keys(data).forEach(key => {
      newObj[key] = deepClone(data[key]);
    });

    return newObj;
  }

  return data;
}
