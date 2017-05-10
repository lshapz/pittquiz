import requests
import json

actor = input("who do you want to search?")
r = requests.get("https://api.themoviedb.org/3/search/person?api_key=0565cf9b565d67438edd46ccfecb5c1d&language=en-US&query=" + actor + "&page=1&include_adult=false")

print(r.json())

# https://www.google.com/search?q=export+python+to+js&oq=export+python+to+js&aqs=chrome..69i57j0l5.2290j0j7&sourceid=chrome&ie=UTF-8#q=export+python+json+to+use+n+js