import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
import {Productos} from '../../collections/productos';

Meteor.startup(() => {
	if(Meteor.users.find().count()===0) {
		const _id = Accounts.createUser({
			username: 'admin',
			password: 'admin'
		});

		Roles.addUsersToRoles(_id, ['admin']);

		Meteor.users.update(_id, {$set: {active: true, profile: {name: 'Administrator'}}});
	}
	if(Productos.find().count()===0) {
		productos = [
			
                {id: "100", descripcion: "Burrito del dia", precio:14},
                {id: "101", descripcion: "Burrito lomo", precio: 24},
                {id: "102", descripcion: "Burrito chile relleno", precio: 19},
                {id: "103", descripcion: "Montado", precio: 22},

                {id: "104", descripcion: "Torta lomo", precio: 32},
                {id: "105", descripcion: "Torta deshebrada", precio: 40},
                {id: "106", descripcion: "Torta milanesa", precio: 42},
                {id: "107", descripcion: "Torta jamon", precio: 30},
                {id: "108", descripcion: "Torta chavo", precio: 25},

                {id: "109", descripcion: "Hamburguesa s/ papas", precio: 32},
                {id: "110", descripcion: "Hamburguesa c/ papas", precio: 40},

                {id: "111", descripcion: "Hot dog", precio: 22},
                {id: "112", descripcion: "Hot dog c/ papas", precio: 30},

                {id: "113", descripcion: "Hamburguesa con papas", precio: 40},

                {id: "114", descripcion: "Enchiladas rojas c/ arroz", precio: 40},
                {id: "115", descripcion: "Tacos c/ arroz", precio: 40},
                {id: "116", descripcion: "Flautas c/ arroz", precio: 40},
                {id: "117", descripcion: "Chilaqui sencillos", precio: 40},
                {id: "118", descripcion: "Chilaqui c/ frijoles", precio: 40},

                {id: "119", descripcion: "Mollete sencillo", precio: 40},
                {id: "120", descripcion: "Mollete montado", precio: 40},

                {id: "121", descripcion: "Cuernito jamon", precio: 40},

                {id: "122", descripcion: "Papas s/ queso", precio: 40},
                {id: "123", descripcion: "Papas c/ queso", precio: 40},

                {id: "124", descripcion: "Quesadilla maiz", precio: 40},
                {id: "125", descripcion: "Quesadilla harina", precio: 40},

                {id: "127", descripcion: "Sandwitch atun", precio: 30},
                {id: "128", descripcion: "Sandwitch pollo", precio: 27},
                {id: "129", descripcion: "Sandwitch jamon", precio: 25},

                {id: "130", descripcion: "Croissant pollo", precio: 30},
                {id: "131", descripcion: "Croissant jamon", precio: 28},

                {id: "132", descripcion: "Panini pollo", precio: 32},
                {id: "133", descripcion: "Panini jamon", precio: 32},

                {id: "134", descripcion: "Bagguette pollo", precio: 37},
                {id: "135", descripcion: "bagguette jamon", precio: 32},

                {id: "136", descripcion: "Ensalada pollo", precio: 35},
                {id: "137", descripcion: "Ensalada jamon", precio: 31},
                {id: "138", descripcion: "Ensalada combinada", precio: 40},
                {id: "139", descripcion: "Ensalada dulce", precio: 40},

                {id: "140", descripcion: "Coctel frutas", precio: 25},
                {id: "141", descripcion: "Coctel yogurt", precio: 40},

                {id: "142", descripcion: "Licuado platano", precio: 22},
                {id: "143", descripcion: "Licuado fresa", precio: 22},
                {id: "144", descripcion: "Licuado papaya", precio: 22},
                {id: "145", descripcion: "Licuado mango", precio: 22},
                {id: "146", descripcion: "licuado combinado", precio: 25},

                {id: "147", descripcion: "Jugo naranja", precio: 20},
                {id: "148", descripcion: "Jugo toronja", precio: 20},
                {id: "149", descripcion: "Jugo zanahoria", precio: 30},
                {id: "150", descripcion: "Jugo Combinado", precio: 28},

                {id: "151", descripcion: "Chocomilk", precio: 23},
                {id: "152", descripcion: "Cafe", precio: 15},
            
                {id: "153", descripcion: "Beca Alimenticia", precio: 0},
		]
		_.each(productos, function(p){
			Productos.insert(p);	
		})
		
	};
});