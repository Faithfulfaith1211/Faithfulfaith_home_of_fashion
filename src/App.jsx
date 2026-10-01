import React from 'react'
import logo from "./assets/logo.png"
import shoe from "./assets/shoe.jpg"
import blackShoe from "./assets/black_shoes.jpg"
import pairShoes from "./assets/pair_of_shoes.jpg"
import suitJacket from "./assets/suit_jacket.jpg"
import waistCoat from "./assets/waist_coat.jpg"
import faithfulfaith from "./assets/faithfulfaith.jpg"
import faithSitting from "./assets/faith_sitting.jpg"

const App = () => {
  return (
    <div>
      <section className="header">
        <nav>
            <a href="index.html"><img src={logo}></img></a>
            <div className="nav-links" id="navlinks">
                {/* <i className="fa fa-times" onclick="hidemenu()"></i> */}
                <ul>
                    <li><a href="#HOME">HOME</a></li>
                    <li><a href="#ABOUT">ABOUT</a></li>
                    <li><a href="#COURSE">COURSE</a></li>
                    <li><a href="#CONTACT">CONTACT</a></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showmenu()"></i> */}
        </nav>
            <div className="text-box">
                <h1>Word's Biggest Fashion Brand</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ullam a blanditiis obcaecati, libero voluptatum dolor facere iusto sequi sit delectus quaerat quae officiis quo dicta culpa doloremque expedita quam distinctio pariatur placeat labore?</p>
                <a href="" className="hero-btn">Visit Us to Know More</a>

            </div>
      </section>
        {/* <!-- course --> */}
     <section className="course">
        <h1>Items We Produce</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem repellat ipsum at quod reiciendis delectus dignissimos ducimus unde quam, praesentium aut nesciunt nostrum nulla amet magnam? Harum et culpa aspernatur animi modi itaque quasi amet cumque laboriosam dolore! Placeat, doloribus. Reiciendis, accusantium quasi.</p>
        <div className="row">
            <div className="course-col">
                <h3>Leather Shoes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic molestiae dicta atque, nihil debitis possimus nemo iure tenetur quas.</p>
              </div>
               <div className="course-col">
                <h3>Suits</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic molestiae dicta atque, nihil debitis possimus nemo iure tenetur quas.</p>
              </div>
               <div className="course-col">
                <h3>Cover Shoes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic molestiae dicta atque, nihil debitis possimus nemo iure tenetur quas.</p>
              </div>
            </div>

     </section>

     <section className="campus">
        <h1>Our Global Fashion</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto quae eligendi repellendus in a soluta eum voluptate? Non doloremque, quod consequatur animi ad aspernatur optio qui dolor voluptate, earum necessitatibus! Repellendus fugit illum qui repudiandae, exercitationem ratione dicta rem?</p>
        <div className="row">
            <div className="campus-col">
                <img src={shoe} alt="brown shoe"></img>
                <div className="layer">
                    <h3>Brown Shoe</h3>

                </div>
            </div>
            <div className="campus-col">
                <img src={blackShoe} alt="brown shoe"></img>
                <div className="layer">
                    <h3>Black Shoes</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src={pairShoes} alt="brown shoe"></img>
                <div className="layer">
                    <h3>Brown Shoes</h3>
                </div>
            </div>

        </div>
     </section>
    {/* <!-- other items --> */}
 <section className="Items">
    <h1>Other Items</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia architecto dolorum ducimus ipsam neque magnam eligendi. Dicta corporis magnam neque.</p>
    <div className="row">
        <div className="Items-col">
            <img src={suitJacket} alt="jacket"></img>
            <h3>Suit Jacket</h3>
            <p>Lorem ipsum,corrupti nam repudiandae laudantium dolorem minus vitae est in.</p>
        </div>
         <div className="Items-col">
            <img src={suitJacket} alt="jacket"></img>
            <h3>Suit Trouser</h3>
            <p>Lorem ipsum,corrupti nam repudiandae laudantium dolorem minus vitae est in.</p>
        </div> 
        <div className="Items-col">
            <img src={waistCoat} alt="jacket"></img>
            <h3>Waist Coat</h3>
            <p>Lorem ipsum,corrupti nam repudiandae laudantium dolorem minus vitae est in.</p>
        </div>
    </div>
 </section>
 {/* <!-- TESTIMONIALS --> */}
 <section className="Testimonials">
    <h1>What Our Customers Says</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum libero accusamus obcaecati, deserunt numquam natus?</p>
    <div className="row">
        <div className="Testimonials-col">
            <img src={faithSitting}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ea enim? Numquam expedita quo vitae vero, sequi assumenda perferendis blanditiis! Doloremque repellendus deserunt, veritatis provident libero quasi rem adipisci repellat.</p>
            <h3>Adigun Faith</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
        </div>
        <div className="Testimonials-col">
            <img src={faithfulfaith}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ea enim? Numquam expedita quo vitae vero, sequi assumenda perferendis blanditiis! Doloremque repellendus deserunt, veritatis provident libero quasi rem adipisci repellat.</p>
            <h3>Adigun Opeyemi</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
        </div>
    </div>
 </section>
{/* <!-- CALL TO ACTION --> */}
 <section className="cta">
    <h1>Enroll For Our Aprentiship Anywhere in the World</h1>
    <a href="" className="hero-btn">Contact Us</a>

 </section>
 {/* <!-- Footer --> */}

 <section className="footer">
    <h4>About us</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error sequi accusamus aliquid fugiat impedit ipsum minima animi, ullam ipsa sint? Dolores enim dolorem iste earum, ipsa doloremque odit eligendi.</p>
    <div className="icons">
    <i className="fa fa-facebook"></i>
    <i className="fa fa-twitter"></i>
    <i className="fa fa-instagram"></i>
    <i className="fa fa-linkedin"></i>
  </div>
    <p>Made with <i className="fa fa-heart"></i> By Faithfulfaith</p>


  </section>
  </div>
  )
}

export default App

