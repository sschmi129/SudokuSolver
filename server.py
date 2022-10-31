# from http.server import HTTPServer, BaseHTTPRequestHandler


# class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

#     def do_GET(self):
#         if self.path == '/':
#             self.path = '/index.html'
#         try:
#             file_to_open = open(self.path[1:]).read()
#             self.send_response(200)
#         except:
#             file_to_open = "File not found"
#             self.send_response(404)
#         self.end_headers()
#         self.wfile.write(bytes(file_to_open, 'utf-8'))

#     def do_POST(self):
#         content_length = int(self.headers['Content-Length'])
#         body = self.rfile.read(content_length)
#         self.send_response(200)
#         self.end_headers()
#         response = BytesIO()
#         response.write(b'This is POST request. ')
#         response.write(b'Received: ')
#         response.write(body)
#         self.wfile.write(response.getvalue())


# httpd = HTTPServer(('localhost', 8080), SimpleHTTPRequestHandler)
# httpd.serve_forever()

import numpy as np

# points = np.array([54,94,28,104,138,132,157,122])

# points = np.array([[54,94],[28,104],[138,132],[157,122]])

# add = points.sum(1)

# diff = np.diff(points, axis = 1)

# print(add)

# print(diff)


points = np.array([54,94,28,104,138,132,157,122])
points = points.reshape((4, 2))
points_new = np.zeros((4,1,2),dtype = np.int32)
add = points.sum(1)
# print(add)
points_new[0] = points[np.argmin(add)]
points_new[3] = points[np.argmax(add)]
diff = np.diff(points, axis = 1)
# print(diff)
points_new[1] = points[np.argmin(diff)]
points_new[2] = points[np.argmax(diff)]
print(points_new)
