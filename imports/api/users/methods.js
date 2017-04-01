import {Meteor} from 'meteor/meteor';
import {Pedidos} from '../../../collections/pedidos';
import {Productos} from '../../../collections/productos';

Meteor.methods({
	'users.search': function(params) {
		const searchQuery = {$regex: '.*' + (params.filter || '') + '.*', $options: 'i'},
			query = {},
			options = {
				limit: 100,
				skip: (Number(params.page) - 1) * 100,
				fields: {services: 0}
			};

		return {
			total: Pedidos.find(query).count(),
			users: Pedidos.find(query, options).fetch()
		};
	},
	'users.search2': function(params) {
		const searchQuery = {$regex: '.*' + (params.filter || '') + '.*', $options: 'i'},
			query = {},
			options = {
				limit: 100,
				skip: (Number(params.page) - 1) * 100,
				fields: {services: 0}
			};

		return {
			total: Productos.find(query).count(),
			users: Productos.find(query, options).fetch()
		};
	}
});
