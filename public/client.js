var socket = io()
var songs = []
var instructions = []
var cardBack
var mNc = []
var spells = []
var playedFirstSong = false
var songOrder = []
var comicSans
var drawArrow = false
var mousePointX
var mousePointY
var hand = []
var yourField = []
var oppField = []
var yourFieldHealth = []
var oppFieldHealth = []
var timer = 255
var mode = 0 //0 is wait, 1 fade out, 2 fade in
var displayMode = 0 //0 is turn, moves, 1 is opps hand, opps deck, your deck
var prevMouseState = false
var drawRectWhere = [-1,-1] //index 0 is which field (0 is opp, 1 is your, 2 is hand), index 1 is which card in that field
var turn = -1
var moves = -1
var oppNumHand =  -1
var oppNumDeck = -1
var numDeck = -1
var joinedRoom = false
var player
var gameID
var placeAction = [-1,-1,-1]
var attackAction = [-1,-1,-1]
var healAction = [-1,-1,-1]
var endTurn = false
var gameOver = false
var createdRoom = false

class Card {
  constructor(cardImage, cardNum) {
    this.cardImage = cardImage
    this.cardNum = cardNum
  }

  getCardImage() {
    return this.cardImage
  }

  getCardNum() {
    return this.cardNum
  }
}

