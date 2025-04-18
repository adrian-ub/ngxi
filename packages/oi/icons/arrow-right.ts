import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowRightIcon],svg[oi-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v2H0v1h5v2l3-2.53z"></svg:path>`,
})
export class OiArrowRightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
