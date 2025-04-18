import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxAlarmExclamationIcon],svg[bx-alarm-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9s-9 4.121-9 9s4.121 9 9 9m0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7s-7-3.206-7-7s3.206-7 7-7m5.284-2.293l1.412-1.416l3.01 3l-1.413 1.417zM5.282 2.294L6.7 3.706l-2.99 3l-1.417-1.413z"></svg:path><svg:path fill="currentColor" d="M11 9h2v5h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class BxAlarmExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
