import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoWarningIcon],svg[noto-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F2A600" d="m57.16 8.42l-52 104c-1.94 4.02-.26 8.85 3.75 10.79c1.08.52 2.25.8 3.45.81h104c4.46-.04 8.05-3.69 8.01-8.15a8.1 8.1 0 0 0-.81-3.45l-52-104a8.067 8.067 0 0 0-14.4 0"></svg:path><svg:path fill="#FFCC32" d="m53.56 15.72l-48.8 97.4c-1.83 3.77-.25 8.31 3.52 10.14c.99.48 2.08.74 3.18.76h97.5a7.55 7.55 0 0 0 7.48-7.62a7.6 7.6 0 0 0-.78-3.28l-48.7-97.4a7.443 7.443 0 0 0-9.93-3.47a7.5 7.5 0 0 0-3.47 3.47"></svg:path><svg:path fill="#424242" d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.65 4.65 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8m0 64c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6" opacity=".2"></svg:path><svg:lineargradient id="notoWarning0" x1="68" x2="68" y1="-1808.36" y2="-1887.05" gradientTransform="matrix(1 0 0 -1 -3.64 -1776.09)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#424242"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient><svg:path fill="url(#notoWarning0)" d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.65 4.65 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8"></svg:path><svg:lineargradient id="notoWarning1" x1="64.36" x2="64.36" y1="-1808.36" y2="-1887.05" gradientTransform="matrix(1 0 0 -1 0 -1772.11)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#424242"></svg:stop><svg:stop offset="1" stop-color="#212121"></svg:stop></svg:lineargradient><svg:circle cx="64.36" cy="104.02" r="6" fill="url(#notoWarning1)"></svg:circle><svg:path fill="#FFF170" d="M53.56 23.02c-1.2 1.5-21.4 41-21.4 41s-1.8 3 .7 4.7c2.3 1.6 4.4-.3 5.3-1.8s19.2-36.9 19.9-38.6c.6-1.87.18-3.91-1.1-5.4c-1.3-1.2-2.6-1-3.4.1"></svg:path><svg:circle cx="31.36" cy="75.33" r="3.3" fill="#FFF170"></svg:circle>`,
})
export class NotoWarningIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
