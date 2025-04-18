import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLoginCircleFillIcon],svg[ri-login-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11H2.048c.502-5.053 4.765-9 9.95-9c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.448-3.947-9.95-9h7.95v3l5-4l-5-4z"></svg:path>`,
})
export class RiLoginCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
