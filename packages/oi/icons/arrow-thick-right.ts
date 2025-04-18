import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowThickRightIcon],svg[oi-arrow-thick-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v2H0v2h5v2l3-3.03z"></svg:path>`,
})
export class OiArrowThickRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
