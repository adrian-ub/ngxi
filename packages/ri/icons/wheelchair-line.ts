import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWheelchairLineIcon],svg[ri-wheelchair-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.003A2.99 2.99 0 0 1 14.998 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135l2.709 4.514l-1.715 1.03L16.43 17l-1.433-.001zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999l.001-5a1 1 0 0 0-1-1m0-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiWheelchairLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
