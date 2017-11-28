<?php
function createVideoHeader($style){
?>
    <div id="video-bg" class='video-header' data-url="https://www.youtube.com/watch?v=Zk9J5xnTVMA">
        <div class="drop-shadow-bar"></div>
        <video class='video' src="/wp-content/themes/storefront/assets/videos/bg_gif_video.mp4" playsinline="" autoplay="" muted="" loop="" type="video/mp4"></video>
        <div class="hero">
            <img class="header-logo" src="/wp-content/themes/storefront/assets/images/hostmanship-guy.png" width="190" alt="">
            <h1 class="video-title">Where do you<br>want to go?</h1>
            <div class="country-select noselect sweden">
                <div id="select-left" class="country-arrow">&#xf3d2;</div>
                <img class="country-flag sweden-flag" width="45" src="/wp-content/themes/storefront/assets/images/sweden.png" alt="">
                <img class="country-flag english-flag" width="45" src="/wp-content/themes/storefront/assets/images/english.png" alt="">
                <div id="select-right" class="country-arrow">&#xf3d3;</div>
                <a class="country-button english-link">Welcome</a>
                <a class="country-button swedish-link">Välkommen in</a>
            </div>
        </div>
    </div>
    
<?php } ?>
