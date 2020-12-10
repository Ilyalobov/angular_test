import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ReversePipe'})
export class ReversePipe implements PipeTransform {
    transform(value: any): string {
        if (typeof value !== 'string') {
            throw new Error('ReversePipe: Not a string!');
        }
        let newStr = '';
        for (let i = value.length - 1; i >= 0; i--) {
            newStr += value.charAt(i);
        }
        return newStr;
    }
}
