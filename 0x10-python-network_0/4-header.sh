#!/bin/bash
# Script that sends delete request and display body of response
curl -sX GET "$1" -H "X-School-User-Id: 98"
