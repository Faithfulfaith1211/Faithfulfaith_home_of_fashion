import React from 'react'

const App = () => {
  return (
    <div>
      <section class="header">
        <nav>
            <a href="index.html"><img src="./ChatGPT Image Aug 13, 2026, 11_34_08 PM.png" alt="shoe image"></img></a>
            <div class="nav-links" id="navlinks">
                <i class="fa fa-times" onclick="hidemenu()"></i>
                <ul>
                    <li><a href="#HOME">HOME</a></li>
                    <li><a href="#ABOUT">ABOUT</a></li>
                    <li><a href="#COURSE">COURSE</a></li>
                    <li><a href="#CONTACT">CONTACT</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showmenu()"></i>
        </nav>
            <div class="text-box">
                <h1>Word's Biggest Fashion Brand</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ullam a blanditiis obcaecati, <br>libero voluptatum dolor facere iusto sequi sit delectus quaerat quae officiis quo dicta culpa doloremque expedita quam distinctio pariatur placeat labore?</br></p>
                <a href="" class="hero-btn">Visit Us to Know More</a>

            </div>
      </section>
        {/* <!-- course --> */}
     <section class="course">
        <h1>Items We Produce</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellat ipsum at quod reiciendis delectus dignissimos ducimus unde quam, praesentium aut nesciunt nostrum nulla amet magnam? Harum et culpa aspernatur animi modi itaque quasi amet cumque laboriosam dolore! Placeat, doloribus. Reiciendis, accusantium quasi.</p>
        <div class="row">
            <div class="course-col">
                <h3>Leather Shoes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic molestiae dicta atque, nihil debitis possimus nemo iure tenetur quas.</p>
              </div>
               <div class="course-col">
                <h3>Suits</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic molestiae dicta atque, nihil debitis possimus nemo iure tenetur quas.</p>
              </div>
               <div class="course-col">
                <h3>Cover Shoes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic molestiae dicta atque, nihil debitis possimus nemo iure tenetur quas.</p>
              </div>
            </div>

     </section>

     <section class="campus">
        <h1>Our Global Fashion</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto quae eligendi repellendus in a soluta eum voluptate? Non doloremque, quod consequatur animi ad aspernatur optio qui dolor voluptate, earum necessitatibus! Repellendus fugit illum qui repudiandae, exercitationem ratione dicta rem?</p>
        <div class="row">
            <div class="campus-col">
                <img src="./1 shoe.jpg" alt="brown shoe"></img>
                <div class="layer">
                    <h3>Brown Shoe</h3>

                </div>
            </div>
            <div class="campus-col">
                <img src="./black shoes.jpg" alt="brown shoe"></img>
                <div class="layer">
                    <h3>Black Shoes</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src="./pair of shoes.jpg" alt="brown shoe"></img>
                <div class="layer">
                    <h3>Brown Shoes</h3>
                </div>
            </div>

        </div>
     </section>
    {/* <!-- other items --> */}
 <section class="Items">
    <h1>Other Items</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia architecto dolorum ducimus ipsam neque magnam eligendi. Dicta corporis magnam neque.</p>
    <div class="row">
        <div class="Items-col">
            <img src="./suit jacket.jpg" alt="jacket"></img>
            <h3>Suit Jacket</h3>
            <p>Lorem ipsum,corrupti nam repudiandae laudantium dolorem minus vitae est in.</p>
        </div>
         <div class="Items-col">
            <img src="./Suit trouser.jpg" alt="jacket"></img>
            <h3>Suit Trouser</h3>
            <p>Lorem ipsum,corrupti nam repudiandae laudantium dolorem minus vitae est in.</p>
        </div> 
        <div class="Items-col">
            <img src="./waist coat.jpg" alt="jacket"></img>
            <h3>Waist Coat</h3>
            <p>Lorem ipsum,corrupti nam repudiandae laudantium dolorem minus vitae est in.</p>
        </div>
    </div>
 </section>
 {/* <!-- TESTIMONIALS --> */}
 <section class="Testimonials">
    <h1>What Our Customers Says</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum libero accusamus obcaecati, deserunt numquam natus?</p>
    <div class="row">
        <div class="Testimonials-col">
            <img src="./faith sitting.jpg"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ea enim? Numquam expedita quo vitae vero, sequi assumenda perferendis blanditiis! Doloremque repellendus deserunt, veritatis provident libero quasi rem adipisci repellat.</p>
            <h3>Adigun Faith</h3>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <div class="Testimonials-col">
            <img src="./faithfulfaith.jpg"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ea enim? Numquam expedita quo vitae vero, sequi assumenda perferendis blanditiis! Doloremque repellendus deserunt, veritatis provident libero quasi rem adipisci repellat.</p>
            <h3>Adigun Opeyemi</h3>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
        </div>
    </div>
 </section>
{/* <!-- CALL TO ACTION --> */}
 <section class="cta">
    <h1>Enroll For Our Aprentiship <br> Anywhere in the World</br></h1>
    <a href="" class="hero-btn">Contact Us</a>

 </section>
 {/* <!-- Footer --> */}

 <section class="footer">
    <h4>About us</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error sequi accusamus aliquid fugiat impedit ipsum minima animi,<br> ullam ipsa sint? Dolores enim dolorem iste earum, ipsa doloremque odit eligendi.</br></p>
    <div class="icons">
    <i class="fa fa-facebook"></i>
    <i class="fa fa-twitter"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-linkedin"></i>
  </div>
    <p>Made with <i class="fa fa-heart"></i> By Faithfulfaith</p>


  </section>
  </div>
  )
}

export default App

