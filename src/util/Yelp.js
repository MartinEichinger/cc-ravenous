//const fetch = require("whatwg-fetch");
// Yelp
// client ID: lLXwlIWRbREiGKTrb2t8ug
// API Key
const apiKey = "mXzxvqbO1o2aYHUk6aBqPmx8kSZIhwBoo7ehywqyqSyv8hionMy53RUoHyddEu4ejoEDgsB6Co7YmEQWn3vUD7EK0Bajheh--1qK6g9e-EMmqxaUJxfKKWye-jeXXnYx";

var Yelp = {
  authStrng: `Bearer ${apiKey}`,

  search: function(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: this.authStrng }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if(jsonResponse.businesses) {
          //console.log(jsonResponse.businesses)
          return jsonResponse.businesses.map(business => {
              console.log(business);
              return {
                id: business.id,
                imageSrc: business.image_url,
                url: business.url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
              };
          })
        }
      });
  }
}

export default Yelp;

//Yelp.search('Pizza', 'Landshut', 'best_match');