function preload() {
  // songs.push(loadSound("/assets/songs/allStar.mp3"))
  // songs.push(loadSound("/assets/songs/boulevardOfBrokenDreams.mp3"))
  // songs.push(loadSound("/assets/songs/damagedCoda.mp3"))
  // songs.push(loadSound("/assets/songs/epicSaxGuy.mp3"))
  // songs.push(loadSound("/assets/songs/gangnamStyle.mp3"))
  // songs.push(loadSound("/assets/songs/heyheya.mp3"))
  // songs.push(loadSound("/assets/songs/itsEverydayBro.mp3"))
  // songs.push(loadSound("/assets/songs/mansNotHot.mp3"))
  // songs.push(loadSound("/assets/songs/myMine.mp3"))
  // songs.push(loadSound("/assets/songs/neverGonnaGiveYouUp.mp3"))
  // songs.push(loadSound("/assets/songs/nyanCat.mp3"))
  // songs.push(loadSound("/assets/songs/pokemonGo.mp3"))
  // songs.push(loadSound("/assets/songs/ppap.mp3"))
  // songs.push(loadSound("/assets/songs/pumpedUpKicks.mp3"))
  // songs.push(loadSound("/assets/songs/sandstorm.mp3"))
  // songs.push(loadSound("/assets/songs/shootingStars.mp3"))
  // songs.push(loadSound("/assets/songs/takeOnMe.mp3"))
  // songs.push(loadSound("/assets/songs/thisIsAmerica.mp3"))
  // songs.push(loadSound("/assets/songs/watchMeWhip.mp3"))
  // songs.push(loadSound("/assets/songs/weAreNumberOne.mp3"))
  // songs.push(loadSound("/assets/songs/whatDoesTheFoxSay.mp3"))
  // songs.push(loadSound("/assets/songs/whatIsLove.mp3"))

  cardBack = loadImage("/assets/cards/cardBack.jpg")

  instructions.push(loadImage("/assets/instructions(1).jpg"))
  instructions.push(loadImage("/assets/instructions(2).jpg"))

  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/admiralAckbar.jpg"), 1))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/animoji.jpg"), 2))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/b.jpg"), 3))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/barryTheBee.jpg"), 4))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/benShapiro.jpg"), 5))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bernieSanders.jpg"), 6))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bigChungus.jpg"), 7))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bigShaq.jpg"), 8))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bongoCat.jpg"), 9))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/cardiB.jpg"), 10))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/crabRave.jpg"), 11))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/creeper.jpg"), 12))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/damnDaniel.jpg"), 13))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/danielleBregoli.jpg"), 14))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/datBoi.jpg"), 15))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/defaultSkin.jpg"), 16))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/doge.jpg"), 17))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/donaldGlover.jpg"), 18))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/donaldTrump.jpg"), 19))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/eggplant.jpg"), 20))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/elonMusk.jpg"), 21))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/evilKermit.jpg"), 22))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/excuseMeWhatTheFrick.jpg"), 23))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/fallGuy.jpg"), 24))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/geneMeh.jpg"), 25))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/gordonRamsay.jpg"), 26))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/grumpyCat.jpg"), 27))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/harambe.jpg"), 28))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/idubbbz.jpg"), 29))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/illuminati.jpg"), 30))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/jacobSartorius.jpg"), 31))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/jakePaul.jpg"), 32))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/jesus.jpg"), 33))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/joeBiden.jpg"), 34))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/johnCena.jpg"), 35))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/johnnyJohnny.jpg"), 36))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/kanye.jpg"), 37))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/kazooKid.jpg"), 38))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/kyloRen.jpg"), 39))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/lilPump.jpg"), 40))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/loganPaul.jpg"), 41))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/michaelRosen.jpg"), 42))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/mitchMcconnell.jpg"), 43))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/mrKrabs.jpg"), 44))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/nyanCat.jpg"), 45))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/patrickStar.jpg"), 46))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/pepe.jpg"), 47))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/pickleRick.jpg"), 48))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/proudBoys.jpg"), 49))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/psy.jpg"), 50))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/rbg.jpg"), 51))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/robbieRotten.jpg"), 52))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/shootbutt.jpg"), 53))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/shrek.jpg"), 54))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/snoopDogg.jpg"), 55))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/someGirlWhoCantEven.jpg"), 56))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/spiderman.jpg"), 57))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/spongebob.jpg"), 58))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/steveHarvey.jpg"), 59))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/thanos.jpg"), 60))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/thanosCar.jpg"), 61))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/theFly.jpg"), 62))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/theImpostor.jpg"), 63))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/thiccBih.jpg"), 64))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/triggeredFeminist.jpg"), 65))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/ugandanKnuckles.jpg"), 66))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/widePutin.jpg"), 67))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/yeeDinosaur.jpg"), 68))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/yodelingBoy.jpg"), 69))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/youtuber.jpg"), 70))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/zucc.jpg"), 71))
  spells.push(loadImage("/assets/cards/spells/bottleFlip.jpg"))
  spells.push(loadImage("/assets/cards/spells/coronaVirus.jpg"))
  spells.push(loadImage("/assets/cards/spells/dab.jpg"))
  spells.push(loadImage("/assets/cards/spells/diamondSword.jpg"))
  spells.push(loadImage("/assets/cards/spells/dootDoot.jpg"))
  spells.push(loadImage("/assets/cards/spells/EU.jpg"))
  spells.push(loadImage("/assets/cards/spells/fidgetSpinner.jpg"))
  spells.push(loadImage("/assets/cards/spells/imMonky.jpg"))
   spells.push(loadImage("/assets/cards/spells/mannequinChallenge.jpg"))
  spells.push(loadImage("/assets/cards/spells/memeGenerator.jpg"))
  spells.push(loadImage("/assets/cards/spells/minecraftTNT.jpg"))
  spells.push(loadImage("/assets/cards/spells/nani.jpg"))
  spells.push(loadImage("/assets/cards/spells/okBoomer.jpg"))
  spells.push(loadImage("/assets/cards/spells/oof.jpg"))
  spells.push(loadImage("/assets/cards/spells/pepsi.jpg"))
  spells.push(loadImage("/assets/cards/spells/quarantine.jpg"))
  spells.push(loadImage("/assets/cards/spells/riot.jpg"))
  spells.push(loadImage("/assets/cards/spells/slurpJuice.jpg"))
  spells.push(loadImage("/assets/cards/spells/stolenMeme.jpg"))
    spells.push(loadImage("/assets/cards/spells/theDress.jpg"))
  spells.push(loadImage("/assets/cards/spells/tidepod.jpg"))
    spells.push(loadImage("/assets/cards/spells/tPose.jpg"))
  spells.push(loadImage("/assets/cards/spells/trigger.jpg"))
  spells.push(loadImage("/assets/cards/spells/trololol.jpg"))
  spells.push(loadImage("/assets/cards/spells/vineInvasion.jpg"))
  spells.push(loadImage("/assets/cards/spells/yannyLaurel.jpg"))
  spells.push(loadImage("/assets/cards/spells/yeet.jpg"))

  comicSans = loadFont("/assets/comicBold.ttf")
}

