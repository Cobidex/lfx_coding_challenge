/*
  processList - processes a list of integers

  @list: array of integers

  Returns: array of integers or throws an error
*/
export default function processList(list) {
    if (!Array.isArray(list)) throw new Error('List not an array');
    list.map((el) => {
        if (!(typeof el === 'number')) throw new Error('List must be made up of numbers');
        if (el % 10 !== 0) throw new Error("integer not a multiple of 10");
    });

    return list.filter((el, index) => !((index % 2 === 0 || index % 3 === 0) && index !== 0));
}