#!/bin/bash
# script that takes in a URL, sends a POST request to the passed URL
curl -sX POST "$1" -d "emal=test@gmail.com&sublect=I will always be here for PLD"
