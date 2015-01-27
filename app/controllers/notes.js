import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var title = this.get('titleCopy');
      var body = this.get('noteCopy');

      if (body && title && body.trim() && title.trim()) {
        var note = this.store.createRecord('note', { title: title, body: body });
        note.save();
      }
      this.set('titleCopy', '');
      this.set('noteCopy', '');
    },

    deleteNote: function (id) {
      this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save().then(function(){
          this.flashMessage('success', 'Your note has been deleted!');
        }.bind(this));
      }.bind(this));
    }
  }
});
