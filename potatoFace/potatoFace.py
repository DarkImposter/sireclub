import pygame
import random
pygame.init()
width = 1000
height = 700
s = pygame.display.set_mode((width,height))
progress = True
potatoHeight =  105
potatoWidth = 105

x = (width/2-420)
y = (height/2-420)
startX = (width/2)
startY = (height/2)

print("ok ok ok")

class base_sprite(pygame.sprite.Sprite):
        def __init__(self, color=(0,0,0), width=0, height=0, image=None, xk=0, yk=0, scale=None, surface=False):
            pygame.sprite.Sprite.__init__(self)
            if "Surface" in type(image).__name__ or surface:
                self.image = image
            else:
                self.image = pygame.image.load(image)
            if scale != None:
                self.image = pygame.transform.scale(self.image, (scale[0], scale[1]))
            pygame.draw.rect(self.image, color, [5000000,5000000,width,height])
            self.rect = self.image.get_rect()
            self.rect.x = xk
            self.rect.y = yk

potatoFacei = pygame.image.load("potatoFace.png")
startButtoni = pygame.image.load("startButton.png")
back = pygame.image.load("back.png")

potatoFace = base_sprite(image = potatoFacei, xk = x, yk = y)
startButton = base_sprite(image = startButtoni, xk = (startX-200), yk = (startY-100))


home = pygame.sprite.Group()
carrots = pygame.sprite.Group()

running = False
start = True
xmin = False
xplus = False
ymin = False
yplus = False


while start:


    home.add(startButton)
    home.draw(s)
    for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                    start = False
                    pygame.quit()

                if event.type == pygame.MOUSEBUTTONDOWN:
                    if startButton.rect.collidepoint(event.pos):
                        print("harrison")
                        running = True
                        start = False
                        home.remove(startButton)
    home.draw(s)
    pygame.display.update()
    pygame.display.flip()
while running:
    home.add(potatoFace)
    home.draw(s)
    for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                    start = True
                    pygame.quit()
                if event.type == pygame.KEYDOWN:
                        if (event.key == pygame.K_LEFT):
                                xmin = True
                        if (event.key == pygame.K_RIGHT):
                                xplus = True
                        if (event.key == pygame.K_UP):
                                ymin = True
                        if (event.key == pygame.K_DOWN):
                                yplus = True


                if event.type == pygame.KEYUP:
                        if (event.key == pygame.K_LEFT):
                                xmin = False
                        if (event.key == pygame.K_RIGHT):
                                xplus = False
                        if (event.key == pygame.K_UP):
                                ymin = False
                        if (event.key == pygame.K_DOWN):
                                yplus = False

    if xmin:
            potatoFace.rect.x -= 10
            if potatoFace.rect.x <= -30:
                    potatoFace.rect.x = -30
    if xplus:
            potatoFace.rect.x += 10
            if potatoFace.rect.x >=  (width-(potatoWidth-30)):
                    potatoFace.rect.x = (width - (potatoWidth-30))
    if ymin:
            potatoFace.rect.y -= 10
            if potatoFace.rect.y <= 0:
                    potatoFace.rect.y = 0
    if yplus:
            potatoFace.rect.y += 10
            if potatoFace.rect.y >= ((height - 420)-(potatoHeight)):
                    potatoFace.rect.y = ((height - 420) - (potatoHeight))

    s.blit(back, (0,0))
    home.draw(s)
    pygame.display.update()
    pygame.display.flip()
