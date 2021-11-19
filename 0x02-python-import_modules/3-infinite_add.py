#!/usr/bin/python3
if __name__ == "__main__":
    import sys
args = sys.argv
length = len(args)
s = 0
for i in range(1, length):
    s = s + int(args[i])
print("{:d}".format(s))
