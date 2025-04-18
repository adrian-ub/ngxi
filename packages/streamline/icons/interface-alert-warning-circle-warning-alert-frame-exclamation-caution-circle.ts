import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningCircleWarningAlertFrameExclamationCautionCircleIcon],svg[streamline-interface-alert-warning-circle-warning-alert-frame-exclamation-caution-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 3.5v3"></svg:path><svg:circle cx="7" cy="9.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceAlertWarningCircleWarningAlertFrameExclamationCautionCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
