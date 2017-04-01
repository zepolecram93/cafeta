import angular from 'angular';

import templateUrl from './index.html';
import {Pedidos} from '../../../../collections/pedidos';

const name = 'app.dashboard';

class DashboardController {
	constructor($scope, $reactive) {
		$reactive(this).attach($scope);
		this.helpers({
			pedidos() {
				return Pedidos.find({});
			}
		})
		this.call("numFolio", (err, res) => {
			console.log(res);
			this.folio = res + 1;
		});
	}
	pedir(pedido) {
		console.log(pedido);
		this.call("ingresarPedido", pedido, (err, res) => {
			console.log(res);
			console.log(err);
		});
	}
}

export default name;

angular.module(name, [])
.config(['$stateProvider', $stateProvider => {
	$stateProvider.state('app.dashboard', {
		url: '/principal',
		templateUrl,
		controllerAs: 'p',
		controller: ['$scope', '$reactive', DashboardController]
	});
}]);
