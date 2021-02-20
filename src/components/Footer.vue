<template>
  <footer>
    <div class="logo-area">
      <img src="../assets/images/logo.svg" alt="" />
    </div>
  <div class="footer-area">
    <div class="footer-item">
      <h4>Features</h4>
      <ul>
        <li>
          <a href="#">Link Shortening</a>
        </li>
        <li>
          <a href="#">Branded Links</a>
        </li>
        <li>
          <a href="#">Analytics</a>
        </li>
      </ul>
    </div>
    <div class="footer-item">
      <h4>Resources</h4>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Developers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
    <div class="footer-item">
      <h4>Company</h4>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
    <div class="social-media-area">
      <ul>
        <li>
          <a href="#"><img src="../assets/images/facebook.svg" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/images/twitter.svg" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/images/pinterest.svg" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/images/instagram.svg" alt=""></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
footer {
  background: hsl(260, 8%, 14%);
  display: grid;
  grid-template-columns: 1fr 2fr 0.8fr;
  overflow: hidden;
  padding: 2rem 4rem;
}
footer img {
  filter: invert(1);
}
footer .logo-area {
  margin-bottom: 30px;
}
footer .footer-area
 {
  display: flex;
}
footer .footer-item h4 {
  color: #fff;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
}
footer .footer-item {
  margin: 0 2rem;
}
footer .footer-item ul {
  padding: 0;
}
footer .footer-item ul,
footer .social-media-area ul {
  list-style: none;
}
footer .footer-item ul li {
  display: block;
  margin-bottom: 12px;
}
footer .footer-item ul li a,
footer .social-media-area ul li a {
  display: inline-block;
  color: hsl(0, 0%, 75%);
  text-decoration: none;
  outline: none;
  font-size: 16px;
  transition: all 0.4s ease-in-out;
}
footer .social-media-area img {
  filter: invert(1);
}
footer .footer-item ul li a:hover,
footer .social-media-area ul li a:hover {
  color: hsl(180, 66%, 49%);
}
footer .social-media-area ul {
  display: flex;
}
footer .social-media-area ul li {
  margin-right: 15px;
}
footer .social-media-area ul li a {
  color: #ffffff;
  font-size: 22px;
}
@media screen and (max-width: 992px) {
   footer .social-media-area ul {
    justify-content: center;
  }
}
@media screen and (max-width: 768px) {
  footer{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
  }
  footer .logo-area {
    justify-self: center;
    align-self: center;
    margin: 2rem 0;
    margin-bottom: 3rem;
  }
  footer .footer-item{
    text-align: center;
    padding-left: 40px;
    margin-bottom: 2rem;
  }
}
@media screen and (max-width: 576px) {
  footer {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
  }
  footer .footer-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  footer .footer-item{
    padding-left: 0;
  }
}


</style>