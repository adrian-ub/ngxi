import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEsetPaymentProtectionIcon],svg[arcticons-eset-payment-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 25.27V12.4a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23.2a4 4 0 0 0 4 4h25.265M4.5 15.636h39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.488 41.6c4.337-1.495 7.428-4.97 7.913-9.394c.19-1.739.065-4.308-.034-5.767a1.22 1.22 0 0 0-1.184-1.135c-1.962-.06-4.242-.388-6.004-2.123a.984.984 0 0 0-1.381 0c-1.763 1.735-4.043 2.062-6.004 2.123a1.22 1.22 0 0 0-1.184 1.135c-.1 1.46-.225 4.028-.034 5.767c.485 4.424 3.576 7.9 7.912 9.394m0 0V22.897"></svg:path>`,
})
export class ArcticonsEsetPaymentProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
