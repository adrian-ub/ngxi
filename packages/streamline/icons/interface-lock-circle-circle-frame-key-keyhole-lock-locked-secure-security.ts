import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLockCircleCircleFrameKeyKeyholeLockLockedSecureSecurityIcon],svg[streamline-interface-lock-circle-circle-frame-key-keyhole-lock-locked-secure-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="6" r="1.5"></svg:circle><svg:path d="M7 7.5v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLockCircleCircleFrameKeyKeyholeLockLockedSecureSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
