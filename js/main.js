data = {
  "positive": {
    "description": "Feelings when your needs are satisfied.",
    "feelings": [{
        "name": "affectionate",
        "values": [
          "compassionate",
          "friendly",
          "loving",
          "open hearted",
          "sympathetic",
          "tender",
          "warm"
        ]
      },
      {
        "name": "engaged",
        "values": [
          "absorbed",
          "alert",
          "curious",
          "engrossed",
          "enchanted",
          "entranced",
          "fascinated",
          "interested",
          "intrigued",
          "involved",
          "spellbound",
          "stimulated"
        ]
      },
    ]
  },
  "negative": {
    "description": "Feelings when your needs are not satisfied.",
    "feelings": [{
        "name": "afraid",
        "values": [
          "apprehensive",
          "dread",
          "foreboding",
          "frightened",
          "mistrustful",
          "panicked",
          "petrified",
          "scared",
          "suspicious",
          "terrified",
          "wary",
          "worried"
        ]
      },
      {
        "name": "annoyed",
        "values": [
          "aggravated",
          "dismayed",
          "disgruntled",
          "displeased",
          "exasperated",
          "frustrated",
          "impatient",
          "irritated",
          "irked"
        ]
      }
    ]
  }
}

var app = new Vue({
  el: '#app',
  data: {
    type: 'positive',
    messageTooltip: 'This is just a message',
    feelingInventory: data.positive
  },
  methods: {
    switchEmotions: function () {
      if (this.type === 'positive') {
        this.type = 'negative'
        this.feelingInventory = data.negative
      } else {
        this.type = 'positive'
        this.feelingInventory = data.positive
      }
    }
  }
})