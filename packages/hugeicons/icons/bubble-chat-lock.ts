import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatLockIcon],svg[hugeicons-bubble-chat-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 2.05a11 11 0 0 0-1-.048c-5.522 0-10 4.284-10 9.567c0 2.538 1.033 4.844 2.719 6.556c.37.377.619.892.519 1.422a5.3 5.3 0 0 1-1.087 2.348a6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.841-.386s.39.018.85.104c.637.12 1.285.18 1.934.18c4.83 0 9.065-3.277 10-7.634m-10.005-1.5h.01m-4.005 0h.009"></svg:path><svg:path d="M16.754 5.17V3.78c0-.204.009-.412.082-.604c.195-.51.713-1.178 1.655-1.178s1.48.668 1.676 1.178c.073.192.082.4.082.605V5.17m-3.426 5.818H20.2a1.8 1.8 0 0 0 1.8-1.8v-2a1.8 1.8 0 0 0-1.8-1.8h-3.377a1.8 1.8 0 0 0-1.8 1.8v2a1.8 1.8 0 0 0 1.8 1.8"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
