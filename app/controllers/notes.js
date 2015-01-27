import Ember from "ember";
// import EmberValidations from 'ember-validations';

export default Ember.ArrayController.extend({
// export default Ember.Controller.extend(EmberValidations.Mixin, {
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');

      var note = this.store.createRecord('note', { body: body });
      this.set('noteCopy', '');
      note.save();
    },
    deleteNote: function (id) {
      var note = this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
    }
  }
  // validations: {
  //   stuff: {
  //     presence: true,
  //     length: { minimum: 5, maximum: 10 }
  //   }
  // }
});
