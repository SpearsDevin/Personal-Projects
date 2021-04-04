from turtle import *

speed(2)

# Pick up the turtle and move it to its starting location.
penup()
goto(-200, 100)
pendown()

# Draw the left leg of the H.
# The turtle starts at the bottom left of the letter, pointing right.
left(90)
forward(100)
# Draw the bar of the H.
# The turtle starts at the top of the left leg, pointing up.
forward(-50)
right(90)
forward(50)
# Draw the right leg of the H.
# The turtle starts on the right side of the bar, pointing right.
left(90)
forward(50)
forward(-100)
right(90)
# The H is drawn.
# The turtle is at the bottom right, pointing right.

# Add a space 30 pixels wide.
penup()
forward(30)
pendown()

# Draw the E.
left(90)
forward(100)
right(90)
forward(50)
forward(-50)
right(90)
forward(50)
left(90)
forward(50)
forward(-50)
right(90)
forward(50)
left(90)
forward(50)

penup()
forward(30)
pendown()

# Draw the L
left(90)
forward(100)
forward(-100)
right(90)
forward(50)


penup()
forward(30)
pendown()

# Draw the L
left(90)
forward(100)
forward(-100)
right(90)
forward(50)

penup()
forward(30)
pendown()

# Draw the O
forward(50)
left(90)
forward(100)
left(90)
forward(50)
left(90)
forward(100)
left(90)
forward(50)

# Exit window
exitonclick() 
