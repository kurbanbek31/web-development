import requests
from bs4 import BeautifulSoup
import re

def parse_kaspi(url):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    # Name
    name = soup.find("h1", class_="item__heading")
    name = name.text.strip() if name else "Unknown"

    # Price
    price_block = soup.find("div", class_="item__price-once")
    price = 0
    if price_block:
        price_text = price_block.text
        price = int(re.sub(r"\D", "", price_text))

    # Rating
    rating_block = soup.find("span", class_=re.compile("rating_"))
    rating = 0
    if rating_block:
        rating = float(rating_block.text.strip())

    # Images
    images = []
    thumbs = soup.find_all("img", class_="item__slider-thumb-pic")
    for img in thumbs:
        src = img.get("src")
        if src:
            images.append(src)

    product = {
        "id": 1,
        "name": name,
        "description": "Auto-generated description.",
        "price": price,
        "rating": rating,
        "images": images,
        "link": url
    }

    return product


if __name__ == "__main__":
    url = input("Paste Kaspi product URL: ")
    product = parse_kaspi(url)

    print("\nAngular Product Object:\n")
    print(product)
