#!/bin/bash
# Bash script that takes in a URL nd display all HTTP methods the server accept
curl-sI "$1" | grep "Allow:" | cut -d " " -f 2-
