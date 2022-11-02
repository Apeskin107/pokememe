const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
app.use(express.static('public'))
var games = []

class Card {
  constructor(cardNum) {
    this.cardNum = cardNum
    this.snooze = true
    this.attacked = false

    switch (cardNum) {
      case 1:
        this.maxHealth = 70
        this.rarity = 1 //1 is common, 2 is rare, 3 is epic, 4 is legendary
        this.type = 1 //1 is celebrity, 2 is meme
        break
      case 2:
        this.maxHealth = 90
        this.rarity = 1
        this.type = 2
        break
      case 3:
        this.maxHealth = -1
        this.rarity = 4
        this.type = 2
        break
      case 4:
        this.maxHealth = 80
        this.rarity = 3
        this.type = 2
        break
      case 5:
        this.maxHealth = 85
        this.rarity = 4
        this.type = 1
        break
      case 6:
        this.maxHealth = 60
        this.rarity = 3
        this.type = 1
        break
      case 7:
        this.maxHealth = 55
        this.rarity = 3
        this.type = 2
        break
      case 8:
        this.maxHealth = 70
        this.rarity = 3
        this.type = 1
        break
      case 9:
        this.maxHealth = 55
        this.rarity = 2
        this.type = 2
        break
      case 10:
        this.maxHealth = 50
        this.rarity = 2
        this.type = 1
        break
      case 11:
        this.maxHealth = 75
        this.rarity = 1
        this.type = 2
        break
      case 12:
        this.maxHealth = 60
        this.rarity = 1
        this.type = 2
        break
      case 13:
        this.maxHealth = 15
        this.rarity = 2
        this.type = 2
        break
      case 14:
        this.maxHealth = 80
        this.rarity = 1
        this.type = 1
        break
      case 15:
        this.maxHealth = 80
        this.rarity = 2
        this.type = 2
        break
      case 16:
        this.maxHealth = 60
        this.rarity = 4
        this.type = 2
        break
      case 17:
        this.maxHealth = 85
        this.rarity = 1
        this.type = 2
        break
      case 18:
        this.maxHealth = 50
        this.rarity = 4
        this.type = 1
        break
      case 19:
        this.maxHealth = 65
        this.rarity = 4
        this.type = 1
        break
      case 20:
        this.maxHealth = 70
        this.rarity = 2
        this.type = 2
        break
      case 21:
        this.maxHealth = 65
        this.rarity = 3
        this.type = 1
        break
      case 22:
        this.maxHealth = 115
        this.rarity = 3
        this.type = 1
        break
      case 23:
        this.maxHealth = 75
        this.rarity = 1
        this.type = 2
        break
      case 24:
        this.maxHealth = 65
        this.rarity = 3
        this.type = 2
        break
      case 25:
        this.maxHealth = 80
        this.rarity = 3
        this.type = 2
        break
      case 26:
        this.maxHealth = 100
        this.rarity = 2
        this.type = 1
        break
      case 27:
        this.maxHealth = 90
        this.rarity = 1
        this.type = 2
        break
      case 28:
        this.maxHealth = 70
        this.rarity = 4
        this.type = 2
        break
      case 29:
        this.maxHealth = 45
        this.rarity = 3
        this.type = 1
        this.snooze = false
        break
      case 30:
        this.maxHealth = 70
        this.rarity = 2
        this.type = 2
        break
      case 31:
        this.maxHealth = 30
        this.rarity = 4
        this.type = 1
        break
      case 32:
        this.maxHealth = 100
        this.rarity = 1
        this.type = 1
        break
      case 33:
        this.maxHealth = 50
        this.rarity = 1
        this.type = 1
        break
      case 34:
        this.maxHealth = 90
        this.rarity = 1
        this.type = 1
        break
      case 35:
        this.maxHealth = 75
        this.rarity = 3
        this.type = 1
        break
      case 36:
        this.maxHealth = 90
        this.rarity = 1
        this.type = 2
        break
      case 37:
        this.maxHealth = 75
        this.rarity = 1
        this.type = 1
        break
      case 38:
        this.maxHealth = 60
        this.rarity = 3
        this.type = 1
        break
      case 39:
        this.maxHealth = 85
        this.rarity = 2
        this.type = 1
        break
      case 40:
        this.maxHealth = 70
        this.rarity = 2
        this.type = 1
        break
      case 41:
        this.maxHealth = 60
        this.rarity = 2
        this.type = 1
        break
      case 42:
        this.maxHealth = 50
        this.rarity = 2
        this.type = 1
        break
      case 43:
        this.maxHealth = 70
        this.rarity = 1
        this.type = 1
        break
      case 44:
        this.maxHealth = 75
        this.rarity = 3
        this.type = 1
        break
      case 45:
        this.maxHealth = 60
        this.rarity = 3
        this.type = 2
        break
      case 46:
        this.maxHealth = 85
        this.rarity = 1
        this.type = 2
        break
      case 47:
        this.maxHealth = 45
        this.rarity = 4
        this.type = 2
        break
      case 48:
        this.maxHealth = 85
        this.rarity = 2
        this.type = 2
        break
      case 49:
        this.maxHealth = 55
        this.rarity = 2
        this.type = 1
        break
      case 50:
        this.maxHealth = 50
        this.rarity = 4
        this.type = 1
        break
      case 51:
        this.maxHealth = 70
        this.rarity = 2
        this.type = 1
        break
      case 52:
        this.maxHealth = 90
        this.rarity = 1
        this.type = 1
        break
      case 53:
        this.maxHealth = 60
        this.rarity = 1
        this.type = 2
        break
      case 54:
        this.maxHealth = 45
        this.rarity = 3
        this.type = 1
        break
      case 55:
        this.maxHealth = 85
        this.rarity = 1
        this.type = 1
        break
      case 56:
        this.maxHealth = 75
        this.rarity = 1
        this.type = 2
        break
      case 57:
        this.maxHealth = 50
        this.rarity = 2
        this.type = 2
        break
      case 58:
        this.maxHealth = 50
        this.rarity = 2
        this.type = 2
        break
      case 59:
        this.maxHealth = 40
        this.rarity = 2
        this.type = 1
        break
      case 60:
        this.maxHealth = 100
        this.rarity = 3
        this.type = 2
        break
      case 61:
        this.maxHealth = 75
        this.rarity = 4
        this.type = 2
        break
      case 62:
        this.maxHealth = 50
        this.rarity = 2
        this.type = 2
        break
      case 63:
        this.maxHealth = 60
        this.rarity = 4
        this.type = 2
        break
      case 64:
        this.maxHealth = 80
        this.rarity = 1
        this.type = 2
        break
      case 65:
        this.maxHealth = 70
        this.rarity = 1
        this.type = 2
        break
      case 66:
        this.maxHealth = 40
        this.rarity = 4
        this.type = 2
        break
      case 67:
        this.maxHealth = 65
        this.rarity = 1
        this.type = 2
        break
      case 68:
        this.maxHealth = 50
        this.rarity = 1
        this.type = 2
        break
      case 69:
        this.maxHealth = 75
        this.rarity = 3
        this.type = 1
        break
      case 70:
        this.maxHealth = 50
        this.rarity = 1
        this.type = 1
        break
      case 71:
        this.maxHealth = 70
        this.rarity = 2
        this.type = 1
        break
      default:
        console.log("CARDTYPE ERROR!")
        break
    }
    this.health = this.maxHealth
  }

