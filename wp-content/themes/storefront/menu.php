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
            <img class="mobile-logo" src="/wp-content/themes/storefront/assets/images/hostmanship2.png" alt="">
            <div class="hamburger show-mobile"></div>
            <div class="menu-links noselect">
                <div class="menu-link-holder">
                    <a class="menu-link" href="/artofwelcoming">Art of welcoming</a>
                </div>
                <div class="menu-link-holder">
                    <a class="menu-link" href="/hostmanship">Hostmanship</a>
                </div>
                <div class="menu-link-holder">
                    <a class="menu-link" href="/partnership">Partnership</a>
                </div>
                <div class="menu-link-holder">
                    <a class="menu-link" href="/services">Our services</a>
                </div>
                <div class="menu-link-holder">
                    <a class="menu-link" href="/contact">Contact us</a>
                </div>
            </div>
        </div>
    </div>
<?php } ?>