import {it, describe, expect} from 'vitest';
import processList from './main';


describe('The processList function', () => {
    it('returns the right result when list length is a multiple of 10', () => {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(processList(array)).toEqual([0, 1, 5, 7]);
    });

    it('throws error when list length is not zero and not a multiple of 10', () => {
        const array1 = [0,1,2,3,4,5,6,7,8,9,10,11];
        const array2 = [0,1];
        expect(() => processList(array1)).toThrowError(new Error('length of list must be a multiple of 10'));
        expect(() => processList(array2)).toThrowError(new Error('length of list must be a multiple of 10'));
    });

    it('throws an error if no content in list', () => {
        expect(() => processList([])).toThrowError(new Error('length of list must be a multiple of 10'));
    });

    it('throws an error when a non-array list is passed to it', () => {
        const array1 = 'string';
        const array2 = {'a': 10};
        expect(() => processList(array1)).toThrowError(new Error('argument must be an array'));
        expect(() => processList(array2)).toThrowError(new Error('argument must be an array'));
    });

    it('throws an error when no argument is passed', () => {
        expect(() => processList()).toThrowError(new Error('You must provide an argument'));
    });

    it('throws an error when argument is not an integer', () => {
        expect(() => processList(true)).toThrowError(new Error('argument must be an array'));
    });

    it('throws an error when argument contains non-integer', () => {
        const array = [10, 20, 30, 40, 50, true, 70, 80, 90, 100];
        expect(() => processList(array)).toThrowError(new Error('list must be made up of only integers'));
    });
});