import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelWikipediaIcon],svg[pixel-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 5v1h-1v1h-1v2h-1v2h-1v2h-1v2h-1v3h-1v1h-1v-1h-1v-3h-1v-2h-1v2h-1v2h-1v1H9v1H8v-1H7v-3H6v-2H5v-2H4V9H3V7H2V6H1V5h5v1H5v1h1v2h1v2h1v2h1v2h1v-1h1v-2h1v-1h-1V9h-1V7H9V6H8V5h4v1h-1v1h1v1h2V6h-1V5h4v1h-1v1h-1v2h-1v3h1v2h2v-2h1v-2h1V8h1V6h-1V5z"></svg:path>`,
})
export class PixelWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
