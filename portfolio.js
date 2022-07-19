let nav = document.getElementById("nav");
nav.innerHTML =  
`<nav>
<img src="/Images/SUNIL PORTFOLIO.png" alt="">
<ul>
    <li><span onclick=home()>Home</span></li>
    <li><span onclick=aboutMe()>About Me</span></li>
    <li><span onclick=experience()>Experience</span></li>
    <li><span onclick=education()>Education</span></li>
    <li><span onclick=skill()>Skills</span></li>
    <li><span onclick=project()>Projects</span></li>
    <li><span onclick=award()>Awards</span></li>
    <li><span onclick=interest()>Interests</span></li>
    <li><span onclick=contact()>Contact</span></li>
</ul> 
</nav>
`

function home()
{
  let div = document.querySelector(".home");
  div.innerHTML =`<div class="home">
  <div class="home2">
    <h2>Hello, Welcome to My Portfolio &#8594</h2>
    <h1>I'M SUNIL</h1>
    <h2>FRONT-END DEVELOPER</h2>
    <h2 id="tech">HTML | CSS | JAVASCRIPT | REACT.JS</h2>
    <a href="/Images/SUNIL CV.pdf" target="blank">View CV</a>
  </div>
  <div class="home3">
    <img src="/Images/Cartoon.webp" alt="" />
  </div>
</div>`
}

function aboutMe()
{
    let div = document.querySelector(".home");
    div.innerHTML = ` <div class="about">
    <div>
      <img src="/Images/cartoon2.webp" alt="" />
    </div>
    <div id="intro">
      <h1>LET'S</h1>
      <h1>INTRODUCE ABOUT</h1>
      <h1>MYSELF &#8594</h1>
      <p>
        I'm Sunil from Udupi. I'm a Mechanical Engineeering Graduate Looking for
        Front-End Developer Roles in IT Company. I have Completed my Bachelor's
        in Mechanical Engineering at Shri Madhwa Vadiraja Institute of Technology,
        Udupi in the year 2019 with overall CGPA of 7.55. Later I have decided to
        change my career from Mechanical Engineering field to Software Engineering
        field. So I joined Jspiders Basavanagudi, Bangalore for Software
        Developement Course where I have Learned HTML, CSS, JAVASCRIPT, REACT.JS,
        SQL.
      </p>
    </div>
  </div> `
}

function experience()
{
    let div = document.querySelector(".home");
    div.innerHTML = `<div class="work">
    <div>
      <h1>BELL O SEAL VALVES PVT. LTD, UDUPI</h1>
      <h2>Quality Control Engineer - Trainee [ April 2021 - March 2022 ]</h2>
      <ul>
        <li>
          Handling Inward and Inprocess Quality Inspection of Quality Control
          Department.
        </li>
        <li>
          Referring Monthly Production Plans, Quality Activity Plans and General
          Arrangement Drawings to understand the Customer Requirements.
        </li>
        <li>
          Visual and Dimensional Inspections of Machined Components of Valves as
          per Machining Drawings and Quality Standards.
        </li>
        <li>
          Maintaining Daily Inspection Reports of all the inspected components,
          Preparing Non - Confirmity Reports for defected parts and Implementing
          CAPA.
        </li>
      </ul>
    </div>
    <section></section>
    <div>
      <h1>GOVERNMENT INDUSTRIAL TRAINING INSTITUTE BIDKALKATTE, UDUPI</h1>
      <h2>Guest Lecturer [ Dec 2019 - Nov 2021 ]</h2>
      <ul>
        <li>
          Handling Mechanic Motor Vehicle (Automobile) Department at Government
          ITI College, Bidkalkatte, Udupi.
        </li>
        <li>Handling Theory Classes and Practical Classes.</li>
        <li>Maintaining the Government documents related to the subject.</li>
      </ul>
      </div>
  </div>
  `
}

function education()
{
    let div = document.querySelector(".home");
    div.innerHTML = `<table id="tab">
    <thead>
      <tr>
        <th>Sl No.</th>
        <th>Qualification</th>
        <th>College Name</th>
        <th>Stream</th>
        <th>Marks</th>
        <th>Year of Passout</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>B.E</td>
        <td>SHI MADHWA VADIRAJA INSTITUTE OF TECHNOLOGY, UDUPI</td>
        <td>MECHANICAL ENGINEERING</td>
        <td>7.55 CGPA</td>
        <td>2019</td>
      </tr>
      <tr>
        <td>2</td>
        <td>PUC</td>
        <td>POORNA PRAJNA PU COLLEGE, UDUPI</td>
        <td>PCMB</td>
        <td>90.67%</td>
        <td>2015</td>
      </tr>
      <tr>
        <td>3</td>
        <td>SSLC</td>
        <td>GOVERNMENT HIGHSCHOOL THENKANIDIYOOR, UDUPI</td>
        <td>SSLC</td>
        <td>89.76%</td>
        <td>2013</td>
      </tr>
    </tbody>
  </table>
  `
}

