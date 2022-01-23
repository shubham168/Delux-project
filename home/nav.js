document.write(
    `
    <header class = "m-navheader">
      <div class="mnav-container">
          <nav class="m-nav">
              <a href="./home.html" class="m-logo">DELUXE</a>
              <input type = "checkbox" id = "m-check" class="m-checkbtn">
              <label for="m-check" class="m-checkbtn">&nbsp;<i class = "fas fa-bars"><span class ="m-menutext">&nbsp;MENU&nbsp;</span></i></label>
              <ul class="m-nav-list">
                  <li>
                      <a href="./home.html" class="m-nav-link homeon">Home</a>
                  </li>
                  <li>
                      <a href="../rooms/rooms.html" class="m-nav-link">Rooms</a>
                  </li>
                  <li>
                      <a href="../restaurant/restaurant.html" class="m-nav-link">Restaurant</a>
                  </li>
                  <li>
                      <a href="../about/about.html" class="m-nav-link">About</a>
                  </li>
                  <li>
                    <a href="../fullblog/blog.html" class="m-nav-link">Blog</a>
                </li>
                  <li>
                      <a href="../fullcontact/contact.html" class="m-nav-link">Contact</a>
                  </li>
              </ul>
              
          </nav>
      </div>
  </header>
 

   
    `
)
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
