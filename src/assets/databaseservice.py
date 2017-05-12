import requests, sys, json

def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()
    r = requests.get("https://api.themoviedb.org/3/search/person?api_key=0565cf9b565d67438edd46ccfecb5c1d&language=en-US&query=" + lines + "&page=1&include_adult=false")
    print(r.json())

if __name__ == '__main__':
    main()

# actor = input("who do you want to search?")


# https://www.google.com/search?q=export+python+to+js&oq=export+python+to+js&aqs=chrome..69i57j0l5.2290j0j7&sourceid=chrome&ie=UTF-8#q=export+python+json+to+use+n+js