  getType() {
    return this.type
  }

  getCardNum() {
    return this.cardNum
  }

  getRarity() {
    return this.rarity
  }

  getSnooze() {
    return this.snooze
  }

  awaken() {
    this.snooze = false
  }

  getAttacked() {
    return this.attacked
  }

  changeAttacked(newVal) {
    this.attacked = newVal
  }

  changeCardNum(newNum) {
    if (this.cardNum == 7)
      this.cardNum = newNum
  }

  revertToChungus() {
    this.cardNum = 7
  }

  getChungus() {
    return this.chungus
  }

  changeImmunity(immunity) {
    this.immune = immunity
  }

  getImmunity() {
    return this.immune
  }

  changeHealth(healthChange) {
    if (this.cardNum != 3) {
      if (healthChange == -1)
        this.health = this.maxHealth
      this.health += healthChange
      if (this.health > this.maxHealth)
        this.health = this.maxHealth
    }
  }
  
  getHealth() {
    return this.health
  }
}

class Game {
  constructor(roomName) {
    this.roomName = roomName
    this.gameStatus = 0
    this.turn = 1
    this.movesLeft = 1
    this.totalTurn = 1
    this.gameOver = false
    this.twoXMeme = 1
    this.harambe1 = false
    this.harambe2 = false
    this.jacob = false
    this.jacobRecursion = false

    var deck = []
    for (var i = 1; i <= 71; i++) {
      if (i != 9 && i != 30 && (i >= 1 && i <= 31)) {
        var temp = new Card(i)
        var numShuffle = temp.getRarity()
        if (numShuffle == 4)
          numShuffle = 1
        else if (numShuffle == 3)
          numShuffle = 2
        else if (numShuffle == 2)
          numShuffle = 3
        else
          numShuffle = 4
        for (var j = 0; j < numShuffle; j++) {
          deck.push(new Card(i))
        }
      }
    }

    var shuffledDeck = []
    while (deck.length != 0) {
      shuffledDeck.push(deck.splice(getRandom(deck.length),1)[0])
    }

    this.deck1 = []
    this.deck2 = []
    for (var i = 0; i < 5; i++) {
      this.deck1.push(shuffledDeck.pop())
      this.deck2.push(shuffledDeck.pop())
    }

    this.hand1 = []
    this.hand2 = []
    for (var i = 0; i < 5; i++) {
      this.hand1.push(shuffledDeck.pop())
      this.hand2.push(shuffledDeck.pop())
    }
    this.hand1.push(this.deck1.pop())

    this.board1 = []
    this.board2 = []
  }

