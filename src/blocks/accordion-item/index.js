import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, InspectorControls, BlockControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, ToolbarGroup, ToolbarButton, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

registerBlockType('tsc/accordion-item', {
  edit: ({ attributes, setAttributes, context, clientId }) => {
    // Get theme color palette from editor settings
    const themeColors = useSelect( ( select ) => {
      const settings = select( 'core/block-editor' ).getSettings?.();
      return settings?.colors || [];
    }, [] );
        const { title = '', isActive = false, uniqueId = '', headingLevel = 3, titleColor = '', itemBgColor = '', panelBgColor = '', iconColor = '', borderColor = '', borderTopWidth = '', borderBottomWidth = '' } = attributes;
    const parentHeadingLevel = context['tsc/accordionHeadingLevel'] || 3; // from parent
    const blockProps = useBlockProps();

    // Assign a stable uniqueId once
    useEffect(() => {
      if (!uniqueId) {
        setAttributes({ uniqueId: clientId.slice(0, 8) });
      }
      // Keep child's headingLevel in sync with parent context
      if (headingLevel !== parentHeadingLevel) {
        setAttributes({ headingLevel: parentHeadingLevel });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uniqueId, parentHeadingLevel]);

    // Always open by default in the editor on initial mount
    useEffect(() => {
      if (!isActive) {
        setAttributes({ isActive: true });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HeadingTag = `h${Math.min(6, Math.max(2, headingLevel))}`;
    const panelId = `acc-panel-${uniqueId}`;
    const triggerId = `acc-trigger-${uniqueId}`;

    // Compute editor styles explicitly to ensure they are applied
    const topWNum = borderTopWidth ? parseFloat(borderTopWidth) : 0;
    const bottomWNum = borderBottomWidth ? parseFloat(borderBottomWidth) : 0;
    const headerStyle = {
      backgroundColor: itemBgColor || undefined,
      borderTop: borderColor && topWNum > 0 ? `${topWNum}px solid ${borderColor}` : undefined,
    };
    const bodyStyle = {
      display: isActive ? 'block' : 'none',
        borderBottom: borderColor && bottomWNum > 0 ? `${bottomWNum}px solid ${borderColor}` : undefined,
        backgroundColor: (panelBgColor || itemBgColor) || undefined,
    };

    return (
      <div {...blockProps}>
        <BlockControls>
          <ToolbarGroup>
            <ToolbarButton
              icon={ isActive ? 'minus' : 'plus' }
              label={ isActive ? __('Preview: collapse', 'tsc') : __('Preview: expand', 'tsc') }
              isPressed={isActive}
              onClick={() => setAttributes({ isActive: !isActive })}
            />
          </ToolbarGroup>
        </BlockControls>

        <InspectorControls>
          <PanelBody title={__('Item settings', 'tsc')}>
            <ToggleControl
              label={__('Preview open in editor', 'tsc')}
              checked={!!isActive}
              onChange={(val) => setAttributes({ isActive: !!val })}
            />
          </PanelBody>

          <PanelColorSettings
            title={__('Colors', 'tsc')}
            colors={themeColors}
            disableCustomColors
            enableAlpha={false}
            colorSettings={[
              {
                label: __('Heading Color', 'tsc'),
                value: titleColor,
                onChange: (v) => setAttributes({ titleColor: v || '' })
              },
              {
                label: __('Item Background', 'tsc'),
                value: itemBgColor,
                onChange: (v) => setAttributes({ itemBgColor: v || '' })
              },
                  {
                    label: __('Panel Background', 'tsc'),
                    value: panelBgColor,
                    onChange: (v) => setAttributes({ panelBgColor: v || '' })
                  },
              {
                label: __('Icon Color', 'tsc'),
                value: iconColor,
                onChange: (v) => setAttributes({ iconColor: v || '' })
              },
              {
                label: __('Border Color', 'tsc'),
                value: borderColor,
                onChange: (v) => setAttributes({ borderColor: v || '' })
              }
            ]}
          />

          <PanelBody title={__('Borders', 'tsc')}>
            <UnitControl
              label={__('Top Border Width', 'tsc')}
              value={borderTopWidth || ''}
              onChange={(val) => {
                const cleaned = val ? String(val).replace(/[^0-9.]/g,'') : '';
                setAttributes({ borderTopWidth: cleaned });
              }}
              min={0}
              step={1}
              units={[{ value: 'px', label: 'px', default: true }]}
            />
            <UnitControl
              label={__('Bottom Border Width', 'tsc')}
              value={borderBottomWidth || ''}
              onChange={(val) => {
                const cleaned = val ? String(val).replace(/[^0-9.]/g,'') : '';
                setAttributes({ borderBottomWidth: cleaned });
              }}
              min={0}
              step={1}
              units={[{ value: 'px', label: 'px', default: true }]}
            />
            <p className="components-base-control__help" style={{ marginTop: '0.75rem' }}>{__('Border color set above. Leave width blank for no border.', 'tsc')}</p>
          </PanelBody>
        </InspectorControls>

        <div className={`accordion-item-editor ${isActive ? 'is-active' : ''}`}>
          <div className="accordion-item-header" style={headerStyle}>
            <HeadingTag style={{ margin: 0, color: titleColor || undefined }}>
              <span className="accordion-title">                
                <RichText
                  tagName="span"
                  value={title}
                  onChange={(v) => setAttributes({ title: v })}
                  placeholder={__('Accordion title…', 'tsc')}
                  allowedFormats={[]}
                />
              </span>
            </HeadingTag>
          </div>

          <div className="accordion-item-body" style={bodyStyle}>
            <InnerBlocks />
          </div>

        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    const { title = '', headingLevel = 3, titleColor = '', itemBgColor = '', iconColor = '', borderColor = '', borderTopWidth = '', borderBottomWidth = '' } = attributes;
    const panelBg = (attributes.panelBgColor || itemBgColor) || '';
    const topW = (borderTopWidth || '').toString().replace(/[^0-9.]/g,'');
    const bottomW = (borderBottomWidth || '').toString().replace(/[^0-9.]/g,'');
    const TitleTag = `h${Math.min(6, Math.max(2, headingLevel))}`;
    // Plus icon inline SVG; DD hidden by default via CSS/JS
    
    return (
      <>
        <dt className="accordion-header" style={{ backgroundColor: itemBgColor || undefined, borderTop: borderColor && topW ? `${topW}px solid ${borderColor}` : undefined }}>
          <svg className="accordion-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ color: iconColor || undefined }}>
            <path fill="currentColor" fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
          <TitleTag className="accordion-title" style={{ margin: 0, color: titleColor || undefined }}>
            <RichText.Content tagName="span" value={title} />
          </TitleTag>
        </dt>

        <dd className="accordion-panel" style={{ backgroundColor: panelBg || undefined, borderBottom: borderColor && bottomW ? `${bottomW}px solid ${borderColor}` : undefined }}>
          <InnerBlocks.Content />
        </dd>
      </>
    );
  },
});
