import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPrintIcon],svg[pixelarticons-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v6h4v10h-4v4H6v-4H2V8h4zm2 6h8V4H8zm-2 8v-4h12v4h2v-6H4v6zm2-2v6h8v-6z"></svg:path>`,
})
export class PixelarticonsPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
