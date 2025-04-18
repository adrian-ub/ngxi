import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileCheckIcon],svg[carbon-mobile-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 27.18l-2.59-2.59L16 26l4 4l8-8l-1.41-1.41z"></svg:path><svg:path fill="currentColor" d="M10 28V10h12v9h2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h4v-2Zm0-22h12v2H10Z"></svg:path>`,
})
export class CarbonMobileCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
