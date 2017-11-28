<?php
function createMenu($style){
    $lang = 'en';
    if(isset($_COOKIE["qtrans_front_language"])){
        if($_COOKIE["qtrans_front_language"] == 'sv'){
            $lang = 'sv';
            setlocale(LC_ALL, "sv_SE");
        }    
    }
    ?>
    <div class="menu cf <?php echo $style; ?>">
        <div class="menu-wrapper">
            <img class="mobile-logo" src="/wp-content/themes/storefront/assets/images/hostmanship.png" alt="">
            <div class="hamburger show-mobile"></div>
            <div class="menu-links noselect">
                <div class="menu-link-holder">
                    <a class="menu-link" href="http://www.vardskapet.se/the-art-of-welcoming/?lang=en" class="menu-link-art-of-welcoming">The art of welcoming</a>
                </div>
                <div class="menu-link-holder">
                    <a class="menu-link" id="menu-link-hostmanship">Hostmanship</a>
                </div>
                <div class="menu-link-holder">
                    <a id="menu-link-partnership" class="menu-link">Partnership</a>
                </div>
                <div class="menu-link-holder">
                    <a href="http://www.vardskapet.se/training/?lang=en" class="menu-link">Our services</a>
                </div>
                <div class="menu-link-holder">
                    <a class="menu-link" href="http://www.vardskapet.se/about-vardskapet/#dynamic?lang=en">Contact us</a>
                </div>
            </div>
        </div>
    </div>
<?php } ?>