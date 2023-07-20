(function () {
    'use strict';

    const navExpandedItems = () =>
            document.getElementsByClassName("nav-expanded-items"),
        navMenuIconContainer = () =>
            document.getElementById("nav-menu-icon-container"),
        navContractedElement = () => document.getElementById("nav-contracted"),
        header = () => document.querySelector("header");

    function changeHeaderCSS({ border, shadow }) {
        let header_ = header();

        header_.style.boxShadow = shadow;
        header_.style.borderBottomLeftRadius = border;
        header_.style.borderBottomRightRadius = border;
    }

    const changeAt = 650;

    let navContracted = false,
        menuOpen = false;

    function changeNavContracted(value) {
        navContracted = value;
    }
    function changeMenuOpen(value) {
        menuOpen = value;
    }

    var navCloseIcon = `<svg class="nav-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" > <path d="M480-438 270-228q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522-480l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-438Z" /> </svg>`;

    var navOpenIcon = `<svg class="nav-menu-icon" viewBox="0 0 92.0899658203125 19.5810546875" version="1.1" xmlns="http://www.w3.org/2000/svg" class="glyph-box" > <g transform="matrix(1 0 0 1 -8.740048828125055 45.0205078125)" > <path d="M28.418-35.2051C28.418-40.625 24.0234-44.9707 18.5059-44.9707C13.1348-44.9707 8.74023-40.625 8.74023-35.2051C8.74023-29.7852 13.1348-25.4395 18.5059-25.4395C24.0234-25.4395 28.418-29.7852 28.418-35.2051ZM64.5508-35.2051C64.5508-40.625 60.2051-44.9707 54.7852-44.9707C49.4141-44.9707 45.0684-40.625 45.0684-35.2051C45.0684-29.7852 49.4141-25.4395 54.7852-25.4395C60.2051-25.4395 64.5508-29.7852 64.5508-35.2051ZM100.83-35.2051C100.83-40.625 96.4844-44.9707 91.0645-44.9707C85.5469-44.9707 81.2012-40.625 81.2012-35.2051C81.2012-29.7852 85.5469-25.4395 91.0645-25.4395C96.4844-25.4395 100.83-29.7852 100.83-35.2051Z" ></path> </g> </svg>`;

    function listener() {
        let navItems = navExpandedItems(),
            navMenuContainer = navMenuIconContainer();

        if (innerWidth <= changeAt && !navContracted) {
            changeNavContracted(!navContracted);

            for (let index = 0; index < navItems.length; index++)
                navItems.item(index).classList.add("hide");

            navMenuContainer.classList.remove("hide");

            navMenuContainer.onclick = function () {
                if (!menuOpen) {
                    navMenuContainer.innerHTML = navCloseIcon;

                    navContractedElement().classList.remove("hide");

                    changeMenuOpen(!menuOpen);

                    changeHeaderCSS({
                        shadow: `inset 0 1px 0 transparent, 0 22px 70px 4px rgba(0, 0, 0, 0.56), 0 0 0 1px rgba(0, 0, 0, 0.08)`,
                        border: "22px",
                    });
                } else {
                    navMenuContainer.innerHTML = navOpenIcon;

                    navContractedElement().classList.add("hide");

                    changeMenuOpen(!menuOpen);

                    changeHeaderCSS({
                        shadow: "none",
                        border: "0",
                    });
                }
            };
        } else if (innerWidth > changeAt && navContracted) {
            changeNavContracted(!navContracted);

            changeMenuOpen(false);

            for (let index = 0; index < navItems.length; index++)
                navItems.item(index).classList.remove("hide");

            navMenuContainer.innerHTML = navOpenIcon;
            navMenuContainer.classList.add("hide");

            navContractedElement().classList.add("hide");

            changeHeaderCSS({
                shadow: "none",
                border: "0",
            });
        }
    }

    addEventListener("load", () => {
        listener();
        navMenuIconContainer().innerHTML = navOpenIcon;
    });

    addEventListener("resize", listener);

})();
