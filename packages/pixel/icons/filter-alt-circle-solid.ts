import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFilterAltCircleSolidIcon],svg[pixel-filter-alt-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-8 8h-4v-2h4zm-6-4v-2h8v2zM6 9V7h12v2z"></svg:path>`,
})
export class PixelFilterAltCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
