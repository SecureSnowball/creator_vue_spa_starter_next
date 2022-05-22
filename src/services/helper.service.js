class HelperService {
  prepareRouteParent(object) {
    if (!object) return "";
    return Object.keys(object).reduce((acc, current) => {
      acc += `/${current.slice(0, current.length - 2)}/${object[current]}`;
      return acc;
    }, "");
  }

  camelizeKeys(obj) {
    if (typeof obj !== "object") return obj;
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = key.replace(/(_\w)/g, (m) => m[1].toUpperCase());
      if (typeof obj[key] !== "object") {
        acc[newKey] = obj[key];
      } else if (obj[key] !== null) {
        acc[newKey] = this.camelizeKeys(obj[key]);
      }
      return acc;
    }, {});
  }
}

module.exports = new HelperService();
