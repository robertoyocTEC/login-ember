import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session: service(),
	beforeModel() {
		return this.get('session').fetch().then(this.checkAuth.bind(this)).catch(this.checkAuth.bind(this))
	},
	checkAuth() {
		if (this.get('session.isAuthenticated')) { //si ya esta authenticado
			return this.transitionTo('index') //lo mando al index
		}

	}
});