  getRoomName() {
    return this.roomName
  }

  getGameStatus() {
    return this.gameStatus
  }

  getGameInfo(id) {
    var gameOver = false
    var winner = -1
    if (this.deck1.length == 0 && this.hand1.length == 0 && (this.board1.length == 0 || (this.board1.length == 1 && this.board1[0].getCardNum() == 3))) {
      if (this.board1.length == 1 && this.board1[0].getCardNum() == 3)
        this.board1 = []
      gameOver = true
      winner = 2
    } 
    if (this.deck2.length == 0 && this.hand2.length == 0 && (this.board2.length == 0 || (this.board2.length == 1 && this.board2[0].getCardNum() == 3))) {
      if (this.board2.length == 1 && this.board2[0].getCardNum() == 3)
        this.board2 = []
      gameOver = true
      if (winner == 2)
        winner = 0
      else
        winner = 1
    }
    
    if (gameOver && !this.gameOver) {
      if (winner == 0)
        io.emit("chatMessage", id, "Game: It's a tie game!")
      else
        io.emit("chatMessage", id, "Game: Player " + winner + " wins!")
      this.gameOver = true
      this.gameStatus = 2
    }

    return [this.turn, this.movesLeft, this.hand1, this.hand2, this.board1, this.board2, this.deck1.length, this.deck2.length, gameOver]
  }

  changeGameStatus(x) {
    this.gameStatus = x
  }

  placeCard(handPos, fieldPos) {
    if (!this.gameOver && this.turn == 1 && this.movesLeft != 0 && (this.board1.length < 3 || (this.board1.length == 3 && this.harambe1))) {
      if (this.hand1[handPos].getCardNum() == 18) {
        for (var i = 0; i < this.board1.length; i++) {
          this.getBoard1[i].changeImmunity(true)
        }
      } else if (this.hand1[handPos].getCardNum() == 24) {
        this.twoXMeme *= 2
      } else if (this.hand1[handPos].getCardNum() == 28) {
        this.harambe1 = true
      } else if (this.hand1[handPos].getCardNum() == 31) {
        this.jacob = true
      }
      this.board1.splice(fieldPos, 0, this.hand1.splice(handPos, 1)[0])
      this.movesLeft--
    } else if (!this.gameOver && this.turn == 2 && this.movesLeft != 0 && (this.board2.length < 3 || (this.board2.length == 3 && this.harambe2))) {
      if (this.hand2[handPos].getCardNum() == 18) {
        for (var i = 0; i < this.board2.length; i++) {
          this.getBoard2[i].changeImmunity(true)
        }
      } else if (this.hand2[handPos].getCardNum() == 24) {
        this.twoXMeme *= 2
      } else if (this.hand2[handPos].getCardNum() == 28) {
        this.harambe2 = true
      } else if (this.hand2[handPos].getCardNum() == 31) {
        this.jacob = true
      }
      this.board2.splice(fieldPos, 0, this.hand2.splice(handPos, 1)[0])
      this.movesLeft--
    }
  }

