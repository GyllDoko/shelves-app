export  function findObjectByTitle(arr: any, searchWord: any) {
  return arr.filter((obj: any )=> obj.title.includes(capitalizeFirstLetter(searchWord)));
}
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}