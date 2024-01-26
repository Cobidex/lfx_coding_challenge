/*
  processList - processes a list

  @list: array of integers

  Returns: mutated array or throws an error
*/
export default function processList(list) {
    if (!list) throw new Error('You must provide an argument');
    if (!Array.isArray(list)) throw new Error('argument must be an array');
    if (list.length === 0 || list.length % 10 !== 0) throw new Error('length of list must be a multiple of 10');

    let newList = list.slice();

    let index;
    for (index = (newList.length - 1); index > 0; index--) {
        if (!Number.isInteger(newList[index])) throw new Error('list must be made up of only integers');
        if (index % 2 === 0 || index % 3 === 0) newList.splice(index, 1);
    }

    return newList;
}