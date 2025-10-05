import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";
import placeholder from "./img/default.png";

export default function Edit({ attributes, setAttributes }) {
	const { count } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Настройки">
					<TextControl
						label="Количество товаров в слайдах"
						value={count}
						onChange={(value) =>
							setAttributes({ count: parseInt(value, 10) || 0 })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<img src={placeholder} />
			</div>
		</>
	);
}