function mousePressed() {
  // if (!playedFirstSong) {
  //   newSongOrder()
  //   songs[songOrder.pop()].play()
  // }
  // playedFirstSong = true
  if (turn == player && !gameOver) {
    drawArrow = true
    mousePointX = mouseX
    mousePointY = mouseY
  }
}

function mouseReleased() {
  if (placeAction[2] == 0)
    socket.emit("placeAction", gameID, placeAction[0], placeAction[1])
  else if (endTurn) {
    endTurn = false
    socket.emit("endTurn", gameID)
  } else if (attackAction[2] == 0) {
    var choice = -1
    var target = null
    var i
    if (yourField[attackAction[0]].getCardNum() == 7)
      i = oppField[attackAction[1]].getCardNum()
    else
      i = yourField[attackAction[0]].getCardNum()

    if (yourField[attackAction[0]].getCardNum() == 7 && oppField[attackAction[1]].getCardNum() == 47) {
      i = 1
      target = [attackAction[1], attackAction[1], attackAction[1]]
    }
    if (i == 2 || i == 9 || i == 17 || i == 36 || i == 39 || i == 40 || i == 43 || i == 48 || i == 49 || i == 52 || i == 55 || i == 58 || i == 69 || i == 71) {
      while (choice != 1 && choice != 2)
        choice = window.prompt("Choose an ability to use. Enter 1 to use the top ability or enter 2 to use the bottom ability.")
    } else if (i == 21) {
      while (choice != 1 && choice != 2 && choice != 3)
        choice = window.prompt("Choose an ability to use. Enter 1 to use the top ability, enter 2 to use the middle ability, or enter 3 to use the bottom ability.")
    } else if (i == 47) {
      target = []
      while (choice != 1 && (choice != 2 || oppField.length == 1) && (choice != 3 || oppField.length <= 2) && (choice != 4 || oppField.length <= 3))
        choice = window.prompt("Please choose a target to deal 15 damage to. Enter a number 1 to " + oppField.length + ", the leftmost enemy card being assigned the number 1.")
      attackAction[1] = parseInt(choice)-1
      while (choice != 1 && (choice != 2 || oppField.length == 1) && (choice != 3 || oppField.length <= 2) && (choice != 4 || oppField.length <= 3))
        choice = window.prompt("Please choose a target to deal 10 damage to. Enter a number 1 to " + oppField.length + ", the leftmost enemy card being assigned the number 1.")
      target.push(parseInt(choice)-1)
      while (choice != 1 && (choice != 2 || oppField.length == 1) && (choice != 3 || oppField.length <= 2) && (choice != 4 || oppField.length <= 3))
        choice = window.prompt("Please choose a target to deal 5 damage to. Enter a number 1 to " + oppField.length + ", the leftmost enemy card being assigned the number 1.")
      target.push(parseInt(choice)-1)
    } else if (i == 54) {
      while (choice != 1 && (choice != 2 || yourField.length == 1) && (choice != 3 || yourField.length <= 2) && (choice != 4 || yourField.length <= 3))
        choice = window.prompt("Please choose a friendly target to swap with. Enter a number 1 to " + yourField.length + ", the leftmost friendly card being assigned the number 1.")
      target = parseInt(choice)-1
    } else if (i == 56) {
      while (choice != 1 && (choice != 2 || yourField.length == 1) && (choice != 3 || yourField.length <= 2) && (choice != 4 || yourField.length <= 3))
        choice = window.prompt("Please choose a friendly target to deal 40 damage to. Enter a number 1 to " + yourField.length + ", the leftmost friendly card being assigned the number 1.")
      target = parseInt(choice)-1
    } else if (i == 60) {
      while (!(choice.parseInt() === "NaN") && choice.parseInt() > 0 && choice.parseInt() <= 100)
        choice = window.prompt("Please enter the amount of damage you want Thanos to deal (must be a multiple of 5).")
    } else if (i == 63) {
      while (choice != 1 && (choice != 2 || yourField.length == 1) && (choice != 3 || yourField.length <= 2) && (choice != 4 || yourField.length <= 3))
        choice = window.prompt("Please choose a friendly target to destroy. Enter a number 1 to " + yourField.length + ", the leftmost friendly card being assigned the number 1.")
      target = parseInt(choice)-1
    } 
    socket.emit("attackAction", gameID, player, attackAction[0], attackAction[1], choice, target)
  } else if (healAction[2] == 0) {
    socket.emit("healAction", gameID, player, healAction[0], healAction[1])
  }
  drawArrow = false
  drawRectWhere = [-1,-1]
  placeAction[2] = -1
  attackAction[2] = -1
  healAction[2] = -1
}

