<script>
  // import { Carousel } from 'flowbite-svelte';
  import { onMount  } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faYoutube } from "@fortawesome/free-brands-svg-icons";
  let images = [
    "Lettuce.pic1.webp",
    "lettuce.pic2.webp",
    "lettuce.pic3.webp",
    "lettuce.pic4.webp",
  ];

  let currentImage = 0;
  let interval;

  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
  }

  function previousImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
  }

  onMount(() => {
    interval = setInterval(nextImage, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component is destroyed
    };
  });
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
  rel="stylesheet"
/>

<div>
    <img class="background-img" src=/Lettuce.jpg alt="Lettuce" />
</div>

<div class="carousel carousel-img transition">
  <img class="carousel-img transition" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />

  <div class="carousel-buttons">
    <button class="carousel-button" on:click={previousImage}>&lt;</button>
    <button class="carousel-button" on:click={nextImage}>&gt;</button>
  </div>
</div>
<header class="bg-green-600 text-white p-6 text-center shadow-lg flex justify-between">
  <h1 class="text-4xl font-semibold text-shadow bg-transparent">
    Welcome to Fenster Farms!
  </h1>
  <a class="border-2 p-2 text-md font-semibold rounded-md" href="https://www.youtube.com/@FensterfarmGreenhouse">
    Our Youtube Channel </a>
</header>

<main class="container mx-auto my-10 px-6">
  <section>
    <h2
      class="text-4xl font-semibold mb-6 text-center text-green-700 text-shadow"
    >
      About Our Farm
    </h2>
    <p class="text-xl font-semibold text-white text-center mb-8 text-shadow">
      At Fenster Farm we grow differently. Hydroponics is our method for
      growing...
    </p>
    <div
      class="bg-white rounded-lg p-6 mx-auto text-center max-w-2xl transition duration-300 ease-in-out hover:shadow-2xl"
    >
      <h3 class="text-2xl font-semibold mb-4">Advantages of Hydroponics</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div>
          <h4 class="font-semibold text-xl mb-2">Reduce labor</h4>
          <p>
            Hydroponic systems require no tilling, weeding, heavy-lifting, or
            extensive stooping and kneeling...
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-xl mb-2">Reduce water</h4>
          <p>
            Hydroponic systems use significantly less water than soil-based
            farming and allow you to recycle the water you give to your
            plants...
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-xl mb-2">Protect Year-Round</h4>
          <p>
            Food is typically vulnerable to extreme weather and pests.
            Hydroponic systems can be set up indoors, away from harmful
            elements...
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-xl mb-2">Harvest consistently</h4>
          <p>
            With plants safe from pests and elements, hydroponic systems allow
            growers to grow and harvest consistently, regardless of
            seasonality...
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- <div>
    <a href="https://www.youtube.com/@FensterfarmGreenhouse">
        <img src="path_to_your_youtube_icon" alt="YouTube Icon" />
        Learn more about us on our Youtube Channel
    </a>
</div> -->
  <!-- <Gallery>
    <img src="" alt="">
</Gallery> -->

  <section class="mt-12">
    <h2
      class="text-4xl font-semibold text-center text-green-700 mb-6 text-shadow"
    >
      Farmers Markets on Saturday
    </h2>
    <table class="table-auto w-full mt-4 bg-white rounded-lg shadow">
      <thead class="bg-green-500 text-white">
        <tr>
          <th class="px-6 py-3">Market</th>
          <th class="px-6 py-3">Location</th>
          <th class="px-6 py-3">Time</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
     

        <tr class="bg-gray-100">
          <td class="border px-6 py-4">Agricenter Market</td>
          <td class="border px-6 py-4"
            >Agricenter Germantown Pkwy. Memphis TN</td
          >
          <td class="border px-6 py-4">8:00 AM - 1:00 PM</td>
        </tr></tbody
      >
    </table>
  </section>

  <section
    class="mt-12 bg-green-100 p-6 rounded-lg shadow text-center transition duration-300 ease-in-out hover:shadow-xl"
  >
    <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
    <form action="/submit-form" method="post" class="max-w-lg mx-auto">
      <div class="mb-4" />

      <div class="mb-4">
        <label class="block" for="name">Name:</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3"
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div class="mb-4">
        <label class="block" for="email">Email:</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3"
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div class="mb-4">
        <label class="block" for="message">Message:</label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3"
          id="message"
          name="message"
        />
      </div>
      <button
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        type="submit">Submit</button
      >
    </form>
  </section>
</main>

<!-- <div class="max-w-4xl mx-auto">
    <Carousel>
        images={images}
    </Carousel>
  </div> -->

<!-- <div class="carousel">
    <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
    
    <div class="carousel-buttons">
        <button class="carousel-button" on:click={previousImage}>&lt;</button>
        <button class="carousel-button" on:click={nextImage}>&gt;</button>
    </div>
</div> -->

<footer class="bg-gray-900 text-white text-center p-6 mt-12">
  <p>&copy; 2023 Fenster Farms. All rights reserved.</p>
</footer>

<style>
  .background-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    backdrop-filter: blur(10px);
  }

  .text-shadow {
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
  }

  header {
    background-color: rgba(0, 128, 0, 0.6);
    backdrop-filter: blur(1px);
  }

  h1 {
  }

  .carousel {
    position: relative;
    width: 100%;
     /* Adjust as needed */
    margin: auto;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }
  .carousel img {
    width: 100%;
    display: block;
    object-fit: cover;
    opacity: 1;
    transition: opacity 1s ease-in-out;
    ;
  }
    .carousel-img.fade-out {
        opacity: 0;
    }
  .carousel-buttons {
    position: absolute;
    width: 100%;
    top: 50%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  .carousel-button {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
</style>
