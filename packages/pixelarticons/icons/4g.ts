import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticons4gIcon],svg[pixelarticons-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7H3v6h5v4h2V7H8v4H5zm16 0h-9v10h9v-6h-4v2h2v2h-5V9h7z"></svg:path>`,
})
export class Pixelarticons4gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
