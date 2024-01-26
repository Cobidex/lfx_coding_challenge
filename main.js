/*
  processList - processes a list

  @list: array

  Returns: mutated array or throws an error
*/
export default function processList(list) {
    if (!list) throw new Error('You must provide an argument');
    if (!Array.isArray(list)) throw new Error('argument must be an array');
    if (list.length === 0 || list.length % 10 !== 0) throw new Error('length of list must be a multiple of 10');

    return list.filter((el, index) => !((index % 2 === 0 || index % 3 === 0) && index !== 0));
}