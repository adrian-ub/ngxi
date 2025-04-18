import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopLockDeviceSecureDisplayComputerLockDesktopPadlockSecurityIcon],svg[streamline-computer-desktop-lock-device-secure-display-computer-lock-desktop-padlock-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h2.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M5 5.5h4v3H5zm.5 0v-1a1.5 1.5 0 0 1 3 0v1"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopLockDeviceSecureDisplayComputerLockDesktopPadlockSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
