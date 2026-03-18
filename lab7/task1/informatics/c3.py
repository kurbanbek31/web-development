import math
a = int(input())
b = int(input())

for i in range(a, b+ 1):
    if i // math.sqrt(i) == math.sqrt(i):
        print(i, end=' ')