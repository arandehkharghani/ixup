import { Injectable } from '@angular/core';

@Injectable()
export class WordReversalService {
    public reverse(sentence: string): string {
        let splitArr = sentence.split(/\s+/);

        for (let i = 0; i < splitArr.length; i++) {
            splitArr[i] = splitArr[i].split('').reverse().join('');
        }

        return splitArr.join(' ');
    }
}