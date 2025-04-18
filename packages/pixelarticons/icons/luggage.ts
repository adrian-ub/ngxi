import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLuggageIcon],svg[pixelarticons-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h6v4h4v14h-2v2h-2v-2H9v2H7v-2H5V6h4zm2 4h2V4h-2zM7 18h10V8H7zm4-8v6H9v-6zm4 0v6h-2v-6z"></svg:path>`,
})
export class PixelarticonsLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
