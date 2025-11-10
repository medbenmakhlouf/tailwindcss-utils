# Tailwindcss Utils

Tailwind CSS v4 utility library for Ionic apps. Provides dynamic utilities using the `@utility` directive.

## 📦 Installation

```bash
npm install @tailwindcss/utils
```

## 🧩 Usage

Import into your Tailwind CSS entry file:

```css
@import "tailwindcss"; /* Make sure you import tailwindcss lib first */
@import "@tailwindcss/utils/ionic/index.css";
```

> Requires Tailwind CSS v4 and a build setup that supports `@utility`.

## 🧪 Example

```html
<ion-chip class="ion-bg-sky-500">
    <ion-label>Hello Ionic + Tailwind</ion-label>
</ion-chip>
```

Using utilities like `ion-bg-*` allows you to define styles declaratively with utility classes — instead of inline styles like:

```html
<ion-chip style="--background: #ddd">
  <ion-label>Legacy style</ion-label>
</ion-chip>
```

This approach improves scalability and organization in design systems by promoting reusable, consistent styles.

> 🔍 For available custom properties like `--background`, `--color-selected`, and others, refer to the **CSS Custom Properties** section in the [Ionic Component Documentation](https://ionicframework.com/docs/components).

# Ionic CSS Custom Properties

This table groups all available CSS custom properties by variable and lists the components where each variable is used along with a description.

> **Note**: Refer to the [official Ionic documentation on CSS Custom Properties](https://ionicframework.com/docs/theming/css-variables) for more usage context.

## 🧩 CSS Custom Properties Table

| Variable | Used | Prefix                   |
|----------|------|--------------------------|
| --background | ion-action-sheet, ion-alert, ion-back-button, ion-button, ion-card, ion-chip, ion-content, ion-datetime, ion-fab-button, ion-input, ion-item, ion-item-divider, ion-item-option, ion-list-header, ion-loading, ion-menu, ion-menu-button, ion-modal, ion-popover, ion-progress-bar, ion-router-link, ion-searchbar, ion-segment, ion-segment-button, ion-select, ion-skeleton-text, ion-tab-bar, ion-tab-button, ion-textarea, ion-toast, ion-toolbar | ion-bg-*                 |
| --min-height | ion-action-sheet, ion-alert, ion-back-button, ion-item, ion-loading, ion-menu, ion-modal, ion-popover, ion-toast, ion-toolbar | ion-min-h-*              |
| --min-width | ion-action-sheet, ion-alert, ion-back-button, ion-loading, ion-menu, ion-modal, ion-popover, ion-toast | ion-min-w-*              |
| --height | ion-action-sheet, ion-alert, ion-loading, ion-menu, ion-modal, ion-popover, ion-range, ion-toast | ion-h-*                  |
| --max-height | ion-action-sheet, ion-alert, ion-loading, ion-menu, ion-modal, ion-popover, ion-toast | ion-max-h-*              |
| --max-width | ion-action-sheet, ion-alert, ion-loading, ion-menu, ion-modal, ion-popover, ion-toast | ion-max-w-*              |
| --width | ion-action-sheet, ion-alert, ion-loading, ion-menu, ion-modal, ion-popover, ion-toast | ion-w-*                  |
| --backdrop-opacity | ion-action-sheet, ion-alert, ion-loading, ion-modal, ion-popover | ion-backdrop-opacity-*   |
| --color | ion-action-sheet, ion-back-button, ion-badge, ion-breadcrumb, ion-button, ion-card, ion-card-subtitle, ion-card-title, ion-chip, ion-content, ion-fab-button, ion-input, ion-item, ion-item-divider, ion-item-option, ion-label, ion-list-header, ion-menu-button, ion-note, ion-radio, ion-router-link, ion-searchbar, ion-segment-button, ion-spinner, ion-tab-bar, ion-tab-button, ion-textarea, ion-title, ion-toast, ion-toolbar | ion-text-*               |
| --button-color | ion-action-sheet, ion-toast | ion-text-button-*        |
| --border-radius | ion-avatar, ion-back-button, ion-button, ion-checkbox, ion-fab-button, ion-input, ion-item, ion-menu-button, ion-modal, ion-radio, ion-searchbar, ion-segment-button, ion-select, ion-skeleton-text, ion-textarea, ion-thumbnail, ion-toast, ion-toggle | ion-rounded-*            |
| --padding-top | ion-back-button, ion-badge, ion-button, ion-content, ion-fab-button, ion-input, ion-item, ion-item-divider, ion-menu-button, ion-segment-button, ion-select, ion-tab-button, ion-textarea, ion-toolbar | ion-pt-*                 |
| --padding-start | ion-back-button, ion-badge, ion-button, ion-content, ion-fab-button, ion-input, ion-item, ion-item-divider, ion-menu-button, ion-segment-button, ion-select, ion-tab-button, ion-textarea, ion-toolbar | ion-ps-*                 |
| --padding-end | ion-back-button, ion-badge, ion-button, ion-content, ion-fab-button, ion-input, ion-item, ion-item-divider, ion-menu-button, ion-segment-button, ion-select, ion-tab-button, ion-textarea, ion-toolbar | ion-pe-*                 |
| --padding-bottom | ion-back-button, ion-badge, ion-button, ion-content, ion-fab-button, ion-input, ion-item, ion-item-divider, ion-menu-button, ion-segment-button, ion-select, ion-tab-button, ion-textarea, ion-toolbar | ion-pb-*                 |
| --color-hover | ion-back-button, ion-breadcrumb, ion-button, ion-fab-button, ion-item, ion-menu-button, ion-segment-button | ion-text-hover-*         |
| --color-focused | ion-back-button, ion-breadcrumb, ion-button, ion-fab-button, ion-item, ion-menu-button, ion-segment-button, ion-tab-button | ion-text-focused-*       |
| --background-focused | ion-back-button, ion-breadcrumb, ion-button, ion-fab-button, ion-item, ion-menu-button, ion-segment-button, ion-tab-button | ion-bg-focused-*         |
| --transition | ion-back-button, ion-button, ion-checkbox, ion-fab-button, ion-item | ion-ease-*               |
| --background-hover-opacity | ion-back-button, ion-button, ion-fab-button, ion-item, ion-menu-button, ion-segment-button | ion-bg-hover-opacity-*   |
| --background-hover | ion-back-button, ion-button, ion-fab-button, ion-item, ion-menu-button, ion-segment-button | ion-bg-hover-*           |
| --background-focused-opacity | ion-back-button, ion-button, ion-fab-button, ion-item, ion-menu-button, ion-segment-button, ion-tab-button | ion-bg-focused-opacity-* |
| --ripple-color | ion-back-button, ion-button, ion-fab-button, ion-item, ion-select, ion-tab-button | ion-text-ripple-*        |
| --opacity | ion-back-button, ion-button, ion-toolbar | ion-opacity-*            |
| --margin-end | ion-back-button, ion-segment-button | ion-me-*                 |
| --margin-bottom | ion-back-button, ion-segment-button | ion-mb-*                 |
| --margin-start | ion-back-button, ion-segment-button | ion-ms-*                 |
| --margin-top | ion-back-button, ion-segment-button | ion-mt-*                 |
| --border-width | ion-button, ion-checkbox, ion-fab-button, ion-input, ion-item, ion-list-header, ion-modal, ion-segment-button, ion-select, ion-textarea, ion-toast, ion-toolbar | ion-border-*             |
| --border-color | ion-button, ion-checkbox, ion-fab-button, ion-input, ion-item, ion-list-header, ion-modal, ion-segment-button, ion-select, ion-textarea, ion-toast, ion-toolbar |     ion-border-*         |
| --border-style | ion-button, ion-checkbox, ion-fab-button, ion-input, ion-item, ion-list-header, ion-modal, ion-segment-button, ion-select, ion-textarea, ion-toast, ion-toolbar |       ion-border-*       |
| --background-activated-opacity | ion-button, ion-fab-button, ion-item |                          |
| --color-activated | ion-button, ion-fab-button, ion-item | ion-text-activated-*           |
| --background-activated | ion-button, ion-fab-button, ion-item | ion-bg-activated-*             |
| --box-shadow | ion-button, ion-fab-button, ion-popover, ion-searchbar, ion-toast | ion-shadow-*                   |
| --size | ion-checkbox, ion-thumbnail | ion-size-*                       |
| --background-rgb | ion-datetime, ion-skeleton-text | ion-bg-rgb-*                    |
| --placeholder-opacity | ion-input, ion-searchbar, ion-select, ion-textarea | ion-placeholder-opacity-*       |
| --placeholder-color | ion-input, ion-searchbar, ion-select, ion-textarea | ion-placeholder-color-*         |
| --placeholder-font-style | ion-input, ion-searchbar, ion-textarea | ion-placeholder-font-style-*    |
| --placeholder-font-weight | ion-input, ion-searchbar, ion-textarea | ion-placeholder-font-weight-*   |
| --highlight-color-focused | ion-input, ion-select, ion-textarea | ion-highlight-color-focused-*   |
| --highlight-color-invalid | ion-input, ion-select, ion-textarea | ion-highlight-color-invalid-*   |
| --highlight-height | ion-input, ion-select, ion-textarea | ion-highlight-h-*               |
| --highlight-color-valid | ion-input, ion-select, ion-textarea | ion-highlight-color-valid-*     |
| --inner-padding-bottom | ion-item, ion-item-divider | ion-inner-pb-*                  |
| --inner-padding-top | ion-item, ion-item-divider | ion-inner-pt-*                  |
| --inner-padding-start | ion-item, ion-item-divider | ion-inner-ps-*                  |
| --inner-padding-end | ion-item, ion-item-divider | ion-inner-pe-*                  |
| --inner-border-width | ion-item, ion-list-header | ion-inner-border-*              |
| --color-checked | ion-radio, ion-segment-button | ion-text-checked-*              |
| --border | ion-split-pane, ion-tab-bar | ion-border-*                     |
| --button-background-selected-opacity | ion-action-sheet | ion-action-sheet-bg-selected-opacity-* |
| --button-color-disabled | ion-action-sheet | ion-action-sheet-text-disabled-* |
| --button-color-focused | ion-action-sheet | ion-action-sheet-text-focused-* |
| --button-color-hover | ion-action-sheet | ion-action-sheet-text-hover-* |
| --button-color-selected | ion-action-sheet | ion-action-sheet-text-selected-* |
| --button-background-selected | ion-action-sheet | ion-action-sheet-bg-selected-* |
| --button-background-hover-opacity | ion-action-sheet | ion-action-sheet-bg-hover-opacity-* |
| --button-background | ion-action-sheet | ion-action-sheet-bg-* |
| --button-background-activated | ion-action-sheet | ion-action-sheet-bg-activated-* |
| --button-background-activated-opacity | ion-action-sheet | ion-action-sheet-bg-activated-opacity-* |
| --button-background-focused | ion-action-sheet | ion-action-sheet-bg-focused-* |
| --button-background-focused-opacity | ion-action-sheet | ion-action-sheet-bg-focused-opacity-* |
| --button-color-activated | ion-action-sheet | ion-action-sheet-text-activated-* |
| --button-background-hover | ion-action-sheet | ion-action-sheet-bg-hover-* |
| --icon-padding-top | ion-back-button | ion-back-button-icon-pt-* |
| --icon-margin-end | ion-back-button | ion-back-button-icon-me-* |
| --icon-margin-start | ion-back-button | ion-back-button-icon-ms-* |
| --icon-margin-top | ion-back-button |  ion-back-button-icon-mt-* |
| --icon-padding-bottom | ion-back-button | ion-back-button-icon-pb-* |
| --icon-padding-end | ion-back-button | ion-back-button-icon-pe-* |
| --icon-padding-start | ion-back-button | ion-back-button-icon-ps-* |
| --icon-font-size | ion-back-button | ion-back-button-icon-text-* |
| --icon-font-weight | ion-back-button | ion-back-button-icon-text-weight-* |
| --icon-margin-bottom | ion-back-button | ion-back-button-icon-mb-* |
| --color-active | ion-breadcrumb | ion-breadcrumb-text-active-* |
| --checkmark-width | ion-checkbox | ion-checkbox-checkmark-w-* |
| --checkmark-color | ion-checkbox | ion-checkbox-checkmark-color-* |
| --checkbox-background-checked | ion-checkbox | ion-checkbox-bg-checked-* |
| --checkbox-background | ion-checkbox | ion-checkbox-bg-* |
| --border-color-checked | ion-checkbox | ion-checkbox-border-checked-* |
| --checkbox-width | ion-checkbox | ion-checkbox-w-* |
| --checkbox-text-align | ion-checkbox | ion-checkbox-align-* |
| --ion-grid-column-padding | ion-col | ion-col-p-* |
| --ion-grid-column-padding-lg | ion-col | ion-col-p-lg-* |
| --ion-grid-column-padding-md | ion-col | ion-col-p-md-* |
| --ion-grid-column-padding-sm | ion-col | ion-col-p-sm-* |
| --ion-grid-column-padding-xl | ion-col | ion-col-p-xl-* |
| --ion-grid-column-padding-xs | ion-col | ion-col-p-xs-* |
| --ion-grid-columns | ion-col | ion-col-cols-* |
| --offset-top | ion-content | ion-content-offset-t-* |
| --keyboard-offset | ion-content | ion-content-keyboard-offset-* |
| --offset-bottom | ion-content | ion-content-offset-b-* |
| --wheel-fade-background-rgb | ion-datetime | ion-datetime-bg-wheel-fade-rgb-* |
| --title-color | ion-datetime | ion-datetime-title-color-* |
| --wheel-highlight-background | ion-datetime | ion-datetime-bg-wheel-highlight-* |
| --wheel-highlight-border-radius | ion-datetime | ion-datetime-wheel-highlight-rounded-* |
| --close-icon-font-size | ion-fab-button | ion-fab-button-text-close-icon-size-* |
| --ion-grid-padding-sm | ion-grid | ion-grid-p-sm-* |
| --ion-grid-padding-lg | ion-grid | ion-grid-p-lg-* |
| --ion-grid-padding-md | ion-grid | ion-grid-p-md-* |
| --ion-grid-padding-xl | ion-grid | ion-grid-p-xl-* |
| --ion-grid-padding-xs | ion-grid | ion-grid-p-xs-* |
| --ion-grid-width | ion-grid | ion-grid-w-* |
| --ion-grid-width-lg | ion-grid | ion-grid-w-lg-* |
| --ion-grid-width-md | ion-grid | ion-grid-w-md-* |
| --ion-grid-width-sm | ion-grid | ion-grid-w-sm-* |
| --ion-grid-width-xl | ion-grid | ion-grid-w-xl-* |
| --ion-grid-width-xs | ion-grid | ion-grid-w-xs-* |
| --ion-grid-padding | ion-grid | ion-grid-p-* |
| --inner-box-shadow | ion-item | ion-item-shadow-inner-* |
| --detail-icon-color | ion-item | ion-item-detail-icon-color-* |
| --detail-icon-font-size | ion-item | ion-item-detail-icon-size-* |
| --detail-icon-opacity | ion-item | ion-item-detail-icon-opacity-* |
| --spinner-color | ion-loading | ion-loading-spinner-color-* |
| --fade-background-rgb | ion-picker | ion-picker-bg-fade-rgb-* |
| --highlight-background | ion-picker | ion-picker-bg-highlight-* |
| --highlight-border-radius | ion-picker | ion-picker-highlight-rounded-* |
| --offset-x | ion-popover | ion-popover-offset-x-* |
| --offset-y | ion-popover | ion-popover-offset-y-* |
| --progress-background | ion-progress-bar | ion-progress-bar-bg-* |
| --inner-border-radius | ion-radio | ion-radio-inner-rounded-* |
| --bar-background-active | ion-range | ion-range-bar-bg-active-* |
| --knob-background | ion-range | ion-range-knob-bg-* |
| --pin-color | ion-range | ion-range-pin-color-* |
| --pin-background | ion-range | ion-range-pin-bg-* |
| --bar-background | ion-range | ion-range-bar-bg-* |
| --knob-size | ion-range | ion-range-knob-size-* |
| --knob-box-shadow | ion-range | ion-range-knob-shadow-* |
| --knob-border-radius | ion-range | ion-range-knob-rounded-* |
| --bar-border-radius | ion-range | ion-range-bar-rounded-* |
| --bar-height | ion-range | ion-range-bar-h-* |
| --icon-color | ion-searchbar | ion-searchbar-icon-color-* |
| --clear-button-color | ion-searchbar | ion-searchbar-clear-btn-color-* |
| --cancel-button-color | ion-searchbar | ion-searchbar-cancel-btn-color-* |
| --indicator-box-shadow | ion-segment-button | ion-segment-button-indicator-shadow-* |
| --indicator-height | ion-segment-button | ion-segment-button-indicator-h-* |
| --indicator-transform | ion-segment-button | ion-segment-button-indicator-transform-* |
| --indicator-transition | ion-segment-button | ion-segment-button-indicator-ease-* |
| --background-checked | ion-segment-button | ion-segment-button-bg-checked-* |
| --indicator-color | ion-segment-button | ion-segment-button-indicator-color-* |
| --side-max-width | ion-split-pane | ion-split-pane-max-w-* |
| --side-width | ion-split-pane | ion-split-pane-w-* |
| --side-min-width | ion-split-pane | ion-split-pane-min-w-* |
| --color-selected | ion-tab-button | ion-tab-button-text-selected-* |
| --white-space | ion-toast | ion-toast-white-space-* |
| --end | ion-toast | ion-toast-end-* |
| --start | ion-toast | ion-toast-start-* |
| --handle-width | ion-toggle | ion-toggle-handle-w-* |
| --handle-box-shadow | ion-toggle | ion-toggle-handle-shadow-* |
| --handle-height | ion-toggle | ion-toggle-handle-h-* |
| --track-background | ion-toggle | ion-toggle-track-bg-* |
| --track-background-checked | ion-toggle | ion-toggle-track-bg-checked-* |
| --handle-spacing | ion-toggle | ion-toggle-handle-spacing-* |
| --handle-max-height | ion-toggle | ion-toggle-handle-max-h-* |
| --handle-background | ion-toggle | ion-toggle-handle-bg-* |
| --handle-background-checked | ion-toggle | ion-toggle-handle-bg-checked-* |
| --handle-border-radius | ion-toggle | ion-toggle-handle-rounded-* |
| --handle-transition | ion-toggle | ion-toggle-handle-ease-* |

---

✅ This structure improves maintainability and provides an overview for developers looking to style Ionic components consistently.

Feel free to extend this file as you extract more variables from additional components!

## 🚀 Build & Publish

```bash
npm run build

# Publish alpha release
npm run publish:alpha

# Publish beta release
npm run publish:beta

# Publish stable patch release
npm run publish:stable
```
