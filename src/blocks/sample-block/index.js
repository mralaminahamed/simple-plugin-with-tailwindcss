import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'your-plugin-slug/sample-block', {
	apiVersion: 2,
	title: 'Sample Block',
	icon: 'smiley',
	category: 'design',
	attributes: {
		content: {
			type: 'string',
			default: 'Hello, Tailwind CSS!',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const blockProps = useBlockProps( {
			className: 'bg-blue-100 p-4 rounded-lg shadow-md',
		} );

		return (
			<div { ...blockProps }>
				<h2 className="text-2xl font-bold mb-2">{ attributes.content }</h2>
				<p className="text-gray-600">This block is styled with Tailwind CSS</p>
				<button className="btn-blue mt-4">Click me!</button>
			</div>
		);
	},
	save: ( { attributes } ) => {
		const blockProps = useBlockProps.save( {
			className: 'bg-blue-100 p-4 rounded-lg shadow-md',
		} );

		return (
			<div { ...blockProps }>
				<h2 className="text-2xl font-bold mb-2">{ attributes.content }</h2>
				<p className="text-gray-600">This block is styled with Tailwind CSS</p>
				<button className="btn-blue mt-4">Click me!</button>
			</div>
		);
	},
} );
