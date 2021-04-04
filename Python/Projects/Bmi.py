name = "Devin"
height_m = 1.8288
weight_kg = 66.6781

bmi= weight_kg / (height_m * height_m)
print("bmi: ")
print(bmi)
if bmi < 15:
    print(name)
    print("You are underweight")
elif bmi < 25:
    print(name)
    print("You have healthy weight")
elif bmi < 50:
    print(name)
    print("You are overweight")