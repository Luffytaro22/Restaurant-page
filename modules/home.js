const homePage = () => {
  const section = document.getElementById('main-section');
  section.innerHTML = `
    <div class="container">
      <div>
        <h1>Tokyo Sushi Bar</h1>
      </div>
      <div>
        <p>“People judge things by their own experience, not knowing of the wide world outside.”</p>
      </div>
      <div>
        <h2>Hours</h2>
        <p>Monday: 8am - 8pm</p>
        <p>Tuesday: 8am - 8pm</p>
        <p>Wednesday: 8am - 8pm</p>
        <p>Thursday: 8am - 8pm</p>
        <p>Friday: 8am - 8pm</p>
        <p>Saturday: 10am - 6pm</p>
        <p>Sunday: 10am - 6pm</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>742 Evergreen Terrace, Springfield</p>
      </div>
    </div>
  `;
};

export default homePage;
