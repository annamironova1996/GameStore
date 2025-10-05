<?php 

function view_block_games_line($attributes) {
	$args = array(
        'post_type' => 'product',
        'posts_per_page' => $attributes['count'],
        'orderby' => 'date',
        'order' => 'DESC',
        'status' => 'publish'
    );
    
    $products = new WP_Query($args);
    
    ob_start();
    
	echo '<div ' . get_block_wrapper_attributes() . '>';
    if ($products->have_posts()) {
        ?>
        <div class="games-line-slider">
			<div class="swiper-wrapper">
				<?php
				while ($products->have_posts()) {
					$products->the_post();
					global $product;
					
					$image_id = $product->get_image_id();
					$image_url = wp_get_attachment_image_url($image_id, 'large');
					$product_url = get_permalink();
					$product_title = get_the_title();
					?>
					<div class="swiper-slide games-line-slide">
						<a href="<?php echo esc_url($product_url); ?>" class="game-slide">
							<?php if ($image_url) { ?>
								<img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($product_title); ?>" />
							<?php } ?>
						</a>
					</div>
					<?php
				}
				wp_reset_postdata();
				?>
			</div>
        </div>
	<?php } 
	echo '</div>';

	return ob_get_clean();
}

?>