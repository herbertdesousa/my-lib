# Binary Search Tree

Sort array to ascending order

```js
input = [10, 5, 15, 7, 2, 9, 31]
output = [2, 5, 7, 9, 15, 31]
```

1. Create nodes
Lower numbers to left
Higher numbers to right

2. Back to sorted array
a. Go to Left
? There is Value ?  
  Yes:
    Go to a.
  No:
    Back to old Node
    Print Node
    Go to Right
    ? There is Value ? 
    Yes:
      Go to a.
    No:
      Back to old