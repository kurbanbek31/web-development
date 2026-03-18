n = int(input())
arr = list(map(int, input().split()))

if len(arr) < 3:
    print(0)
flag = 1
cnt = 0
for i in range(1,len(arr) - 1):
    if flag==1:
        if arr[i-1] < arr[i] and arr[i+1] < arr[i]:
            cnt+=1
        flag= 0
    else:
        flag=1

print(cnt)