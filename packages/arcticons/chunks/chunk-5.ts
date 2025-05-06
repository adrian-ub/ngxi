import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCollinsdictionaryIcon],svg[arcticons-collinsdictionary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 19.844h3.099v8.265H9.5zm23.525 8.265v-8.265h1.86A3.616 3.616 0 0 1 38.5 23.46v1.033a3.616 3.616 0 0 1-3.616 3.616zm-11.263-2.772v.034a2.74 2.74 0 0 1-2.737 2.738h0a2.74 2.74 0 0 1-2.738-2.738v-2.79a2.74 2.74 0 0 1 2.738-2.737h0a2.74 2.74 0 0 1 2.737 2.737v.034m2.788 2.804a2.738 2.738 0 1 0 5.476 0v-2.79a2.738 2.738 0 1 0-5.475 0z"></svg:path>`,
})
export class ArcticonsCollinsdictionaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorIcon],svg[arcticons-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.896c-9.448 7.539-7.734 22.976 0 27.744c7.734-4.768 9.448-20.205 0-27.744"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.44 35.359c6.031-3.032 10.885-11.038 8.529-18.998h0c-8.44.544-14.312 8.233-14.825 15.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.56 35.359C12.53 32.327 7.676 24.32 10.032 16.36c8.44.544 14.312 8.233 14.825 15.098m1.03 6.482c5 2.58 13.418.92 16.613-5.463c-3.22-2.594-7.36-3.05-10.953-2.132"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.113 37.94c-5 2.58-13.418.92-16.613-5.463c3.22-2.594 7.36-3.05 10.953-2.132"></svg:path>`,
})
export class ArcticonsColorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorPaletteIcon],svg[arcticons-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 23.5h25.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H15c-5.243 0-9.5-4.257-9.5-9.5h0c0-5.243 4.257-9.5 9.5-9.5"></svg:path><svg:circle cx="15" cy="33" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 33H5.504M18.5 33h24m-19.742 9.5v-19m10 0v19M8.283 39.718a9.5 9.5 0 0 1 0-13.436l18.03-18.03a2 2 0 0 1 2.83 0l10.606 10.606a2 2 0 0 1 0 2.828L37.935 23.5m-13.435 0l9.945-9.945m-13.606.171l9.774 9.774"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 42.5A9.5 9.5 0 0 1 5.5 33V7.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v2.565m-9.5 9.5V5.5m-9.5 9.742h13.823"></svg:path>`,
})
export class ArcticonsColorPaletteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorPickerIcon],svg[arcticons-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.26 16.775l3.99-3.99a4.265 4.265 0 0 0-6.03-6.033l-3.992 3.991l-3.026-3.025l-2.962 2.962l12.077 12.076l2.962-2.962zM11.002 30.97a4.25 4.25 0 0 0-1 4.405l-3.96 3.958a1.853 1.853 0 1 0 2.621 2.62L12.618 38c1.496.52 3.22.197 4.416-.998L32.076 21.96l-6.032-6.032z"></svg:path>`,
})
export class ArcticonsColorPickerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorSwitchIcon],svg[arcticons-color-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="15.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.17 24h6.33m-43 0h6.33M24 39.17v6.33m0-43v6.33"></svg:path><svg:circle cx="24" cy="20.002" r="3.883" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.864 27.168a2.51 2.51 0 1 1-3.727 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.68 22.812a3.202 3.202 0 1 1-5.36 0"></svg:path>`,
})
export class ArcticonsColorSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorblendrIcon],svg[arcticons-colorblendr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.992 20.694c-15.197.526-4.658 9.274 8.456 12.721c12.506 3.287 30.107 2.727 15.576-6.376"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.77 6.86c.934 1.734 15.966 14 13.006 25.032c-8.702-.135-18.15-1.982-25.457-7.047c1.242-6.429 11.8-16.7 12.45-17.984M11.085 31.95c6.462 3.99 14.038 5.155 21.891 5.615c-2.65 2.481-7.799 4.6-12.772 3.041s-7.79-4.692-9.119-8.655Z"></svg:path>`,
})
export class ArcticonsColorblendrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColordictIcon],svg[arcticons-colordict-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.331-2v39h24.87a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.666 28.665v-8.838h1.988a3.866 3.866 0 0 1 3.867 3.867v1.104a3.866 3.866 0 0 1-3.867 3.867Z"></svg:path><svg:circle cx="24.742" cy="20.104" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.742 22.81v5.855m9.488-7.672v6.572a1.105 1.105 0 0 0 1.105 1.105h.331m-2.596-5.855h2.32m-4.3 4.742a2.21 2.21 0 0 1-1.918 1.113h0a2.21 2.21 0 0 1-2.209-2.21v-1.436a2.21 2.21 0 0 1 2.21-2.209h0a2.21 2.21 0 0 1 1.916 1.11"></svg:path>`,
})
export class ArcticonsColordictIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorefluxIcon],svg[arcticons-coloreflux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.648" cy="12.222" r="4.609" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.414" cy="30.716" r="4.609" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.634" cy="31.823" r="4.609" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.82 10.26h12.19v4.24H27.65M4.272 36.432h13.93v4.242H4.272z"></svg:path>`,
})
export class ArcticonsColorefluxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorfulstageIcon],svg[arcticons-colorfulstage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.154" cy="32.507" r="7.493" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.647 32.507V8c10.281 0 14.292 9.266 13.62 14.187c-6.004-4.09-13.62-2.8-13.62-2.8"></svg:path>`,
})
export class ArcticonsColorfulstageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColoringbookIcon],svg[arcticons-coloringbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.83 7.322l16.373 2.034l16.475-1.932l-.203 33.457l-12.353-3.307a2.69 2.69 0 0 1-3.323 1.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.424 11.085v5.354l-5.492.036l4.983 2.135l-1.118 5.186l3.254-4.067l4.474 2.847l-2.542-4.78l3.966-2.949l-5.353 1.148ZM7.83 7.322l-.305 33.05l9.46-1.4m1.219-.836l3.05 2.745l10.78-12.305l2.44-5.186l-5.593 2.237zM24.203 9.35v19.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.915 22.17c-.008 2.072 4.284 2.483 4.875.496c2.768-.268 4.114-1.178 2.956-3.649c1.77-3.422-.168-3.836-1.83-4.474c-1.185-2.01-2.754-2.605-5.086-.407c-3.802-.568-3.02 2.672-2.644 4.068c-2.087 1.802-.444 5.3 1.73 3.966"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.216 23.884c.996 4.305-.638 8.93-1.097 13.235c.937-7.353 4.082-11.636 8.949-13.526c-7.137 5.176-.683 10.9-8.95 13.526"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.119 37.119c-.826-3.745 1.339-8.678-3.72-10.007c.578-3.098 3.22 1.541 4.817-3.228"></svg:path><svg:ellipse cx="15.748" cy="18.302" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.187" ry="1.151"></svg:ellipse>`,
})
export class ArcticonsColoringbookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColornamerIcon],svg[arcticons-colornamer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:rect width="5.5" height="7.287" x="16.305" y="20.728" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.75" ry="2.75"></svg:rect><svg:rect width="5.5" height="7.287" x="28.453" y="20.728" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.75" ry="2.75"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.73 23.478a2.75 2.75 0 0 1 2.75-2.75h0m-2.751 0v7.288m-12.144-11v9.625c0 .759.616 1.375 1.375 1.375h.413M13.659 26.63a2.75 2.75 0 0 1-2.388 1.386h0a2.75 2.75 0 0 1-2.75-2.75v-1.788a2.75 2.75 0 0 1 2.75-2.75h0c1.02 0 1.91.555 2.385 1.38"></svg:path>`,
})
export class ArcticonsColornamerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColornoteIcon],svg[arcticons-colornote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.66 12.545h38.92m-38.918 0H43.58m-39 27.315h38.93l-.921 1.843H5.5Zm14.457-14.005a2.442 2.442 0 1 0 4.78-1.006l-.513-2.435a2.48 2.48 0 0 0-2.947-1.922a2.4 2.4 0 0 0-1.832 2.928Zm-7.364 3.996l-1.518-7.214l6.297 6.208l-1.518-7.214m14.03 4.67l-1.519-7.214m-2.435.513l4.78-1.006m1.804-.38l1.519 7.214m-.76-3.607l2.345-.494m-3.104-3.113l3.607-.76m-2.088 7.973l3.607-.759m-26.564 9.254l29.321-5.701M30.924 39.86s2.957-.97 4.276-1.588s3.625-2.077 3.625-2.077s1.864-2.929 2.646-4.602s1.996-5.416 1.996-5.416M4.617 6.711h38.931V39.86H4.616Z"></svg:path>`,
})
export class ArcticonsColornoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorpickerIcon],svg[arcticons-colorpicker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 8c2.5-.66 3.04-2.87 5-5s5.46 1.51 3.5 3.5s-4.35 2.55-4.9 4.9m-2 2L25 26.1c-.62.63-1.76.66-2.6.4c0 0-1.25 1.38-2 .5s.5-1.8.5-1.8c-.27-.81-.1-2 .5-2.6L34 10m-1 8h-7m12.8-3.6l1.9-1.9L34.8 7l-1.9 1.9z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.1 26l2.14 2.22a.7.7 0 0 0 1 0l1.38-1.38c.28-.27.72-.27 1 0l7.81 7.81c.45.44.13 1.21-.5 1.2H10.1a.7.7 0 0 1-.58-1.1l9.5-13.62c.24-.32.69-.38 1-.13l1.48 1.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.3 8.26c.13.39.2.81.2 1.24v29c0 2.21-1.79 4-4 4h-29c-2.21 0-4-1.79-4-4v-29c0-2.21 1.79-4 4-4h29c.19 0 .38.01.57.04"></svg:path>`,
})
export class ArcticonsColorpickerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorsAiIcon],svg[arcticons-colors-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-7.713 0l-1 37m.557-20.611l12.156.366M15.744 5.5l14.122 34.074m-9.694-23.392L11.351 42.5m4.733-14.121l9.276.322"></svg:path>`,
})
export class ArcticonsColorsAiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComPhoneIcon],svg[arcticons-com-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="25" height="37.04" x="11.5" y="5.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5" ry="5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 9.5h9"></svg:path><svg:circle cx="24" cy="38" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.69 22.3a5.78 5.78 0 0 0-7.38-.02v.02m9.28-2.33a8.8 8.8 0 0 0-11.2 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.38 17.86a11.6 11.6 0 0 0-14.8 0"></svg:path><svg:circle cx="23.99" cy="26.76" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsComPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComatoseIcon],svg[arcticons-comatose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 13.3c0-3.9 1.1-7.6 2.9-10.8H24C12.1 2.5 2.5 12.1 2.5 24S12.1 45.5 24 45.5c8 0 14.9-4.3 18.6-10.7C31.2 34.3 22 24.9 22 13.3"></svg:path>`,
})
export class ArcticonsComatoseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCombatProvidenceAnalysisSystemIcon],svg[arcticons-combat-providence-analysis-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24L24 42.5L42.5 24L24 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.125 28.625L24 14.75L33.25 24L24 33.25l4.625 4.625M24 24l-4.625 4.625"></svg:path>`,
})
export class ArcticonsCombatProvidenceAnalysisSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCombideIcon],svg[arcticons-combide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.448 27.294a2.09 2.09 0 0 1-2.084-2.084v-1.355a2.09 2.09 0 0 1 2.084-2.084h0a2.09 2.09 0 0 1 2.084 2.084v1.355a2.09 2.09 0 0 1-2.084 2.084m4.326-3.334a2.09 2.09 0 0 1 2.084-2.085h0a2.09 2.09 0 0 1 2.084 2.084v3.335m-4.168-5.419v5.419m4.168-3.334a2.09 2.09 0 0 1 2.084-2.085h0a2.09 2.09 0 0 1 2.084 2.084v3.335"></svg:path><svg:circle cx="37.666" cy="19.27" r=".834" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.666 21.771v5.523m-15.284 3.917a6.95 6.95 0 0 1-5.909 3.25h0A6.944 6.944 0 0 1 9.5 27.544v-7.032a6.944 6.944 0 0 1 6.915-6.973h.058a6.55 6.55 0 0 1 5.965 3.693m9.016 6.623a2.09 2.09 0 0 1 2.084-2.084h0a2.09 2.09 0 0 1 2.084 2.084v1.355a2.09 2.09 0 0 1-2.084 2.084h0a2.09 2.09 0 0 1-2.084-2.084m0 2.084v-8.336"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4"></svg:path>`,
})
export class ArcticonsCombideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComdirectIcon],svg[arcticons-comdirect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.53 3.552a20.32 20.32 0 0 0-12.955 5.952a20.585 20.585 0 0 0 0 28.991a20.29 20.29 0 0 0 28.819 0l-6.551-6.59a11.07 11.07 0 0 1-15.717 0a11.23 11.23 0 0 1 0-15.81a11.07 11.07 0 0 1 15.717 0l6.55-6.59A20.3 20.3 0 0 0 25.53 3.552"></svg:path>`,
})
export class ArcticonsComdirectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComdirectPhototanIcon],svg[arcticons-comdirect-phototan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.012 11.312a6.36 6.36 0 0 0-4.988-1.888h0a6.37 6.37 0 0 0-4.074 1.887a6.566 6.566 0 0 0 0 9.193a6.343 6.343 0 0 0 9.062 0m-29.045-4.536a2.347 2.347 0 1 1-2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m23.07 24.186a2.347 2.347 0 1 1-2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m-15.379 0a2.347 2.347 0 1 1-2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m23.07-7.998a2.347 2.347 0 0 1-2.347 2.347h0a2.347 2.347 0 0 1-2.347-2.347h0a2.347 2.347 0 0 1 2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m-7.69 0a2.347 2.347 0 0 1-2.347 2.347h0a2.347 2.347 0 0 1-2.347-2.347h0a2.347 2.347 0 0 1 2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m-15.38 0a2.347 2.347 0 0 1-2.346 2.347h0a2.347 2.347 0 0 1-2.347-2.347h0a2.347 2.347 0 0 1 2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m7.69 0a2.347 2.347 0 0 1-2.347 2.347H24a2.347 2.347 0 0 1-2.347-2.347h0a2.347 2.347 0 0 1 4.694 0m0-8.12a2.347 2.347 0 0 1-4.694-.002h0a2.347 2.347 0 0 1 4.694 0h0m-15.38 8.121a2.347 2.347 0 0 1-4.693 0h0a2.347 2.347 0 0 1 2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m0-8.12a2.347 2.347 0 0 1-4.693-.001h0a2.347 2.347 0 0 1 2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m7.69-8.068a2.347 2.347 0 0 1-4.693 0h0a2.347 2.347 0 0 1 2.347-2.347h0a2.347 2.347 0 0 1 2.347 2.347m0-8.12a2.347 2.347 0 0 1-4.693-.001h0a2.347 2.347 0 0 1 4.692.003h0m7.69 0a2.347 2.347 0 0 1-4.694-.002h0a2.347 2.347 0 0 1 4.694.002"></svg:path>`,
})
export class ArcticonsComdirectPhototanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComicGeeksIcon],svg[arcticons-comic-geeks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 18.307l.296 23.216H29.99v-21.69zm24.489-3.479L42.5 6.478z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.796 13.999l24.193.829v5.004l12.511-9.18v20.862L29.989 41.523"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.32 23.341h15.665v3.998H9.32zM5.5 17.567l.296-3.568L16.65 6.477H42.5v4.176"></svg:path>`,
})
export class ArcticonsComicGeeksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComicdaysIcon],svg[arcticons-comicdays-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.755 5.5c-1.014.004-1.965 1.08-1.97 1.956m0 33.049c-.004.871.935 1.985 1.95 1.995m22.878-37H10.755m22.858 37H10.735M8.785 7.456v33.049m30.43-29.454v25.898M33.413 42.5c3.066 0 5.802-2.485 5.802-5.55M33.413 5.5c3.066 0 5.802 2.485 5.802 5.55m-21.13 3.77c-.5.001-.74.54-.742.97m0 16.4c-.002.43.23.983.732.99m5.556-12.414h-6.288m6.288 6.246h-6.293m7.368-5.438v4.63m-1.075.807c.778 0 1.075-.361 1.075-.808m-1.075-5.437c.778 0 1.075.362 1.075.808m3.327-6.754h-9.948m9.948 18.36h-9.958m12.587-15.605v12.851m-2.727 2.755c1.506 0 2.727-1.234 2.727-2.755M27.935 14.82c1.506 0 2.727 1.233 2.727 2.754m-13.324 9.437v5.081m.005-16.301v4.975"></svg:path>`,
})
export class ArcticonsComicdaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComicoJustoonIcon],svg[arcticons-comico-justoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.916 11.647q-1.221-4.916-6.138-4.916l-22.12-1.232q-3.684 0-3.685 3.684L5.931 34.988q-.41 7.37 6.959 4.917l8.602-2.464q2.041-.81 3.684 0l9.834 4.916c1.22.622 2.453-.92 1.531-2.452l-2.519-4.673c-.488-.977-.244-1.72 1.387-2.286l3.286-.822q3.683-.821 3.374-3.274z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.263 17.421a7.371 7.371 0 1 0-.033 7.836"></svg:path>`,
})
export class ArcticonsComicoJustoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComicscreenIcon],svg[arcticons-comicscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.41 4.5h6.27A1.49 1.49 0 0 1 26.17 6v5.34h-9.25V6a1.49 1.49 0 0 1 1.49-1.5m-1.49 6.83h9.25v25.34h-9.25Zm17.93-.92a1.75 1.75 0 0 1 2 1.45l.79 5L27 18.57l-.79-5a1.73 1.73 0 0 1 1.44-2l7.21-1.15Zm2.78 6.47l2.94 18.44L29.93 37L27 18.57l10.64-1.69Zm2.94 18.44l.8 5a1.74 1.74 0 0 1-1.45 2l-7.21 1.15a1.75 1.75 0 0 1-2-1.45l-.79-5l10.64-1.69ZM8.29 7.84h7a1.68 1.68 0 0 1 1.68 1.68v5.15H6.61V9.52a1.68 1.68 0 0 1 1.68-1.68m-1.68 6.83h10.31v22H6.61Zm0 22h10.31v5.15a1.68 1.68 0 0 1-1.68 1.68h-7a1.68 1.68 0 0 1-1.68-1.68Zm10.31 0h9.25V42a1.49 1.49 0 0 1-1.49 1.49h-6.27A1.49 1.49 0 0 1 16.92 42Z"></svg:path>`,
})
export class ArcticonsComicscreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComixologyIcon],svg[arcticons-comixology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.317 24.503l2.28 9.859l-7.907 1.31l-1.043-4.378l-5.699 5.809L4.5 38.971l15.256-15.62l-2.668-11.241l8.137-.946l1.237 5.323l6.039-6.184L43.5 9.029z"></svg:path>`,
})
export class ArcticonsComixologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCommbankIcon],svg[arcticons-commbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.363 3.863l20.5 20.5l-20.5 20.499l-20.5-20.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.53 19.03l-7.417 7.416l-7.75 18.417"></svg:path>`,
})
export class ArcticonsCommbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCommerzbankBankingIcon],svg[arcticons-commerzbank-banking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.791 32.92H13.766c-3.058-.092-4.635-.947-6.196-3.502l-2.977-5.191L14.319 7.24l4.469-.045m8.054 4.133L36.855 28.67c1.45 2.695 1.498 4.488.065 7.117l-3.007 5.174l-19.573.069l-2.273-3.847m-.448-9.042L21.63 10.8c1.609-2.603 3.138-3.541 6.13-3.615l5.985.017l9.846 16.917l-2.194 3.892"></svg:path>`,
})
export class ArcticonsCommerzbankBankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCommonsIcon],svg[arcticons-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="28.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.2" ry="3.25"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27 10.64C25.56 7.9 23.34 4.5 23.34 4.5s-1.63 3.3-3.21 6.27m1.55 26.92l2.18-3.84L26 37.69Zm-5.82-4.54L20.07 32l-1.14 4.28Zm-1.21-7.3l3.79 2.21l-3.79 2.2Zm4.48-5.91l1.15 4.28l-4.22-1.16ZM32.14 33.5l-4.21-1.16l1.14 4.28Zm1.21-7.36l-3.79 2.21l3.79 2.21Zm-4.28-6.06l-1.14 4.28l4.21-1.16Zm4.28 8.27h5.31m-8.08 6.74l3.9 4m-10.62-1.4v5.81m-6.47-8.79l-4.07 4.18m1.33-10.83h-5.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.53 21.56L14 18a14.85 14.85 0 0 0-4.67 10.83a14.67 14.67 0 0 0 25 10.37a14.53 14.53 0 0 0 4.3-10.37a14.35 14.35 0 0 0-4.52-10.18a13.1 13.1 0 0 0-4.75-2.8c-2.16-.87-5.61-1.92-5.78-4.16c-.24-3.08-.28-7.19-.28-7.19m7.28 17.11l3.26-3.24"></svg:path>`,
})
export class ArcticonsCommonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCommonvoiceIcon],svg[arcticons-commonvoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.77 26.07H19.2a.12.12 0 0 0-.08.14A5.41 5.41 0 0 0 24 29.6a5.41 5.41 0 0 0 4.88-3.38v0a.13.13 0 0 0-.11-.15m3.05-6.87a.07.07 0 0 0-.1.05a1.2 1.2 0 0 1-1.11.74a1.23 1.23 0 0 1-1.1-.74a1.21 1.21 0 0 1 .65-1.57a.07.07 0 0 0 .07-.07a.08.08 0 0 0-.07-.08a2.9 2.9 0 0 0-1.2-.08a2.79 2.79 0 1 0 3 3.47a2.73 2.73 0 0 0-.11-1.67a.08.08 0 0 0-.03-.05"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41 17.32a8.08 8.08 0 0 0-7.87-6.41H14.92a8.08 8.08 0 0 0-7.87 6.41a3.65 3.65 0 0 0-2.55 3.46v5.84a4.24 4.24 0 0 0 3.55 4.18a11.52 11.52 0 0 0 10.26 6.29H29.6a11.53 11.53 0 0 0 10.27-6.29a4.24 4.24 0 0 0 3.63-4.18v-5.84a3.65 3.65 0 0 0-2.5-3.46m-4.23 9.5a6.58 6.58 0 0 1-6.56 6.56H17.84a6.59 6.59 0 0 1-6.57-6.56v-7.08h0A5.74 5.74 0 0 1 17 14h14a5.75 5.75 0 0 1 5.73 5.73Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.4 20.89a2.7 2.7 0 0 0-.06-1.64a.08.08 0 0 0-.05-.05a.07.07 0 0 0-.1.05a1.2 1.2 0 1 1-1.56-1.57a.07.07 0 0 0 .07-.07a.08.08 0 0 0-.07-.08a2.5 2.5 0 0 0-.45-.11A2.78 2.78 0 0 0 16 19.68h0a2.79 2.79 0 0 0 5.45 1.22Z"></svg:path>`,
})
export class ArcticonsCommonvoiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCommunityIcon],svg[arcticons-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.402 30.896h4m-4-6.9l2-1.1m0 0v8M7.032 5.876h33.936a1.52 1.52 0 0 1 1.516 1.521v24.79a1.52 1.52 0 0 1-1.516 1.521H5.516V7.398a1.52 1.52 0 0 1 1.516-1.522m9.028 27.847v8.4L5.516 33.709"></svg:path>`,
})
export class ArcticonsCommunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCompaanPortaalIcon],svg[arcticons-compaan-portaal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.703 4.5c-9.276 0-21.698 10.922-21.698 29.31c0 16.437 18.37 9.096 22.204-.957c-3.402 4.561-6.977 6.003-9.62 6.003c-4.772 0-7.088-4.736-7.088-10.415c0-12.513 8.826-23.94 16.201-23.94c4.195 0 6.293 3.11 6.293 6.944c0 5.858-3.493 8.534-6.51 8.534a3.907 3.907 0 0 1-3.905-4.557c4.123.433 6.293-4.769 6.293-7.228a4.54 4.54 0 0 0-2.17-3.694"></svg:path>`,
})
export class ArcticonsCompaanPortaalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCompassIcon],svg[arcticons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5A21.5 21.5 0 1 1 45.5 24A21.51 21.51 0 0 1 24 45.5m12.45-34.08l-12.3 8.96m12.3-8.96l-8.96 12.31"></svg:path><svg:circle cx="24" cy="23.88" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.54 36.34l12.3-8.96m-12.3 8.96l8.96-12.3"></svg:path>`,
})
export class ArcticonsCompassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComplicationBoxIcon],svg[arcticons-complication-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.744 4.5a2.94 2.94 0 0 0-2.865 2.28l-1.31 5.669h.06A14.3 14.3 0 0 0 9.699 24a14.3 14.3 0 0 0 5.928 11.549h-.059l1.31 5.672a2.94 2.94 0 0 0 2.864 2.28h8.514a2.94 2.94 0 0 0 2.865-2.28l1.31-5.674h-.056A14.3 14.3 0 0 0 38.3 24a14.3 14.3 0 0 0-5.87-11.547l-1.31-5.674A2.94 2.94 0 0 0 28.256 4.5z"></svg:path><svg:circle cx="24" cy="24" r="10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.87 21.038L24 24l5.13-2.962L24 18.076zv5.924L24 29.924l5.13-2.962v-5.924L24 24v5.924"></svg:path>`,
})
export class ArcticonsComplicationBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComplicationsSuiteIcon],svg[arcticons-complications-suite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="14.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.432 12.453l-1.31-5.674A2.94 2.94 0 0 0 28.256 4.5h-8.513a2.94 2.94 0 0 0-2.865 2.279l-1.31 5.67m0 23.099l1.31 5.673a2.94 2.94 0 0 0 2.865 2.279h8.513a2.94 2.94 0 0 0 2.865-2.279l1.31-5.674M17.196 17.196h5.103v5.103h-5.103zm0 8.505h5.103v5.103h-5.103zm8.505 0h5.103v5.103h-5.103zm2.552-9.561l-3.609 3.608l3.609 3.608l3.609-3.608z"></svg:path>`,
})
export class ArcticonsComplicationsSuiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComposeMaterialCatalogIcon],svg[arcticons-compose-material-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="24.017" height="24.017" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="29.517" cy="29.517" r="12.982" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsComposeMaterialCatalogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComposerIcon],svg[arcticons-composer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.97 36.55c-3.18 0-5.65-2.58-5.76-5.76V17.21c0-3.18 2.58-5.76 5.76-5.76s5.83 2.58 5.82 5.76v13.54a5.817 5.817 0 0 1-5.82 5.81Z"></svg:path><svg:rect width="11.52" height="11.52" x="4.5" y="25.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.3" ry="2.3"></svg:rect><svg:circle cx="37.74" cy="30.79" r="5.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.26" cy="17.21" r="5.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="11.52" height="11.52" x="31.98" y="11.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.3" ry="2.3"></svg:rect>`,
})
export class ArcticonsComposerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsComputrabajoIcon],svg[arcticons-computrabajo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 36.27c2.6.5 5.1.99 7.8.93s5.5-.67 7.6-1.4c2.1-.7 3.6-1.5 5.1-2.3m-3.472-21.378v15.89a2.67 2.67 0 0 0 2.67 2.67h.802m-6.276-14.154h5.608m-8.615 6.99v.087a7.077 7.077 0 0 1-7.077 7.077h0a7.077 7.077 0 0 1-7.077-7.077v-7.21a7.077 7.077 0 0 1 7.077-7.077h0a7.077 7.077 0 0 1 7.077 7.077v.133"></svg:path>`,
})
export class ArcticonsComputrabajoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConcentrationIcon],svg[arcticons-concentration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.841 26.485c4.698 0 8.508 3.81 8.508 8.507S28.54 43.5 23.841 43.5a8.508 8.508 0 0 1 0-17.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.04 31.278a9.538 9.538 0 1 1 15.818.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.914 22.71c-3.776-5.018-2.77-12.147 2.249-15.924C22.18 3.01 29.31 4.016 33.086 9.034a11.37 11.37 0 0 1 .054 13.604"></svg:path>`,
})
export class ArcticonsConcentrationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConcentrationTrainingIcon],svg[arcticons-concentration-training-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.527 17.635c0 5.828-4.707 10.552-10.513 10.552h0C9.207 28.187 4.5 23.462 4.5 17.635c0-5.828 4.707-10.552 10.514-10.552h0c5.806 0 10.513 4.724 10.513 10.552"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24.096c0 9.29-7.504 16.821-16.76 16.821S9.98 33.386 9.98 24.095c0-9.29 7.503-16.821 16.76-16.821c9.256 0 16.76 7.531 16.76 16.821"></svg:path>`,
})
export class ArcticonsConcentrationTrainingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConcentricclockIcon],svg[arcticons-concentricclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26.1" cy="24" r=".5" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.8 22.2a3.71 3.71 0 0 1 3.3-2a4.17 4.17 0 0 1 3.4 1.8m-3.6-5.6a7.6 7.6 0 0 1 6.7 3.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.8 32.4a11.407 11.407 0 0 1-19-9.8a11.525 11.525 0 0 1 8.7-9.7a11.4 11.4 0 0 1 12.1 4.9m-2.7-7.3a15.6 15.6 0 0 1 5.9 5.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 28.8a18.912 18.912 0 1 1-2.4-15.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 21.6A22.84 22.84 0 0 1 9.7 8.2"></svg:path>`,
})
export class ArcticonsConcentricclockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConceptsIcon],svg[arcticons-concepts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="37.008" cy="8.308" r="3.599" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.337 42.804A20.393 20.393 0 1 1 34.09 6.201m7.31 25.633l1.222.794m-4.018 4.012l1.142.985m-5.436 2.757l.788 1.025m-6.077 1.313l.404 1.253m-5.712-.636l-.04 1.194m-5.515-1.791l-.275 1.188M45.5 27.264h-5.438l-4.964-1.497l.079-4.097l4.885-1.497H45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.098 25.767l-5.515-2.127l5.594-1.97"></svg:path>`,
})
export class ArcticonsConceptsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConecteSusIcon],svg[arcticons-conecte-sus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 24a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 1 6.5 6.5a6.5 6.5 0 0 0-6.5 6.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 0-6.5-6.5a6.5 6.5 0 1 1 6.5-6.5"></svg:path>`,
})
export class ArcticonsConecteSusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConfirmtktIcon],svg[arcticons-confirmtkt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.266 9.149h7.468m2.853 14.596H17.413l-2.562-8.979h18.298z"></svg:path><svg:circle cx="16.591" cy="29.671" r="2.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.409" cy="29.667" r="2.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.908 7.4a3.165 3.165 0 0 0-3.147-2.9h-7.522a3.165 3.165 0 0 0-3.147 2.9c-3.516.498-6.223 3.512-6.223 7.166v15.688c0 1.203.785 2.213 1.868 2.574l-.605 2.364a.556.556 0 0 0 .42.681L24 38.383l11.448-2.51a.556.556 0 0 0 .42-.681l-.604-2.364a2.72 2.72 0 0 0 1.867-2.575V14.567c0-3.654-2.706-6.668-6.222-7.166Zm3.922 36.1l-2.165-5.011m-17.33 0L13.17 43.5m1.452-3.361h18.752"></svg:path>`,
})
export class ArcticonsConfirmtktIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConfluenceIcon],svg[arcticons-confluence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.864 29.145L4.64 34.728c-.288.5-.117 1.138.382 1.426l6.859 3.96c.5.288 1.138.117 1.426-.382l2.394-4.147a4.175 4.175 0 0 1 5.703-1.529l10.179 5.877a1.043 1.043 0 0 0 1.425-.382l3.96-6.859a1.045 1.045 0 0 0-.382-1.426l-11.614-6.705c-5.99-3.458-13.65-1.406-17.108 4.584"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.136 18.855l3.224-5.583c.288-.5.117-1.138-.382-1.426l-6.859-3.96a1.044 1.044 0 0 0-1.426.382L32.3 12.416a4.175 4.175 0 0 1-5.703 1.528L16.418 8.067a1.044 1.044 0 0 0-1.426.382l-3.96 6.859a1.045 1.045 0 0 0 .382 1.426l11.614 6.705c5.99 3.459 13.65 1.406 17.108-4.584"></svg:path>`,
})
export class ArcticonsConfluenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCongstarIcon],svg[arcticons-congstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.057 14.4l9.704-3.668c-4.566-5.165-12.303-8.747-19.243-8.17a24 24 0 0 0-18.08 11.504a21.57 21.57 0 0 0-.25 19.426a23.63 23.63 0 0 0 17.999 11.923c7.06.541 11.409-1.556 16.173-4.503A16.2 16.2 0 0 0 45 34.326l-8.543-2.668c-.812-.254-1.786-.503-2.405.75l-4.904 9.932a1.262 1.262 0 0 1-2.385-.25l-2.27-12.006a2.265 2.265 0 0 0-1.887-2.178L9.833 24.655c-.921-.235-.64-1.536 0-1.751l11.02-3.72c1.009-.34 1.144-1.213.996-2.116l-1.814-11.09c-.132-.802 1.153-1.54 1.731-.937l8.553 8.942a2.62 2.62 0 0 0 2.737.417Z"></svg:path>`,
})
export class ArcticonsCongstarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectIcon],svg[arcticons-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.07 31.07c-3.91 3.91-10.24 3.91-14.14 0c-3.91-3.91-3.91-10.24 0-14.14c3.91-3.91 10.24-3.91 14.14 0"></svg:path>`,
})
export class ArcticonsConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectYouIcon],svg[arcticons-connect-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.97 39.04v-3.719c2.974-2.974 5.467-3.918 9.265-3.918h0c3.798 0 6.29.944 9.265 3.918v3.719z"></svg:path><svg:circle cx="34.235" cy="22.893" r="4.975" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.97 39.04H4.5v-6.289c5.03-5.03 9.245-6.625 15.668-6.625h0c5.765 0 9.752 1.286 14.146 5.188"></svg:path><svg:circle cx="20.168" cy="15.809" r="6.848" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsConnectYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectedCareIcon],svg[arcticons-connected-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.497 11.796L24 17.294l-5.497-5.498L24 2.5zM18.196 20.87l-7.51 2.013l-5.306-9.41l10.802-.114zm-2.014 13.771L5.38 34.527l5.305-9.41l7.51 2.013zm13.315 1.563L24 45.5l-5.497-9.296L24 30.706zM42.62 13.473l-5.305 9.41l-7.51-2.013l2.012-7.511zm0 21.054l-10.802.114l-2.014-7.51l7.511-2.014z"></svg:path>`,
})
export class ArcticonsConnectedCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectipsIcon],svg[arcticons-connectips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsConnectips0" fill="none" stroke="currentColor" d="M35.682 14.75a9.24 9.24 0 0 0-9.23-9.25h-5.478a9.24 9.24 0 0 0-9.23 9.25a9.24 9.24 0 0 0 9.23 9.25h6.052a9.24 9.24 0 0 1 9.23 9.25a9.24 9.24 0 0 1-9.23 9.25h-5.478"></svg:path><svg:path id="arcticonsConnectips1" fill="none" stroke="currentColor" d="M33.25 35.682a9.24 9.24 0 0 0 9.25-9.23v-5.478a9.24 9.24 0 0 0-9.25-9.23a9.24 9.24 0 0 0-9.25 9.23v6.052a9.24 9.24 0 0 1-9.25 9.23a9.24 9.24 0 0 1-9.25-9.23v-5.478"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.925 15.998l2.085 3.288l3.288-2.084"></svg:path><svg:use href="#arcticonsConnectips0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsConnectips0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.682 14.75a13.6 13.6 0 0 1-.672 4.536M15.075 32.002l-2.085-3.288l-3.288 2.084m2.616 2.452a9.24 9.24 0 0 0 9.23 9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.318 33.25a9.24 9.24 0 0 0 9.23 9.25m-9.23-9.25a13.6 13.6 0 0 1 .672-4.536m19.012 4.211l-3.288 2.085l2.084 3.288"></svg:path><svg:use href="#arcticonsConnectips1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsConnectips1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.25 35.682a13.6 13.6 0 0 1-4.536-.672M15.998 15.075l3.288-2.085l-2.084-3.288m-2.452 2.616a9.24 9.24 0 0 0-9.25 9.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 12.318a9.24 9.24 0 0 0-9.25 9.23m9.25-9.23a13.6 13.6 0 0 1 4.536.672"></svg:path>`,
})
export class ArcticonsConnectipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectlifeIcon],svg[arcticons-connectlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.2 35.7C9.738 35.7 4.5 30.462 4.5 24s5.238-11.7 11.7-11.7h15.6c6.462 0 11.7 5.238 11.7 11.7s-5.238 11.7-11.7 11.7z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.8 30.235a7.2 7.2 0 1 1 .53-12.133"></svg:path>`,
})
export class ArcticonsConnectlifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectmeIcon],svg[arcticons-connectme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="30.59" height="30.59" x="5.5" y="11.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.09 27.26h6.41m-6.41-6.79h6.41m-6.41 13.59h6.41M24.2 11.91V5.5m-6.8 6.41V5.5m3.4 30.84V18.06m2.45 2.46l-2.45-2.46l-2.46 2.46m0 13.37l2.46 2.45l2.45-2.45M11.66 27.2h18.28m-2.46 2.46l2.46-2.46l-2.46-2.45m-13.37 0l-2.45 2.45l2.45 2.46"></svg:path>`,
})
export class ArcticonsConnectmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConsorsbankSecureplusIcon],svg[arcticons-consorsbank-secureplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.231" height="25.727" x="7.384" y="17.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.316"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.352 17.773V15.16a10.66 10.66 0 0 1 21.32 0v2.613M24 34.636v-8"></svg:path>`,
})
export class ArcticonsConsorsbankSecureplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConstitutionOfIndiaIcon],svg[arcticons-constitution-of-india-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 19.875v8.801"></svg:path><svg:circle cx="28.328" cy="20.094" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.328 22.735v5.941M35 26.475c0 1.21-.958 2.2-2.13 2.2s-2.13-.99-2.13-2.2v-1.43c0-1.21.959-2.2 2.13-2.2s2.13.99 2.13 2.2m0 3.631v-5.941m-15.546 5.941v-3.63c0-1.211-.959-2.201-2.13-2.201s-2.13.99-2.13 2.2m0 3.631v-5.941m10.723 2.2c0-1.21-.959-2.2-2.13-2.2s-2.13.99-2.13 2.2v1.43c0 1.21.959 2.2 2.13 2.2s2.13-.99 2.13-2.2m0 2.311v-8.802"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsConstitutionOfIndiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConsumidorIcon],svg[arcticons-consumidor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.074 29.311V17.69h3.78a3.922 3.922 0 0 1 0 7.845h-3.78M9.645 28.003c.7.882 1.784 1.37 2.908 1.307h1.745a2.905 2.905 0 0 0 0-5.81h-1.89a2.906 2.906 0 0 1-.034-5.812h1.779a3.12 3.12 0 0 1 2.908 1.308M38.5 25.461a3.926 3.926 0 0 1-7.851 0V21.54a3.91 3.91 0 0 1 3.892-3.922h.033a3.787 3.787 0 0 1 3.78 3.922"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsConsumidorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContactdiaryIcon],svg[arcticons-contactdiary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33" height="36.471" x="7.5" y="7.029" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.41 7.029V4.5m19.18 2.529V4.5M7.5 16.947h33m-25.482 8.937h18.834m-18.834 7.57h12.989"></svg:path>`,
})
export class ArcticonsContactdiaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContactsIcon],svg[arcticons-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 4.5h-23a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h23a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4M24 13.275A5.362 5.362 0 1 1 24 24a5.362 5.362 0 1 1 0-10.725m0 12.675c5.966 0 10.725 1.667 10.725 3.656v5.119h-21.45v-5.119c0-1.989 4.758-3.656 10.725-3.656"></svg:path>`,
})
export class ArcticonsContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContactsAltIcon],svg[arcticons-contacts-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5a9.237 9.237 0 1 1-9.22 9.254v-.017A9.237 9.237 0 0 1 24 5.5m0 21.897c10.32 0 18.457 6.873 18.457 10.296V42.5H5.543v-4.893c0-3.423 8.136-10.21 18.457-10.21"></svg:path>`,
})
export class ArcticonsContactsAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContactstoolkitIcon],svg[arcticons-contactstoolkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.77 43.728v-8.04c0-2.485 5.237-4.509 11.88-4.509s11.88 2.086 11.88 4.572v3.089M27.789 14.38c5.936-.012 8.918 7.928 4.725 12.577c-4.193 4.65-11.372 1.364-11.372-5.206c0-4.065 2.974-7.363 6.646-7.37zm-25.23 9.687l6.184-7.119M3.422 28.813l7.982-9.672m.872-7.836c-1.56-.184-3.02.362-3.754 1.553c-.723 1.174-.57 2.696.262 3.995m2.893 2.3c1.992.744 4.047.234 4.98-1.28c.523-.847.712-2.482-.007-3.593"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.389 11.363l-1.634 1.995l.842 2.62l3.003.54l1.793-2.104"></svg:path>`,
})
export class ArcticonsContactstoolkitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContainerStoreIcon],svg[arcticons-container-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 15.083L36.9 31.95a1.52 1.52 0 0 1-1.418.968H12.519c-.628 0-1.19-.385-1.419-.968L4.5 15.083"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.862 15.083l-4.604 11.632c-.221.557-.76.924-1.36.924H16.102c-.6 0-1.139-.367-1.36-.924l-4.604-11.632"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.224 15.083l-2.466 6.06a1.95 1.95 0 0 1-1.81 1.218h-7.896c-.795 0-1.51-.481-1.81-1.218l-2.466-6.06"></svg:path>`,
})
export class ArcticonsContainerStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContentShellIcon],svg[arcticons-content-shell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.556 16.067a5.646 5.646 0 0 1 5.658 5.658a5.65 5.65 0 0 1-5.658 5.657a5.65 5.65 0 0 1-5.647-5.657a5.644 5.644 0 0 1 5.647-5.658"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.432 7.762c7.706 0 13.942 6.236 13.942 13.932c0 7.705-6.237 13.942-13.942 13.942c-7.695 0-13.932-6.237-13.932-13.942c0-7.696 6.237-13.932 13.932-13.932m21.421 1.866a2.867 2.867 0 0 1 1.56 5.517c-.895.253-1.906.04-2.749-.66"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.652 9.904a3.372 3.372 0 1 1-1.676 5.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.567 11.818c.733 0 1.333.6 1.333 1.334s-.6 1.333-1.333 1.333s-1.334-.6-1.334-1.333s.6-1.334 1.334-1.334m5.076-.381c.533 0 .952.429.952.953s-.419.952-.952.952c-.524 0-.952-.428-.952-.952s.428-.953.952-.953M6.375 14.708l7.072 9.458m5.109-8.109h12.64M17.275 35.589l5.78-10.43M37.12 21.19c-.8-1.073-1.29-2.709-1.468-4.67m3.877 4.26c-.267-2.14-.045-4.061.666-5.572"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.329 26q.399.8 1.476 1.457q-1.21.819-1.41 1.752c-.066 4.81-2.476 9.63-6.486 10.43c-4.019.8-14.448.8-18.458 0c-9.79-2.01-8.916-12.272-6.011-9.376c5.141 6.318 13.836 7.192 20.12 1.974c2.097-1.784 3.442-3.937 4.321-6.852c.257-.886 1.304-.614 1.228.215a75 75 0 0 1-.305 3.914c-.095.762.705.762 1.067.315c1.248-1.42 2.048-2.63 2.467-7.039a2.259 2.259 0 0 1 3.657-1.6c3.943 3.21.734 6.42-.866 3.238c-.4-.838-1.61-.028-.8 1.572"></svg:path>`,
})
export class ArcticonsContentShellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContenttransferIcon],svg[arcticons-contenttransfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.91 39a2.24 2.24 0 0 0 2.24 2.24h13.11A2.24 2.24 0 0 0 43.5 39V9a2.24 2.24 0 0 0-2.24-2.24H28.15A2.24 2.24 0 0 0 25.91 9Zm-3.29-22.3a1.81 1.81 0 0 0-1.8-1.81H8.3a1.8 1.8 0 0 0-1.8 1.81V36a1.8 1.8 0 0 0 1.8 1.81h12.52a1.81 1.81 0 0 0 1.8-1.81Zm-8.06 6.56a3.1 3.1 0 0 0-3.1 3.11h0a3.1 3.1 0 0 0 3.1 3.1h0a3.1 3.1 0 0 0 3.1-3.1h0a3.1 3.1 0 0 0-3.1-3.11m20.15 0a3.1 3.1 0 0 0-3.11 3.1h0a3.11 3.11 0 1 0 3.11-3.11Zm-24.09-6.12h6.88m13.76-7.61h6.89m-6.87 29.32h6.88"></svg:path><svg:path fill="currentColor" d="M40.2 8.78a.72.72 0 1 1-.06 0Zm-20.65 7.61h.05a.75.75 0 1 1-.75.75a.76.76 0 0 1 .7-.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 19.18h16.12M6.5 34.55h16.12m-4.96-8.21H31.6m-5.69 10.11H43.5M25.91 12.04H43.5"></svg:path>`,
})
export class ArcticonsContenttransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsControlCenterIcon],svg[arcticons-control-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.594" cy="13.594" r="8.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.406" cy="13.594" r="8.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.594" cy="34.406" r="8.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.406" cy="34.406" r="8.094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.406 16.594v-6m-3 3h6m-6 20.812h6M11.119 11.119c-.633.633-1.025 1.508-1.025 2.475s.392 1.841 1.025 2.475s1.508 1.025 2.475 1.025s1.841-.392 2.475-1.025s1.025-1.509 1.025-2.475s-.392-1.842-1.025-2.475m-2.475 1.467V9.652m2.545 25.802c-.651-.652-1.551-1.055-2.545-1.055s-1.894.403-2.545 1.054m3.634 1.454c-.58-.582-1.598-.582-2.179 0M9.594 34c1.067-1.069 2.487-1.657 4-1.657s2.932.588 4 1.658"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.139 35.454c-.651-.652-1.551-1.055-2.545-1.055s-1.894.403-2.545 1.054"></svg:path>`,
})
export class ArcticonsControlCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsControlCenterAltIcon],svg[arcticons-control-center-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 8.5l3.647 5.47h-7.294zm0 31l3.647-5.47h-7.294z"></svg:path><svg:circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.5 24l-5.47 3.647v-7.294zm-31 0l5.47 3.647v-7.294z"></svg:path>`,
})
export class ArcticonsControlCenterAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsControlScreenOrientationIcon],svg[arcticons-control-screen-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.974" height="37" x="14.513" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.795" ry="3.795"></svg:rect><svg:rect width="37" height="18.974" x="5.5" y="14.513" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.795" ry="3.795"></svg:rect>`,
})
export class ArcticonsControlScreenOrientationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsControlloidIcon],svg[arcticons-controlloid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.67" cy="30.8" r="1.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.1 28.94h-2.39v-2.37a.5.5 0 0 0-.5-.5h-2.27a.49.49 0 0 0-.49.5v2.37h-2.4a.51.51 0 0 0-.49.5v2.28a.49.49 0 0 0 .49.49h2.4v2.4a.49.49 0 0 0 .49.49h2.23a.49.49 0 0 0 .49-.49v-2.39h2.4a.49.49 0 0 0 .49-.49v-2.28a.5.5 0 0 0-.45-.51"></svg:path><svg:circle cx="38.16" cy="30.8" r="1.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.06 12l.11-.11a15.38 15.38 0 0 1 19.35 0M18.05 16a1 1 0 0 1 .2-.17a9.66 9.66 0 0 1 11.17 0m5 23.64a8.7 8.7 0 0 1-5.78-2.15h-9.59a8.77 8.77 0 1 1-5.78-15.37h21.14A8.79 8.79 0 0 1 35 39.48h-.61Z"></svg:path><svg:circle cx="34.42" cy="27.06" r="1.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.42" cy="34.55" r="1.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsControlloidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsContyIcon],svg[arcticons-conty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.515 11.419a18.73 18.73 0 0 0-13.289-5.504c-3.034 0-5.9.719-8.438 1.996m-5.966 4.726a18.72 18.72 0 0 0-4.389 12.07c0 10.38 8.414 18.793 18.793 18.793c5.19 0 9.888-2.103 13.289-5.504"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.702 17.362l-1.654-4.87l-5.144.067l4.121-3.078l-1.654-4.87l4.201 2.967L16.693 4.5L15.17 9.413l4.2 2.968l-5.143.068zM40.64 30.238l.806 2.288l-1.998-1.377l-1.927 1.475l.692-2.326l-1.998-1.377l2.426-.06l.692-2.327l.807 2.289l2.427-.06zm-29.243 7.517c5.299-2.944 10.526-4.873 15.895-8.832c-6.26 2.13-17.575 1.122-13.318 7.612"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.292 28.923C25.404 32.79 20.6 41.06 13.974 36.535"></svg:path>`,
})
export class ArcticonsContyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConversationsIcon],svg[arcticons-conversations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.51 36.19l-.55-2A21.5 21.5 0 1 0 34.14 43l2 .55l7.2 1.93a1.67 1.67 0 0 0 2-1.18a1.6 1.6 0 0 0 0-.87Zm-10-14.39a2.2 2.2 0 1 1-2.2 2.2a2.23 2.23 0 0 1 2.22-2.2Zm-19.04 4.4a2.2 2.2 0 1 1 2.2-2.2a2.23 2.23 0 0 1-2.2 2.2m9.53 0a2.2 2.2 0 1 1 2.2-2.2a2.23 2.23 0 0 1-2.2 2.2"></svg:path>`,
})
export class ArcticonsConversationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsConverternowIcon],svg[arcticons-converternow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.648 8.722a98.5 98.5 0 0 0-17.937 4.337M43.5 21.776H16.442C2.924 22.109 4.576 33.619 4.552 39.3M36.67 8.7L25.332 19.503m-4.51 4.297L4.552 39.3"></svg:path>`,
})
export class ArcticonsConverternowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCookidooIcon],svg[arcticons-cookidoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.926 4.5a40.4 40.4 0 0 0-12.508 2.225c-7.01 2.323-1.032 2.685.504 2.686c5.41.004 14.791-.006 22.832.168c1.901.04 11.43.97 4.91-2.35C33.882 4.794 28.25 4.489 22.925 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.824 9.715c-.647 2.638-2.495 5.184-4.581 7.712l-16.285-.126c-2.344-2.349-4.546-4.78-5.567-7.901m21.852 8.027c3.13.049 5.458 3.55 4.41 9.006c-1.028 5.359-5.771 15.119-12.552 16.68c-3.196.735-6.633-.043-9.947-.168c-5.844-.221-5.989-5.434-4.827-9.695c1.137-4.17 6.64-11.92 6.64-11.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.959 17.301l.42 9.989c.378 9.037 10.668 7.26 13.724-.671c1.264-3.282 1.007-9.2 1.007-9.2M15.12 35.39l8.98.378l-1.51 5.54l-9.36-.546Zm20.69-5.891c.176 3.744.363 7.26.21 11.85a30.74 30.74 0 0 1-13.578 2.019"></svg:path><svg:circle cx="26.409" cy="38.727" r="1.317" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCookidooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCookieClickerIcon],svg[arcticons-cookie-clicker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.218 43.43A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 3.848-1.01 7.46-2.781 10.584"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.878 18.43l-2.242 3.617l1.906 3.532l2.888-.869l3.056-2.916l-1.57-3.729zm1.683-5.439h4.177l2.047.953l1.402-1.85l-3.505-1.907l-2.635.953zm13.99 8.327L32.617 24l3.336 2.757l1.262-1.654l.505-2.411l1.43-.673l-1.683-2.44l-3 .449zM14.084 35.056l.925-2.327l1.627.308l.448 1.122l-2.523 1.262zm6.112 4.57v-3.42s1.823-.785 1.963-.785s1.841.504 1.841.504l.178 1.991l-1.234 2.523z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m34.013 41.548l-7.604-7.604a1.397 1.397 0 0 1 0-1.976h0a1.397 1.397 0 0 1 1.976 0l6.636 6.636"></svg:path><svg:path d="m35.02 38.604l-2.518-2.518a1.397 1.397 0 0 1 0-1.976h0a1.397 1.397 0 0 1 1.976 0l2.518 2.518"></svg:path><svg:path d="m36.996 36.628l-1.82-1.82a1.397 1.397 0 0 1 0-1.976h0a1.397 1.397 0 0 1 1.975 0l1.821 1.82"></svg:path><svg:path d="m38.972 34.653l-1.059-1.06a1.397 1.397 0 0 1 0-1.975h0a1.397 1.397 0 0 1 1.976 0l2.027 2.027c1.337 1.337 2.112 3.235 3.584 4.707L38.352 45.5c-1.55-1.705-5.009-2.062-6.934-2.324c-1.092-.149-1.376-.678-1.22-1.686s1.704-1.162 2.982-.774"></svg:path></svg:g>`,
})
export class ArcticonsCookieClickerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCookieRunKingdomIcon],svg[arcticons-cookie-run-kingdom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26.186" cy="27.021" r="10.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.377 43.16l2.996-6.374l1.006-2.133m1.906-9.749a2.617 2.617 0 0 1 1.09 3.385l-1.08 2.295m-4.322-3.563l.892-1.307a2.604 2.604 0 0 1 3.418-.807"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.078 32.485c0 1.49-1.208 2.169-2.699 2.169L9.374 36.79c-.897-.338-2.518-1.765-1.694-4.305c.46-1.417 1.208-2.698 2.699-2.698s2.699 1.208 2.699 2.698M9.374 36.79c3.02.488 13.788 3.998 16.28 6.71c3.151-2.453 8.576-4.487 8.576-4.487"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.708 37.617c-.478 1.276-.757 3.33 2.573 3.33S39.813 37 39.813 37c1.576-2.134 3.37-4.467-.558-4.467s-5.43 1.502-5.43 1.502m-20.907-2.463s4.135 1.88 6.352 3.175m14.7-9.833c-.977 4.028-4.347 7.857-11.227 7.738m3.443-16.001c-.272 3.956-2.386 7.405-4.998 7.326s-.758-4.348-.758-4.348c-1.496 3.909-4.009 5.684-6.202 5.983m3.609-.08c2.294.598 5.604.519 5.604.519m7.638-6.98c-1.416 2.014-4.901 6.222-4.901 6.222c-.543-.2-.942-.858-.942-.858"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.92 26.023c1.072.303 1.859 1.356 1.859 2.598c0 1.48-1.128 2.684-2.513 2.684s-2.513-1.204-2.513-2.684c0-1.327.9-2.437 2.086-2.655m11.305-.398v-.01c.265-.863.104-1.811-.513-2.523c-.768-.882-2-1.119-3.063-.692m-1.773 2.2a2.6 2.6 0 0 0 .588 2.172a2.64 2.64 0 0 0 2.494.854"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.025 28.617c1.017-1.59 3.968-3.703 3.968-3.703m-2.659-7.412c-.505-2.26 2.66-5.344 2.66-5.344c-.24-2.42-2.513-4.52-6.463-4.717m-4.543.267c-4.855 1.459-5.613 5.487-5.613 5.487c2.765.585 3.974 5.255 3.974 5.255"></svg:path><svg:circle cx="24.219" cy="6.88" r="2.38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.933 8.882s.727 2.04.953 3.262c0 0-.678.998-1.768 2.3c-1.542-.478-4.693-3.376-4.693-3.376m8.293-2.341c-.489 1.756-.276 3.378-.276 3.378l1.728 1.621c3.59-.438 5.238-3.35 5.238-3.35m-7.611 3.949l.2 1.296m-.781-.492l1.339-.286"></svg:path>`,
})
export class ArcticonsCookieRunKingdomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCookpadIcon],svg[arcticons-cookpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.022 25.77a7 7 0 0 0 1.728.23a7 7 0 1 0 0-14a7 7 0 0 0-5.541 2.75A7 7 0 0 0 23.25 8.5a7 7 0 0 0-6.555 4.594A7 7 0 0 0 5.25 18.5a7 7 0 0 0 6.225 6.945L9.662 39.5H32.25l2.168-16.805m-1.266 9.82H14.534"></svg:path>`,
})
export class ArcticonsCookpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoolReaderIcon],svg[arcticons-cool-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.117 21.559c-3.214 4.233 1.383 6.378 1.383 6.378s-4.447 1.601-8.623 3.082m-2.92 1.031c-1.84.646-3.343 1.163-3.96 1.352c-2.186.67-.729-7.652-.729-7.652L14.386 38.927L4.5 24.35s1.2-1.685 2.945-3.692m12.071-4.926s3.585 6.588 7.512 10.41m.298 7.112l-3.68-3.798"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.117 21.559l-15.089 4.584s2.036-5.837 7.746-5.603c5.08.208 7.259-2.154 7.259-2.154a18.8 18.8 0 0 1-4.907-2.995a21 21 0 0 1-4.84-6.318s-2.799 2.831-5.557 2.88s-4.256.16-7.212 3.78c0 0-1.294-4.486-4.793-4.357s-6.023 6.466-9.11 6.9a56.4 56.4 0 0 1 8.656 13.748s.938.403 2.188-1.712s3.147-5.523 5.061-5.554c2.23-.036 4.104 1.583 5.51 1.385m-.176 3.014l14.128-4.551m-8.29 2.67s2.741 3.06 2.32 5.567s2.427 3.937 2.427 3.937"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.472 28.313s2.756 2.185 2.79 5.114s.945 3.79 1.61 4.45l.299-2.069l3.267.973m4.679-15.222l-2.383-1.768"></svg:path>`,
})
export class ArcticonsCoolReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoolapkIcon],svg[arcticons-coolapk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.208 20.416c-4.112-3.263-7.945-6.067-12.057-6.067a9.65 9.65 0 0 0 0 19.302c5.809 0 15.723-11.615 18.649-18.734L43.5 33.65c-2.888-2.22-7.995-5.996-12.8-9.651"></svg:path>`,
})
export class ArcticonsCoolapkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoolblueIcon],svg[arcticons-coolblue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.292 24.01a2 2 0 0 1-1.738 1.01h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.65h-4m-5.5-2.65v3.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-3.3m0 3.299v2m-11.8-3.299a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2m0 1.999v-8m5.5.001v7a1 1 0 0 0 1 1h.3m9.5-17.728v7a1 1 0 0 0 1 1h.3M24 9.992a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2m-5.554 0a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2m-3.455 4.292a2 2 0 0 1-1.737 1.007h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 1.735 1.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.812 5.529a17 17 0 1 1-28.3 18.673"></svg:path>`,
})
export class ArcticonsCoolblueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoolismIcon],svg[arcticons-coolism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.54 26.348v-4.7l2.48 4.705l2.48-4.698v4.698m-9.893-.516c.304.376.685.515 1.215.515h.735c.684 0 1.237-.524 1.237-1.173v-.005c0-.648-.553-1.173-1.237-1.173h-.81c-.684 0-1.239-.526-1.239-1.175h0c0-.65.556-1.177 1.242-1.177h.73c.53 0 .912.14 1.216.515m-4.914-.516v4.704m-4.226-4.704v4.704h2.48m-5.868-4.704c.91 0 1.643.695 1.643 1.558v1.589c0 .863-.734 1.557-1.643 1.557s-1.643-.694-1.643-1.557v-1.59c0-.863.732-1.558 1.643-1.558m-5.013 0c.91 0 1.643.695 1.643 1.558v1.589c0 .863-.733 1.557-1.643 1.557s-1.643-.694-1.643-1.557v-1.589c0-.863.733-1.557 1.643-1.557m-3.37 3.126v.02c0 .86-.734 1.557-1.642 1.557h0c-.908 0-1.643-.697-1.643-1.557v-1.589c0-.86.735-1.557 1.643-1.557h0c.908 0 1.643.697 1.643 1.557v.02"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsCoolismIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoolorsIcon],svg[arcticons-coolors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.158 36.02c-3.863 5.72-10.407 9.48-17.829 9.48c-11.874 0-21.5-9.626-21.5-21.5s9.626-21.5 21.5-21.5c7.421 0 13.965 3.76 17.828 9.48l-.002.003a5.948 5.948 0 0 1-9.765 6.794h0a9.604 9.604 0 1 0-.211 10.757h0a5.948 5.948 0 1 1 9.974 6.485zm-15.339 9.34V33.27m0-18.54V2.64m-8.07 13.55V3.24m0 41.52V31.81m-8 8.85V7.34m24.16 13.45V5.29m0 37.42V27.24"></svg:path>`,
})
export class ArcticonsCoolorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCooltraIcon],svg[arcticons-cooltra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.4 12.737Q40.714 24 30.4 35.263"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.727 24.18c0-13.838 24.718-8.223 24.718 0c0 7.66-24.718 13.681-24.718 0m34.241-3.626a16.2 16.2 0 0 1 0 6.903q4.61-3.457 0-6.903"></svg:path>`,
})
export class ArcticonsCooltraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoopIcon],svg[arcticons-coop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.49 36.883A14 14 0 0 1 24 38c-7.732 0-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14a13.96 13.96 0 0 1-4.284 10.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.467 42.189c-1.488-7.312-4.838-21.72-6.21-26.836c0 0-3.235 9.099-1.164 17.352c.208.827.883 3.293.883 3.293a1.983 1.983 0 0 0 2.205 1.449l3.166-.523"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.468 16.285c-.492 1.817-3.087 10.406-6.003 26.47"></svg:path><svg:path d="M16.068 15.342c-1.392 4.745-1.9 6.28-2.063 7.73c-.345 3.082 2.714 3.733 2.714 3.733m6.112-9.775c-.896 3.446-1.54 5.649-2.077 7.536c-.835 2.943-4.035 2.24-4.035 2.24"></svg:path></svg:g>`,
})
export class ArcticonsCoopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCooperIcon],svg[arcticons-cooper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.39 19.077a4.51 4.51 0 0 0-4.517 4.507v.301a4.51 4.51 0 0 0 4.5 4.524h4.089L5.5 40.14h12.1l6.4-7.526l6.4 7.526h12.1l-9.96-11.73h4.085a4.51 4.51 0 0 0 4.52-4.504v-.305a4.51 4.51 0 0 0-4.5-4.524zm18.207-5.621a5.593 5.593 0 0 1-5.59 5.596h0c-3.087 0-5.589-2.506-5.589-5.596s2.503-5.596 5.59-5.596s5.59 2.505 5.59 5.596z"></svg:path>`,
})
export class ArcticonsCooperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoopvoceIcon],svg[arcticons-coopvoce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5C21.989 19.145 19.145 21.989 2.5 24c16.645 2.011 19.537 4.917 21.5 21.5c2.011-16.645 4.855-19.489 21.5-21.5C28.855 21.989 26.011 19.145 24 2.5"></svg:path>`,
})
export class ArcticonsCoopvoceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoppelIcon],svg[arcticons-coppel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.54 24c0 1.958-1.576 3.545-3.52 3.545S4.5 25.958 4.5 24h0c0-1.958 1.576-3.545 3.52-3.545h0c1.944 0 3.52 1.587 3.52 3.545"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.72 20.43c0 1.957-1.576 3.544-3.52 3.544s-3.52-1.587-3.52-3.545h0c0-1.957 1.576-3.544 3.52-3.544s3.52 1.587 3.52 3.544zm0 7.14c0 1.958-1.576 3.545-3.52 3.545h0c-1.944 0-3.52-1.587-3.52-3.544s1.576-3.545 3.52-3.545h0c1.944 0 3.52 1.587 3.52 3.545zM14.705 24H43.5m-5.778 0v6.07M42.037 24v6.07m-4.316-2.529h4.318"></svg:path>`,
})
export class ArcticonsCoppelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoraIcon],svg[arcticons-cora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.5" ry="15.5"></svg:ellipse><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.5" ry="12"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.867 19.939c1.624 0 2.941 1.372 2.941 3.065v1.992c0 1.692-1.317 3.065-2.94 3.065h0c-1.625 0-2.942-1.373-2.942-3.065v-1.992c0-1.693 1.317-3.065 2.941-3.065m5.879 3.065c0-1.693 1.317-3.065 2.941-3.065m-2.941 0v8.122m-11.757-1.544c-.507.922-1.46 1.544-2.554 1.544c-1.624 0-2.941-1.373-2.941-3.065v-1.992c0-1.693 1.317-3.065 2.941-3.065c1.091 0 2.043.619 2.551 1.538m23.515 3.519c0 1.693-1.307 3.065-2.919 3.065h-1.024c-1.068 0-1.934-.91-1.934-2.03S33.49 24 34.558 24h3.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.354 20.744c.709-.74 1.205-.804 2.574-.804c1.553 0 2.573.711 2.573 2.635v5.486"></svg:path>`,
})
export class ArcticonsCoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronaScannerIcon],svg[arcticons-corona-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 20.473V9.5h-29v10.973a3.527 3.527 0 0 1 0 7.054V38.5h29V27.527a3.527 3.527 0 0 1 0-7.054"></svg:path><svg:rect width="7.054" height="7.054" x="14.986" y="14.986" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".784"></svg:rect><svg:rect width="7.054" height="7.054" x="14.986" y="25.959" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".784"></svg:rect><svg:rect width="7.054" height="7.054" x="25.959" y="14.986" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".784"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.311 28.311h2.351v2.351h-2.351zm2.351-2.352h2.351v2.351h-2.351zm0 4.703h2.351v2.351h-2.351zm-4.703-4.703h2.351v2.351h-2.351zm0 4.703h2.351v2.351h-2.351zM12 5.5H5.5V12m37 0V5.5H36m0 37h6.5V36m-37 0v6.5H12"></svg:path>`,
})
export class ArcticonsCoronaScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronacheckIcon],svg[arcticons-coronacheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.5v-14h-37v14a4.5 4.5 0 0 1 0 9v14h37v-14a4.5 4.5 0 0 1 0-9"></svg:path><svg:rect width="9" height="9" x="12.5" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="9" height="9" x="12.5" y="26.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="9" height="9" x="26.5" y="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.5 29.5h3v3h-3zm3-3h3v3h-3zm0 6h3v3h-3zm-6-6h3v3h-3zm0 6h3v3h-3z"></svg:path>`,
})
export class ArcticonsCoronacheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronalertIcon],svg[arcticons-coronalert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.562 28.419v-6.177a7.54 7.54 0 0 0-5.509-7.244v-.605a2.053 2.053 0 1 0-4.106 0v.605a7.54 7.54 0 0 0-5.509 7.244v6.177l-1.814 2.892a.642.642 0 0 0 .544.984h17.257a.642.642 0 0 0 .577-.924Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.769 32.295a2.113 2.113 0 0 0 4.055 0M21 2.5h6m-3 0v5.089m21.5 12.769v6m0-3h-5.089m-37.911 3v-6m0 3h5.089M27 45.5h-6m3 0v-5.089M37.359 8.549l2.119 2.124m-1.06-1.062l-1.801 1.797m2.834 25.951l-2.124 2.119m1.062-1.06l-1.797-1.801m-25.951 2.834l-2.119-2.124m1.06 1.062l1.801-1.797M8.549 10.641l2.124-2.119m-1.062 1.06l1.797 1.801"></svg:path>`,
})
export class ArcticonsCoronalertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronamelderIcon],svg[arcticons-coronamelder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.12 20v-7.8c0-1.93-.79-2.56-2.38-3.23c-2.14-.91-9.07-3.47-11.21-4.21A5.3 5.3 0 0 0 24 4.5a4.9 4.9 0 0 0-1.51.28c-2.16.7-9.09 3.34-11.23 4.22c-1.55.63-2.38 1.3-2.38 3.23v15.71c0 6.78 3.57 9.26 13.87 15.21a2.5 2.5 0 0 0 1.25.35a3.2 3.2 0 0 0 1.23-.35c10.5-5.64 13.87-8.43 13.87-15.21v-1.73a1.07 1.07 0 0 0-1.1-1.07h-7.83a6.52 6.52 0 1 1 .06-4.06h7.82A1.06 1.06 0 0 0 39.12 20m-15.04-3.5v-1.99m4.59 3.96l1.4-1.41m-1.52 10.63l1.41 1.4m-6.04.45v1.99m-4.59-3.96l-1.4 1.41m-.45-6.04h-1.99m3.96-4.59l-1.41-1.4"></svg:path><svg:circle cx="24.08" cy="12.66" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.38" cy="15.76" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.26" cy="30.4" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.92" cy="33.38" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.62" cy="30.28" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.64" cy="22.94" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.74" cy="15.64" r="1.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCoronamelderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronapasIcon],svg[arcticons-coronapas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.342 30.023H30.21m-12.868 3.091H30.21m-12.521-4.255s-5.507-5.616-.375-6.524"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.677 28.859s-4.44-4.795-3.072-7.53s5.242-1.309 6.17.282"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.317 20.346a1.46 1.46 0 0 1 1.459-1.563V17.76m0-1.426v-1.448m-2.188 2.143h1.438m7.184 14.54H17.342m12.521-2.71s5.507-5.616.375-6.524"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.876 28.859s4.44-4.795 3.071-7.53s-5.242-1.309-6.17.282"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.234 20.346a1.46 1.46 0 0 0-1.459-1.563V17.76m.001-1.426v-1.448m2.189 2.143h-1.439m-.75 4.582v7.248"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.404 6.549H10.612a1.94 1.94 0 0 0-1.985 1.895v33.161a1.94 1.94 0 0 0 1.985 1.895h26.792a1.94 1.94 0 0 0 1.984-1.895V8.444a1.94 1.94 0 0 0-1.984-1.895"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.803 6.343a1.88 1.88 0 0 0-1.949-1.838l-24.55 1.912a1.937 1.937 0 0 0-1.688 2.121"></svg:path>`,
})
export class ArcticonsCoronapasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronatracingIcon],svg[arcticons-coronatracing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.09 29.73a8.77 8.77 0 0 1-6.65 3c-4.85 0-8.08-3.93-8.08-8.78s3.23-8.78 8.08-8.78a8.77 8.77 0 0 1 6.65 3l3.41-2.53a12.66 12.66 0 1 0 0 16.54Z"></svg:path><svg:circle cx="19.78" cy="6.64" r="2.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.38" cy="21.25" r="2.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.43" cy="27.46" r="1.41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.99" cy="40.95" r="2.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6.94" cy="23.99" r="2.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.8" cy="36.27" r="2.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.73 36.64a2.5 2.5 0 0 1 .11.72a2.35 2.35 0 1 1-3.92-1.74m-6.61-16.7a2.34 2.34 0 1 1 2.62-3.85"></svg:path><svg:circle cx="32.99" cy="7.75" r="2.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.28 23.99h2.98m-.64 10.81l3.49-2.81M32 38.83l-1.61-3.43m1.57-25.55l-1.38 2.82M20.46 8.88l.89 2.96"></svg:path>`,
})
export class ArcticonsCoronatracingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronavirusIcon],svg[arcticons-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.308" cy="17.563" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.545" cy="22.744" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.509" cy="27.21" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.137" cy="30.392" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.058" cy="14.351" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.13" cy="19.432" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.187" cy="20.712" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.698" cy="31.346" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.025 11.99l-2.143-5.174m1.312-2.059c.296.714-.291 1.636-1.312 2.059h0c-1.02.422-2.088.186-2.383-.528s.291-1.636 1.312-2.059s2.087-.186 2.383.528m-3.386 10.051l-1.415-1.415m21.214 21.214l-1.415-1.415M11 24H9m30 0h-2m-22.192 9.192l-1.415 1.415m21.214-21.214l-1.415 1.415m-2.074 26.376l-2.143-5.174m4.526 5.702c.296.715-.291 1.636-1.312 2.059h0c-1.02.423-2.087.186-2.383-.528s.291-1.636 1.312-2.059h0c1.02-.422 2.088-.186 2.383.528M11.99 19.025l-5.174-2.143m34.368 14.236l-5.174-2.143m-24.02 0l-5.174 2.143m34.368-14.236l-5.174 2.143M19.025 36.01l-2.143 5.174M31.118 6.816l-2.143 5.174M24 37v2m1.5-31c0 .552-.672 1-1.5 1s-1.5-.448-1.5-1s.672-1 1.5-1s1.5.448 1.5 1m0 32c0 .552-.672 1-1.5 1s-1.5-.448-1.5-1s.672-1 1.5-1s1.5.448 1.5 1M24 9v2m-10.253.626c.39.39.232 1.182-.354 1.767s-1.377.744-1.767.354s-.233-1.182.353-1.768s1.377-.744 1.768-.353m22.627 22.627c.39.39.233 1.182-.353 1.768s-1.377.744-1.768.353s-.232-1.182.354-1.767h0c.585-.586 1.377-.744 1.767-.354M8 22.5c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5m32 0c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5M11.626 34.253c.39-.39 1.182-.232 1.767.354s.744 1.377.354 1.767s-1.182.233-1.768-.353s-.744-1.377-.353-1.768m22.627-22.627c.39-.39 1.182-.233 1.768.353s.744 1.377.353 1.768s-1.182.232-1.767-.354h0c-.586-.585-.745-1.377-.354-1.767M6.288 14.499c.714.295.95 1.363.528 2.383S5.47 18.49 4.757 18.194h0c-.714-.296-.95-1.363-.528-2.383h0c.423-1.021 1.344-1.608 2.059-1.312m36.955 15.307c.714.296.95 1.363.528 2.383h0c-.423 1.02-1.344 1.608-2.059 1.312h0c-.714-.296-.95-1.363-.528-2.383h0c.423-1.02 1.345-1.608 2.059-1.312m-38.486 0c.714-.296 1.636.291 2.059 1.312h0c.422 1.02.186 2.088-.528 2.383s-1.636-.291-2.059-1.312s-.186-2.087.528-2.383m36.955-15.307c.715-.296 1.636.291 2.059 1.312h0c.423 1.02.186 2.087-.528 2.383h0c-.714.296-1.636-.291-2.059-1.312h0c-.422-1.02-.186-2.088.528-2.383M14.499 41.712c.295-.714 1.363-.95 2.383-.528s1.608 1.345 1.312 2.059h0c-.296.714-1.363.95-2.383.528h0c-1.021-.423-1.608-1.344-1.312-2.059M29.806 4.757c.296-.714 1.363-.95 2.383-.528h0c1.02.423 1.608 1.344 1.312 2.059h0c-.296.714-1.363.95-2.383.528h0c-1.02-.423-1.608-1.345-1.312-2.059"></svg:path>`,
})
export class ArcticonsCoronavirusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronawarnIcon],svg[arcticons-coronawarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.8a7.5 7.5 0 0 1 0-15a7.32 7.32 0 0 1 5.3 2.2l9.9-9.9A21.9 21.9 0 0 0 24 2.8a21.5 21.5 0 1 0 15.2 36.7l-9.9-9.9a7.32 7.32 0 0 1-5.3 2.2"></svg:path><svg:circle cx="24" cy="11.3" r="1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.8v-3.6"></svg:path><svg:circle cx="14.8" cy="15.1" r="1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.7 19l-2.6-2.5"></svg:path><svg:circle cx="11" cy="24.3" r="1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 24.3h-3.6"></svg:path><svg:circle cx="14.8" cy="33.6" r="1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.7 29.6l-2.6 2.6"></svg:path><svg:circle cx="24" cy="37.4" r="1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.8v3.7"></svg:path>`,
})
export class ArcticonsCoronawarnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCorosIcon],svg[arcticons-coros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.096 12.644L26.364 5.5l-12.02 7.57l-.512 14.289"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.247 11.62l10.966 7.456v15.825L27.418 42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.94 31.713l-12.36 6.689l-12.334-7.315l-.342-15.227"></svg:path>`,
})
export class ArcticonsCorosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCorplightIcon],svg[arcticons-corplight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 38h37M17.853 19.366c-.293.594-.978.99-1.662.99c-1.076 0-1.956-.891-1.956-1.98v-1.288c0-1.089.88-1.98 1.956-1.98c.685 0 1.37.396 1.662.99m3.856 4.258c-1.07 0-1.944-.891-1.944-1.98v-1.288c0-1.089.875-1.98 1.944-1.98s1.943.891 1.943 1.98v1.288c0 1.089-.874 1.98-1.943 1.98m3.928-3.274c0-1.085.852-1.974 1.893-1.974m-1.893 0v5.329m4.174-1.935c0 1.098.89 1.996 1.977 1.996s1.977-.898 1.977-1.996v-1.298c0-1.098-.89-1.996-1.977-1.996s-1.977.898-1.977 1.996m0-2.096v7.986M17.147 25.98v5.268c0 .451.301.753.753.753h.225"></svg:path><svg:path fill="currentColor" d="M20.432 27.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.432 28.506V32m5.311-3.966v4.505c0 .826-.676 1.502-1.502 1.502c-.45 0-.826-.15-1.05-.45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.241 27.959c.826 0 1.502.676 1.502 1.502v.976c0 .826-.676 1.502-1.502 1.502s-1.502-.676-1.502-1.502v-.976c0-.826.676-1.502 1.502-1.502M27.596 26v6.1m0-2.485c0-.829.678-1.506 1.506-1.506s1.506.677 1.506 1.506V32.1m2.03-6.067v5.2c0 .52.347.867.867.867h.26m-2.08-4.68h1.907"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCorplightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCorreiosIcon],svg[arcticons-correios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.151 38.606h-1.289a3.27 3.27 0 0 1-2.561-1.25l-6.076-7.814c-.3-.399-.3-.948 0-1.346l6.114-7.815a3.22 3.22 0 0 1 2.562-1.25h13.517l-7.687 9.642l-5.605 7.078"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.827 28.869l-.055-.096l-5.637 7.078c-.29.374-.438.84-.416 1.312c0 .64.61 1.443 1.818 1.443h11.884zm14.99-19.475h1.282a3.27 3.27 0 0 1 2.562 1.25l6.114 7.814c.3.399.3.948 0 1.346l-6.137 7.815a3.22 3.22 0 0 1-2.564 1.25H21.55l7.678-9.642l5.614-7.078"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.173 19.131l.055.096l5.614-7.078a2 2 0 0 0 .416-1.312c0-.64-.609-1.443-1.818-1.443H21.55z"></svg:path>`,
})
export class ArcticonsCorreiosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCorrespondentIcon],svg[arcticons-correspondent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.82 7.09c-4.05 3.39-2.58 8.92-.56 11M20.22 23c8.27.28 13.73-.89 18.1-5c4.63-4.36 3.89-7.67 1.74-9.6C35 3.89 21.16 13.61 15 20.56c-4.2 4.75-10.46 13.35-6.16 18c5.08 5.49 14.88.4 21.71-5.58"></svg:path>`,
})
export class ArcticonsCorrespondentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCorruptionOfChampions2Icon],svg[arcticons-corruption-of-champions-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23 20.427h2m-6.128-11.12a3.285 3.285 0 0 1-3.284 3.287h0a3.286 3.286 0 0 1-.001-6.573h0a3.285 3.285 0 0 1 3.285 3.286m14.172 0a1.958 1.958 0 1 1-3.915 0h0c0-1.082.876-1.959 1.957-1.959h0a1.96 1.96 0 0 1 1.958 1.96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.128 9.307a3.285 3.285 0 1 0 6.569 0h0a3.285 3.285 0 0 0-3.284-3.286h0a3.285 3.285 0 0 0-3.285 3.286m7.827 26.646l-2.861 4.739"></svg:path><svg:rect width="1.999" height="2" x="32.577" y="40.546" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".999" ry=".999"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.955 35.953l2.861-4.739m-.481-.854a1 1 0 0 0 .999 1h0a1 1 0 0 0 1-1h0a1 1 0 0 0-1-1h0a1 1 0 0 0-1 1m-6.182-8.635l6.391-3.008m-.576 5.018l-12.988 6.013m11.994-.673l-11.994 5.684m7.458 1.312l-7.604 3.557m-.765 3.872l4.927-2.341M18.872 9.307a3.285 3.285 0 0 1-3.284 3.287h0a3.285 3.285 0 0 1-3.285-3.287h0a3.285 3.285 0 0 1 3.284-3.286h0a3.285 3.285 0 0 1 3.285 3.286M24 20.427v19.916"></svg:path><svg:circle cx="24" cy="17.035" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23 20.427h2M13.906 40.692l-2.861-4.739"></svg:path><svg:rect width="1.999" height="2" x="13.425" y="40.546" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".999" ry=".999"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.184 31.214l2.861 4.739M8.666 30.36a1 1 0 0 0-1-1h0a1 1 0 0 0-1 1h0a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1m17.916-9.278l11.252-2.879l-10.995-2.597L24 4.5l-2.839 11.106l-10.995 2.597l11.252 2.879L24 30.458zM8.457 18.717l6.391 3.008m7.173 8.023L9.033 23.735m12.988 11.024l-11.994-5.684m12.14 10.553l-7.604-3.557m3.442 5.088l4.927 2.341"></svg:path>`,
})
export class ArcticonsCorruptionOfChampions2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCosmosdirektIcon],svg[arcticons-cosmosdirekt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.328h33.172V42.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.603 5.5H42.5v31.897"></svg:path>`,
})
export class ArcticonsCosmosdirektIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCostaIcon],svg[arcticons-costa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.312 20.155h5.094m-2.547 7.69v-7.69m-18.265 5.111v.032a2.547 2.547 0 0 1-2.547 2.547h0A2.547 2.547 0 0 1 8.5 25.298v-2.595a2.547 2.547 0 0 1 2.547-2.548h0a2.547 2.547 0 0 1 2.547 2.548v.031"></svg:path><svg:rect width="5.094" height="7.689" x="15.594" y="20.155" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.547" ry="2.547"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.656 25.297H35.25m-.844 2.548l2.547-7.69l2.547 7.69m-16.691.842c.471-.614 1.063-.842 1.885-.842h1.132c1.06 0 1.918-.86 1.918-1.919v-.008c0-1.06-.858-1.918-1.918-1.918h-1.255a1.92 1.92 0 0 1-1.92-1.92h0c0-1.063.86-1.925 1.924-1.925h1.132c.822 0 1.414-.228 1.885-.842"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCostaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoubIcon],svg[arcticons-coub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.87-9.63 21.5-21.5 21.5c-.56 0-1.11-.02-1.66-.07c.46-1.25 1.06-2.5 1.37-3.71c.61-2.33 1.99-4.13 3.62-5.8c1.28-1.32 2-3 2.96-4.52c.88-1.38 1.71-2.78 2.58-4.17c1.53-2.47 3.1-4.92 4.59-7.42c.3-.5.4-1.17.41-1.77c.01-.88-.83-1.36-1.63-.97c-.37.17-.75.44-.99.76c-1.06 1.41-2.04 2.87-3.11 4.26c-.52.69-1.18 1.27-1.78 1.9c-.24.26-.48.52-.75.76c-.1.09-.3.18-.39.14c-.1-.05-.17-.25-.18-.39c-.01-.61.07-1.23-.01-1.84c-.08-.66-.43-1.2-1.14-1.39c-.68-.19-1.14.19-1.61.6c-.25.23-.59.6-.8.55c-.49-.13-.16-.6-.16-.92c-.02-.95-.41-1.68-1.15-2c-.74-.33-1.63-.11-2.31.5c-.283.254-.396.587-.72.45c-.277-.068-.26-.59-.31-.9c-.38-2.44-.21-4.89-.09-7.34c.04-.78.08-1.56.09-2.34c.01-.84-.4-1.48-1.01-1.65c-.65-.18-1.48.15-1.78.93c-.3.77-.42 1.63-.54 2.46c-.2 1.46-.37 2.92-.5 4.39c-.07.83-.03 1.66-.04 2.5c-.03 1.22-.02 2.45-.12 3.67c-.03.39-.3.83-.59 1.12c-.56.57-1.18 1.07-1.82 1.55c-1.03.79-1.15 1.87-1.16 3.05c-.01 1.76.46 3.38 1.28 4.93c.65 1.24.7 2.52.16 3.85c-.71 1.79-1.4 3.77-2.05 5.59C6.56 38.47 2.5 31.71 2.5 24C2.5 12.13 12.13 2.5 24 2.5S45.5 12.13 45.5 24"></svg:path>`,
})
export class ArcticonsCoubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCouchsurfingIcon],svg[arcticons-couchsurfing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.93 28.92C34.47 28.92 22 28 22 35.51a4.06 4.06 0 0 0 3.78 3.92c1.37 0 4.15-.29 4.15-2.81C30 30 15.63 25.8 15.63 15.44c0-4.92 5.41-6.87 8.68-6.87c3.08 0 8.49 1.95 8.49 8.33c0 6.13-7.33 12.6-16.49 12.6a74 74 0 0 1-13.39-1.27"></svg:path>`,
})
export class ArcticonsCouchsurfingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCountdateIcon],svg[arcticons-countdate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.096 26.575l-3.5 1.925m0 0v-14m-3.417 1.225c-1.05-.875-1.925-1.225-4.2-1.225h-.525c-2.45 0-4.55 2.1-4.55 4.55h0c0 2.45 2.1 4.55 4.55 4.55h4.725v4.9h-9.275m18.279 8.742V43m-22.366-5.758V43"></svg:path><svg:rect width="35.641" height="35.641" x="6.179" y="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsCountdateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCountdownIcon],svg[arcticons-countdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5S2.5 35.874 2.5 24m18 7h7m-7-12.094L24 17m0 0v14"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 24q0-.756.052-1.5"></svg:path><svg:path stroke-dasharray="0 0 2.797 2.797" d="M2.925 19.728c1.794-8.902 9.087-15.812 18.183-17.035"></svg:path><svg:path d="M22.5 2.552Q23.244 2.5 24 2.5"></svg:path></svg:g>`,
})
export class ArcticonsCountdownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCountriesBeenIcon],svg[arcticons-countries-been-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.612 15.498C23.095 19.29 14.659 29.868 14.037 42.5M42.5 14.037q-1.226.06-2.425.217"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:circle cx="25.268" cy="11.037" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.582" cy="15.922" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.752" cy="23.412" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.306" cy="35.575" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.306 35.575h6.778M18.301 24.989L24 28.514m2.602-14.8l2.2 4.416m9.371.792l.986 5"></svg:path>`,
})
export class ArcticonsCountriesBeenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoupleWidgetIcon],svg[arcticons-couple-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.745 20.765a2.71 2.71 0 0 0-2.324-1.316a2.715 2.715 0 0 0-2.533 3.686c.898 2.583 4.857 5.416 4.857 5.416s3.96-2.833 4.857-5.416a2.715 2.715 0 0 0-2.533-3.687a2.71 2.71 0 0 0-2.324 1.317M10 19.449v9.102h4.551m16.676-9.102l-3.015 9.102l-3.016-9.102M33.449 24h2.967M38 28.551h-4.551v-9.102H38"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsCoupleWidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCourseraIcon],svg[arcticons-coursera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.002 30.026c-2.067 3.085-5.577 4.942-9.34 4.942c-6.173 0-11.178-4.91-11.178-10.968s5.005-10.968 11.178-10.968c3.762 0 7.272 1.857 9.34 4.94l9.233-5.364C40.234 6.32 33.215 2.5 25.662 2.5C13.568 2.5 3.763 12.126 3.763 24s9.805 21.5 21.9 21.5c7.553 0 14.573-3.822 18.574-10.112z"></svg:path>`,
})
export class ArcticonsCourseraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCourseraAlt1Icon],svg[arcticons-coursera-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.968 24.945h2.412m.62 1.861l-1.791-5.512l-1.861 5.512m3.032-1.861h-2.343m-10.051-3.651v5.512m0-2.756h1.792m-1.792-2.756h2.756m-2.756 5.512h2.756m-8.039-.62c.33.418.845.65 1.378.62h.826a1.378 1.378 0 1 0 0-2.756h-.895a1.378 1.378 0 0 1 0-2.756h.826a1.48 1.48 0 0 1 1.378.62m8.061 3.025l1.797 1.867m-3.637-.081v-5.53h1.798a1.867 1.867 0 0 1 0 3.733h-1.798m-12.875.011l1.798 1.867m-3.638-.081v-5.53h1.798a1.867 1.867 0 1 1 0 3.733h-1.798m-4.864-3.634v3.652a1.792 1.792 0 1 0 3.583 0v-3.652m-8.502 3.672a1.806 1.806 0 1 0 3.611 0v-1.84a1.83 1.83 0 0 0-1.824-1.84h-.016a1.775 1.775 0 0 0-1.771 1.84zm-1.259 0a1.84 1.84 0 0 1-3.68 0v-1.84a1.83 1.83 0 0 1 1.824-1.84h.016a1.775 1.775 0 0 1 1.772 1.84"></svg:path>`,
})
export class ArcticonsCourseraAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidalertIcon],svg[arcticons-covidalert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.04 11.85H18.96l-7.11 7.11v10.08l7.11 7.12h10.08l7.12-7.12V18.96zM24 38.3l-3.58 6.2h7.16zm-10.11-4.19l-6.92 1.85l5.07 5.07zM9.7 24l-6.2-3.58v7.16zm4.19-10.11l-1.85-6.92l-5.07 5.07zM24 9.7l3.58-6.2h-7.16zm10.11 4.19l6.92-1.85l-5.07-5.07zM38.3 24l6.2 3.58v-7.16zm-4.19 10.11l1.85 6.92l5.07-5.07zM24 32.18v-4.13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 28.05l4.22.84l-.59-1.73l3.84-3.03l-1.02-.47l1.02-2.53l-2.37.38l-.59-1.39l-1.68 2.11h-.64l1.02-4.64l-1.73 1.01L24 15.82l-1.48 2.78l-1.73-1.01l1.02 4.64h-.64l-1.68-2.11l-.59 1.39l-2.37-.38l1.02 2.53l-1.02.47l3.84 3.03l-.59 1.73z"></svg:path>`,
})
export class ArcticonsCovidalertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidalertnyIcon],svg[arcticons-covidalertny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.73 8.32l-7.64 3l-2.78 6L19.2 23L8.55 26.26l.69 4.86l-4.74 3l2.2 1.38l19.67-2.19l-.37 3.36l10.41 3l6.83-6.13l.23-2.09l-8.45 2.77Z"></svg:path>`,
})
export class ArcticonsCovidalertnyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidcertIcon],svg[arcticons-covidcert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.023 10.918h9.384a2.423 2.423 0 0 1 2.423 2.423V30.38m-2.501 8.807H15.508a2.423 2.423 0 0 1-2.423-2.423V19.616m16.308 6.524h-4.349v-4.35h4.35ZM18.52 30.38h10.873m-8.528 3.588h5.87"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.044 15.267h4.35v4.349h-4.35ZM18.52 21.79h4.35v4.35h-4.349Z"></svg:path><svg:circle cx="16.797" cy="13.592" r="6.775" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.886 13.936l2.458 2.463l5.334-5.53M38.836 40.73v-7.155m0 11.925c7.065-2.715 6.66-8.154 6.66-11.4v-2.46a25.2 25.2 0 0 0-6.66-1.14a25.2 25.2 0 0 0-6.66 1.14v2.46c0 3.246-.405 8.685 6.66 11.4m-3.578-8.347h7.155"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.54 42.744a21.503 21.503 0 1 1 10.959-18.97m.001.172a21.5 21.5 0 0 1-1.265 7.338"></svg:path>`,
})
export class ArcticonsCovidcertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidcertAltIcon],svg[arcticons-covidcert-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.15 5.8c2.816-1.412 9.818-1.443 12.628 0c-.002 4.445-.005 10.364-6.314 13.26c-6.3-2.95-6.314-8.818-6.314-13.26m24.246 34.728H13.99a2.84 2.84 0 0 1-2.526-2.526V19.06m6.314-11.365h16.416a2.84 2.84 0 0 1 2.526 2.526v17.048"></svg:path><svg:circle cx="34.573" cy="34.845" r="7.577" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.199 35.23l2.75 2.755l5.964-6.185m-8.507-6.426h-5.051v-5.05h5.051ZM17.778 30.3h10.734m-8.84 4.166h7.135m-3.977-21.72v5.051h-5.052m7.577-5.051h5.051v5.051h-5.051Zm-7.577 7.577h5.051v5.051h-5.051Zm-6.314-12.88v7.576m-3.788-3.914h7.576"></svg:path>`,
})
export class ArcticonsCovidcertAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidcheckIcon],svg[arcticons-covidcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.385 11.23h5.004a1.38 1.38 0 0 1 1.38 1.38v5.005m-25.539 0v-5.004a1.38 1.38 0 0 1 1.38-1.38h5.005m0 25.539h-5.004a1.38 1.38 0 0 1-1.38-1.38v-5.006M19.44 24l3.374 3.648l7.114-7.297m2.243 16.418h-1.786m8.451 3.961v-7.155m0 11.925c7.065-2.715 6.66-8.154 6.66-11.4v-2.46a25.2 25.2 0 0 0-6.66-1.14a25.2 25.2 0 0 0-6.66 1.14v2.46c0 3.246-.405 8.685 6.66 11.4m-3.578-8.347h7.155"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.54 42.744a21.503 21.503 0 1 1 10.959-18.97m.001.172a21.5 21.5 0 0 1-1.265 7.338"></svg:path>`,
})
export class ArcticonsCovidcheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidcheckAltIcon],svg[arcticons-covidcheck-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.642 7.252h8.506v8.506m0 17.012v8.505h-8.506m-17.012 0H7.124V32.77m10.936-8.506l4.496 4.86l9.478-9.721M5.589 5.308c2.705-1.371 9.448-1.383 12.15 0c.012 4.266-.006 9.925-6.075 12.759c-6.05-2.85-6.06-8.49-6.075-12.76m6.075 1.581v7.29m-3.645-3.767h7.29"></svg:path>`,
})
export class ArcticonsCovidcheckAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidscancstIcon],svg[arcticons-covidscancst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.5 42.5h5c2.216 0 4-1.784 4-4v-5m-37 0v5c0 2.216 1.784 4 4 4h5m28-28v-5c0-2.216-1.784-4-4-4h-5m-19 0h-5c-2.216 0-4 1.784-4 4v5m26.527.5H15.973a.973.973 0 0 0-.973.973v16.054c0 .537.436.973.973.973h16.054a.973.973 0 0 0 .973-.973V15.973a.973.973 0 0 0-.973-.973M8.5 24h31"></svg:path>`,
})
export class ArcticonsCovidscancstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovpassIcon],svg[arcticons-covpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.33 28.72a6.9 6.9 0 0 1-.355 3.037Q37.163 37.694 23.967 43.5Q10.771 37.694 7.959 31.758a6.9 6.9 0 0 1-.355-3.038V10.774q-.078-2.38 12.902-5.841a14.06 14.06 0 0 1 6.922 0q12.98 3.461 12.98 5.192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.299 13.183L24.093 29.048l-9.409-9.41M39.14 33.196a7.014 7.014 0 0 0-10.215 7.927m-.364-1.696h-2.588m0 1.276v-2.552m3.544-2.291l-2.242-1.294m-.638 1.105l1.276-2.21m4.215-.213l-1.294-2.241m-1.105.638l2.21-1.276m3.757 1.923v-2.588m-1.276 0h2.551"></svg:path>`,
})
export class ArcticonsCovpassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovpasscheckIcon],svg[arcticons-covpasscheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.166 28.046a5.56 5.56 0 0 1-.286 2.448q-2.265 4.783-12.896 9.461q-10.63-4.678-12.895-9.461a5.56 5.56 0 0 1-.286-2.448v-14.46q-.062-1.917 10.393-4.706a11.3 11.3 0 0 1 5.577 0q10.456 2.789 10.456 4.183Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.141 15.528L24.086 28.311l-7.579-7.582m15.898 8.111h2.055m-1.028 2.085v-2.086m-4.806 1.564l1.78-1.028m.153 2.32l-1.043-1.806m-3.38 3.758l1.028-1.78m1.291 1.932l-1.805-1.043m-1.05 4.946v-2.057m2.085 1.028H25.6m10.607-5.02a5.65 5.65 0 0 0-8.228 6.387M32.763 5.5H42.5v9.737m0 17.526V42.5h-9.737m-17.526 0H5.5v-9.737M15.237 5.5H5.5v9.737"></svg:path>`,
})
export class ArcticonsCovpasscheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCowrywiseIcon],svg[arcticons-cowrywise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.59 16.896A14.3 14.3 0 0 0 9.7 24c0 7.898 6.402 14.3 14.3 14.3S38.3 31.898 38.3 24h0c0-7.897-6.402-14.3-14.3-14.3H8.478"></svg:path><svg:circle cx="24" cy="24" r="7.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 16.9l-20.293-.001A21.5 21.5 0 0 0 2.5 24c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24h0c0-11.874-9.626-21.5-21.5-21.5H13.25"></svg:path>`,
})
export class ArcticonsCowrywiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCowsRevengeIcon],svg[arcticons-cows-revenge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.588 11.914c-1.992-.548-5.28-3.113-5.454-8.816c0 0-4.682 6.525-.398 11.93c3.138-.15 4.283-.997 5.852-3.114"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.736 15.027c-1.408 1.669-5.92 15.739-6.376 20.048c-.411 3.885 1.83 4.296 2.615 4.296s3.088-1.346 3.175-4.445c.087-3.068.586-11.145.586-19.899m5.852 13.1c1.12 0 1.893 1.824 1.893 3.925s-.374 3.783-1.893 3.783"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.549 25.103a10.16 10.16 0 0 0 3.94 3.738m.641-11.351c0 1.896-.428 7.633 1.063 9.482m4.299-6.986c0 2.687-.697 6.363-1.634 7.084m.181-7.752a4.4 4.4 0 0 1 .152 1.412c0 1.028-.467 2.653-1.303 2.653s-1.695-1.028-1.695-3.25a6.6 6.6 0 0 1 .395-1.981m12.47-6.238c1.992-.548 5.28-3.113 5.454-8.816c0 0 4.682 6.525.398 11.93c-3.138-.15-4.283-.997-5.852-3.114"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.91 15.027c1.407 1.669 5.92 15.739 6.376 20.048c.41 3.885-1.831 4.296-2.615 4.296s-3.088-1.346-3.176-4.445c-.086-3.068-.585-11.145-.585-19.899m-5.578 22.314c2.141 0 2.59-2.814 2.59-5.28s-1.432-5.298-3.356-5.298c-1.905 0-4.239 1.438-5.743 1.438s-3.838-1.438-5.743-1.438c-1.924 0-3.356 2.833-3.356 5.298s.448 5.28 2.59 5.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.058 28.127c-1.121 0-1.893 1.824-1.893 3.925s.374 3.783 1.893 3.783m6.039-10.732a10.16 10.16 0 0 1-3.94 3.738"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.758 27.786c1.131 1.387 1.58 7.102 1.58 9.381s-1.682 3.698-4.782 3.698s-4.874-2.166-6.733-2.166s-3.632 2.166-6.733 2.166s-4.782-1.42-4.782-3.698s.449-7.994 1.58-9.38m16.668 13.078c-1.42.71-3.118 1.233-6.733 1.233s-5.313-.523-6.733-1.233m16.604-24.206c-3.176.97-8.31 4.071-9.871 4.071s-6.696-3.1-9.87-4.072m16.105-4.744a42 42 0 0 0-6.235-.448a42 42 0 0 0-6.235.448m13.154.866a18 18 0 0 1-6.92 1.562a18 18 0 0 1-6.918-1.563"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.515 17.49c0 1.896.428 7.633-1.062 9.482m-4.3-6.986c0 2.687.698 6.363 1.635 7.084m-.181-7.752a4.4 4.4 0 0 0-.152 1.412c0 1.028.467 2.653 1.303 2.653s1.695-1.028 1.695-3.25a6.6 6.6 0 0 0-.395-1.981"></svg:path>`,
})
export class ArcticonsCowsRevengeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCowsayIcon],svg[arcticons-cowsay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.087 29.92a10.55 10.55 0 0 0-2.435 6.181a10.55 10.55 0 0 0 2.435 6.181M34.913 29.92a10.55 10.55 0 0 1 2.435 6.181a10.55 10.55 0 0 1-2.435 6.181M14.897 43.5h18.234m1.782-15.93a10.55 10.55 0 0 0 2.435-6.18a10.55 10.55 0 0 0-2.435-6.18M13.087 27.57a10.55 10.55 0 0 1-2.435-6.18a10.55 10.55 0 0 1 2.435-6.18m20.016-1.218H14.869m25.664-5.847L37.305 4.5l-3.227 3.645m-20.156 0L10.695 4.5L7.467 8.145"></svg:path><svg:ellipse cx="19.238" cy="22.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.585" ry="3.073"></svg:ellipse><svg:ellipse cx="28.762" cy="22.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.585" ry="3.073"></svg:ellipse>`,
})
export class ArcticonsCowsayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoxhealthnowIcon],svg[arcticons-coxhealthnow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.72 26.557c3.909 0 10.208 3.908 10.208 7.499m10.207-7.499c-3.908 0-10.208-3.909-10.208-7.5m-1.474 3.212a17.8 17.8 0 0 1-6.277 1.373"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.448 10.219c0 4.11-4.61 8.452-9.764 11.05m7.331 10.289a8.84 8.84 0 0 1 2.433 5.508m-2.885-18.539c0 3.526 6.184 7.363 10.021 7.363m-17.656 8.166c0-3.591 6.3-7.5 10.207-7.5m-10.207-7.499c0 3.591-6.3 7.5-10.208 7.5m20.728 10.509c0-6.428 11.276-13.424 18.272-13.424"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.72 23.642c-6.996 0-18.272-6.996-18.272-13.423M7.176 23.642a15.2 15.2 0 0 1 3.978.603m7.154-.275c2.35-1.437 4.255-3.486 4.255-5.443m10.021 7.363c-3.224 0-8.092 2.71-9.57 5.668"></svg:path>`,
})
export class ArcticonsCoxhealthnowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoyoteIcon],svg[arcticons-coyote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.253 21.867c.652-1.791-.272-3.243-2.063-3.243s-3.772 1.452-4.424 3.243s.272 3.243 2.063 3.243s3.772-1.452 4.424-3.243"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.264 21.114H43.5s-.703-10.34-16.614-10.34c-14.53 0-22.386 6.888-22.386 14.531c0 6.525 6.621 11.92 16.714 11.92c9.688 0 19.325-7.428 19.325-7.428l-8.031-3.262s-6.827 6.424-15.159 6.424S7.16 29.02 7.16 25.305c0-4.266 4.467-11.67 18.07-11.67c9.135 0 9.034 7.479 9.034 7.479"></svg:path>`,
})
export class ArcticonsCoyoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCozyIcon],svg[arcticons-cozy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.833 18.136c-2.45-11.53-17.035-11.425-19.735-.113C4.169 20.063 2.944 31.915 9.88 36.76c1.713 1.197 3.805 1.727 5.895 1.727H32.89c.921 0 1.848-.083 2.73-.346c9.698-2.888 9.16-18.236-1.71-20.013z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.17 27.802c2.285 2.493 7.343 2.528 9.638.066"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.603 26.966c-.242.624-.598 1.205-1.267 1.672m9.992-1.672c.242.624.599 1.205 1.268 1.672"></svg:path>`,
})
export class ArcticonsCozyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCozyCouplesIcon],svg[arcticons-cozy-couples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.536 24v13.214c0 1.322-1.322 2.643-2.643 2.643H12.107c-1.321 0-2.643-1.321-2.643-2.643V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.929c-1.321-2.643-5.286-3.965-5.286-6.796c0-2.454 3.965-3.776 5.286-1.133c1.321-2.643 5.286-1.23 5.286 1.321S25.32 29.286 24 31.928"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24L24 8.143L42.5 24M9.464 20.475V9.465h5.286v6.606"></svg:path>`,
})
export class ArcticonsCozyCouplesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCozydriveIcon],svg[arcticons-cozydrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.25 34.43h-8.8a3.71 3.71 0 1 1 0-7.42h0a3.4 3.4 0 0 1 .71.07v-.32a3.71 3.71 0 0 1 7.42 0v.32a4 4 0 0 1 .71-.07a3.71 3.71 0 1 1 0 7.42Z"></svg:path><svg:path fill="currentColor" d="M34.63 29.9a5.4 5.4 0 0 1-1.78.33a4.9 4.9 0 0 1-1.77-.33a.44.44 0 0 0-.59.23a.43.43 0 0 0 .22.58a5.8 5.8 0 0 0 2.13.41a5.8 5.8 0 0 0 2.16-.4a.45.45 0 0 0 .17-.61a.44.44 0 0 0-.53-.21Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.68 13H24.77c-2-.1-5.93-4.23-8.19-4.23h-9.9A2.18 2.18 0 0 0 4.5 11h0v7.29h39v-3.42A1.83 1.83 0 0 0 41.68 13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 18.28h-39V37a2.18 2.18 0 0 0 2.17 2.2h34.65A2.18 2.18 0 0 0 43.5 37h0Z"></svg:path>`,
})
export class ArcticonsCozydriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCplusplusIcon],svg[arcticons-cplusplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.388 27.264a6.406 6.406 0 1 1 .116-6.745"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.728 30.388a11.896 11.896 0 1 1 .216-12.524m-4.44 2.656l4.44-2.656m-.216 12.524l-4.34-3.124"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5L5.92 13.336v20.816L24 44.5l18.08-10.275V13.163zM31.818 24h3.269m-1.634-1.635v3.27M36.631 24h3.27m-1.635-1.635v3.27"></svg:path>`,
})
export class ArcticonsCplusplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCpuIcon],svg[arcticons-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.014 5.5h17.971v3.171H15.014zm0 33.829h17.971V42.5H15.014zM42.5 15.015v17.971h-3.171V15.015zm-37-.001h3.171v17.971H5.5z"></svg:path><svg:rect width="20" height="20" x="14" y="13.347" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.671 8.671h30.657v30.657H8.671z"></svg:path>`,
})
export class ArcticonsCpuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCpuThrottlingTestIcon],svg[arcticons-cpu-throttling-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.475 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.481 25.12c.39.06.841-.013 1.202-.006c1.113.108.281 1.697 1.152 2.008c.424-.88.562-2.06.625-3.087c.086-.691.951-.828 1.128-.14c.499-.108.893-.16 1.116.33c.474-.109.955-.687 1.362-.215c.893.18 1.417-.632 2.233-.586c.544-.16.699.779 1.226.003"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.926 12.76c.627.456.229 2.06 1.33 1.732c.646.52.493 2.25 1.272 2.181c.017-1.034 1.412-1.506 2.037-.737c.278.229.683.776.786.09c.586.883 1.923.037 2.577.87c.735-.221 1.436-.285 2.074.12c.937-.433.827.52 1.156 1.033c.793.334.84-1.43 1.722-.648c.78.419 1.685.156 2.54.302c.836-.186.478 1.793 1.416 1.32c.014-.688.376-1.156 1.101-.745c.726.43 1.02-1.757 1.383-.824c-.16 1.018.96 1.227 1.704 1.113c.87-.114 1.732.705 2.247-.258c.547-.192 2.542.687 3.146.193l.24 23.93"></svg:path>`,
})
export class ArcticonsCpuThrottlingTestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCpuinfoIcon],svg[arcticons-cpuinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.72 40.5H9.28a1.78 1.78 0 0 1-1.78-1.78V9.28A1.78 1.78 0 0 1 9.28 7.5h29.44a1.78 1.78 0 0 1 1.78 1.78v29.44a1.78 1.78 0 0 1-1.78 1.78M9.28 7.5v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m-29.44 39v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.72 40.5H9.28a1.78 1.78 0 0 1-1.78-1.78V9.28A1.78 1.78 0 0 1 9.28 7.5h29.44a1.78 1.78 0 0 1 1.78 1.78v29.44a1.78 1.78 0 0 1-1.78 1.78M9.28 7.5v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m-29.44 39v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3m4.2 3v-3m4.21 3v-3M40.5 9.28h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3M4.5 9.28h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3m-3 4.2h3m-3 4.21h3"></svg:path><svg:rect width="25" height="25" x="11.5" y="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect>`,
})
export class ArcticonsCpuinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCpustatsIcon],svg[arcticons-cpustats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.69 31.17h8.56v7.17h0h-8.56a1.19 1.19 0 0 1-1.19-1.2v-4.78a1.19 1.19 0 0 1 1.19-1.19m8.56 0H24v7.17h-9.75zm9.75 0h9.75v7.17H24zm9.75 0h9.75v6a1.19 1.19 0 0 1-1.19 1.19h-8.56h0zM15.44 24H24v7.17h0h-9.75h0v-6A1.19 1.19 0 0 1 15.44 24M24 24h9.75v7.17H24zm9.75 0h9.75v7.17h-9.75zm-8.56-7.17h8.56V24h0H24h0v-6a1.19 1.19 0 0 1 1.19-1.17m8.56 0h9.75V24h-9.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.94 9.67h7.36a1.19 1.19 0 0 1 1.19 1.19v6h0h-9.74h0v-6a1.19 1.19 0 0 1 1.19-1.19"></svg:path>`,
})
export class ArcticonsCpustatsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCpuzIcon],svg[arcticons-cpuz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="17.184" cy="10.855" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="10.855" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.816" cy="10.855" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.855" cy="17.184" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.145" cy="17.184" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="15.579" height="15.579" x="16.21" y="16.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.947" ry="1.947"></svg:rect><svg:circle cx="10.855" cy="24" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.145" cy="24" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.855" cy="30.816" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.145" cy="30.816" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.184" cy="37.145" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="37.145" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.816" cy="37.145" r="2.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCpuzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCraigslistIcon],svg[arcticons-craigslist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v42.992M24 24L8.798 39.202M24 24l15.202 15.202"></svg:path>`,
})
export class ArcticonsCraigslistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrashontherunIcon],svg[arcticons-crashontherun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.55 34.77S31.86 39 24.3 37.92S14.53 25.66 11.79 27c-2.3 1.14-.42 14.48 8.44 14.48a6.27 6.27 0 0 0 5.47-3.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.83 32.14c-1.88 0-4.21.07-7.06.07c-9.36 0-8.14-8.27-12.42-8.27c-5.5 0-4.45 7.64-3.49 11.25s3.32 8.31 9.57 8.31c4.4 0 5.34-2.72 5.5-4.33m13-9.69A2.74 2.74 0 0 1 41 32a3.58 3.58 0 0 1-3.46 3.14c-2.29 0-4.66-1-4.66-2.37s1.21-3.29 5.05-3.29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.53 16.35A28.24 28.24 0 0 0 6.55 4.5v11.84c0 3.9 2.26 5.33 4.74 5.58a5.11 5.11 0 0 0-1.76 4.74m7.78-3.37c.78-2.27 5.15-6.78 8.15-4.89s-.69 8.6-.69 8.6Zm9.43 4.59A3.07 3.07 0 0 1 31 26a3 3 0 0 1 1.1 4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.77 27a14 14 0 0 0 2 .88M32.13 30c.95.44 1.6.78 1.6.78M37 29.52c1.36-1.07 4.35-4.6 4.41-6.74a11.94 11.94 0 0 0-5.26.36"></svg:path><svg:circle cx="22.11" cy="22.77" r="1.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29 28.75a1.69 1.69 0 0 0 .38-3.08m-2.56 1.9A1.4 1.4 0 0 0 27 28m-9.69-10.06c.07-4.32 4.06-6.72 7-6.72s5.87 3.9 4.61 9.27c0 0-1.05-4.78-4.66-5.2s-6.95 2.65-6.95 2.65m10.06 7.42s1.84-5.83 6.36-5.2s1.45 6.3 1.45 6.3a2.69 2.69 0 0 0-2.67-1.87a27 27 0 0 0-5.14.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.55 11.27c-.29-1.08-1.72-1.56-3.27-1.65c0 0 3.57-1.42 5.47 1c0 0 1.12-3.91 0-5c0 0 3.67 1.41 3.21 5.08a6.19 6.19 0 0 0 .31-5.5s5.53 2.14 4.46 6.42a11.8 11.8 0 0 0 .61-3.21s1.21 5.61-1.83 8.25c0 0 3-1 4.13-3.42c0 0-1.28 4.35-3.71 6a1.46 1.46 0 0 1 .32.88m-18.07-.94C15 17.77 11 11.52 9.77 10.57c.08-.15-1.56 4.65-.23 7.11a6.73 6.73 0 0 0 3.82 2.81"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.91 18.64c-.73.48-3.31 2.58-3.31 2.58"></svg:path>`,
})
export class ArcticonsCrashontherunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrayonIcon],svg[arcticons-crayon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.24 44.338V14.902A11.273 11.273 0 0 0 24 3.662h0a11.273 11.273 0 0 0-11.24 11.24v29.374Z"></svg:path><svg:circle cx="19.611" cy="15.13" r="1.967" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:circle cx="28.389" cy="15.13" r="1.967" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M26.49 20.166a.78.78 0 0 1 .708 1.113a3.581 3.581 0 0 1-6.398-.001a.78.78 0 0 1 .709-1.112Z"></svg:path>`,
})
export class ArcticonsCrayonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrayonAdaptiveIcon],svg[arcticons-crayon-adaptive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M35.661 15.442c-9.345-1.987-19.025-2.7-28.804-2.414c-1.104 2.196-2.842 6.184 1.051 9.393c3.513 2.895 8.34 1.328 10.526-2.313c.762-1.269 1.432-2.385 1.588-4.19c.065-.754 1.027-.847 1.008.103c-.106 5.274 3.06 8.5 6.463 9.163c2.93.571 7.54-1.28 8.405-5.6c.336-1.68.296-2.768-.237-4.142"></svg:path><svg:path d="M10.397 21.604c2.242.57 3.962-.26 5.004-1.887m11.592 2.953c2.176.789 3.969.132 5.165-1.386"></svg:path><svg:path d="M12.324 12.962a17.1 17.1 0 0 1 13.07-6.07C34.84 6.893 42.5 14.553 42.5 24h0c0 9.448-7.659 17.107-17.107 17.107S8.287 33.448 8.287 24q0-.62.045-1.24"></svg:path><svg:path d="M16.814 26.966c1.224-1.566 3.846-1.519 4.988-.715"></svg:path></svg:g>`,
})
export class ArcticonsCrayonAdaptiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreaksIcon],svg[arcticons-creaks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.267 39.856s2.933 3.437 9.761 4.354c0 0 3.987-3.483 5.728-7.882c1.742-4.4.046-7.47.046-7.47l1.696-6.508l-1.97-4.307c3.222 1.267 5.972.504 5.972.504"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.187 42.977s-7.807 1.37-11.015-2.617l-2.246-6.645c-2.428.413-5.224-3.253-5.361-6.095s4.261-8.02 6.92-.412"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.33 27.941c-.641-1.466-2.932.183-.641 2.933m20.805-8.57c-.733 1.788-1.283 4.217-1.283 4.217c1.512 3.528 4.216 4.949 2.796 9.12s-9.212.687-6.462-.872m3.437 5.706c-.216-.534-.977-1.009-2.077-1c-1.936.014-2.47.194-2.551.862c-.167 1.383 5.147 1.42 4.628.138M26.36 25.398c-2.134-.076-3.987 1.718-3.85 3.528s2.338 1.994 3.575 1.834s3.391-.886 3.14-2.677s-1.582-2.64-2.865-2.685"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.272 27.056c-1.111-1.979-4.417-2.54-5.113 1.27m4.667.44c-1.1 2.04-3.382 1.598-3.382 1.598M23.511 8.342c4.491-.427 14.665-4.338 14.665-4.338m-2.732 3.361c1.999-.184 6.979.641 6.979.641m-6.016 3.086c2.38 1.283 7.33.336 7.33.336M37.9 14.025c2.14.52 5.072 2.26 6.6 2.566M23.022 13.78c2.72 3.85 9.532 4.92 9.532 4.92M17.493 9.503c.122-4.735 2.688-5.713 2.688-5.713m-.397 5.5c.061-2.14 7.21-4.98 7.21-4.98m-13.482 6.965c-3.993 2.2-8.21 1.222-8.21 1.222m5.164 3.056c-4.858.458-6.966 2.49-6.966 2.49m5.316 0c-3.208 1.634-3.85 3.62-3.85 3.62m3.392 0c-2.322 1.589-2.292 7.103-2.292 7.103m10.602-15.23c-1.925 2.139-2.337 7.119-2.337 7.119m5.269-7.119c-1.344 3.544-1.496 7.577-1.496 7.577m10.858-.458c-1.548 1.008-6.772 2.451-6.772 2.451m12.786-1.993c1.65.527 5.307.768 5.307.768m-13.192 6.671l.351-.904m9.904.452l.35-.827M14.33 8.342c.06.896 1.07 1.78 1.07 1.78m9.694 1.306c4.457 3.698 10.35 2.108 10.35 2.108m-5.682-2.91c2.691.253 4.121-1.598 4.121-1.598M21.14 17.874c.617 1.934 2.249 2.27 2.249 2.27m-.623-3.049c1.01 1.227 1.739 1.2 1.739 1.2"></svg:path>`,
})
export class ArcticonsCreaksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrealityCloudIcon],svg[arcticons-creality-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.833 6.142l9.291 6.538l8.947-6.538l9.429 6.47l-18.376 13.076L5.5 12.612z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.124 25.688v16.17L5.5 29.327V12.61m37 .002v16.715l-18.376 12.53"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.312 35.592V19.15l-9.188-6.47l-9.312 6.47v16.442"></svg:path>`,
})
export class ArcticonsCrealityCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreativeIcon],svg[arcticons-creative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.627 30.53l8.372-17.559l8.33 17.528m-16.858 4.533l17.056-.06"></svg:path>`,
})
export class ArcticonsCreativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreativeappIcon],svg[arcticons-creativeapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.746 45c-3.15-.038-16.517-7.973-18.06-10.72s-1.353-18.291.254-21S21.104 2.962 24.255 3s16.517 7.973 18.06 10.72s1.353 18.291-.255 21S26.897 45.038 23.747 45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.96 34.99l-9.339-5.558V18.315l9.339-5.558l9.339 5.558V29.43Zm9.339-16.675l10.069 5.936m-28.747-5.936l.025-11.276M23.96 34.99l-9.86 5.658"></svg:path>`,
})
export class ArcticonsCreativeappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreatorStudioIcon],svg[arcticons-creator-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.005 5.5l3.669 5.629l-3.669 5.628M22.551 5.5l3.669 5.629l-3.669 5.628M32.097 5.5l3.669 5.629l-3.669 5.628m-26.597 0h36.999M29.517 28.248l-7.382-4.262a1.27 1.27 0 0 0-1.906 1.1v8.524a1.27 1.27 0 0 0 1.906 1.1l7.382-4.262a1.27 1.27 0 0 0 0-2.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCreatorStudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreatorsIcon],svg[arcticons-creators-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.925 14.164a13.98 13.98 0 0 0-9.87-4.076c-7.709 0-13.957 6.229-13.957 13.912s6.248 13.912 13.957 13.912a13.98 13.98 0 0 0 9.868-4.074m5.384-25.04A21.6 21.6 0 0 0 27.055 2.5c-11.913 0-21.57 9.626-21.57 21.5s9.657 21.5 21.57 21.5a21.6 21.6 0 0 0 15.252-6.296M31.54 19.528a6.36 6.36 0 0 0-4.485-1.851c-3.504 0-6.344 2.83-6.344 6.323a6.3 6.3 0 0 0 1.857 4.47"></svg:path>`,
})
export class ArcticonsCreatorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreatorsAppIcon],svg[arcticons-creators-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.337 28.559a4.68 4.68 0 0 1-4.063 2.364a4.686 4.686 0 0 1-4.68-4.693v-3.05a4.686 4.686 0 0 1 4.68-4.694c1.736 0 3.25.948 4.058 2.356m3.073-3.765l-1.169 3.286M28.38 5.5c-8.548 8.548-15.679 6.01-22.88 13.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.675 5.5c0 7.38-4.675 14.377-10.175 20.998"></svg:path>`,
})
export class ArcticonsCreatorsAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCredIcon],svg[arcticons-cred-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.013 33.553L24.027 43.5l-17.04-9.947V4.5h34.026z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.651 21.872v9.232L24.02 38.5l-12.671-7.396V14.5H24m-8.355-5h21.006v7.715"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.485 29.71l-6.472 3.79l-8.302-4.846v-6.056"></svg:path>`,
})
export class ArcticonsCredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditKarmaIcon],svg[arcticons-credit-karma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.133 7.636V34.37m0-5.681l12.03-12.03m-8.354 8.354L39.5 34.37m-18.635-3.345a6.47 6.47 0 0 1-5.681 3.342h0A6.703 6.703 0 0 1 8.5 27.683V23.34a6.703 6.703 0 0 1 6.684-6.684h0a6.47 6.47 0 0 1 5.68 3.342"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCreditKarmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditMutuelIcon],svg[arcticons-credit-mutuel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.423 7.976L5.5 32.092l4.577 7.927h27.847l4.576-7.927L28.577 7.976z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.864 17.606a6.94 6.94 0 0 1 3.758-1.092c2.819 0 5.25 1.656 6.389 4.052m-13.435 2.736c-.012.082-.012.176-.012.27c0 3.887 3.16 7.046 7.058 7.046c.106 0 .2 0 .294-.012a7.04 7.04 0 0 0 6.095-4.04c.035-.07.058-.129.093-.2m13.329-3.041c.012.082.012.164.012.247c0 3.734-2.924 6.787-6.6 7.022"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.133 17.594a7.044 7.044 0 0 0-10.123 2.971a6.8 6.8 0 0 0-.68 3.007c0 .998.21 1.95.586 2.806c.024.07.047.13.094.188m-6.094 4.04a7.043 7.043 0 0 0 4.016 9.418"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.829 40.024a7.04 7.04 0 0 0 4.603-6.611c0-.999-.211-1.962-.587-2.819a7.05 7.05 0 0 0-6.47-4.24c-.094 0-.188 0-.27.013c-.071 0-.13 0-.188.011"></svg:path>`,
})
export class ArcticonsCreditMutuelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditOneIcon],svg[arcticons-credit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.876 32.72c-.44.586-1.141.982-1.866.982h0c-1.076 0-1.794-.872-1.605-1.948l.223-1.266c.19-1.076 1.216-1.948 2.292-1.948h0c1.076 0 1.794.872 1.605 1.948l-.112.633h-3.896m-2.447 2.581l.567-3.214c.19-1.076-.529-1.948-1.605-1.948h0c-1.076 0-2.102.872-2.291 1.948l-.567 3.214m.567-3.214l.343-1.948m-7.609 2.581c-.251 1.426.7 2.581 2.126 2.581s2.785-1.155 3.037-2.581l.463-2.63c.252-1.426-.7-2.581-2.126-2.581s-2.785 1.156-3.036 2.581zm4.47-11.807c.19-1.076 1.216-1.948 2.291-1.948h0m-1.948 0l-.91 5.162"></svg:path><svg:path fill="currentColor" d="M34.535 14.98c.066-.377-.185-.682-.562-.682s-.735.305-.802.682s.185.681.562.681s.736-.305.802-.681"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.432 17.366l-.91 5.162m-7.982-.983c-.44.588-1.141.983-1.866.983h0c-1.076 0-1.794-.872-1.605-1.948l.224-1.266c.19-1.076 1.215-1.948 2.291-1.948h0c1.076 0 1.794.872 1.605 1.948l-.112.633h-3.896m15.484-4.188l-1.022 5.795c-.095.538.265.974.803.974h.292m-1.379-5.162h2.045m-21.6 2.549l-.006.032c-.251 1.426-1.61 2.581-3.036 2.581h0c-1.426 0-2.377-1.155-2.126-2.58l.464-2.63c.25-1.426 1.61-2.582 3.036-2.582h0c1.425 0 2.377 1.156 2.126 2.581l-.006.032m14.789 1.965c.19-1.076-.529-1.948-1.604-1.948h0c-1.076 0-2.102.872-2.292 1.948l-.223 1.266c-.19 1.076.528 1.949 1.604 1.949h0c1.076 0 2.102-.873 2.292-1.949m-.344 1.948l1.374-7.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsCreditOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditagricoleIcon],svg[arcticons-creditagricole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.97 37.07h38.06M19.91 12.38C10.85 13.5 4.5 16.82 4.5 24c0 4.38 4.51 6.53 8.66 6.53c8.61 0 21.7-8.31 30.34-13.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.98 25.23l6.89-12.85l9.91 19.04m6.72-20.49a86 86 0 0 1-9.1 5.12"></svg:path>`,
})
export class ArcticonsCreditagricoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditagricoleAutobankIcon],svg[arcticons-creditagricole-autobank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.325 29.917h30.08M21.132 10.405c-7.16.885-12.178 3.509-12.178 9.183c0 3.462 3.563 5.161 6.844 5.161c6.804 0 17.15-6.567 23.978-10.416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.187 20.559l5.446-10.154l7.832 15.047m5.311-16.193a68 68 0 0 1-7.192 4.047M7.776 37.068h-2.23m-.558 1.673l1.673-4.957l1.673 4.957m25.073-1.673h-2.23m-.557 1.673l1.672-4.957l1.673 4.957m-19.339-4.957h3.223m-1.611 4.957v-4.957m-6.405.001v3.284c0 .929.744 1.673 1.611 1.673s1.611-.744 1.611-1.673v-3.284m27.355-.001v4.957m0-1.735l2.602-3.222m0 4.957l-1.982-2.478m-5.651 2.478v-4.957l3.284 4.957v-4.957m-18.047 4.958a1.6 1.6 0 0 1-1.612-1.611v-1.673c0-.929.744-1.673 1.612-1.673c.929 0 1.672.744 1.672 1.673v1.611c0 .929-.743 1.673-1.672 1.673m7.545-2.478c.682 0 1.24.558 1.24 1.239c0 .682-.558 1.239-1.24 1.239h-2.044v-4.957h2.044c.682 0 1.24.558 1.24 1.239s-.558 1.24-1.24 1.24m0-.001h-2.044"></svg:path>`,
})
export class ArcticonsCreditagricoleAutobankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditasIcon],svg[arcticons-creditas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.75a9.25 9.25 0 0 0-9.25-9.25H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h23.75a9.25 9.25 0 0 0 9.25-9.25h0A9.25 9.25 0 0 0 33.25 24a9.25 9.25 0 0 0 9.25-9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.526 15.31a12.25 12.25 0 0 0-8.69-3.6c-6.789 0-12.291 5.502-12.291 12.29s5.502 12.29 12.29 12.29c3.394 0 6.467-1.375 8.691-3.6"></svg:path>`,
})
export class ArcticonsCreditasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditcoopIcon],svg[arcticons-creditcoop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.1 36.6c.6.7 1.3 1.6 2 2.5c1.8 2.4 4.6 3.7 5.6 2c.9-1.9.8-5.9.7-8c6.1-8.1 4.9-16.3-.9-20c.7-1.9 2-5.2-.3-6.1c-3.1-.7-4.4 3.6-3.7 5.5a31.2 31.2 0 0 0-7.4.9a24 24 0 0 0-5.1 1.8a6 6 0 0 0-.7.4h0c0 1.2.3.7.5 1.2c.2 0 .4-.1.6-.1a34 34 0 0 1 4.3-.6a51.5 51.5 0 0 1 6.7-.2a25.3 25.3 0 0 0 .9 6.4c.9 2.8 3.1 2 4.3.2a37 37 0 0 0 2.5-4.3a8.6 8.6 0 0 1 2.1 3c1 2.8-.9 5.8-3.4 7.7a29 29 0 0 1-3.4 2.3c.7-2.1 0-4.9-1.9-5.5c-2.4-.1-4.5 2.6-3.7 4.5a6.86 6.86 0 0 0 2.9 2.7a14.46 14.46 0 0 1-8.2.7a19.3 19.3 0 0 1-5.2-2s-.4-.4-.8.3a14.1 14.1 0 0 0 9.4 4.6a15.5 15.5 0 0 0 2.2.1M9.7 18.7c-1.4 1.5-3.3 3.2-4.3 5a8.2 8.2 0 0 0-1 4.8a.72.72 0 0 1 .8.1a38.6 38.6 0 0 1 3.8-5c.6 1.3 1.1 2.6 1.6 3.8c.3.4.7 1.1 1.5.9c2.7-2.1 2.3-6.4 1.9-9a22.1 22.1 0 0 1 6.7-2.4a9.38 9.38 0 0 0-9.2.5c0-2.5-1.4-5.5-3.9-5.1c-.8.2-1.7.3-2.2 1.1c-1 1.2 1.6 5.6 4.3 5.3"></svg:path>`,
})
export class ArcticonsCreditcoopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCredlyIcon],svg[arcticons-credly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M36.198 4.5c-3.25 5.17-4.797 8.54-6.098 15.048"></svg:path><svg:path d="M38.43 30.338c-6.155 9.527-11.732 12.974-16.309 13.15c-11.453.443-13.139-12.072-12.402-18.944C11.312 9.674 22.99-.053 32.992 10.239"></svg:path></svg:g>`,
})
export class ArcticonsCredlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCredlyAltIcon],svg[arcticons-credly-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.043 16.77c-3.22-3.378-6.982-.185-7.495 4.696c-.237 2.255.305 6.363 3.994 6.218c1.474-.058 3.294-1.174 5.253-4.316c.471-.757.748-1.584.682-2.394c-.68.517-.224 1.605.792 1.593c1.693-.02 1.157 1.197.774 2.43c-.399 1.281-.054 2.037.776 2.018c.836-.02 1.794-1.24 2.48-2.517"></svg:path><svg:path d="M13.076 14.887c-1.047 1.697-1.545 2.803-1.964 4.939m8.364 4.681c1.541.658 3.027-.544 3.173-1.673c.19-1.476-.58-1.93-1.395-1.775c-1.76.333-2.78 4.054-1.11 6.012c1.184 1.389 3.287.39 4.687-2.28m3.964-1.398c-.319-2.131-3.25-2.38-3.942 1.393c-.344 1.875.275 2.67 1.08 2.778c.812.11 1.896-.312 2.478-2.559c.424-1.634.65-2.83 1.036-4.52c.44-1.926 1.414-5.549.579-5.938c-1.049-.49-2.748 12.157-.682 13.015c1.42.591 2.585-2.763 3.683-5.444c1.097-2.675 2.616-6.925 1.534-7.55c-.845-.126-1.268 2.236-1.457 3.403c-.702 4.314-1.078 9.3.788 9.296c.908-.002 2.338-1.186 3.11-3.811"></svg:path><svg:path d="M37.608 20.832c-.658 1.957-.92 4.137-.398 5.238c.493 1.039 1.548.495 2.247-.403c.57-.732 1.208-1.494 1.384-2.784"></svg:path><svg:path d="m41.119 20.827l-1.04 7.824c-.484 3.64-3.333 5.765-5.788 4.4c-1.554-.865-.592-3.319 2.949-3.134c1.593.083 3.144.129 4.483-.956c.785-.635 1.265-1.513 1.777-2.465"></svg:path></svg:g>`,
})
export class ArcticonsCredlyAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrewIcon],svg[arcticons-crew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.985 36.7a6.93 6.93 0 0 0 6.93-6.93V13.43a6.93 6.93 0 0 0-6.93-6.93h-19.97a6.93 6.93 0 0 0-6.93 6.93v16.34a6.93 6.93 0 0 0 6.93 6.93h1.51l.027 6.17a.632.632 0 0 0 1.049.473l7.582-6.643z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.804 22.971l3.03-3.029l3.678 3.68l10.903-10.903l3.03 3.028L20.511 29.68z"></svg:path>`,
})
export class ArcticonsCrewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrexIcon],svg[arcticons-crex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.555 15.154l-.097 21.821m-4.61-.118l-.032-21.703l9.745-.214l.021 22.613m-13.606-.578l15.906 1.038m-2.418 2.299l5.755-4.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.632 35.542q0 7.69-5.327 7.958l-24.357-1.722c-4.845-.556-4.343-2.77-1.273-3.776l5.103-1.958l.139-23.372c0-5.455 1.358-7.092 5.722-7.306L34.118 4.5q6.547 0 6.547 8.172zl-10.644-.172l-8.172-.192l-8.225 3.69m1.389-2.941l25.587-9.574"></svg:path>`,
})
export class ArcticonsCrexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCricbuzzIcon],svg[arcticons-cricbuzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.2 3.742C10.779 2.597 1.73 17.822 4.628 33.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.68 4.803C9.667 4.256 3.537 23.789 5.303 34.614M16.716 6.285l-.565 2.977m3.961-4.309l-.907 2.592m3.332-3.092l-.45 1.796m3.47-2.296V5.35M12.932 8.603l.09 3.137m-3.125-.318l.232 3.596m-3.016.368l.805 3.267m-1.466 3.556l-1.31-2.034m.348 5.769L4.3 24.315M28.307 3.689l-.163 1.366m-3.625-2.549l-.166 1.501m-1.929-1.449l-.36 1.872M20.18 2.842l-.634 2.293m-2.35-1.53l-.48 2.68m-3.069-1.128l-.052 2.96m-3.028-.904l.267 3.217m-3.196-.377l.589 3.516m-3.289.486L6.176 17.3m-2.686.253l1.4 3.553m-2.304.974L4.3 24.315m21.278-.741a4.885 4.885 0 0 1 5.414-4.26h0a4.885 4.885 0 0 1 4.26 5.414l-.375 3.143a4.885 4.885 0 0 1-5.414 4.26h0a4.885 4.885 0 0 1-4.26-5.413m-.576 4.837l2.306-19.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.408 30.224c-.898 1.365-2.707 2.13-4.4 1.928h0a4.885 4.885 0 0 1-4.26-5.413l.375-3.144a4.885 4.885 0 0 1 5.414-4.26h0c1.693.202 3.27 1.37 3.823 2.908"></svg:path>`,
})
export class ArcticonsCricbuzzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCricfyTvIcon],svg[arcticons-cricfy-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M43.5 23.836c0 3.923-3.171 7.103-7.084 7.103s-7.084-3.18-7.084-7.103h0c0-3.922 3.172-7.102 7.084-7.102h0c3.913 0 7.084 3.18 7.084 7.102"></svg:path><svg:path d="M39.941 18.927q.51-.278 1.04-.522m-3.968 2.574q.445-.4.922-.76m-3.242 3.48q.323-.507.689-.977m-2.144 4.243q.163-.585.377-1.134m-.845 4.081q.015-.301.041-.597m1.753 1.368c.382-5.23 3.597-8.85 7.673-10.89M31.08 28.504c.352-5.471 3.793-9.196 8.095-11.21M14.992 27.812l17.925-10.13M15.147 29.9l19.069.688m-4.867-6.504L15.13 28.89l15.067-1.67"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28.497 20.177a2.97 2.97 0 0 0-2.429-1.25h-9.715q.007-.065.01-.13a1.993 1.993 0 0 0-1.991-1.997c-1.1 0-1.991.894-1.991 1.996q.003.066.01.131H7.483A2.98 2.98 0 0 0 4.5 21.919v11.697a2.98 2.98 0 0 0 2.984 2.991h18.584a2.98 2.98 0 0 0 2.984-2.991V30.4"></svg:path><svg:path d="M23.736 30.209v1.566a2.05 2.05 0 0 1-2.06 2.05H9.835a2.05 2.05 0 0 1-2.06-2.05V23.76c0-1.136.92-2.05 2.06-2.05h11.84c.856 0 1.587.515 1.899 1.25"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.343 12.689l-3.703 4.567m4.782-5.159a.703.703 0 0 1-.702.704h0a.703.703 0 1 1 .702-.704"></svg:path><svg:path fill="currentColor" d="M6.795 25.173a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0 2.595a.75.75 0 1 1-.75-.75a.75.75 0 0 1 .75.75m0 2.595a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.1 13.935l2.865 3.45m-2.526-4.045a.703.703 0 0 1-.703.704h0a.703.703 0 0 1-.702-.704h0c0-.39.314-.704.702-.704h0c.388 0 .703.315.703.704"></svg:path>`,
})
export class ArcticonsCricfyTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCricutDesignSpaceIcon],svg[arcticons-cricut-design-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.1 25.619c-.262.525-.962.962-1.575.962h0A1.94 1.94 0 0 1 8.6 24.656v-1.225c0-1.05.875-1.925 1.925-1.925h0c.7 0 1.313.35 1.575.963m14.613 3.15c-.263.525-.963.962-1.576.962h0a1.94 1.94 0 0 1-1.925-1.925v-1.225c0-1.05.875-1.925 1.925-1.925h0c.7 0 1.313.35 1.575.963"></svg:path><svg:circle cx="19.887" cy="19.231" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.887 21.506v5.075m-4.724-3.237c0-1.05.874-1.925 1.924-1.925h0m-1.925.087v5.075m22.576-6.65v5.688c0 .525.35.962.962.962h.262m-2.274-5.162h2.1m-9.188.087v3.15c0 1.05.875 1.925 1.925 1.925h0c1.05 0 1.925-.875 1.925-1.925v-3.15m0 3.238v1.837"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCricutDesignSpaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrispyIconPackIcon],svg[arcticons-crispy-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.717 2.555a21.5 21.5 0 0 0-13.67 6.242c-8.396 8.396-8.396 22.009 0 30.405q0 0 0 0c8.396 8.397 22.01 8.397 30.406.001h0l-10.619-10.62A6.5 6.5 0 0 1 25.25 30.5a6.5 6.5 0 1 1 4.596-11.096L40.453 8.797a21.5 21.5 0 0 0-16.736-6.242"></svg:path><svg:circle cx="25.25" cy="24" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.25" cy="24" r="3.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.685 10.565a19 19 0 0 1 0 26.87"></svg:path>`,
})
export class ArcticonsCrispyIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCriticalMapsIcon],svg[arcticons-critical-maps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="19.885" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.959 42.602l1.327-9.324L12.88 24l3.907-7.987l8.769 4.816L24 24l-4.441.237"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.494 14.398l-3.164-1.929l-4.03 4.375"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.769 18.749l4.559-5.326l3.544 2.663l-4.316 4.743m3.246-3.567l2.978 2.477l-5.201 6.242"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 24l5.395 4.144l4.294-5.316l-2.542-2.329m.225 5.482l1.135 5.025l-3.663 3.135l2.196 8.461M5.896 32.228l3.543-1.55l-1.144-3.522l-3.778.828M10.58 9.325l2.569 2.891l2.996-2.177l-1.955-3.337m19.62 0l-1.955 3.337l2.996 2.177l2.569-2.891m6.063 18.659l-3.778-.828l-1.144 3.522l3.543 1.55M26.231 43.76l-.379-3.848h-3.704l-.379 3.848m2.231.125V45.5M9.939 38.061l-1.142 1.142M4.115 24H2.5M9.939 9.939L8.797 8.797M24 4.115V2.5m14.061 7.439l1.142-1.142M43.885 24H45.5m-7.439 14.061l1.142 1.142m-7.593 3.168l.618 1.492M16.39 42.371l-.618 1.492M5.629 31.61l-1.492.618M5.629 16.39l-1.492-.618M16.39 5.629l-.618-1.492M31.61 5.629l.618-1.492M42.371 16.39l1.492-.618M42.371 31.61l1.492.618"></svg:path>`,
})
export class ArcticonsCriticalMapsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCriticalOpsIcon],svg[arcticons-critical-ops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.094 25.73v.044c0 1.923-1.29 3.482-2.88 3.482s-2.879-1.559-2.879-3.482v-3.548c0-1.923 1.29-3.482 2.88-3.482h0c1.59 0 2.879 1.559 2.879 3.482v.043M23.1 29.256c-1.59 0-2.88-1.559-2.88-3.482v-3.548c0-1.923 1.29-3.482 2.88-3.482s2.879 1.56 2.879 3.482v3.548c0 1.923-1.29 3.482-2.88 3.482m4.966 0V18.744h2.846c1.608 0 2.912 1.58 2.912 3.53s-1.304 3.53-2.913 3.53h-2.845m8.018 2.3c.533.839 1.202 1.152 2.132 1.152H39.5c1.198 0 2.169-1.174 2.169-2.623v-.011c0-1.448-.971-2.622-2.168-2.622h-1.42c-1.199 0-2.17-1.176-2.17-2.626h0c0-1.453.973-2.63 2.175-2.63h1.28c.93 0 1.598.312 2.13 1.151M13.788 24h4.346"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCriticalOpsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrocIcon],svg[arcticons-croc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.624 20.606l11.824-5.988a1.92 1.92 0 0 0 .845-2.579l-.393-.776a3.32 3.32 0 0 0-3.545-1.768l-9.345 1.49"></svg:path><svg:circle cx="27.736" cy="12.416" r="2.689" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.594 37.2a12.14 12.14 0 0 1-16.096-4.734a9.23 9.23 0 0 1 4.064-12.404l15.498-7.848"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.594 37.2a1.405 1.405 0 1 0-1.27-2.506c-1.554.787-4.202 1.62-5.704-1.344a5.48 5.48 0 0 1-.375-3.697"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.32 25.68l-.389-.768a1.677 1.677 0 0 0-2.253-.738h0a1.677 1.677 0 0 0-.739 2.254l1.16 2.29a1.83 1.83 0 0 0 2.457.805l1.36-.689l3.747-1.897h0a3.535 3.535 0 0 0-4.75-1.557Zm10.65-5.393l-.39-.768a1.677 1.677 0 0 0-2.252-.738h0a1.677 1.677 0 0 0-.739 2.253l1.16 2.291a1.83 1.83 0 0 0 2.457.805l1.36-.69l3.747-1.897h0a3.535 3.535 0 0 0-4.75-1.556Zm-1.89 3.497l-4.206 2.129m-9.207-6.41l-.289 1.704m3.185-3.171l-.288 1.704m3.185-3.171l-.288 1.704m3.185-3.171l-.289 1.704m3.185-3.171l-.288 1.704m9.022.459l2.63.669l1.017-2.516l2.629.669l1.018-2.516l2.632.668l1.019-2.517"></svg:path><svg:circle cx="27.736" cy="12.416" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsCrocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCromiteIcon],svg[arcticons-cromite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="9.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.718 17.282l8.485-8.485m-8.485 21.921l8.485 8.485"></svg:path>`,
})
export class ArcticonsCromiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCronogramaIcon],svg[arcticons-cronograma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 14.21h25m-25 6.53h4.28m-4.28 6.52h4.28m-4.28 6.53h4.28m17.46-13.05h3.26m-4.28 6.52h4.28m-4.28 6.53h4.28m-15.99 0h6.98m-7.83-10.86L24 27.26l6.67-6.66"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCronogramaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCronometerIcon],svg[arcticons-cronometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.561 19.542a11.94 11.94 0 0 1 2.598 7.631c0 5.994-5.318 16.327-10.592 16.327c-1.234 0-1.098-.28-3.81-.28s-2.577.28-3.811.28c-5.275 0-10.593-10.333-10.593-16.327c0-4.623 2.547-9.911 7.444-9.911c4.466 0 3.643 1.488 6.96 1.488s2.492-1.488 6.959-1.488h.085"></svg:path><svg:circle cx="23.756" cy="30.381" r="8.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.756" cy="30.381" r="4.986" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.756" cy="30.381" r="1.516" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.756 30.381l12.523-16.489m-11.645 2.831c.999-1.312.266-4.192-2.39-6.503c-1.955-1.701-7.992-3.33-10.323-5.72c1.195 5.955 3.842 9.637 7.796 11.537c3.546 1.705 4.433 1.322 4.917.686"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.286 13.04a11 11 0 0 0 5.453 3.528m1.354-1.764c.725.851 2.683.89 4.662-1.891a9.8 9.8 0 0 0 2.037-4.858c-1.234 1.606-2.919 1.077-5.19 2.919c-2.107 1.707-2.224 2.991-1.51 3.83"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.093 14.804a4.6 4.6 0 0 0 2.644-1.891m7.183 1.453c-.06-1.631-.805-2.547-2.256-2.202c-2.043.485-3.82 5.972-2.469 8.421m4.725-6.219c1.586-.381 2.668.09 2.726 1.582c.08 2.097-4.728 5.282-7.45 4.637"></svg:path>`,
})
export class ArcticonsCronometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrontosignswissIcon],svg[arcticons-crontosignswiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.873 10.1h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zm7.45 15.084h4.717v4.717h-4.717zm7.476 0h4.717v4.717h-4.717zm-22.402 0h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zm7.45 7.476h4.717v4.717h-4.717zm-14.926 0h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zm14.926 0h4.717v4.717h-4.717zM9.873 17.642h4.717v4.717H9.873zm7.476 0h4.717v4.717h-4.717zM29.062 10.1v4.263h-4.263v3.672h4.263v4.263h3.672v-4.263h4.259v-3.672h-4.259V10.1z"></svg:path>`,
})
export class ArcticonsCrontosignswissIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrookcatcherIcon],svg[arcticons-crookcatcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.65 19.139c0 8.085-6.56 14.638-14.65 14.638S9.351 27.224 9.35 19.14c0-8.085 6.558-14.64 14.649-14.64H24c8.091 0 14.65 6.554 14.65 14.639"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.163 19.139c0 5.608-4.55 10.155-10.163 10.155s-10.163-4.547-10.163-10.155v0c0-5.608 4.55-10.155 10.163-10.155h0c5.613 0 10.163 4.547 10.163 10.155"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.303 19.139c0 2.375-1.927 4.3-4.303 4.3s-4.303-1.925-4.303-4.3s1.927-4.3 4.303-4.3s4.303 1.925 4.303 4.3m-9.527 8.517c1.243-1.508 3.175-2.393 5.224-2.393s3.98.885 5.224 2.393m5.132 1.802c.322 1.04.486 2.121.486 3.209h0C34.842 38.65 29.988 43.5 24 43.5s-10.842-4.85-10.842-10.833h0c0-1.083.162-2.16.482-3.194"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.294 37.36c0 .714-.578 1.293-1.293 1.294H24a1.294 1.294 0 0 1-.001-2.586H24c.715 0 1.294.579 1.294 1.293z"></svg:path>`,
})
export class ArcticonsCrookcatcherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossIcon],svg[arcticons-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.02 17.98V5.5H17.98v12.48m12.04 12.04H42.5V17.98H30.02M17.98 30.02V42.5h12.04V30.02M17.98 17.98H5.5v12.04h12.48"></svg:path>`,
})
export class ArcticonsCrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossDjIcon],svg[arcticons-cross-dj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.07 14.475c5.234 0 9.5 4.249 9.5 9.493s-4.266 9.507-9.5 9.507c-5.248 0-9.5-4.262-9.5-9.507s4.252-9.493 9.5-9.493"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.926 18.073c.687-.478 1.534-.465 1.898.04c.376.504.107 1.301-.566 1.793c-.686.478-1.534.45-1.897-.054c-.377-.504-.108-1.3.565-1.779m2.207 2.642c.646-.464 1.44-.464 1.776-.013c.323.451.08 1.195-.565 1.66s-1.44.465-1.776.013s-.08-1.195.565-1.66m1.844 2.775c.7-.358 1.493-.185 1.79.385c.295.558-.028 1.302-.727 1.647c-.7.358-1.494.186-1.79-.385c-.296-.558.027-1.301.727-1.647m-5.84-.371c.605-.531 1.44-.558 1.897-.067c.444.491.336 1.328-.256 1.846c-.605.53-1.44.558-1.897.066c-.444-.491-.336-1.327.256-1.845m2.341 2.748c.66-.398 1.48-.292 1.803.252c.336.545.067 1.302-.605 1.7c-.66.411-1.48.292-1.817-.252c-.323-.545-.054-1.302.619-1.7m-3.526 2.363c.66-.411 1.48-.305 1.844.253c.363.557.135 1.34-.525 1.766c-.66.411-1.48.305-1.843-.253c-.364-.557-.135-1.34.524-1.766"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCrossDjIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossMathIcon],svg[arcticons-cross-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.833 5.5h12.334v37H17.833z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.833h37v12.334h-37zm29.159 20.891c.386.333.802.485 1.736.485h.218c.77 0 1.395-.643 1.395-1.437s-.624-1.437-1.395-1.437m-1.954-2.396c.386-.332.803-.483 1.737-.48l.217.001c.771 0 1.396.643 1.396 1.437s-.625 1.437-1.395 1.437m-13.914-1.3l2.6 2.6m0-2.6l-2.6 2.6m-12.896-2.27c0-1.176 1.042-2.102 2.232-1.868c.782.153 1.405.844 1.483 1.653c.058.603-.128 1.197-.535 1.562c-.754.676-3.18 2.498-3.18 2.498h3.725"></svg:path><svg:circle cx="36.333" cy="25.987" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.333" cy="22.013" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.583 24h3.5"></svg:path><svg:circle cx="24" cy="26.917" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.475 22.65c0-.447.17-.852.447-1.144A1.48 1.48 0 0 1 24 21.03c.842 0 1.525.725 1.525 1.619c0 .447-.142.885-.447 1.145c-.315.268-1.084.708-1.08 1.393l.002.22M10.167 24h3"></svg:path><svg:circle cx="36.332" cy="10.654" r="1.863" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.638 13.84c.31.416.783.701 1.567.701h.131c1.029 0 1.865-.852 1.863-1.904l-.005-1.941m-15.569.971h2.75M24 10.292v2.75m-11.179 1.499v-5.75l-3.018 3.862h3.725"></svg:path>`,
})
export class ArcticonsCrossMathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossPlatfromDiskTestIcon],svg[arcticons-cross-platfrom-disk-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.24 39V25.751h2.981a5.796 5.796 0 0 1 5.797 5.797v1.656A5.796 5.796 0 0 1 16.22 39zm12.742-16.751V9h4.338c2.452 0 4.44 1.992 4.44 4.45s-1.988 4.45-4.44 4.45h-4.338m0 7.851h8.778M30.371 39V25.751m-8.353-7.945v.054a4.39 4.39 0 0 1-4.389 4.389h0a4.39 4.39 0 0 1-4.389-4.389v-4.47A4.39 4.39 0 0 1 17.63 9h0a4.39 4.39 0 0 1 4.389 4.389v.054"></svg:path>`,
})
export class ArcticonsCrossPlatfromDiskTestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrosswordIcon],svg[arcticons-crossword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.885 15.173c4.472-.541 5.15 5.318.645 5.318c-1.972 0-5.636-1.705-7.14-1.705a1.396 1.396 0 0 0-1.095 2.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.885 15.173c2.127.3 1.518 2.109.55 2.109c-2.659 0-4.422-1.627-6.94-1.627c-3.414 0-4.132 4.922-1.2 5.617m6.565 3.224l1.693-1.694l1.694 1.694l-1.694 1.694zm1.693-1.692v-2.313m0 5.704v3.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.876 26.272c-.805 1.94-2.123 3.813-6.005 3.813a4.68 4.68 0 0 1-4.74-4.94c0-2.786.686-4.063 2.768-5.404"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.999 27.717v-7.031l-4.568 1.932m1.609 6.349l2.959-1.25m-2.959-5.776v6.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.876 26.272c.395 2.818-1.641 6.59-6.596 6.59c-3.85 0-7.203-2.727-7.203-6.563c0-3.986 3.281-5.777 5.822-6.559"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.385 32.813l35.027 6.176M15.187 4.384L9.011 39.412M38.989 8.588l-6.176 35.027m10.803-28.428L8.588 9.011"></svg:path>`,
})
export class ArcticonsCrosswordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrosswordHebrewIcon],svg[arcticons-crossword-hebrew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5v37M42.5 24h-37m4.925-13.603l1.185 8.827h2.134a4.74 4.74 0 0 0 4.697-4.109l.633-4.718"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.189 16.084h.628a2.37 2.37 0 0 0 2.32-1.886l.792-3.801m21.698 8.766v-6.457a2.37 2.37 0 0 0-2.37-2.37h-2.259c-.466 0-1.325.041-1.888.306"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.414 10.358v7.265c0 .85-.69 1.54-1.54 1.54m6.22 18.5v-6.457a2.37 2.37 0 0 0-2.37-2.37h-1.43c-.465 0-1.324.041-1.887.306v8.522M14.75 38.937V32.48l-2.37-4.917m2.37 4.917a2.37 2.37 0 0 0 2.37-2.37v-2.547"></svg:path>`,
})
export class ArcticonsCrosswordHebrewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrosswordsIcon],svg[arcticons-crosswords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 6.5h24.241v12.12m-12.12 12.121H6.5V6.5m12.759 12.759H43.5V43.5H19.259zM16.707 9.052L9.052 19.195m7.655 0L9.052 9.052"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.441 21.81l-3.253 10.143l-3.062-10.143l-3.254 10.143L21.81 21.81m19.33 19.138v-5.103l-2.743 3.445h3.381"></svg:path>`,
})
export class ArcticonsCrosswordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossyRoadIcon],svg[arcticons-crossy-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.15 11.413l5.221-2.661m16.925 18.529l4.894-2.494m-16.746-8.128L11.15 11.413m8.539 2.623l-3.318-1.691m3.318-2.658l-3.318-1.691m16.925 2.623L26.548 7.18m1.601 34.189l-3.445-1.756m3.445-4.17l-3.445-1.756m13.555-3.412l-3.445-1.756m3.376-3.732l-1.47-.749m0 0l1.658-.845m0 0l-5.082-2.59M21.444 43.5l-10.162-5.179M21.444 43.5l5.147-2.623m1.558.492l10.229-5.212m-10.229-.714l10.229-5.213M21.444 16.659V43.5m11.852-32.881v16.662m5.082-4.088v12.964m-10.229-.714v5.926m-3.445-7.682v5.926m10.11-11.094l-10.11 5.168M16.371 7.996v4.349m3.318-2.658v4.349m1.755 2.623l11.852-6.04m-13.607 3.417l6.859-3.496m-6.859-.853l6.859-3.496M16.371 7.996L23.229 4.5m3.319 1.691L23.229 4.5m3.319 1.691v4.349M12.941 25.82l-3.319-1.691m3.319-2.658L9.622 19.78m0 0v4.349m3.319-2.658v4.349m0 0l5.089-2.649m-3.429 5.883l-3.319-1.691m0-2.388v2.388m3.319-2.407v4.098m0 0l3.405-1.773m-5.065-5.81l5.089-2.649m-8.408.958l5.089-2.65m3.319 1.692l-3.319-1.692m3.319 1.692v4.349m0 0v4.11m-6.88-15.868v7.598m.132 8.352v10.891m14.404-19.63v1.892"></svg:path>`,
})
export class ArcticonsCrossyRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrowdcityIcon],svg[arcticons-crowdcity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25.211" cy="20.168" r="9.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.494 28.683c-1.227 1.35-7.09 4.47-5.159 6.34s4.065-3.813 5.473-1.978c1.012 1.318-.668 2.793-.668 4.97s.79 5.481 3.182 5.485c2.606.004 1.043-2.79 1.043-4.17s.512-1.986 1.309-1.986s1.818 1.22 2.278 3.09s1.59 3.416 3.894 2.698c2.762-.861 2.575-2.637 2.514-3.771s-1.441-4.477-4.231-3.74s-2.392 3.679-2.177 4.813"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.005 29.03c1.943-.078 5.738-.676 5.945 1.279s-4.162 1.538-4.645 1.515s-1.196.04-1.173.738c.018.56.644.736 1.173.805s1.774-.144 3.186 2.216M23.005 9.218L21.992 4.5L19.57 7.535L16.75 7l-.553 2.683H12.61l3.66 4.254a9.46 9.46 0 0 1 2.994-3.243a10.1 10.1 0 0 1 3.741-1.475"></svg:path>`,
})
export class ArcticonsCrowdcityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrowdinIcon],svg[arcticons-crowdin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.351 32.9c-.976 0-1.848-.293-2.569-.865c-.86-.672-1.546-1.675-1.57-2.855c-.01-.597.641-.597.641-.597s1.057-.013 1.57-.013c.51.013.661.724.684.901c.198 1.6 1.105 2.298 1.802 2.615c.418.19.314.787-.558.813m-8.775-8.128c-.86-.101-2.139-.19-2.964-.391c-1.337-.328-1.302-1.526-1.244-1.918c.163-1.173.593-2.258 1.255-3.267c.825-1.236 2.01-2.32 3.534-3.203c2.858-1.652 6.856-2.573 11.249-2.573c3.219 0 6.577.416 6.612.416c.302.038.523.328.51.656c-.01.328-.243.58-.545.606c-.488-.013-.965-.013-1.418-.013c-4.474 0-7.658.605-10.029 1.917c-2.336 1.286-3.962 3.254-5.066 6.168c-.116.252-.5 1.753-1.895 1.602Zm3.904 12.026c-2.22 0-4.312-.956-5.897-2.702c-1.34-1.48-2.15-2.97-2.3-4.882c-.093-1.25.462-1.683 1.214-1.606c.52.05 2.138.127 3.063.318c.694.14 1.157.523 1.273 1.313c.612 4.206 3.27 5.864 4.854 6.22c.278.063.451.242.44.56c-.012.307-.22.56-.497.613c-.706.115-1.445.166-2.15.166m-6.326 3.733c-1.575 0-3.115-.25-3.555-.33c-1.853-.328-3.405-.894-4.737-1.736c-3.185-2.012-5.107-5.563-5.34-9.773c-.057-1-.184-2.907 2.201-2.762c.985.052 2.548.526 3.648.842c1.368.38 2.028 1.433 2.028 2.472c0 5.933 5.384 9.853 7.735 9.853c1.009 0 .638 1.078.197 1.197c-.776.21-1.772.236-2.177.236z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.94 23.1c-.933-.168-1.84-.552-2.726-.77c-2.736-.679-2.27-3.432-2.014-4.188C8.691 10.827 16.599 8.38 22.98 7.728c6.01-.615 12.298-.141 18.156 1.486c.476.128 1.956.486 1.106 1.37c-.535.55-2.62-.026-3.18-.064c-3.435-.256-6.835-.295-10.259.23c-3.622.551-7.348 1.691-10.34 4.1c-1.445 1.166-2.714 2.65-3.564 4.406c-.222.46-.396.922-.548 1.384c-.15.486-.722 2.933-3.412 2.46Zm15.321 1.41c.513-2.289 2.792-5.916 9.845-5.666c1.617.05.877 1.15.08 1.126c-3.988-.138-5.88 2.426-6.87 5.028c-.32.838-1.05.963-1.96.813c-.639-.112-1.334-.187-1.095-1.3z"></svg:path>`,
})
export class ArcticonsCrowdinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrowdsourceIcon],svg[arcticons-crowdsource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.98" cy="10.817" r="2.808" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.98" cy="22.674" r="2.808" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.491" cy="16.849" r="2.808" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.469" cy="16.849" r="2.808" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.3 39.524v-7.801c-.209-1.04-.313-2.705-1.145-4.057c-2.392-3.744-7.488-7.384-10.297-10.4c-1.56-1.769-4.472.935-2.912 2.6l4.472 6.032c3.329 4.68-1.352 9.57 9.881 13.626m9.361 0v-7.801c.208-1.04.312-2.705 1.144-4.057c2.393-3.744 7.49-7.384 10.297-10.4c1.56-1.769 4.577.935 2.913 2.704l-4.473 6.032c-3.328 4.577 1.352 9.465-9.88 13.522"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.3 31.93c-.105-4.368 9.256-4.576 9.36-.207m-9.36 7.801q4.368.936 9.36 0"></svg:path>`,
})
export class ArcticonsCrowdsourceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrrowdIcon],svg[arcticons-crrowd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.434 37.44a3.008 3.008 0 1 0 0 6.016h23.133a3.008 3.008 0 1 0 0-6.016Zm17.742 6.06v-5.762m-.296-22.39h8.216a14.532 14.532 0 1 0 0 7.371H29.88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.88 15.348h.012a6.97 6.97 0 0 0-5.896-3.258h0a6.943 6.943 0 1 0 5.899 10.629h-.015"></svg:path>`,
})
export class ArcticonsCrrowdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCruAppIcon],svg[arcticons-cru-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.238 19.36a3.15 3.15 0 0 1-3.148 3.148h0a3.15 3.15 0 0 1-3.148-3.148v-3.605m7.555 6.753a1.26 1.26 0 0 1-1.259-1.259v-5.494"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.979 14.496a1.26 1.26 0 0 1 1.259 1.26m0-.001a1.26 1.26 0 0 1 1.26-1.259"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.238 15.755a1.26 1.26 0 0 1 1.26-1.259M38.74 19.36a3.15 3.15 0 0 1-3.147 3.148h0a3.15 3.15 0 0 1-3.148-3.148v-3.605M40 22.508a1.26 1.26 0 0 1-1.26-1.259v-5.494m-1.258-1.259a1.26 1.26 0 0 1 1.259 1.26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.74 15.755A1.26 1.26 0 0 1 40 14.496"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.74 15.755A1.26 1.26 0 0 1 40 14.496m-28.058 1.259c0-.695-.567-1.27-1.277-1.453c-.796-.204-1.704.357-1.704 1.176c0 .747.517 1.269 1.225 1.058m1.756-.781a1.26 1.26 0 0 1 1.259-1.259"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.942 15.755a1.26 1.26 0 0 1 1.259-1.259m19.244 1.259c0-.695-.567-1.27-1.277-1.453c-.796-.204-1.705.357-1.705 1.176c0 .747.517 1.269 1.226 1.058m1.756-.781c0-.695.563-1.259 1.259-1.259"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.445 15.755c0-.695.563-1.259 1.259-1.259M10.072 20.52c0-.667-.36-1.182-.969-1.182s-1.075.54-1.103 1.206c0 1.297.592 2.04 2.195 1.805c1.942-.284 1.747-2.989 1.747-2.989m26.798-1.05a.89.89 0 0 1 1.26 0m-1.26 0a.89.89 0 0 1-1.258 0m-6.297 4.198a1.26 1.26 0 0 0 1.26-1.259V19.36m-4.687 3.148a1.26 1.26 0 0 1-1.26-1.259"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.499 21.249a1.26 1.26 0 0 1-1.26 1.26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.499 21.249a1.26 1.26 0 0 1-1.26 1.26m1.26-7.502v6.242m0-6.242c0-1.516-.976-2.558-2.892-2.856c-2.852-.444-3.626 1.187-3.626 1.187m6.518 1.669c0-.81.656-1.466 1.466-1.466m-1.466 5.185c0-.73-.548-1.443-1.43-1.615c-1.18-.231-1.934.494-1.934 1.353c0 .784.608 1.27 1.418.874"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.248 31.756h3.388m.409 3.876l2.617-7.751l2.615 7.751m-.872-2.616h-3.489M9.5 27.88v5.137c0 1.453 1.163 2.616 2.52 2.616s2.519-1.163 2.519-2.616V27.88m18.825 7.752V27.88h2.52a2.606 2.606 0 0 1 2.616 2.595v.022a2.606 2.606 0 0 1-2.595 2.617h-2.542m-6.61 2.519V27.88h2.519a2.606 2.606 0 0 1 2.617 2.595v.022a2.606 2.606 0 0 1-2.595 2.617h-2.542"></svg:path>`,
})
export class ArcticonsCruAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrunchyrollIcon],svg[arcticons-crunchyroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 46a22 22 0 1 1 22-22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.219 26.001a15.714 15.714 0 1 1-8.874-12.288"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.117 25.912a7.571 7.571 0 1 1-8.713-12.148"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.876 45.094a20.286 20.286 0 1 1 26.818-28.409"></svg:path>`,
})
export class ArcticonsCrunchyrollIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrypteeIcon],svg[arcticons-cryptee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.136 31A9.97 9.97 0 0 1 24 34c-5.523 0-10-4.477-10-10s4.477-10 10-10c2.796 0 5.32 1.15 7.136 3H44.31C41.405 8.567 33.42 2.5 24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5c9.42 0 17.405-6.067 20.311-14.5zm2.234-10.5h11.847M45.5 24H33.986m-.616 3.5h11.847"></svg:path>`,
})
export class ArcticonsCrypteeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCryptoPricesIcon],svg[arcticons-crypto-prices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.39 42.5l5.421-11.353l1.378 3.084l3.475-9.628l1.744 2.305l2.515-5.563l1.128 1.43L42.5 9.132"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M14.272 14.082h-1.717"></svg:path><svg:path d="M14.272 14.082v4.846h3.199c1.357 0 2.457-1.086 2.457-2.423s-1.1-2.422-2.457-2.423z"></svg:path><svg:path d="M14.272 18.928v5.165h3.41c1.446 0 2.619-1.157 2.618-2.582c0-1.426-1.172-2.582-2.619-2.583z"></svg:path><svg:path stroke-linecap="round" d="M14.272 24.09h-1.717m1.713.032v1.589m2.779-1.589v1.589m-2.779-13.379v1.59m2.779-1.59v1.59"></svg:path></svg:g>`,
})
export class ArcticonsCryptoPricesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCryptocamIcon],svg[arcticons-cryptocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.83 16.52l-2.77 2.83H6.29a1.8 1.8 0 0 0-1.79 1.8v20.22a1.79 1.79 0 0 0 1.79 1.79h35.42a1.79 1.79 0 0 0 1.79-1.79V21.14a1.79 1.79 0 0 0-1.79-1.79H30.94l-2.77-2.83Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.76 22.25a1.84 1.84 0 1 1 0 3.68a1.84 1.84 0 0 1 0-3.68M24 23.71a7.63 7.63 0 1 1-7.63 7.63A7.63 7.63 0 0 1 24 23.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26.84a2.61 2.61 0 0 1 1.59 4.69l1.24 4.31h-5.66l1.24-4.31A2.61 2.61 0 0 1 24 26.84m10.93-7.49v-3.58A10.93 10.93 0 0 0 24 4.84h0a10.93 10.93 0 0 0-10.93 10.93v3.58"></svg:path>`,
})
export class ArcticonsCryptocamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCryptocomIcon],svg[arcticons-cryptocom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.075 7.437L11.88 17.614l23.604.016l-2.305-10.192zm-2.081 13.378L5.5 25.535l8.866 15.028H17.9l4.186-3.82V34.85l-4.345-4.067v-6.396zm18.275 3.617v6.397l-4.355 4.052l.016 1.925l4.21 3.757h3.506L42.5 25.58l-6.516-4.766zm-1.208-4.343H18.94l1.704 4.3l-.526 4.796l7.765-.012l-.487-4.784z"></svg:path>`,
})
export class ArcticonsCryptocomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCryptomatorIcon],svg[arcticons-cryptomator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.8 31.84l.7-2.12l-1.3-2.45l-1.12-.27l-2.62-3.63c0-2.73-1.6-3.36-3.67-3.3V25l3.92 3.07l-.79.89l.26 2.93l1.93.81m-1.29-4.65l2.37-1.09M24 22.9a2.42 2.42 0 0 1 .78 4.71l1.06 5.12l-1.84.51l-1.86-.51l1.06-5.12a2.42 2.42 0 0 1 .8-4.71m3.26 14.7c.14 1.48.42 3 .73 3h6.83c2.23 0 2.26-8.88.16-8.88h-1.17m-28.61.12l-.7-2.12l1.3-2.45L6.92 27l2.62-3.63c0-2.73 1.6-3.36 3.67-3.3V25l-3.92 3.05l.79.89l-.26 2.93l-1.93.81m1.4-4.63l-2.37-1.09M20.86 37.6c-.14 1.48-.42 3-.74 3h-6.83c-2.22 0-2.26-8.88-.16-8.88h1.18m15.62-15.87h-3v-.76a1.52 1.52 0 0 1 3 0Zm-8.81 0h-3v-.76a1.52 1.52 0 0 1 3 0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.31 19.59H14.69a1.48 1.48 0 0 0-1.48 1.48v6.24a10.79 10.79 0 0 0 21.58 0v-6.24a1.48 1.48 0 0 0-1.48-1.48M24 7.31A10.79 10.79 0 0 1 34.79 18.1v0a1.49 1.49 0 0 1-1.49 1.49H14.69a1.49 1.49 0 0 1-1.49-1.49v0A10.79 10.79 0 0 1 24 7.31"></svg:path>`,
})
export class ArcticonsCryptomatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrystalParaSamsungInternetIcon],svg[arcticons-crystal-para-samsung-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.75 14.25L24 4.5l-9.75 9.75v19.5L24 43.5l9.75-9.75z"></svg:path>`,
})
export class ArcticonsCrystalParaSamsungInternetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrytenIcon],svg[arcticons-cryten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M34.946 42.615a55 55 0 0 1-5.202.699a31.6 31.6 0 0 1-6.663.016c-2.624-.317-5.123-.96-7.118-2.853a9.06 9.06 0 0 1-2.73-5.861c-.365-3.544-.042-7.102-.144-9.714c0-3.995-.023-7.052.01-10.108a11.7 11.7 0 0 1 .846-4.295a8.99 8.99 0 0 1 6.619-5.387a25.2 25.2 0 0 1 8.182-.496c1.984.15 5.914.71 5.914.71"></svg:path>`,
})
export class ArcticonsCrytenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCsharpIcon],svg[arcticons-csharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M29.388 27.264a6.406 6.406 0 1 1 .116-6.745"></svg:path><svg:path d="M33.728 30.388a11.896 11.896 0 1 1 .216-12.524m-4.44 2.656l4.44-2.656m-.216 12.524l-4.34-3.124"></svg:path><svg:path d="M24 3.5L5.92 13.336v20.816L24 44.5l18.08-10.275V13.163z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.612 26.991v-5.982m2.55 5.982v-5.982m-3.715 1.623h4.88m-4.88 2.736h4.88"></svg:path>`,
})
export class ArcticonsCsharpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCsoundforandroidIcon],svg[arcticons-csoundforandroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.43 31.87a5.25 5.25 0 0 1-4.56 2.65h0a5.26 5.26 0 0 1-5.26-5.26v-3.42a5.26 5.26 0 0 1 5.26-5.26h0a5.25 5.25 0 0 1 4.56 2.64v1.25m3.44 6.42v1.32A5.89 5.89 0 0 0 29 34.52h3.11a5.26 5.26 0 0 0 5.25-5.26h0A5.25 5.25 0 0 0 32.14 24H28.7a5.25 5.25 0 0 1-5.24-5.26h0a5.26 5.26 0 0 1 5.24-5.26h3.12A5.89 5.89 0 0 1 37 15.79v1.32"></svg:path>`,
})
export class ArcticonsCsoundforandroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCsrRacingIcon],svg[arcticons-csr-racing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.038 17.601C5.804 16.258.891 26.162 7.631 30.177c.737.44 1.662.335 2.406.335h10.212c2.924 0 4.008-1.172 4.475-3.182c.434-1.862-1.079-2.612-2.74-3.3c-2.384-.986-2.994-1.77-2.562-3.566c.334-1.388 1.447-2.412 2.898-2.42h8.312m-.197 12.468l4.002-12.468h6.025c2.016 0 3.087.672 3.036 2.345c-.052 1.712-1.61 3.647-3.176 3.645h-2.267l1.31 6.478"></svg:path>`,
})
export class ArcticonsCsrRacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCsrRacing2Icon],svg[arcticons-csr-racing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.524 10.789C5.741 9.51 1.067 18.932 7.48 22.75c.7.418 1.58.319 2.288.319h9.714c2.781 0 3.812-1.116 4.257-3.027c.413-1.772-1.027-2.485-2.607-3.14c-2.268-.937-2.848-1.683-2.437-3.392c.318-1.32 1.376-2.294 2.757-2.3h7.906m-.188 11.86l3.807-11.86h5.73c1.919 0 2.938.638 2.89 2.23c-.05 1.629-1.533 3.47-3.022 3.467H36.42l1.245 6.163"></svg:path><svg:circle cx="36.842" cy="30.671" r="6.659" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.32 29.04c0-1.522 1.428-2.759 3.045-2.474c1.046.19 1.902 1.142 1.997 2.188c0 .761-.19 1.617-.76 2.093c-1.047.856-4.281 3.33-4.281 3.33h5.041"></svg:path>`,
})
export class ArcticonsCsrRacing2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCtMagazinIcon],svg[arcticons-ct-magazin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.384 21.83c.83-1.107 1.106-2.214 1.106-4.428V16.02m5.185-1.704v16.602c0 1.66 1.107 2.767 2.767 2.767h.83m-6.364-14.666h5.81M22.966 30.917c-.83 1.66-2.767 2.767-4.704 2.767h0c-3.044 0-5.534-2.49-5.534-5.533v-3.598c0-3.043 2.49-5.534 5.534-5.534h0c1.937 0 3.874 1.107 4.704 2.767"></svg:path>`,
})
export class ArcticonsCtMagazinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCtemplarIcon],svg[arcticons-ctemplar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.75 29.63l10.12-8.76m3.27 20.69a43.73 43.73 0 0 0 17.32-28.69a3.3 3.3 0 0 0-1.92-3.52A41.5 41.5 0 0 0 24 6.07A41.5 41.5 0 0 0 7.46 9.35a3.3 3.3 0 0 0-1.92 3.52a43.73 43.73 0 0 0 17.32 28.69a2 2 0 0 0 2.28 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.08 9.66C38.23 7.34 31.75 16 24 22.8C16.25 16 9.77 7.34 6.92 9.66m29.33 19.97l-10.12-8.76"></svg:path>`,
})
export class ArcticonsCtemplarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCtripTravelIcon],svg[arcticons-ctrip-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.682 14.122c6.472 3.873 10.536-5.1 3.899-3.834c-1.685-8.862-12.868-6.713-20.306.82c-5.557-2.167-10.37 2.609-9.744 4.157c.32.793 3.092-.954 3.973-.434c.644.38 1.113 1.288.46 2.512c-4.895 9.192-.537 19.586 7.566 24.01c9.667 5.28 19.51-.43 21.348-3.76c1.618-2.935 2.643-6.748.14-8.345c-1.922-1.226-4.099.969-3.74 2.883c.87 4.636-5.523 10.015-12.22 6.072c-3.817-2.247-3.287-7.025-2.397-10.64c-4.401 7.261 1.22 14.142 6.982 15.408c-17.914-2.466-11.597-19.438-6.381-21.233c2.487-.857 1.883 1.943.065 3.72c4.952.234 6.525-3.374 7.026-7.56c1.984-1.031 3.643-1.107 5.953-2.19c-1.236-.31-2.349-.812-2.625-1.586"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.399 28.942c-.235-1.263-.858-2.284-2.063-2.763c-2.12-.842-3.843 1.723-3.13 3.535c1.472 3.739-2.13 9.244-7.754 9.18m6.932-27.761c0 .908-.736 1.643-1.644 1.643h0a1.644 1.644 0 0 1-1.644-1.643h0c0-.908.736-1.643 1.644-1.643h0c.908 0 1.644.735 1.644 1.643"></svg:path>`,
})
export class ArcticonsCtripTravelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCtrlCProgrammingIdleGameIcon],svg[arcticons-ctrl-c-programming-idle-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.054 24.27l-.02-11.095H39.26V43.5H17.206V24.252Zm-.021-11.095L17.206 24.252"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.207 34.825H8.738V15.577l10.848.018l-.02-11.095h11.228v8.675M19.566 4.5L8.739 15.577"></svg:path>`,
})
export class ArcticonsCtrlCProgrammingIdleGameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCttIcon],svg[arcticons-ctt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.389 16.889v12.175c0 1.13.897 2.046 2.003 2.046h.6m-2.603-10.845h2.103m4.266-3.376v12.175c0 1.13.897 2.046 2.003 2.046h.6m-2.603-10.845h2.103M21.122 29.05c-.69 1.232-1.99 2.061-3.479 2.061c-2.212 0-4.006-1.832-4.006-4.092v-2.66c0-2.26 1.794-4.093 4.006-4.093c1.486 0 2.783.827 3.475 2.054"></svg:path>`,
})
export class ArcticonsCttIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubMbankPlusIcon],svg[arcticons-cub-mbank-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.448 12.827a2.586 2.586 0 0 0-2.586 2.585v5.113a2.586 2.586 0 0 0 5.173 0v-5.113a2.586 2.586 0 0 0-2.587-2.585m5.196-1.747a2.586 2.586 0 0 0-2.586 2.585v5.113a2.586 2.586 0 0 0 5.172 0v-5.113a2.586 2.586 0 0 0-2.586-2.585m7.782 1.191v-.54a2.586 2.586 0 0 0-5.173 0v5.113c0 .375.08.73.223 1.052m7.559-11.764a2.586 2.586 0 0 0-2.586 2.586v2.545a2.586 2.586 0 0 0 5.172 0V8.718a2.586 2.586 0 0 0-2.586-2.586"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.622 35.801v-9.1a2.586 2.586 0 0 0-5.173 0v4.413H13.448v-8.005"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.442 27.236a8 8 0 0 1 .181-15.046m4.869-.124a8 8 0 0 1 .132 15.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.035 21.595l-1.504-2.605h-3.172l1.504 2.605h6.344l1.504-2.605H30.54zv2.52m-1.504-5.125l1.504-2.605l1.504 2.605m-15.428 17v.02c0 .878-.745 1.59-1.663 1.59s-1.664-.712-1.664-1.59v-1.62c0-.878.745-1.59 1.664-1.59s1.663.712 1.663 1.59v.02m4.06-1.61v3.21c0 .878.745 1.59 1.664 1.59s1.663-.712 1.663-1.59V32.8m6.131 2.4c.693 0 1.256.537 1.256 1.2s-.563 1.2-1.256 1.2h-2.071v-4.8h2.071c.693 0 1.256.537 1.256 1.2s-.563 1.2-1.256 1.2m0 0h-2.072"></svg:path>`,
})
export class ArcticonsCubMbankPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubasisIcon],svg[arcticons-cubasis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.082" cy="24" r="5.232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.811 23.81c0-6.468 5.042-11.795 11.415-12.27l-7.04-7.04L5.687 24l19.5 19.5l7.42-7.42c-6.563-.285-11.795-5.612-11.795-12.27"></svg:path>`,
})
export class ArcticonsCubasisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeAcrIcon],svg[arcticons-cube-acr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.03 14.23L24 24.03l16.86-9.73l-16.97-9.8Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.03 33.7L24 43.5V24.03l-16.97-9.8ZM24 43.5l16.86-9.73V14.3L24 24.03Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.347 27.33c.433-.194 2.06-.92 2.211-.979c.198-.12.26-.404.162-.75q-.201-.989-.31-1.941a1.2 1.2 0 0 0-.624-.858l-.019-.009l-2.374-1.37c-.205-.1-.365-.027-.379.17a14.7 14.7 0 0 0 1.287 5.63h0l.01.023zh.002a22.6 22.6 0 0 0 3.634 5.723l-.004.001l.122.139l.004.004h0a19.6 19.6 0 0 0 4.837 4.056c.205.104.37.039.389-.155v-2.376a1.1 1.1 0 0 0-.476-.916l-.019-.013q-.888-.621-1.76-1.326a.99.99 0 0 0-.844-.325c-.146.068-1.808.734-2.253.913m17.849-9.458c1.064-.28 1.961.538 2.004 1.826h0l.094 2.883a2.86 2.86 0 0 1-1.85 2.84h0c-1.064.28-1.96-.539-2.003-1.827v0l-.095-2.883a2.86 2.86 0 0 1 1.85-2.839"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.765 30.522a2.853 2.853 0 0 0 4.166 2.047a4.74 4.74 0 0 0 2.42-3.806m-2.854 3.987v2.605m-3.625 1.95l7.007-3.768"></svg:path>`,
})
export class ArcticonsCubeAcrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeIcon],svg[arcticons-cube-escape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229z"></svg:path>`,
})
export class ArcticonsCubeEscapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeArlesIcon],svg[arcticons-cube-escape-arles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-18.296 5.111c4.565.363 8.445-2.048 8.649-4.868c.218-3.014-3.853-5.27-7.561-5.384c-4.788-.148-9.84 2.028-8.338 5.421c.717 1.62 4.145 2.302 7.147 2.213c4.332-.129 5.857-2.768 2.641-4.241c-1.306-.599-4.335-.774-4.816.074c-.086.15-.622 1.011.88 1.475"></svg:path>`,
})
export class ArcticonsCubeEscapeArlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeCase23Icon],svg[arcticons-cube-escape-case-23-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zM26.735 10.35l6.772 3.91l-8.617 4.975l-6.773-3.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.982 10.295l-11.996-.021l.037 6.774"></svg:path>`,
})
export class ArcticonsCubeEscapeCase23Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeCollectionIcon],svg[arcticons-cube-escape-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-21.674-8.09c1.994 5.672 6.142 5.612 9.389 5.904c5.92.533 6.595 5.233 6.595 5.233m-21.64-7.873c1.2 5.44 4.184 7.966 9.337 7.418c4.267-.455 6.92-1.17 9.886 2.086"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.862 22.382c-2.04-2.223-4.44-.8-7.361-.95"></svg:path>`,
})
export class ArcticonsCubeEscapeCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeSeasonsIcon],svg[arcticons-cube-escape-seasons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229z"></svg:path><svg:circle cx="27.281" cy="15.756" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.506" cy="15.756" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.833" cy="15.756" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.057" cy="15.756" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.281" cy="11.383" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.506" cy="11.383" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.833" cy="11.383" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.057" cy="11.383" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.839" cy="19.878" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.063" cy="19.878" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.169" cy="13.766" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.394" cy="13.766" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.618" cy="13.766" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.721" cy="13.766" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.945" cy="13.766" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.175" cy="17.572" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.726" cy="17.572" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.951" cy="17.572" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.951" cy="21.378" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.726" cy="9.96" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.175" cy="9.96" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.951" cy="9.96" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.951" cy="6.154" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.063" cy="7.654" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.839" cy="7.654" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsCubeEscapeSeasonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeTheLakeIcon],svg[arcticons-cube-escape-the-lake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zM30.53 11.321c.799 1.643 3.608 1.912 1.106 5.196c-2.805 3.682-5.927 1.8-7.863 2.166c-3.78.717-2.782-2.282-6.605-2.576c-1.742-.134-3.539-2.915-.623-5.579c3.673-3.355 6.132-1.2 8.088-1.585c2.694-.532 5.073.683 5.897 2.378"></svg:path>`,
})
export class ArcticonsCubeEscapeTheLakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeTheMillIcon],svg[arcticons-cube-escape-the-mill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-24.281 3.678l12.998-7.504m-13.039-.024l13.08 7.552"></svg:path><svg:ellipse cx="23.945" cy="13.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.701" ry="4.678" transform="rotate(-89.689 23.945 13.729)"></svg:ellipse>`,
})
export class ArcticonsCubeEscapeTheMillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeTheatreIcon],svg[arcticons-cube-escape-theatre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-3.568-2.061L20.435 21.971m14.156-12.29L16.867 19.91M31.023 7.621L13.299 17.85M27.455 5.561L9.731 15.79"></svg:path>`,
})
export class ArcticonsCubeEscapeTheatreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuberiteIcon],svg[arcticons-cuberite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 5.5l18.5 9.25v18.5L24 42.5L5.5 33.25v-18.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.209 32.132l5.624-2.812v-2.237l-2.236-1.118L9.5 29.014V18.987l12.5 6.25v11.79zM38.5 18.986L26 25.236v11.791l9.791-4.895l-5.624-2.813v-2.236l2.236-1.118l6.097 3.048zM26 10.973v5.86l-2 1l-2-1v-5.86l-9.791 4.895L24 21.764l11.791-5.896z"></svg:path>`,
})
export class ArcticonsCuberiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubesolverIcon],svg[arcticons-cubesolver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.303 12.014l22.218 6.744l-.387 23.742l-19.608-9.339zm22.292 6.818L41.697 9.79l-1.836 20.3l-11.57 12.262M6.377 11.94L21.628 5.5l20.069 4.29M14.423 35.912l-1.606-21.831m8.12 24.977l-.536-22.91M7.299 19.829l20.835 7.659m-.148 7.889L7.991 27.026m20.225 8.351l11.949-11.183m-11.8 3.219l12.566-10.186m-2.833-4.908l-1.614 21.147m-2.758-18.232l-.997 22.136m-12.41-21.296l13.637-7.889m-21.221 5.822l15.02-7.124M12.512 9.412l21.214 5.74m4.29-2.833L17.412 7.493"></svg:path>`,
})
export class ArcticonsCubesolverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubexIcon],svg[arcticons-cubex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.164 10.333l17.754 10.25v20.5M24 3.5l17.754 10.25v20.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.082 6.917l17.754 10.25v20.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.836 10.333l-17.754 10.25v20.5M24 3.5L6.246 13.75v20.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.918 6.917l-17.754 10.25v20.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.754 20.584L24 30.834L6.246 20.584M41.754 34.25L24 44.5L6.246 34.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.754 27.416L24 37.666L6.246 27.416"></svg:path>`,
})
export class ArcticonsCubexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCueIcon],svg[arcticons-cue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M41.432 22.974c0-5.127-3.076-18.458-11.28-18.458S6.569 6.567 6.569 16.822c3.076 38.966 34.756 30.14 34.864 6.152"></svg:path><svg:path d="M10.668 33.429c21.991-.068 30.663-8.24 30.663-8.24m-28.059-6.885c2.51-2.065 6.029-1.866 7.878.446s1.336 5.869-1.15 7.962s-6.013 1.939-7.894-.347c-1.88-2.286-1.41-5.845 1.054-7.967m15.333-8.343c2.597-1.14 5.6.983 6.707 4.743s-.102 7.733-2.699 8.874s-5.6-.984-6.706-4.744s.101-7.733 2.698-8.873"></svg:path></svg:g>`,
})
export class ArcticonsCueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuentaDniIcon],svg[arcticons-cuenta-dni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M34.378 14.327s-3.772.09-5.068 2.333c-1.193 2.064-.966 3.62-.966 3.62s.028 6.858.08 9.654c.054 2.796-.643 4.023-2.09 4.023h-4.828"></svg:path><svg:path d="M37.194 19.999h-5.632s.161-2.816 2.816-2.816s2.816 2.816 2.816 2.816m-26.388-2.615s1.77-3.781 6.356-3.298m2.252 5.792h-5.631s.16-2.816 2.815-2.816s2.816 2.816 2.816 2.816"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 15.457v-6a4 4 0 0 1 4-4h6m27 27v6a4 4 0 0 1-4 4h-6m0-37h6a4 4 0 0 1 4 4v6m-37 17.558a9 9 0 0 0 1.05 2.802c.49.844 1.115 1.604 1.787 2.312c.935.984 1.975 1.88 3.152 2.557c1.222.701 2.576 1.156 3.958 1.435c1.38.28 2.796.385 4.203.316"></svg:path>`,
})
export class ArcticonsCuentaDniIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCultOfTheLambIcon],svg[arcticons-cult-of-the-lamb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.08 15.848C18.38 4.105 11.414 4.68 11.414 4.68L9.366 42.279S14.34 43.5 24.081 43.5s14.553-.934 14.553-.934L36.982 4.5s-8.673.97-12.901 11.348Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.746 28.597c0 1.15.349 2.217.945 3.104c.182.27.577.27.758 0c.597-.887.946-1.955.946-3.104s-.349-2.218-.945-3.105a.456.456 0 0 0-.759 0a5.55 5.55 0 0 0-.945 3.105"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.08 24a11.6 11.6 0 0 0-8.974 4.233a.684.684 0 0 0 0 .871c2.133 2.585 5.361 4.233 8.975 4.233s6.842-1.648 8.975-4.233a.684.684 0 0 0 0-.871A11.6 11.6 0 0 0 24.08 24"></svg:path>`,
})
export class ArcticonsCultOfTheLambIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCultfitIcon],svg[arcticons-cultfit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.796 24.09h34.408m-17.21-12.283c1.878 0 3.405 1.538 3.405 3.427c0 1.9-1.527 3.439-3.405 3.439s-3.393-1.539-3.393-3.439c0-1.889 1.516-3.427 3.393-3.427M14.21 40.344l9.784-10.338l9.795 10.338M24 37.54v5.96m0-35.21V4.5M9.539 14.33l6.334 4.218M9.697 33.705l6.176-4.196m16.118-10.825l6.47-4.23m-6.47 15.054l6.176 4.163"></svg:path>`,
})
export class ArcticonsCultfitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCunexIcon],svg[arcticons-cunex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.191 34.148l3.309 3.783M32.749 25.644l5.375 6.143m2.067-2.361l3.309-3.782M32.749 37.931l5.375-6.144M4.5 37.931V25.644l10.751 12.287V25.644m0-7.408v.28a3.84 3.84 0 0 1-3.84 3.84H8.34a3.84 3.84 0 0 1-3.84-3.84V13.91a3.84 3.84 0 0 1 3.84-3.84h3.071a3.84 3.84 0 0 1 3.84 3.84v.28m3.538-4.12v8.447a3.84 3.84 0 0 0 3.84 3.84H25.7a3.84 3.84 0 0 0 3.84-3.84v-8.448m-5.474 21.718h5.474m0 6.144H18.789V25.644H29.54m9.734 1.173a1.15 1.15 0 0 1-2.3.001v0c0-.636.515-1.15 1.15-1.15h0c.636 0 1.15.514 1.15 1.15z"></svg:path>`,
})
export class ArcticonsCunexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuppaIcon],svg[arcticons-cuppa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.999 23.395C7.438 24.822 4.5 27.06 4.5 29.576c0 4.31 8.618 7.804 19.25 7.804S43 33.886 43 29.576c0-2.516-2.938-4.754-7.498-6.181"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.786c0 4.31 4.682 9.885 19.25 9.885S43 33.886 43 29.576"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.182 12.99c0 6.115 4.08 18.064 14.568 18.064s14.567-11.949 14.567-18.063"></svg:path><svg:ellipse cx="23.75" cy="12.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="14.567" ry="4.662"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.652 14.386c-1.704-1.944-7.283-3.369-13.902-3.369s-12.198 1.425-13.903 3.37m26.3 7.739c6.04 1.08 7.353-2.357 7.353-4.943s-.992-4.192-3.276-4.192a2.48 2.48 0 0 0-1.938.944"></svg:path>`,
})
export class ArcticonsCuppaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuprumpdfIcon],svg[arcticons-cuprumpdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.09 30V18h2.037a6 6 0 0 1 6 6h0a6 6 0 0 1-6 6zm12.393-11.964h5.982m-5.982 5.982h3.9m-3.9-5.982V30m-22.948-.031V18.004h4.018a4.018 4.018 0 0 1 0 8.037H9.535"></svg:path>`,
})
export class ArcticonsCuprumpdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuriositystreamIcon],svg[arcticons-curiositystream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.8 4.58v16a9.2 9.2 0 0 0 18.4 0v-16M24 33.86v-4.09"></svg:path><svg:circle cx="24" cy="40.23" r="3.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCuriositystreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuriouscatIcon],svg[arcticons-curiouscat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c3.61 0 5.24-1.49 7.9-3c2.11-1.19 5.2-1.39 6.47-2.72a12.15 12.15 0 0 0 3.32-9.31c0-1.95-.95-4.83-.95-5.6S44.54 5.5 40 5.5c-3.29 0-10.49 8.17-10.49 8.17A11.34 11.34 0 0 0 24 11.92a11.34 11.34 0 0 0-5.53 1.75S11.27 5.5 8 5.5c-4.52 0-.72 15.62-.72 16.39s-1 3.65-1 5.6a12.15 12.15 0 0 0 3.35 9.31c1.27 1.33 4.36 1.53 6.47 2.72C18.76 41 20.39 42.5 24 42.5"></svg:path>`,
})
export class ArcticonsCuriouscatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrenciesIcon],svg[arcticons-currencies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.5 19.125l-13 11.917l13 11.916m13-37.916l13 13l-13 13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.817 33.967a2.58 2.58 0 0 0 2.166.975h1.3a2.167 2.167 0 0 0 0-4.334h-1.408a2.167 2.167 0 1 1 0-4.333h1.3a2.33 2.33 0 0 1 2.167.975m-2.817-2.167v10.834m18.308-14.625a2.88 2.88 0 0 1-2.275 1.083a2.913 2.913 0 0 1-2.925-2.925v-2.817a2.913 2.913 0 0 1 2.925-2.925a3.05 3.05 0 0 1 2.275 1.084m-6.5 2.058h3.684m-3.684 2.167h3.684"></svg:path>`,
})
export class ArcticonsCurrenciesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyIcon],svg[arcticons-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5a21.51 21.51 0 1 0 15.2 6.3A21.46 21.46 0 0 0 24 2.5m-.36 2l.93 1.84l2.05.28l-1.46 1.44l.37 2l-1.84-.94l-1.82 1l.33-2l-1.5-1.46l2-.32Zm-8.29 2.43l.82 1.62l1.8.24l-1.29 1.28l.32 1.79l-1.61-.86l-1.6.87l.29-1.8l-1.32-1.22l1.8-.29Zm17.14-.34l.93 1.84l2 .28L34 10.16l.37 2l-1.84-.94l-1.82 1l.33-2l-1.5-1.43l2-.32Zm-8.59 5.46h.1a11.92 11.92 0 1 1-.11 0Zm-14.42 1l.83 1.62l1.8.25l-1.29 1.28l.33 1.8l-1.62-.83l-1.6.83l.28-1.8L6.9 15l1.79-.27Zm29-.34l.94 1.85l2 .28L40 16.29l.37 2l-1.84-.94l-1.82 1l.33-2l-1.5-1.42l2-.32ZM7.16 21.6L8 23.22l1.8.25l-1.3 1.28l.32 1.79l-1.61-.83l-1.61.86l.29-1.79l-1.32-1.26l1.8-.28Zm33.65.09l.79 1.56l1.74.24l-1.24 1.24l.31 1.72l-1.55-.8l-1.55.83l.28-1.73l-1.27-1.21l1.73-.27ZM9.49 29.88l.82 1.62l1.8.24L10.82 33l.33 1.79L9.53 34l-1.6.86l.28-1.79L6.9 31.8l1.8-.28Zm29 0l.84 1.64l1.82.24L39.87 33l.33 1.81l-1.64-.81l-1.62.88l.28-1.82l-1.33-1.27l1.83-.28ZM15.35 36l.82 1.63l1.8.24l-1.29 1.28l.32 1.77l-1.62-.83l-1.6.86l.29-1.79l-1.31-1.26l1.8-.28Zm17.14 0l.82 1.62l1.8.24l-1.29 1.28l.33 1.79l-1.62-.83l-1.59.85l.29-1.78l-1.32-1.27l1.8-.28Zm-8.85 2.26l.82 1.63l1.81.23L25 41.4l.33 1.79l-1.63-.83l-1.6.86l.29-1.79l-1.32-1.25l1.8-.29Zm0 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.46 28.8a4.22 4.22 0 0 1-3.23 1.51h0A4.23 4.23 0 0 1 20 26.08v-4.16a4.23 4.23 0 0 1 4.23-4.23h0a4.24 4.24 0 0 1 3.25 1.53m-9.51 3.25h7.36m-7.36 3.09h7.36"></svg:path>`,
})
export class ArcticonsCurrencyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyBitcoinIcon],svg[arcticons-currency-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.53 24a4.399 4.399 0 0 1 0 8.797h-7.258V15.203h7.257a4.399 4.399 0 0 1 0 8.797m0 0h-7.257m0 8.797h-2.2m2.2-17.594h-2.2m4.399 19.793v-2.199m4.398 2.199v-2.199m-4.398-17.594v-2.199m4.398 2.199v-2.199"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyBitcoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyConveterIcon],svg[arcticons-currency-conveter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5a4 4 0 0 0-4 4v8.553a4 4 0 0 0 4 4h8.553a4 4 0 0 0 4-4V9.5a4 4 0 0 0-4-4z"></svg:path><svg:path d="M11.192 17.174c.507.637 1.115.956 2.027.956h1.216c1.115 0 2.027-.956 2.027-2.124h0c0-1.168-.912-2.124-2.027-2.124h-1.317c-1.115 0-2.027-.955-2.027-2.123h0c0-1.168.912-2.124 2.027-2.124h1.216c.912 0 1.52.213 2.026.956m-2.634 8.495V8.467M9.5 25.947h8.553c2.216 0 4 1.784 4 4V38.5c0 2.216-1.784 4-4 4H9.5c-2.216 0-4-1.784-4-4v-8.553c0-2.216 1.784-4 4-4"></svg:path><svg:path d="M17.338 31.68c0-1.606-1.21-2.811-2.823-2.811h0c-1.613 0-2.822 1.205-2.822 2.811v5.087c0 .536-.135 1.205-.538 1.607l-.94 1.205h7.123m-4.032-5.087h-2.957M29.947 5.5H38.5c2.216 0 4 1.784 4 4v8.553c0 2.216-1.784 4-4 4h-8.553c-2.216 0-4-1.784-4-4V9.5c0-2.216 1.784-4 4-4"></svg:path><svg:path d="M38.082 17.793c-.677.803-1.624 1.338-2.843 1.338h0c-2.03 0-3.655-1.606-3.655-3.614v-3.481c0-2.008 1.624-3.615 3.655-3.615h0c1.083 0 2.166.536 2.843 1.34m-7.717 2.677h4.062m-4.062 2.543h4.062m-4.48 10.966a4 4 0 0 0-4 4V38.5a4 4 0 0 0 4 4H38.5a4 4 0 0 0 4-4v-8.553a4 4 0 0 0-4-4z"></svg:path><svg:path d="m37.711 28.869l-3.487 5.355l-3.488-5.355m3.488 10.71v-5.355m-3.354 0h6.707m-6.707 2.677h6.707"></svg:path></svg:g>`,
})
export class ArcticonsCurrencyConveterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyDollarIcon],svg[arcticons-currency-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.52 30.877c1.08 1.404 2.432 1.928 4.314 1.928h2.605a4.394 4.394 0 0 0 4.389-4.399h0a4.394 4.394 0 0 0-4.39-4.398h-2.877a4.394 4.394 0 0 1-4.39-4.399h0a4.394 4.394 0 0 1 4.39-4.398h2.605c1.882 0 3.235.523 4.313 1.927M24 34.996V13.004"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyDollarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyDongIcon],svg[arcticons-currency-dong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.5 23.9a4 4 0 1 0-8 0v2.6a4 4 0 1 0 8 0m0 4v-16m-9 19h10m-3-17h4"></svg:path>`,
})
export class ArcticonsCurrencyDongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyEuroIcon],svg[arcticons-currency-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.525 30.695a5.89 5.89 0 0 1-4.516 2.102h0a5.9 5.9 0 0 1-5.9-5.9v-5.794a5.9 5.9 0 0 1 5.9-5.9h0a5.89 5.89 0 0 1 4.535 2.125M15.91 21.862h6.598M15.91 26.18h6.598"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyEuroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyPoundIcon],svg[arcticons-currency-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.828 19.822a4.62 4.62 0 0 0-4.618-4.619h0a4.62 4.62 0 0 0-4.619 4.619v8.307c0 .96-.314 1.893-.894 2.658l-1.525 2.01h11.656m-6.818-8.192h-4.838"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyPoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyRupeeIcon],svg[arcticons-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.172 15.205h3.56c3.257 0 5.897 2.646 5.897 5.909s-2.64 5.909-5.896 5.909l5.896 5.772m-5.896-17.59h8.095m-11.656 5.938h11.656"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyRupeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyWonIcon],svg[arcticons-currency-won-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.203 24h17.594m-17.594 4.398h17.594m0-13.195l-4.399 17.594L24 15.203l-4.398 17.594l-4.399-17.594"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyWonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrencyYenIcon],svg[arcticons-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.828 15.203L24 24l-5.828-8.797M24 32.797V24m-5.498 0h10.996m-10.996 4.398h10.996"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCurrencyYenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurrentActivityIcon],svg[arcticons-current-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.232" cy="9.737" r="4.237" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.857 30.128l5.578-8.647l7.001 5.982l5.956-8.47"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.238 17.858v15.66c0 4.976-3.495 8.982-7.837 8.982H13.367c-4.341 0-7.836-4.006-7.836-8.983v-17.74c0-4.977 3.495-8.983 7.837-8.983h16.68"></svg:path>`,
})
export class ArcticonsCurrentActivityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCursedHouseMultiplayerGmmIcon],svg[arcticons-cursed-house-multiplayer-gmm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.958 29.455V18.533l3.271 10.934L35.5 18.549v10.918m-15.84-.012V18.533l3.27 10.934l3.271-10.918v10.918m-9.12-8.644a2.29 2.29 0 0 0-2.29-2.29h0a2.29 2.29 0 0 0-2.291 2.29v6.354a2.29 2.29 0 0 0 2.29 2.29h0a2.29 2.29 0 0 0 2.291-2.29v-1.81h-2.29"></svg:path>`,
})
export class ArcticonsCursedHouseMultiplayerGmmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCurveIcon],svg[arcticons-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.495 43.295a21.5 21.5 0 1 1 .368-38.405m3.561 3.957L21.66 20.034m21.56-3.458L27.153 28.068m17.694-1.628l-12.203 9.255"></svg:path>`,
})
export class ArcticonsCurveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCusconIcon],svg[arcticons-cuscon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.07" cy="25.36" r="5.438" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.07" cy="11.138" r="4.805" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.305" cy="20.749" r="4.805" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.695" cy="20.749" r="4.805" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.415" cy="36.862" r="4.805" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.16" cy="36.862" r="4.805" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.893 16.3a14.83 14.83 0 0 0-7.016-5.053m-9.461 28.27c1.463.49 3.028.746 4.654.746a14.6 14.6 0 0 0 4.193-.603M9.168 25.412a14.8 14.8 0 0 0 2.587 8.336m24.353.389v-.01a14.73 14.73 0 0 0 2.864-8.745M19.263 11.247a14.93 14.93 0 0 0-7.047 5.093m8.661 13.419l-2.553 3.284m14.834-10.715l-3.946 1.268m-5.142-7.653l.197 3.984"></svg:path>`,
})
export class ArcticonsCusconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCustomAimIcon],svg[arcticons-custom-aim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.562 7.217a21.5 21.5 0 0 1 26.88.003m7.764 20.323a21.5 21.5 0 0 1-4.423 9.895m4.685-14.618q.032.59.032 1.18h0q0 .59-.032 1.18M40.78 10.558a21.5 21.5 0 0 1 4.426 9.898m-42.412.001a21.5 21.5 0 0 1 4.423-9.895M2.532 25.18a22 22 0 0 1 0-2.36m4.685 14.618a21.5 21.5 0 0 1-4.423-9.895m34.644 13.24a21.5 21.5 0 0 1-26.876 0m26.105-26.098a15.7 15.7 0 0 1 2.834 6.68M26.64 8.5a15.7 15.7 0 0 1 6.675 2.833M11.333 33.315A15.7 15.7 0 0 1 8.5 26.641M21.36 39.5a15.7 15.7 0 0 1-6.675-2.833M31.487 18.87A9.07 9.07 0 0 1 33.076 24h0c0 1.83-.554 3.617-1.588 5.127M18.871 16.513a9.08 9.08 0 0 1 10.261.001m-12.62 12.613a9.07 9.07 0 0 1 0-10.254m12.617 12.614a9.08 9.08 0 0 1-10.258 0M28.292 24h6.985m-22.554 0h6.985M24 28.292v6.985m0-22.554v6.985m4.934-.642L44.138 3.862M29.654 24a5.654 5.654 0 1 1-11.308 0a5.654 5.654 0 0 1 11.308 0"></svg:path><svg:circle cx="24" cy="24" r=".75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCustomAimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCustomCrosshairIcon],svg[arcticons-custom-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.019 45.129a21.5 21.5 0 0 1-17.148-17.15m42.256.001a21.5 21.5 0 0 1-17.143 17.147m-.006-42.255a21.5 21.5 0 0 1 17.151 17.156m-42.257-.013a21.5 21.5 0 0 1 17.15-17.143"></svg:path>`,
})
export class ArcticonsCustomCrosshairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCustomUploaderIcon],svg[arcticons-custom-uploader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33 24l-8.935 6.187L15 24l9 18zm3-6l6-12l-18 8L6 6l6 12l12 5.29zm-21 6l-3-6m24 0l-3 6"></svg:path>`,
})
export class ArcticonsCustomUploaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCutTheRopeIcon],svg[arcticons-cut-the-rope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.676 18.775a8 8 0 0 1 2.66-.559c3.377-.155 6.184 3.1 6.184 3.1a15.82 15.82 0 0 1-9.68 12.722M10.985 22.7a17.5 17.5 0 0 0-1.997 3.49a11.6 11.6 0 0 0-.975 3.654m.036 1.28a12.9 12.9 0 0 0 4.103 9.263c4.416 3.903 6.704 2.194 7.164.565s.453-3.334-2.722-2.61m4.843.3s.248 3.146 2.11 3.497s4.283-1.495 3.565-2.009a4.6 4.6 0 0 1-1.2-1.493m-6.389 2.556a4.5 4.5 0 0 0 2.336-.175"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.091 39.984s3.345-.938 1.01-2.088m-11.218-4.278s4.122 4.047 6.87 3.947a6.3 6.3 0 0 0 4.444-2.471a1.76 1.76 0 0 1-.097 2.802m-8.07-15.62s2.354-3.188-2.976-3.482s-6.607 4.687-6.192 5.873s2.353.935 2.353.935a2.84 2.84 0 0 0-.705 3.862c1.388 2.406 5.045 2.646 8.414-1.088s.32-6.441-.894-6.1m4.858 1.924a14.3 14.3 0 0 1 .782 3.297c-.09.753-2.961 1.263-2.961 1.263"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.34 31.85s.43 1.869-.303 2.287s-3.154-.519-3.154-.519m3.792 2.662a2.5 2.5 0 0 1 2.005-1.186c1.222.078 1.573 2.296 1.573 2.296m3.545-2.11s-1.45-2.831-3.428-2.913s-1.938 1.146-1.938 1.146m.989.47a4.4 4.4 0 0 0-2.136-.12a2.6 2.6 0 0 0-1.736 1.274M8.645 25.91s-4.927.804-4.038 4.755s5.43.226 2.601-1.795"></svg:path><svg:circle cx="11.855" cy="14.433" r="1.766" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.49 12.67l6.831-5.362a3.76 3.76 0 0 0-3.596 1.028c-1.808 1.646-2.092 2.384-1.84 3.199"></svg:path><svg:circle cx="10.884" cy="9.658" r="1.766" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.158 11.033l8.382 2.271a3.76 3.76 0 0 1-3.712.458c-2.307-.81-2.857-1.379-2.944-2.227m21.769 1.348V5.235"></svg:path><svg:circle cx="19.823" cy="24.184" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.325" cy="21.471" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.999 2.999" stroke-linecap="round" stroke-linejoin="round" d="M17.668 10.793L41.251 7.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.1 37.896a3.36 3.36 0 0 1-2.189.741"></svg:path><svg:circle cx="35.418" cy="21.077" r="8.082" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.304 16.552a5.2 5.2 0 0 0-1.78.331a7.92 7.92 0 0 0-.629 7.09a6.21 6.21 0 0 1 6.937-4.748a5.17 5.17 0 0 0-4.528-2.673m9.639-.59a5.2 5.2 0 0 0-.331-1.78a7.92 7.92 0 0 0-7.09-.628a6.21 6.21 0 0 1 4.748 6.936a5.17 5.17 0 0 0 2.673-4.528m.59 9.64a5.2 5.2 0 0 0 1.78-.331a7.92 7.92 0 0 0 .629-7.091a6.21 6.21 0 0 1-6.937 4.749a5.17 5.17 0 0 0 4.528 2.673m-9.639.589a5.2 5.2 0 0 0 .33 1.78a7.92 7.92 0 0 0 7.091.63a6.21 6.21 0 0 1-4.749-6.937a5.17 5.17 0 0 0-2.673 4.527"></svg:path>`,
})
export class ArcticonsCutTheRopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCutTheRope2Icon],svg[arcticons-cut-the-rope-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.676 18.775a8 8 0 0 1 2.66-.559c3.377-.155 6.184 3.1 6.184 3.1a15.82 15.82 0 0 1-9.68 12.722M10.985 22.7a17.5 17.5 0 0 0-1.997 3.49a11.6 11.6 0 0 0-.975 3.654m.036 1.28a12.9 12.9 0 0 0 4.103 9.263c4.416 3.903 6.704 2.194 7.164.565s.453-3.334-2.722-2.61m4.843.3s.248 3.146 2.11 3.497s4.283-1.495 3.565-2.009a4.6 4.6 0 0 1-1.2-1.493m-6.389 2.556c.78.149 1.586.088 2.336-.175"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.091 39.984s3.345-.938 1.01-2.088m-11.218-4.278s4.122 4.047 6.87 3.947a6.3 6.3 0 0 0 4.444-2.471a1.76 1.76 0 0 1-.097 2.802m-8.07-15.62s2.354-3.188-2.976-3.482s-6.607 4.687-6.192 5.873s2.353.935 2.353.935a2.84 2.84 0 0 0-.705 3.862c1.388 2.406 5.045 2.646 8.414-1.088s.32-6.441-.894-6.1m4.858 1.924c.391 1.064.654 2.17.782 3.297c-.09.753-2.961 1.263-2.961 1.263"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.34 31.85s.43 1.869-.303 2.287s-3.154-.519-3.154-.519m3.792 2.662a2.5 2.5 0 0 1 2.005-1.186c1.222.078 1.573 2.296 1.573 2.296m3.545-2.11s-1.45-2.831-3.428-2.913s-1.938 1.146-1.938 1.146m.989.47a4.4 4.4 0 0 0-2.136-.12a2.6 2.6 0 0 0-1.736 1.274M8.645 25.91s-4.927.804-4.038 4.755c.89 3.95 5.43.226 2.601-1.795"></svg:path><svg:circle cx="11.855" cy="14.433" r="1.766" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.49 12.67l6.831-5.362a3.76 3.76 0 0 0-3.596 1.028c-1.808 1.646-2.092 2.384-1.84 3.199"></svg:path><svg:circle cx="10.884" cy="9.658" r="1.766" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.158 11.033l8.382 2.271a3.76 3.76 0 0 1-3.712.458c-2.307-.81-2.857-1.379-2.944-2.227m21.769 1.348V5.235"></svg:path><svg:circle cx="19.823" cy="24.184" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.325" cy="21.471" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-dasharray="0 0 2.999 2.999" stroke-linecap="round" stroke-linejoin="round" d="M17.668 10.793L41.251 7.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.1 37.896a3.36 3.36 0 0 1-2.189.741"></svg:path><svg:circle cx="35.418" cy="21.077" r="8.082" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.304 16.552a5.2 5.2 0 0 0-1.78.331a7.92 7.92 0 0 0-.629 7.09a6.21 6.21 0 0 1 6.937-4.748a5.17 5.17 0 0 0-4.528-2.673m9.639-.59a5.2 5.2 0 0 0-.331-1.78a7.92 7.92 0 0 0-7.09-.628a6.21 6.21 0 0 1 4.748 6.936a5.17 5.17 0 0 0 2.673-4.528m.59 9.64a5.2 5.2 0 0 0 1.78-.331a7.92 7.92 0 0 0 .629-7.091a6.21 6.21 0 0 1-6.937 4.749a5.17 5.17 0 0 0 4.528 2.673m-9.639.589c.004.608.117 1.211.33 1.78a7.92 7.92 0 0 0 7.091.63a6.21 6.21 0 0 1-4.749-6.937a5.17 5.17 0 0 0-2.673 4.527M37.2 36.416a2.653 2.653 0 0 1 3.176-2.6c1.111.214 1.999 1.175 2.11 2.301c.082.838-.183 1.665-.762 2.172c-1.072.941-4.524 3.476-4.524 3.476h5.3"></svg:path>`,
})
export class ArcticonsCutTheRope2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCutoIcon],svg[arcticons-cuto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.589 5.602L34.8 10.389m6.719-3.717l-5.65 5.65m6.72-3.72L37.8 13.389M9.31 34.5v-21m25 25h-21m25-25v21m-25-25h21"></svg:path><svg:circle cx="9.309" cy="9.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.309" cy="38.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.309" cy="38.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.691" cy="9.5" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCutoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCutthecordIcon],svg[arcticons-cutthecord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.11 7.732c2.046 0 14.27 5.392 16.966 7.762c.14-2.65 2.742-2.742 3.672-1.394s.372 3.95 0 4.508c1.394 1.627 1.44 2.882 2.417 4.23s3.672 4.927 3.3 7.112s-6.46 10.318-15.99 10.318S5.54 31.48 4.84 26.696c-.682-4.664-.511-7.44 2.138-11.83a1.716 1.716 0 0 1 .077-2.238c.465-.558 6.446-4.896 10.056-4.896"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.401 22.819c-.713-.651-2.634-1.871-3.532-1.437s-2.479 4.555-1.829 6.042a2.64 2.64 0 0 0 2.31 1.487"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.748 18.608a6.91 6.91 0 0 0-8.645-1.874c-4.587 2.169-10.071 13.045-9.854 17.042s1.499 5.295 1.499 5.295m2.405-27.481c-1.673-.248-5.237-.186-6.414.713l4.679 2.076a4.2 4.2 0 0 0-.589 3.068a19.4 19.4 0 0 0 4.37-2.665m-18.221.083c1.332-.61 4.407-1.564 6.352.598c2.231 2.48 2.882 10.68 1.674 14.027m28.116-1.73c-1.158-1.142-3.606-1.266-6.21-.522s-9.295 3.904-7.84 6.91s3.19 3.086 4.37 2.85a10.3 10.3 0 0 0 5.206-3.377a8 8 0 0 0 1.711.967m-1.215-13.696c-1.053.459-.806 2.225 0 2.194s.905-.416.905-.416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.683 23.086c.959-.388 2.386.992 2.293 1.58s-2.231 1.828-2.82 1.085s-.93-2.076.527-2.665m5.702 5.082c-.59.682-1.401 3.86 2.057 3.759s3.086-2.21 2.839-3.016a2.16 2.16 0 0 0-2.637-1.797c-1.795.372-2.26 1.054-2.26 1.054M9.218 32.614c.89-1.379 4.174-4.497 5.786-3.124s.03 4.821-1.55 6.165m17.862-5.701c-2.09-1.074-7.386-1.383-10.966-1.043m1.575 4.438c1.059-.442 3.037 4.245 2.897 4.524s-2.635.389-3.192-.94c-.423-1.01-1.036-3.028.295-3.584"></svg:path>`,
})
export class ArcticonsCutthecordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuvvaIcon],svg[arcticons-cuvva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 24c0-8.284 6.716-15 15-15s15 6.716 15 15z"></svg:path>`,
})
export class ArcticonsCuvvaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCvsIcon],svg[arcticons-cvs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.139 15.225l-5.8-5.8a4.65 4.65 0 0 0-6.574 0L24 15.19l-5.765-5.765a4.65 4.65 0 0 0-6.573 0l-5.8 5.8a4.65 4.65 0 0 0 0 6.573l5.765 5.765L24 39.937l18.139-18.139a4.65 4.65 0 0 0 0-6.573"></svg:path>`,
})
export class ArcticonsCvsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCwtchIcon],svg[arcticons-cwtch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.19 12.786q.055-.056.106-.113c2.762-3.081-1.965-10.537-7.234-5.23m-1.068-.918c-4.911-3.517-9.139 2.878-6.06 6.26l7.128 8.427c1.818-2.145 3.646-4.31 5.331-6.302m-4-6.173l7.224 7.24m-8.514-8.533l-5.03 5.04m-2.01 22.73l-.106.113c-2.762 3.081 1.965 10.537 7.234 5.23m1.068.918c4.911 3.517 9.139-2.878 6.06-6.26l-7.128-8.427c-1.818 2.145-3.646 4.31-5.33 6.302m3.999 6.173l-7.223-7.24m8.513 8.533l5.032-5.044m5.779-4.576q.056.054.113.106c3.08 2.762 10.537-1.965 5.23-7.234m.918-1.068c3.517-4.911-2.878-9.139-6.26-6.06l-8.427 7.128c2.145 1.818 4.31 3.646 6.302 5.33m6.173-3.998l-7.24 7.223m8.533-8.514l-5.045-5.034M13.039 16.81l-.113-.106c-3.08-2.762-10.537 1.965-5.23 7.234m-.918 1.068c-3.517 4.911 2.878 9.139 6.26 6.06l8.427-7.128c-2.145-1.818-4.31-3.646-6.302-5.331m-6.173 4l7.24-7.224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.697 23.897q2.52 2.516 5.043 5.03"></svg:path>`,
})
export class ArcticonsCwtchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCxFileExplorerIcon],svg[arcticons-cx-file-explorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.366 19.984L34 33.016m0-13.032l-8.634 13.032m-2.732-4.37v.053a4.317 4.317 0 0 1-4.317 4.317h0A4.317 4.317 0 0 1 14 28.7v-4.398a4.317 4.317 0 0 1 4.317-4.317h0a4.317 4.317 0 0 1 4.317 4.317v.053"></svg:path>`,
})
export class ArcticonsCxFileExplorerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCxxdroidIcon],svg[arcticons-cxxdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.642 21.288l-4 5.3m-9.819.239a5.713 5.713 0 0 1-5.816 5.653h0a5.713 5.713 0 0 1-5.816-5.653v-5.654a5.713 5.713 0 0 1 5.816-5.653h0a5.53 5.53 0 0 1 5.6 5.653h0m6.98.039l-4 5.3m4 0l-4-5.3m11.222 5.3l-4-5.3"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.764 4.373v8.555a2 2 0 0 0 2 2h8.724A21.5 21.5 0 0 0 32.764 4.373"></svg:path>`,
})
export class ArcticonsCxxdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyanIcon],svg[arcticons-cyan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.225 27.797v10.759M10.829 43.5l11.693-14.49L34.215 43.5m-.78-31.748a3.13 3.13 0 0 1-3.134 3.122h0a3.13 3.13 0 0 1-3.134-3.122h0a3.13 3.13 0 0 1 3.134-3.122h0a3.13 3.13 0 0 1 3.134 3.122m3.736-.439c-.088 1.6-.27 3.155-1.545 4.835L30.3 23.153l-5.324-7.005c-1.275-1.68-1.457-3.235-1.546-4.835c0-3.763 3.074-6.813 6.87-6.813s6.87 3.05 6.87 6.813z"></svg:path>`,
})
export class ArcticonsCyanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyberghostIcon],svg[arcticons-cyberghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.89 22.71c-.56-3.83 0-2.36-.48-5.85c-.82-5.84-7-12.67-15.3-12.35C10 5 8.1 16.3 8.1 22.68c0 2.65-.86 6.33-.57 11.85c.47 8.77 1.38 9.66 14.08 8.62c16.91-1.37 18.86-8.11 19-11.78s-1.32-5.9-1.72-8.66m-18.65 6.16c-3.79 0-5.75-4.6-5.75-8.31s2.41-7.75 5.75-7.75c3.64 0 5.62 4.28 5.62 7.9c0 3.82-1.86 8.16-5.62 8.16m13.11-3.28c-2.79 0-4.22-3.34-4.22-6s1.77-5.64 4.22-5.64c2.68 0 4.13 3.11 4.13 5.74c0 2.74-1.34 5.9-4.13 5.9"></svg:path>`,
})
export class ArcticonsCyberghostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyberpunkRedCompanionIcon],svg[arcticons-cyberpunk-red-companion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.3v20.8l5 4.6h34V15.9l-5-4.6zm16.3 18.2h5.9m-5.9-11.9h5.9m-5.9 6h3.8m-3.8-6v11.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.4 29.5V17.6h1.9c3.3 0 5.9 2.7 5.9 5.9h0c0 3.3-2.7 5.9-5.9 5.9h-1.9zm-20.6 0V17.6h3.8c2.2 0 4 1.8 4 4s-1.8 4-4 4H9.8m4-.1l3.8 4"></svg:path>`,
})
export class ArcticonsCyberpunkRedCompanionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCycplusIcon],svg[arcticons-cycplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.795 32.364a6.396 6.396 0 1 1 1.03-6.507m26.675.742a9.84 9.84 0 1 1 0-2.739m-27.705 8.504l8.686-10.418"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.74 12.931H13.276c8.388.793 10.4 4.99 10.623 9.713m8.657 2.586h2.306m-1.153-1.242v2.483"></svg:path>`,
})
export class ArcticonsCycplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCycplusFitIcon],svg[arcticons-cycplus-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.795 32.364a6.396 6.396 0 1 1 1.03-6.507m26.675.742a9.84 9.84 0 1 1 0-2.739m-27.705 8.504l8.686-10.418"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.74 12.931H13.276c8.388.793 10.4 4.99 10.623 9.713m8.657 2.586h2.306m-1.153-1.242v2.483M7.472 27.92h1.749m-1.749 2.691v-5.382h2.691"></svg:path><svg:circle cx="11.631" cy="25.398" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.631 27.046v3.565m2.174-4.675v4.003c0 .371.3.673.673.673h.201m-1.581-3.566h1.413"></svg:path>`,
})
export class ArcticonsCycplusFitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCymathIcon],svg[arcticons-cymath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.762 35.006c-3.96 3.96-10.584 9.689-21.975 6.636c-7.614-2.821-10.157-7.718-10.576-14.23c-.417-6.513 4.518-16.87 14.024-20.445c8.758-3.293 18.215-.591 19.393 3.501c.781 2.914-.812 6.672-6.776 5.074c1.73-6.455-3.654-10.171-11.952-6.85s-11.343 18.443-4.648 26.09c2.279 2.602 11.257 8.293 21.108-.77zM18.917 20.482h11.081m0 6.864H18.917"></svg:path>`,
})
export class ArcticonsCymathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyncIcon],svg[arcticons-cync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.838 39.162l4.876-4.876m20.6-20.6l4.89-4.89m-.042 30.366l-4.876-4.876M13.714 13.714L8.838 8.838M45.5 24h-6.912M9.412 24H2.5M24 2.5v6.912m0 29.176V45.5m7.076-15.935c-1.557 1.393-3.636 2.171-5.8 2.171c-4.613 0-8.352-3.463-8.352-7.736s3.739-7.736 8.351-7.736c2.164 0 4.244.778 5.8 2.17"></svg:path>`,
})
export class ArcticonsCyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyrillicIcon],svg[arcticons-cyrillic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.265 26.875v-8l5.3 8v-8m13.531-.015v8m5.3-8v8m-5.3-4.015h5.3m-15.666-1.27v6c0 1.105-.886 2-1.98 2h0q-.342-.001-.648-.11"></svg:path><svg:circle cx="18.731" cy="19.175" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.396 23.56a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2M25.5 18.925l-3 10.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCyrillicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCytharaIcon],svg[arcticons-cythara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.6 4.51a.8.8 0 0 1 .32 0c.5.16 11.13 10.09 10.89 10.18c-.05 0-1.91-.69-4.13-1.58s-4.49-1.79-5-2l-1-.35v10.39c0 10.31 0 10.4-.35 11a4.53 4.53 0 0 1-3.86 2.38a5.4 5.4 0 0 1-1.56-.15a4.35 4.35 0 0 1-3-2.84c-.88-3 2.41-5.81 5.68-4.77a11 11 0 0 0 1.06.31c.06 0 .13-5 .15-11.13V4.82l.4-.2a1.7 1.7 0 0 1 .38-.11ZM14.09 28a11.55 11.55 0 0 0 11.55 11.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.18 28a15.46 15.46 0 0 0 15.46 15.5"></svg:path>`,
})
export class ArcticonsCytharaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCytoidIcon],svg[arcticons-cytoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 24c0 6.351-5.149 11.5-11.5 11.5h0c-6.351 0-11.5-5.149-11.5-11.5h0c0-6.351 5.149-11.5 11.5-11.5h0c6.351 0 11.5 5.149 11.5 11.5"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCytoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCytusIiIcon],svg[arcticons-cytus-ii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28.984 19.58c-.499-2.416.479-4.45.362-5.075s-2.767-1.955-4.195-6.13q5.045 0 6.473 2.62a2.63 2.63 0 0 1 1.33-3.021"></svg:path><svg:path d="M37.01 21.134c2.025 9.22-2.737 17.726-5.582 16.064a.35.35 0 0 1-.127-.43a28 28 0 0 0 1.3-7.44a.244.244 0 0 0-.469-.118c-1.545 3.5-4.028 4.243-7.06 3.383a.509.509 0 0 1-.058-.978c2.62-1.154 3.471-3.334 2.933-6.326a.264.264 0 0 0-.479-.088a2.51 2.51 0 0 1-1.838 1.3a.587.587 0 0 1-.626-.723c1.203-5.26-1.388-7.597-5.26-8.946a70.8 70.8 0 0 0-6.961 12.329a5.6 5.6 0 0 0-.645 2.346c0 3.08 3.304 8.467 5.573 9.875c.445.298.995.394 1.515.264c4.605-1.31 7.343-4.683 10.237-9.268"></svg:path><svg:path d="M32.944 7.974C-2.47-4.912 1.675 55.412 15.98 40.629M28.984 19.58c3.51-.245 3.412.606 5.348-.978c.978 2.131 3.598 3.02 6.267 3.998c-.587-2.072-1.682-4.458-3.236-5.436c2.386.467 4.854.27 7.137-.567c-2.21-2.825-4.36-4.556-6.365-3.999c.567-3.236.714-5.69-.42-7.577"></svg:path><svg:path d="M16.46 27.675c.488-2.357 2.835-4.234 6.54-2.562c-.078 1.858-.84 3.91-2.327 4.517m-1.486-3.344l.303.773m.03 10.471a21 21 0 0 1-2.934.821m.548-15.321a8.6 8.6 0 0 1 4.175-.772m9.757-8.486h2.64m-.508 1.32l.459-1.183m1.516 1.447l-1.252-1.359m2.278-.577l-2.072.303m.831-1.193l-.831.89m-.792-1.389l.371 1.545m-1.29-.831l1.241 1.027"></svg:path><svg:path d="M17.437 25.71c.176 1.857.978 3.167 2.386 2.776s1.652-1.222.645-4.008m5.475-10.247c-1.613-1.887-4.673-2.933-9.484-2.806m-1.251 27.347a3.54 3.54 0 0 1-3.07-.646c-1.173-1.134-.303-7.313.45-8.603M32.953 7.974l4.762-2.953"></svg:path></svg:g>`,
})
export class ArcticonsCytusIiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsCzSmartYouqIcon],svg[arcticons-cz-smart-youq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.082 41.163c-8.967 2.403-18.327-2.213-21.88-10.79s-.198-18.459 7.842-23.1m4.462-1.849a18.5 18.5 0 0 1 22.659 22.658"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.294 38.793a15.5 15.5 0 0 1-13.423-23.25m2.463-3.21a15.5 15.5 0 0 1 26.46 10.96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.078 34.841a12.5 12.5 0 1 1 4.055-20.387M25.321 25.32l16.473 16.473m1.414-1.413L26.735 23.905m-2.828 2.829L40.38 43.207"></svg:path>`,
})
export class ArcticonsCzSmartYouqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDMenuIcon],svg[arcticons-d-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31" height="31" x="8" y="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.31 9.25h.19c2.216 0 4 1.784 4 4v23c0 2.216-1.784 4-4 4h-23a3.99 3.99 0 0 1-3.311-1.75m-3.736-2.137A3.99 3.99 0 0 1 5.5 32.5v-23c0-2.216 1.784-4 4-4h23a3.99 3.99 0 0 1 3.545 2.14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.125 40.199A3.99 3.99 0 0 1 35.5 42.5h-23c-2.216 0-4-1.784-4-4v-2.059m20.059-11.777c0-2.626-2.265-4.754-5.06-4.754s-5.059 2.128-5.059 4.754v3.09c0 2.625 2.265 4.753 5.06 4.753s5.059-2.128 5.059-4.754m0 4.754V13.493"></svg:path>`,
})
export class ArcticonsDMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDPaymentIcon],svg[arcticons-d-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="24" cy="32.094" r="2" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:circle cx="15" cy="32.094" r="2" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:circle cx="33" cy="32.094" r="2" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.69 20.307c0-1.504-1.283-2.724-2.866-2.724s-2.866 1.22-2.866 2.724v1.77c0 1.504 1.283 2.724 2.866 2.724s2.866-1.219 2.866-2.724m0 2.725V13.906m11.451 6.542l1.009 3.655a.3.3 0 0 1-.289.38h-3.966a.31.31 0 0 1-.3-.383l1.992-8.145m-6.26 6.272a18.3 18.3 0 0 0 3.63-1.348m-3.61-3.223h3.752m-1.794-2.169v9.405m9.513-7.36v4.693c0 1.551.651 2.207 1.312 2.207c.578 0 1.025-.516 1.274-1.184m3.936-5.228c.303.83.661 2.445.661 4.477"></svg:path>`,
})
export class ArcticonsDPaymentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDPointIcon],svg[arcticons-d-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 24A18.5 18.5 0 1 1 24 5.5h18.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.625 22.172A5.625 5.625 0 0 0 24 16.547h0a5.625 5.625 0 0 0-5.625 5.625v3.656A5.625 5.625 0 0 0 24 31.453h0a5.625 5.625 0 0 0 5.625-5.625m0 5.605V5.5"></svg:path>`,
})
export class ArcticonsDPointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDRIcon],svg[arcticons-d-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.89 25.825h-.79c-.45 0-1.014-.226-1.24-.677l-3.157-4.285c-.45-.563-1.127-1.24-1.127-2.255s.79-1.804 1.917-1.804c1.014 0 1.804.79 1.804 1.804s-.79 1.917-2.368 2.255c-1.692.339-2.819 1.24-2.819 2.82c0 1.24.79 2.142 2.368 2.142c2.03 0 3.27-2.03 5.074-4.398m6.102 2.318V13.55h3.312c1.912 0 3.44 1.53 3.44 3.44s-1.528 3.44-3.44 3.44h-3.312m3.437-.001l3.188 3.188m-32.614.129V13.552H9.96c2.42 0 4.46 2.04 4.46 4.46v1.274c0 2.421-2.04 4.46-4.46 4.46zm23.265 15.41v-6.135h1.994c1.15 0 2.07.92 2.07 2.07s-.92 2.071-2.07 2.071H30.93m2.07-.001l1.918 1.918m-20.92-6.058h3.988m-1.994 6.135v-6.135M5.577 38.466c.383.46.843.69 1.533.69h.92c.844 0 1.535-.69 1.535-1.534h0c0-.843-.69-1.534-1.534-1.534h-.997c-.844 0-1.534-.69-1.534-1.533h0c0-.844.69-1.534 1.534-1.534h.92c.69 0 1.15.153 1.534.69m29.944 2.378h1.994m1.074 3.067h-3.068v-6.135H42.5m-18.08 6.135a1.98 1.98 0 0 1-1.993-1.994v-2.07c0-1.15.92-2.07 1.994-2.07c1.15 0 2.07.92 2.07 2.07v1.994c0 1.15-.92 2.07-2.07 2.07"></svg:path><svg:rect width="11.083" height="18.985" x="5.5" y="8.844" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.223" ry="2.223"></svg:rect><svg:rect width="11.083" height="18.985" x="31.417" y="8.844" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.223" ry="2.223"></svg:rect><svg:rect width="11.083" height="21.341" x="18.458" y="8.844" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.223" ry="2.223"></svg:rect>`,
})
export class ArcticonsDRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsD20CalculatorIcon],svg[arcticons-d20-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m14.5 0v37M5.5 24h37m-13.8-8.6h9M11.3 29.3l8 7.9m-.1-7.9l-8 8m4.1-26.4v9m-4.5-4.5h9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.5 28l-2.2 6.8l4.8 5.2l6.9-1.5l2.2-6.8l-4.8-5.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.5 28l1.5 6.2l1.1 5.8l4.6-4.3l4.5-4l-5.9-1.8z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.7 35.7L30 34.2l4.3-4.3zm-9.4-.9l3.7-.6m4.3-4.3l1.1-3.4m2.6 12l-2.3-2.8"></svg:path>`,
})
export class ArcticonsD20CalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaFitIcon],svg[arcticons-da-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.523 38.141A14.84 14.84 0 0 1 24 42.5c-8.22 0-14.882-6.663-14.882-14.882S15.78 12.736 24 12.736s14.882 6.663 14.882 14.882m0 0V42.5m0-37v13.11"></svg:path>`,
})
export class ArcticonsDaFitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDabeipackzettelIcon],svg[arcticons-dabeipackzettel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.976 24L6.179 5.5v37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.976 24h20.846L28.396 5.5H6.179zm0 0h20.846L28.396 42.5H6.179z"></svg:path>`,
})
export class ArcticonsDabeipackzettelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaciaIcon],svg[arcticons-dacia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 18.479H28.182L24 22.66l-4.182-4.181H7.5m0 11.042h12.318L24 25.34l4.182 4.181H40.5"></svg:path>`,
})
export class ArcticonsDaciaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaciaMediaIcon],svg[arcticons-dacia-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.595H27.933L24 18.528l-3.933-3.933H4.5m0 10.387h15.567L24 21.049l3.933 3.933H43.5m-7.966 8.423l3.943-4.165l4.023 4.165m-9.707 0V29.24M4.5 33.253V29.24l4.05 2.053l4.05-2.053v4.067m11.467-4.067h5.86l2.124 2.13l-2.067 2.034h-5.917m-9.725-2.032h5.82m2.164-2.131h-5.86l-2.124 2.13l2.067 2.034h5.917"></svg:path>`,
})
export class ArcticonsDaciaMediaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDadishIcon],svg[arcticons-dadish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.093" cy="24.191" r="15.226" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.63 9.013c-1.592-4.226-4.002-6.94-7.048-5.72c-2.674 1.064-1.327 4.354-1.327 4.354S9.482 5.85 8.74 10.536c-.448 2.82 1.699 3.797 3.465 4.119m2.811 21.834C21.38 42.658 20.15 45 20.15 45s11.127-5.846 14.055-9.37"></svg:path><svg:ellipse cx="24.491" cy="20.803" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.435" ry="2.606" transform="rotate(-5.026 24.49 20.803)"></svg:ellipse><svg:ellipse cx="35.783" cy="20.766" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.16" ry="2.596" transform="rotate(-9.616 35.783 20.766)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.607 22.336s1.943.344 3.065.326c1.123-.017 2.538-.508 2.538-.508s.362 3.553-2.606 3.62c-2.967.069-2.997-3.445-2.997-3.445z"></svg:path>`,
})
export class ArcticonsDadishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaedalusIcon],svg[arcticons-daedalus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 34.4c.9 0 8.1-4.2 8.1-9.1v-7.7l-8.1-4l-8.1 4v7.7c0 5 7.2 9.1 8.1 9.1m0-.2V13.8M16 24h16"></svg:path>`,
})
export class ArcticonsDaedalusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaewooIcon],svg[arcticons-daewoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.232 37.42c-.024-10.53-5.18-17.79-12.58-20.513c.814-.813 1.554-1.756 2.597-2.432c5.93 2.973 12.05 10.921 12.06 23.182"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.31 37.657c.377-12.054-4.81-22.16-8.816-24.888c1.32-.62 2.803-1.394 4.323-1.734c4.363 7.777 6.66 18.06 6.662 26.729m3.211-.107c.012-12.26 6.13-20.209 12.061-23.182c1.043.676 1.783 1.62 2.597 2.432c-7.4 2.724-12.556 9.983-12.58 20.513"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.849 37.018c.265-3.38 1.29-14.172 12.556-17.347C47.367 26.084 40.507 37.768 24 37.768S.633 26.084 4.595 19.67c11.265 3.175 12.29 13.968 12.557 17.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.521 37.764c.001-8.67 2.3-18.952 6.662-26.729c1.52.34 3.003 1.115 4.323 1.734c-4.005 2.728-9.193 12.834-8.815 24.888"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.479 37.764c-.204-20.521-1.628-24.184-2.454-27.385A34 34 0 0 1 24 10.232c.98.005 2.084.059 2.975.147c-.826 3.201-2.25 6.864-2.454 27.385"></svg:path>`,
})
export class ArcticonsDaewooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaffMoonIcon],svg[arcticons-daff-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.245 41.123c5.57-3.61 9.255-9.88 9.255-17.011c0-7.294-3.868-13.668-9.652-17.235a20.13 20.13 0 0 1 3.02 10.603c0 11.187-9.068 20.255-20.255 20.255a20.13 20.13 0 0 1-10.603-3.02a20.4 20.4 0 0 0 6.258 6.408"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.955 22.736l1.943 3.939l4.347.63l-3.146 3.065l.744 4.329l-3.888-2.045l-3.887 2.045l.744-4.329l-3.146-3.065l4.347-.63zM4.5 41.122h38.626"></svg:path>`,
})
export class ArcticonsDaffMoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDagbladetIcon],svg[arcticons-dagbladet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.17 21.893v4.771a1.59 1.59 0 0 1-1.59 1.59h0c-.439 0-.836-.177-1.124-.465"></svg:path><svg:rect width="3.181" height="4.215" x="15.99" y="21.893" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.591" ry="1.591" transform="rotate(-180 17.58 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.284 19.745v5.567c0 .44.356.795.796.795h.238m15.148-5.527v4.732c0 .44.356.795.795.795h.239m-1.869-4.214h1.67M14.44 24.517a1.59 1.59 0 0 1-1.59 1.59h0a1.59 1.59 0 0 1-1.59-1.59v-1.034c0-.878.712-1.59 1.59-1.59h0c.878 0 1.59.712 1.59 1.59m.001 2.624v-4.214m15.947 2.624a1.59 1.59 0 0 1-1.59 1.59h0a1.59 1.59 0 0 1-1.591-1.59v-1.034c0-.878.712-1.59 1.59-1.59h0c.879 0 1.59.712 1.59 1.59m.001 2.624v-4.214M5.5 26.107v-6.362h1.431a2.783 2.783 0 0 1 2.784 2.784v.795a2.783 2.783 0 0 1-2.784 2.783zm33.961-.802a1.59 1.59 0 0 1-1.382.802h0a1.59 1.59 0 0 1-1.59-1.59v-1.034c0-.878.712-1.59 1.59-1.59h0c.879 0 1.59.712 1.59 1.59V24h-3.18m-1.508-.517a1.59 1.59 0 0 0-1.59-1.59h0a1.59 1.59 0 0 0-1.59 1.59v1.034c0 .878.711 1.59 1.59 1.59h0a1.59 1.59 0 0 0 1.59-1.59m0 1.59v-6.362m-14.277 3.738c0-.878.712-1.59 1.59-1.59h0c.878 0 1.59.712 1.59 1.59v1.034a1.59 1.59 0 0 1-1.59 1.59h0a1.59 1.59 0 0 1-1.59-1.59m0 1.59v-6.362"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDagbladetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaggerIcon],svg[arcticons-dagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.428 14.064s4.128-4.2.731-7.006s-12.655 2.075-12.964 3.39a2.093 2.093 0 0 0-2.412 1.36c-.742 1.778-2.041.316-3.712 4.648c0 0-2.606 3.411-1.684 7.237c0 0 3.159 2.024 1.015 2.705s-.53 2.255-1.154 2.846s-1.37-.232-2.096-.164s-.304 2.468-1.947 2.708s-1.987-3.071-4.852-1.546s-3.039 3.58-6.655 4.274s1.785 4.096 5.26 5.275s8.915 3.24 15.216 1.024s11.076-6.217 12.468-13.096c0 0 1.997-3.924-1.558-4.185c-.114-.029-1.643-.705-1.99-1.636c0 0-3.387-.238-4.97-2.01s.527-1.791.558-2.349s-.949-1.958-.314-2.773s2.315 1.059 2.625 1.038s2.799-3.376 4.338-2.995s4.097 1.255 4.097 1.255"></svg:path>`,
})
export class ArcticonsDaggerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDahaIcon],svg[arcticons-daha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.798 21.292v-9.935h6.571s3.778 0 3.778 4.967s-3.778 4.968-3.778 4.968zm24.404 0v-4.968s0-5.04-5.233-4.967c-5.465.076-5.233 4.967-5.233 4.967v4.968m0-1.848h10.466M25.736 34.796h10.466m0 1.848v-4.968s0-5.04-5.233-4.967c-5.465.076-5.233 4.967-5.233 4.967v4.968m-13.938-9.935v9.935m10.282-9.935v9.935m-10.282-4.968H22.08"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDahaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaihatsuIcon],svg[arcticons-daihatsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.317 16.336H4.5l10.22 11.632l-2.384 3.696c18.345-3.53 32.17-6.548 31.107-10.015c-1.386-4.522-25.211-5.06-33.867-5.105l8.51 9.275l3.23-.75"></svg:path>`,
})
export class ArcticonsDaihatsuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaijishouIcon],svg[arcticons-daijishou-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.37 17.875L24 11.466l-6.37 6.409zm0 12.189L24 36.8l-6.37-6.736z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.413 25.913L24 44.5l18.587-18.587zM42.75 22.25L24 3.5L5.25 22.25z"></svg:path>`,
})
export class ArcticonsDaijishouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailyDevIcon],svg[arcticons-daily-dev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.74 24l-6.37 6.369a2.8 2.8 0 1 0 3.96 3.96l8.35-8.349a2.8 2.8 0 0 0 0-3.96l-8.35-8.35a2.8 2.8 0 0 0-3.96 0L24 20.039l-6.369-6.369a2.8 2.8 0 0 0-3.96 0l-8.35 8.35a2.8 2.8 0 0 0 0 3.96l8.35 8.35a2.8 2.8 0 0 0 3.96 0l18.68-18.68l-2.51 5.411z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 20.039l-12.31 12.31l2.51-5.41L11.26 24l4.39-4.388L20.039 24"></svg:path>`,
})
export class ArcticonsDailyDevIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailyYouIcon],svg[arcticons-daily-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.917 32.598v.809a1.3 1.3 0 0 0 1.293 1.3h25.58a1.3 1.3 0 0 0 1.293-1.3v-.809m0-14.444v-1.517c0-.714-.578-1.293-1.292-1.293h-6.334l-2.001-2.051h-8.912l-2 2.051h-6.335c-.714 0-1.292.579-1.292 1.293v1.517"></svg:path><svg:circle cx="24" cy="25.015" r="5.417" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.667 19.598v5.417a5.417 5.417 0 0 0 10.833 0v-5.417m-39 0a5.417 5.417 0 0 0 10.833 0M9.917 30.431v-5.416"></svg:path>`,
})
export class ArcticonsDailyYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailyalIcon],svg[arcticons-dailyal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.037 29.442V18.554m0 6.396a2.744 2.744 0 0 0-2.766-2.721q0 0 0 0h0a2.744 2.744 0 0 0-2.771 2.717v1.775c0 1.501 1.239 2.721 2.77 2.721h0a2.744 2.744 0 0 0 2.767-2.72q0 0 0 0m8.73 2.72V22.23m0 4.492A2.744 2.744 0 0 1 24 29.442q0 0 0 0h0a2.744 2.744 0 0 1-2.77-2.717v-1.774c0-1.502 1.238-2.722 2.77-2.722h0c1.528 0 2.767 1.216 2.767 2.721m3.2-6.388v10.884H35.5"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDailyalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailyartIcon],svg[arcticons-dailyart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13.557" height="19.545" x="14.99" y="9.468" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.779"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.547 22.235v20.336M21.09 29.013v3.728c-4.8 0-12.088 6.27-12.088 9.83"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 42.57s-2.937-8.981-7.642-8.981V16.21A10.78 10.78 0 0 0 24.077 5.43h0a10.78 10.78 0 0 0-10.782 10.781v17.378C9.737 34.888 6.008 39.972 5.5 42.57"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.029 22.178c.263.874 2.523.933 2.895 0m-2.895-4.848c-.283-.874-2.712-.933-3.112 0m9.263 0c-.283-.874-2.712-.933-3.112 0m-3.915 7.136a3.16 3.16 0 0 0 2.324.763a3.18 3.18 0 0 0 2.407-.89"></svg:path><svg:circle cx="18.075" cy="17.68" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.43" cy="17.68" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsDailyartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailybriefIcon],svg[arcticons-dailybrief-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.332 6.288c-6.377 3.682-8.562 11.837-4.88 18.215a13.34 13.34 0 0 0 8.106 6.182l-1.438 5.367l11.548-6.667c6.378-3.683 8.563-11.838 4.88-18.216q0 0 0 0C31.864 4.79 23.71 2.605 17.331 6.286m13.337 27.658L19.12 40.611m7.6.171l-4.71 2.719"></svg:path>`,
})
export class ArcticonsDailybriefIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailydozenIcon],svg[arcticons-dailydozen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.743 43.5a1.97 1.97 0 0 0 1.839-1.266L27.277 6.399A2.95 2.95 0 0 1 30.035 4.5h9.943a1.97 1.97 0 0 0-1.839 1.266L24.444 41.601a2.95 2.95 0 0 1-2.758 1.899z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.956 33.404L14.97 14.17a1 1 0 0 0-1.895-.332L8.39 23.526a4 4 0 0 0-.388 2.037l1.187 16.012a2 2 0 0 0 1.999 1.925h.555"></svg:path>`,
})
export class ArcticonsDailydozenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailyhuntIcon],svg[arcticons-dailyhunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.986 12.494c.637 1.992.876 9.369.876 9.369s-7.71-.027-9.352-.683c-3.923-1.568-7.01-4.11-7.01-8.096c0-3.955 3.135-7.44 7.44-7.44c4.225 0 6.831 3.054 8.046 6.85m14.52 8.492c-1.992.637-9.369.876-9.369.876s.027-7.71.683-9.352c1.568-3.923 4.11-7.01 8.096-7.01c3.955 0 7.44 3.135 7.44 7.44c0 4.225-3.054 6.831-6.85 8.046m-8.492 14.52c-.637-1.992-.876-9.369-.876-9.369s7.71.027 9.352.683c3.923 1.568 7.01 4.11 7.01 8.096c0 3.955-3.135 7.44-7.44 7.44c-4.225 0-6.831-3.054-8.046-6.85m-14.52-8.492c1.992-.637 9.369-.876 9.369-.876s-.027 7.71-.683 9.352c-1.568 3.923-4.11 7.01-8.096 7.01c-3.955 0-7.44-3.135-7.44-7.44c0-4.225 3.054-6.831 6.85-8.046"></svg:path>`,
})
export class ArcticonsDailyhuntIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailymotionIcon],svg[arcticons-dailymotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.554 5.891l.002 5.953l6.876 6.536l.003-6.491zm3.236 23.944l.002 5.953l6.876 6.536l.002-6.491zm3.643-11.455l8.17.13c.35.005.703.024 1.04.119s.65.255.945.443a5.83 5.83 0 0 1 2.089 2.307c.784 1.589.744 3.526.036 5.15c-.292.673-.695 1.3-1.215 1.817s-1.16.919-1.862 1.125c-.539.157-1.103.199-1.663.235c-3.722.24-7.456.282-11.183.129"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.669 35.833c1.914.156 3.843.136 5.754-.06a14 14 0 0 0 1.904-.3c2.895-.7 5.343-2.81 6.78-5.419c1.903-3.45 2.081-7.819.388-11.377a12.06 12.06 0 0 0-3.722-4.515a11.8 11.8 0 0 0-5.426-2.183a20 20 0 0 0-1.637-.127a71 71 0 0 0-7.277.037"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.669 42.325c1.878.176 3.768.22 5.652.129c.432-.021.863-.049 1.293-.094c3.384-.351 6.64-1.767 9.247-3.952s4.563-5.125 5.635-8.353c1.703-5.128 1.1-10.99-1.681-15.624s-7.707-7.935-13.06-8.668c-1.207-.166-2.427-.207-3.645-.232a143 143 0 0 0-13.555.361"></svg:path>`,
})
export class ArcticonsDailymotionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailypicIcon],svg[arcticons-dailypic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5h-1a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2h-1m-6 0h-19m22 3v-6m-25 6v-6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.09 31.288A6.986 6.986 0 0 0 30.985 25.5m-3.079-5.792a6.986 6.986 0 0 0-10.89 5.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.906 25.5h-2.625l3.61-3.609L34.5 25.5h0zm-11.812.001h2.625l-3.61 3.609l-3.609-3.609z"></svg:path>`,
})
export class ArcticonsDailypicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailytubeIcon],svg[arcticons-dailytube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.12 5.5H8.38v37h12.74A18.5 18.5 0 0 0 39.62 24h0a18.5 18.5 0 0 0-18.5-18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.073 24l-9.355-7.626v15.252zM8.381 5.5l13.337 10.874M8.381 42.5l13.337-10.874M31.073 24l2.56 2.087c2.7 1.964 3.836 7.39.586 10.976"></svg:path>`,
})
export class ArcticonsDailytubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDainikBhaskarIcon],svg[arcticons-dainik-bhaskar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5v7.124m0 26.752V44.5M5.421 15.336l6.456 3.011m24.246 11.306l6.456 3.011m0-17.328l-6.456 3.011M11.877 29.653l-6.456 3.011"></svg:path>`,
})
export class ArcticonsDainikBhaskarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaisoIcon],svg[arcticons-daiso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.123 19.035L24 5.5l13.877 13.535"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.123 31.108L24 17.573l13.877 13.535"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.123 42.5L24 28.965L37.877 42.5"></svg:path>`,
})
export class ArcticonsDaisoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaisoAlt1Icon],svg[arcticons-daiso-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.252 29.709l4.624-5.08l4.624 5.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.252 26.54l4.624-5.08l4.624 5.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.252 23.37l4.624-5.079l4.624 5.08M9.355 26.54l4.624-5.08l4.624 5.08m1.728-5.079v5.078m7.089-.556c.326.406.735.557 1.305.557h.788c.734 0 1.328-.568 1.328-1.267v-.006c0-.7-.594-1.267-1.328-1.267h-.87c-.734 0-1.33-.568-1.33-1.268c0-.703.597-1.272 1.333-1.272h.784c.57 0 .98.151 1.306.557M4.5 26.54v-5.08h1.198c1.287 0 2.33.995 2.33 2.222v.635c0 1.227-1.044 2.222-2.33 2.222z"></svg:path><svg:rect width="3.528" height="5.079" x="22.159" y="21.461" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.764" ry="1.764"></svg:rect>`,
})
export class ArcticonsDaisoAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDakIcon],svg[arcticons-dak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.497L24 5.987L5.5 19.497m33.105 5.477v15.592a1.447 1.447 0 0 1-1.447 1.447H10.842a1.447 1.447 0 0 1-1.447-1.447V24.974"></svg:path>`,
})
export class ArcticonsDakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDanaIcon],svg[arcticons-dana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 17.812c-7.667-5.445-15.333 5.445-23 0v12.376c7.667 5.445 15.333-5.445 23 0z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDanaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDanceCommunityIcon],svg[arcticons-dance-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.449 27.03s-1.26-3.6.18-8.46m3.481 13.86s3.72 2.881 8.22 2.521"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.247 13.75L24 3.5l17.754 10.25v20.5L24 44.5L6.247 34.25z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.875 27.353c1.264-.45 2.81.358 3.453 1.804s.139 2.982-1.125 3.432s-2.81-.36-3.453-1.805s-.139-2.982 1.125-3.431"></svg:path><svg:ellipse cx="34.051" cy="18.089" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.371" ry="2.431"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.97 13.049s5.46-.12 8.4 3.18m3.061 13.141s1.68-4.26.18-8.64"></svg:path>`,
})
export class ArcticonsDanceCommunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDancerail3Icon],svg[arcticons-dancerail3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.6 27.7h3.7v3.7h-3.7zm-5.55 0h3.7v3.7h-3.7zm-5.55 0h3.7v3.7H5.5zm0-5.55h3.7v3.7H5.5zM22.15 5.5l3.7 3.7h-3.7zm5.55 11.1h3.7v3.7h-3.7zm5.55 0h3.7v3.7h-3.7zm-11.1 5.55h3.7v3.7h-3.7zm0 5.55h3.7v3.7h-3.7zm5.55 0h3.7v3.7h-3.7zm5.55 0h3.7v3.7h-3.7zm5.55 11.1h3.7v3.7h-3.7zm-16.65-5.55h3.7v3.7h-3.7zm0 5.55h3.7v3.7h-3.7zm16.65-5.55h3.7v3.7h-3.7zM5.5 16.6h3.7v3.7H5.5zm16.65-5.55h3.7v3.7h-3.7zm0 5.55h3.7v3.7h-3.7zM5.5 5.5h3.7v3.7H5.5zm0 5.55h3.7v3.7H5.5zm33.3 5.55l3.7 3.7h-3.7zm0 5.55h3.7v3.7h-3.7zM11.05 5.5h3.7v3.7h-3.7zm5.55 0h3.7v3.7h-3.7z"></svg:path>`,
})
export class ArcticonsDancerail3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDankchatIcon],svg[arcticons-dankchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.581 4.5c-4.045 5.362-6.318 11.313-8.542 17.281l24.677-1.183A78 78 0 0 0 25.34 4.911"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.043 21.777c-6.312 7.156-4.624 10.789-3.7 14.764c6.347 3.245 18.272 7.05 26.456-3.332m5.208-8.694a10.75 10.75 0 0 0-3.293-3.92M5.15 37.795l1.192-1.251"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.432 43.5c.029-3.157-.954-5.701-3.65-7.206m9.783-4.788l3.284-.87l-2.616 10.09l-3.116.393Zm-22.753.399c-.496.525-.624 1.825.012 2.168c2.448 1.318 6.053.55 9.073.348c2.76-.185 5.504-1.819 8.178-1.417c.335.05.004-.743.238-.988c.618-.643 2.098.023 2.573-.73c.162-.257.145-.833-.152-.9a31.6 31.6 0 0 0-8.47.148c-1.14.17-2.186.76-3.322.948c-2.677.446-6.266-1.55-8.13.423m21.198-7.387c.235 1.007.484 2.02-.063 2.653c-1.597 1.7-9.384 2.22-10.633 1.43l-1.986-1.254l-.993.591c-.849.505-6.964-.122-8.58-1.488l-2.683-2.267a21.7 21.7 0 0 0 3.482-1.03s6.12-.486 8.582 1.011a3.5 3.5 0 0 1 .84 1.242l2.96.318l3.877-1.197a8.4 8.4 0 0 1 5.196-.009Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.357 27.521s-.365-1.745.18-2.053c1.7-.962 3.36-1.19 4.852-.264c.976.606-.036 2.796-.036 2.796m7.863.853a15.2 15.2 0 0 1 1.539-2.721a2.46 2.46 0 0 1 2.903-.39c.7.625.431 2.333.431 2.333m1.523-.602c-.964 1.312-1.783 2.586-1.624 2.776"></svg:path>`,
})
export class ArcticonsDankchatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDankortIcon],svg[arcticons-dankort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.976 12.876a11.33 11.33 0 0 0-7.824 3.097h13.39c4.78 0 7.008 2.213 7.622 5.85c1.53-1.77 3.097-3.582 5.35-5.865l8.75-.126a11.05 11.05 0 0 0-8.047-2.956Zm28.353 5.02l-5.563 5.334l5.953 6.54a8.74 8.74 0 0 0 1.781-5.3a11 11 0 0 0-2.17-6.575M26.251 25.01a7.73 7.73 0 0 1-7.709 6.347H4.5a11.32 11.32 0 0 0 8.476 3.767h19.242a11.14 11.14 0 0 0 8.184-3.23l-8.829.033ZM9.997 21.96l-1.173 3.77l6.569-.098a2.71 2.71 0 0 0 2.106-1.853a1.51 1.51 0 0 0-1.286-1.8Z"></svg:path>`,
})
export class ArcticonsDankortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDanskErhvervIcon],svg[arcticons-dansk-erhverv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 22.813v-6.435h1.448a2.815 2.815 0 0 1 2.815 2.815v.804a2.815 2.815 0 0 1-2.815 2.816zm10.555 0v-6.435l4.263 6.435v-6.435m7.421 0v6.435m3.459 0l-2.65-3.218l2.65-3.196m-2.65 3.196h-.809m-5.717 2.513c.395.513.89.705 1.578.705h.953c.887 0 1.605-.72 1.605-1.609h0c0-.888-.719-1.609-1.605-1.609H24c-.886 0-1.605-.72-1.605-1.609h0c0-.888.719-1.608 1.605-1.608h.953c.688 0 1.183.191 1.578.705m-15.518 5.711l2.09-6.416m2.093 6.435l-2.093-6.435m1.393 4.282h-2.788M6 31.622h3.218M6 25.187h3.218M6 28.405h2.098M6 25.187v6.435m4.78.001v-6.436h2.106c1.191 0 2.157.968 2.157 2.161s-.966 2.162-2.157 2.162H10.78m2.106 0l2.107 2.111m13.367.001h3.217m-3.217-6.435h3.217m-3.217 3.218h2.097m-2.097-3.218v6.435m5.036.001v-6.436h2.107c1.191 0 2.157.968 2.157 2.161s-.966 2.162-2.157 2.162h-2.107m2.107 0l2.107 2.111m-21.014-6.434v6.435m4.264-6.435v6.435m-4.264-3.229h4.264m22.238-3.206l-2.131 6.435l-2.132-6.435m-12.177 0l-2.131 6.435l-2.132-6.435"></svg:path>`,
})
export class ArcticonsDanskErhvervIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDanteIcon],svg[arcticons-dante-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.589 5.5h8.087v36.904h-8.087zm8.087 4.24l6.68-1.194l5.858 32.76l-6.68 1.193zm-15.152-.615h6.97v33.279h-6.97zM5.786 7.319h8.738v35.086H5.786zm25.218 9.846l6.686-1.162m-8.013 21.515h-8.088M5.786 13.03h8.738m0 1.792h7.065"></svg:path>`,
})
export class ArcticonsDanteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDantotsuIcon],svg[arcticons-dantotsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.232 32.467H24a8.467 8.467 0 1 0 0-16.934H4.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.345 9.224H24c8.16 0 14.776 6.616 14.776 14.776S32.16 38.776 24 38.776H8.345"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.974 22.763l-6.272-3.621a1.43 1.43 0 0 0-2.143 1.237v7.242c0 1.1 1.19 1.787 2.143 1.237l6.272-3.62a1.43 1.43 0 0 0 0-2.475"></svg:path>`,
})
export class ArcticonsDantotsuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDantotsuAltIcon],svg[arcticons-dantotsu-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m15.005 28.44H5.955m18.55-20.274H5.686"></svg:path><svg:path d="M24.505 13.666q.154-.005.308-.005c5.616 0 10.169 4.553 10.169 10.17h0c0 5.616-4.553 10.109-10.17 10.109c-.126 0-.18.005-.307 0"></svg:path><svg:path d="M20.77 19.85v7.509c.07.926.843 1.418 2.083.978l6.316-3.935c.481-.347.51-.907.05-1.267l-6.38-3.947c-1.103-.621-1.91-.285-2.069.661z"></svg:path></svg:g>`,
})
export class ArcticonsDantotsuAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDapnetIcon],svg[arcticons-dapnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.438 22.73c4.94 0 8.949 3.997 8.949 8.937s-4.01 8.949-8.95 8.949S5.5 36.607 5.5 31.667s3.998-8.938 8.938-8.938M17.22 7.384c2.684 0 4.852 2.18 4.852 4.863S19.904 17.1 17.22 17.1a4.857 4.857 0 1 1 0-9.715m18.193 7.327a7.09 7.09 0 0 1 7.087 7.086c0 3.922-3.176 7.098-7.087 7.098a7.096 7.096 0 0 1-7.097-7.098c0-3.91 3.176-7.086 7.097-7.086m-13.877-.208l7.535 3.976M22.63 27.8l6.168-2.88"></svg:path>`,
})
export class ArcticonsDapnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarazIcon],svg[arcticons-daraz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.25 26.538c0-3.988-3.262-7.25-7.25-7.25h0c-3.987 0-7.25 3.262-7.25 7.25v4.712c0 3.988 3.263 7.25 7.25 7.25h0c3.988 0 7.25-3.262 7.25-7.25m0 7.25v-29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path>`,
})
export class ArcticonsDarazIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkIcon],svg[arcticons-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.922 37.875h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312L38.252 24h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.336-2.312L38.252 5.5h2.67l1.335 2.313Zm-4.006 2.313h-5.05c-.51-1.11-1.894-2.22-.748-3.33c.402-.414.442-1.456 1.175-1.296h4.623l1.336 2.313Zm0 4.624h-5.05L30.53 14.75l1.335-2.312h5.05l1.336 2.312Zm-4.623 0h4.623l1.336 2.313l-1.336 2.313m-4.623 0h4.623L38.252 24l-1.336 2.313h-5.05m.427 0h4.623l1.336 2.312l-1.336 2.313h-5.05m.427 0h4.623l1.336 2.312l-1.336 2.313h-5.05m.427 0h4.623l1.336 2.312l-1.336 2.313h-5.05M30.53 42.5h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312L27.86 24h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm0-4.625h-2.67l-1.335-2.312L27.86 5.5h2.67l1.335 2.313Zm-4.006 2.313h-5.05l-1.336-2.313l1.335-2.312h5.051l1.335 2.312Zm0 4.624h-5.05l-1.336-2.312l1.335-2.312h5.051l1.335 2.312ZM20.14 24l1.336-2.312h5.05L27.86 24l-1.335 2.313h-5.05m0 0h5.05l1.335 2.312l-1.335 2.313h-5.05m0 0h5.05l1.335 2.312l-1.335 2.313h-5.05m5.05 4.624h-5.05l-1.336-2.312l1.336-2.312h5.05l1.335 2.312Zm-6.385-2.312l1.335 2.313L20.14 42.5h-2.67l-1.336-2.312l1.335-2.313m2.67-4.625l1.335 2.313m-1.334 2.312h-2.67l-1.336-2.312l1.335-2.313m0-4.625h2.67m0 0l1.335 2.313l-1.334 2.312h-2.67l-1.336-2.312l1.335-2.313M20.14 24l1.335 2.313l-1.335 2.312m-2.67 0l-1.336-2.312L17.469 24m2.67-4.625l1.335 2.313M20.14 24h-2.67l-1.336-2.312l1.335-2.313m2.67 0h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm-2.67-4.625l-1.335-2.312l1.335-2.313h2.67l1.335 2.313l-1.334 2.312m-2.67-4.625l-1.336-2.312L17.469 5.5h2.67l1.335 2.313l-1.334 2.312m-9.056 2.313l-1.336-2.313l1.335-2.312h5.05l1.336 2.312l-1.335 2.313m-5.05 4.624L9.747 14.75l1.335-2.312h5.05l1.336 2.312l-1.335 2.313m-6.386 2.312l1.335-2.312h5.051l1.335 2.312l-1.335 2.313m-5.05 4.625L9.747 24l1.335-2.312h5.051L17.469 24l-1.335 2.313m-5.05 0h5.05l1.335 2.312l-1.335 2.313h-5.05m5.05 0l1.335 2.312l-1.335 2.313h-5.05L9.747 33.25m6.386 2.313l1.335 2.312l-1.335 2.313h-5.05l-1.336-2.313m1.335 2.313L9.748 42.5h-2.67l-1.335-2.312l1.335-2.313m2.67-4.625l1.335 2.313l-1.335 2.312h-2.67l-1.335-2.312l1.335-2.313m2.67 0h-2.67l-1.335-2.312l1.335-2.313h2.67l1.335 2.313Zm1.335-6.937l-1.335 2.312h-2.67l-1.335-2.312L7.078 24h2.67m-2.67 0l-1.335-2.312l1.335-2.313h2.67l1.335 2.313m-4.005-2.313l-1.335-2.312l1.335-2.313h2.67m0 0h-2.67l-1.335-2.312l1.335-2.313h2.67m0 0h-2.67L5.743 7.813L7.078 5.5h2.67l1.335 2.313m31.174 32.374L40.922 42.5h-2.67l-1.335-2.312l1.335-2.313h2.67Z"></svg:path>`,
})
export class ArcticonsDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkLauncherIcon],svg[arcticons-dark-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 37.728c-11.874 0-21.5-9.626-21.5-21.5c0-5.016 1.732-9.62 4.61-13.277C9.843 4.978 2.5 13.631 2.5 24c0 11.874 9.626 21.5 21.5 21.5c6.858 0 12.953-3.223 16.89-8.224a21.6 21.6 0 0 1-4.39.452M25.108 14.159V8.607m-2.776 2.776h5.551m12.785 12.365v-2.356m-1.177 1.178h2.355M28.22 30.561v-2.355m-1.178 1.177h2.355"></svg:path><svg:circle cx="22.363" cy="22.139" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.763" cy="20.814" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.665" cy="8.113" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.858" cy="3.701" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.926" cy="26.639" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.882" cy="34.483" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsDarkLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkModeIcon],svg[arcticons-dark-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.8 29.3c-8.9-.8-16.2-7.8-17.5-16.6c-.3-1.8-.3-3.7 0-5.4c.2-1.4-1.4-2.3-2.5-1.6C6.3 9.7 2.1 16.9 2.5 25c.5 10.7 9 19.5 19.7 20.4c10.6.9 19.8-6 22.5-15.6c.4-1.4-1-2.6-2.3-2q-4.35 1.95-9.6 1.5"></svg:path>`,
})
export class ArcticonsDarkModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkcrocThemeIcon],svg[arcticons-darkcroc-theme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.104 16.104L8.797 8.797m30.406 30.406l-7.488-7.564A10.861 10.861 0 1 1 24 13.136a11.82 11.82 0 0 1 7.804 3.058l7.474-7.32a21.5 21.5 0 1 0-.087 30.34M16.27 31.73l-7.473 7.473"></svg:path>`,
})
export class ArcticonsDarkcrocThemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkerIcon],svg[arcticons-darker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.985 5.342l2.049-2.389a1.297 1.297 0 0 1 2.217.441l.98 2.991a1.297 1.297 0 0 0 1.819.754l2.807-1.423a1.297 1.297 0 0 1 1.88 1.256l-.24 3.139c-.06.792.6 1.453 1.392 1.392l3.139-.24a1.297 1.297 0 0 1 1.256 1.88L40.86 15.95c-.36.71-.002 1.572.754 1.82l2.99.979a1.297 1.297 0 0 1 .442 2.217l-2.389 2.05a1.297 1.297 0 0 0 0 1.968l2.389 2.05c.767.658.52 1.903-.441 2.217l-2.991.98a1.297 1.297 0 0 0-.754 1.819l1.423 2.807a1.297 1.297 0 0 1-1.256 1.88l-3.139-.24c-.792-.06-1.453.6-1.392 1.392l.24 3.138a1.297 1.297 0 0 1-1.88 1.257L32.05 40.86a1.297 1.297 0 0 0-1.82.754l-.979 2.99a1.297 1.297 0 0 1-2.217.442l-2.05-2.389a1.297 1.297 0 0 0-1.969 0l-2.049 2.389a1.297 1.297 0 0 1-2.217-.441l-.98-2.991a1.297 1.297 0 0 0-1.819-.754l-2.807 1.423a1.297 1.297 0 0 1-1.88-1.257l.24-3.138c.06-.792-.6-1.453-1.392-1.392l-3.139.24a1.297 1.297 0 0 1-1.256-1.88L7.14 32.05c.36-.71.002-1.572-.754-1.82l-2.99-.979a1.297 1.297 0 0 1-.442-2.217l2.389-2.05a1.297 1.297 0 0 0 0-1.969l-2.389-2.049a1.297 1.297 0 0 1 .441-2.217l2.991-.98a1.297 1.297 0 0 0 .754-1.819l-1.423-2.807a1.297 1.297 0 0 1 1.256-1.88l3.139.24c.792.06 1.453-.6 1.392-1.392l-.24-3.139a1.297 1.297 0 0 1 1.88-1.256L15.95 7.14c.71.36 1.572.002 1.82-.754l.979-2.99a1.297 1.297 0 0 1 2.217-.442l2.05 2.389a1.297 1.297 0 0 0 1.969 0"></svg:path><svg:circle cx="24" cy="24" r="13.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDarkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkmodelivewallpaperIcon],svg[arcticons-darkmodelivewallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 11.974L13.908 35.478l-2.033-6.315l-4.365 8.692"></svg:path><svg:circle cx="13.419" cy="15.733" r="3.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.94 12.254l-.915-.916m8.789 8.79l-.916-.916m-3.478-8.398V9.518m0 12.43v-1.296m4.919-4.919h1.296m-12.431 0H8.5m8.398-3.479l.916-.916m-8.789 8.79l.916-.916m25.167-7.708l-.069.005a4.225 4.225 0 0 1-2.88 7.24a4.225 4.225 0 1 0 2.949-7.246Z"></svg:path><svg:circle cx="31.117" cy="12.443" r=".333" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.005" cy="16.319" r=".333" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 11.974l10.092 23.504l2.033-6.315l4.302 8.567M24 45.406V11.974"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDarkmodelivewallpaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarknessImmunityIcon],svg[arcticons-darkness-immunity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m45.5 24l-6.289 6.29v8.921H30.29L24 45.5l-6.29-6.289H8.79V30.29L2.5 24l6.29-6.29V8.79h8.92L24 2.5l6.29 6.29h8.921v8.92z"></svg:path><svg:circle cx="24" cy="24" r="11.516" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.632 29.443V18.557h3.606c2.585 0 4.762 2.177 4.762 4.763v1.36c0 2.586-2.177 4.763-4.762 4.763z"></svg:path>`,
})
export class ArcticonsDarknessImmunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarksideBlackIconPackIcon],svg[arcticons-darkside-black-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 29.873l-11.48 1.652a3.29 3.29 0 0 1-3.76-3.255V12.214a3.89 3.89 0 0 1 3.338-3.853l19.64-2.827a3.29 3.29 0 0 1 3.759 3.257v7.684L24 18.127z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 18.127l11.48-1.652a3.29 3.29 0 0 1 3.759 3.256v16.055a3.89 3.89 0 0 1-3.338 3.853l-19.64 2.827a3.29 3.29 0 0 1-3.759-3.257l.018-7.684L24 29.873z"></svg:path>`,
})
export class ArcticonsDarksideBlackIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkskyIcon],svg[arcticons-darksky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M23.87 4.5a5.9 5.9 0 0 1-.66 2.06a45.6 45.6 0 0 1-3.69 5.52c-.11.13-.21.24-.31.38a23.4 23.4 0 0 1 8.59-2.2Zm4.46 6.5a38 38 0 0 0-5.15 7.88s.19 0 3.11-.82a22 22 0 0 0-3 10.71l2.06-1a35.16 35.16 0 0 0 0 15.62a13.91 13.91 0 0 0 12.46-13.72a2.6 2.6 0 0 0 0-1.05c-.12-4.77-3.38-8.7-5.69-12.09ZM18 14a56.5 56.5 0 0 0-4.82 6.47a20 20 0 0 0-2.62 5.92a10.7 10.7 0 0 0-.38 3.31a13.8 13.8 0 0 0 13.75 13.8c.43 0 .84 0 1.26-.06c-2.67-3.88-2.76-4.12-4.06-10.91l-1.54 1s-1.7-7.71-.94-10.18l-2.17 1.12A38.2 38.2 0 0 1 18 14Z"></svg:path>`,
})
export class ArcticonsDarkskyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkthemeIcon],svg[arcticons-darktheme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.885 17.505c-.422-1.826-3.38-2.077-4.71-1.242c-.624.392-1.351 1.34-1.374 2.58c-.023 1.26.766 2.458.698 3.716c-.18 3.348-2.907 6.276-2.907 9.628c0 2.05.589 4.217 1.778 5.887c1.846 2.59 4.653 4.789 7.73 5.589c2.565.666 5.625.34 7.894-.932M37.07 25.36a2.6 2.6 0 0 1 2.6 2.6h0a2.6 2.6 0 0 1-2.6 2.6h0m.45-12.766a2.888 2.888 0 0 1 0 5.777m-.45-12.543a2.79 2.79 0 0 1 2.792 2.792h0a2.79 2.79 0 0 1-2.792 2.792h0"></svg:path><svg:rect width="21.196" height="38.719" x="15.857" y="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.759" ry="2.759"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.169 40.603v-.5l-.5.25zm10.571-.5v.5h.5v-.5zM25.444 6.607h4.38"></svg:path><svg:circle cx="26.455" cy="40.353" r=".75" fill="currentColor"></svg:circle><svg:circle cx="23.518" cy="6.607" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.975 27.309a4.333 4.333 0 1 1-4.901-6.053"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.927 27.297a4.14 4.14 0 0 1-4.865-6.007"></svg:path><svg:circle cx="30.787" cy="20.663" r="1.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.787 17.775v-.963m-2.042 1.809l-.68-.68m-.166 2.723h-.963m1.809 2.042l-.68.68m2.722.166v.963m2.043-1.809l.68.68m.166-2.722h.963m-1.809-2.043l.68-.68"></svg:path>`,
})
export class ArcticonsDarkthemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarqIcon],svg[arcticons-darq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.54 2.777A21.502 21.502 0 1 1 24 45.5a22 22 0 0 1-3.48-.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.52 45.22a21.504 21.504 0 0 1 .02-42.443m.02 42.283V2.848m3.986 4.651c8.377 0 16.928 6.173 16.928 16.501s-8.551 16.501-16.928 16.501m0 0V7.5"></svg:path>`,
})
export class ArcticonsDarqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDartcheckerIcon],svg[arcticons-dartchecker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.424 45.229a3.5 3.5 0 1 0-6.853-.024"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.886 22.475a23.5 23.5 0 0 0-15.75-.008m14.862 21.868a7 7 0 0 0-13.996 0m4.639-6.422L10.632 7.165m15.727 30.747L37.368 7.165"></svg:path>`,
})
export class ArcticonsDartcheckerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDartyIcon],svg[arcticons-darty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.954 28.653v-9.307h3.01c1.703 0 3.083 1.4 3.083 3.126s-1.38 3.125-3.082 3.125h-3.011m3.011 0l3.012 3.054m1.88-9.305h6.093m-3.047 9.307v-9.307m10.95.001L39.807 24l-3.047-4.653m3.047 9.307V24m-34.66 4.653v-9.307h2.069c2.222 0 4.024 1.823 4.024 4.072v1.163c0 2.249-1.802 4.072-4.024 4.072zm12.987-3.083h-4.075m-1.009 3.083l3.047-9.307l3.046 9.307"></svg:path>`,
})
export class ArcticonsDartyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarwinboxIcon],svg[arcticons-darwinbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.926 5.5H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-1.264"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.528 32.759V8.866A3.366 3.366 0 0 1 32.894 5.5h.852m-4.219 17.041c0-3.306-2.704-6.01-6.01-6.01h0c-3.306 0-6.01 2.705-6.01 6.01v3.907c0 3.306 2.704 6.01 6.01 6.01h0c3.306 0 6.01-2.704 6.01-6.01"></svg:path>`,
})
export class ArcticonsDarwinboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDasersteIcon],svg[arcticons-daserste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M39.57 5.5v29.73L19.78 42.5V21.32L8.43 25.5V17Z"></svg:path>`,
})
export class ArcticonsDasersteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDasherIcon],svg[arcticons-dasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.224 31.315h5.278a4.113 4.113 0 0 0 4.113-4.113h0a4.113 4.113 0 0 0-4.114-4.114H15.386"></svg:path><svg:rect width="29.99" height="32.597" x="9.005" y="10.903" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.384"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.542 10.903V7.268A2.77 2.77 0 0 0 27.774 4.5h-7.548a2.77 2.77 0 0 0-2.768 2.768v3.635"></svg:path>`,
})
export class ArcticonsDasherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDashlaneIcon],svg[arcticons-dashlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.483 5.976l-4.738-1.432a1.025 1.025 0 0 0-1.322.982v35.517c0 .452.296.85.729.981l4.738 1.431a1.025 1.025 0 0 0 1.322-.981V6.957c0-.452-.297-.85-.73-.981"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.271 5.976l-4.738-1.432a1.025 1.025 0 0 0-1.321.982v9.787c0 .452.296.85.728.982l4.738 1.43a1.025 1.025 0 0 0 1.322-.98V6.956c0-.452-.296-.85-.729-.981m0 25.73l-4.738-1.43a1.025 1.025 0 0 0-1.321.98v9.788c0 .452.296.85.728.981l4.738 1.431A1.025 1.025 0 0 0 24 42.474v-9.787c0-.452-.296-.851-.729-.982M30.06 9.75l-4.738-1.43A1.025 1.025 0 0 0 24 9.3v9.788c0 .452.296.85.729.981l4.738 1.431a1.025 1.025 0 0 0 1.321-.981v-9.787c0-.452-.296-.851-.728-.982"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.06 29.63l-4.738-1.432A1.025 1.025 0 0 0 24 29.18v9.787c0 .452.296.85.729.981l4.738 1.431a1.025 1.025 0 0 0 1.321-.981V30.61c0-.452-.296-.851-.728-.982m6.788-13.883l-4.738-1.43a1.025 1.025 0 0 0-1.322.98V33.84c0 .452.296.85.73.981l4.737 1.431a1.025 1.025 0 0 0 1.322-.981V16.727c0-.452-.296-.851-.729-.982"></svg:path>`,
})
export class ArcticonsDashlaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDashwalletIcon],svg[arcticons-dashwallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.85 41.434l1.408-9.362h15.035c4.137 0 6.845-7.443 6.845-11.218s-3.06-4.926-6.835-4.926H13.721l1.418-9.362h11.164c8.946 0 16.197 5.332 16.197 14.288c0 8.946-7.25 20.58-16.207 20.58z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 27.519h13.926l1.066-7.038H6.556z"></svg:path>`,
})
export class ArcticonsDashwalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDataMonitorIcon],svg[arcticons-data-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 33.4l9.155-11.57l8.282 16.035l6.693-27.73l4.234 8.168l6.146-6.821l4.49 8.405"></svg:path>`,
})
export class ArcticonsDataMonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDatabackupIcon],svg[arcticons-databackup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.296 26.887L6.132 17.24a1.233 1.233 0 0 1 0-2.149l17.164-9.646c.437-.246.97-.246 1.408 0l17.164 9.646a1.233 1.233 0 0 1 0 2.15l-17.164 9.646c-.437.246-.97.246-1.408 0m13.519 1.037l5.056 2.843a1.228 1.228 0 0 1 0 2.143l-17.172 9.646a1.42 1.42 0 0 1-1.398 0L6.129 32.91a1.228 1.228 0 0 1 0-2.143l5.056-2.843"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.815 20.084l5.056 2.842a1.237 1.237 0 0 1 0 2.155l-5.056 2.843l-12.116 6.804a1.42 1.42 0 0 1-1.398 0l-12.116-6.804l-5.056-2.843a1.237 1.237 0 0 1 0-2.155l5.056-2.842"></svg:path>`,
})
export class ArcticonsDatabackupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDatacampIcon],svg[arcticons-datacamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.361 17.016L10.527 31.69V5.5l13.604 7.207v22.178L37.473 42.5"></svg:path>`,
})
export class ArcticonsDatacampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDatadexIcon],svg[arcticons-datadex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.838 26.332a6.69 6.69 0 0 0-6.668-6.668h0a6.69 6.69 0 0 0-6.669 6.668v4.335a6.69 6.69 0 0 0 6.669 6.669h0a6.69 6.69 0 0 0 6.669-6.67m0 6.67V10.66m7.99 26.678V10.662h4.334A13.377 13.377 0 0 1 43.501 24h0a13.377 13.377 0 0 1-13.338 13.338Z"></svg:path><svg:ellipse cx="34.748" cy="23.873" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.301" ry="3.165"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.145 24h5.346m12.006 0h-5.342"></svg:path>`,
})
export class ArcticonsDatadexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDatawingIcon],svg[arcticons-datawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5L15.5 30l8.87-2.81l8.13 2.79Zm-4.9 24.32V43.5m3.23-15.71V43.5m3.86-15.73V43.5M29.63 29v14.5"></svg:path>`,
})
export class ArcticonsDatawingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaumIcon],svg[arcticons-daum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.85 13.594c5.747 0 10.406 4.659 10.406 10.406s-4.66 10.406-10.407 10.406h-8.093V13.594z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.838 42.5H6.662v-37h16.176c10.217 0 18.5 8.283 18.5 18.5s-8.283 18.5-18.5 18.5"></svg:path>`,
})
export class ArcticonsDaumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDavdroidIcon],svg[arcticons-davdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M22.1 25.69a1.58 1.58 0 0 1 1.12.46l1.38 1.39a9.78 9.78 0 0 1 11.45 0l1.39-1.39a1.59 1.59 0 1 1 2.24 2.25l-1.38 1.38a9.8 9.8 0 0 1 1.85 5.73v8H20.51v-8a9.76 9.76 0 0 1 1.85-5.72L21 28.4a1.59 1.59 0 0 1 1.13-2.71Zm4.07 8.13a1.83 1.83 0 0 0-1.83 1.83a1.84 1.84 0 0 0 1.83 1.83A1.83 1.83 0 0 0 28 35.65a1.84 1.84 0 0 0-1.83-1.83Zm8.32 0a1.83 1.83 0 1 0 1.83 1.83a1.83 1.83 0 0 0-1.83-1.83Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.85 19.17h16.76m-11.04 5.46l-5.72-5.46m5.72-5.43l-5.72 5.43m30.54-9.22H21.63M32.67 4.5l5.72 5.45m-5.72 5.44l5.72-5.44"></svg:path>`,
})
export class ArcticonsDavdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaviaAltIcon],svg[arcticons-davia-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.24h5.86l2.125 2.132l-2.067 2.033H4.5m8.716 0l4.18-4.164l4.245 4.164m13.893 0l3.943-4.164l4.023 4.164m-10.313 0v-4.164m-2.383-.001h-5.86l-2.124 2.132l2.066 2.033h5.918M43.5 14.595H27.933L24 18.528l-3.933-3.933H4.5m0 10.387h15.567L24 21.049l3.933 3.933H43.5"></svg:path>`,
})
export class ArcticonsDaviaAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaviplataIcon],svg[arcticons-daviplata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.734 27.695v-4.187m0 2.607c0 .873-.663 1.58-1.481 1.58h0c-.819 0-1.482-.708-1.482-1.58v-1.027c0-.873.663-1.58 1.482-1.58h0c.818 0 1.481.708 1.481 1.58m-8.559 2.607v-4.187m0 2.607c0 .873-.663 1.58-1.481 1.58h0c-.818 0-1.481-.708-1.481-1.58v-1.027c0-.873.663-1.58 1.481-1.58h0c.818 0 1.481.708 1.481 1.58m1.983-1.58h1.556m-.778-1.303v4.7c0 .435.332.79.74.79h.223m-14.633-4.187v6.32m0-3.713c0 .873.663 1.58 1.481 1.58h0c.819 0 1.482-.708 1.482-1.58v-1.027c0-.873-.663-1.58-1.482-1.58h0c-.818 0-1.481.708-1.481 1.58m5.368-3.713v5.53c0 .436.332.79.741.79h.222M6.715 18.08c-2.834 3.033-.456 5.343 4.41 4.763c.128 3.836-2.782 5.714-3.527 8.753c-1.176 4.8 4.898 8.852 11.502 7.572c0 0 2.045.812 4.893.812s4.9-.812 4.9-.812c6.61 1.28 12.685-2.772 11.509-7.572c-.745-3.04-3.655-4.917-3.527-8.753c4.866.58 7.244-1.73 4.41-4.763c-1.405-1.503-3.055-2.66-4.608-3.58c.166-1.325.427-2.377.68-3.447c.373-1.567-.576-1.765-1.117-1.765h-3.508c-1.063.1-1.041.566-1.031 1.294l.007.555c-2.568-1.407-5.246-2.5-7.898-3.116c-5.85 1.36-14.308 7.075-17.095 10.058z"></svg:path>`,
})
export class ArcticonsDaviplataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDawdleIcon],svg[arcticons-dawdle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.774 31.082l.87-6.367l8.836-1.611l-19.152-8.506L3.5 15.808l6.09 2.823l-1.212 8.872m26.396 3.579s-17.423 4.222-26.396-3.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.197 18.93L44.5 23.167v10.234"></svg:path>`,
})
export class ArcticonsDawdleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDawnIcon],svg[arcticons-dawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 17.08c.54-.06 1.64-.16 2.18-.2s1.21-.05 1.81-.05A29.2 29.2 0 0 1 35.26 19A4.41 4.41 0 0 1 39 16.83a4.65 4.65 0 0 1 4.5 4.79h0a5 5 0 0 1-1.07 3.11a7.6 7.6 0 0 1 1.07 3.77c0 6.5-8.73 11.67-19.5 11.68h0C13.23 40.18 4.5 35 4.5 28.5h0a7.7 7.7 0 0 1 1.07-3.78a5 5 0 0 1-1.07-3.1A4.65 4.65 0 0 1 9 16.83h0A4.42 4.42 0 0 1 12.75 19A25.8 25.8 0 0 1 20 17.08"></svg:path><svg:circle cx="25.19" cy="7.59" r="2.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.25 9.34c-3 2.32-.39 4.82 1.8 3.45c1.38-.86 2.75-1.36 3.6-.2s-.26 3.11-2.72 4.3M8.49 30.21a3 3 0 0 0 3 3h5.68a4.12 4.12 0 0 0 4-3l.66-2.38A2.29 2.29 0 0 1 24 26.11h0a2.29 2.29 0 0 1 2.22 1.69l.66 2.38a4.12 4.12 0 0 0 4 3h5.64a3 3 0 0 0 3-3v-5.51a2 2 0 0 0-1.83-2c-4-.32-9-.39-13.68-.35s-9.68 0-13.68.35a2 2 0 0 0-1.83 2Z"></svg:path>`,
})
export class ArcticonsDawnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDayOneIcon],svg[arcticons-day-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.283 29.765l7.222-3.227c.315-.14.675-.14.99 0l7.222 3.227c.395.163.825-.136.825-.574V5.5H15.458v23.69c0 .439.43.738.825.575"></svg:path>`,
})
export class ArcticonsDayOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDayToDayExpensesIcon],svg[arcticons-day-to-day-expenses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.386 9.648A20.4 20.4 0 0 1 24 3.503c11.294 0 20.45 9.155 20.45 20.449S35.294 44.402 24 44.402S3.55 35.246 3.55 23.952c0-3.946 1.119-7.631 3.055-10.756"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.819 23.824a2.193 2.193 0 0 1-4.387 0v0c0-1.211.982-2.193 2.193-2.193h.001c1.211 0 2.193.982 2.193 2.193"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.649 17.04h10.71a2.78 2.78 0 0 1 2.786 2.773v8.01a2.78 2.78 0 0 1-2.774 2.785H24.649a2.78 2.78 0 0 1-2.786-2.773v-8.01a2.78 2.78 0 0 1 2.774-2.786z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 30.562v2.75a2.78 2.78 0 0 1-2.773 2.787H14.41a2.78 2.78 0 0 1-2.786-2.774V14.592a2.78 2.78 0 0 1 2.774-2.786h18.665a2.78 2.78 0 0 1 2.785 2.774v2.504M1.45 16.563l5.395-3.952l.725 6.648"></svg:path>`,
})
export class ArcticonsDayToDayExpensesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaybookIcon],svg[arcticons-daybook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.4 40.01v1.49a2.006 2.006 0 0 0 2 2h2.3m0-39h-2.3a2.006 2.006 0 0 0-2 2v1.49m4.3-3.49v39h24.9a2.006 2.006 0 0 0 2-2v-35a2.006 2.006 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.458 27.133c-1.472-1.502-2.151-1.877-3.66-3.305c-2.628-3.745-7.577-3.911-9.929-1.326a6.41 6.41 0 0 0 1.918 10.315c1.294 1.39 2.115 2.318 3.233 3.384c-4.798.638-13.789-4.243-8.982-14.341a8.71 8.71 0 0 1 6.781-4.204a10.7 10.7 0 0 1 7.71 2.061l-.03-8.01c1.6.448 2.87 1.135 2.877 2.74Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.787 32.817c5.395 1.793 10.21-3.233 8.01-8.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.02 36.2a9.334 9.334 0 0 0 8.438-9.068M12.7 43.5v2.668l1.729-1.025l1.73 1.025V43.5M8.4 17.495v-6m0 25.01v-6M8.4 27v-6"></svg:path>`,
})
export class ArcticonsDaybookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaylioIcon],svg[arcticons-daylio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.11 32.44l21.78.2c-1.07 10.49-22.12 8.64-21.78-.2"></svg:path><svg:ellipse cx="12.11" cy="22.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.75" ry="2.39"></svg:ellipse><svg:ellipse cx="35.89" cy="22.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.75" ry="2.39"></svg:ellipse><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDaylioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaysCounterIcon],svg[arcticons-days-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.413 17.165l-.04 9.295l8.376 7.13m-7.367 8.91h17.227V27.784"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.188 42.158A18.23 18.23 0 0 1 5.477 22.493a18.679 18.679 0 0 1 37.132-.673"></svg:path>`,
})
export class ArcticonsDaysCounterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaznIcon],svg[arcticons-dazn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 5.5h-37V20l4 4l-4 4v14.5h37V28l-4-4l4-4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.736 22.217V10.5h2.636a5.126 5.126 0 0 1 5.126 5.126v1.465a5.126 5.126 0 0 1-5.126 5.126ZM26.568 37.5V25.783L34.33 37.5V25.783m-20.66 0h7.762L13.67 37.5h7.762m5.209-15.318L30.529 10.5m3.728 11.717L30.529 10.5m2.481 7.797h-5.076"></svg:path>`,
})
export class ArcticonsDaznIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbBahnhofLiveIcon],svg[arcticons-db-bahnhof-live-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.5 26.25h10v11m-5-11v11m-34 0v-11h10m-5 11v-11m5 11v-26.5h19v26.5"></svg:path><svg:circle cx="24" cy="19.988" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.094 18.877L24 21.107l2.906-2.23"></svg:path>`,
})
export class ArcticonsDbBahnhofLiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbBauarbeitenIcon],svg[arcticons-db-bauarbeiten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.407 32.107c-.052-3.51 1.626-6.882 5.678-7.127c2.733 1.331 3.835 1.703 5.868 1.698s3.53-.405 5.892-1.802c4.09.613 5.514 3.038 5.75 7.249M27.204 5.967c3.994.976 3.868 5.195 4.115 6.412c.247 1.218 1.364.965 1.28 2.98c-2.057-.056-6.912.708-8.863.708s-5.25-.471-8.417-.598c-.088-1.996 1.43-2.266 1.552-3.643c.152-1.71-.19-4.686 4.073-5.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.296 10.604c-.243-2.642-.432-4.764-.457-5.26s.182-.581.552-.646s.786-.204 1.505-.198s1.71.102 1.91.224c.201.122.281.254.272.715s-.208 2.65-.46 5.216m-8.28 4.988c-.024 4.556 2.687 7.676 6.71 7.656s6.734-3.275 6.46-7.794M19.935 43.5l4.18-4.308s.282.07.551.132c2.778.697 5.074-1.136 5.586-2.973c.511-1.837-.111-2.975-.111-2.975l-2.675 2.57l-2.487-2.422l2.7-2.706s-.167-.266-1.416-.382s-3.39.568-4.28 2.27c-.994 1.902-.284 3.924-.284 3.924l-4.316 4.423z"></svg:path>`,
})
export class ArcticonsDbBauarbeitenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbCasinoIcon],svg[arcticons-db-casino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.242 26.378V9.443a2.26 2.26 0 0 0-2.258-2.258H11.016a2.26 2.26 0 0 0-2.258 2.258v16.935a2.26 2.26 0 0 0 2.258 2.259h25.968a2.26 2.26 0 0 0 2.258-2.259"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.71 25.814V10.007h2.935a7.903 7.903 0 0 1 7.903 7.904h0a7.903 7.903 0 0 1-7.903 7.903zm18.629-7.904h-5.08m5.08 0a3.952 3.952 0 0 1 0 7.904h-5.08V10.007h5.08a3.952 3.952 0 0 1 0 7.903"></svg:path><svg:rect width="4.785" height="6.341" x="36.715" y="34.474" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.393" ry="2.393"></svg:rect><svg:circle cx="27.022" cy="31.543" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.022 34.474v6.341m-6.473-.535c.437.367.908.535 1.968.535h.536c.874 0 1.582-.71 1.582-1.585h0c0-.875-.708-1.585-1.582-1.585H21.98c-.874 0-1.582-.71-1.582-1.585h0c0-.876.708-1.586 1.582-1.586h.537c1.059 0 1.53.168 1.967.535M10.97 39.61a2.39 2.39 0 0 1-2.077 1.205h0A2.393 2.393 0 0 1 6.5 38.422v-1.555a2.393 2.393 0 0 1 2.393-2.393h0c.887 0 1.662.484 2.075 1.202m6.95 2.747a2.393 2.393 0 0 1-2.393 2.392h0a2.393 2.393 0 0 1-2.393-2.393v-1.555a2.393 2.393 0 0 1 2.393-2.393h0a2.393 2.393 0 0 1 2.393 2.393m0 3.948v-6.341m16.375 6.338v-3.948a2.393 2.393 0 0 0-2.393-2.393h0a2.393 2.393 0 0 0-2.393 2.393m0 3.948v-6.341"></svg:path>`,
})
export class ArcticonsDbCasinoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbLegendsIcon],svg[arcticons-db-legends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.696 25.29c.715 2.776 9.169-4.374 12.407-4.374a1.736 1.736 0 0 1 1.934 1.472"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.725 25.699l.579 1.23s4.437-1.618 6.392-1.366l2.734-4.565M24.264 32.04a2.33 2.33 0 0 1-1.472.946c-.526 0-1.977-1.114-1.977-1.114l1.136-3.05s.904 1.305.028 3.837m-.932 1.631a4.11 4.11 0 0 1 4.058-.547m-2.755 1.619a2.045 2.045 0 0 1 2.503-.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.724 24.175s2.082 5.068 3.007 7.234s9.505 7.38 10.115 7.78s1.266.634 3.007.42c1.198-.147 9.483-6.711 9.967-7.677s5.93-13.225 5.93-13.225"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.762 17.846c1.514.778 4.479 2.292 4.31 9.084a14.7 14.7 0 0 0 1.408-2.019"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.836 29.713c.982.567 5.384-1.353 5.874-2.11S43.923 24 43.923 24m-6.769 2.776a1.55 1.55 0 0 0 .743.827l1.724-1.5l.477.154s1.122-2.187.652-3.07s-1.775-.491-1.775-.491m-15.131.407a23.6 23.6 0 0 1 7.17-4.48M21.278 24s.337 2.762.337 3.224c0 0 1.03.274 1.46 0s0-3.049 0-3.049m-6.402-7.149c2.082 1.072 4.9 4.815 4.9 4.815m-1.094 4.584c-1.367-1.64-7.086-5.13-9.063-6.476"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.416 20.769l1.45 3.659s5.552 1.619 6.414 2.102l.43-.857"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.673 12.753s-.25 11.443 1.243 14.997c2.607-9.294 14.614-17.159 18-18.315a3.68 3.68 0 0 1 1.486 2.537a12.9 12.9 0 0 1 4.175-3.56c.339 0 8.274 7.85 3.815 15.756c2.552-1.093 7.749-8.502 6.062-14.008"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.457 6.475c1.272 3.31 2.534 6.787 1.58 10.347m-12.11-6.274a13.8 13.8 0 0 1 1.288-2.95c.477-.476 5.706-3.165 5.706-3.165m-4.472.291a15.4 15.4 0 0 0-2.019-2.088"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.13 3.387a6.6 6.6 0 0 0-2.915 4.211S24.915 5.3 23.844 5.3c-2.012 0-16.171 7.122-16.928 22.451m32.094 1.383c.766 2.604.98 9.24.98 9.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.295 30.411l4.098-.595l-1.739-.682l3.441-.963m-32.193 4.675c-1.388 2.593-1.26 8.75-1.26 8.75m3.629-5.063a63 63 0 0 0-.114 7.07m4.684-2.724l-.13 4.193m9.298-6.016L23.076 45.5m7.938-7.127l-4.612 6.994M2.586 25.93l8.534 4.031M2.5 23.423l2.762 1.923c-1.963-1.935-2.353-5.54-2.353-5.54m34.708 18.297a43 43 0 0 0-5.047 2.776m-.757-12.057a30 30 0 0 1-2.243 5.468m-15.112-6.345c0 1.298 1.766 5.644 1.766 5.644m14.79-10.486c-.799 1.402-1.23 2.28-3.398 1.756m-11.918-2.103c.274.823.33 2.365 2.825 1.973"></svg:path>`,
})
export class ArcticonsDbLegendsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbMobidigIcon],svg[arcticons-db-mobidig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.286 24.19c.425.425 1.17 2.129 1.277 3.62c.107 1.383-.532 2.341-.32 2.874c.107.532 1.045.302 1.684.302s1.233-.152 1.978-.578s1.785-1.349 2.85-1.775c.958-.532 2.819-.29 4.416-.184s2.807.531 4.723 1.17s3.513 1.49 4.897 2.662c1.384 1.064 2.342 2.342 3.088 3.406c.745.959.918 1.704.918 2.449c0 .639-.353 1.294-.942 1.49c-1.316.472-1.158.532-4.03.532H24.538c-3.3-.213-4.384-.894-5.768-1.533c-1.278-.639-2.749-1.129-3.494-1.98s-1.362-2.277-2.32-3.128c-.852-.852-1.564-1.143-2.522-1.888s-1.865-1.692-2.398-2.756s-1.253-2.75-1.04-2.964c.213-.212 1.498.796 2.244 1.222c.851.426 1.216.396 1.854.503c.746.106 1.347.296 1.879.083s.859-.671 1.178-1.63c.213-.851.4-2.68.827-2.36zm9.147 12.242h11.072M11.231 42.5h.32m1.81 0h2.129m2.129 0h4.259m1.597 0h6.92m1.597 0h9.049M17.089 17.357V8.84h1.916a3.726 3.726 0 0 1 3.726 3.726v1.065a3.726 3.726 0 0 1-3.726 3.726zm11.693-4.259a2.13 2.13 0 1 1 0 4.259h-3.513V8.84h3.513a2.13 2.13 0 1 1 0 4.258m0 0h-3.514"></svg:path><svg:rect width="23.913" height="15.197" x="12.044" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.129" ry="2.129"></svg:rect>`,
})
export class ArcticonsDbMobidigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbStreckenagentIcon],svg[arcticons-db-streckenagent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.821 29.235l.028-.04c-4.535.779-6.264 1.881-6.264 1.881l-1.487-2.125c1.732-2.59 5.132-5.075 8.372-4.627l.03-4.945s-9.282-3.224-14.26-.755c-7.282 3.612-9.86 8.02-11.583 17.043c-.404 2.114 1.046 4.242 2.83 5.169c.932.486 3.868.339 7.234-.468c3.954-.947 5.964-2.313 15.167-6.043z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.56 36.448c.24 2.473 7.512 2.305 9.87 1.444c3.192-1.166 8.11-5.254 15.42-6.737m-21.179-6.401c-1.018 3.032.474 3.095 3.584 3.138c7.744.106 13.52-7.575 7.849-7.543l-6.905.04m-6.47 15.184l1.254-3.372h.548a1.136 1.136 0 0 1 1.06 1.686a2.7 2.7 0 0 1-2.314 1.686zm5.651-1.72h-1.107M8.997 17.679h8.095V29.37l-3.598-2.404H8.997zm4.047 1.799v3.597"></svg:path><svg:circle cx="13.044" cy="24.874" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.38 33.853a.594.594 0 0 1 .554.882a1.41 1.41 0 0 1-1.21.881h-1.455l1.311-3.527h1.455a.594.594 0 0 1 .554.882a1.41 1.41 0 0 1-1.21.882"></svg:path>`,
})
export class ArcticonsDbStreckenagentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbaIcon],svg[arcticons-dba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.4 25.18c0-1.94-1.553-3.527-3.45-3.527S10.5 23.24 10.5 25.18v2.293c0 1.94 1.552 3.528 3.45 3.528s3.45-1.588 3.45-3.528m0 3.529V16.891m3.318 8.335c0-1.94 1.553-3.528 3.45-3.528s3.45 1.588 3.45 3.528v2.293c0 1.94-1.552 3.528-3.45 3.528s-3.45-1.587-3.45-3.528m0 3.528V16.936M37.5 27.58c0 1.941-1.552 3.529-3.45 3.529S30.6 29.52 30.6 27.58v-2.293c0-1.94 1.553-3.528 3.45-3.528s3.45 1.588 3.45 3.528m0 5.821v-9.349"></svg:path>`,
})
export class ArcticonsDbaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbnaIcon],svg[arcticons-dbna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.934 34.517c0-5.093-3.321-10.224-8.507-10.177c-5.956-.047-8.48 5.325-9.435 8.405c-.37 1.206-1.53 1.939-2.727 1.734c-1.438-.25-2.347-1.744-1.967-3.21l.195-.732c.863-4.156 3.228-7.719 6.79-9.806c4.528-2.662 10.085-2.792 14.519.334c1.846 1.299 3.321 3.09 4.434 5.093c1.03 1.855 1.754 3.887 2.227 5.965c0 .019.018.074.037.158c.297 1.42 1.614 2.319 2.969 2.031h.009c1.336-.287 2.217-1.632 1.985-3.042l-.185-1.142C39.975 12.577 24.427 13.17 24.427 13.17C12.997 13.17 4.5 23.505 4.5 34.832"></svg:path>`,
})
export class ArcticonsDbnaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbnavigatorIcon],svg[arcticons-dbnavigator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.511 22.942l-10.873 1.863c-5.042.865-6.964 2.091-6.964 2.091l-1.654-2.363c1.926-2.88 5.706-5.643 9.309-5.145l10.182 1.405v-3.558s-20.47-6.93-26.004-4.184C9.411 17.067 6.544 21.968 4.628 32c-.96 5.027 3.307 10.975 38.883-3.443Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.52 32.868c.268 2.75 8.353 2.563 10.974 1.606c3.549-1.297 9.018-5.842 17.145-7.491l10.873-2.206m-34.42-4.911c-1.132 3.372.527 3.442 3.985 3.49c8.61.118 15.032-8.423 8.727-8.387l-7.678.044M6.932 31.896l1.394-3.75h.61a1.263 1.263 0 0 1 1.178 1.875h0a3.01 3.01 0 0 1-2.573 1.875Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.215 29.984a.594.594 0 0 1 .554.881a1.41 1.41 0 0 1-1.21.882h-1.455l1.312-3.527h1.455a.594.594 0 0 1 .554.882a1.41 1.41 0 0 1-1.21.882m0-.001h-1.231"></svg:path>`,
})
export class ArcticonsDbnavigatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbnavigatorAltIcon],svg[arcticons-dbnavigator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 31.5v-16h2.6c4.4 0 8 3.6 8 8h0c0 4.4-3.6 8-8 8zm22.023-8.16c2.07 0 3.762 1.693 3.762 3.762s-1.693 3.762-3.762 3.762h-6.208v-15.05h6.208c2.07 0 3.762 1.694 3.762 3.763s-1.693 3.762-3.762 3.762Zm0 0h-6.208"></svg:path>`,
})
export class ArcticonsDbnavigatorAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbnavigatorBetaIcon],svg[arcticons-dbnavigator-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsDbnavigatorBeta0" fill="none" stroke="currentColor" d="M11.667 26.982v-15.18h2.466a7.61 7.61 0 0 1 7.59 7.59a7.61 7.61 0 0 1-7.59 7.59zM32.56 19.24a3.57 3.57 0 0 1 .003 7.14H26.67V12.1h5.89a3.57 3.57 0 0 1 0 7.14zm0 0h-5.889"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 30.572V9.162a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v21.41a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4"></svg:path><svg:use href="#arcticonsDbnavigatorBeta0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsDbnavigatorBeta0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.96 42.038c-.242.48-.807.8-1.373.8h0c-.888 0-1.615-.72-1.615-1.6v-1.04c0-.88.727-1.6 1.615-1.6h0c.89 0 1.616.72 1.616 1.6v.56h-3.232m5.318-3.76v5.006c0 .5.341.834.854.834h.256m-1.963-4.422h1.792m-11.45 1.669c0-.918.768-1.669 1.707-1.669h0c.94 0 1.707.751 1.707 1.669v1.085c0 .917-.768 1.668-1.707 1.668h0c-.939 0-1.707-.75-1.707-1.668m0 1.668v-6.674m16.444 5.006c0 .917-.769 1.668-1.707 1.668h0c-.94 0-1.708-.75-1.708-1.668v-1.085c0-.918.769-1.669 1.708-1.669h0c.938 0 1.707.751 1.707 1.669m0 2.753v-4.422"></svg:path>`,
})
export class ArcticonsDbnavigatorBetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbnavigatorNextIcon],svg[arcticons-dbnavigator-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m43.5 17.194l-10.873 1.863c-5.042.864-6.964 2.091-6.964 2.091l-1.654-2.363c1.926-2.88 5.706-5.643 9.308-5.145L43.5 15.045v-3.559S23.03 4.559 17.496 7.304C9.4 11.319 6.533 16.22 4.616 26.252c-.96 5.026 3.307 10.975 38.884-3.443z"></svg:path><svg:path d="M4.509 27.12c.268 2.75 8.353 2.563 10.974 1.605c3.549-1.296 9.017-5.842 17.144-7.49L43.5 19.027M9.08 14.118c-1.132 3.372.528 3.442 3.986 3.49c8.609.118 15.032-8.423 8.726-8.387l-7.677.044M6.92 26.148l1.395-3.75h.61a1.263 1.263 0 0 1 1.177 1.875h0a3.01 3.01 0 0 1-2.572 1.875z"></svg:path><svg:path d="M13.204 24.235a.594.594 0 0 1 .554.882c-.202.5-.672.843-1.21.882h-1.455l1.311-3.527h1.455a.594.594 0 0 1 .554.881c-.202.501-.67.843-1.21.882m0 0h-1.23"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.321 41.34v-5.3m4 5.3v-3.3a2 2 0 1 0-4 0m9.739 2.291a2 2 0 0 1-1.739 1.01h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.65h-4m9.339-2.651l-4 5.3m4 0l-4-5.3m5.632.038h2.132m-1.065-1.688v5.955a.95.95 0 0 0 1.015.993h.305"></svg:path>`,
})
export class ArcticonsDbnavigatorNextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbsDigibankIcon],svg[arcticons-dbs-digibank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13 13l9.133 7.231a3.01 3.01 0 0 0 3.735 0L35 13.001l-7.231 9.132a3.01 3.01 0 0 0 0 3.735L35 35l-9.132-7.23a3.01 3.01 0 0 0-3.735 0L13 35l7.231-9.132a3.01 3.01 0 0 0 0-3.735z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.523 32.009c-1.987-3.71-2.154-4.997-2.154-8.008s.167-4.3 2.153-8.008a3.725 3.725 0 0 0-1.523-5.038a3.7 3.7 0 0 0-2.633-.32a3.7 3.7 0 0 0-.322-2.633a3.725 3.725 0 0 0-5.035-1.525c-3.711 1.987-4.998 2.154-8.01 2.154s-4.297-.167-8.007-2.153A3.725 3.725 0 0 0 10.956 8a3.7 3.7 0 0 0-.322 2.635a3.7 3.7 0 0 0-2.633.32a3.724 3.724 0 0 0-1.524 5.036c1.986 3.71 2.154 4.996 2.154 8.008s-.168 4.298-2.153 8.007a3.726 3.726 0 0 0 3.274 5.48c.295 0 .59-.045.881-.116a3.7 3.7 0 0 0 .323 2.63a3.725 3.725 0 0 0 5.035 1.524c3.711-1.987 4.998-2.154 8.009-2.154s4.298.167 8.008 2.153A3.73 3.73 0 0 0 37.044 40a3.7 3.7 0 0 0 .323-2.629c.292.071.587.116.881.116a3.724 3.724 0 0 0 3.274-5.479Z"></svg:path>`,
})
export class ArcticonsDbsDigibankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbsPaylahIcon],svg[arcticons-dbs-paylah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.709 10.364l6.053 4.793c.726.574 1.75.574 2.476 0l6.053-4.793l-4.793 6.054a1.994 1.994 0 0 0 0 2.475l4.793 6.054l-6.053-4.793a1.994 1.994 0 0 0-2.476 0l-6.053 4.793l4.793-6.054a1.994 1.994 0 0 0 0-2.475z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.615 22.964c-1.317-2.46-1.428-3.312-1.428-5.308s.111-2.85 1.427-5.308a2.47 2.47 0 0 0-1.01-3.34a2.45 2.45 0 0 0-1.745-.211a2.44 2.44 0 0 0-.213-1.746a2.47 2.47 0 0 0-3.337-1.01C26.849 7.356 25.996 7.467 24 7.467s-2.849-.11-5.308-1.427a2.47 2.47 0 0 0-3.338 1.01a2.45 2.45 0 0 0-.213 1.746a2.44 2.44 0 0 0-1.745.212a2.47 2.47 0 0 0-1.01 3.338c1.316 2.46 1.427 3.312 1.427 5.309s-.111 2.848-1.427 5.307a2.47 2.47 0 0 0 2.17 3.632c.195 0 .39-.03.584-.077a2.44 2.44 0 0 0 .214 1.742a2.47 2.47 0 0 0 3.338 1.01c2.46-1.317 3.312-1.428 5.308-1.428s2.849.111 5.308 1.428a2.47 2.47 0 0 0 3.338-1.009a2.44 2.44 0 0 0 .214-1.743c.194.047.39.077.584.077a2.47 2.47 0 0 0 2.17-3.631m-10.016 7.564v8.766h4.383m-24.481 0v-8.766h2.87c1.622 0 2.938 1.318 2.938 2.944s-1.316 2.944-2.938 2.944H5.5m17.907.686v2.959c0 1.21-.981 2.191-2.191 2.191h0a2.2 2.2 0 0 1-1.55-.641"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.407 33.485v3.616c0 1.21-.981 2.192-2.191 2.192h0a2.19 2.19 0 0 1-2.192-2.192v-3.616m19.093-2.958v8.766m0-3.616c0-1.21.981-2.192 2.192-2.192h0c1.21 0 2.191.982 2.191 2.192v3.616m-25.411-2.192c0 1.21-.982 2.192-2.192 2.192h0a2.19 2.19 0 0 1-2.191-2.192v-1.424c0-1.21.98-2.192 2.191-2.192h0c1.21 0 2.192.982 2.192 2.192m0 3.616v-5.808m18.763 3.616c0 1.21-.98 2.192-2.191 2.192h0a2.19 2.19 0 0 1-2.192-2.192v-1.424c0-1.21.981-2.192 2.192-2.192h0c1.21 0 2.191.982 2.191 2.192m0 3.616v-5.808"></svg:path>`,
})
export class ArcticonsDbsPaylahIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbzIcon],svg[arcticons-dbz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.678l1.569 4.83h5.078l-4.108 2.984l1.569 4.83L24 27.337l-4.108 2.985l1.569-4.83l-4.108-2.984h5.078z"></svg:path>`,
})
export class ArcticonsDbzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDcoderIcon],svg[arcticons-dcoder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.896 10.128l-8.24 27.744m10.953-5.768l13.735-7.417l-13.735-7.417"></svg:path>`,
})
export class ArcticonsDcoderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDcssIcon],svg[arcticons-dcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.899 15.831a2.27 2.27 0 0 1 .694 1.54c0 2.87-6.981 5.197-15.593 5.197S8.407 20.241 8.407 17.37S15.388 12.172 24 12.172a42 42 0 0 1 7.585.655"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.475 17.856a5.85 5.85 0 0 0 .706 3.825a1.1 1.1 0 0 1 .172.644m-.282 12.25c2.216 2.943 5.96 4.39 14.929 4.39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.911 36.386A3.3 3.3 0 0 0 9.572 38.6c.021 1.21-1.884 1.49-1.568 2.355a2.16 2.16 0 0 0 2.408 1.546c1.586 0 1.764-1.379 1.804-2.084s1.628-.826 1.72-2.563m9.918-15.287s-.325 2.902.938 3.052c1.28.152.96 3.227 1.437 4.312c.949 2.157 3.078-1.157 3.074-3.898c-.004-2.695.696-1.168.944-3.9m6.841 14.253a3.3 3.3 0 0 1 1.34 2.213c-.022 1.21 1.884 1.49 1.567 2.355a2.16 2.16 0 0 1-2.407 1.546c-1.587 0-1.765-1.379-1.805-2.084s-1.627-.826-1.72-2.563M9.845 19.551c1.168-2.243 7.06-3.95 14.155-3.95a39 39 0 0 1 7.09.62m6.245 2.371a3.2 3.2 0 0 1 .804.93m-5.465-1.662s4.158-12.238 7.624-12.357s1.673 4.143.231 5.303s-5.388 8.22-5.388 8.22a1.72 1.72 0 0 1-2.467-1.166"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.525 17.856a5.85 5.85 0 0 1-.707 3.825a1.1 1.1 0 0 0-.171.644m.282 12.25c-2.216 2.944-5.961 4.39-14.929 4.39"></svg:path><svg:ellipse cx="39.33" cy="28.259" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.979" ry="3.913" transform="rotate(-23.695 39.33 28.26)"></svg:ellipse><svg:ellipse cx="8.67" cy="28.26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.913" ry="2.979" transform="rotate(-66.306 8.67 28.26)"></svg:ellipse>`,
})
export class ArcticonsDcssIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDcuIcon],svg[arcticons-dcu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.817 38.592V5.507h10.789a76 76 0 0 1 9.284.448c4.625.548 14.293 5.45 14.293 18.038a17.66 17.66 0 0 1-14.293 17.94a66 66 0 0 1-9.34.563l-10.733-.074L17.55 31.689v1.071h5.126c4.214 0 6.995-3.217 7.103-8.767s-2.889-8.846-6.478-8.846H17.55V28.14ZM18.494 15l8.833-8.833m2.556 16.383l8.547-8.547M10.323 42.299l9.39-9.391"></svg:path>`,
})
export class ArcticonsDcuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDdbplayerIcon],svg[arcticons-ddbplayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.347 24h11.307c3.72 0 6.735-3.022 6.735-6.75h0c0-3.728-3.015-6.75-6.735-6.75H13.61l2.736 2.846M16.347 24h11.307c3.72 0 6.735 3.022 6.735 6.75h0c0 3.728-3.015 6.75-6.735 6.75H16.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.347 10.5h-2.736l2.736 2.846m0 10.654h-2.736l2.736 2.846m0-2.846V13.346"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.347 37.5h-2.736l2.736-2.846v-7.808"></svg:path>`,
})
export class ArcticonsDdbplayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDdccareIcon],svg[arcticons-ddccare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.73 23.832h-7.58m3.79-3.79v7.58m-2.437-.33c-1.498 1.382-3.282 2.63-5.06 3.698c-4.746-2.85-9.525-6.974-8.812-11.509c.847-5.39 7.256-4.508 8.81-.842c1.447-3.411 7.097-4.412 8.558-.191M42.445 42.5L35.63 31.358a16.5 16.5 0 0 0 2.94-9.351C38.57 12.89 31.18 5.5 22.062 5.5S5.555 12.89 5.555 22.007s7.39 16.507 16.508 16.507a16.5 16.5 0 0 0 9.583-3.112z"></svg:path>`,
})
export class ArcticonsDdccareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDdfGuideIcon],svg[arcticons-ddf-guide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.539" cy="32.9" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="32.9" r=".75" fill="currentColor"></svg:circle><svg:circle cx="38.462" cy="32.9" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.388c0-1.374.458-2.748 1.374-3.664S7.935 14.35 9.54 14.35c2.748 0 5.038 2.29 5.038 5.038c0 1.374-.458 2.748-1.374 3.665c-1.145.916-3.664 2.29-3.664 4.35m9.422-8.015c0-1.374.458-2.748 1.374-3.664S22.396 14.35 24 14.35c2.748 0 5.039 2.29 5.039 5.038c0 1.374-.459 2.748-1.375 3.665c-1.145.916-3.664 2.29-3.664 4.35m9.423-8.015c0-1.374.458-2.748 1.374-3.664s2.061-1.374 3.665-1.374c2.748 0 5.038 2.29 5.038 5.038c0 1.374-.458 2.748-1.374 3.665c-1.145.916-3.664 2.29-3.664 4.35"></svg:path>`,
})
export class ArcticonsDdfGuideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDdnetIcon],svg[arcticons-ddnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M23.397 19.81c0 2-.803 3.62-1.795 3.62h0c-.992 0-1.796-1.62-1.796-3.62h0c0-2 .804-3.62 1.796-3.62h0c.992 0 1.795 1.62 1.795 3.62m4.797 0c0 2-.804 3.62-1.796 3.62h0c-.992 0-1.796-1.62-1.796-3.62h0c0-2 .804-3.62 1.796-3.62h0c.992 0 1.796 1.62 1.796 3.62"></svg:path><svg:path d="M23.809 32.252c-6.305-.105-11.361-5.239-11.361-11.537c0-6.372 5.172-11.538 11.552-11.538s11.553 5.166 11.553 11.538h0a11.53 11.53 0 0 1-2.538 7.216"></svg:path><svg:path d="M35.658 29.917c-2.155-3.71-12.692-3.839-12.107 1.364c.225 1.999 1.566 2.152 4.09 2.14l4.985-.026c1.546-.008 4.48-.983 3.032-3.478"></svg:path><svg:path d="M15.297 28.292c-.992.662-1.58 1.649-1.429 2.989c.225 1.999 1.566 2.152 4.09 2.14l4.985-.026a5.3 5.3 0 0 0 1.72-.323"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M35.042 29.13c4.692 1.015 7.458 2.615 7.458 4.315h0c0 2.97-8.283 5.378-18.5 5.378h0c-10.217 0-18.5-2.408-18.5-5.378h0c0-1.91 3.486-3.677 9.158-4.641"></svg:path><svg:path d="M36.05 31.156c1.353.572 2.068 1.23 2.068 1.901c0 2.016-6.32 3.65-14.118 3.65s-14.118-1.634-14.118-3.65c0-.946 1.421-1.855 3.965-2.536"></svg:path></svg:g>`,
})
export class ArcticonsDdnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDdpropertyIcon],svg[arcticons-ddproperty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.3 23.395l-7.119-7.118a3.08 3.08 0 0 0-4.353-.01l-.01.01L6.433 31.664a3.08 3.08 0 0 0-.01 4.353l.01.01l5.561 5.56c1.208 1.209 3.154 1.209 4.313.049l5.512-5.511a3.08 3.08 0 0 1 4.353-.01l.01.01l5.511 5.51c1.161 1.16 3.106 1.16 4.315-.047l5.561-5.561a3.08 3.08 0 0 0 .01-4.353l-.01-.01zm0-9.87l-7.12-7.119a3.08 3.08 0 0 0-4.353-.009l-.009.01L6.431 21.792a3.08 3.08 0 0 0-.01 4.353l.01.01l5.561 5.561c1.208 1.208 3.155 1.208 4.313.048l5.513-5.511a3.08 3.08 0 0 1 4.353-.01l.01.01l5.511 5.51c1.16 1.161 3.105 1.161 4.314-.047l5.561-5.561a3.08 3.08 0 0 0 .01-4.353l-.01-.01L33.3 9.488z"></svg:path>`,
})
export class ArcticonsDdpropertyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDe3SatIcon],svg[arcticons-de-3-sat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.43 10.538h15.337L35.805 4.5H8.39z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.803 20.49L35.805 4.5l3.804 3.804l-16.001 15.99z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 36.237l5.241-4.432c8.043 11.678 24.953 1.843 12.764-10.403l4.83-4.83c16.4 16.67-5.3 38.493-22.835 19.666Z"></svg:path>`,
})
export class ArcticonsDe3SatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeLijnIcon],svg[arcticons-de-lijn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.273 22.991h2.47l.871-4.94h-2.47zl-1.6-4.94h-2.47l-.871 4.94h2.47l.871-4.94m-8.282 4.94l.871-4.94h2.47l-.544 3.088c-.18 1.023-1.156 1.852-2.179 1.852h-1.853m-2.834-4.94l-.435 2.47h2.47l.436-2.47zm-1.86 4.94h-4.94l.871-4.94h2.47l-.87 4.94m30.506 2.47H19.19L16.186 42.5m6.523-37l-1.777 10.08H42.5"></svg:path>`,
})
export class ArcticonsDeLijnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeTelegraafIcon],svg[arcticons-de-telegraaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.8 5.958c-2.879 7.472-7.69 7.29-10.715 7.29c-4.386 0-7.958-3.645-13.741-3.645c-4.739 0-5.832 2.843-4.885 6.232C7.762 10.15 11.59 4.5 19.28 4.5c6.889 0 8.2 3.718 14.288 3.718c4.483 0 6.233-2.26 6.233-2.26Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.764 11.024C12.574 14.633 8.2 19.833 8.2 28.726S14.566 43.5 22.293 43.5s16.232-5.832 16.232-17.981c-4.665 10.157-7.97 10.643-12.927 10.643s-11.324-4.18-11.324-11.13s3.558-10.327 7.49-14.008m10.044 2.113l-.057 21.778"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.452 13.085c0 9.47 1.499 19.237-7.644 21.37c1.221-3.688 1.889-9.374 1.889-18.99m5.755-2.38l-11.511 4.76"></svg:path>`,
})
export class ArcticonsDeTelegraafIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeadcellsIcon],svg[arcticons-deadcells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.561 23.938a49.5 49.5 0 0 1 .075 10.456c-.743 6.515-3.204 3.25-6.27 7.28s10.23 3.992 10.437.72s3.531-5.572 3.531-5.572"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.975 32.522s6.092 3.465 8.325 4.539m3.604 2.672c.057.59.957.62 1.244 1.768c.715 2.865 7.613 2.024 7.841.485c.227-1.534-.979-1.598-.979-1.598c1.1-2.125-4.248-7.757-4.248-7.757m-.146-2.475c1.927-3.377 1.723-3.485 2.405-3.796s1.165-2.12.287-2.735s-2.056-.047-2.334 2.462l-1.616 3.345l-1.327-1.247c.034-1.282-1.098-3.968-1.1-5.274a5.33 5.33 0 0 0-1.284-2.771a1.8 1.8 0 0 0 1.063-.816c.452-.699.15-.854.15-.854a1.5 1.5 0 0 0 1.456-.946c.41-1.026.026-1.284-.352-1.93s.742-.943 1.328-1.31s1.06-.74 1.549-.983a3.29 3.29 0 0 0 1.198-2.846a1.52 1.52 0 0 0-1.315-1.017a1.13 1.13 0 0 0 .06-1.138a.9.9 0 0 0-.997-.472c-.195-1.408-.828-1.77-2.07-1.977S30.387 5.779 30 4.052m-11.562.221s-.07-.036 1.246 1.083s1.141-.344 2.127.956s1.137.883 1.255 1.957s2.15.233 2.5 1.142s-.268 1.373.577 1.58c0 0-1.315.028-1.601.586s-.434.516-.434.516c-2.086-.1-2.575.64-2.882 1.47a3.1 3.1 0 0 0-.257 1.283s-.267.188-.653.505m-1.514 1.43a4.95 4.95 0 0 0-1.355 2.433a2.5 2.5 0 0 0-1.558.884c-.575.77.01 1.28-.305 1.858a13.8 13.8 0 0 0-1.814 6.312a9.4 9.4 0 0 1-1.767 2.126c-.658.382-1.37.627-.867 1.752m5.767-.12s.397-.872.14-1.185s-.097-.753-.394-1.154c-1.324-1.681.343-3.688.952-4.672c1.966-3.135.739-3.453.739-3.453c1.553.116 1.974-.262 3.007-1.873c2.143 1.18.098.276.67 3.701l-2.456.548"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.713 16.528L14.428 6.916l-.117-2.188l3.293 3.296l1.01 2.473l-2.886-.695l-3.437-2.86l2.156-.005"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.363 15.298c-4.089 2.11-4.176 1.25-7.016-.578c-3.116-2.005-10.663 2.298-12.2 5.738"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.982 15.078s4.498-2.787 8.754-.201c1.46.887 3.627 3.142 7.344 1.742m9.917-1.615s1.132-2.869.155-3.867s-4.272-2.958-7.57 2.923c0 0 2.136 4.364 6.278 4.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.18 16.322a4.58 4.58 0 0 0 .31 3.585a1.477 1.477 0 0 0 .103 2.17A3.62 3.62 0 0 0 28.738 25c1.049.755 2.622 3.909 1.933 5.08c0 0 .32 1.673 1.338 2.08a3.48 3.48 0 0 1 1.833 1.756c1.751.979 3.013-3.125.517-4.483"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.792 32.327l-.845 1.567l.756.36s-.497.88-1.945.485l-2.862 5.13l.82.741c-.583 1.431-.33 1.772 1.212 2.31c0 0 .066-3.893 3.403-3.245l1.35-2.33a2.33 2.33 0 0 1-.175-2.394l.573.32l.405-1.039"></svg:path><svg:path fill="currentColor" d="M35.893 11.423a.75.75 0 1 1-.75-.75a.75.75 0 0 1 .75.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.093 26.055s5.511-1.691 8.925-.731m-8.821 3.196a34 34 0 0 1 4.69-.78m2.379-.056a12.4 12.4 0 0 1 3.329.446m-4.528-4.016l.253 6.176m1.794-1.56l-2.064-2.317l-1.666 2.46m1.438-25.95s.14.43.9.7s.204.642.651 1.41c.436.746 1.263-.163 1.326 1.297s1.792 1.512 1.792 1.512m-9.094-5.065c2.02.799 1.965 1.678 2.513 2.275s1.848-.03 2.546 2.182"></svg:path><svg:circle cx="14.108" cy="34.468" r="3.551" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.017 23.39s4.583-.612 5.701-.251"></svg:path>`,
})
export class ArcticonsDeadcellsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDealabsIcon],svg[arcticons-dealabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.23 35.05l3.926 7.45h27.939l3.675-7.45l-13.491-19.885V5.5h-8.004v9.514z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.376 30.048l-6.624 3.189l-19.661-6.549"></svg:path>`,
})
export class ArcticonsDealabsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDebatekeeperIcon],svg[arcticons-debatekeeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.242 36.02a2.67 2.67 0 0 0-.592 1.691a2.71 2.71 0 0 0 2.708 2.709"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.358 7.58a2.707 2.707 0 0 0-2.251 4.212a9.89 9.89 0 0 0-7.64 9.625v9.304l-2.548 2.065a1.82 1.82 0 0 0 1.146 3.234h11.293m-8.36-26.599A15.82 15.82 0 0 0 4.5 19.886M19.358 7.58v32.84m0-14.292a7.831 7.831 0 0 0 0-15.663m0 18.666c7.34 0 12.423 1.628 15.247 5.43a2.57 2.57 0 0 1 .475 1.533v2.646a1.68 1.68 0 0 1-1.68 1.68H19.358m14.271-16.963a9.9 9.9 0 0 0 0-10.32m6.288 15.36a16.31 16.31 0 0 0 0-20.4"></svg:path>`,
})
export class ArcticonsDebatekeeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDebekaMeineGesundheitIcon],svg[arcticons-debeka-meine-gesundheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.528 19.538l7.341.773l-.188-4.764c2.337-.206 5.775.409 8.575-3.995c1.006-1.581.848-3.591 2.123-5.766c-.67.595-2.723 1.228-4.848 1.517c-2.971.405-5.695 1.678-6.097 3.717c.204-2.38-.97-4.516-3.032-6.52c-1.265.383-1.651.857-1.675 1.367c3.167 2.383 2.922 5.237 3.877 7.094c2.242-1.518 4.562-3.165 5.892-2.186c-1.549.777-1.197 1.124-2.657 2.123c-2.173 1.487-2.724 1.267-4.217 1.109L12.55 12.94c-2.341-.248-3.996 2.398-3.73 4.286l2.054 14.592l3.878-.511l-.705-9.503c-.15-2.008 1.606-2.465 3.483-2.267Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.8 17.023l.011 6.022l1.451.093v-1.403l5.42.303c.62.034 1.276.14 1.17 1.16l-.742 7.108h3.79l1.3-10.296c.082-.656-.33-2.095-2.2-2.233zm7.067 15.329l-.004 1.733l-1.938-.101c-1.357-.07-1.3 1.512-1.313 1.921l2.106-.06l-.472 2.486c-.135.706-.42 1.002-.784 1.108c-1.22.355-2.25.297-3.607.358a2.57 2.57 0 0 0-.665-1.313c-.314-.344-1.577-.03-1.73.99c.417.801.775 1.698 1.252 2.403c2.256-.234 4.716-.324 6.641-.792c1.34-.325 2.104-1.149 2.15-2.004l.364-6.772zM24.764 43.5c.146-1.58-.782-2.537-1.964-2.638l-2.898-.246c-1.924-.163-1.588-2.293-1.93-4.572c1.41.023 2.619-.178 2.508-1.383c-.198-.71-1.475-.293-3.07.033c-.735.15-1.557.12-2.115.36l-.172-1.81l-2.207.371c1.07 3.2-.213 8.988 2.938 9.222z"></svg:path>`,
})
export class ArcticonsDebekaMeineGesundheitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDebiandroidIcon],svg[arcticons-debiandroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.835 15.125a5.08 5.08 0 0 0-3.246-1.358c-3.467 0-6.533 3.666-6.533 6.8a7.603 7.603 0 0 0 7.933 7.733a9.74 9.74 0 0 0 9.733-9.933c0-6.334-2.496-13.867-12.733-13.867c-10.467 0-16.711 8.267-16.711 17.6c0 11.6 7.444 21.4 16.978 21.4"></svg:path>`,
})
export class ArcticonsDebiandroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDebitumIcon],svg[arcticons-debitum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.58 33.295a6.6 6.6 0 0 0 1.878 1.692m10.258-10.302A5.9 5.9 0 0 0 25.951 24h-3.903a5.954 5.954 0 0 1-5.942-5.954h0a5.954 5.954 0 0 1 5.943-5.954h3.528a6.62 6.62 0 0 1 5.843 2.613M24 12.092V9.115"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.72 41.677L41.694 11.89M27.308 37.782h6.615m-6.615-4.746v1.99h1.99l8.532-8.533l-1.99-1.99Zm10.522-6.543l2.08-2.08l-1.99-1.99l-2.08 2.08"></svg:path>`,
})
export class ArcticonsDebitumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDebloaterIcon],svg[arcticons-debloater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.89 18.944L14.68 43.5h20.092l2.79-24.556Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="4.75" d="M37.562 18.944L16.987 4.5"></svg:path><svg:path fill="currentColor" d="M14.253 13.747a.75.75 0 1 1 1.06 0a.75.75 0 0 1-1.06 0m3.822 3.822a.75.75 0 1 1 1.06 0a.75.75 0 0 1-1.06 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.516 18.944a6.62 6.62 0 0 0-1.44-7.206h0a6.62 6.62 0 0 0-9.362 0h0a.945.945 0 0 0 0 1.336l5.87 5.87m.15-11.948l-.236 2.895m8.32 5.189l-2.895.236"></svg:path>`,
})
export class ArcticonsDebloaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDebtcalcIcon],svg[arcticons-debtcalc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31" height="39" x="8.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.533 7.963h24.935v6.575H11.533zm0 10.037h6v5.278h-6zm0 8.329h6v5.278h-6zm-.001 8.328h6v5.278h-6zM21 18h6v5.278h-6zm0 8.328h6v5.278h-6zm0 8.329h6v5.278h-6zM30.467 18h6v5.278h-6zm.001 8.328h6v5.278h-6zm-.001 8.328h6v5.278h-6zm.374-23.411h-2.028"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.996 10.407l1.13-.662v3"></svg:path>`,
})
export class ArcticonsDebtcalcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonIcon],svg[arcticons-decathlon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.68 20.946c-4.68 5.509-2.254 16.552 5.334 12.2c1.887-.978 6.31-5.03 14.76-17.551v20.761c-2.421 1.654-16.97 8.473-22.928 1.003c-2.492-3.4-2.492-7.986.186-12.455H6.03q4.005-7.215 12.408-12.36C36.408 1.792 43.6 9.87 43.95 14.5c.72 8.497-6.495 14.875-10.289 18.577v-6.333c9.195-9.054 4.795-14.035 3.794-14.85c-2.047-2.37-7.865-4.53-13.13-2.392"></svg:path>`,
})
export class ArcticonsDecathlonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonAltIcon],svg[arcticons-decathlon-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M31.604 21.428v5.144h2.573m-12.009-5.144h3.408m-1.704 5.144v-5.144m15.72 5.144v-5.144L43 26.572v-5.144m-16.222 0v5.144m3.409-5.144v5.144m-3.409-2.582h3.409m-13.647.857v.021c0 .941-.764 1.704-1.705 1.704h0a1.704 1.704 0 0 1-1.704-1.704v-1.736c0-.941.763-1.704 1.704-1.704h0c.941 0 1.704.763 1.704 1.704v.02M9.723 24h1.678m.895 2.572H9.723v-5.144h2.573M5 26.572v-5.144h1.158a2.25 2.25 0 0 1 2.25 2.25v.644a2.25 2.25 0 0 1-2.25 2.25zm15.79-1.721h-2.232m-1.112 1.706l3.344-5.129v5.144"></svg:path><svg:rect width="3.409" height="5.145" x="34.887" y="21.428" rx="1.704" ry="1.704"></svg:rect></svg:g><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDecathlonAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonCoachIcon],svg[arcticons-decathlon-coach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.086 30.65v8.772m0-3.682c0-1.192.975-2.166 2.166-2.166h0c1.192 0 2.166.974 2.166 2.166v3.574m-6.353-.974c-.325.65-1.084 1.083-1.842 1.083h0a2.173 2.173 0 0 1-2.166-2.166v-1.408c0-1.192.975-2.167 2.166-2.167h0c.758 0 1.517.434 1.842 1.083m-6.046 2.491a2.173 2.173 0 0 1-2.166 2.166h0a2.173 2.173 0 0 1-2.167-2.166v-1.408c0-1.191.975-2.166 2.166-2.166h0c1.192 0 2.167.975 2.167 2.166m0 3.574v-5.848M14.43 36.498c0 1.625-1.3 2.925-2.924 2.925h0c-1.624 0-2.924-1.3-2.924-2.816v-2.925c0-1.624 1.3-2.924 2.924-2.816h0c1.625 0 2.816 1.3 2.816 2.816h0m2.058 2.167c0-1.192.976-2.167 2.167-2.167s2.166.975 2.166 2.167v1.408a2.173 2.173 0 0 1-2.166 2.166a2.173 2.173 0 0 1-2.166-2.166zm-1.626-18.983c-2.825 3.325-1.361 9.99 3.219 7.363c1.139-.59 3.808-3.035 8.908-10.593v12.531c-1.461.998-10.242 5.114-13.838.605c-1.504-2.052-1.504-4.82.112-7.517h-.001q2.417-4.355 7.489-7.46c10.846-6.49 15.187-1.615 15.398 1.18c.435 5.128-3.92 8.978-6.21 11.212v-3.822c5.55-5.465 2.894-8.47 2.29-8.963c-1.236-1.43-4.747-2.734-7.925-1.443"></svg:path>`,
})
export class ArcticonsDecathlonCoachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonConnectIcon],svg[arcticons-decathlon-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.148 32.423v6c0 .6.4 1 1 1h.3m-2.4-5.4h2.2m-21.324 5.4v-3.3c0-1.1-.9-2-2-2h0c-1.1 0-2 .9-2 2m0 3.3v-5.4m10.101 5.4v-3.3c0-1.1-.9-2-2-2h0c-1.1 0-2 .9-2 2m0 3.3v-5.4m-14.073 2.7c0 1.5-1.2 2.7-2.7 2.7h0c-1.5 0-2.7-1.2-2.7-2.6v-2.7c0-1.5 1.2-2.7 2.7-2.6h0c1.5 0 2.6 1.2 2.6 2.6h0m23.896 4.3c-.3.6-1 1-1.7 1h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v.7h-4m9.604 1.6c-.3.6-1 1-1.7 1h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c.7 0 1.4.4 1.7 1m-27.716 1c0-1.1.9-2 2-2s2 .9 2 2v1.3c0 1.1-.9 2-2 2s-2-.9-2-2zm2.818-18.803c-2.825 3.326-1.361 9.99 3.219 7.364c1.139-.59 3.808-3.035 8.908-10.593v12.53c-1.461.999-10.242 5.115-13.838.606c-1.504-2.052-1.504-4.82.112-7.517h-.001q2.417-4.355 7.489-7.46c10.846-6.49 15.187-1.615 15.398 1.18c.435 5.128-3.92 8.978-6.21 11.212V20.82c5.55-5.465 2.894-8.471 2.29-8.963c-1.236-1.431-4.747-2.735-7.925-1.444"></svg:path>`,
})
export class ArcticonsDecathlonConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonOutdoorIcon],svg[arcticons-decathlon-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.737 34.023v3.3c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2v-3.3m0 3.4v2m23.878-3.4c0-1.1.9-2 2-2h0m-2 0v5.4m-20.953-7v6c0 .6.4 1 1 1h.3m-2.4-5.4h2.2m5.803 2c0-1.1-.9-2-2-2h0c-1.1 0-2 .9-2 2v1.3c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2m0 2.1v-8m-18.58 8c-1.5 0-2.6-1.2-2.6-2.6v-2.7c0-1.5 1.2-2.7 2.6-2.7h0c1.5 0 2.7 1.2 2.7 2.7v2.6c0 1.5-1.2 2.7-2.7 2.7m20.627-3.3c0-1.1.9-2 2-2s2 .9 2 2v1.3c0 1.1-.9 2-2 2s-2-.9-2-2zm5.983 0c0-1.1.9-2 2-2s2 .9 2 2v1.3c0 1.1-.9 2-2 2s-2-.9-2-2zM14.754 17.274c-2.825 3.325-1.361 9.99 3.219 7.363c1.139-.59 3.808-3.035 8.908-10.593v12.53c-1.461.999-10.242 5.115-13.838.606c-1.504-2.052-1.504-4.82.112-7.517h-.001q2.417-4.355 7.489-7.46c10.846-6.49 15.187-1.615 15.398 1.18c.435 5.128-3.92 8.978-6.21 11.212v-3.822c5.55-5.465 2.894-8.471 2.29-8.963c-1.236-1.431-4.747-2.735-7.925-1.444"></svg:path>`,
})
export class ArcticonsDecathlonOutdoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecathlonRideIcon],svg[arcticons-decathlon-ride-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.754 17.274c-2.825 3.325-1.361 9.99 3.219 7.363c1.139-.59 3.808-3.035 8.908-10.593v12.53c-1.461.999-10.242 5.115-13.838.606c-1.504-2.052-1.504-4.82.112-7.517h-.001q2.417-4.355 7.489-7.46c10.846-6.49 15.187-1.615 15.398 1.18c.435 5.128-3.92 8.978-6.21 11.212v-3.822c5.55-5.465 2.894-8.471 2.29-8.963c-1.236-1.431-4.747-2.735-7.925-1.444m-9.972 29.057v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6m2.698-.002l2.502 2.502m2.189-5.3v5.4m11.863-1c-.3.6-1 1-1.7 1h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v.7h-4m-2.013-.8c0-1.1-.9-2-2-2h0c-1.1 0-2 .9-2 2v1.3c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2m0 2.1v-8"></svg:path><svg:circle cx="21.613" cy="31.623" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsDecathlonRideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecisionRouletteIcon],svg[arcticons-decision-roulette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.905 24c0 6.575-5.33 11.905-11.905 11.905S12.095 30.575 12.095 24S17.425 12.095 24 12.095S35.905 17.425 35.905 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.16 28.686a6.17 6.17 0 0 1-4.081 1.538c-3.425 0-6.202-2.787-6.202-6.224s2.777-6.224 6.202-6.224a6.2 6.2 0 0 1 5.904 4.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.377 21.802l3.757.305l.356-3.79m-.537 15.993l4.773 8.267M13.274 5.423l4.773 8.266m0 20.621l-4.773 8.267M34.747 5.386l-4.798 8.31M12.096 24H2.5m43 0h-9.596"></svg:path>`,
})
export class ArcticonsDecisionRouletteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecisionsIcon],svg[arcticons-decisions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.2 33c-3.19 0-6.65 4.27-10.28 4.27S4.5 33.62 4.5 33.62M25.8 33c3.19 0 6.65 4.27 10.28 4.27s7.42-3.62 7.42-3.62"></svg:path><svg:circle cx="24" cy="32.97" r="1.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.17v-4.65M6.64 19.43l8.67-8.67m27.73 0l-8.67 8.67l-3.83-3.83M24 15.09l-5.54 11.43h11.08zM6.64 10.76l8.67 8.67M24 34.77v.71"></svg:path>`,
})
export class ArcticonsDecisionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeckIcon],svg[arcticons-deck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.36 21.28h31.28a2.85 2.85 0 0 1 2.86 2.86v15.52a2.86 2.86 0 0 1-2.86 2.86H8.36a2.86 2.86 0 0 1-2.86-2.86V24.14a2.85 2.85 0 0 1 2.86-2.86"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.64 21.28V17a1 1 0 0 0-1-1H9.36a1 1 0 0 0-1 1v4.27M37.38 16v-4.25a1 1 0 0 0-1-1H11.62a1 1 0 0 0-1 1V16m24.13-5.25V6.48a1 1 0 0 0-1-1h-19.5a1 1 0 0 0-1 1v4.27"></svg:path>`,
})
export class ArcticonsDeckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeckboardProIcon],svg[arcticons-deckboard-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.509 25.448l-8.536-4.928l-8.482 4.898l8.536 4.928z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.491 25.418v9.825l8.536 4.928l8.482-4.897v-9.826M4.5 19.072v9.825l8.536 4.928l2.455-1.417m17.018-.031l2.509 1.448l8.482-4.897v-9.825m0 0l-8.536-4.928l-8.482 4.897L35.018 24zm-21.982 0l-8.536-4.928L4.5 19.072L13.036 24zm10.991-6.346l-8.536-4.928l-8.482 4.897l8.536 4.928zm0 0v2.835m-17.018-2.866v2.866m10.991 3.48v2.896m-4.964-2.865v2.865"></svg:path>`,
})
export class ArcticonsDeckboardProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeclutteredLauncherIcon],svg[arcticons-decluttered-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 33.75L24 14.25L4.5 33.75"></svg:path>`,
})
export class ArcticonsDeclutteredLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecoIcon],svg[arcticons-deco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2h-.1l.1 21.14a1.13 1.13 0 0 1 0 2.26h0a1.14 1.14 0 0 1-1.14-1.13h0a1.14 1.14 0 0 1 .89-1.11L19.57 2.48A21.87 21.87 0 1 0 24 2"></svg:path>`,
})
export class ArcticonsDecoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecsynccIcon],svg[arcticons-decsyncc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.88 13.75v2.13h-8.09v-2.13m0 2.13h-3.23a1.85 1.85 0 0 0-1.86 1.86V32a1.86 1.86 0 0 0 1.86 1.86H31A1.86 1.86 0 0 0 32.84 32V17.74A1.85 1.85 0 0 0 31 15.88h-3.1m-4.11 2.57a3.23 3.23 0 0 1 0 6.46c-4.31 0-4.31-6.46 0-6.46m0 8.32c3.38 0 6.08.79 6.08 1.74v2.42H17.69v-2.42c0-1 2.7-1.74 6.08-1.74Zm0-.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.09 10.55A16.24 16.24 0 0 0 7.76 24m7.16 13.46A16.23 16.23 0 0 0 40.23 24M9.04 24h2.82l-3.88 5.92L4.11 24zm30.14 0h-2.82l3.87-5.92L44.11 24h0z"></svg:path>`,
})
export class ArcticonsDecsynccIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeedumIcon],svg[arcticons-deedum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.803 7.66h2.695v4.552m.88 2.912h2.925v20.911h-3.805V43.5H11.712v-2.85"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.483 4.5v7.465h3.805v20.911h-3.805v7.465H8.697V4.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.672 15.644v17.157h8.048V15.644Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.657 12.039h11.064v20.762H16.657z"></svg:path>`,
})
export class ArcticonsDeedumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeemoIcon],svg[arcticons-deemo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.652 33.015c-.634-1.334.244-2.784.95-3.316c.647.37.711 3.746-.95 3.316m4.814 6.989c-1.146-.413-2.574-.373-4.005 1.06c.987 1.237 3.371 1.15 5.185.151c-.368-1.296.44-2.637.96-3.404c.418 1.05.906 2.58.243 3.984c.985.762 2.073 1.361 3.222 1.861m13.555-18.684c1.013 1.582 1.549 3.164 2.125 4.92c.282-1.854.265-3.454.317-5.147"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.789 23.553c-.473.533-.87 1.283-1.447 1.397c-.836-1.57-.744-2.866-.09-4.286c.756.443 1.18 1.073 1.559 1.728c.49-.878 1.107-1.38 1.718-1.9c.168 1.277.127 2.962-.358 4.343c-.534-.003-.957-.65-1.382-1.282m7.757-10.097c0 .495-.35.897-.783.897c-.432 0-.782-.402-.782-.897s.35-.897.782-.897s.783.402.783.897"></svg:path><svg:ellipse cx="31.592" cy="13.456" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".783" ry=".897"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.397 18.99c.685.41 1.485.756 2.419 1.022q-.348 1.77-.973 2.87M10.85 31.387c-.883.177-1.785.242-2.684.194l4.28-3.735c-.802.357-1.905.39-3.06-.22l.122-.048"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.426 21.207q-.824-.466-1.71-.796c1.144-3.494 4.317-5.844 8.95-5.896c5.646-.063 8.52 3.395 9.393 5.849c.775 2.178 1.519 5.449 2.274 7.49c1.136 3.067 2.038 2.952 3.7 4.003c-1.231.67-2.334.766-3.61.77c.948.851 1.8 1.56 3.112 2.036c-1.05.986-2.175 1.185-3.206 1.38c.41 1.071 1.122 2.074 2.062 3.147c-2.233-.255-4.535-1.142-5.9-1.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.507 27.579c2.153-.86 3.362-2.132 3.907-3.484c-.35-1.011-1.566-2.083-2.989-2.887c.646 1.71-.177 2.673-1.71 2.502c.057 1.375.283 2.68.792 3.87m9.938 13.02c-.612-.798-1.208-1.677-1.685-2.64m0 0c-.638-1.29-1.062-2.73-1.02-4.325a12 12 0 0 1-2.105 1.69m-.702-2.926c-1.327 1.555-3.367 2.68-5.479 3.42c1.247-1.2 1.967-2.693 2.395-4.431c1.372-.28 2.55-.823 3.453-1.51c-.065 2.118-.534 4.31-1.333 6.318c.58-.24 1.138-.532 1.666-.87m28.418-2.649c2.053.253 2.19-.97 2.447-1.68c-1.485-.557-1.754.364-2.184.885m-3.15 5.366c1.602.615 2.127-.433 3.163-1.377c-.804-.333-1.556-.25-2.274.108m-4.358 4.831c1.507 1.89 3.797 1.81 5.068.03c-1.106-.495-1.7-1.887-4.174-.8M4.587 30.901c-1.638.432-1.964-1.088-2.087-2.056c.517.203 1.034.158 1.551.744m3.723 7.448c-1.936.18-2.869-.93-3.78-2.387c.543-.228 1.444-.32 2.207-.088M3.568 24.25c0-11.634 9.17-21.068 20.48-21.068"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.379 14.843a21.5 21.5 0 0 1 2.15 9.408h0c0 4.27-1.253 8.33-3.468 11.73m-.892 1.265a21 21 0 0 1-2.551 2.788m-.909.78a20.4 20.4 0 0 1-4.684 2.842m-21.568-3.642c-.99-.904-1.888-1.9-2.686-2.975m-1.578-2.467a21.5 21.5 0 0 1-2.625-10.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.687 43.452c-1.423 1.16-2.935 1.51-4.248 1.314s-2.426-.937-3.048-1.958c1.694-1.486 3.1-1.96 4.292-1.745l.745.236c-.613-.933-.777-2.04-.53-2.86c2.214-.104 4.258 1.71 4.15 3.82c-.106-2.11 1.938-3.924 4.152-3.82h0c.245.821.08 1.927-.531 2.86l.745-.236c1.19-.215 2.598.26 4.292 1.745c-.623 1.02-1.736 1.762-3.05 1.958c-1.311.195-2.824-.154-4.245-1.315"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.049 34.991c1.65 1.234 1.765 4.463 0 5.34c-1.765-.877-1.65-4.106 0-5.34m-1.855 7.78a4.9 4.9 0 0 0 1.855.376a4.9 4.9 0 0 0 1.855-.375m-2.219-26.595c-.83-1.547-1.084-3.33-1.07-5.057c.042-4.848 4.478-8.153 8.899-7.88c6.163.38 8.615 4.792 8.702 9.255c.108 5.618-4 7.67-7.173 7.989c-.374 3.969.787 5.48 3.77 7.077c.53 2.12-.04 4.034-.554 5.882c-.505 1.822-.48 2.826-.676 4.28l-.67 4.103m5.897-5.902c-1.561-.916-.477-2.098-.552-3.37c.933.235 1.347 1.277 1.356 2.27"></svg:path>`,
})
export class ArcticonsDeemoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeemoAltIcon],svg[arcticons-deemo-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.29 28.75c-5.03-.776-9.937 4.711-4.709 8.288c3.442 1.259 6.103-.223 7.468-2.433c.68-1.1.91-2.42.817-3.71l-.803-11.112c1.815 1.363 3.144 3 4.466 4.64l1.036-3.504c-2.016-.765-3.946-1.863-5.591-4.054c-.412-1.113-.269-1.817-.274-2.631c1.204.764 2.863 2.821 4.492 4.792l1.467-3.144c-2.19-.87-4.376-1.647-6.564-5.382c-.5.634-1.926 1.09-3.271 1.562c1.108 2.102 1.732 4.067 1.707 5.297z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDeemoAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeemoAlt2Icon],svg[arcticons-deemo-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.096 34.501c2.42 1.75 8.743-.19 12.933-2.742c1.627-1.786 3.342-4.707 3.471-7.83c-3.243-.26-6.6.082-9.773 1.66c-2.9 1.94-5.946 5.5-6.63 8.912zm-3.031-1.028c2.701-3.315 5.054-6.63 6.36-9.946c-1.042-3.567-3.37-7.368-6.114-10.7c-3.424 2.756-5.571 6.52-7.245 9.846c1.533 3.85 3.81 7.316 6.999 10.8m-3.619 1.358c-9.652.323-14.003-3.103-15.946-9.909c2.185-2.224 14.587.052 15.946 9.91"></svg:path>`,
})
export class ArcticonsDeemoAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeenIcon],svg[arcticons-deen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.25 18.833l2.583 2.584L16.25 24l-2.583-2.583z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.167 16.25l-2.583 2.583l-7.75-7.75l-2.584 2.584l7.75 7.75l-7.75 7.75l-7.75-7.75L5.917 24L16.25 34.333l15.5-15.5zm-7.75 18.083L24 36.916L21.417 39.5l-2.583-2.583zm5.166-5.166l2.583 2.583l-2.583 2.584L24 31.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.75 8.5l-2.583 2.583l7.75 7.75l-7.75 7.75l2.583 2.584l10.333-10.333L39.5 16.25z"></svg:path>`,
})
export class ArcticonsDeenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeepTestingIcon],svg[arcticons-deep-testing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.148 5.5c5.062.055 10.116.119 12.67 2.681s2.619 7.633 2.682 12.703M27.148 42.5c5.062-.063 10.116-.126 12.67-2.681s2.619-7.61 2.682-12.671M20.773 5.5c-5.022.063-10.045.127-12.592 2.681c-2.546 2.555-2.61 7.593-2.681 12.632m0 6.303c.063 5.07.127 10.14 2.681 12.703s7.617 2.626 12.671 2.681M24 11.345c6.992 0 12.655 5.663 12.655 12.655S30.992 36.655 24 36.655S11.345 30.992 11.345 24S17.008 11.345 24 11.345"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 17.673c3.496 0 6.328 2.831 6.328 6.327S27.496 30.328 24 30.328S17.673 27.496 17.673 24s2.831-6.327 6.327-6.327"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.096 23.177h3.84v3.84h-3.84zm.537 0c0-2.585 2.718-2.585 2.718 0"></svg:path>`,
})
export class ArcticonsDeepTestingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeeplIcon],svg[arcticons-deepl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.496 11.972L25.034 4.777a2.07 2.07 0 0 0-2.068 0l-12.462 7.195a2.07 2.07 0 0 0-1.034 1.79v14.54a2.07 2.07 0 0 0 .84 1.664l18.074 13.33a1.034 1.034 0 0 0 1.648-.832V34.85a1.03 1.03 0 0 1 .517-.896l6.946-4.01a2.07 2.07 0 0 0 1.035-1.792v-14.39a2.07 2.07 0 0 0-1.034-1.79"></svg:path><svg:circle cx="31.375" cy="21.538" r="3.093" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="19.002" cy="15.352" r="3.093" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="19.002" cy="27.725" r="3.093" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.766 26.342l4.295-2.147m-4.295-7.461l6.844 3.422"></svg:path>`,
})
export class ArcticonsDeeplIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeepseekIcon],svg[arcticons-deepseek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.97 33.128c5.146-5.785 5.618-11.022 5.797-13.649"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.764 19.48c4.61-.866 6.127-3.58 6.623-5.779c.269-1.19.016-1.792-.316-1.97c-.332-.18-.742.064-1.117.463c-1.892 2.01-3.02.998-4.405 1.37c-.765.206-1.218.796-1.655.56s-.86-1.303-1.476-1.745c-.617-.443-1.428-.264-1.982-.965c-.553-.7-.959-2.436-1.38-2.384c-.99 0-1.573 1.995-1.579 3.698c-.005 1.754.919 3.887 3.557 5.824c0 0-.455 1.457-.602 2.205h.004c-3.954-1.765-6.14-5.062-9.006-7.254c-.902-.69-.89-1.382-.325-1.888c.564-.506 1.555-.843 1.38-1.133c-.173-.29-1.512-.532-2.814-.353s-2.566.78-3.831 1.38c0 0-1.129-.727-3.19-.727c-8.454 0-12.15 6.554-12.15 12.119c0 6.636 6.091 16.07 16.107 16.07c7.585 0 9.221-3.111 9.221-3.111c3.708 1.206 6.08.788 6.924-.333c.753-1-2.268-1.808-3.784-2.399"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.62 31.213c-1.018-.12-.156 2.938-.156 2.938c-2.034.442-4.743.295-8.299-4.835c-2.885-4.162-3.427-8.892-1.975-9.232c1.45-.34 5.668.345 8.64 2.403c2.974 2.059 5.858 5.86 7.827 8.191s3.04 3.558 5.171 5.182c-7.119-.45-8.582-4.339-11.207-4.647m8.454-10.385c2.442 0 4.771 3.392 4.771 4.927c0 .618-.721.783-1.607.783s-2.154-.412-2.154-2.04s-.122-2.329-1.44-2.329s-.992-1.34.43-1.34"></svg:path><svg:circle cx="25.294" cy="23.751" r=".735" fill="currentColor"></svg:circle>`,
})
export class ArcticonsDeepseekIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeepstashIcon],svg[arcticons-deepstash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.239 8.01h25.75v25.751"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.75 5.5H42.5v25.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16.75h25.75V42.5H5.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.831 13.418h25.751v25.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.704 10.545h25.75v25.751M42.5 31.25L31.25 42.5m-14.5-37L5.5 16.75"></svg:path>`,
})
export class ArcticonsDeepstashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeezerIcon],svg[arcticons-deezer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.21 11.45c.36-2.091.89-3.406 1.476-3.409h.001c1.094.004 1.98 4.565 1.98 10.196s-.887 10.195-1.982 10.195c-.449 0-.863-.775-1.196-2.074c-.527 4.755-1.621 8.023-2.887 8.023c-.98 0-1.859-1.963-2.449-5.06c-.403 5.889-1.417 10.067-2.602 10.067c-.744 0-1.423-1.656-1.925-4.351c-.604 5.564-1.999 9.463-3.625 9.463s-3.025-3.898-3.626-9.463c-.499 2.695-1.177 4.35-1.924 4.35c-1.186 0-2.198-4.177-2.603-10.065c-.59 3.096-1.467 5.06-2.449 5.06c-1.265 0-2.36-3.268-2.887-8.024c-.33 1.303-.747 2.074-1.196 2.074c-1.095 0-1.983-4.564-1.983-10.195S8.221 8.04 9.316 8.04c.588 0 1.113 1.319 1.478 3.41c.584-3.607 1.533-5.951 2.605-5.951c1.273 0 2.377 3.315 2.899 8.128c.51-3.503 1.286-5.736 2.154-5.736c1.216 0 2.25 4.392 2.633 10.52c.72-3.142 1.764-5.113 2.918-5.113s2.197 1.972 2.916 5.112c.385-6.127 1.418-10.52 2.634-10.52c.867 0 1.64 2.234 2.154 5.737c.52-4.813 1.624-8.128 2.898-8.128c1.068 0 2.02 2.345 2.605 5.95ZM4.5 17.234c0-2.517.636-4.558 1.421-4.558s1.422 2.04 1.422 4.558s-.636 4.558-1.422 4.558s-1.42-2.04-1.42-4.558m36.168 0c0-2.517.634-4.558 1.416-4.558s1.416 2.04 1.416 4.558s-.634 4.558-1.416 4.558s-1.416-2.04-1.416-4.558"></svg:path>`,
})
export class ArcticonsDeezerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeezerAltIcon],svg[arcticons-deezer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.88h9.75v5.88H4.5zm9.75 0H24v5.88h-9.75zm9.75 0h9.75v5.88H24zm9.75 0h9.75v5.88h-9.75zM14.25 24H24v5.88h-9.75zM24 24h9.75v5.88H24zm9.75 0h9.75v5.88h-9.75zm-19.5-5.88H24V24h-9.75zm19.5 0h9.75V24h-9.75zm0-5.89h9.75v5.88h-9.75z"></svg:path>`,
})
export class ArcticonsDeezerAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeezerAudiobooksIcon],svg[arcticons-deezer-audiobooks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.25h8.211v35.5H4.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.923 32.63v9.12h-8.212V6.25h8.212v16.899m0 0v-9.12h8.211V41.75h-8.211v-9.12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.133 19.24l7.892-2.27l6.474 22.51l-7.89 2.27zm.001 8.65l-16.423-9.482v18.963z"></svg:path>`,
})
export class ArcticonsDeezerAudiobooksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefactoIcon],svg[arcticons-defacto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.748 26.388a1.757 1.757 0 0 1-1.752-1.753v-1.138c0-.964.788-1.753 1.752-1.753h0c.964 0 1.752.789 1.752 1.753v1.139c0 .963-.788 1.752-1.752 1.752m-4.603-6.104v5.256c0 .526.35.876.876.876h.263m-2.103-4.731h1.927m-3.734 3.885c-.262.525-.876.876-1.489.876h0a1.757 1.757 0 0 1-1.752-1.753v-1.138c0-.964.789-1.753 1.752-1.753h0c.613 0 1.227.35 1.49.876m-5.525 2.103c0 .964-.79 1.752-1.753 1.752h0a1.757 1.757 0 0 1-1.752-1.752v-1.139c0-.963.789-1.752 1.752-1.752h0c.964 0 1.752.789 1.752 1.752m0 2.891v-4.73M6.5 26.475v-7.008h1.577c1.664 0 3.066 1.401 3.066 3.066v.876c0 1.665-1.402 3.066-3.066 3.066zM19.055 23h2.278m-2.278 3.504v-7.008h3.504m-6 5.986c-.263.526-.876.876-1.49.876h0a1.757 1.757 0 0 1-1.751-1.752v-1.139c0-.963.788-1.752 1.752-1.752h0c.963 0 1.752.789 1.752 1.752v.613h-3.504"></svg:path>`,
})
export class ArcticonsDefactoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefaultdarkthemeIcon],svg[arcticons-defaultdarktheme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.839 15.161l6.363-6.363M8.798 39.202l6.363-6.363m17.678 0l6.363 6.363M8.798 8.798l6.363 6.363"></svg:path>`,
})
export class ArcticonsDefaultdarkthemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefenderHdIcon],svg[arcticons-defender-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.228 18.275s.37.762.4 1.146c.03.385-.196 1.082-.196 1.082m-3.615-.217s.422.953.687 1.177s.672.254.672.254m1.288-.496l-1.023-.973v-1.22m-5.488 10.94s1.261.838 2.005.835c.744-.002 1.617-.506 2.108-.895c.491-.39.866-1.187.866-1.187s1.045 1.17 2.03 1.773c.984.604 2.655 1.062 3.93 1.579c1.274.517 2.572.935 3.715 1.523c1.144.588 3.133 1.968 3.133 1.968m-15.408-14.73s1.797-1.535 2.794-2.044c.996-.508 2.04-.812 3.094-.996s3.168-.11 3.168-.11m-12.81 3.102s-2.09 1.506-2.77 2.3s-1.039 1.441-1.372 2.291s-.425 1.847-.58 2.747S4.5 30.77 4.5 30.77s1.355-1.316 2.13-1.852s1.6-1.004 2.488-1.344a11 11 0 0 1 2.802-.677c.946-.095 2.818.105 2.818.105M43.5 13.96s-5.999-1.211-9.196-1.431s-6.858-.024-9.835.401c-2.976.425-5.215.972-7.207 1.6c-1.992.626-3.728 1.366-4.758 1.964s-1.262.846-1.578 1.223s-.406.616-.445.844a.77.77 0 0 0 .066.43m21.946 12.803V18.162h2.215c3.749 0 6.816 3.067 6.816 6.816h0c0 3.748-3.067 6.815-6.816 6.815z"></svg:path>`,
})
export class ArcticonsDefenderHdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefendoIcon],svg[arcticons-defendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.24 43.49a9.66 9.66 0 0 1 2.41-11.93a9.5 9.5 0 0 1 12.09 0a9.66 9.66 0 0 1 2.4 11.93m-11.48-13.6v-7m6.07 7V6.68m0 18.32h2.51l1.55-1.57v-4.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.24 33.1l4.51-4.53V10.25M16.16 33.09l-3.82-3.79l-.08-14.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.28 21.24h2.66l1.86-1.86V9.75"></svg:path><svg:ellipse cx="16.8" cy="8.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="12.26" cy="13.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="20.68" cy="21.79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="26.73" cy="5.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="35.74" cy="9.15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="30.78" cy="17.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse>`,
})
export class ArcticonsDefendoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefikatasterIcon],svg[arcticons-defikataster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.1 42.5C-5.113 28.542 9.192 7.999 20.823 17.904c11.63-9.906 26.585 10.498.37 24.455"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.934 18.915l-7.994 9.814h4.647l-3.346 8.425l8.32-10.315l-4.304-.14zM37.04 5.5v9.295m4.648-4.647h-9.295"></svg:path>`,
})
export class ArcticonsDefikatasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefineIcon],svg[arcticons-define-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.4 36.8c2.465 0 2.8-.885 2.8-3.8V14.7c0-2.075.227-3.8-2.7-3.8m-.9 0h11.6c3.1 0 5.6.4 7.5 1.3c2.3 1 4 2.6 5.2 4.7s1.8 4.4 1.8 7.1c0 11.383-7.445 12.8-14.6 12.8H12.5m9.23-25.9v22.649c0 3.14 1.275 3.251 2.467 3.251c2.354 0 4.148-.785 5.494-2.467c1.682-2.242 2.579-5.606 2.579-10.203c0-3.7-.56-6.727-1.794-8.97c-.897-1.793-2.13-2.915-3.588-3.587c-1.01-.449-2.691-.673-5.158-.673"></svg:path>`,
})
export class ArcticonsDefineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefitIcon],svg[arcticons-defit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.72 34.324C27.653 38.328 24 41.703 24 41.703s-3.505-3.238-7.47-7.134l-3.197-3.193c-3.345-3.402-6.446-6.787-7.515-8.638c-2.684-4.648-1.23-11.945 4.011-14.97S21.775 6.536 24 11.777c2.226-5.241 8.929-7.037 14.17-4.01s6.696 10.322 4.012 14.97a14 14 0 0 1-1.013 1.47l-2.129 2.484"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M22.526 18.93H12.033m5.247-5.247v10.494m13.51-.069H20.298m5.247-5.247v10.494m13.51-.069H28.56m5.247-5.246v10.493"></svg:path>`,
})
export class ArcticonsDefitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDegiroIcon],svg[arcticons-degiro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.28h-39v-10.1h39Zm0-14.46h-39v-10.1h39Z"></svg:path>`,
})
export class ArcticonsDegiroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDegooIcon],svg[arcticons-degoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.414 15.19a7.465 7.465 0 0 0-9.148-5.269a7.35 7.35 0 0 0-5.27 9.148c.744 2.333 2.716 3.43 3.927 5.42"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.895 35.687a9.05 9.05 0 0 1-12.8 0a9.19 9.19 0 0 1 0-12.802a9.05 9.05 0 0 1 8.388-2.43a8.95 8.95 0 0 1 5.44 4.034l6.154 9.595a8.95 8.95 0 0 0 5.44 4.033a9.05 9.05 0 0 0 8.387-2.43a9.19 9.19 0 0 0 0-12.801a9.05 9.05 0 0 0-12.8 0"></svg:path>`,
})
export class ArcticonsDegooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDekdIcon],svg[arcticons-dekd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.754 35.875c-.485 2.641-.41 3.608 1.157 6.592c.153-1.494.077-2.063.642-2.954c.993 1.162 1.95 2.138 3.662 2.12c-2.292-.943-1.438-2.263-1.286-5.759m-1.893-7.554l2.718-16.85h4.8c5.154 0 8.8 3.301 8.143 7.372l-.34 2.106C30.7 25.02 25.99 28.32 20.836 28.32zm26.464-.35a5.75 5.75 0 0 1-5.76 5.762l-27.071.004c-2.386 0-4.169 1.65-4.169 3.712"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.423 42.5H9.5a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4H21.171"></svg:path>`,
})
export class ArcticonsDekdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDekdTcasIcon],svg[arcticons-dekd-tcas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.747 14.012c-.408-.014-.836.17-1.184-.444c-.262.474-.654.612-1.195.653a.73.73 0 0 1-.806-.751l.002-.214a.92.92 0 0 1 .824-.895l2.488-.217m9.938.717l3.94-.345l.01-1.016m-.214 7.645l.032-2.963c.01-1.075-.853-1.865-1.937-1.77l-.544.048c-1.083.095-1.965 1.235-2.086 2.491c-.197 2.039 1.029 2.827 2.307 2.377m-4.55.41l.03-2.962c.01-1.076-.853-1.866-1.937-1.77l-.543.047c-1.089.095-1.66 1.006-1.891 1.618c.544.172.83.345 1.46.481c-.569.05-1.204.662-1.211 1.302l-.018 1.761m-2.415.093l.032-2.962c.01-1.075-.854-1.865-1.937-1.77l-.544.048c-1.084.095-1.965 1.236-2.086 2.49c-.197 2.04 1.029 2.83 2.307 2.379m-4.181.377l-.51.044a.688.688 0 0 1-.762-.713l.044-4.123m-.967 8.145l22.714-1.989m-6.183 13.069l-2.128-9.044l-2.042 9.41m.482-2.22l3.187-.279m6.098-5.842c-.005-.965-.768-1.677-1.714-1.594l-.065.006c-.946.083-1.703.927-1.698 1.893l.002.576c.009 1.8 3.488 1.96 3.498 3.968l.004.888c.004.967-.753 1.812-1.697 1.894l-.067.006c-.945.083-1.709-.628-1.713-1.595m-8.368-.156l.003.888c.006.966-.753 1.812-1.697 1.894l-.065.005c-.945.083-1.71-.628-1.714-1.594l-.027-5.737c-.005-.966.753-1.812 1.697-1.894l.066-.006c.945-.082 1.71.63 1.713 1.595l.003.575m-7.487-1.665l2.272-.199m-4.546.399l2.274-.201l.043 9.226"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDekdTcasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDekdWriterIcon],svg[arcticons-dekd-writer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.527 35.414c-1.285 1.574-1.821 3.314-.939 5.396c2.624-.05 4.006-1.301 5.291-2.875l6.678-16.033zm15.382-10.991l2.537-3.108c-.796-1.75-2.354-2.788-4.352-2.521l-2.537 3.108c1.81.362 3.486 1.164 4.352 2.521l-11.03 13.512m-16.125-2.06c-.485 2.641-.41 3.608 1.157 6.592c.153-1.494.077-2.063.642-2.954c.993 1.162 1.95 2.138 3.662 2.12c-2.292-.943-1.438-2.263-1.286-5.759m-1.893-7.554l2.718-16.85h4.8c5.154 0 8.8 3.301 8.143 7.372l-.34 2.106C30.7 25.02 25.99 28.32 20.836 28.32zm8.118 5.413l-14.485.003c-2.386 0-4.169 1.65-4.169 3.712m37-9.477c0 3.192-2.57 5.76-5.76 5.76h-.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 25.449V38.5a4 4 0 0 1-4 4H21.171m-8.748 0H9.5a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v7.832"></svg:path>`,
})
export class ArcticonsDekdWriterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDekuSmsIcon],svg[arcticons-deku-sms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.637 4.813c10.424 0 18.863 8.588 18.863 19.192c0 10.594-8.439 19.182-18.863 19.182c-10.413 0-18.863-8.588-18.863-19.182c0-10.604 8.45-19.192 18.863-19.192"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.327 9.802c2.685 0 4.861 2.102 4.861 4.703c0 2.59-2.176 4.702-4.861 4.702s-4.862-2.112-4.862-4.702c0-2.6 2.176-4.703 4.862-4.703M14.224 23.177h20.964v5.616H14.224zM4.5 32.954h25.572v5.435H4.5z"></svg:path>`,
})
export class ArcticonsDekuSmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelhiMetroIcon],svg[arcticons-delhi-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.094 11.799C13.484 7.937 18.458 5.5 24 5.5s10.514 2.437 13.905 6.297m0 24.405C34.515 40.063 29.542 42.5 24 42.5s-10.515-2.437-13.905-6.298"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 14a44.9 44.9 0 0 1-16.882-3.286C4.234 14.373 2.5 18.98 2.5 24s1.735 9.627 4.618 13.286C12.333 35.174 18.028 34 24 34s11.668 1.174 16.882 3.286C43.766 33.627 45.5 29.02 45.5 24s-1.735-9.627-4.618-13.286A44.9 44.9 0 0 1 24 14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.165 28.144v-8.297l4.154 8.306l4.153-8.294v8.294m2.077 0v-8.306h2.72c1.537 0 2.783 1.249 2.783 2.79s-1.246 2.79-2.784 2.79h-2.72m2.72-.001l2.719 2.725m7.428-2.783v.034a2.75 2.75 0 0 1-2.752 2.751h0a2.75 2.75 0 0 1-2.751-2.751v-2.804a2.75 2.75 0 0 1 2.751-2.751h0a2.75 2.75 0 0 1 2.752 2.751v.034m-30.83 5.521v-8.306h1.87a3.634 3.634 0 0 1 3.633 3.634v1.038a3.634 3.634 0 0 1-3.634 3.634zm25.466 6.981C31.391 37.537 27.867 39 24 39s-7.391-1.463-10.051-3.866m0-22.268C16.609 10.463 20.133 9 24 9s7.392 1.463 10.052 3.866"></svg:path>`,
})
export class ArcticonsDelhiMetroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelhiMetroNavigatorIcon],svg[arcticons-delhi-metro-navigator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3.506 30.5h40.988m-40.988-13h40.988M17.5 30.5l13-13"></svg:path>`,
})
export class ArcticonsDelhiMetroNavigatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelhiveryIcon],svg[arcticons-delhivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m18.181 29.111l2.478-2.494m-2.478-18.616l2.478 2.494m.001 0v16.122m-2.479 2.494H17.672V13.5h10.01"></svg:path>`,
})
export class ArcticonsDelhiveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelimobilIcon],svg[arcticons-delimobil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.703 39.77A18.5 18.5 0 0 1 17.74 25.092L5.5 14.75m9.25 27.75a9.25 9.25 0 0 1 18.5 0h0m9.25-27.75H19.829l16.114 13.621a18.5 18.5 0 0 1 6.354 11.391"></svg:path>`,
})
export class ArcticonsDelimobilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelistIcon],svg[arcticons-delist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.284 9.855l8.89 5.176L35.56 4.5M12 14.228l10.797 10.441l8.538-4.64M36 23.509L25.438 33.683l-9.154-5.087M12 33.148L22.709 43.5l8.626-5.176"></svg:path>`,
})
export class ArcticonsDelistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeliverooIcon],svg[arcticons-deliveroo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.92 21.93l1.9-17.43l9.72 1.01l-2.45 25.7L33.5 43.5L9.25 38.7L6.46 26.74L20.65 24L17.3 9.19l9.38-1.9z"></svg:path><svg:circle cx="30.78" cy="30.34" r="2.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.87" cy="29.19" r="2.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDeliverooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeliverooRiderIcon],svg[arcticons-deliveroo-rider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.668 16.94c.256 1.295 1.571 2.125 2.937 1.855c1.936-.383 3.916-2.636 4.394-3.216a.14.14 0 0 0-.043-.217c-.657-.344-3.343-1.639-5.279-1.256c-1.366.27-2.265 1.54-2.009 2.834"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m25.578 14.145l1.907 8.634l1.118-10.28l5.721.596l-1.442 15.157l-3.29 7.248l-14.273-2.831l-1.643-7.053L22.03 24l-1.972-8.734z"></svg:path><svg:circle cx="27.991" cy="27.739" r="1.577"></svg:circle><svg:circle cx="23.335" cy="27.061" r="1.577"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.852 5.5l2.204 9.766m4.336 19.203l1.813 8.031M11.653 16.942L5.5 18.177m14.554-2.922l-1.024.205m-5.354 10.156L5.5 27.198m0 3.524l9.818 1.947l2.289 9.831m11.985-7l-3.178 7m7.91-29.404l8.176.85m-16.923.199L23.667 5.5m1.467 6.639l3.469.361l.761-7m4.96 7.596l.723-7.596M13.67 25.617L9.02 5.615m23.862 22.637l-.738 7.754m-2.552-.506L42.5 38.06m-9.002-16.279l9.002-1.742"></svg:path>`,
})
export class ArcticonsDeliverooRiderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeliveryClubIcon],svg[arcticons-delivery-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.478 23.01l7.97-3.734l-1.739 5.043l7.32-4.04c-.966 1.27-2.974 4.912-1.875 5.67c1.55 1.065 4.857-1.46 7.514-3.377m-13.174-5.72c-3.734-.744-7.898.693-9.773 4.528c-1.63 3.33-.745 6.267 2.141 4.932c1.805 1.198 3.562.723 5.182-.943l1.411 1.171l-3.501 2.33l-2.867 8.122c-2.249.501-3.977 2.831-4.013 5.936c-.006.608.592.72.933.388c1.914-1.862 2.691-2.57 4.125-3.757c.553-.458.858-1.16 1.234-1.858l3.489-6.477c.217-.403.622-.568.956-.646l7.247-1.694l-.478 4.877c-.082.843.225 1.885 1.476 2.07l6.288.93c1.705 2.274 3.276 3.963 6.091 3.27c.353-.087.853-.654.094-1.387l-2.646-2.555c-2.164-2.089-3.472-1.695-7.81-2.775l.861-3.736c3.43.17 6.695-.789 6.225-5.502c2.71-2.223 4.744-5.552 2.86-10.038c-.858-2.044-5.351-5.69-2.772-7.014l1.863-.108c.344-.02.673-.902.337-.975l-1.14-.249c-1.505-.003-.919-1.005-2.52-1.18c-1.415-.154-2.294 1.19-2.366 2.037c-.256 3.007 1.278 4.013 2.804 6.13c2.604 3.616 1.603 6.796-2.287 5.925c-1.848-.44-2.876-1.416-4.766-2.048c-2.85-.953-5.726-.736-8.678.295"></svg:path>`,
})
export class ArcticonsDeliveryClubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDellconnectIcon],svg[arcticons-dellconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.11 11.93v-5a2.43 2.43 0 0 1 2.43-2.43h20.24a2.43 2.43 0 0 1 2.43 2.44v34.12a2.43 2.43 0 0 1-2.43 2.44H17.54a2.43 2.43 0 0 1-2.43-2.44v-9.35"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.93 27.25h22.96l-7.96 7.96M31.89 24H8.93l7.97-7.97"></svg:path>`,
})
export class ArcticonsDellconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaChatIcon],svg[arcticons-delta-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.21 20.542c-9.843 1.226-11.302 5.348-10.966 10.483c.036 4.203 3.775 8.695 11.13 8.469c4.663-.15 11.013-3.924 10.378-11.12c-.717-6.826-10.126-9.655-17.173-13.772c-2.119-1.404-1.935-4.776 2.387-5.58c3.678-.567 7.441-.963 10.506.43c3.18 1.835 1.25 4.09-1.184 3.444c-1.907-.653-3.265-3.75-7.327-4.14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.392 21.22c-5.247 1.443-8.794 5.226-7.384 11.717A6.147 6.147 0 0 0 29.545 34.4c2.088-4.368.4-10.084-4.153-13.18m-8.095-6.814a64.3 64.3 0 0 0 8.286 6.939"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.12 33.804A23.5 23.5 0 0 0 45.5 24A21.5 21.5 0 1 0 24 45.5a23.5 23.5 0 0 0 9.804-2.38A10.53 10.53 0 0 1 45.5 45.5a10.53 10.53 0 0 1-2.38-11.696"></svg:path>`,
})
export class ArcticonsDeltaChatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaDentalIcon],svg[arcticons-delta-dental-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 15.989h-9.25L5.5 32.01l4.625 8.01h27.75l4.625-8.01L28.625 7.978h-9.25L33.25 32.011h-18.5z"></svg:path>`,
})
export class ArcticonsDeltaDentalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaExchangeIndiaIcon],svg[arcticons-delta-exchange-india-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.064 5.5v37l23.917-12.357v-12.38zm0 24.486l23.917-12.221"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.981 30.144L18.064 17.736l-12.046 6.17l12.046 6.08"></svg:path>`,
})
export class ArcticonsDeltaExchangeIndiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaIconPackIcon],svg[arcticons-delta-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24.459" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.435" cy="31.894" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.565" cy="17.025" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.565" cy="31.894" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.435" cy="17.025" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="39.329" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.87" cy="24.459" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.13" cy="24.459" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="9.59" r="3.631" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDeltaIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaInvestmenttrackerIcon],svg[arcticons-delta-investmenttracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.422 38.954H5.578L24 7.046z"></svg:path>`,
})
export class ArcticonsDeltaInvestmenttrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltaTouchIcon],svg[arcticons-delta-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.595 43.5V12.441H10.6L8.482 4.5h31.036l-2.137 8.014h-8.418V35.03z"></svg:path>`,
})
export class ArcticonsDeltaTouchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltafxIcon],svg[arcticons-deltafx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.389 29.596s-23.559 1.344-28.464.642"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.672 29.742c-.028.014-1.525.67 2.16 9.97m-.001-.001s-9.668 1.131-15.099 2.15c-8.802 1.653-14.371-.423-14.371-.423a11.88 11.88 0 0 1 1.67-7.925a17.5 17.5 0 0 1 2.019-3.117"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.525 34.482s-2.946-.032-2.879-4.41c.07-4.5 4.062-1.775 14.937-2.666c8.166-.67 19.477-.887 19.976 1.295c0 0 1.153 5.023-2.293 4.973s-3.256.808-3.256.808"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.141 28.202S4.86 14.382 6.378 10.87s8.068-1.122 11.519-1.799s19.58-2.527 21.84.438s2.838 3.151 2.11 12.275c-.227 5.989-.288 6.917-.288 6.917"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.323 9.694s-.987-3.972 2.286-4.009s6.504-1.334 5.851 3.493m8.986 13.344c-1.217.257-4.492.67-4.981-2.95c-.588-4.354 6.515-5.728 7.443-1.681c.8 3.49-1.748 4.48-2.462 4.631"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.805 13.06c1.297 1.039 3.501 2.651 3.5 6.102s-3.46 6.122-5.954 6.33c-2.413.202-7.339-1.034-7.514-6.065c-.142-4.107 1.582-6.106 4.696-6.954c2.232-.607 3.976-.452 5.272.587m13.631-2.64l-6.819.517a6.3 6.3 0 0 1 .27 2.64c-.18.97 8.066-.039 8.066-.039"></svg:path><svg:path fill="none" stroke="currentColor" d="m21.944 30.333l-.21-2.941m5.626 0l.255 2.932M20.71 12.737l-.116-4.08m6.211 4.403l-.743-4.955"></svg:path><svg:circle cx="10.786" cy="23.712" r="1.528" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.717" cy="23.712" r="1.528" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDeltafxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeltalabIcon],svg[arcticons-deltalab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c-.086 11.205-5.827 13.018-.259 20.899c-8.855-3.993-10.937.645-21.241.6A21.5 21.5 0 1 1 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.388 9.628c1.09 1.66 5.313 5.433 6.323 3.375c1.404-2.86-7.53-3.724-10.68-3.607c-3.266.121-6.087 2.637-1.755 6.424c3.978 3.477 9.863 3.181 12.42 7.28c9.769 15.66-16.269 21.164-17.517 8.523c-1.087-11.005 13.194-11.854 16.926-9.33"></svg:path>`,
})
export class ArcticonsDeltalabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDelugeIcon],svg[arcticons-deluge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l11 18.32a14.43 14.43 0 0 1 2.29 7.44a13.24 13.24 0 0 1-26.48 0a14.43 14.43 0 0 1 2.29-7.44zM30.1 42a4.71 4.71 0 0 0 1.19-4.36c-.84-3.67-4.41-4.31-8-4.31c-3.26 0-5.11-2.42-5.11-5.53c0-6.57 6.82-10.31 6.82-10.31h0s-9.51 1.31-12.85 6.9"></svg:path>`,
})
export class ArcticonsDelugeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDemineurIcon],svg[arcticons-demineur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.993 19.86h10v10h-10z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.493 19.86h-4.25a16.9 16.9 0 0 0-2.3-4.707l2.132-2.133a.757.757 0 0 0 0-1.07l-3.173-3.172a.756.756 0 0 0-1.07 0l-2.136 2.136a17 17 0 0 0-4.703-2.294V4.36a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v4.26a17 17 0 0 0-4.703 2.294l-2.137-2.136a.756.756 0 0 0-1.07 0L7.911 11.95a.756.756 0 0 0 0 1.07l2.132 2.132a16.9 16.9 0 0 0-2.3 4.707h-4.25a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.25a16.9 16.9 0 0 0 2.3 4.707L7.911 36.7a.756.756 0 0 0 0 1.07l3.172 3.173a.756.756 0 0 0 1.07 0l2.137-2.136a17 17 0 0 0 4.703 2.293v4.261a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V41.1a17 17 0 0 0 4.703-2.295l2.136 2.137a.756.756 0 0 0 1.07 0l3.173-3.173a.757.757 0 0 0 0-1.07l-2.132-2.132a16.9 16.9 0 0 0 2.3-4.707h4.25a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"></svg:path>`,
})
export class ArcticonsDemineurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDemocracyIcon],svg[arcticons-democracy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.365 43.806a39 39 0 0 1-6.137-6.058m-7.333-7.201c-1.46-1.532-4.98-5.088-6.401-7.726c-3.6-6.683-.816-9.092.064-10.327a71 71 0 0 1 5.227-5.227c-.065 5.856 4.87 12.394 7.332 15.626m7.229 7.215c2.031 2.266 6.952 6.55 8.449 7.315"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.612 11.668c-4.883-1.314-14.025 8.543-16.495 11.225m-6.222 7.654c-2.542 2.967-6.465 7.229-9.385 9.337m35.502-20.437c-2.679-.115-11.09 7.397-12.666 10.661m-6.118 7.64c-1.861 2.41-4.006 5.171-5.956 7.426"></svg:path>`,
})
export class ArcticonsDemocracyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDenDanskeOrdbogIcon],svg[arcticons-den-danske-ordbog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.323 20.821v-11h2.475a4.81 4.81 0 0 1 4.812 4.813v1.375a4.81 4.81 0 0 1-4.812 4.812zm0-11H9.775m1.548 11H9.775M18.876 42.5s-.903-.551-2.296-.551s-1.423.566-2.647.55c-.547-.006-1.03-.557-1.392-1.208c-.451-.811-1.01-1.362-1.01-2.066c0-.856 1.087-1.101 1.454-1.438s.734-1.362 1.5-1.362s2.432 1.117 2.432 1.117s1.668.138 3.26.413s4.054.949 8.675.398c-.123-1.469-1.01-5.63 3.764-8.69c0 0-5.019.703-6.518-3.49c0 0 .657-1.078 2.585-2.73c.678-.581 1.29-1.623 2.318-2.043c0 0-2.983-1.584-2.119-4.988c0 0 1.286.826 3.244 2.203c.306-1.102 1.714-2.938 1.714-2.938s1.407 1.775 1.836 3.275c0 0 1.989-.98 4.131-2.204c0 0-.98 3.458-2.999 4.805c1.699.168 2.594 1.637 3.099 3.06S42.5 28.24 42.5 28.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.9 23.534c.318 1.695-.9 5.002-2.173 5.874c1.218-.457 1.577.014 1.577.788s-1.66 3.487-2.02 5.286c1.066-1.813 1.66-2.297 1.66-2.297s.056 3.81-.415 6.203c.443-1.716 1.19-5.152 1.938-5.774c.553.65.985 3.89.996 3.348c.221-1.895.982-3.542.982-3.542s.623.664.969 1.743c-.028-3.251-.526-8.481-3.515-11.629m-2.394.551c-.375-.13-.658-.55-1.484-.55c-.68 0-1.086.524-1.086.524m-20.404 9.585c-1.68-.9-3.064-2.077-3.064-3.132s.667-1.366 1.401-1.366s1.663 1.067 1.663 1.067s.929-1.067 1.663-1.067s1.401.31 1.401 1.366s-1.384 2.231-3.064 3.132m13.955 4.919s-4.677-6.584-5.742-7.48s-1.454-.482-2.381-1.281c-.415-.358-.43-1.09-.288-1.822c.176-.91.103-1.692.556-2.23c.551-.657 1.54-.145 2.038-.166s1.438-.57 2.024-.078s1.144 2.42 1.144 2.42s1.188 1.179 2.229 2.414c1.04 1.234 2.248 2.652 3.945 3.83"></svg:path>`,
})
export class ArcticonsDenDanskeOrdbogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDenikNIcon],svg[arcticons-denik-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.826 42.498H5.5V5.5h10.13l14.72 14.835"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.174 5.502H42.5V42.5H32.37L17.65 27.665"></svg:path>`,
})
export class ArcticonsDenikNIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDenkzettelIcon],svg[arcticons-denkzettel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M31.936 14.125V5.5H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4V15.811h-8.878a1.686 1.686 0 0 1-1.686-1.686m0-8.625L42.5 15.811"></svg:path><svg:path d="M17.536 22.383c.022.021-.4-.301-.449-1.722c-.049-1.42.859-2.718 2.029-3.751c1.144-1.01 2.764-1.557 4.214-1.79c2.119-.342 4.546.04 6.316 1.254c1.37.94 2.247 2.603 2.664 4.211c.488 1.88.219 3.953-.328 5.816c-.44 1.498-1.295 2.887-2.305 4.078a8.1 8.1 0 0 1-2.294 1.848a5 5 0 0 1-1.676.55a9.6 9.6 0 0 1-3.245-.108c-.987-.201-1.854-.797-2.818-1.088c-.79-.238-1.669-.575-2.418-.532s-2.058.436-1.743 1.31c.315.876 1.706.49 2.474.21c.864-.312 2.172-1.16 2.946-1.987c1.128-1.203 1.875-2.602 2.205-3.712c.573-1.926.398-2.798.85-4.258c.855-2.765 2.808-4.017 2.808-4.017"></svg:path></svg:g>`,
})
export class ArcticonsDenkzettelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeparturesLiveIcon],svg[arcticons-departures-live-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.816 37.624H23.915c-.965 0-1.733-.81-1.682-1.773l.856-16.22a1.684 1.684 0 0 1 1.682-1.595H39.96c.895 0 1.634.701 1.681 1.596l.857 16.22a1.684 1.684 0 0 1-1.682 1.772M26.37 20.179h11.99m-13.754 13.43h2.448m10.838 0h2.449"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.822 37.624h3.015v1.949c0 .589-.478 1.067-1.066 1.067h-.882a1.067 1.067 0 0 1-1.067-1.067zm12.031 0h3.015v1.949c0 .589-.478 1.067-1.067 1.067h-.882a1.067 1.067 0 0 1-1.066-1.067zm1.966-15.231H25.912a.57.57 0 0 0-.567.54l-.235 4.86a.57.57 0 0 0 .567.595h13.376a.57.57 0 0 0 .567-.595l-.234-4.86a.57.57 0 0 0-.567-.54m-17.997-8.408H9.115a.515.515 0 0 0-.515.49l-.213 4.408c-.014.294.22.54.515.54h12.133a.515.515 0 0 0 .514-.54l-.213-4.408a.515.515 0 0 0-.514-.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.4 32.673H9.23a5.7 5.7 0 0 0-1.269-1.282c-.96-.7-1.92-.933-2.461-1.022l.518-19.696A1.74 1.74 0 0 1 7.755 8.98H22.12c.942 0 1.712.75 1.737 1.692l.198 7.529M7.233 7.36h15.41"></svg:path><svg:circle cx="14.968" cy="26.399" r="2.153" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.387 11.222H21.55"></svg:path>`,
})
export class ArcticonsDeparturesLiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeploygateIcon],svg[arcticons-deploygate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 28.859c0-2.558-2.204-4.63-4.923-4.63s-4.923 2.072-4.923 4.63v3.01c0 2.558 2.204 4.631 4.923 4.631s4.923-2.073 4.923-4.63m0 4.63V17.976"></svg:path>`,
})
export class ArcticonsDeploygateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDepopIcon],svg[arcticons-depop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.553 11.584v24.832m0-5.649H20.448c-3.324 0-6-2.675-6-6v-1.533c0-3.325 2.676-6 6-6H33.55"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDepopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDepthLabIcon],svg[arcticons-depth-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.887 14.25L24 4.5L7.113 14.25v19.5L24 43.5l16.887-9.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.113 14.25L24 24l16.887-9.75M24 43.5V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.12 11.668v16.443l-14.24 8.221V19.889z"></svg:path>`,
})
export class ArcticonsDepthLabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDerDieDasIcon],svg[arcticons-der-die-das-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 39v-8h1.3c2.2 0 4 1.8 4 4s-1.8 4-4 4zm0-11v-8h1.3c2.2 0 4 1.8 4 4s-1.8 4-4 4zm0-11V9h1.3c2.2 0 4 1.8 4 4s-1.8 4-4 4zm10.7-1c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4m6-.7c0-1.1.9-2 2-2m-2 0V17"></svg:path><svg:circle cx="23" cy="20.3" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23 22.7V28m5.7-1c-.3.6-1 1-1.7 1c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v.7h-4M27 37c0 1.1-.9 2-2 2s-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2m0 3.3v-5.3m2.2 4.9c.4.3.8.4 1.6.4h.4c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3h-.9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h.4c.9 0 1.3.1 1.6.4"></svg:path>`,
})
export class ArcticonsDerDieDasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDerSpiegelIcon],svg[arcticons-der-spiegel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.784 15.61v-8.2a2.91 2.91 0 0 0-2.908-2.91H15.124a2.91 2.91 0 0 0-2.908 2.909V26.21h16.31v10.928h-9.052v-6.687h-7.258v10.14a2.91 2.91 0 0 0 2.908 2.908h17.752a2.91 2.91 0 0 0 2.908-2.909V19.85h-16.31v-8.989h9.052v4.748Z"></svg:path>`,
})
export class ArcticonsDerSpiegelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDescomplicaFaculdadeDigitalIcon],svg[arcticons-descomplica-faculdade-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.224 11.212L41.776 5.5v37L6.224 35.83Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.75 21.69a6.07 6.07 0 0 0-6.05-6.05h0a6.07 6.07 0 0 0-6.051 6.05v3.934a6.07 6.07 0 0 0 6.05 6.05h0a6.07 6.07 0 0 0 6.051-6.05m-.002 6.049V7.47"></svg:path>`,
})
export class ArcticonsDescomplicaFaculdadeDigitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeshJapaneseKeyboardIcon],svg[arcticons-desh-japanese-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.168 18.573H7.64c-1.148 0-2.078.93-2.078 2.078v19.771c0 1.148.93 2.078 2.078 2.078h32.72c1.148 0 2.078-.93 2.078-2.078V20.651c0-1.148-.93-2.078-2.078-2.078h-5.284"></svg:path><svg:rect width="20.044" height="3.327" x="14.1" y="35.763" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="16.586" y="29.78" rx=".421" ry=".421"></svg:rect><svg:path d="M25.805 30.355v2.37a.42.42 0 0 1-.42.421H22.86a.42.42 0 0 1-.42-.42h0v-2.37"></svg:path><svg:rect width="3.366" height="3.366" x="28.291" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="34.144" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="M18.276 27.163h-1.27a.42.42 0 0 1-.42-.421v-.875m15.072 0v.875a.42.42 0 0 1-.421.42h-1.269"></svg:path><svg:rect width="3.366" height="3.366" x="34.144" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="m34.253 23.878l-10.131 7.768l-10.13-7.768a2.1 2.1 0 0 1-.824-1.67V7.183c0-.93.753-1.683 1.683-1.683h18.542c.93 0 1.683.754 1.683 1.683h0v15.025c0 .654-.304 1.271-.824 1.67"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M23.324 9.99c-.734 4.614-.798 8.707.2 12.173"></svg:path><svg:path d="M18.816 12.394a67 67 0 0 0 10.244-.476m-1.528 1.979c-1.393 4.094-3.235 7.23-6.111 8.065c-3.734 1.085-3.114-2.168-2.205-3.557c1.892-2.887 4.686-3.201 6.312-3.306c4.58-.294 5.636 3.652 4.559 5.26c-1.13 1.688-2.577 2.344-4.308 2.63"></svg:path></svg:g>`,
})
export class ArcticonsDeshJapaneseKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeshMarathiKeyboardIcon],svg[arcticons-desh-marathi-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.501 21.17c.778.652 1.617.95 3.502.95h.44a2.815 2.815 0 0 0 2.815-2.814h0a2.815 2.815 0 0 0-2.815-2.815M17.5 11.799c.78-.65 1.62-.946 3.505-.94l.438.002a2.815 2.815 0 0 1 2.814 2.815h0a2.815 2.815 0 0 1-2.815 2.815m-2.163 0h9.109m-2.112-5.633H30.5m-2.112 11.263V10.858"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.168 18.573H7.64c-1.148 0-2.078.93-2.078 2.078v19.771c0 1.148.93 2.078 2.078 2.078h32.72c1.148 0 2.078-.93 2.078-2.078V20.651c0-1.148-.93-2.078-2.078-2.078h-5.284"></svg:path><svg:rect width="20.044" height="3.327" x="14.1" y="35.763" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="16.586" y="29.78" rx=".421" ry=".421"></svg:rect><svg:path d="M25.805 30.355v2.37a.42.42 0 0 1-.42.421H22.86a.42.42 0 0 1-.42-.42h0v-2.37"></svg:path><svg:rect width="3.366" height="3.366" x="28.291" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="34.144" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="M18.276 27.163h-1.27a.42.42 0 0 1-.42-.421v-.875m15.072 0v.875a.42.42 0 0 1-.421.42h-1.269"></svg:path><svg:rect width="3.366" height="3.366" x="34.144" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="m34.253 23.878l-10.131 7.768l-10.13-7.768a2.1 2.1 0 0 1-.824-1.67V7.183c0-.93.753-1.683 1.683-1.683h18.542c.93 0 1.683.754 1.683 1.683h0v15.025c0 .654-.304 1.271-.824 1.67"></svg:path></svg:g>`,
})
export class ArcticonsDeshMarathiKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeshTamilKeyboardIcon],svg[arcticons-desh-tamil-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.862 13.88H25.9v2.054a3.02 3.02 0 0 1-3.02 3.02h0a3.02 3.02 0 0 1-3.02-3.02zm9.124-3.891h-7.53v3.89"></svg:path><svg:path d="M25.901 13.88h1.155a2.983 2.983 0 0 1 2.983 2.982v1.843a2.983 2.983 0 0 1-2.983 2.983H20.74c-1.784 0-2.384.6-2.778 1.301m7.939-9.11v-3.89"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.168 18.573H7.64c-1.148 0-2.078.93-2.078 2.078v19.771c0 1.148.93 2.078 2.078 2.078h32.72c1.148 0 2.078-.93 2.078-2.078V20.651c0-1.148-.93-2.078-2.078-2.078h-5.284"></svg:path><svg:rect width="20.044" height="3.327" x="14.1" y="35.763" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="16.586" y="29.78" rx=".421" ry=".421"></svg:rect><svg:path d="M25.805 30.355v2.37a.42.42 0 0 1-.42.421H22.86a.42.42 0 0 1-.42-.42h0v-2.37"></svg:path><svg:rect width="3.366" height="3.366" x="28.291" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="34.144" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="M18.276 27.163h-1.27a.42.42 0 0 1-.42-.421v-.875m15.072 0v.875a.42.42 0 0 1-.421.42h-1.269"></svg:path><svg:rect width="3.366" height="3.366" x="34.144" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="m34.253 23.878l-10.131 7.768l-10.13-7.768a2.1 2.1 0 0 1-.824-1.67V7.183c0-.93.753-1.683 1.683-1.683h18.542c.93 0 1.683.754 1.683 1.683h0v15.025c0 .654-.304 1.271-.824 1.67"></svg:path></svg:g>`,
})
export class ArcticonsDeshTamilKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDesignKeyboardIcon],svg[arcticons-design-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.168 18.573H7.64c-1.148 0-2.078.93-2.078 2.078v19.771c0 1.148.93 2.078 2.078 2.078h32.72c1.148 0 2.078-.93 2.078-2.078V20.651c0-1.148-.93-2.078-2.078-2.078h-5.284"></svg:path><svg:rect width="20.044" height="3.327" x="14.1" y="35.763" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="16.586" y="29.78" rx=".421" ry=".421"></svg:rect><svg:path d="M25.805 30.355v2.37a.42.42 0 0 1-.42.421H22.86a.42.42 0 0 1-.42-.42h0v-2.37"></svg:path><svg:rect width="3.366" height="3.366" x="28.291" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="34.144" y="29.78" rx=".421" ry=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="M18.276 27.163h-1.27a.42.42 0 0 1-.42-.421v-.875m15.072 0v.875a.42.42 0 0 1-.421.42h-1.269"></svg:path><svg:rect width="3.366" height="3.366" x="34.144" y="23.797" rx=".421" ry=".421"></svg:rect><svg:path d="m34.253 23.878l-10.131 7.768l-10.13-7.768a2.1 2.1 0 0 1-.824-1.67V7.183c0-.93.753-1.683 1.683-1.683h18.542c.93 0 1.683.754 1.683 1.683h0v15.025c0 .654-.304 1.271-.824 1.67"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.694 22.99v-13h2.925a5.69 5.69 0 0 1 5.687 5.687v1.625a5.69 5.69 0 0 1-5.687 5.687z"></svg:path>`,
})
export class ArcticonsDesignKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDesjardinsIcon],svg[arcticons-desjardins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 3.5l17.773 10.25v20.5L24 44.5L6.227 34.25v-20.5z"></svg:path>`,
})
export class ArcticonsDesjardinsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeskclockIcon],svg[arcticons-deskclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.2 24.8l-13 6M24 22v-8m13.5 12.26L26 24.3"></svg:path>`,
})
export class ArcticonsDeskclockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDesmosIcon],svg[arcticons-desmos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.33 5.5C36 14.4 32.88 36.61 24 36.61S12 14.4 10.67 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 27.89c4.62 0 4.62 6 9.25 6s4.62-6 9.25-6s4.62 6 9.25 6s4.62-6 9.25-6"></svg:path>`,
})
export class ArcticonsDesmosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDesmosScientificIcon],svg[arcticons-desmos-scientific-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.618 18.847c.3-.25.6-.35 1.25-.35h.4c.55 0 1 .45 1 1h0c0 .55-.45 1-1 1h-1h1c.55 0 1 .45 1 1s-.45 1-1 1h-.4c-.7 0-.95-.1-1.25-.35m15.582 7.35l4.3-8h-5.3m-7.232 2.6c0-1.5 1.2-2.7 2.6-2.7s2.7 1.2 2.7 2.7c0 .7-.3 1.4-.8 1.9l-4.5 3.5h5.3m-13.041-3l.755-2h.199l1.887 5h.201l3.774-10H33.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.504h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsDesmosScientificIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDespegarIcon],svg[arcticons-despegar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5v37H24c10.217 0 18.5-8.283 18.5-18.5S34.217 5.5 24 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.5C15.717 42.5 24 34.217 24 24S15.717 5.5 5.5 5.5z"></svg:path>`,
})
export class ArcticonsDespegarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDestinyIcon],svg[arcticons-destiny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 33.12V2.5l16.37 35.442zm0 0V2.5L7.63 37.942z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.879 0 21.5 9.621 21.5 21.5S35.879 45.5 24 45.5S2.5 35.879 2.5 24S12.121 2.5 24 2.5"></svg:path>`,
})
export class ArcticonsDestinyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDestiny2Icon],svg[arcticons-destiny-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="8.192" height="15.019" x="19.904" y="8.764" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.096"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.897 10.209a25.7 25.7 0 0 1-6.546-2.494c-.193-.136-.873-.495-.873-.495a5.622 5.622 0 0 0-5.55 9.73c5.428 4.096 10.44 11.384 10.44 18.723a5.632 5.632 0 0 0 11.264 0c0-7.339 5.012-14.627 10.44-18.722a5.62 5.62 0 0 0-5.55-9.731s-.68.359-.873.494a25.7 25.7 0 0 1-6.546 2.494"></svg:path>`,
})
export class ArcticonsDestiny2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDestinyItemManagerIcon],svg[arcticons-destiny-item-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.9 24L24 36.9L11.1 24l8.6-8.6l-4.3-4.3L2.5 24L24 45.5L45.5 24L24 2.5l-4.3 4.3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 19.757l4.313 4.313L24 28.384l-4.313-4.314z"></svg:path>`,
})
export class ArcticonsDestinyItemManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDetexifyIcon],svg[arcticons-detexify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zm13.599 23.981h5.768m-5.768-11.536h5.768m-5.768 5.768h3.76m-3.76-5.768v11.536"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.071 17.55l3.874 5.785l-3.874 5.785m7.749-11.57l-3.875 5.785l3.875 5.785M10.18 17.561h8.714m-4.357 11.548V17.561m4.357 0v1.561m-8.714-1.561v1.561"></svg:path>`,
})
export class ArcticonsDetexifyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDetoxdroidIcon],svg[arcticons-detoxdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.1 38.65c1.13 1.12 3.94-.57 2.82-1.69M29 37c-1.12 1.12 1.69 2.81 2.82 1.69m-9.57 2.81c.05 1.69 3.38 1.69 3.39 0m-10.53-9.92c-4-4.5-3.06-5.22.32-.17m17.1 0c3.38-5.05 4.32-4.33.33.17m7.3 6.63C34.53 27 13.46 27 7.84 38.21m-5-10.61a21.48 21.48 0 0 1 42.32-7.33a21.4 21.4 0 0 1-17.46 24.9A21.47 21.47 0 0 1 2.83 27.83m7.08 7.37v-27m7.32 22.54v-27M24 29.77V2.59m6.75 28.18v-27m7.32 31.46v-27"></svg:path>`,
})
export class ArcticonsDetoxdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDetranDfIcon],svg[arcticons-detran-df-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.3 20.344v-7.4a7.4 7.4 0 1 0-7.4 7.4h22.2a7.4 7.4 0 1 0-7.4-7.4l.034 7.4m-7.468 7.313l.034 7.4a7.4 7.4 0 1 1-7.4-7.4h22.2a7.4 7.4 0 1 1-7.4 7.4v-7.4"></svg:path>`,
})
export class ArcticonsDetranDfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDetskyMirIcon],svg[arcticons-detsky-mir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.109 29.893V38.5m0-5.058a2.157 2.157 0 0 0 2.157 2.153h0a2.153 2.153 0 0 0 2.148-2.153v-1.4a2.153 2.153 0 0 0-2.152-2.149h0c-1.188 0-2.15.962-2.153 2.149m-14.21 3.545v-5.694l2.69 5.701l2.69-5.693v5.693m6.567 0v-5.7l-4.301 5.7v-5.7m8.023-4.71v-5.705m-2.15 0h4.302m-6.05 4.619a2.15 2.15 0 0 1-1.866 1.086h0a2.153 2.153 0 0 1-2.153-2.153v-1.396a2.157 2.157 0 0 1 2.153-2.152h0c1.188 0 2.149.964 2.149 2.156v.694H22.65m-2.392 2.855v-5.71h-3.337c.012 1.71-.118 3.451-.718 5.063q-.117.325-.247.639m5 1.078V25.18h-5.591v1.078m19.809-16.092l-1.596-.572a1.553 1.553 0 0 0-1.987.934l-.001.003l-.58 1.607c-.29.807.129 1.697.936 1.987l.005.001l1.592.573a1.553 1.553 0 0 0 1.99-.928l.002-.005l.576-1.608a1.553 1.553 0 0 0-.93-1.99zm-12.748 0l-1.596-.572a1.553 1.553 0 0 0-1.989.93l-.002.007l-.577 1.607c-.29.807.128 1.697.935 1.987l.002.001l1.592.573a1.553 1.553 0 0 0 1.99-.928l.002-.005l.58-1.608a1.553 1.553 0 0 0-.931-1.989l-.01-.003zm3.145 0l1.596-.572a1.553 1.553 0 0 1 1.99.93l.002.007l.576 1.607a1.553 1.553 0 0 1-.934 1.987l-.003.001l-1.592.573a1.553 1.553 0 0 1-1.99-.928l-.002-.005l-.576-1.608a1.553 1.553 0 0 1 .928-1.99zm-12.743 0l1.591-.572a1.553 1.553 0 0 1 1.988.934v.003l.58 1.607a1.553 1.553 0 0 1-.935 1.987l-.005.001l-1.592.573a1.553 1.553 0 0 1-1.99-.928l-.002-.005l-.576-1.608a1.553 1.553 0 0 1 .931-1.989z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDetskyMirIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeufeitageIcon],svg[arcticons-deufeitage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.817 19.735v21.554H7.174V16.947c10.777-4.37 10.07 4.203 17.643 2.788m0 3.162h1.498a3.287 3.287 0 0 1 3.287 3.288v9.112a3.287 3.287 0 0 1-3.287 3.287h-1.498m-10.444 0V22.897m-3.829 15.687V22.897m7.365 15.687V22.897m3.537 15.687V22.897"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.174 19.277c-3.787-.374-3.745-6.616 1.373-7.906c1.6-3.776 5.59-4.008 8.114-1.872c3.12-2.33 6.2-.292 6.158 2.288c5.243-1.373 9.155 6.658 1.998 9.321M34.928 6.711v34.578m-6.497-26.662H43.5"></svg:path>`,
})
export class ArcticonsDeufeitageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeutscheBankIcon],svg[arcticons-deutsche-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 37.5h-8l19-27h8z"></svg:path>`,
})
export class ArcticonsDeutscheBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeutschlandcardIcon],svg[arcticons-deutschlandcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.537" cy="8.112" r="3.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="19.398" cy="42.658" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.08" cy="39.745" r="1.215" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.725" cy="35.166" r="1.371" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.466" cy="34.761" r="1.651" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.384" cy="30.252" r="1.628" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.298" cy="27.145" r="1.968" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.509" cy="30.93" r="2.071" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.224" cy="24.007" r="2.422" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.313" cy="15.214" r="2.866" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDeutschlandcardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevbytesIcon],svg[arcticons-devbytes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.055 30.023l-26.84-12.509a2.2 2.2 0 0 1-1.27-1.992V6.6c0-.804.835-1.335 1.563-.996l26.547 12.373zM25.13 24l-13.915 6.486a2.2 2.2 0 0 0-1.27 1.992V41.4c0 .804.835 1.335 1.563.996l26.547-12.373"></svg:path>`,
})
export class ArcticonsDevbytesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevcheckIcon],svg[arcticons-devcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.885 22.726c2.313-1.313 5.31-2.691 7-2.691c1.64 0-4.255 16.852-3.1 16.852a11.75 11.75 0 0 0 6.874-2.673"></svg:path><svg:circle cx="24.799" cy="13.973" r="2.86" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDevcheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeveloperwidgetIcon],svg[arcticons-developerwidget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 34.972V40.9a2.61 2.61 0 0 0 2.6 2.6h20.8a2.61 2.61 0 0 0 2.6-2.6V7.1a2.61 2.61 0 0 0-2.6-2.6H13.6A2.61 2.61 0 0 0 11 7.1v5.928"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.926 31.947L20.873 24l-7.947-7.947m7.947 15.894h8.857"></svg:path>`,
})
export class ArcticonsDeveloperwidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevialetIcon],svg[arcticons-devialet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.789 11.176s2.021-1.338 2.92-2.406c.9-1.069 1.748-2.743 1.748-2.743S22.443 4.5 24 4.5m7.211 6.676s-2.021-1.338-2.92-2.406c-.9-1.069-1.748-2.743-1.748-2.743S25.557 4.5 24 4.5m-7.211 6.676C13.642 13.542 7.5 17.083 7.5 26.482S14.887 43.5 24 43.5s16.5-7.62 16.5-17.018m-3.622.092c0 7.113-5.765 12.879-12.878 12.879s-12.878-5.766-12.878-12.879S16.888 13.696 24 13.696s12.878 5.766 12.878 12.878m-5.667-15.398c3.147 2.366 9.289 5.907 9.289 15.306"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.286 20.706h4.674c3.24 0 5.87 2.63 5.87 5.868h0c0 3.24-2.63 5.87-5.87 5.87h-4.674zm0 0h-1.609m1.609 11.737h-1.609"></svg:path>`,
})
export class ArcticonsDevialetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviantartIcon],svg[arcticons-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.363 43.5l4.071-7.768l12.64-.021v-9.754l-7.524-.009l7.524-14.347V4.5h-7.439l-4.071 7.793l-12.638.015v9.735l7.53-.003l-7.53 14.378V43.5z"></svg:path>`,
})
export class ArcticonsDeviantartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceCareIcon],svg[arcticons-device-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.204 43.628A20 20 0 0 1 28.562 9.975"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.497 10.122a20 20 0 0 1 11.18 5.429M31.4 22.336a8.5 8.5 0 1 1-8.167 8.167m.16-3.818l-.16 3.818"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.457 30.674l4.936-3.989l4.935 4.057"></svg:path>`,
})
export class ArcticonsDeviceCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceCloneIcon],svg[arcticons-device-clone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.666 21.645c2.098 1.269 6.363 1.23 9.626 1.085v-1.437c0-.26.45-.572.658-.417l4.145 3.109c.301.226.301.903 0 1.128l-4.145 3.109c-.207.155-.658-.157-.658-.417v-1.436c-3.463-.089-7.999.028-9.626-2.556zc.134-.702 1.334-1.031 2.56-.982v1.66m-1.004 10.551H15.03c-.554 0-1-.446-1-1V15.863c0-.554.446-1 1-1h3.192m3.85 5.338v-6.28c0-.554.445-1 1-1h10.325c.554 0 1 .446 1 1v19.727c0 .554-.446 1-1 1H23.071c-.554 0-1-.446-1-1v-4.87M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsDeviceCloneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceConnectIcon],svg[arcticons-device-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10.268" height="18.475" x="30.179" y="5.644" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.022"></svg:rect><svg:rect width="16.933" height="12.473" x="7.553" y="23.453" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.135"></svg:rect><svg:rect width="16.918" height="4.275" x="7.561" y="38.225" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.105"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.026 5.5l2.217 2.018l-2.217 2.019"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.194 20.54v-8.278a4.744 4.744 0 0 1 4.743-4.744h8.306M17.66 18.861l1.29 1.407l1.29-1.407"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.95 20.268v-6.86a1.423 1.423 0 0 1 1.423-1.423h6.9"></svg:path>`,
})
export class ArcticonsDeviceConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceHelpIcon],svg[arcticons-device-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.798" cy="30.458" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.213 22.52c0-.99.401-1.887 1.05-2.536a3.585 3.585 0 0 1 6.12 2.535c0 .99-.334 1.961-1.05 2.535c-.742.595-2.548 1.57-2.548 3.087"></svg:path><svg:circle cx="30.659" cy="24.643" r="9.826" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.786 36.664V40.5c0 1.105-.564 2-1.258 2H8.773c-.694 0-1.257-.895-1.257-2v-33c0-1.105.563-2 1.257-2h20.755c.695 0 1.258.895 1.258 2v7.13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.65 25.428h-2.054l-1.714-4.8l-1.16 4.773l-1.173 4.829l-1.713-4.8h-1.679m5.341-15.988h5.334"></svg:path>`,
})
export class ArcticonsDeviceHelpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceInfoIcon],svg[arcticons-device-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.34 15.238l-1.879 1.536l.39 2.395l2.27.86L31 18.493m-4.149.676l-5.702 4.662m-1.489 3.931l1.879-1.536l-.39-2.395l-2.27-.86L17 24.507"></svg:path><svg:rect width="21" height="37" x="13.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 37.5h21m-8 2.5h-5"></svg:path>`,
})
export class ArcticonsDeviceInfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceInfoProIcon],svg[arcticons-device-info-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.95 19.05c-2.734-2.734-15.84-5.941-15.84-5.941s3.207 13.107 5.94 15.841a7 7 0 0 0 9.9-9.9"></svg:path>`,
})
export class ArcticonsDeviceInfoProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevicePulseIcon],svg[arcticons-device-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.342 11.023h23.316M12.342 36.977h23.316"></svg:path><svg:rect width="23.316" height="39" x="12.342" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.793" ry="2.793"></svg:rect><svg:circle cx="24" cy="40.254" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.737" cy="28.968" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.579" cy="21.742" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.421" cy="28.065" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.263" cy="19.032" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.601 27.704l3.178-4.658m1.84-.182l2.837 4.015m1.679-.168l3.383-6.343"></svg:path>`,
})
export class ArcticonsDevicePulseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceUnlockIcon],svg[arcticons-device-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.489V39.5c0 2.216-1.784 4-4 4h-23c-2.216 0-4-1.784-4-4v-31c0-2.216 1.784-4 4-4h16.011z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.351 33.354h4.874l-2.512-9.362a4.555 4.555 0 1 0-3.412-.004l-2.503 9.366h4.874M8.794 20.686h10.61m9.104 0H39.34m-30.611 3.1h13.129m4.356 0h12.932M8.489 27.107h12.728m5.406 0h12.61"></svg:path>`,
})
export class ArcticonsDeviceUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceUtilityIcon],svg[arcticons-device-utility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="3.97" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.89 30.29V17.71L24 11.43l-10.89 6.28v12.58L24 36.57z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.61 21.3c.58-.92.97-2 1.1-3.2c.32-3.08-1.43-6.11-4.26-7.36c-1.1-.49-2.23-.69-3.33-.64c-1.97.09-3.79-1.09-4.73-2.83c-.49-.9-1.19-1.72-2.11-2.39c-2.52-1.84-6.05-1.84-8.57 0c-.92.67-1.61 1.49-2.11 2.39c-.94 1.74-2.76 2.92-4.73 2.83c-1.09-.05-2.23.15-3.33.64C6.72 12 4.96 15.03 5.28 18.1c.12 1.19.51 2.27 1.1 3.19a5.1 5.1 0 0 1 0 5.4c-.58.92-.97 2-1.1 3.2c-.32 3.07 1.43 6.11 4.26 7.36c1.1.49 2.23.69 3.33.64c1.97-.09 3.79 1.09 4.73 2.83c.49.9 1.19 1.72 2.11 2.39c2.52 1.84 6.05 1.84 8.57 0c.92-.67 1.62-1.49 2.11-2.39c.94-1.74 2.76-2.92 4.73-2.83c1.09.05 2.23-.15 3.33-.64c2.83-1.26 4.58-4.29 4.26-7.36a7.3 7.3 0 0 0-1.1-3.2a5.1 5.1 0 0 1 0-5.4Z"></svg:path>`,
})
export class ArcticonsDeviceUtilityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceinfoIcon],svg[arcticons-deviceinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5"></svg:path><svg:circle cx="24" cy="15.21" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.99 21.34v13.95"></svg:path>`,
})
export class ArcticonsDeviceinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeviceinfohwIcon],svg[arcticons-deviceinfohw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.663" height="39" x="13.168" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.168 38.742h21.664m0-29.484H13.168m10.832 0v29.484M27.416 13.5h4v4h-4zm0 8.5h4v4h-4zm0 8.5h4v4h-4zm4 2h3.416m-7.416-17H24m5.416 2V22m0 4v4.5"></svg:path>`,
})
export class ArcticonsDeviceinfohwIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevinfoIcon],svg[arcticons-devinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.565 22.238v17.57a2.687 2.687 0 0 1-2.693 2.692h-16.24a2.687 2.687 0 0 1-2.693-2.693l-.003-31.614A2.687 2.687 0 0 1 15.63 5.5h16.243a2.687 2.687 0 0 1 2.692 2.693v1.5M17.973 37.55l10.927-.057"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.48 19.818a6.345 6.345 0 1 1 11.385-3.852h0a6.345 6.345 0 0 1-9.278 5.626l-3.534 1.325z"></svg:path><svg:circle cx="35.524" cy="11.974" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.524 14.55v5.795"></svg:path>`,
})
export class ArcticonsDevinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevrantIcon],svg[arcticons-devrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.92 4.5a26 26 0 0 0-4 .27A15.07 15.07 0 0 0 12 8.63c-3 2.86-4.48 6.55-4.7 11.62c-.25 5.49 1.22 10 4.29 13.16a14.1 14.1 0 0 0 5.27 3.43l.57.2l1.69 2.59c.93 1.42 1.8 2.79 1.94 3c.54.94.8 1.06 1.06.47c.13-.27 1.18-4.81 1.18-5.08a3.7 3.7 0 0 1 .87-.05c6.63 0 11.62-2.56 14.42-7.34a17.8 17.8 0 0 0 2.18-8.6C40.89 17.5 40 14 38 11a14.72 14.72 0 0 0-10.1-6.24a25 25 0 0 0-4-.23Zm7.44 7.56l-7.18 18.05"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.62 26.16a2 2 0 0 1 2 2h0a2 2 0 1 1-2-2m0-9.47a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2"></svg:path>`,
})
export class ArcticonsDevrantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDewuIcon],svg[arcticons-dewu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 17.533h1.602v17.324M4.5 13.468h1.602m4.153 0h11.302v8.202H10.255zm0 4.094h11.304m-11.304 8.213h11.304m-11.304 4.149h11.304m-10.042 3.733l1.204.956h6.745c.563 0 1.384.067 1.384-.968v-7.87m5.656 4.149h5.31m-5.31-15.164h5.31m-5.31-1.043v12.406m4.284-12.98v21.714m5.47-1.2l1.204.956h4.652c.563 0 1.384.067 1.384-.968V14.759h-8.44m0-1.616v16.942m4.22-15.325v15.325"></svg:path>`,
})
export class ArcticonsDewuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDexcomG6Icon],svg[arcticons-dexcom-g6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5C13.249 4.5 4.5 13.249 4.5 24S13.249 43.5 24 43.5S43.5 34.751 43.5 24V4.5z"></svg:path><svg:circle cx="24" cy="24" r="13.703" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDexcomG6Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDfndrSecurityIcon],svg[arcticons-dfndr-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c12.491-7.566 18.38-20.278 18.38-32.157c0 0-6.053-4.843-18.38-4.843S5.62 10.342 5.62 10.342c0 11.88 5.889 24.592 18.38 32.158"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.59 38.568A6.66 6.66 0 0 1 24 35.802a6.5 6.5 0 0 1 2.253.391a6.6 6.6 0 0 1 3.158 2.375M8.402 24.386c4.183-3.63 9.634-5.802 15.598-5.802c2.712 0 5.33.445 7.759 1.296M13.057 32.617A14.65 14.65 0 0 1 24 27.747c1.687 0 3.32.283 4.83.809m2.925-8.68l-5.498 16.322"></svg:path>`,
})
export class ArcticonsDfndrSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDfvIcon],svg[arcticons-dfv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.35 33.745c.76-6.075 5.52-11.65 5.52-11.65a18 18 0 0 0-2.395.701s1.549-5.316 5.93-6.806c-1.694-.73-2.249-.963-2.249-.963A25 25 0 0 1 25.75 13.8a3.28 3.28 0 0 1 3.16 1.853c3.383.104 6.771 1.652 4.931 5.508c-.76-1.753-2.57-2.016-5.024-1.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.722 34.674c-1.35-4.083-5.12-7.613-7.168-7.613c-2.156 0-1.606 3.213-1.606 3.213c-.73-3.243-1.187-6.639.555-8.325c1.81-1.753 3.71-1.548 6.136-1.18"></svg:path><svg:rect width="31.671" height="31.671" x="8.164" y="8.164" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.575" transform="rotate(45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.078c1.809-.058 2.744-.03 3.766.526"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.948 16.264s-.137.82-.89.756c-.687-.058-.673-.96-.673-.96"></svg:path>`,
})
export class ArcticonsDfvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDhaagaIcon],svg[arcticons-dhaaga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.637 30.727h4.205a8.41 8.41 0 0 0 0-16.818H14.75v12.614a4.205 4.205 0 0 1-4.205 4.204H6.341V5.5h18.5c9.29 0 16.819 7.53 16.819 16.818s-7.53 16.818-16.818 16.818H11.436L6.34 42.5v-3.364"></svg:path>`,
})
export class ArcticonsDhaagaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDhanIcon],svg[arcticons-dhan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.341 19.684c-6.678-.43-11.094 5.955-9.09 10.498c2.637 5.976 14.385 6.11 20.641-2.382M15.195 13.658c4.888-3.85 2.536-8.8-2.847-8.09c-4.458.682-7.266 5.332-6.535 8.855c.982 4.735 6.731 6.925 10.432 5.883m15.646-13.12V42.5m-8.12-35.312h18.531"></svg:path>`,
})
export class ArcticonsDhanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDharmaIcon],svg[arcticons-dharma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5A18.5 18.5 0 0 1 42.5 24v16.5a2 2 0 0 1-2 2h-33a2 2 0 0 1-2-2V24A18.5 18.5 0 0 1 24 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.83 11.384a13.465 13.465 0 0 1 13.465 13.465V42.5h0h-26.93h0V24.849A13.465 13.465 0 0 1 23.83 11.384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.819 28.922a5.29 5.29 0 0 1 5.29 5.29V42.5h0h-10.58h0v-8.288a5.29 5.29 0 0 1 5.29-5.29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.546 20.427a9.636 9.636 0 0 1 9.636 9.636V42.5h0H15.91h0V30.063a9.636 9.636 0 0 1 9.636-9.636"></svg:path>`,
})
export class ArcticonsDharmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDhgateIcon],svg[arcticons-dhgate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.866 19.15v6.878m4.557-6.878v6.878m-4.557-3.525h4.557m6.564-3.317v7.312a2.445 2.445 0 0 1-2.437 2.438h0c-.732 0-1.341-.244-1.707-.731"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.55 19.064a2.445 2.445 0 0 1 2.437 2.438v1.584a2.445 2.445 0 0 1-2.437 2.437h0a2.445 2.445 0 0 1-2.438-2.437v-1.584a2.445 2.445 0 0 1 2.438-2.438m10.12.946v5.159c0 .515.343.86.859.86h.258m-2.063-4.643h1.891m-3.5 2.923c0 .946-.774 1.72-1.72 1.72h0a1.725 1.725 0 0 1-1.719-1.72V23.19c0-.945.774-1.72 1.72-1.72h0c.945 0 1.72.775 1.72 1.72m0 2.837v-4.642M8.5 26.028V19.15h1.548c1.634 0 3.01 1.376 3.01 3.01v.86c0 1.633-1.376 3.008-3.01 3.008zm30.743-.86c-.258.516-.86.86-1.462.86h0a1.725 1.725 0 0 1-1.72-1.72V23.19c0-.946.774-1.72 1.72-1.72h0c.946 0 1.719.774 1.719 1.72v.602h-3.438"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsDhgateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDhlExpressIcon],svg[arcticons-dhl-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.863 23.543c-.502.717-.328 1.298.389 1.298h6.488m-3.825-5.658l-1.754 2.505m-8.774-2.505l-1.746 2.495m9.532-2.495l-1.746 2.495m-7.786 0h7.786m-9.092 1.865l-.987 1.409m8.773-1.409l-.987 1.409m-9.066-1.722c-.623.89-1.849 1.61-2.738 1.61h-4.947l2.336-3.336m-2.711-2.32h9.283c.89 0 1.105.72.483 1.61l-.627.894M8.077 24.84H3.5m5.961-1.976H3.5m3.193 3.953H3.5m36.423-1.977H44.5m-5.961 1.977H44.5m-3.193-3.953H44.5"></svg:path>`,
})
export class ArcticonsDhlExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiabetesmIcon],svg[arcticons-diabetesm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.997 4.5S10.27 22.19 10.27 29.772a14 14 0 0 0 .074 1.419a1.953 1.953 0 1 1 1.365 3.348h-.001a2 2 0 0 1-.626-.109a13.73 13.73 0 0 0 26.449-2.352a1.953 1.953 0 1 1 .053-3.76C36.14 20.149 23.997 4.5 23.997 4.5"></svg:path><svg:circle cx="16.927" cy="26.332" r="1.955" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.592" cy="31.979" r="1.955" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.697" cy="20.248" r="1.955" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.2" cy="33.53" r="1.955" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.16 31.27l2.655-3.387m2.499-.033l2.134 2.608m2.25-.084l4.173-8.346m1.533.175l2.386 9.35m2.218.992l2.154-1.665"></svg:path>`,
})
export class ArcticonsDiabetesmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiabloImmortalIcon],svg[arcticons-diablo-immortal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.244 34.593l4.257 4.203c.782.602 1.189 1.39 1.15 2.399l3.323 3.254v.05l.026-.025l.026.026v-.051l3.324-3.254c-.04-1.01.368-1.797 1.15-2.398l10.032-9.907c.395-.69 1.62-1.74 2.757-1.68l3.575-3.28l-3.575-3.189c-1.086-.062-2.115-.707-2.757-1.624L28.5 9.219c-.632-.586-.85-1.403-1.15-2.564L24 3.5l-3.35 3.155c-.3 1.161-.517 1.978-1.149 2.564l-3.92 3.868m-2.595 2.56l-3.518 3.47c-.642.918-1.671 1.563-2.757 1.625L3.136 23.93l3.575 3.28c1.136-.06 2.362.99 2.757 1.68l3.44 3.397"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.14 10.405l1.79 1.517l.005 1.163h4.66l.005-1.163l1.79-1.517zm3.04 5.717a100 100 0 0 0-1.237.013l.02 6.457l-1.488 1.335l1.506 1.363l.07 7.138c1.892.068 2.815.115 4.45-.649l.048-6.489l1.507-1.363l-1.49-1.335l.02-5.992c-.333-.169-1.826-.483-3.405-.478m-1.146 18.474l.007 1.025l-1.837 1.654h8.123L26.49 35.62l.007-1.024z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.075 13.083c-6.222 0-15.711.01-15.711.01c1.015 1.008 2.047 2.024 3.07 3.038l-.158 16.279l-3.04 2.184l16.528.001c5.574 0 11.013-6.032 7.823-14.652l3.707 2.807s-.703-1.432-1.138-2.1c-2.356-3.62-6.826-7.566-11.08-7.566zm-7.968 3.048s4.275.014 6.198.014c2.187 0 4.089 1.276 5.186 2.757c1.865 2.518 2.065 7.89.028 10.685c-1.132 1.552-4.047 2.846-5.432 2.846c-1.993 0-5.98-.028-5.98-.028z"></svg:path>`,
})
export class ArcticonsDiabloImmortalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiaguardIcon],svg[arcticons-diaguard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.7 20.969c3.954 3.774 4.214 9.451 2.074 14.383A13.85 13.85 0 0 1 24 43.5a13.85 13.85 0 0 1-12.775-8.148c-2.14-4.932-1.874-10.608 2.08-14.383A72.5 72.5 0 0 0 23.998 4.5a72.7 72.7 0 0 0 10.7 16.469Z"></svg:path>`,
})
export class ArcticonsDiaguardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiariumIcon],svg[arcticons-diarium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.933 42.051h-1.409c-2.487 0-4.511-2.003-4.511-4.49V12.735c0-2.487 2.024-4.49 4.511-4.49h25.179c2.487 0 4.511 2.003 4.511 4.49v1.893m.001 18.785v4.148c0 2.487-2.025 4.49-4.512 4.49h-8.408M14.631 10.585V5.949m18.965 0v4.636m2.865 5.76H7.013m7.313 7h7.633m-7.633 11.73h2.116m-2.116-5.865h3.899m-.386 12.841l9.657-9.657"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.692 20.636l-4.094 1.277l1.783 3.741C37.495 33.996 28.493 39.19 20.702 39.19c0-11.004 10.344-24.386 25.31-25.31a27 27 0 0 1-1.32 6.756"></svg:path>`,
})
export class ArcticonsDiariumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiaryIcon],svg[arcticons-diary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33-2v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.267 11.656h11.796v5.941H20.267z"></svg:path>`,
})
export class ArcticonsDiaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiaryPersonalJournalIcon],svg[arcticons-diary-personal-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 38.613l9.63-13.36l13.083 6.802L43.5 9.387l-6.562 4.389M43.5 9.387l-1.909 7.712"></svg:path>`,
})
export class ArcticonsDiaryPersonalJournalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiaryVaultIcon],svg[arcticons-diary-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="23.845" cy="24.571" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.837" ry="3.664"></svg:ellipse><svg:ellipse cx="23.845" cy="24.571" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.173" ry="7.016"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.098 15.12c3.535 1.152 6.13 4.947 6.13 9.451c0 5.418-3.089 9.07-8.228 10.01c-1.905.349-2.314.463-2.314.463"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.007 14.998c-3.746.98-6.545 4.894-6.545 9.573c0 1.89.447 4.143 1.124 5.696c2.162 4.959 4.137 8.16 5.1 13.233M24 38.683c7.25-.893 11.092-5.935 11.968-12.193"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.072 23.677c-.434-6.75-5.742-12.084-12.227-12.084c-6.769 0-12.256 5.81-12.256 12.978c0 1.65.138 3.227.668 4.678m.943 2.86c.651 1.643 1.785 3.825 1.785 3.825"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.233 9.238a15.65 15.65 0 0 0-6.388-1.357c-7.015 0-12.985 4.623-15.213 11.083m30.737.192c-1.097-3.305-3.053-6.118-6.105-8.142M22.488 4.5a19.06 19.06 0 0 0-9.964 3.68m22.854.158a19.1 19.1 0 0 0-9.345-3.76"></svg:path>`,
})
export class ArcticonsDiaryVaultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiasporaIcon],svg[arcticons-diaspora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 4.49h10v13.08l12.45-4L44.5 23l-12.45 4l7.67 10.57l-8 5.87L24 32.94l-7.67 10.57l-8-5.87L16 27.07L3.5 23l3.09-9.5l12.45 4Z"></svg:path>`,
})
export class ArcticonsDiasporaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiccionarioIcon],svg[arcticons-diccionario-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.562 24.61V4.5h-4.301"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.26 24.61h8.458c5.553 0 10.055-4.502 10.055-10.055S24.27 4.5 18.718 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.517 24.578V43.5H15.55m7.716 0h6.408l.263-5.073M27.45 23.782h10.29h-.003c-.777-4.2-4.033-7.352-7.933-7.352c-4.478 0-8.108 4.157-8.108 9.285S25.326 35 29.804 35c2.98 0 5.584-1.84 6.993-4.583"></svg:path>`,
})
export class ArcticonsDiccionarioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiceIcon],svg[arcticons-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.535 4.5c6.002 3.288 10.194 8.469 16.688 11.999c-4.302 4.834-6.865 10.938-11.344 15.62c-5.636-4.337-11.726-6.948-17.102-11.31C12.134 14.629 17.8 10.726 21.535 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.867 23.976l.494 11.59c.056 2.057.515 2.474 1.552 2.793c1.621.499 5.503 2.977 1.138 3.276c-.609.042-1.62 0-1.62 0c-1.54-.2-3.95.103-3.794-2.172l-.113-11.916m-11.668-.698l-.149 7.407c-.001 1.513-.349 5.055 2.897 5.724c1.57.323 4.398 3.292-.31 3.517a15.5 15.5 0 0 1-3.62-.655c-1.81-.423-1.574-1.869-1.62-3.173a95 95 0 0 0 .05-14.484m4.224-8.686c-1.802.232-3.649.89-5.724 3.758c2.017 2.344 9.5 1.953 8-2.138c-2.064 3.644-6.652 1.237-2.276-1.62m9.309-2.414c-3.045.563-3.47 2.928-5.172 4.414c7.113 1.129 9.758-2.076 7.896-3.241c-2.909 3.588-6.322 1.205-2.724-1.173"></svg:path>`,
})
export class ArcticonsDiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDice1Icon],svg[arcticons-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.338 29.816l-5.111-20.5L18.889 3.5L3.662 18.184l5.111 20.5L29.111 44.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.746 29.13l1.481-19.814l-18.415 1.898l-17.15 6.97l10.61 16.8l14.84 9.516z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.746 29.13l-23.475 5.853l6.541-23.77zM20.812 11.215L18.889 3.5m18.857 25.63l6.592.686m-30.067 5.167l-5.498 3.7"></svg:path>`,
})
export class ArcticonsDice1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDicerIcon],svg[arcticons-dicer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.82 10.5a3.32 3.32 0 1 1 0 6.64a3.32 3.32 0 0 1 0-6.64m20.36 0a3.32 3.32 0 1 1 0 6.64a3.32 3.32 0 0 1 0-6.64M24 20.68A3.32 3.32 0 0 1 27.32 24h0A3.32 3.32 0 0 1 24 27.32h0A3.32 3.32 0 0 1 20.68 24h0A3.32 3.32 0 0 1 24 20.68M13.82 30.86a3.32 3.32 0 0 1 3.32 3.32h0a3.32 3.32 0 0 1-3.32 3.32h0a3.32 3.32 0 0 1-3.32-3.32h0a3.32 3.32 0 0 1 3.32-3.32m20.36 0a3.32 3.32 0 0 1 3.32 3.32h0a3.32 3.32 0 0 1-3.32 3.32h0a3.32 3.32 0 0 1-3.32-3.32h0a3.32 3.32 0 0 1 3.32-3.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsDicerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDicer1Icon],svg[arcticons-dicer1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.037 42.5V22.658m0 19.842L7.029 34.104a.2.2 0 0 1-.114-.182v-19.88M24.037 42.5l16.935-8.396a.2.2 0 0 0 .113-.182v-19.88m-17.048 8.616L6.915 14.043m17.122 8.615l17.048-8.615m-34.17 0l17.03-8.521a.2.2 0 0 1 .183 0l16.957 8.52m-5.408 8.387l2.492-1.192a.2.2 0 0 0 .116-.183v-2.421a.203.203 0 0 0-.298-.18l-2.492 1.302a.2.2 0 0 0-.11.18v2.31c0 .15.157.249.292.184m-2.012 3.105l-2.449 1.26a.2.2 0 0 0-.11.181v2.38c0 .15.16.249.295.18l2.449-1.242a.2.2 0 0 0 .11-.181v-2.397a.203.203 0 0 0-.295-.18Zm-4.05 11.188V34.38c0-.151-.16-.25-.295-.181l-2.382 1.208a.2.2 0 0 0-.112.181v2.336c0 .151.16.25.295.182l2.382-1.201a.2.2 0 0 0 .112-.182m-11.25 0V34.26c0-.155.166-.253.301-.178l2.405 1.322a.2.2 0 0 1 .105.178v2.342c0 .151-.16.25-.294.182l-2.405-1.202a.2.2 0 0 1-.112-.182M10.1 18.454l2.462 1.3a.2.2 0 0 1 .108.18v2.31c0 .15-.156.248-.291.183l-2.463-1.19a.2.2 0 0 1-.115-.182v-2.42c0-.154.163-.252.298-.18m13.95-3.037l2.359-1.196a.203.203 0 0 0-.001-.364l-2.358-1.179a.2.2 0 0 0-.184.001l-2.29 1.18a.203.203 0 0 0 0 .36l2.289 1.197c.058.03.127.03.186 0"></svg:path>`,
})
export class ArcticonsDicer1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDicewareIcon],svg[arcticons-diceware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="34" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="34" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="34" cy="36" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="14" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="14" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle><svg:circle cx="14" cy="36" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="3.596"></svg:circle>`,
})
export class ArcticonsDicewareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDicioIcon],svg[arcticons-dicio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.745 38.148s.176 4.63 9.315 4.339c9.138-.293 20.683-2.377 25.682-12.874S38.704 5.604 14.509 5.5c0 0-5.356 29.949 1.162 29.924c-6.324-.93-9.74.269-9.926 2.724"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.137 12.07c2.98.093 4.188 2.322 4.188 5.188v5.423c0 2.865-1.323 5.188-4.188 5.188h0c-2.866 0-4.19-2.323-4.19-5.188v-5.423c0-2.902 1.157-5.038 4.19-5.188m-.022 18.733v4.138"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.112 24.22a8.18 8.18 0 0 0 16.049 0"></svg:path>`,
})
export class ArcticonsDicioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDictatorsNoPeaceIcon],svg[arcticons-dictators-no-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.74 25.128l-2.506-9.504m1.136-.374c1.78 6.165 3.641 8.826 3.434-2.66m1.365-.18c1.386 5.438 3.271 8.693 4.11-1.513m9.753 14.231l2.506-9.504m-4.569-3.034l.007-.352m3.426 3.012c-1.779 6.165-3.64 8.826-3.433-2.66m-1.365-.18c-1.387 5.438-3.272 8.693-4.11-1.513m2.026-3.261a3.135 3.135 0 1 1-6.27.001a3.135 3.135 0 0 1 6.27-.001"></svg:path><svg:path d="M15.887 10.999a1.56 1.56 0 1 1-3.12 0a1.56 1.56 0 0 1 3.12 0m-5.191 3.32a1.24 1.24 0 1 1-2.481 0a1.24 1.24 0 0 1 2.48 0m14.19-3.32a1.56 1.56 0 1 0 3.12 0a1.56 1.56 0 0 0-3.12 0m5.192 3.32a1.24 1.24 0 1 0 2.48 0a1.24 1.24 0 0 0-2.48 0m-1.341 11.588c-2.789-.346-5.751-.465-8.346-.465s-5.558.119-8.347.465m15.194 15.098a10.65 10.65 0 0 1-6.85 2.495C14.5 43.5 9.73 38.727 9.73 32.84c0-2.518.89-4.955 2.514-6.878m16.289.005a10.66 10.66 0 0 1 2.509 6.872h0q0 .462-.04.923"></svg:path><svg:path d="M21.153 32.794c0-2.751-.282-5.327-2.393-5.327s-2.393 2.576-2.393 5.327c0 0 .823-.696 2.393-.696s2.393.696 2.393.696m7.653 0c0-2.751-.282-5.327-2.393-5.327s-2.393 2.576-2.393 5.327c0 0 .823-.696 2.393-.696s2.393.696 2.393.696m5.479 1.624l.868.174l.722-.388l.8.6l3.11-.678l-.096 1.178l-5.076.937m-6.04 1.242c.308 1.276 1.588 2.333 3.06 2.688l-1.158 1.719c-1.602-.353-3.217-1.905-4.015-3.871l-1.516.437l-.535 3.029l-1.592-.767l.46-1.582c-.708-.846-.803-1.583-.082-2.837l6.882-1.35m8.713-1.747l.162.962"></svg:path><svg:path d="m22.963 38.895l-5.49 2.684c-.366-1.127-.62-2.12-.626-3.247l3.45-.558c.863.54 1.116-.016 2.337-.415m2.561 1.177c.227 1.26 1.24 1.632 2.144 1.234m2.719-2.855l3.23-.735m-1.956-.892l1.757-.4"></svg:path></svg:g>`,
})
export class ArcticonsDictatorsNoPeaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDictccIcon],svg[arcticons-dictcc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33-2v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.165 26.1a6 6 0 0 0-6-6h0a6 6 0 0 0-6 6V30a6 6 0 0 0 6 6h0a6 6 0 0 0 6-6m0 6V12"></svg:path>`,
})
export class ArcticonsDictccIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[arcticonsDictionaryIcon],svg[arcticons-dictionary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.73 4.5H10.4a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h2.33m0-39v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z"></svg:path><svg:circle cx="28.195" cy="22.671" r="6.329" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.723 27.142l-6.052 6.052"></svg:path>`,
})
export class ArcticonsDictionaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
