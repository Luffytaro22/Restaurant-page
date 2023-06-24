const contactPage = () => {
  const section = document.getElementById('main-section');
  section.innerHTML = `
    <div class="container">
      <div>
        <h1>Contact Us</h1>
      </div>
      <div>
        <h3>Kojiro Sasaki</h3>
        <p>Manager</p>
        <p>591-785-5467</p>
        <p>thebiglosser@gmail.com</p>
      </div>
      <div>
        <h3>Naruto Uzumaki</h3>
        <p>Chef</p>
        <p>785-456-1254</p>
        <p>hokage@gmail.com</p>
      </div>
      <div>
        <h3>Raiden Tameemon</h3>
        <p>Customer service</p>
        <p>985-875-3568</p>
        <p>sumoRaiden@gmail.com</p>
      </div>
    </div>
  `;
};

export default contactPage;
