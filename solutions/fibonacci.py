def fibonacci(num):

    if num < 2:
        return num
    
    last_two = (0, 1)

    for i in range(0, num - 1, 1):
        sum = last_two[0] + last_two[1]
        last_two = (last_two[1], sum)

    return last_two[1]

if __name__ == "__main__":
  
  print("Expecting: 0")
  print(fibonacci(0))

  print("")

  print("Expecting: 1")
  print(fibonacci(2))

  print("")

  print("Expecting: 55")
  print(fibonacci(10))

  print("")

  print("Expecting: 1")
  print(fibonacci(1))

  print("")

  print("Expecting: 6765")
  print(fibonacci(20))