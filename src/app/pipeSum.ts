import { Product } from 'src/app/model/product';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe  ({name:"pipeSum"})  
export class PipeSum implements PipeTransform {
    transform(args: Product[]): number {
       return args.reduce((acc, curr) => {return acc + curr.price;}, 0);
    }

}

