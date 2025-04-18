import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elWarningSignIcon],svg[el-warning-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0L0 1200h1200zm-46.143 416.089h92.284v158.644l-22.559 223.096h-47.168l-22.56-223.096V416.089zm0 469.336h92.284v99.391h-92.284z"></svg:path>`,
})
export class ElWarningSignIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
