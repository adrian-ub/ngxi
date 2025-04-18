import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsYahooIcon],svg[fa-brands-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.69 141.06L167 284.23l-56-143.17H14.93l105.83 249.13L82.19 480h94.17l140.91-338.94Zm105.4 135.79a58.22 58.22 0 1 0 58.22 58.22a58.22 58.22 0 0 0-58.22-58.22M394.65 32l-93 223.47h104.79L499.07 32Z"></svg:path>`,
})
export class FaBrandsYahooIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
