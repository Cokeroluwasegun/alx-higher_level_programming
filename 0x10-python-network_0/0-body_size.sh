#!/bin/bash
# Get content lenght of url
curl -sI "$1" | grep "Content-Length:" | cut -d " " -f2
