<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
  } from "flowbite-svelte";
  import { Label, Input, ButtonGroup } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
  import {
    Textarea,
    Toolbar,
    ToolbarGroup,
    ToolbarButton,
    Button,
  } from "flowbite-svelte";
  import {
    PaperClipOutline,
    MapPinAltSolid,
    ImageOutline,
    CodeOutline,
    FaceGrinOutline,
    PapperPlaneOutline,
  } from "flowbite-svelte-icons";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Modal,
  } from "flowbite-svelte";
  import { slide } from "svelte/transition";
  import { Img } from "flowbite-svelte";
  import { Carousel } from "flowbite-svelte";
  import { Card } from "flowbite-svelte";
  import { Tabs, TabItem } from "flowbite-svelte";
  import { Video } from "flowbite-svelte";
  import { Tooltip } from "flowbite-svelte";
  import { DarkMode } from 'flowbite-svelte';
  import { Toast } from 'flowbite-svelte';

  let openRow;
  let details;
  let showToast = false;
  const items = [
    {
      market: "Agricenter Farmers Market",
      time: "8:00am - 1:00pm",
      location: "123 Main St, Memphis, TN 38111",
      goods: "Living lettuce, basil, and microgreens",
      details:
        "Join us at the Agricenter Farmers Market for fresh produce and more. We will be selling living lettuce, basil, and microgreens.",
    },
  ];
  const images = [
    {
      src: "/Lettuce.jpg",
      alt: "Lettuce",
      caption: "Lettuce",
    },
    {
      src: "/Lettuce.pic1.webp",
      alt: "Basil",
      caption: "Basil",
    },
    {
      src: "/lettuce.pic2.webp",
      alt: "Microgreens",
      caption: "Microgreens",
    },
    {
      src: "/lettuce.pic3.webp",
      alt: "Microgreens",
      caption: "Microgreens",
    },
    {
      src: "/lettuce.pic4.webp",
      alt: "Microgreens",
      caption: "Microgreens",
    },
  ];

  function activateToast(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    showToast = true;
    setTimeout(() => {
      showToast = false;
    }, 3000);

  const form = event.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          // Form submission was successful
          console.log('Form submitted successfully');
        } else {
          // Form submission failed
          console.error('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      }); 

  const toggleRow = (i) => {
    openRow = openRow === i ? null : i;
  };

  function activateToast() {
    showToast = true;
    setTimeout(() => {
      showToast = false;
    }, 3000);
  }
}
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
  rel="stylesheet"
/>

<div class="w-[425px] sm:w-full relative px-1 sm:px-8 bg-whitesmoke">
  <Navbar class="px-2 sm:px-4 py-2.5 w-[400px] ml-3 fixed sm:w-full z-20 top-0 left-0 border-b">
    <NavBrand href="/">
      <span
        class="self-center whitespace-nowrap text-lg sm:text-3xl font-semibold dark:text-white"
        >Fenster Farms</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi class="text-sm sm:text-xl" href="/" active={true}>Home</NavLi>
      <NavLi class="text-sm sm:text-xl" href="#about">About</NavLi>
      <NavLi class="text-sm sm:text-xl" href="#testimonials">Customer Testimonials</NavLi>
      <NavLi class="text-sm sm:text-xl" href="#marketinfo">Market Info</NavLi>
      <NavLi class="text-sm sm:text-xl" href="#contact">Contact</NavLi>
      <DarkMode />
    </NavUl>
  </Navbar>
  <div></div>
  <div class="overflow-scroll pb-16">
    <div class="mt-28 mb-5">
      <h1 class="text-lg sm:text-3xl font-bold text-center text-white text-shadow">
        Fenster Farms
      </h1>
      <h2 class="text-lg sm:text-2xl font-semibold text-center text-white text-shadow">
        Fresh, Local Produce
      </h2>
    </div>
    <div class="flex-col sm:flex sm:flex-row justify-between">
      <div class="w-3/4 ml-12 sm:w-2/5 sm:ml-16">
        <Carousel class="shadow-2xl" {images} duration="3000" />
        <div class="text-center mt-3 text-md sm:text-2xl">
          All of our lettuce is grown hydroponically in our greenhouse. <br />
        </div>
      </div>
      <div class=" h-full ml-9 pl-0 w-5/6 sm:ml-0 sm:w-2/5 sm:mr-12 hover:shadow-xl mt-3">
        <Video class="border rounded-xl shadow-2xl" src="/Fensterfarm.video.mp4" controls trackSrc="flowbite.mp4" />
        <div class="mt-3 text-md sm:text-xl text-center">Here is a tour of our farm</div>
      </div>
    </div>

    
    <Card
      padding="none"
      size="xl"
      class="grid md:grid-cols-2 sm:ml-12 mt-8"
      id="testimonials"
    >
    
      <figure
        class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
      >
        <blockquote
          class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
        >
            
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            "Will never go back to store bought lettuce"
          </h3>
          <p class="my-4 font-light sm:ml-8">
            "This is the best lettuce I have ever tasted in my life Love it!!"
          </p>
        </blockquote>
        <figcaption class="flex justify-center items-center space-x-3">
          <img
            class="w-9 h-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="Karen profile"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div>Bonnie Green</div>
          </div>
        </figcaption>
      </figure>
      <figure
        class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <blockquote
          class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white sm:ml-32">
            "Lasted longer than I thought"
          </h3>
          <p class="my-4 font-light">
            "I buy my lettuce from Fenster Farms and it usually lasts for about 2
            weeks!"
          </p>
        </blockquote>
        <figcaption class="flex justify-center items-center space-x-3">
          <img
            class="w-9 h-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="Robert profile"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div>Roberta Casas</div>
          </div>
        </figcaption>
      </figure>
      <figure
        class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700"
      >
        <blockquote
          class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white xsm:ml-32">
            "Love supporting local farms"
          </h3>
          <p class="my-4 font-light">
            "Not only is their lettuce super fresh and tastes amazing, I also
            love that I can be part in supporting the local farmers."
          </p>
        </blockquote>
        <figcaption class="flex justify-center items-center space-x-3">
          <img
            class="w-9 h-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="Jese profile"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div>Jese Leos</div>
          </div>
        </figcaption>
      </figure>
      <figure
        class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700"
      >
        <blockquote
          class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white xsm:ml-32">
            "No more Ecoli for this guy"
          </h3>
          <p class="my-4 font-light">
            "With Fenster Farm lettuce, I have never had to worry about buying
            bacteria ridden lettuce."
          </p>
        </blockquote>
        <figcaption class="flex justify-center items-center space-x-3">
          <img
            class="w-9 h-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="joseph profile"
          />
          <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div>Joseph McFall</div>
          </div>
        </figcaption>
      </figure>
    </Card>
  </div>
</div>

<link
  href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Tangerine&family=Patrick+Hand&family=Caveat&display=swap"
  rel="stylesheet"
/>

<main class="container mx-auto px-6">
  <section>
    <div
      id="about"
      class="custom-bg rounded-lg p-6 text-center sm:max-w-4xl transition duration-300 ease-in-out hover:shadow-2xl sm:ml-40 mb-12"
    >
      <h3 class=" text-lg sm:text-2xl font-semibold mb-4 text-white">
        Advantages of Hydroponics
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div>
          <h4 class="font-bold text-lg text-center  sm:text-xl mb-2 text-white">Reduce labor</h4>
          <p class="text-white">
            Hydroponic systems require no tilling, weeding, heavy-lifting, or
            extensive stooping and kneeling.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-lg text-center  sm:text-2xl mb-2 text-white">Reduce water</h4>
          <p class="text-white">
            Hydroponic systems use significantly less water than soil-based
            farming and allow you to recycle the water you give to your plants.
          </p>
        </div>
        <div>
          <h4 class="font-bold text-lg text-center sm:text-2xl mb-2 text-white">Protect Year-Round</h4>
          <p class="text-white">
            Food is typically vulnerable to extreme weather and pests.
            Hydroponic systems can be set up indoors, away from harmful
            elements.
          </p>
        </div>
        <div>
          <h4 class="font-bold text-lg text-center sm:text-2xl mb-2 text-white">
            Harvest consistently
          </h4>
          <p class="text-white">
            With plants safe from pests and elements, hydroponic systems allow
            growers to grow and harvest consistently, regardless of seasonality.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Table id="marketinfo" class="w-full overflow-x-auto">
    <TableHead >
      <TableHeadCell class=" sm:p-8 sm:text-xl">Market</TableHeadCell>
      <TableHeadCell class="sm:p-8 sm:text-xl">Time</TableHeadCell>
      <TableHeadCell class="sm:p-8 sm:text-xl">Location</TableHeadCell>
      <TableHeadCell class="sm:p-8 sm:text-xl">What we are selling</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each items as item, i}
        <TableBodyRow id="hover" on:click={() => toggleRow(i)}>
          <TableBodyCell class="p-2 text-xs xs:p-8 xs:text-sm hover:cursor-pointer"
            >{item.market}</TableBodyCell
          >
          <TableBodyCell class="p-2 text-xs xs:p-8 xs:text-sm hover:cursor-pointer"
            >{item.time}</TableBodyCell
          >
          <TableBodyCell class="p-2 text-xs xs:p-8 xs:text-sm hover:cursor-pointer"
            >{item.location}</TableBodyCell
          >
          <TableBodyCell class="p-2 text-xs xs:p-8 xs:text-sm hover:cursor-pointer"
            >{item.goods}</TableBodyCell
          >
        </TableBodyRow>
        <Tooltip triggeredBy="#hover">Click to see more info!</Tooltip>

        {#if openRow === i}
          <TableBodyRow on:dblclick={() => (details = item)}>
            <TableBodyCell colspan="4" class="p-0">
              <div
                class="sm:px-2 py-3 sm:flex flex-col-2"
                transition:slide={{ duration: 300, axis: "y" }}
              >
                <Img
                  src="/Dadlettuce.jpeg"
                  alt="sample 1"
                  size="w-36 sm:w-1/3"
                  class="rounded-lg"
                />
                <div class="pl-1 sm:pl-5 sm:text-xl whitespace-normal text-center">
                  At the Agricenter Farmers Market, we will be selling living
                  lettuce, basil, and microgreens. <br />
                  All the lettuce is grown hydroponically in our greenhouse.
                  <br /> The basil and microgreens are grown in our greenhouse and
                  in our indoor vertical farm. We are a family owned and operated
                  farm located in Mason, TN. We are dedicated to providing fresh,
                  local produce to the Memphis community.
                </div>
              </div>
            </TableBodyCell>
          </TableBodyRow>
        {/if}
      {/each}
    </TableBody>
  </Table>
  <Modal title={details?.details} open={!!details} autoclose outsideclose>
    <Img
      src="/Dadlettuce.jpeg"
      size="max-w-lg"
      alt="My gallery"
      class="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    />
  </Modal>

  <section
    class="mt-12 bg-white p-6 rounded-lg shadow text-center transition duration-300 ease-in-out hover:shadow-xl"
  >
    <h2 class="text-xl font-semibold mb-4 text-white" id="contact">
      Contact Us
    </h2>
    <form action="https://formsubmit.co/dfbusinessjp@gmail.com" method="post" class="max-w-lg mx-auto">
      <input type="hidden" name="_captcha" value="false">
      <div class="mb-4" />
    
      <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Your name</Label>
        <input type="hidden" name="_subject" value="Fenster Farm Inquiry">
        <Input id="name" type="text" placeholder="John Smith"></Input>
      </div>
    
      <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Your Email</Label>
        <Input id="email" type="email" placeholder="JohnSmith@gmail.com" required>
          <EnvelopeSolid
            slot="left"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </Input>
      </div>
    
      <div class="mb-6">
        <label for="editor" class="sr-only"></label>
        <Textarea
          id="text"
          name="message"
          rows="8"
          class="mb-4 border-2"
          placeholder="Write a comment"
          required
        ></Textarea>
        
        <input type="hidden" name="_autoresponse" value="Thank you for your email! We will get back with you as soon as possible. Have a nice day!">
        <Toolbar slot="header" embedded>
          <ToolbarGroup>
            <ToolbarButton name="Attach file"
              ><PaperClipOutline class="w-5 h-5 rotate-45" /></ToolbarButton
            >
    
            <ToolbarButton name="Upload image"
              ><ImageOutline class="w-5 h-5" /></ToolbarButton
            >
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarButton name="Add emoji"
              ><FaceGrinOutline class="w-5 h-5" /></ToolbarButton
            >
          </ToolbarGroup>
        </Toolbar>
      </div>
    
      <Button type="submit" on:submit={activateToast} color="light">Send</Button>
    </form>
      {#if showToast}
      <Toast dismissable={false} contentClass="flex space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
        <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
      </Toast>
      {/if}
    
  </section>
</main>

<footer class="bg-gray-900 text-white text-center p-6 mt-12">
  <p>&copy; 2023 Fenster Farms. All rights reserved.</p>
</footer>

<style>
  .text-shadow {
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
  }
  .custom-bg {
    background: linear-gradient(
      90deg,
      rgba(107, 106, 106, 0.8) 0%,
      rgba(149, 149, 149, 0.8) 100%
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .text-xl {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 32px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    line-height: 1.6;
  }
  .text-2xl {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 48px;
    line-height: 1.6;
    color: #333;
  }
  .text-md {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 30px;
    line-height: 1.6;
    color: #333;
    
  }
  .text-lg {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 36px;
    line-height: 1.6;
   
  }

  
  .text-3xl {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
   
    line-height: 1.6;
    color: #333;
    
  }
  .text-4xl {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 72px;
    line-height: 1.6;
    color: #333;
    
  }
  .text-5xl {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 96px;
    line-height: 1.6;
    color: #333;
    text-align: left;
  }
  .text-sm {
    font-family: "Amatic SC", cursive;
    /* or 'Tangerine', cursive; */
    /* or 'Patrick Hand', cursive; */
    /* or 'Caveat', cursive; */
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    text-align: left;
  }
  @media (max-width: 768px) {
  }
</style>
