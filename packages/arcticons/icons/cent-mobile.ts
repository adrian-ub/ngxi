import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCentMobileIcon],svg[arcticons-cent-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.596 24.293l9.714 9.68h5.627"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.937 31.528H18.31l-7.281-7.235"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.293 6L11.627 18.666H6v5.627l12.666 12.666v5.627h5.627L36.959 29.92h5.627v-5.627L29.92 11.627V6zm0 12.666l5.627 5.627l-5.627 5.627l-5.627-5.627z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.293 8.596l-9.68 9.714v5.627"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.058 23.937V18.31l7.235-7.281M39.99 24.293l-9.714-9.68H24.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.649 17.058h5.627l7.281 7.235M24.293 39.99l9.68-9.714V24.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.528 24.649v5.627l-7.235 7.281"></svg:path>`,
})
export class ArcticonsCentMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
