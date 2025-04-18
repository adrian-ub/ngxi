import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWheelchairFillIcon],svg[ri-wheelchair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4a3 3 0 1 1 6 0v5h1.434a2 2 0 0 1 1.626.836l.089.135l2.709 4.514l-1.715 1.03L16.43 17zm0-15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></svg:path>`,
})
export class RiWheelchairFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
