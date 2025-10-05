import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";
import { Button } from "@wordpress/components";

const SlideItem = ({ index, slide, onImageChange, onRemove }) => {
	return (
		<div className="slide-item">
			<div className="slide-item-image">
				<p>Логотип для светлой версии</p>
				{slide.lightImage && (
					<div className="image-box">
						<img src={slide.lightImage} alt="Изображение слайда" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "lightImage")}
					onSelectURL={(url) => onImageChange(url, index, "lightImage")}
					labels={{
						title: "Изображение слайда - светлая версия",
						instructions: "Загрузите изображение для слайда.",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<div className="slide-item-image">
				<p>Логотип для темной версии</p>
				{slide.darkImage && (
					<div className="image-box">
						<img src={slide.darkImage} alt="Изображение слайда" />
					</div>
				)}
				<MediaPlaceholder
					icon="format-image"
					onSelect={(media) => onImageChange(media.url, index, "darkImage")}
					onSelectURL={(url) => onImageChange(url, index, "darkImage")}
					labels={{
						title: "Изображение слайда - темная версия",
						instructions: "Загрузите изображение для слайда",
					}}
					accept="image/*"
					allowedTypes={["image"]}
					multiple={false}
				/>
			</div>
			<Button
				className="components-button is-destructive"
				onClick={() => onRemove(index)}
			>
				Удалить
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		link,
		video,
		linkAnchor,
		image,
		isVideo,
		slides: initialSlides,
	} = attributes;
	const [isVideoUpload, setIsVideoUpload] = useState(isVideo);
	const [slides, setSlides] = useState(initialSlides || []);

	const onSlideChange = (updatedSlide, index) => {
		const updatedSlides = [...slides];
		updatedSlides[index] = updatedSlide;
		setSlides(updatedSlides);
		setAttributes({ slides: updatedSlides });
	};

	const addSlide = () => {
		const newSlide = { lightImage: "", darkImage: "" };
		const updateSlides = [...slides, newSlide];
		setSlides(updateSlides);
		setAttributes({ slides: updateSlides });
	};

	const removeSlide = (index) => {
		const updatedSlides = [...slides];
		updatedSlides.splice(index, 1);
		setSlides(updatedSlides);
		setAttributes({ slides: updatedSlides });
	};

	const handleImageChange = (url, index, imageType) => {
		const updatedSlide = { ...slides[index], [imageType]: url };
		onSlideChange(updatedSlide, index);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Настройки">
					<TextControl
						label="Заголовок"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<TextareaControl
						label="Описание"
						value={description}
						onChange={(value) => setAttributes({ description: value })}
					/>
					<TextControl
						label="Ссылка на кнопку"
						value={link}
						onChange={(value) => setAttributes({ link: value })}
					/>
					<TextControl
						label="Текст кнопки"
						value={linkAnchor}
						onChange={(value) => setAttributes({ linkAnchor: value })}
					/>
					<ToggleControl
						label="Использовать видео"
						checked={isVideoUpload}
						onChange={(value) => {
							setIsVideoUpload(value);
							setAttributes({ isVideo: value, video: "", image: "" });
						}}
					/>
					{isVideoUpload
						? video && (
								<video controls muted>
									<source src={video} type="video/mp4" />
								</video>
						  )
						: image && <img src={image} alt="Изображение" />}
					<MediaUpload
						onSelect={(media) => {
							if (isVideoUpload) {
								setAttributes({ video: media.url });
							} else {
								setAttributes({ image: media.url });
							}
						}}
						type={isVideoUpload ? ["video"] : ["image"]}
						render={({ open }) => (
							<button
								className="components-button is-secondary media-upload"
								onClick={open}
							>
								{isVideoUpload ? "Загрузите видео" : "Загрузите изображение"}
							</button>
						)}
					/>
				</PanelBody>
				<PanelBody title="Слайдер">
					{slides.map((slide, index) => (
						<SlideItem
							key={index}
							index={index}
							slide={slide}
							onImageChange={handleImageChange}
							onRemove={removeSlide}
						/>
					))}
					<Button className="components-button is-primary" onClick={addSlide}>
						Добавить слайд
					</Button>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div class="hero-section">
					{video && (
						<video
							className="video-bg"
							loop="loop"
							autoplay=""
							muted
							playsinline
							width="100%"
							height="100%"
						>
							<source className="source-element" src={video} type="video/mp4" />
						</video>
					)}
					{image && <img className="image-bg" src={image} alt="Изображение" />}
					<div className="hero-mask"></div>
					<div className="hero-content">
						<RichText
							tagName="h1"
							className="hero-title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
						/>
						<RichText
							tagName="p"
							className="hero-description"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
						/>
						<a href={link} className="hero-button shadow">
							{linkAnchor}
						</a>
					</div>
					{slides && (
						<div className="hero-slider">
							<div className="slider-container">
								<div className="swiper-wrapper">
									{slides.map((slide, index) => (
										<div key={index} className="swiper-slide slide-item">
											<img
												src={slide.lightImage}
												alt="Логотип"
												className="light-logo"
											/>
											<img
												src={slide.darkImage}
												alt="Логотип"
												className="dark-logo"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
