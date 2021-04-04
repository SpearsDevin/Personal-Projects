import turtle

t = turtle.Turtle()
wn = turtle.Screen()


t.penup()
t.goto(-200, 100)
t.forward(200)
t.pendown()

t.right(90)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(45)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(45)
t.left(90)

t.up()
t.forward(30)
t.right(90)
t.forward(25)
t.left(90)
t.down()

t.left(90)
t.forward(100)
t.left(180)
t.forward(50)
t.left(35)
t.forward(60)
t.right(180)
t.forward(60)
t.right(68)
t.forward(60)
t.right(180)
t.forward(60)
t.left(33)
t.forward(50)

t.up()
t.right(90)
t.forward(260)
t.left(90)
t.forward(60)
t.down()

#b
t.forward(105)
t.left(180)
t.forward(105)
t.right(90)
t.forward(15)
for x in range(180):
    t.forward(0.4)
    t.right(1)
t.left(180)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(15)
t.right(180)

t.penup()
t.forward(120)
t.left(90)
t.forward(25)
t.right(90)
t.pendown()

t.right(90)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(45)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(45)
t.left(90)

t.penup()
t.forward(80)
t.pendown()

t.right(90)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(45)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(45)
t.left(90)

t.penup()
t.forward(30)
t.right(90)
t.forward(25)
t.left(90)
t.pendown()

t.left(90)
t.forward(70)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.left(180)
for x in range(180):
    t.forward(0.5)
    t.right(1)
t.forward(70)
t.left(90)

t.penup()
t.forward(30)
t.pendown()

t.left(90)
t.forward(100)
t.right(90)
t.forward(45)
t.left(180)
t.forward(45)
t.left(90)
t.forward(50)
t.left(90)
t.forward(45)
t.left(180)
t.forward(45)
t.left(90)
t.forward(50)
t.left(90)
t.forward(45)

t.penup()
t.forward(30)
t.pendown()

t.left(90)
t.forward(100)
t.right(90)
t.forward(25)
for x in range(180):
    t.forward(0.4)
    t.right(1)
t.forward(25)
t.right(180)
t.forward(25)
t.right(65)
t.forward(60)

wn.mainloop()



