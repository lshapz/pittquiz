import requests, sys, json

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    actor = read_in()
    r = requests.get("https://api.themoviedb.org/3/search/person?api_key=0565cf9b565d67438edd46ccfecb5c1d&language=en-US&query=" + actor + "&page=1&include_adult=false")
    print(r.json())

if __name__ == '__main__':
    main()

# actor = input("who do you want to search?")