function setup() {
  cardBack = loadImage("/assets/cards/cardBack.jpg")

  instructions.push(loadImage("/assets/instructions(1).jpg"))
  instructions.push(loadImage("/assets/instructions(2).jpg"))

  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/admiralAckbar.jpg"), 1))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/animoji.jpg"), 2))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/b.jpg"), 3))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/barryTheBee.jpg"), 4))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/benShapiro.jpg"), 5))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bernieSanders.jpg"), 6))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bigChungus.jpg"), 7))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bigShaq.jpg"), 8))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/bongoCat.jpg"), 9))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/cardiB.jpg"), 10))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/crabRave.jpg"), 11))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/creeper.jpg"), 12))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/damnDaniel.jpg"), 13))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/danielleBregoli.jpg"), 14))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/datBoi.jpg"), 15))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/defaultSkin.jpg"), 16))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/doge.jpg"), 17))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/donaldGlover.jpg"), 18))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/donaldTrump.jpg"), 19))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/eggplant.jpg"), 20))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/elonMusk.jpg"), 21))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/evilKermit.jpg"), 22))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/excuseMeWhatTheFrick.jpg"), 23))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/fallGuy.jpg"), 24))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/geneMeh.jpg"), 25))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/gordonRamsay.jpg"), 26))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/grumpyCat.jpg"), 27))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/harambe.jpg"), 28))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/idubbbz.jpg"), 29))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/illuminati.jpg"), 30))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/jacobSartorius.jpg"), 31))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/jakePaul.jpg"), 32))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/jesus.jpg"), 33))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/joeBiden.jpg"), 34))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/johnCena.jpg"), 35))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/johnnyJohnny.jpg"), 36))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/kanye.jpg"), 37))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/kazooKid.jpg"), 38))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/kyloRen.jpg"), 39))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/lilPump.jpg"), 40))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/loganPaul.jpg"), 41))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/michaelRosen.jpg"), 42))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/mitchMcconnell.jpg"), 43))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/mrKrabs.jpg"), 44))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/nyanCat.jpg"), 45))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/patrickStar.jpg"), 46))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/pepe.jpg"), 47))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/pickleRick.jpg"), 48))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/proudBoys.jpg"), 49))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/psy.jpg"), 50))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/rbg.jpg"), 51))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/robbieRotten.jpg"), 52))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/shootbutt.jpg"), 53))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/shrek.jpg"), 54))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/snoopDogg.jpg"), 55))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/someGirlWhoCantEven.jpg"), 56))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/spiderman.jpg"), 57))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/spongebob.jpg"), 58))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/steveHarvey.jpg"), 59))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/thanos.jpg"), 60))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/thanosCar.jpg"), 61))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/theFly.jpg"), 62))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/theImpostor.jpg"), 63))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/thiccBih.jpg"), 64))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/triggeredFeminist.jpg"), 65))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/ugandanKnuckles.jpg"), 66))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/widePutin.jpg"), 67))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/yeeDinosaur.jpg"), 68))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/yodelingBoy.jpg"), 69))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/youtuber.jpg"), 70))
  mNc.push(new Card(loadImage("/assets/cards/memes&celebrities/zucc.jpg"), 71))

  spells.push(loadImage("/assets/cards/spells/bottleFlip.jpg"))
  spells.push(loadImage("/assets/cards/spells/coronaVirus.jpg"))
  spells.push(loadImage("/assets/cards/spells/dab.jpg"))
  spells.push(loadImage("/assets/cards/spells/diamondSword.jpg"))
  spells.push(loadImage("/assets/cards/spells/dootDoot.jpg"))
  spells.push(loadImage("/assets/cards/spells/EU.jpg"))
  spells.push(loadImage("/assets/cards/spells/fidgetSpinner.jpg"))
  spells.push(loadImage("/assets/cards/spells/imMonky.jpg"))
  spells.push(loadImage("/assets/cards/spells/mannequinChallenge.jpg"))
  spells.push(loadImage("/assets/cards/spells/memeGenerator.jpg"))
  spells.push(loadImage("/assets/cards/spells/minecraftTNT.jpg"))
  spells.push(loadImage("/assets/cards/spells/nani.jpg"))
  spells.push(loadImage("/assets/cards/spells/okBoomer.jpg"))
  spells.push(loadImage("/assets/cards/spells/oof.jpg"))
  spells.push(loadImage("/assets/cards/spells/pepsi.jpg"))
  spells.push(loadImage("/assets/cards/spells/quarantine.jpg"))
  spells.push(loadImage("/assets/cards/spells/riot.jpg"))
  spells.push(loadImage("/assets/cards/spells/slurpJuice.jpg"))
  spells.push(loadImage("/assets/cards/spells/stolenMeme.jpg"))
  spells.push(loadImage("/assets/cards/spells/theDress.jpg"))
  spells.push(loadImage("/assets/cards/spells/tidepod.jpg"))
    spells.push(loadImage("/assets/cards/spells/tPose.jpg"))
  spells.push(loadImage("/assets/cards/spells/trigger.jpg"))
  spells.push(loadImage("/assets/cards/spells/trololol.jpg"))
  spells.push(loadImage("/assets/cards/spells/vineInvasion.jpg"))
  spells.push(loadImage("/assets/cards/spells/yannyLaurel.jpg"))
  spells.push(loadImage("/assets/cards/spells/yeet.jpg"))

  comicSans = loadFont("/assets/comicBold.ttf")
  var choice = -1
  while (choice != 1 && choice != 2) {
    choice = window.prompt("Would you like to create a room (1) or join a room (2)?")
  }
  player = choice
  var roomName = window.prompt("Please enter a room name:")
  if (choice == 1) {
    socket.emit("createRoom", roomName.toLowerCase())
    socket.on("createdRoom", (room, success) => {
      if (roomName === room && !success && !createdRoom) {
        alert("Please try a different room name")
        roomName = window.prompt("Please enter a room name:")
        socket.emit("createRoom", roomName.toLowerCase())
      } else if (roomName === room && success && !createdRoom) {
        createdRoom = true
      }
    })
    socket.on("joinedRoom", (room, success, id, gameInfo) => {
      if (roomName === room && success && !joinedRoom) {
        joinedRoom = true
        gameID = id
        interpretGameInfo(gameInfo)
        startListeners()
      }
    })
  } else {
    socket.emit("joinRoom", roomName.toLowerCase())
    socket.on("joinedRoom", (room, success, id, gameInfo) => {
      if (roomName === room && !success && !joinedRoom) {
        alert("Please try a different room name")
        roomName = window.prompt("Please enter a room name:")
        socket.emit("joinRoom", roomName.toLowerCase())
      } else if (roomName === room && success && !joinedRoom) {
        joinedRoom = true
        gameID = id
        interpretGameInfo(gameInfo)
        startListeners()
      }
    })
  }
  createCanvas(1200, 675)
  document.getElementById("game").appendChild(document.getElementById("defaultCanvas0"))
}

