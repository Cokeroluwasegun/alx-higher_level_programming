#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for lists in matrix:
        for j in range(len(lists)):
            if j == len(lists) - 1:
                print("{:d}".format(lists[j]), end="")
            else:
                print("{:d} ".format(lists[j]), end="")
        print()
