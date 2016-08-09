import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',

	isValed: Ember.computed.match('emailAddress',  /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValed'),

	actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },

	// actualEmailAdress: Ember.computed('emailAdress', function() {
	// 	console.log('actualEmailAdress function is called: ', this.get('emailAdress'));
	// }),

	// eamilAdressChanged: Ember.observer('emailAdress', function(){
	// 	console.log('Observer is called', this.get('emailAdress'));
	// })

});
