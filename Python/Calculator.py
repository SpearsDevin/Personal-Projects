name = name"
height_m = 1.3716
weight_kg = 33.5658

bmi= weight_kg / (height_m * height_m)
print("bmi: ")
print(bmi)
if bmi < 25:
    print(name)
    print("is not overweight")
else:
    print(name)
    print("is overweight")