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

  // TODO:
  // Display our data
  // On click: flip cards back and forth
  // Get info for new cards from the user
    // create data properties for front and back of new cards
    // Bind those properties to the form input using v-model
  // Add new card when user hits enter or clicks button
  // Delete cards
  // Animate card flip
  // Display an error message if form fields are blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: ''
    },
    methods: {
        // to display the front/back of card once clicked
        toggleCard: function (card) {
            card.flipped = !card.flipped;
        },
        // add new card when button clicked
        addNew: function() {
            this.cards.push({
                front: this.newFront,
                back: this.newBack,
                flipped: false
            });
        }

    }
  });
