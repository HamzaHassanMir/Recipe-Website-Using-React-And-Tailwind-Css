## Food Recipe App

A dynamic React application that allows users to search for a wide range of recipes using the Forkify API. Users can view detailed ingredient lists, publisher information, and manage a personalized "Favorites" collection.


## Features

- Recipe Search: Real-time search functionality integrated into the Navbar to fetch recipes from an external API.

- Recipe Details: In-depth view for each recipe, including high-quality images, publisher details, and a complete list of ingredients with quantities.

- Favorites Management: Users can add or remove recipes from their favorites list with a single click. The state is managed globally to ensure consistency across the app.

- Responsive UI: Built with Tailwind CSS, ensuring a seamless experience across mobile, tablet, and desktop views.

- Global State Management: Utilizes React Context API to handle search parameters, recipe lists, and favorites across different components.

## 🛠️ Tech Stack

- Frontend: React.js
- Routing: React Router DOM
- Styling: Tailwind CSS
- State Management: React Context API (Hooks: useContext, useState, useEffect)
- API: Forkify API
## ⚙️ How It Works

1. Searching: When a user submits a search in the Navbar, the handleSubmit function in GlobalContext fetches data from the Forkify API and redirects the user to the Home page to see the results.

2. Viewing Details: Clicking "Recipe Details" on a recipe card uses useParams to grab the unique ID and fetch specific data for that dish.

3. Favoriting: The handleAddToFavorite function checks if an item already exists in the favoritesList. If it does, it removes it; otherwise, it adds the recipe to the list.
## Installation

1. Clone the repository.

2. Install dependencies:
```bash
  npm install
```

3. Start the development server:
```bash
npm start
```

## Preview

<img width="1920" height="919" alt="preview (3)" src="https://github.com/user-attachments/assets/c1843377-ab9e-48c1-853b-06c6e2aef88b" />
<img width="1920" height="869" alt="preview (2)" src="https://github.com/user-attachments/assets/54e83da9-41f5-4486-850e-1cf3bd22bb39" />
<img width="1920" height="821" alt="preview (1)" src="https://github.com/user-attachments/assets/abbc4677-f154-4607-8c3d-166d7e00fd14" />
<img width="1920" height="909" alt="preview (4)" src="https://github.com/user-attachments/assets/48ed742d-352f-4fd3-9b12-17bfe9af62d7" />