  endTurn() {
    this.totalTurn++
    if (this.turn == 1) {
      this.turn = 2
      if (this.hand2.length < 10 && this.deck2.length > 0)
        this.hand2.push(this.deck2.pop())
      for (var i = 0; i < this.board2.length; i++) {
        this.board2[i].awaken()
        this.board2[i].changeAttacked(false)
      }
    } else {
      this.turn = 1
      if (this.hand1.length < 10 && this.deck1.length > 0)
        this.hand1.push(this.deck1.pop())
      for (var i = 0; i < this.board1.length; i++) {
        this.board1[i].awaken()
        this.board1[i].changeAttacked(false)
      }
    }
    if (this.totalTurn == 2 || this.totalTurn == 3)
      this.movesLeft = 2
    else
      this.movesLeft = 3
  }
  
  getBoard(player) {
    if (player == 1)
      return this.board1
    else
      return this.board2
  }

  getDeck(player) {
    if (player == 1)
      return this.deck1
    else
      return this.deck2
  }

  getHand(player) {
    if (player == 1)
      return this.hand1
    else
      return this.hand2
  }

  getEnemyBoard(player, friendlyFire) {
    if (friendlyFire)
      return this.getBoard(player)
    if (player == 1)
      return this.board2
    else
      return this.board1
  }

