/*
  processList - processes a list of integers
  
  @list: array of integers

  Returns: array of integers or throws an error
*/
export default function processList(list) {
    list.map((el) => {
        if (el % 10 !== 0) throw new Error("integer not a multiple of 10");
    });

    return list.filter((el, index) => !((index % 2 === 0 || index % 3 === 0) && index !== 0));
}