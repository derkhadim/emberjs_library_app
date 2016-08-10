import Ember from 'ember';

export default Ember.Controller.extend({

	headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {
        email: email 
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }

	// actualEmailAdress: Ember.computed('emailAdress', function() {
	// 	console.log('actualEmailAdress function is called: ', this.get('emailAdress'));
	// }),

	// eamilAdressChanged: Ember.observer('emailAdress', function(){
	// 	console.log('Observer is called', this.get('emailAdress'));
	// })

});