  attack(player, card, target, choice, extraTarget, enemy, friendlyFire) {
    /*
    this.getBoard(player) gets the attacker's board
    this.getEnemyBoard(player) gets the enemy's board
    this.getBoard(player)[card] gets the attacking card
    this.getEnemyBoard(player)[target] gets the target card

    getType() is a card method; it returns 1 if the card is a celeb and 2 if it is a meme
    getCardNum() is a card method; it returns the card's special number
    changeHealth() is a card method; it changes the card's health where that be healing or damaging the card. the method makes sure not to heal the card more than it's max health
    */
    if (this.jacob && !this.jacobRecursion) {
      this.jacobRecursion = true
      var options = []
      for (var i = 0; i < this.board1.length + this.board2.length; i++) {
        if (i < this.board1.length) {
          if (!this.board1[i].getImmunity())
            options.push(i)
        } else {
          if (!this.board2[i - this.board1.length].getImmunity())
            options.push(i)
        }
      }

      var success = false
      if (this.getBoard(player)[card].getCardNum() != 47 && this.getBoard(player)[card].getCardNum() != 54 && this.getBoard(player)[card].getCardNum() != 56 && this.getBoard(player)[card].getCardNum() != 63) {
        while (!success && options.length > 0) {
          var newTarget = getRandom(options.length)

          if (newTarget < this.board1.length) {
            if (player == 1) { //player 1 friendly fire
              success = this.attack(1, card, options[newTarget], choice, extraTarget, true, true)
            } else {
              success = this.attack(2, card, options[newTarget], choice, extraTarget, true, false)
            }
          } else {
            if (player == 1) {
              success = this.attack(1, card, options[newTarget] - this.board1.length, choice, extraTarget, true, false)
            } else { //player 2 friendly fire
              success = this.attack(2, card, options[newTarget] - this.board1.length, choice, extraTarget, true, true)
            }
          }
          options.splice(newTarget,1)
        }
      } else if (!this.gameOver && !this.getBoard(player)[card].getSnooze() && !this.getBoard(player)[card].getAttacked() && this.movesLeft > 0) {
        if (this.getBoard(player)[card].getCardNum() == 47) {
          var rand = getRandom(options.length)
          if (options[rand] < this.board1.length) {
            this.board1[options[rand]].changeHealth(-15 * this.twoXMeme)
          } else {
            this.board1[options[rand] - this.board1.length].changeHealth(-15 * this.twoXMeme)
          }
          rand = getRandom(options.length)
          if (options[rand] < this.board1.length) {
            this.board1[options[rand]].changeHealth(-10 * this.twoXMeme)
          } else {
            this.board1[options[rand] - this.board1.length].changeHealth(-10 * this.twoXMeme)
          }
          rand = getRandom(options.length)
          if (options[rand] < this.board1.length) {
            this.board1[options[rand]].changeHealth(-5 * this.twoXMeme)
          } else {
            this.board1[options[rand] - this.board1.length].changeHealth(-5 * this.twoXMeme)
          }
        } else if (this.getBoard(player)[card].getCardNum() == 54) {

        } else if (this.getBoard(player)[card].getCardNum() == 56) {

        } else if (this.getBoard(player)[card].getCardNum() == 63) {

        }
        this.getBoard(player)[card].changeAttacked(true)
        checkDead()
        this.movesLeft--
        success = true
      } 
      this.jacobRecursion = false
      return success
    } 

    if (!this.gameOver && !this.getBoard(player)[card].getSnooze() && !this.getBoard(player)[card].getAttacked() && this.movesLeft > 0 && (!enemy || this.getEnemyBoard(player, friendlyFire)[target].getCardNum() != 3) && (enemy || friendlyFire || this.getBoard(player)[card].getCardNum() == 6 || this.getBoard(player)[card].getCardNum() == 8 || this.getBoard(player)[card].getCardNum() == 9 || this.getBoard(player)[card].getCardNum() == 16 || this.getBoard(player)[card].getCardNum() == 17 || this.getBoard(player)[card].getCardNum() == 19 || this.getBoard(player)[card].getCardNum() == 21 || this.getBoard(player)[card].getCardNum() == 25 || this.getBoard(player)[card].getCardNum() == 33 || this.getBoard(player)[card].getCardNum() == 44 || this.getBoard(player)[card].getCardNum() == 48 || this.getBoard(player)[card].getCardNum() == 49 || this.getBoard(player)[card].getCardNum() == 55 || this.getBoard(player)[card].getCardNum() == 57 || this.getBoard(player)[card].getCardNum() == 58 || this.getBoard(player)[card].getCardNum() == 62 || this.getBoard(player)[card].getCardNum() == 69) && !this.getEnemyBoard(player, friendlyFire)[target].getImmunity()) {
      this.getBoard(player)[card].changeAttacked(true)
      if (this.getBoard(player)[card].getCardNum() == 1) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-25)

      } else if (this.getBoard(player)[card].getCardNum() == 2) {
        if (choice == 1) {
          this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-10 * this.twoXMeme)
        } else {
          for (var i = 0; i < this.getEnemyBoard(player, friendlyFire).length; i++) {
            this.getEnemyBoard(player, friendlyFire)[i].changeHealth(-5 * this.twoXMeme)
          }
        }

      } else if (this.getBoard(player)[card].getCardNum() == 3) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-10 * this.twoXMeme)

      } else if (this.getBoard(player)[card].getCardNum() == 4) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-30 * this.twoXMeme)
        if (target != 0)
          this.getEnemyBoard(player, friendlyFire)[target-1].changeHealth(10)
        if (this.getEnemyBoard(player, friendlyFire).length > target + 1)
          this.getEnemyBoard(player, friendlyFire)[target+1].changeHealth(10)

      } else if (this.getBoard(player)[card].getCardNum() == 5) {
        this.getEnemyBoard(player, friendlyFire)[0].changeHealth(-30)
        this.getEnemyBoard(player, friendlyFire)[this.getEnemyBoard(player, friendlyFire).length - 1].changeHealth(15)

      } else if (this.getBoard(player)[card].getCardNum() == 6) {
        var highestHP = this.getBoard(player)[card].getHealth()
        var lowestHP = this.getBoard(player)[card].getHealth()
        for (var i = 0; i < this.board1.length; i++) {
          highestHP = Math.max(highestHP, this.board1[i].getHealth())
          if (this.board1[i].getHealth() != -1)
            lowestHP = Math.min(lowestHP, this.board1[i].getHealth())
        }
        for (var i = 0; i < this.board2.length; i++) {
          highestHP = Math.max(highestHP, this.board2[i].getHealth())
          if (this.board2[i].getHealth() != -1)
            lowestHP = Math.min(lowestHP, this.board2[i].getHealth())
        }
        for (var i = 0; i < this.board1.length; i++) {
          if (highestHP == this.board1[i].getHealth()) {
            this.board1[i].changeHealth(-500)
          }
          if (lowestHP == this.board1[i].getHealth()) {
            this.board1[i].changeHealth(20)
          }
        }
        for (var i = 0; i < this.board2.length; i++) {
          if (highestHP == this.board2[i].getHealth()) {
            this.board2[i].changeHealth(-500)
          }
          if (lowestHP == this.board2[i].getHealth()) {
            this.board2[i].changeHealth(20)
          }
        }

      } else if (this.getBoard(player)[card].getCardNum() == 7) {
        if (this.getEnemyBoard(player, friendlyFire)[target].getCardNum() != 7) {
          this.getBoard(player)[card].changeCardNum(this.getEnemyBoard(player, friendlyFire)[target].getCardNum())
          this.getBoard(player)[card].changeAttacked(false)
          this.attack(player, card, target, choice, extraTarget, true, false)
          this.movesLeft++
        }
        
      } else if (this.getBoard(player)[card].getCardNum() == 8) {
        if (enemy)
          this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-15)
        else
          this.getBoard(player)[target].changeHealth(15)

      } else if (this.getBoard(player)[card].getCardNum() == 10) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-10 * (1 + getRandom(6)))

      } else if (this.getBoard(player)[card].getCardNum() == 11) {
        var numCelebs = 0
        for (var i = 0; i < this.board1.length; i++) {
          if (this.board1[i].getType() == 1)
            numCelebs++
        }
        for (var i = 0; i < this.board2.length; i++) {
          if (this.board2[i].getType() == 1)
            numCelebs++
        }
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth((-10 - 5 * numCelebs) * this.twoXMeme)
        
      } else if (this.getBoard(player)[card].getCardNum() == 12) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-60 * this.twoXMeme)
        this.getBoard(player).splice(card,1)

      } else if (this.getBoard(player)[card].getCardNum() == 13) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-70 * this.twoXMeme)
        
      } else if (this.getBoard(player)[card].getCardNum() == 14) {
        if (this.getEnemyBoard(player, friendlyFire)[target].getType() == 1)
          this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-30)
        else {
          this.getBoard(player)[card].changeAttacked(false)
          return false
        }
        
      } else if (this.getBoard(player)[card].getCardNum() == 15) {
        if (this.getEnemyBoard(player, friendlyFire)[target].getType() == 2)
         this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-30 * this.twoXMeme)
        else {
          this.getBoard(player)[card].changeAttacked(false)
          return false
        }
        
      } else if (this.getBoard(player)[card].getCardNum() == 16) {
        var numDamaged = 0
        for (var i = 0; i < this.board1.length; i++) {
          if (this.board1[i].getRarity() == 1) {
            this.board1[i].changeHealth(-25 * this.twoXMeme)
            numDamaged++
          }
        }
        for (var i = 0; i < this.board2.length; i++) {
          if (this.board2[i].getRarity() == 1) {
            this.board2[i].changeHealth(-25 * this.twoXMeme)
            numDamaged++
          }
        }
        if (numDamaged == 0) {
          this.getBoard(player)[card].changeAttacked(false)
          return false
        }

      } else if (this.getBoard(player)[card].getCardNum() == 17) {
        if (choice == 2) {
          this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-10 * this.twoXMeme)
        } else if (this.getDeck(player).length != 0) {
          this.getHand(player).push(this.getDeck(player).pop())
        } else {
          this.getBoard(player)[card].changeAttacked(false)
          return false
        }

      } else if (this.getBoard(player)[card].getCardNum() == 18) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-15)

      } else if (this.getBoard(player)[card].getCardNum() == 19) {
        for (var i = 0; i < this.board1.length; i++) {
          this.board1[i].changeHealth(-400)
        }
        for (var i = 0; i < this.board2.length; i++) {
          this.board2[i].changeHealth(-400)
        }

      } else if (this.getBoard(player)[card].getCardNum() == 20) {
        if (this.getBoard(player)[card].getHealth() == 70)
          this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-45 * this.twoXMeme)
        else
          this.getEnemyBoard(player)[target].changeHealth(-20 * this.twoXMeme)

      } else if (this.getBoard(player)[card].getCardNum() == 21) {
        var numDamaged = 0
        if (choice == 1) {
          for (var i = 0; i < this.board1.length; i++) {
            if (this.board1[i].getRarity() == 1) {
              this.board1[i].changeHealth(-10)
              numDamaged++
            }
          }
          for (var i = 0; i < this.board2.length; i++) {
            if (this.board2[i].getRarity() == 1) {
              this.board2[i].changeHealth(-10)
              numDamaged++
            }
          }
        } else if (choice == 2) {
          for (var i = 0; i < this.board1.length; i++) {
            if (this.board1[i].getRarity() == 2) {
              this.board1[i].changeHealth(-10)
              numDamaged++
            }
          }
          for (var i = 0; i < this.board2.length; i++) {
            if (this.board2[i].getRarity() == 2) {
              this.board2[i].changeHealth(-10)
              numDamaged++
            }
          }
        } else {
          for (var i = 0; i < this.board1.length; i++) {
            if (this.board1[i].getRarity() == 3) {
              this.board1[i].changeHealth(-10)
              numDamaged++
            }
          }
          for (var i = 0; i < this.board2.length; i++) {
            if (this.board2[i].getRarity() == 3) {
              this.board2[i].changeHealth(-10)
              numDamaged++
            }
          }
        }
        if (numDamaged == 0) {
          this.getBoard(player)[card].changeAttacked(false)
          return false
        }

      } else if (this.getBoard(player)[card].getCardNum() == 22) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-5)

      } else if (this.getBoard(player)[card].getCardNum() == 23) {
        var numMemes = -1
        for (var i = 0; i < this.board1.length; i++) {
          if (this.board1[i].getType() == 2)
            numMemes++
        }
        for (var i = 0; i < this.board2.length; i++) {
          if (this.board2[i].getType() == 2)
            numMemes++
        }
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth((-10 - 5 * numMemes) * this.twoXMeme)

      } else if (this.getBoard(player)[card].getCardNum() == 24) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-10 * this.twoXMeme)

      } else if (this.getBoard(player)[card].getCardNum() == 25) {
        for (var i = 0; i < this.board1.length; i++) {
          if (this.board1[i].getType() == 2)
            this.board1[i].changeHealth(-20 * this.twoXMeme)
        }
        for (var i = 0; i < this.board2.length; i++) {
          if (this.board2[i].getType() == 2)
            this.board2[i].changeHealth(-20 * this.twoXMeme)
        }

      } else if (this.getBoard(player)[card].getCardNum() == 26) {
        if (this.getEnemyBoard(player, friendlyFire)[target].getType() == 1)
          this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-20)
        else {
          this.getBoard(player)[card].changeAttacked(false)
          return false
        }

      } else if (this.getBoard(player)[card].getCardNum() == 27) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-15 * this.twoXMeme)

      } else if (this.getBoard(player)[card].getCardNum() == 28) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-15 * this.twoXMeme)

      } else if (this.getBoard(player)[card].getCardNum() == 29) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-30)

      } else if (this.getBoard(player)[card].getCardNum() == 31) {
        this.getEnemyBoard(player, friendlyFire)[target].changeHealth(-20)

      } 

      this.checkDead()
      this.movesLeft--
      return true
    } 
    return false
  }

  checkDead() {
    for (var i = 0; i < this.board1.length; i++) {
      if (this.board1[i].getChungus())
        this.board1[i].revertToChungus()
      if (this.board1[i].getHealth() <= 0 && this.board1[i].getHealth() != -1) {
        if (this.board1[i].getCardNum() == 18) {
          for (var j = 0; j < this.board1.length; j++) {
            this.board1[j].changeImmunity(false)
          }
        } else if (this.board1[i].getCardNum() == 24) {
          this.twoXMeme /= 2
        } else if (this.board1[i].getCardNum() == 28) {
          this.harambe1 = false
        } else if (this.board1[i].getCardNum() == 31) {
          this.jacob = false
        }
        this.board1.splice(i,1)
        i--
      }
    }
    for (var i = 0; i < this.board2.length; i++) {
      if (this.board2[i].getChungus())
        this.board2[i].revertToChungus()
      if (this.board2[i].getHealth() <= 0 && this.board2[i].getHealth() != -1) {
        if (this.board2[i].getCardNum() == 18) {
          for (var j = 0; j < this.board2.length; j++) {
            this.board2[j].changeImmunity(false)
          }
        } else if (this.board2[i].getCardNum() == 24) {
          this.twoXMeme /= 2
        } else if (this.board2[i].getCardNum() == 28) {
          this.harambe2 = false
        } else if (this.board2[i].getCardNum() == 31) {
          this.jacob = false
        }
        this.board2.splice(i,1)
        i--
      }
    }
  }
}
/*
gameID
  - player1
    - deck
    - hand
    - field
    - health
  - player2
    - deck
    - hand
    - field
    - health
  - game
    - roomName
    - turn
    - movesLeft
    - gameStatus //0 is not started, 1 is in progress, 2  is ended
    - passiveEffects
  - currentMove
    - card
    - target
    - choice 
*/