function startListeners() {
  socket.on("sendUpdate", (id, gameInfo) => {
    if (gameID == id && !gameOver)
      interpretGameInfo(gameInfo)
  })
  socket.on("chatMessage", (id, message) => {
    if (gameID == id && !gameOver) {
      var daMessage = document.createElement("p")
      daMessage.class = "msg"
      daMessage.innerHTML = message
      document.getElementById("chat").appendChild(daMessage)
      var element = document.getElementById("chat")
      element.scrollTop = element.scrollHeight;
    }
  })
}

function draw() {
  if (joinedRoom) {
    var x = mouseX
    var y = mouseY
    var displayCard = cardBack
    var mousePress = mouseIsPressed && turn == player && !gameOver
    // var isPlaying = false
    // for (var i = 0; i < 22; i++) {
    //   if (songs[i].isPlaying()) {
    //     isPlaying = true
    //     break
    //   }
    // }
    // if (!isPlaying && playedFirstSong) {
    //   songs[songOrder.pop()].play()
    //   if (songOrder.length == 0)
    //     newSongOrder()
    // }
    clear()
    background(127)
    noStroke()
    for (var i = 0; i < hand.length; i++) {
      if (x >= 410 - hand.length*39.5 + i*79 && x <= 479 - hand.length*39.5 + i*79 && y >= 572 && y <= 665) {
        displayCard = hand[i].getCardImage()
        if (mousePress && (drawRectWhere[0] != 2 || drawRectWhere[1] != i) && prevMouseState == false) {
          drawRectWhere = [2, i]
        }
      }
      if (drawRectWhere[0] == 2 && drawRectWhere[1] == i) {
        fill(255, 63, 63)
        rect(407 - hand.length*39.5 + i*79, 569, 75, 99, 2)
        placeAction[0] = i
      }
      image(hand[i].getCardImage(), 410 - hand.length*39.5 + i*79, 572, 69, 93)
    }
    fill(191)
    rect(10, 10, 790, 552)
    
    textAlign(LEFT)
    textSize(17)
    textFont(comicSans)
    placeCard = -1
    var extraLength = yourField.length+1
    var notTouching = true
    if (drawRectWhere[0] == 2 && yourField.length < 4) {
      for (var i = 0; i < extraLength; i++) {
        if (x >= 405 - extraLength*96.5 + i*193 && x <= 598 - extraLength*96.5 + i*193 && y >= 299 && y <= 557) {
          placeCard = i
          yourField.splice(i,0,-1)
          yourFieldHealth.splice(i,0,-1)
          notTouching = false
          placeAction[1] = i
          placeAction[2] = 0
          break
        }
      }
    } 
    if (notTouching) {
      placeAction[2] = -1
    }
    notTouching = true
    for (var i = 0; i < oppField.length; i++) {
      if (x >= 410 - oppField.length*96.5 + i*193 && x <= 593 - oppField.length*96.5 + i*193 && y >= 20 && y <= 268) {
        displayCard = oppField[i].getCardImage()
        if (mousePress && (drawRectWhere[0] != 0 || drawRectWhere[1] != i) && drawRectWhere[0] != -1 && drawRectWhere[0] != 2) {
          fill(255, 127, 127)
          rect(405 - oppField.length*96.5 + i*193, 15, 193, 258, 5)
          attackAction[1] = i
          attackAction[2] = 0
          notTouching = false
          if (prevMouseState == false)
            drawRectWhere = [0, i]
        }
      }
      image(oppField[i].getCardImage(), 410 - oppField.length*96.5 + i*193, 20, 183, 248)
      fill(255)
      if (oppField[i].getCardNum() == 60)
        fill(184, 153, 183)
      rect(552 - oppField.length*96.5 + i*193, 32, 33, 21)
      fill(255,0,0)
      if (oppField[i].getCardNum() == 60)
        fill(187, 72, 186)
      if (oppFieldHealth[i] == -1)
        text("B", 552 - oppField.length*96.5 + i*193, 50.5)
      else
        text(oppFieldHealth[i], 552 - oppField.length*96.5 + i*193, 50.5)
    }
    if (notTouching) {
      attackAction[2] = -1
    }
    notTouching = true
    for (var i = 0; i < yourField.length; i++) {
      if (x >= 405 - extraLength*96.5 + i*193 && x <= 598 - extraLength*96.5 + i*193 && y >= 299 && y <= 557 && mousePress && (drawRectWhere[0] != 1 || drawRectWhere[1] != i) && yourField[i] == -1)  {
        fill(255, 127, 127)
        rect(405 - yourField.length*96.5 + i*193, 299, 193, 258, 5)
        continue
      }
      if (x >= 410 - yourField.length*96.5 + i*193 && x <= 593 - yourField.length*96.5 + i*193 && y >= 304 && y <= 552) {
        displayCard = yourField[i].getCardImage()
        if (mousePress && (drawRectWhere[0] != 1 || drawRectWhere[1] != i) && (prevMouseState == false || (drawArrow && drawRectWhere[0] != -1))) {
          notTouching = false
          healAction[1] = i
          healAction[2] = 0
          fill(255, 127, 127)
          rect(405 - yourField.length*96.5 + i*193, 299, 193, 258, 5)
          if (prevMouseState == false) {
            attackAction[0] = i
            healAction[0] = i
            drawRectWhere = [1, i]
          }
        } else if (mousePress && (prevMouseState == false || (drawArrow && drawRectWhere[0] != -1))) {
          notTouching = false
          healAction[1] = i
          healAction[2] = 0
        }
      }
      if (drawRectWhere[0] == 1 && drawRectWhere[1] == i) {
        fill(255, 63, 63)
        rect(405 - yourField.length*96.5 + i*193, 299, 193, 258, 5)
      }
      image(yourField[i].getCardImage(), 410 - yourField.length*96.5 + i*193, 304, 183, 248)
      fill(255)
      if (yourField[i].getCardNum() == 60)
        fill(184, 153, 183)
      rect(552 - yourField.length*96.5 + i*193, 316, 33, 21)
      fill(255,0,0)
      if (yourField[i].getCardNum() == 60)
        fill(187, 72, 186)
      if (yourFieldHealth[i] == -1)
        text("B", 552 - yourField.length*96.5 + i*193, 334.5)
      else
        text(yourFieldHealth[i], 552 - yourField.length*96.5 + i*193, 334.5)
    }
    if (notTouching) {
      healAction[2] = -1
    }

    image(displayCard, 810, 28.5, 380, 515) //1096 x 1486

    if (x >= 370 && x <= 440 && y >= 272 && y <= 300 && mousePress && !(drawArrow && drawRectWhere[0] != -1)) {
      fill(92)
      endTurn = true
    } else if (x >= 370 && x <= 440 && y >= 272 && y <= 300  && !drawArrow && !drawRectWhere[0] != -1) 
      fill(127)
    else {
      fill(162)
      endTurn = false
    }
    if (player == turn && !gameOver)
      rect(370, 273, 70, 26, 4)
    textSize(12)
    fill(0)
    textAlign(CENTER)
    if (player == turn && !gameOver)
      text("end turn", 405, 289)


    if (placeCard != -1) {
      yourField.splice(placeCard,1)
      yourFieldHealth.splice(placeCard,1)
    }

    if (mode == 2)
      timer += 2
    else
      timer -= 2
    if (timer < 0 || timer > 255) {
      mode++
      if (mode == 3)
        mode = 0
      else if (mode == 2) {
        displayMode++
        if (displayMode == 2)
          displayMode = 0
      }
      if (mode != 2) 
        timer = 255
    }
    fill(0)
    if (mode != 0) 
      fill(0, timer)
    if (displayMode == 0) {
      textSize(32)
      text("turn: player " + turn, 1000, 595)
      text("moves left: " + movesLeft, 1000, 645)
    } else {
      textSize(20)
      text("# of cards in opponent's hand: " + oppNumHand, 1000, 585)
      text("# of cards in opponent's deck: " + oppNumDeck, 1000, 615)
      text("# of cards in your deck: " + numDeck, 1000, 645)
    }
    if (drawArrow && drawRectWhere[0] != -1) {
      strokeWeight(4)
      stroke(255, 0, 0)
      angleMode(DEGREES)
      var theta = atan((mousePointY-y)/(mousePointX-x))
      line(mousePointX, mousePointY, x, y)
      if (x > mousePointX) {
        line(x, y, x+15*sin(315-theta), y+15*cos(315-theta))
        line(x, y, x-15*cos(315-theta), y+15*sin(315-theta))
      } else {
        line(x, y, x-15*sin(315-theta), y-15*cos(315-theta))
        line(x, y, x+15*cos(315-theta), y-15*sin(315-theta))
      }
    }
    prevMouseState = mousePress
  }
}

