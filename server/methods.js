import {Pedidos} from '../collections/pedidos';
import {Productos} from '../collections/productos';

Meteor.methods({
	'ingresarPedido': function(pedido){
		pedido.status = "sin atender";
		if(Pedidos.find().count() === 0){
			pedido.folio=1;
		}else{
			pedido.folio = Pedidos.find().count() + 1;
		}
		console.log(pedido);
		pedido.descripcion = Productos.findOne({id: pedido.id}, {fields:{descripcion: 1}}).descripcion;
		console.log(Productos.findOne({id: pedido.id}, {fields:{descripcion: 1}}));
		Pedidos.insert(pedido);
	},
	'numFolio': function() {
		return Pedidos.find().count();
	},
    
    'atender': function(_id) {
		Pedidos.update({_id}, {status: "atendido"});
    }
})