import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, PanelColorSettings, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import block from './block.json';
import './main.css';

registerBlockType(block.name, {
  edit({ attributes, setAttributes }) {
  const { bgColor, textColor, modalBgColor, buttonBgColor, buttonTextColor, triggerLabel, triggerMediaId, triggerMediaUrl } = attributes;

    const blockProps = useBlockProps({
      className: 'wp-block-tsc-search-modal',
      style: {
        backgroundColor: bgColor,
        color: textColor,
        '--tsc-search-modal-bg': modalBgColor,
        '--tsc-search-button-bg': buttonBgColor,
        '--tsc-search-button-text': buttonTextColor,
        '--tsc-search-text': textColor,
        '--tsc-search-placeholder': textColor
      }
    });

    return (
      <>
        <InspectorControls>
          <PanelColorSettings
            title={__('Colors', 'tsc')}
            colorSettings={[    
              {
                label: __('Modal Background', 'tsc'),
                value: modalBgColor,
                onChange: (newValue) => setAttributes({ modalBgColor: newValue })
              },
              {
                label: __('Placeholder Text', 'tsc'),
                value: textColor,
                onChange: (newValue) => setAttributes({ textColor: newValue })
              },
              {
                label: __('Button Background', 'tsc'),
                value: buttonBgColor,
                onChange: (newValue) => setAttributes({ buttonBgColor: newValue })
              },
              {
                label: __('Button Text', 'tsc'),
                value: buttonTextColor,
                onChange: (newValue) => setAttributes({ buttonTextColor: newValue })
              }
            ]}
          />
          <MediaUploadCheck>
            <div style={{ margin: '1rem' }}>
              <MediaUpload
                onSelect={(media) => {
                  // Only accept SVG or image; prefer SVG
                  const url = media?.url || '';
                  setAttributes({
                    triggerMediaId: media?.id || 0,
                    triggerMediaUrl: url
                  });
                }}
                allowedTypes={[ 'image' ]}
                value={ triggerMediaId || 0 }
                render={({ open }) => (
                  <div>
                    <Button variant="secondary" onClick={ open }>
                      { triggerMediaUrl ? __('Replace Trigger Icon', 'tsc') : __('Select Trigger Icon (SVG)', 'tsc') }
                    </Button>
                    { triggerMediaUrl && (
                      <Button variant="link" onClick={() => setAttributes({ triggerMediaId: 0, triggerMediaUrl: '' })} style={{ marginLeft: '0.5rem' }}>
                        { __('Remove', 'tsc') }
                      </Button>
                    )}
                    { triggerMediaUrl && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <img src={ triggerMediaUrl } alt="" style={{ width: 48, height: 48, objectFit: 'contain' }} />
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
          </MediaUploadCheck>
          <div style={{ margin: '1rem' }}>
            <label className="components-base-control__label">{ __('Trigger Text', 'tsc') }</label>
            <input
              type="text"
              className="components-text-control__input"
              value={ triggerLabel || '' }
              onChange={(e) => setAttributes({ triggerLabel: e.target.value })}
              placeholder={ __('Search', 'tsc') }
            />
            <p className="components-base-control__help">{ __('Shown to the right of the icon. Uses the Button Background color.', 'tsc') }</p>
          </div>
        </InspectorControls>

        <div {...blockProps}>
          <button
            type="button"
            className="search-icon-button"
            aria-label={ (triggerLabel || __('Search', 'tsc')) }
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none', background: 'transparent', border: 'none', padding: 0, color: 'inherit' }}
            disabled
          >
            { triggerMediaUrl ? (
              <img src={ triggerMediaUrl } alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
            ) : (
              <svg className="icon-search" width="32" height="32" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            ) }
            { !!(triggerLabel && triggerLabel.trim()) && (
              <span className="search-trigger-label" style={{ color: 'var(--tsc-search-button-bg)', fontSize: '0.9rem', fontWeight: 500 }}>{ triggerLabel }</span>
            ) }
          </button>
          <div style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.75rem' }}>
            {__('Static preview (frontend adds toggle & close button).', 'tsc')}
          </div>
        </div>
      </>
    );
  }
});