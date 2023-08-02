class TwoWheeler{
    brand: string;
    colour: string;

    constructor(brand: string, colour: string){
        this.brand = brand;
        this.colour = colour;
    }
    disp(): void{
        console.log("My TwoWheeler is: " + this.brand +""+ this.colour);
    }
}

class Honda extends TwoWheeler{
    version : string;
    constructor(brand: string, colour: string, version: string){
        super(brand,colour);
        this.version = version;
    }
    disp(): void{
        console.log("The Version is: " + this.brand +" "+ this.colour +" "+ this.version);
    }
}
var activa = new Honda("Honda","Gold","Activa");
activa.disp();