import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numeropk'
})

export class NumeroPkPipe implements PipeTransform{
    transform(value: any){
        let valor = "00"+value;
        return valor.substring(valor.length - 3, valor.length);
    }
}