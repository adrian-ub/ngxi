import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiYenIcon],svg[oi-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l2.25 3H0v1h3v1H0v1h3v2h1V6h3V5H4V4h3V3H4.75L7 0H6L3.69 3h-.38L1 0z"></svg:path>`,
})
export class OiYenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
