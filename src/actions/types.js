export default defineActionConstants([

  // Currently Used
  // API
  'RESET_MAP',


]);

function defineActionConstants(names) {
  return names.reduce((result, name) => {
    result[name] = name;
    return result;
  }, {});
}
