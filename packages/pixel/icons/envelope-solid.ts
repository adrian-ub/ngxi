import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEnvelopeSolidIcon],svg[pixel-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8V9H7V8H6V7H5V6H4V5H3V4z"></svg:path><svg:path fill="currentColor" d="M23 5v14h-1v1H2v-1H1V5h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5z"></svg:path>`,
})
export class PixelEnvelopeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
