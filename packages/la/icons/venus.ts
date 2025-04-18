import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVenusIcon],svg[la-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-4.406 0-8 3.594-8 8c0 4.066 3.066 7.438 7 7.938V23h-4v2h4v4h2v-4h4v-2h-4v-4.063c3.934-.5 7-3.87 7-7.937c0-4.406-3.594-8-8-8m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaVenusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
