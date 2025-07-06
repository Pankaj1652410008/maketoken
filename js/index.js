// $(document).ready(function () {
//   $(".at-title").click(function () {
//     $(this)
//       .toggleClass("active")
//       .next(".at-tab")
//       .slideToggle()
//       .parent()
//       .siblings()
//       .find(".at-tab")
//       .slideUp()
//       .prev()
//       .removeClass("active");
//   });
// });

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// $(document).ready(function () {
// $('.connect_wallet').click(function() {
//         // $('.connect_wallet').css({
          
//         //  'background-image': 'linear-gradient(to right, #007991 0%, #78ffd6  51%, #007991  100%)',
//         //     // 'margin': '10px',
//         //     // 'padding': '15px 45px',
//         //     // 'text-align': 'center',
//         //     'text-transform': 'uppercase',
//         //     'transition': '0.5s',
//         //     'background-size': '200% auto',
//         //     // color: white;            
//         //     // box-shadow: 0 0 20px #eee;
//         //     // border-radius: 10px;
//         //     // display: block;
          

//         //   // .btn-grad:hover {
//         //   //   background-position: right center; /* change the direction of the change here */
//         //   //   color: #fff;
//         //   //   text-decoration: none;
//         //   // }
         
//         // })
//         $('.connect_wallet').html('Xa00..cbtse')
       
//     });
//     });


document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#4e54c8", "#8f94fb", "#ffffff"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#fff",
                // "color": "#4e54c8",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 200,
                    "size": 10,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "push": {
                    "particles_nb": 4
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                }
            }
        },
        "retina_detect": true
    })
  })