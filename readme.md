# Node API Proxy Server

Using the Yelp Api, I created an Express proxy server so that Yelp reviews can be loaded to the reviews section of the reviews page. Yelp's servers do not allow Cors requests, even with the Access-Control-Allow-Origin Authorization header. The user can click the button to scroll through the Yelp review previews.
## Usage

### Install dependencies

```bash
npm install
```

### Run on http://localhost:5000

```bash
npm run dev
```

### Add public API info

Rename **.env.example** to **.env** and edit the values

## Yelp API Fusion env variables

- API_BASE_URL = "https://api.yelp.com/v3/businesses/steves-cafe-expresso-bothell/reviews"
- API_KEY_VALUE = "YOUR API KEY"

