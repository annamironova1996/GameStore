<?php
// This file is generated. Do not modify it manually.
return array(
	'block-contact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-contact',
		'version' => '0.1.0',
		'title' => 'Contact Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-header' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-header',
		'version' => '0.1.1',
		'title' => 'Шапка',
		'category' => 'gamestore',
		'icon' => 'smiley',
		'description' => 'Шапка сайта',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'memberLink' => array(
				'type' => 'string'
			),
			'cartLink' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gamestore/block-hero',
		'version' => '0.1.0',
		'title' => 'Главный экран на главной странице',
		'category' => 'gamestore',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.hero-title'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.hero-description'
			),
			'link' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => 'a',
				'attribute' => 'href'
			),
			'linkAnchor' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'a'
			),
			'video' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'string'
			),
			'isVideo' => array(
				'type' => 'boolean'
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'blocks-gamestore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
