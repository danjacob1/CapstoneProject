// Antipasti 
import bruschetta from '../../Util/stock/Antipasti/bruscehtta.jpg';
import caprese from '../../Util/stock/Antipasti/caprese.jpg';
import calamari from '../../Util/stock/Antipasti/calamari.jpg';
import arancini from '../../Util/stock/Antipasti/arancini.jpg';
import prosciutto from '../../Util/stock/Antipasti/prosciutto.jpeg';
import mozzarella from '../../Util/stock/Antipasti/mozzarella.jpg';
import stuffed_mushrooms from '../../Util/stock/Antipasti/stuffed_mushrooms.jpg';
import garlic_bread from '../../Util/stock/Antipasti/garlic_bread.jpg';
import artichokes from '../../Util/stock/Antipasti/artichoke.jpg';

// Pasta
import alfredo from '../../Util/stock/Pasta/alfredo.jpg';
import arrabbiata from '../../Util/stock/Pasta/arrabbiata.jpg';
import bolognese from '../../Util/stock/Pasta/bolognese.jpg';
import carbonara from '../../Util/stock/Pasta/carbonara.jpeg';
import genovese from '../../Util/stock/Pasta/genovese.jpg';
import gnocchi from '../../Util/stock/Pasta/gnocchi.jpg';
import lasagna from '../../Util/stock/Pasta/lasagna.jpg';
import ravioli from '../../Util/stock/Pasta/ravioli.jpg';
import tortellini from '../../Util/stock/Pasta/tortellini.jpeg';
import vongole from '../../Util/stock/Pasta/vongole.jpg';

// Grill
import ribs from '../../Util/stock/Grill/ribs.jpg';
import kebabs from '../../Util/stock/Grill/kebabs.jpg';
import lamb_chops from '../../Util/stock/Grill/lamb_chopes.jpg';
import mushroom_burger from '../../Util/stock/Grill/mushroom_burger.jpg';
import pink_salmon from '../../Util/stock/Grill/plank-salmon.jpeg';
import ribeye from '../../Util/stock/Grill/ribeye.jpeg';
import salmon_grill from '../../Util/stock/Grill/salmon_grill.jpg';
import shrimp_grilled from '../../Util/stock/Grill/shrimp_grilled.jpg';
import t_bone from '../../Util/stock/Grill/t_bone.jpg';

// Fish
import cod from '../../Util/stock/Fish/cod.jpg';
import crab_cake from '../../Util/stock/Fish/crab_cakes.jpg';
import lobster from '../../Util/stock/Fish/lobster.jpeg';
import halibut from '../../Util/stock/Fish/grilled_halibut.jpg';
import paella from '../../Util/stock/Fish/paella.jpg';
import salmon from '../../Util/stock/Fish/salmon.jpg';
import scampi from '../../Util/stock/Fish/scampi.jpg';
import swordfish from '../../Util/stock/Fish/swordfish.jpeg';
import tuna from '../../Util/stock/Fish/tuna.jpeg';

// Salads 
import caesar from '../../Util/stock/Salads/caesar_salad.jpg';
import caprese_salad from '../../Util/stock/Salads/caprese_salad.jpg';
import cobb from '../../Util/stock/Salads/cobb_salad.jpg';
import greek from '../../Util/stock/Salads/greek_salad.jpeg';
import kale from '../../Util/stock/Salads/kale_salad.jpeg';
import mango from '../../Util/stock/Salads/mango_salad.jpeg';
import nicoise from '../../Util/stock/Salads/nicoise_salad.jpg';
import spinach from '../../Util/stock/Salads/spinach_salad.jpg';
import taco from '../../Util/stock/Salads/taco_salad.jpg';
import waldorf from '../../Util/stock/Salads/waldorf_salad.jpg';

