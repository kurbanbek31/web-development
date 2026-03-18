def power(a:int, b:int):
    ans = a
    for i in range(b-1):
        ans *= a
    return ans

print(power(11,2))