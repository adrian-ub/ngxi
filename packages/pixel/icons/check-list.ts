import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCheckListIcon],svg[pixel-check-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h14v1H9zm0-6h14v1H9zm0-6h14v1H9zm-2 9h1v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1zm1-6v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1V9zm0-6v2H7v1H6v1H5v1H4v1H3V8H2V7H1V5h1v1h1v1h1V6h1V5h1V4h1V3z"></svg:path>`,
})
export class PixelCheckListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
