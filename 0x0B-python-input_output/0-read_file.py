#!/usr/bin/python3
"""
   function that reads a text file (UTF8) and prints it to stdout:
"""


def number_of_lines(filename=""):
    """
    function that returns the number of lines
    in a file
    @filename: the name of the file
    """
    with open(filename) as f:
        i = 0
        for line in f:
            i += 1
    return i
