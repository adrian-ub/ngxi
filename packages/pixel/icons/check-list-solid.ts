import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCheckListSolidIcon],svg[pixel-check-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v1h-1v1H10V7H9V6h1V5h12v1zm-1 12h1v1h-1v1H10v-1H9v-1h1v-1h12zm0-6h1v1h-1v1H10v-1H9v-1h1v-1h12zM8 15v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1v-1zm0-6v2H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-2h1v1h1v1h1v-1h1v-1h1v-1h1V9zm0-6v2H7v1H6v1H5v1H4v1H3V8H2V7H1V5h1v1h1v1h1V6h1V5h1V4h1V3z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelCheckListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
