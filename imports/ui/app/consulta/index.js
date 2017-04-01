import angular from 'angular';

import templateUrl from './index.html';
import {Meteor} from 'meteor/meteor';
import {Pedidos} from '../../../../collections/pedidos';

const name = 'app.consulta';

export default name;


class consultaController {
	constructor($scope, $reactive) {
		$reactive(this).attach($scope);

		this.options = {
			filter: '',
			page: 1
		}

		$scope.$watch(angular.bind(this, () => this.options.page), () => {
			this.search();
		});
	}

	search() {
		this.call('users.search2', this.options, (err, res) => {
			this.loading = false;

			if(err) {
				return alert(err.reason || err.message);
			}

			this.users = res.users;
			this.total = res.total;
		});
	}
}

angular.module(name, [])
.config(['$stateProvider', $stateProvider => {
	$stateProvider.state('app.consulta', {
		url: '/consulta',
		templateUrl,
		controller: ["$scope", "$reactive", consultaController],
		controllerAs: "c",
	});
}]);
