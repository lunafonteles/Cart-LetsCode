   
export class Product {
    id: number = 0;
    name: string = '';
    price: number = 0;
    image: string = '';

    constructor(id: number=0, name: string="", price: number = 0, image:string="") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

}