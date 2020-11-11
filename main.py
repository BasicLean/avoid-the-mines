def on_button_pressed_a():
    player.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    player.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

mines: game.LedSprite = None
player: game.LedSprite = None
game.set_score(0)
player = game.create_sprite(2, 4)
roof = 0 == 0

def on_forever():
    global mines
    if game.score() <= 3:
        for index in range(1):
            mines = game.create_sprite(randint(0, 4), randint(0, 3))
    else:
        if game.score() <= 7:
            for index2 in range(2):
                mines = game.create_sprite(randint(0, 4), randint(0, 3))
        else:
            for index3 in range(3):
                mines = game.create_sprite(randint(0, 4), randint(0, 3))
    if player.is_touching(mines) == False:
        while player.is_touching(roof) == False:
            basic.pause(2000)
            player.change(LedSpriteProperty.Y, -1)
    else:
        game.game_over()
basic.forever(on_forever)