function newSongOrder() {
  var sorted = []
  for (var i = 0; i < 22; i++) {
    sorted.push(i)
  }
  for (var i = 21; i >= 0; i--) {
    var rand = Math.floor(Math.random()*(i+1))
    songOrder.push(sorted[rand])
    sorted.splice(rand,1)
  }
}

function randNum(i) {
  return Math.floor(Math.random() * i)
}

function interpretGameInfo(gameInfo) {
  turn = gameInfo[0]
  movesLeft = gameInfo[1]
  hand = []
  yourField = []
  yourFieldHealth = []
  oppField = []
  oppFieldHealth = []
  if (player == 1) {
    for (var i = 0; i < gameInfo[2].length; i++) {
      hand.push(mNc[gameInfo[2][i].cardNum - 1])
    }
    oppNumHand = gameInfo[3].length
    for (var i = 0; i < gameInfo[4].length; i++) {
      yourField.push(mNc[gameInfo[4][i].cardNum - 1])
      yourFieldHealth.push(gameInfo[4][i].health)
    }
    for (var i = 0; i < gameInfo[5].length; i++) {
      oppField.push(mNc[gameInfo[5][i].cardNum - 1])
      oppFieldHealth.push(gameInfo[5][i].health)
    }
    numDeck = gameInfo[6]
    oppNumDeck = gameInfo[7]
  } else {
    for (var i = 0; i < gameInfo[3].length; i++) {
      hand.push(mNc[gameInfo[3][i].cardNum - 1])
    }
    oppNumHand = gameInfo[2].length
    for (var i = 0; i < gameInfo[4].length; i++) {
      oppField.push(mNc[gameInfo[4][i].cardNum - 1])
      oppFieldHealth.push(gameInfo[4][i].health)
    }
    for (var i = 0; i < gameInfo[5].length; i++) {
      yourField.push(mNc[gameInfo[5][i].cardNum - 1])
      yourFieldHealth.push(gameInfo[5][i].health)
    }
    oppNumDeck = gameInfo[6]
    numDeck = gameInfo[7]
  }
  gameOver = gameInfo[8]
}

function submit() {
  if (!gameOver) {
    socket.emit("chatMessage", gameID, "Player " + player + ": " + document.getElementById("message").value, player)
    document.getElementById("message").value = ""
  }
}