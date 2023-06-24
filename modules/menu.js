import sushi from '../src/assets/menu/Sushi-Sashimi.jpg';
import ramen from '../src/assets/menu/Ramen.jpg';
import tempura from '../src/assets/menu/Tempura.jpg';
import okinomiyaki from '../src/assets/menu/Okinomiyaki.jpg';
import miso from '../src/assets/menu/Miso.jpg';
import onigiri from '../src/assets/menu/Onigiri.jpg';
import udon from '../src/assets/menu/Udon.jpg';
import mochi from '../src/assets/menu/Mochi.jpg';
import takoyaki from '../src/assets/menu/Takoyaki.jpg';
import dango from '../src/assets/menu/Dango.jpg';
import dorayaki from '../src/assets/menu/Dorayaki.jpg';
import matcha from '../src/assets/menu/Matcha.jpg';
import calpis from '../src/assets/menu/Calpis.jpg';
import oshiruko from '../src/assets/menu/Oshiruko.jpg';
import sake from '../src/assets/menu/Sake.jpg';

const menuPage = () => {
  const section = document.getElementById('main-section');
  section.innerHTML = `
    <div class="container animation-menu">
      <div>
        <h1>Menu</h1>
      </div>
      <div>
        <h2>Main dishes</h2>
      </div>
      <div>
        <h3>Sushi</h3>
        <img src=${sushi}>
        <p>Sushi has a base of cooked rice and vinegar, while sashimi is raw fish sliced into very thin pieces. They are served with soy sauce, wasabi and pickled ginger as a side.</p>
        <p>$10</p>
      </div>
      <div>
        <h3>Ramen</h3>
        <img src=${ramen}>
        <p>It is the king of noodle-based dishes. Its popularity has led vendors to come up with different recipes, each with a specific style.</p>
        <p>$7</p>
      </div>
      <div>
        <h3>Tempura</h3>
        <img src=${tempura}>
        <p>It is a frying based on crunchy vegetables and seafood, which are gently cooked.
        The secret is in the batter, which is made with wheat flour and sometimes with a touch of beer. Do you want to recognize a well-made tempura? The paper should not be left with oil stains.</p>
        <p>$8</p>
      </div>
      <div>
        <h3>Okinomiyaki</h3>
        <img src=${okinomiyaki}>
        <p>It is a wheat flour tortilla, egg and sweet potato.
        The difference is that you can add almost any ingredient. The most common have meat, prawns, chives, cheese, vegetables and shellfish. A chef prepares it in front of you on a large iron griddle and it is dressed with sauce and lines of mayonnaise. Delicious!</p>
        <p>$5</p>
      </div>
      <div>
        <h3>Miso soup</h3>
        <img src=${miso}>
        <p>It is consumed as a starter and consists of bonito broth (dashi), to which cubes of tofu, miso paste, shiitake mushrooms and radishes are added. Many restaurants serve it with a bowl of rice.</p>
        <p>$4</p>
      </div>
      <div>
        <h3>Onigiri</h3>
        <img src=${onigiri}>
        <p>They are the typical rice balls filled with fish, meat or vegetables and covered with a piece of nori seaweed.
        They are very cheap and you can buy them at any store for a few yen. We like the variety of tsunamayo (tuna with mayonnaise), but there are actually many variants to choose from.</p>
        <p>$2</p>
      </div>
      <div>
        <h3>Udon</h3>
        <img src=${udon}>
        <p>It is a type of thick noodle, made from wheat flour and that can be eaten hot or cold.
        In general, udon is usually accompanied with chives, pieces of fish, and on some occasions, pieces of tempura. If you go in the summer, make sure you eat them cold. In winter it is better to order them hot.</p>
        <p>$5</p>
      </div>
      <div>
      <h2>Desserts</h2>
      </div>
      <div>
        <h3>Mochi</h3>
        <img src=${mochi}>
        <p>It is a small sweet cake that is made with pounded glutinous rice. When it acquires the ideal consistency, it is molded and filled with fruit or sweet bean paste.
        There is a version known as daifuku, which is usually covered in a thin layer of starch. It is a typical New Year's dish.</p>
        <p>$3</p>
      </div>
      <div>
        <h3>Takoyaki</h3>
        <img src=${takoyaki}>
        <p>Are you a big fan of octopus? Then you will love these croquettes. The most popular are found in Kansai. The chefs prepare them on an iron griddle with holes. When they are ready, different sauces are added. Have you never eaten octopus but are you curious? This is a very good option.</p>
        <p>$4</p>
      </div>
      <div>
        <h3>Dango</h3>
        <img src=${dango}>
        <p>This typical dessert is made with rice flour balls, which are inserted into a skewer and to which a different flavor is added. The most common is boccham dango, with flavors of green tea, egg, and red bean.</p>
        <p>$2</p>
      </div>
      <div>
        <h3>Dorayaki</h3>
        <img src=${dorayaki}>
        <p>Its appearance is similar to that of American hot cakes. These round cakes are filled with adzuki paste, although you can also find them in different flavors: chocolate, pastry cream, or strawberry jelly. They are very popular among young people and adults.
        You will want to try them all!</p>
        <p>$2</p>
      </div>
      <div>
        <h2>Drinks</h2>
      </div>
      <div>
        <h3>Matcha Tea</h3>
        <img src=${matcha}>
        <p>Talking about Japanese gastronomy also includes the tea ceremony, and of course, the Japanese matcha tea. This drink is closely related to the arrival of Buddhism in Japan. Besides, their ritual is a true spectacle.</p>
        <p>$1.50</p>
      </div>
      <div>
        <h3>Calpis</h3>
        <img src=${calpis}>
        <p>Calpis or calpico soda is one of the most famous Japanese drinks outside of Japan. It is one of the most consumed in its country of origin, yes, but not the favorite of the Japanese.
      
        Calpis is a soft drink without gas that mixes distilled water, skimmed milk and lactic acid. It is something like a very diluted yogurt, flavored with different fruit flavors.</p>
        <p>$0.50</p>
      </div>
      <div>
        <h3>Oshiruko</h3>
        <img src=${oshiruko}>
        <p>With a thicker texture, it is a kind of adzuki bean sauce or mash. It is a vegan drink that is very popular.
        In winter it is marketed as a hot drink, and can be found in vending machines to be enjoyed as an aperitif or for dessert after eating.</p>
        <p>$1</p>
      </div>
      <div>
        <h3>Sake</h3>
        <img src=${sake}>
        <p>In the West, sake is commonly referred to as "rice wine". The production of alcoholic beverages by fermentation of the grain is more common in beer than wine.</p>
        <p>$2.60</p>
      </div>
    </div>
  `;
};

export default menuPage;
