import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowThickBottomIcon],svg[oi-arrow-thick-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v5H1l3.03 3L7 5H5V0z"></svg:path>`,
})
export class OiArrowThickBottomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
