import "./style.css";
import "tailwindcss/tailwind.css";
const navbarContentSmallScreen = `
<nav class="bg-[#F1F1F1] rounded-xl w-full h-full shadow-sm sticky top-0 z-10" id="nav"> 
 <ul class="grid grid-cols items-center gap-5 sm:gap-5 md:gap-8 lg:gap-10">
 <button id "humburger">Humburger</button> 
 <li class="ml-10 font-extrabold text-3xl sm:mr-6 md:mr-16 lg:mr-20"><a href="index.html"><h1>Shemsu</h1></a></li>
  </ul>
    <div class="relative pt-[20px] ml" id="smallnavbar" hidden>
      <div class="">
        <ul class="grid grid-cols items-center gap-5 sm:gap-5 md:gap-8 lg:gap-10"> 
        <div class="">
        <ul class="grid grid-cols-1 gap-5 sm:gap-5 md:gap-8 lg:gap-10 text-xs text-center"> 
        <li class="text-black"><a href="#" class="text-black text-center">Home</a></li>
        <li class="text-black"><a href="#" class="text-black text-center">Jeans</a></li>
        <li class="text-black"><a href="#" class="text-black text-center">Cargo</a></li>
        <li class="text-black"><a href="#" class="text-black text-center">Polo</a></li>
        <li class="text-black"><a href="#" class="text-black text-center">Cart</a></li>
        <div class="">
        <ul class="grid grid-cols-1 gap-2 sm:gap-2 md:gap-4 lg:gap-5"> 
        <li class="text-black"><a href="#" class="text-black text-center text-xs"><button class="bg-black rounded-[12px] text-white w-full h-9 ">Login</button></a></li>
        <li class="text-black"><a href="#" class="text-black text-center text-xs"><button class="bg-black rounded-[12px] text-white w-full h-9 ">Sign up</button></a></li>
        </ul>
        </ul> 
        </ul> 
        </div>
      </div>
      </div>
  </div>
</nav>
`;
const navbarContentLargeScreen = document.getElementById("bignavbar").innerHTML;

const bignavbar = document.getElementById("bignavbar");

function updateNavbar() {
  const windowsize = window.innerWidth;
  if (windowsize < 800) {
    bignavbar.addEventListener("click", function () {
      if (smallnavbar.hasAttribute("hidden")) {
        smallnavbar.removeAttribute("hidden");
      } else {
        smallnavbar.setAttribute("hidden", "");
      }
    });
  } else {
    console.log("visible");
    bignavbar.innerHTML = navbarContentLargeScreen;
  }
}

// Call updateNavbar initially
updateNavbar();

// Add event listener for window resize
window.addEventListener("resize", updateNavbar);
