import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVuejsFillIcon],svg[ri-vuejs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.001 3h4l7 12l7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035L12 14L5.633 3z"></svg:path>`,
})
export class RiVuejsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
