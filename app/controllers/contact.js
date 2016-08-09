import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	message: '',

	isValedEmail: Ember.computed.match('emailAddress',  /^.+@.+\..+$/),
	isEnoughtMessage: Ember.computed.gte('message.length', 5),

	isValid: Ember.computed.and('isValedEmail', 'isEnoughtMessage'),

	actions: {
		sendMessage: function() {
			var email = this.get('emailAddress');
			var message = this.get('message');

			alert(`Votre message est entrai d'être envoyer ..`);

			var responseMessage = 'to:' + email + ', Message: ' + message ;

			this.set('responseMessage', responseMessage );
			this.set('emailAddress', '');
			this.set('message', '');
		}
	}


});
