#!/usr/bin/python3
if __name__ == "__main__":
    import sys
argv = sys.argv
length = len(argv)
if length > 1:
    if length == 2:
        print("{:d} argument:".format(length - 1))
        print("{:d}: {:s}".format(1, argv[1]))
    else:
        print("{:d} arguments:".format(length - 1))
        for i in range(1, l):
            print("{:d}: {:s}".format(i, argv[i]))
else:
    print("{:d} arguments.".format(length - 1))
