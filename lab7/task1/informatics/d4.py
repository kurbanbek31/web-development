import sys
a = int(input())
i = 1
while(a >=i):
    if(i == a):
        print('YES')
        sys.exit(0)
    else:
        i = i * 2
print("NO")