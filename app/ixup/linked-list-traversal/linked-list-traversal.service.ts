import { Injectable } from '@angular/core';

@Injectable()
export class LinkedListTraversalService {
    public traverse(item: LinkedList): string {
        let first = item;
        let last = item;
        let count = 0;
        while (last.next) {
            last = last.next;
            count++;
            if (count >= 5) {
                first = first.next;
            }
        }
        if (count >= 4) {
            return first.value;
        } else {
            return 'unknown';
        }
    }
}

export interface LinkedList {
    next: LinkedList;
    value: string;
}