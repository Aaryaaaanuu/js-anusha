const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman", "batman", "flash"]
marvel_heros.push(dc_heros) // this pushes dc heros at the back of marvel heros.
console.log(marvel_heros); ////[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]  a nested array.
console.log(marvel_heros[3][1]); //its uses 3 index['thor', 'ironman', 'spiderman] of the nested array and it takes intex 1 after that i.e batman 3+1=4 th index of nested array
// concat
marvel_heros.concat(dc_heros)
console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ] same thing as push

