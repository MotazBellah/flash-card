const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,

    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ];


  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
    },
    methods: {
        // to display the front/back of card once clicked
        toggleCard: function (card) {
            card.flipped = !card.flipped;
        },
        // add new card when button clicked
        addNew: function() {
            // If use does not write in the fron or back
            // Display message connected to `error`
            if (!this.newFront || !this.newBack) {
                this.error = true
            } else {
                this.cards.push({
                    front: this.newFront,
                    back: this.newBack,
                    flipped: false
                });
                // Reset the input forms
                this.newFront = '';
                this.newBack = '';
                this.error = false;
            }
        }

    }
  });