function skill()
{
    let div = document.querySelector(".home");
    div.innerHTML = `<div class="skill">
    <div class="tech">
     <h1>TECHNICAL SKILLS</h1>
     <ul>
     <div><li><img src="/Images/html.png" alt="">HTML: Knowledge on HTML Elements, Baisc Tags and Attributes.</li></div>
     <div><li><img src="/Images/css.png" alt="">CSS : Knowledge on CSS Selectors, Box-Model.</li></div>
     <div><li><img src="/Images/javascript.png" alt="">JAVASCRIPT : Knowledge on ECMA Script 6 concepts.</li></div>
     <div><li><img src="/Images/react.png" alt="">REACT.JS : Knowledge on Hooks.</li></div>
     <div><li><img src="/Images/sql.png" alt="">SQL : Knowledge on writing Queries, Sub-Queries.</li></div>
     <div><li><img src="/Images/ms-office.png" alt="">MS-OFFICE :  MS-Word, MS-PowerPoint.</li></div>
     </ul>
    </div>
    <section></section>
    <div class="soft">
     <h1>SOFT SKILLS</h1>
     <ul>
       <li>Good Communication and Leadership Skills.</li>
       <li>Problem Solving Ability and Teamwork Skills.</li>
       <li>Detail oriented and Time Management.</li>
       <li>Enthusiastic, Keen Learner, eager to meet challenges and new concepts.</li>
     </ul>
    </div> 
   </div>
  `

}

function project()
{
    let div = document.querySelector(".home");
    div.innerHTML = `<div class="project">
    <ul>
      <h1>AGE CALCULATOR</h1>
      <p>Created a Simple Age Calculator using HTML, CSS and Javascript.</p>
      <img src="/Images/Age Calculator.jpg" alt="" />
      <a href="/Images/Age Calculator.pdf" target="blank">Download</a>
    </ul>
    <ul>
      <h1>ROBOSOFT WEBPAGE</h1>
      <p>Created a static Demo Webpage of Robosoft Technologies</p>
      <p>Pvt Ltd, Udupi using HTML and CSS.</p>
      <img src="/Images/RobosoftHomepage.jpg" alt="">
      <a href="/Images/RobosoftWebpage.pdf" target="blank">Download</a>
      </ul>
    <ul>
      <h1>CALCULATOR</h1>
      <p>Created a Simple Calculator using HTML, CSS and Javascript.</p>
      <img src="/Images/Calculator.jpg" alt=""/>
      <a href="/Images/Calculator.pdf" target="blank">Download</a>
    </ul>
  </div>`
}

function award()
{
  let div = document.querySelector(".home");
  div.innerHTML = `<div class="award">
    <ul>
      <li>
        Learning MERN Stack Web Development Offline Course at JSpiders,
        Basavanagudi, Bangalore.
      </li>
      <img src="" alt="" />
      <li>
        Completed an Online course on 'Front End Development - HTML' during June
        2022 offered by Great Learning Academy E - Learning Platform.
      </li>
      <img src="" alt="" />
      <li>
        Completed an Online course on 'Front End Development - CSS' during June
        2022 offered by Great Learning Academy E - Learning Platform.
      </li>
      <img src="" alt="" />
      <li>
        Completed a NPTEL course on 'Leadership' during Aug-Oct 2018 with a score
        of 87% in association with IIT Kharagpur.
      </li>
      <img src="" alt="" />
    </ul>
  </div>
  `


}

function interest()
{
  let div = document.querySelector(".home");
  div.innerHTML = `<div class="interest">
  <div id="int">
    <ul>
      <li>Creating Static Webpages using HTML and CSS.</li>
      <li>Watching Informative YouTube Videos.</li>
      <li>Mobile Photography and Photo Editings.</li>
      <li>Playing Cricket, Volleyball, Carrom Etc.</li>
    </ul>
  </div>
  <div id="design">
    <img src="/Images/Facebook.jpg" alt="" />
    <img src="/Images/Fancy Page.jpg" alt="" />
  </div>
</div>`

}

function contact(){
  let div = document.querySelector(".home");
  div.innerHTML = `<div class="contact">
  <div id="top">
    <h1>SUNIL</h1>
    <ul>
      <div><li id ="permanent"><img src="/Images/Location.png" alt="">Permanent : C/o Ramesh Kotian, H.No 2-88, Vishnumurthinagar, Kelarkalabettu
        Village and Post, Udupi Taluk and District - 576105</li></div>
      <div><li><img src="/Images/Location.png" alt="">Residential : Sapthagiri Pg for Boys, #38 Mount Joy Rd, Near Maruthi Dosa Camp, Sunkenahalli, Hanumanthnagara,
        Basavanagudi, Bengaluru-560019</li></div>
      <div><li><img src="/Images/Call.png" alt="">6363037828 , 9880448812</li></div>
      <div><li><img src="/Images/Email.png" alt="">sunidk97@gmail.com</li></div>
      <div><li><img src="/Images/Github.png" alt=""><a href="https://gist.github.com/sunidk" target="blank">https://gist.github.com/sunidk</a></li></div>
      <div><li><img src="/Images/Linkdin.png" alt=""><a href="https://www.linkedin.com/in/sunil-kotian-914428109
      " target="blank">https://www.linkedin.com/in/sunil-kotian-914428109
      </a></li></div>
      </ul>
  </div>
  <div id="bottom">
    <img src="/Images/Cartoon3.png" alt="">
  </div>
</div>`
}
