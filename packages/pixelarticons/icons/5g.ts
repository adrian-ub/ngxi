import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticons5gIcon],svg[pixelarticons-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H3v6h5v2H3v2h7v-6H5V9h5zm11 0h-9v10h9v-6h-4v2h2v2h-5V9h7z"></svg:path>`,
})
export class Pixelarticons5gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
