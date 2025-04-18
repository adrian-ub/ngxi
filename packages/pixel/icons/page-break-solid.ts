import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPageBreakSolidIcon],svg[pixel-page-break-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11h5v2H1zm9 0h4v2h-4zm11 5v7h-3v-4H6v4H3v-7zm0-15v7H3V1h3v4h12V1zm-3 10h5v2h-5z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelPageBreakSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
