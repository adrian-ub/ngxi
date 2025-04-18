import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTailwindcssIconIcon],svg[logos-tailwindcss-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><svg:stop offset="0%" stop-color="#2298BD"></svg:stop><svg:stop offset="100%" stop-color="#0ED7B5"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosTailwindcssIcon0)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"></svg:path>`,
})
export class LogosTailwindcssIconIcon {
  readonly viewBox = input("0 0 256 154")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
