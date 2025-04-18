import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningTriangleFrameAlertWarningTriangleExclamationCautionIcon],svg[streamline-interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5v3"></svg:path><svg:circle cx="7" cy="11" r=".5"></svg:circle><svg:path d="M7.89 1.05a1 1 0 0 0-1.78 0l-5.5 11a1 1 0 0 0 .89 1.45h11a1 1 0 0 0 .89-1.45Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertWarningTriangleFrameAlertWarningTriangleExclamationCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
