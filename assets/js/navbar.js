fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        initNavbar();

    });


// Footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("footer").innerHTML = data;

    });

fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        initNavbar();

    });


// Footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("footer").innerHTML = data;

    });


function initNavbar() {


    /*=========================================================
      NAVBAR SCROLL
    =========================================================*/

    const navbar =
        document.querySelector(".custom-navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    /*=========================================================
      DESKTOP MEGA MENU
    =========================================================*/

    const mmTabs =
        document.querySelectorAll(".mm-category");

    const mmLeftPanels =
        document.querySelectorAll(".mm-left-panel");

    const mmRightPanels =
        document.querySelectorAll(".mm-right-panel");


    if (mmTabs.length) {

        mmTabs.forEach(tab => {

            tab.addEventListener("mouseenter", function () {

                const target =
                    this.dataset.target;


                mmTabs.forEach(t =>
                    t.classList.remove("mm-active")
                );

                this.classList.add("mm-active");


                mmLeftPanels.forEach(panel => {

                    panel.classList.remove(
                        "mm-active"
                    );

                });


                const left =
                    document.getElementById(
                        target + "-left"
                    );

                if (left) {

                    left.classList.add(
                        "mm-active"
                    );

                }


                mmRightPanels.forEach(panel => {

                    panel.classList.remove(
                        "mm-active"
                    );

                });


                const right =
                    document.getElementById(
                        target + "-right"
                    );

                if (right) {

                    right.classList.add(
                        "mm-active"
                    );

                }

            });

        });

    }


    /*=========================================================
      MOBILE SIDEBAR
    =========================================================*/

    const sidebar =
        document.querySelector(".mobile-sidebar");

    const overlay =
        document.querySelector(".mobile-sidebar-overlay");

    const toggler =
        document.querySelector(".navbar-toggler");

    const closeButton =
        document.querySelector(".mobile-sidebar-close");

    const whatWeDo =
        document.querySelector(".mobile-menu-toggle");

    const backButton =
        document.querySelector(".mobile-back");


    /*---------------------------------------------------------
      OPEN SIDEBAR
    ---------------------------------------------------------*/

    function openSidebar(){

        if (!sidebar) return;

        sidebar.classList.add(
            "mobile-sidebar-open"
        );

        if (overlay) {

            overlay.classList.add(
                "mobile-overlay-open"
            );

        }

        document.body.classList.add(
            "mobile-menu-open"
        );

    }


    /*---------------------------------------------------------
      CLOSE SIDEBAR
    ---------------------------------------------------------*/

    function closeSidebar(){

        if (!sidebar) return;

        sidebar.classList.remove(
            "mobile-sidebar-open"
        );

        sidebar.classList.remove(
            "mobile-submenu-open"
        );

        if (overlay) {

            overlay.classList.remove(
                "mobile-overlay-open"
            );

        }

        document.body.classList.remove(
            "mobile-menu-open"
        );

    }


    /*---------------------------------------------------------
      HAMBURGER
    ---------------------------------------------------------*/

    if (toggler) {

        toggler.addEventListener(
            "click",
            function(e){

                e.preventDefault();

                e.stopPropagation();

                openSidebar();

            }
        );

    }


    /*---------------------------------------------------------
      CLOSE BUTTON
    ---------------------------------------------------------*/

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeSidebar
        );

    }


    /*---------------------------------------------------------
      OVERLAY
    ---------------------------------------------------------*/

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /*---------------------------------------------------------
      WHAT WE DO → SUBMENU
    ---------------------------------------------------------*/

    if (whatWeDo) {

        whatWeDo.addEventListener(
            "click",
            function(){

                sidebar.classList.add(
                    "mobile-submenu-open"
                );

            }
        );

    }


    /*---------------------------------------------------------
      BACK
    ---------------------------------------------------------*/

    if (backButton) {

        backButton.addEventListener(
            "click",
            function(){

                sidebar.classList.remove(
                    "mobile-submenu-open"
                );

            }
        );

    }


    /*---------------------------------------------------------
      ICLOUD / ELV
    =========================================================*/

    const subgroupButtons =
        document.querySelectorAll(
            ".mobile-subgroup-toggle"
        );


    subgroupButtons.forEach(button => {

        button.addEventListener(
            "click",
            function(){

                const group =
                    this.closest(
                        ".mobile-subgroup"
                    );


                /* Close other groups */

                document
                    .querySelectorAll(
                        ".mobile-subgroup"
                    )
                    .forEach(item => {

                        if (item !== group) {

                            item.classList.remove(
                                "mobile-links-open"
                            );

                        }

                    });


                /* Toggle current */

                group.classList.toggle(
                    "mobile-links-open"
                );

            }
        );

    });

}
// function initNavbar() {

//     /*==============================*
//      * NAVBAR SCROLL
//      *==============================*/

//     const navbar = document.querySelector(".custom-navbar");

//     if (navbar) {

//         window.addEventListener("scroll", () => {

//             if (window.scrollY > 50) {

//                 navbar.classList.add("scrolled");

//             } else {

//                 navbar.classList.remove("scrolled");

//             }

//         });

//     }


//     /*==============================*
//      * MEGA MENU V2
//      *==============================*/

//     const mmTabs =
//         document.querySelectorAll(".mm-category");

//     const mmLeftPanels =
//         document.querySelectorAll(".mm-left-panel");

//     const mmRightPanels =
//         document.querySelectorAll(".mm-right-panel");


//     if (mmTabs.length) {

//         mmTabs.forEach(tab => {

//             tab.addEventListener("mouseenter", function () {

//                 const target = this.dataset.target;


//                 // Active tab

//                 mmTabs.forEach(t =>
//                     t.classList.remove("mm-active")
//                 );

//                 this.classList.add("mm-active");


//                 // Hide left panels

//                 mmLeftPanels.forEach(panel => {

//                     panel.classList.remove("mm-active");

//                 });


//                 // Show selected left panel

//                 const left =
//                     document.getElementById(target + "-left");

//                 if (left) {

//                     left.classList.add("mm-active");

//                 }


//                 // Hide right panels

//                 mmRightPanels.forEach(panel => {

//                     panel.classList.remove("mm-active");

//                 });


//                 // Show selected right panel

//                 const right =
//                     document.getElementById(target + "-right");

//                 if (right) {

//                     right.classList.add("mm-active");

//                 }

//             });

//         });

//     }

// }