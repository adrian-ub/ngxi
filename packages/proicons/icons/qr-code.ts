import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsQrCodeIcon],svg[proicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="7.5" height="7.5" x="2.75" y="2.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2.5"></svg:rect><svg:rect width="7.5" height="7.5" x="13.75" y="2.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2.5"></svg:rect><svg:rect width="7.5" height="7.5" x="2.75" y="13.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2.5"></svg:rect><svg:rect width="3" height="3" x="5" y="5" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="16" y="5" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="5" y="16" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="13" y="13" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="16" y="16" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="19" y="19" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="19" y="13" fill="currentColor" rx="1.5"></svg:rect><svg:rect width="3" height="3" x="13" y="19" fill="currentColor" rx="1.5"></svg:rect></svg:g>`,
})
export class ProiconsQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
