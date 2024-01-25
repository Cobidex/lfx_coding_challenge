import {it, describe, expect} from 'vitest';
import processList from './main';


describe('The processList function', () => {
    it('returns the right content of list when all integers are multiples of 10', () => {
        const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        expect(processList(array)).toEqual([10, 20, 60, 80]);
    });

    it('returns the right list with one element in list', () => {
        const array = [10];
        expect(processList(array)).toEqual([10]);
    });

    it('throws an error when 1 element is not a multiple of 10', () => {
        const array = [10, 20, 30, 40, 50, 61, 70, 80, 90, 100];
        expect(() => processList(array)).toThrowError(new Error("integer not a multiple of 10"));
    });

    it('returns an empty array if no content in list', () => {
        const array = [];
        expect(processList(array)).toEqual([]);
    });

    it('throws an error when a non-array list is passed to it', () => {
        const array1 = 'string';
        const array2 = {'a': 10};
        expect(() => processList(array1)).toThrowError(new Error('List not an array'));
        expect(() => processList(array2)).toThrowError(new Error('List not an array'));
    });

    it('throws an error when no argument is passed', () => {
        expect(() => processList()).toThrowError(new Error('List not an array'));
    });

    it('throws an error when 1 element is not a number', () => {
        const array = [10, 20, 30, 40, 50, 'string', 70, 80, 90, 100];
        expect(() => processList(array)).toThrowError(new Error("List must be made up of numbers"));
    });

});