// Desserts
import apple from '../../Util/stock/Deserts/apple_pie.jpg';
import brownie from '../../Util/stock/Deserts/brownie.jpeg';
import cheesecake from '../../Util/stock/Deserts/cheesecake.jpeg';
import creme_brule from '../../Util/stock/Deserts/creme brule.webp';
import fruit_tart from '../../Util/stock/Deserts/fruit tart.jpg';
import icecream from '../../Util/stock/Deserts/ice cream.jpg';
import lava from '../../Util/stock/Deserts/lava cake.jpg';
import lime from '../../Util/stock/Deserts/lime pie.jpg';
import pannacotta from '../../Util/stock/Deserts/panna cotta.jpg';
import tiramisu from '../../Util/stock/Deserts/tiramisu.jpg';

// Wine
import cabernet from '../../Util/stock/Wine/cabernet.webp';
import chardonnay from '../../Util/stock/Wine/chardonnay.jpg';
import malbec from '../../Util/stock/Wine/malbec.jpg';
import merlot from '../../Util/stock/Wine/merlot.jpeg';
import pinot_noir from '../../Util/stock/Wine/pinot noire.jpg';
import riesling from '../../Util/stock/Wine/Riesling.jpg';
import rose from '../../Util/stock/Wine/rose.jpeg';
import sauvignon from '../../Util/stock/Wine/sauvignon blanc.jpg';
import syrah from '../../Util/stock/Wine/sirah.jpg';
import zinfandel from '../../Util/stock/Wine/zinfandel.jpg';

// Soft Drinks
import club_soda from '../../Util/stock/Soft_Drinks/club soda.webp';
import coke from '../../Util/stock/Soft_Drinks/coke.jpg';
import cranberry from '../../Util/stock/Soft_Drinks/cranberry.jpg';
import ginger_ale from '../../Util/stock/Soft_Drinks/ginger ale.jpg';
import ice_tea from '../../Util/stock/Soft_Drinks/ice tea.jpg';
import lemon_ade from '../../Util/stock/Soft_Drinks/lemon ade.jpg';
import orange_juice from '../../Util/stock/Soft_Drinks/orange.jpg';
import root_beer from '../../Util/stock/Soft_Drinks/root beer.jpeg';
import sprite from '../../Util/stock/Soft_Drinks/sprite.webp';
import tonic_water from '../../Util/stock/Soft_Drinks/tonic water.webp';

import vegetarian from '../../Util/icons8-vegetarian-100.png'
import vegan from '../../Util/icons8-vegan-64.png'

