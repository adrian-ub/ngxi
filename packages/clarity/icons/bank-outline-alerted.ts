import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBankOutlineAlertedIcon],svg[clarity-bank-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26a1 1 0 0 0 1 1h26a1 1 0 0 0 0-2h-3v-7.37h-2V25h-7v-7.37h-2V25h-7v-7.37H8V25H5a1 1 0 0 0-1 1" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M33 29H3a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M22.5 15a3.5 3.5 0 0 1-2.5-1H5v2h26v-1Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="m19.46 9.74l.68-1.17l-1.49-.85a.8.8 0 0 0-.8 0l-6.72 3.86h3.21l3.9-2.24l1.1.63c.05-.08.08-.16.12-.23" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></svg:path><svg:path fill="currentColor" d="M22.05 5.25L18 2.92L2.5 11.83a1 1 0 1 0 1 1.73L18 5.23L21.05 7Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBankOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
