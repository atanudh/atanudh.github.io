@media screen and (max-width: 600px) {
  .menu-bar a:not(:first-child) {display: none;}
  .menu-bar a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .menu-bar.responsive {position: relative;}
  .menu-bar.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu-bar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}