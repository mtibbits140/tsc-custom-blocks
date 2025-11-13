import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, PanelColorSettings, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import block from './block.json';
//import icons from '../../icons';
import './main.css'


registerBlockType( block.name, {
    //icon: icons.primary,
    edit ( { attributes, setAttributes } ) {
      const { bgColor, textColor } = attributes;
      const blockProps = useBlockProps({
        style: {
          backgroundColor: bgColor,
          color: textColor
        }
      });
      return (
        <>
          <InspectorControls>
            <PanelColorSettings
              title={__( 'Colors', 'tsc' )}
              colorSettings={[
                {
                  label: __('Background Color', 'tsc'),
                  value: bgColor,
                  onChange: newValue => setAttributes({bgColor: newValue})
                }, 
                {
                  label: __('Text Color', 'tsc'),
                  value: textColor,
                  onChange: newValue => setAttributes({textColor: newValue})
                }
              ]}
            />  
          </InspectorControls>
          <div {...blockProps}>
            <h3>Search: Your search term here</h3>
            <form>
              <input type="text" placeholder="Search" />
              <div className="btn-wrapper">
                <button type="submit" style={{
                  backgroundColor: bgColor,
                  color: textColor
                }}>Search</button>
              </div>
            </form>
          </div>
        </>
      );        
    }
});