const STOCK = [
    { id: 1, item: "Bruschetta", logo: bruschetta, logo2: vegan, description: "Tomatoes, garlic, basil on toasted bread.", calories: 180, cost: 9.99,section:"Antipasti" },
    { id: 2, item: "Caprese Salad", logo: caprese, logo2: vegetarian, description: "Tomatoes, mozzarella, basil, olive oil.", calories: 220, cost: 11.99 },
    { id: 3, item: "Calamari Fritti", logo: calamari, description: "Crispy fried squid served with marinara sauce.", calories: 350, cost: 15.99 },
    { id: 4, item: "Arancini", logo: arancini, logo2: vegetarian, description: "Deep-fried rice balls stuffed with cheese.", calories: 280, cost: 10.99 },
    { id: 5, item: "Prosciutto e Melone", logo: prosciutto, description: "Thinly sliced prosciutto served with melon.", calories: 240, cost: 14.99 },
    { id: 6, item: "Fried Mozzarella Sticks", logo: mozzarella, logo2: vegetarian, description: "Breaded mozzarella cheese sticks.", calories: 420, cost: 12.99 },
    { id: 7, item: "Stuffed Mushrooms", logo: stuffed_mushrooms, logo2: vegetarian, description: "Mushroom caps filled with cheese and herbs.", calories: 300, cost: 13.99 },
    { id: 8, item: "Garlic Bread", logo: garlic_bread, logo2: vegetarian, description: "Toasted bread rubbed with garlic and butter.", calories: 220, cost: 8.99 },
    { id: 9, item: "Grilled Artichokes", logo: artichokes, logo2: vegan, description: "Grilled artichoke hearts served with dipping sauce.", calories: 160, cost: 12.99 },
    { id: 10, item: "Shrimp Cocktail", logo: shrimp_grilled, description: "Chilled shrimp served with cocktail sauce.", calories: 150, cost: 18.99 },
    // Pasta
    { id: 11, item: "Spaghetti Carbonara", logo: carbonara, description: "Pasta with eggs, cheese, bacon, and black pepper.", calories: 480, cost: 16.99,section:"Pasta" },
    { id: 12, item: "Fettuccine Alfredo", logo: alfredo, logo2: vegetarian, description: "Creamy pasta with Parmesan cheese and butter.", calories: 550, cost: 17.99},
    { id: 13, item: "Lasagna", logo: lasagna, description: "Layered pasta with meat, cheese, and tomato sauce.", calories: 620, cost: 19.99 },
    { id: 14, item: "Ravioli", logo: ravioli, logo2: vegetarian, description: "Pasta parcels filled with cheese or meat.", calories: 400, cost: 14.99 },
    { id: 15, item: "Penne Arrabbiata", logo: arrabbiata, logo2: vegetarian, description: "Pasta with spicy tomato sauce.", calories: 380, cost: 13.99 },
    { id: 16, item: "Tortellini Soup", logo: tortellini, logo2: vegetarian, description: "Soup with filled pasta pockets.", calories: 320, cost: 11.99 },
    { id: 17, item: "Pappardelle Bolognese", logo: bolognese, description: "Wide pasta ribbons with meat sauce.", calories: 540, cost: 18.99 },
    { id: 18, item: "Gnocchi Pomodoro", logo: gnocchi, logo2: vegetarian, description: "Potato dumplings with tomato sauce.", calories: 470, cost: 16.99 },
    { id: 19, item: "Linguine with Clams", logo: vongole, description: "Pasta with clams, garlic, and white wine sauce.", calories: 420, cost: 17.99 },
    { id: 20, item: "Pesto Genovese", logo: genovese, logo2: vegetarian, description: "Pasta with basil, pine nuts, garlic, and cheese.", calories: 480, cost: 15.99 },
    // Grill
    { id: 21, item: "Grilled Chicken Breast", logo: ribs, description: "Grilled chicken breast marinated in herbs.", calories: 320, cost: 14.99 ,section:"Grill"},
    { id: 22, item: "Ribeye Steak", logo: ribeye, description: "Juicy grilled ribeye steak.", calories: 700, cost: 26.99 },
    { id: 23, item: "Salmon Fillet", logo: pink_salmon, description: "Grilled salmon fillet with lemon butter.", calories: 450, cost: 22.99 },
    { id: 24, item: "Vegetable Kebabs", logo: kebabs, logo2: vegan, description: "Grilled skewers of assorted vegetables.", calories: 220, cost: 13.99 },
    { id: 25, item: "BBQ Ribs", logo: ribs, description: "Slow-cooked ribs with barbecue sauce.", calories: 600, cost: 24.99 },
    { id: 26, item: "Grilled Shrimp Skewers", logo: shrimp_grilled, description: "Skewered grilled shrimp.", calories: 280, cost: 20.99 },
    { id: 27, item: "Portobello Mushroom Burger", logo: mushroom_burger, logo2: vegetarian, description: "Grilled mushroom cap served as a burger.", calories: 380, cost: 16.99 },
    { id: 28, item: "T-Bone Steak", logo: t_bone, description: "Grilled T-bone steak cooked to perfection.", calories: 800, cost: 29.99 },
    { id: 29, item: "Grilled Lamb Chops", logo: lamb_chops, description: "Juicy grilled lamb chops seasoned with herbs.", calories: 620, cost: 28.99 },
    { id: 30, item: "Cedar Plank Salmon", logo: salmon_grill, description: "Salmon fillet grilled on a cedar plank.", calories: 470, cost: 23.99 },
    // Fish
    { id: 31, item: "Fish and Chips", logo: cod, description: "Battered and fried fish with fries.", calories: 800, cost: 18.99 ,section:"Fish"},
    { id: 32, item: "Grilled Halibut", logo: halibut, description: "Grilled halibut fillet with lemon.", calories: 550, cost: 25.99 },
    { id: 33, item: "Shrimp Scampi", logo: scampi, description: "Shrimp sautéed in garlic butter and wine.", calories: 380, cost: 22.99 },
    { id: 34, item: "Tuna Steak", logo: tuna, description: "Grilled tuna steak with sesame seeds.", calories: 420, cost: 27.99 },
    { id: 35, item: "Lobster Tail", logo: lobster, description: "Grilled lobster tail with drawn butter.", calories: 600, cost: 32.99 },
    { id: 36, item: "Seafood Paella", logo: paella, description: "Spanish rice dish with seafood and saffron.", calories: 700, cost: 30.99 },
    { id: 37, item: "Crab Cakes", logo: crab_cake, description: "Pan-seared crab cakes with remoulade sauce.", calories: 420, cost: 26.99 },
    { id: 38, item: "Grilled Swordfish", logo: swordfish, description: "Swordfish steak grilled with herbs.", calories: 480, cost: 28.99 },
    { id: 39, item: "Blackened Salmon", logo: salmon, description: "Salmon fillet seasoned with Cajun spices.", calories: 400, cost: 24.99 },
    { id: 40, item: "Baked Cod", logo: cod, description: "Cod fillet baked with lemon and herbs.", calories: 350, cost: 21.99 },
    // Salads
    { id: 41, item: "Caesar Salad", logo: caesar, logo2: vegetarian, description: "Romaine lettuce, croutons, Parmesan cheese, Caesar dressing.", calories: 320, cost: 12.99,section:"Salads" },
    { id: 42, item: "Greek Salad", logo: greek, logo2: vegetarian, description: "Tomatoes, cucumbers, olives, feta cheese, olive oil.", calories: 280, cost: 11.99 },
    { id: 43, item: "Cobb Salad", logo: cobb, description: "Lettuce, tomatoes, avocado, bacon, chicken, blue cheese.", calories: 480, cost: 15.99 },
    { id: 44, item: "Caprese Salad", logo: caprese_salad, logo2: vegetarian, description: "Tomatoes, mozzarella, basil, balsamic glaze.", calories: 250, cost: 13.99 },
    { id: 45, item: "Nicoise Salad", logo: nicoise, description: "Mixed greens, tuna, hard-boiled eggs, potatoes, olives.", calories: 420, cost: 14.99 },
    { id: 46, item: "Waldorf Salad", logo: waldorf, logo2: vegetarian, description: "Apples, grapes, celery, walnuts, mayonnaise dressing.", calories: 380, cost: 12.99 },
    { id: 47, item: "Kale Salad", logo: kale, logo2: vegan, description: "Kale, cranberries, almonds, lemon vinaigrette.", calories: 250, cost: 10.99 },
    { id: 48, item: "Spinach Salad", logo: spinach, logo2: vegetarian, description: "Baby spinach, strawberries, goat cheese, balsamic dressing.", calories: 280, cost: 11.99 },
    { id: 49, item: "Mango Avocado Salad", logo: mango, logo2: vegan, description: "Mango, avocado, red onion, lime dressing.", calories: 220, cost: 9.99 },
    { id: 50, item: "Taco Salad", logo: taco, description: "Lettuce, tomatoes, ground beef, cheese, tortilla chips.", calories: 550, cost: 16.99 },
    // Desserts
    { id: 51, item: "Tiramisu", logo: tiramisu, logo2: vegetarian, description: "Layers of coffee-soaked ladyfingers and mascarpone cream.", calories: 450, cost: 8.99,section:"Deserts" },
    { id: 52, item: "Cheesecake", logo: cheesecake, logo2: vegetarian, description: "Creamy cheesecake on a graham cracker crust.", calories: 380, cost: 7.99 },
    { id: 53, item: "Chocolate Lava Cake", logo: lava, logo2: vegetarian, description: "Warm chocolate cake with a molten center.", calories: 500, cost: 9.99 },
    { id: 54, item: "Apple Pie", logo: apple, logo2: vegetarian, description: "Warm apple filling in a flaky pastry crust.", calories: 320, cost: 6.99 },
    { id: 55, item: "Key Lime Pie", logo: lime, logo2: vegetarian, description: "Tangy lime filling in a buttery crust.", calories: 350, cost: 7.99 },
    { id: 56, item: "Creme Brulee", logo: creme_brule, logo2: vegetarian, description: "Creamy custard with caramelized sugar topping.", calories: 400, cost: 8.99 },
    { id: 57, item: "Panna Cotta", logo: pannacotta, logo2: vegetarian, description: "Italian dessert of sweetened cream set with gelatin.", calories: 300, cost: 7.99 },
    { id: 58, item: "Fruit Tart", logo: fruit_tart, logo2: vegetarian, description: "Shortcrust pastry with custard and fresh fruit.", calories: 360, cost: 6.99 },
    { id: 59, item: "Brownie Sundae", logo: brownie, logo2: vegetarian, description: "Warm brownie topped with ice cream and chocolate sauce.", calories: 480, cost: 8.99 },
    { id: 60, item: "Ice Cream Sampler", logo: icecream, logo2: vegetarian, description: "Assorted flavors of creamy ice cream.", calories: 300, cost: 10.99 },
    // Wine
    { id: 61, item: "Merlot", logo: merlot, description: "Red wine with flavors of plum, cherry, and chocolate.", calories: 120, cost: 24.99,section:"Wine" },
    { id: 62, item: "Chardonnay", logo: chardonnay, description: "White wine with notes of apple, citrus, and vanilla.", calories: 100, cost: 22.99 },
    { id: 63, item: "Cabernet Sauvignon", logo: cabernet, description: "Full-bodied red wine with dark fruit flavors.", calories: 130, cost: 26.99 },
    { id: 64, item: "Pinot Noir", logo: pinot_noir, description: "Light-bodied red wine with cherry and earthy notes.", calories: 110, cost: 28.99 },
    { id: 65, item: "Sauvignon Blanc", logo: sauvignon, description: "Crisp white wine with herbal and tropical fruit flavors.", calories: 90, cost: 20.99 },
    { id: 66, item: "Riesling", logo: riesling, description: "Sweet white wine with floral and fruity aromas.", calories: 100, cost: 18.99 },
    { id: 67, item: "Malbec", logo: malbec, description: "Rich red wine with black fruit and spice flavors.", calories: 140, cost: 25.99 },
    { id: 68, item: "Zinfandel", logo: zinfandel, description: "Bold red wine with berry and pepper notes.", calories: 150, cost: 27.99 },
    { id: 69, item: "Syrah", logo: syrah, description: "Full-bodied red wine with dark fruit and spice.", calories: 160, cost: 29.99 },
    { id: 70, item: "Rosé", logo: rose, description: "Pink wine with flavors of red berries and flowers.", calories: 110, cost: 21.99 },
    // Soft Drinks
    { id: 71, item: "Coca-Cola", logo: coke, description: "Classic cola soft drink with caramel flavor.", calories: 140, cost: 3.99, section:"Drinks"},
    { id: 72, item: "Sprite", logo: sprite, description: "Lemon-lime flavored carbonated beverage.", calories: 120, cost: 3.99 },
    { id: 73, item: "Root Beer", logo: root_beer, description: "Sweet carbonated beverage with a root extract flavor.", calories: 160, cost: 4.99 },
    { id: 74, item: "Ginger Ale", logo: ginger_ale, description: "Carbonated drink with ginger flavor and a hint of sweetness.", calories: 150, cost: 4.99 },
    { id: 75, item: "Lemonade", logo: lemon_ade, description: "Refreshing lemon-flavored drink.", calories: 130, cost: 3.99 },
    { id: 76, item: "Iced Tea", logo: ice_tea, description: "Chilled tea served over ice.", calories: 100, cost: 3.99 },
    { id: 77, item: "Orange Juice", logo: orange_juice, description: "Freshly squeezed orange juice.", calories: 160, cost: 5.99 },
    { id: 78, item: "Cranberry Juice", logo: cranberry, description: "Tart juice made from cranberries.", calories: 140, cost: 5.99 },
    { id: 79, item: "Club Soda", logo: club_soda, description: "Carbonated water for mixing cocktails.", calories: 0, cost: 2.99 },
    { id: 80, item: "Tonic Water", logo: tonic_water, description: "Bitter carbonated mixer for gin and tonic.", calories: 110, cost: 3.99 }
];


export default STOCK;
