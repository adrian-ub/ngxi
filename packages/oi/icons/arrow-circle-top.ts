import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowCircleTopIcon],svg[oi-arrow-circle-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 1l3 3H5v3H3V4H1z"></svg:path>`,
})
export class OiArrowCircleTopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
