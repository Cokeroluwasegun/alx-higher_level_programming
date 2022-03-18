#!/usr/bin/python3
import urllib.request
""" Python script that fetches https://intranet.hbtn.io/status """
if __name__ == "__main__":
    url = urllib.request.Request('https://intranet.hbtn.io/status')
    with urllib.request.urlopen(url) as f:
        req = f.read()
        print('Body response:')
        print('\t- type:', type(req))
        print('\t- content:', req)
        print('\t- utf8 content:', req.decode('ascii'))
