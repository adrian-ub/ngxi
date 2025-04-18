import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowThickLeftIcon],svg[oi-arrow-thick-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1L0 4.03L3 7V5h5V3H3z"></svg:path>`,
})
export class OiArrowThickLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
