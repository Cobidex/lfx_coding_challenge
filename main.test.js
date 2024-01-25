import {it, describe, expect} from 'vitest';
import processList from './main';


describe('The processList function', () => {
    it('returns the right result when list contains integers which are multiples of 10', () => {
        const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        expect(processList(array)).toEqual([10, 20, 60, 80]);
    });

    it('returns the right content of list when list contains negative integers divisible by 10', () => {
        const array = [-10, 20, -30, 40, -50, 60, 70, 80, 90, 100];
        expect(processList(array)).toEqual([-10, 20, 60, 80]);
    });

    it('returns the right list with one element in list', () => {
        const array = [10];
        expect(processList(array)).toEqual([10]);
    });

    it('throws an error when 1 element is not a multiple of 10', () => {
        const array = [10, 20, 30, 40, 50, 61, 70, 80, 90, 100];
        expect(() => processList(array)).toThrowError(new Error("number not a multiple of 10"));
    });

    it('returns correct result when list contains floating point numbers divisible by 10', () => {
        const array = [10.00, 20.0, 30, 40, 50, 60, 70, 80, 90, 100];
        expect(processList(array)).toEqual([10.00, 20.0, 60, 80]);
    });

    it('returns correct result when list contains negative floating point numbers divisible by 10', () => {
        const array = [-10.00, 20.0, 30, 40, 50, 60, 70, 80, 90, 100];
        expect(processList(array)).toEqual([-10.00, 20.0, 60, 80]);
    });

    it('throws an error when 1 element is a float and not a multiple of 10', () => {
        const array = [10, 20.1, 30, 40, 50, 61, 70, 80, 90, 100];
        expect(() => processList(array)).toThrowError(new Error("number not a multiple of 10"));
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

    it('throws an error when 1 element is a truthy boolean', () => {
        const array = [10, 20, 30, 40, 50, true, 70, 80, 90, 100];
        expect(() => processList(array)).toThrowError(new Error("List must be made up of numbers"));
    });
});