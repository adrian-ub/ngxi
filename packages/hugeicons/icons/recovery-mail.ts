import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRecoveryMailIcon],svg[hugeicons-recovery-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 8l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8"></svg:path><svg:path d="M22 10.026c-.065-3.066-.098-4.6-1.23-5.735s-2.708-1.175-5.859-1.254a115 115 0 0 0-5.807 0c-3.15.079-4.726.118-5.858 1.254S2.08 6.96 2.016 10.026a69 69 0 0 0 0 2.952c.065 3.066.098 4.6 1.23 5.735s2.707 1.176 5.858 1.255q.954.023 1.903.032"></svg:path><svg:path d="M21.663 16a3.5 3.5 0 1 0-3.163 5c1.585 0 3.07-1.055 3.5-2.5m-.337-2.5v-2.5m0 2.5l-2.235.157"></svg:path></svg:g>`,
})
export class HugeiconsRecoveryMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
