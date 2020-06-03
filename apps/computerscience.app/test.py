#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'origin, content-type, accept, authorization')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    print("Serving Access-Control-Allow-Origin: *")
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)

httpd = HTTPServer(('localhost', 8000), CORSRequestHandler)
httpd.serve_forever()
