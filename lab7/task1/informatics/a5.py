a = int(input())
arr = list(map(int,(input().split())))
ans = []
for i in range(a):
    if i % 2 == 0:
        ans.append(arr[i])

print(ans)