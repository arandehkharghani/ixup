import { Injectable } from '@angular/core';

@Injectable()
export class TriangleCategeorisationService {
    public categorise(form: any): string {
        let sides = [Number(form.sideA), Number(form.sideB), Number(form.sideC)];

        if (!sides[0] || !sides[1] || !sides[2]) {
            return 'unknown';
        }

        let countOfEqualSides = 1;

        for (let i = 0; i < sides.length - 1; i++) {
            for (let j = i + 1; j < sides.length; j++) {
                if (sides[i] === sides[j]) {
                    countOfEqualSides++;
                }
            }
        }

        if (countOfEqualSides === 4) {
            return 'Equilateral Triangle';
        } else if (countOfEqualSides === 2) {
            return 'Isosceles Triangle';
        }
        return 'Scalene Triangle';
    }
}