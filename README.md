# Tailwindcss Utils

Tailwind CSS v4 utility library for Ionic & Angular Material. Provides dynamic utilities using the `@utility` directive.

## 📦 Installation

```bash
npm install @tailwindcss/utils
```

## 🧩 Usage

Import into your Tailwind CSS entry file:

```css
@import "tailwindcss"; /* Make sure you import tailwindcss lib first */
@import "tailwindcss-utils/ionic/index.css";
@import "tailwindcss-utils/angular-material/index.css";
```

> Requires Tailwind CSS v4 and a build setup that supports `@utility`.

## 🧪 Example Ionic

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

## 🧪 Example Angular Material

```html
<mat-icon class="m-icon-sky-500"> edit </mat-icon>
```

Using utilities like `m-icon-bg-*` allows you to define styles declaratively with utility classes — instead of inline styles like:

```html
<mat-icon style="--mat-icon-color: #erf"> edit </mat-icon>
```


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
