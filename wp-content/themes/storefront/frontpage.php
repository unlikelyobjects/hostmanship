<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package storefront
 */
 /* Template Name: Front Page */ 

include 'head-block.php';

?>
<body <?php body_class(['show-video-header','green']); ?>>
<?php
include 'menu.php';
include 'video-header.php';
createMenu('green');
createVideoHeader('');

$args = array(
	'post_type' => 'page'
);
$wp_query = new WP_Query($args);
$postcount = $wp_query->found_posts;
if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		$pagename = strtolower(get_the_title());
		if($pagename != 'frontpage'): ?>
			<div class="instant-page <?php echo $pagename;?>-page">
				<div class="content-wrapper">
					<h1><?php the_title(); ?></h1>
					<div class="the-content">
						<?php the_content(); ?>
					</div>
				</div>
			</div>
		<?php endif;
	endwhile;
endif;
	?>


<?php
get_footer();
