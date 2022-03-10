const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.10;

const item1={
    precio:prompt('Ingrese precio del producto1'),
    cantidad: prompt('Ingrese cantidad del producto1'),
    impuestos: IVA_GENERAL,
    calcularTotal:function() {
      return  this.precio * this.cantidad * this.impuestos
    }
}

const item2={
    precio:prompt('Ingrese precio del producto2'),
    cantidad:prompt('Ingrese cantidad del producto2'),
    impuestos: IVA_REDUCIDO,
    calcularTotal:function() {
        return  this.precio * this.cantidad * this.impuestos
    }
}

const factura={
    item1,
    item2,
    calcularTotal:function(){
        return this.item1.calcularTotal() + this.item2.calcularTotal();
    }
}

alert('El total es, amplicando el Iva general y el IVA reducido:' + factura.calcularTotal());