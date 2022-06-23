const {error} = require('console');
const fs = require('fs');
const Array = [];
const ArrayVacio = [];

class Contenedor {
    constructor(tittle, price, thumbnail){
        this.tittle = tittle;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    save(object){
        this.id = Array.length + 1
        Array.push(object)
        console.log (`Producto agregado ${this.tittle} ID ${this.id}`)
        try{
            fs.writeFileSync('productos.txt', JSON.stringify(Array))
        } catch (error){
            console.log (error)
        
    }
}

    async getAll (){
        try{
            const productos = fs.readFileSync('productos.txt')
            let objects = JSON.parse(productos)
            console.log (objects)
        } catch(error){
            console.log (error)
        }
}

    getById(id){
        try{
            const productos = fs.readFileSync('productos.txt');
            let object = JSON.parse(productos);
            const content = object.find(p => p.id === id)
            console.log (content)
        } catch (error){
            console.log(null)
        }
    }

    async deleteById(id){
        const newArray = Array.filter(p=> p.id !== id)
        console.log (newArray)
        try {
            await fs.promises.writeFile('productos.txt', JSON.stringify(newArray))
            } catch (error){
                console.log (error)
            }
        }
    
    async deleteAll(){
        try{
            await fs.promises.writeFile('productos.txt', JSON.stringify(ArrayVacio))
        } catch (error){
            console.log(error)
        }
    }
}

const prenda1 = new Contenedor('Zapatilla', 24000, 'https://ucired.org.mx/wp-content/uploads/TOMS-del-Rey-Tenis-para-Mujer-300x300.jpg');
const prenda2 = new Contenedor('Remera', 8000, 'https://w7.pngwing.com/pngs/549/252/png-transparent-black-t-shirt-clothing-t-shirt-clothes-thumbnail.png');
const prenda3 = new Contenedor('Guantes', 45000, 'https://e7.pngegg.com/pngimages/44/750/png-clipart-gloves-gloves.png');

prenda1.save(prenda1);
prenda2.save(prenda2);
prenda3.save(prenda3);

producto2.getAll();
producto2.getById(2);
producto2.deleteById(2);
producto2.deleteAll();