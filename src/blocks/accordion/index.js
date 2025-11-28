
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './main.css';

const TEMPLATE = [ [ 'tsc/accordion-item', {} ] ];

registerBlockType('tsc/accordion', {
  edit: ({ attributes, setAttributes }) => {
    const { headingLevel = 3 } = attributes;
    const blockProps = useBlockProps({ className: 'tsc-accordion-list-block' });

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'tsc')}>
            <SelectControl
              label={__('Heading level', 'tsc')}
              value={headingLevel}
              options={[
                { label: 'H2', value: 2 },
                { label: 'H3', value: 3 },
                { label: 'H4', value: 4 },
                { label: 'H5', value: 5 },
                { label: 'H6', value: 6 },
              ]}
              onChange={(value) => setAttributes({ headingLevel: Number(value) })}
            />
          </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
          <dl className="accordion-list">
            <InnerBlocks
              allowedBlocks={[ 'tsc/accordion-item' ]}
              template={TEMPLATE}
              renderAppender={InnerBlocks.ButtonBlockAppender}
            />
          </dl>
        </div>
      </>
    );
  },
  save: () => {
    const blockProps = useBlockProps.save({ className: 'tsc-accordion-list-block' });
    return (
      <div {...blockProps}>
        <dl className="accordion-list">
          <InnerBlocks.Content />
        </dl>
      </div>
    );
  },
});
