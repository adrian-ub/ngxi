import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBusIcon],svg[pixelarticons-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14v2H5zm0 2v6h14V4h2v16h-2v2h-4v-2H9v2H5v-2H3V4zm0 14h14v-6H5zm2-4h2v2H7zm10 0h-2v2h2z"></svg:path>`,
})
export class PixelarticonsBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
