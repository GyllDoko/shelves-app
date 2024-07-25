export  function findObjectByTitle(arr: object[], searchWord: string) {
  return arr.filter(obj => obj.title.includes(capitalizeFirstLetter(searchWord)));
}
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}