import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreezeyouIcon],svg[arcticons-freezeyou-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 38.024c1.033-3.529 3.47-8.057 5.986-8.057c4.772 0 6.409 10.55 13.674 10.55c7.844 0 16.475-15.047 17.34-33.033"></svg:path>`,
})
export class ArcticonsFreezeyouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
