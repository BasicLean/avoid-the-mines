input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let mine3: game.LedSprite = null
let mine2: game.LedSprite = null
let mine1: game.LedSprite = null
let goal: game.LedSprite = null
let player: game.LedSprite = null
game.setScore(0)
player = game.createSprite(2, 4)
basic.forever(function () {
    goal = game.createSprite(randint(0, 4), 0)
    goal.set(LedSpriteProperty.Blink, 300)
    if (game.score() <= 3) {
        mine1 = game.createSprite(randint(0, 4), randint(1, 3))
        basic.pause(5000)
    } else if (game.score() <= 7) {
        mine1 = game.createSprite(randint(0, 4), randint(1, 3))
        mine2 = game.createSprite(randint(0, 4), randint(1, 3))
        basic.pause(2000)
    } else {
        mine2 = game.createSprite(randint(0, 4), randint(1, 3))
        mine3 = game.createSprite(randint(0, 4), randint(1, 3))
        mine1 = game.createSprite(randint(0, 4), randint(1, 3))
        basic.pause(1000)
    }
    if (game.score() <= 3) {
        for (let index = 0; index < 4; index++) {
            if (player.isTouching(mine1)) {
                game.gameOver()
            } else {
                player.change(LedSpriteProperty.Y, -1)
            }
            basic.pause(2000)
        }
    } else if (game.score() <= 7) {
        for (let index = 0; index < 4; index++) {
            if (player.isTouching(mine1)) {
                game.gameOver()
            } else if (player.isTouching(mine2)) {
                game.gameOver()
            } else {
                player.change(LedSpriteProperty.Y, -1)
            }
            basic.pause(2000)
        }
    } else {
        for (let index = 0; index < 4; index++) {
            if (player.isTouching(mine1)) {
                game.gameOver()
            } else if (player.isTouching(mine2)) {
                game.gameOver()
            } else if (player.isTouching(mine3)) {
                game.gameOver()
            } else {
                player.change(LedSpriteProperty.Y, -1)
            }
            basic.pause(2000)
        }
    }
    if (player.isTouching(goal) == true) {
        if (game.score() <= 3) {
            mine1.delete()
        } else if (game.score() <= 7) {
            mine1.delete()
            mine2.delete()
        } else {
            mine1.delete()
            mine2.delete()
            mine3.delete()
        }
        player.delete()
        goal.delete()
        game.addScore(1)
        player = game.createSprite(2, 4)
    } else {
        game.gameOver()
    }
})