server.listen(3000, () => {
  console.log('listening on *:3000');
})

io.on('connection', (socket) => {
  socket.on('createRoom', (roomName) => {
    var roomExists = false
    for (var i = 0; i < games.length; i++) {
      if (games[i].getRoomName() === roomName) {
        if (games[i].getGameStatus() == 2) {
          games.splice(i,1)
        } else {
          roomExists = true
        }
        break
      }
    }
    if (roomName === "")
      roomExists = true
    if (roomExists) {
      io.emit('createdRoom', roomName, false)
    } else {
      games.push(new Game(roomName))
      io.emit('createdRoom', roomName, true)
    }
  })
})

io.on('connection', (socket) => {
  socket.on('joinRoom', (roomName) => {
    var roomExists = false
    var gameID = -1
    for (var i = 0; i < games.length; i++) {
      if (games[i].getRoomName() === roomName && games[i].getGameStatus() == 0) {
        roomExists = true
        gameID = i
      }
    }
    if (roomExists) {
      games[gameID].changeGameStatus(1)
      io.emit('joinedRoom', roomName, true, gameID, games[gameID].getGameInfo(gameID))
    } else {
      io.emit('joinedRoom', roomName, false, -1, null)
    }
  })
})

io.on('connection', (socket) => {
  socket.on('placeAction', (id, handPos, fieldPos) => {
    games[id].placeCard(handPos, fieldPos)
    io.emit("sendUpdate", id, games[id].getGameInfo(id))
  })
})

io.on('connection', (socket) => {
  socket.on('attackAction', (id, player, attacker, target, choice, extraTarget) => {
    games[id].attack(player, attacker, target, choice, extraTarget, true, false)
    io.emit("sendUpdate", id, games[id].getGameInfo(id))
  })
})

io.on('connection', (socket) => {
  socket.on('healAction', (id, player, attacker, target) => {
    games[id].attack(player, attacker, target, 0, 0, false, false)
    io.emit("sendUpdate", id, games[id].getGameInfo(id))
  })
})

io.on('connection', (socket) => {
  socket.on('endTurn', (id) => {
    games[id].endTurn()
    io.emit("sendUpdate", id, games[id].getGameInfo(id))
  })
})

io.on('connection', (socket) => {
  socket.on('chatMessage', (id, message) => {
    io.emit("chatMessage", id, message)
  })
})

function getRandom(i) {
  return Math.floor((Math.random() * i))
}