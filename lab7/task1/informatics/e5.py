import sys
n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(n - 1):
    if (arr[i] >  0 and arr[i+1] > 0) or (arr[i] <  0 and arr[i+1] < 0):
        print("YES")
        sys.exit(0)

print("NO")


