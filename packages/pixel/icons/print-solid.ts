import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPrintSolidIcon],svg[pixel-print-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3v5h-3V5h-1V4H7v4H4V1h14v1h1v1zM1 9v8h3v6h16v-6h3V9zm16 11H7v-4h10zm1-8h2v1h-2z"></svg:path>`,
})
export class PixelPrintSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
