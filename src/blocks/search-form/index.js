import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, PanelColorSettings, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import block from './block.json';
//import icons from '../../icons';
import './main.css'


registerBlockType( block.name, {
    //icon: icons.primary,
    edit ( { attributes, setAttributes } ) {
      const { bgColor, textColor, postType } = attributes;
      // Fetch post types from WP data; filter to public, exclude attachments by default
      const postTypes = useSelect( ( select ) => {
        const types = select('core')?.getPostTypes?.({ per_page: 100 }) || [];
        return (types || [])
          .filter( (t) => t.viewable && t.slug !== 'attachment')
          .map( (t) => ({ label: t.labels?.singular_name || t.name || t.slug, value: t.slug }) );
      }, [] );
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
            <PanelBody title={__('Search options', 'tsc')} initialOpen={true}>
              <SelectControl
                label={__('Limit search to post type', 'tsc')}
                help={__('Optional. If set, adds a hidden post_type field so searches are constrained to that type.', 'tsc')}
                value={postType || ''}
                options={[
                  { label: __('— Not specified (site-wide) —', 'tsc'), value: '' },
                  ...((postTypes && postTypes.length) ? postTypes : [
                    { label: 'Page', value: 'page' },
                    { label: 'Post', value: 'post' }
                  ])
                ]}
                onChange={(value) => setAttributes({ postType: value })}
              />
            </PanelBody>
          </InspectorControls>
          <div {...blockProps}>
            <h3>Search:</h3>
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